const path = require("path");
const express = require("express");
const { rateLimit } = require("express-rate-limit");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;
const rootPath = path.join(__dirname, "..");
const CONTACT_BODY_LIMIT = "20kb";
const CONTACT_RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const CONTACT_RATE_LIMIT_MAX = 5;
const INQUIRY_TYPES = new Set([
    "Job Opportunity",
    "Internship Opportunity",
    "Freelance Project",
    "Collaboration",
    "Other"
]);
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const emailUser = process.env.PORTFOLIO_SMTP_USER || process.env.EMAIL_USER;
const emailPassword = process.env.PORTFOLIO_SMTP_PASS || process.env.EMAIL_APP_PASSWORD;
const emailReceiver = process.env.PORTFOLIO_CONTACT_EMAIL_TO || process.env.EMAIL_RECEIVER;

if (!emailUser || !emailPassword || !emailReceiver) {
    throw new Error("Missing required email environment variables.");
}

app.disable("x-powered-by");
app.set("trust proxy", 1);
app.use(express.json({ limit: CONTACT_BODY_LIMIT }));
app.use(express.static(rootPath));

const contactRateLimiter = rateLimit({
    windowMs: CONTACT_RATE_LIMIT_WINDOW_MS,
    limit: CONTACT_RATE_LIMIT_MAX,
    standardHeaders: true,
    legacyHeaders: false,
    message: {
        message: "Too many contact requests. Please try again in 15 minutes."
    }
});

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: emailUser,
        pass: emailPassword
    }
});

const escapeHtml = (value = "") => String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

const validateContact = (body) => {
    const errors = {};

    if (!body || typeof body !== "object" || Array.isArray(body)) {
        return {
            contact: null,
            errors: {
                body: "Request body must be a JSON object."
            }
        };
    }

    const readText = (field, label, minimum, maximum) => {
        const value = body[field];

        if (typeof value !== "string") {
            errors[field] = `${label} must be text.`;
            return "";
        }

        const normalizedValue = value.trim();

        if (!normalizedValue) {
            errors[field] = `${label} is required.`;
        } else if (normalizedValue.length < minimum || normalizedValue.length > maximum) {
            errors[field] = `${label} must be between ${minimum} and ${maximum} characters.`;
        }

        return normalizedValue;
    };

    const name = readText("name", "Name", 3, 30);
    const email = readText("email", "Email", 3, 254).toLowerCase();
    const inquiryType = readText("inquiryType", "Inquiry type", 1, 50);
    const subject = readText("subject", "Subject", 1, 100);
    const message = readText("message", "Message", 1, 500);

    let company = "";
    if (body.company !== undefined && body.company !== null && body.company !== "") {
        if (typeof body.company !== "string") {
            errors.company = "Company must be text.";
        } else {
            company = body.company.trim();

            if (company.length > 100) {
                errors.company = "Company must not exceed 100 characters.";
            }
        }
    }

    if (email && !errors.email && !EMAIL_PATTERN.test(email)) {
        errors.email = "Email address is invalid.";
    }

    if (inquiryType && !errors.inquiryType && !INQUIRY_TYPES.has(inquiryType)) {
        errors.inquiryType = "Inquiry type is invalid.";
    }

    if (/[\r\n]/.test(name)) {
        errors.name = "Name must be on one line.";
    }

    if (/[\r\n]/.test(subject)) {
        errors.subject = "Subject must be on one line.";
    }

    const contact = {
        name,
        email,
        company,
        inquiryType,
        subject,
        message
    };

    return {
        contact,
        errors
    };
};

app.post("/api/contact", contactRateLimiter, async (req, res) => {
    if (!req.is("application/json")) {
        return res.status(415).json({
            message: "Content-Type must be application/json."
        });
    }

    const { contact, errors } = validateContact(req.body);

    if (!contact || Object.keys(errors).length > 0) {
        return res.status(400).json({
            message: "Please correct the invalid fields.",
            errors
        });
    }

    const safeContact = Object.fromEntries(
        Object.entries(contact).map(([key, value]) => [key, escapeHtml(value)])
    );
    const formattedMessage = safeContact.message.replace(/\r?\n/g, "<br>");

    const textContent = [
        "NEW PORTFOLIO CONTACT",
        "",
        `Name: ${contact.name}`,
        `Email: ${contact.email}`,
        `Company: ${contact.company || "Not provided"}`,
        `Inquiry type: ${contact.inquiryType}`,
        `Subject: ${contact.subject}`,
        "",
        "MESSAGE",
        contact.message
    ].join("\n");

    const htmlContent = `
        <!doctype html>
        <html lang="en">
        <body style="margin:0;padding:0;background-color:#f3f5f9;font-family:Arial,sans-serif;color:#172033;">
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#f3f5f9;padding:32px 12px;">
                <tr>
                    <td align="center">
                        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px;background-color:#ffffff;border:1px solid #e5e9f0;border-radius:16px;overflow:hidden;">
                            <tr>
                                <td style="padding:28px 32px;background-color:#4667f2;color:#ffffff;">
                                    <p style="margin:0 0 8px;font-size:12px;font-weight:700;letter-spacing:1.4px;text-transform:uppercase;opacity:0.85;">
                                        Portfolio Contact
                                    </p>
                                    <h1 style="margin:0;font-size:26px;line-height:1.3;font-weight:700;">
                                        New message from ${safeContact.name}
                                    </h1>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding:32px;">
                                    <span style="display:inline-block;margin-bottom:24px;padding:7px 12px;background-color:#eef1ff;color:#4667f2;border-radius:999px;font-size:13px;font-weight:700;">
                                        ${safeContact.inquiryType}
                                    </span>

                                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-bottom:28px;border-collapse:collapse;">
                                        <tr>
                                            <td style="width:120px;padding:10px 0;border-bottom:1px solid #edf0f5;color:#778197;font-size:14px;">Name</td>
                                            <td style="padding:10px 0;border-bottom:1px solid #edf0f5;font-size:14px;font-weight:600;">${safeContact.name}</td>
                                        </tr>
                                        <tr>
                                            <td style="width:120px;padding:10px 0;border-bottom:1px solid #edf0f5;color:#778197;font-size:14px;">Email</td>
                                            <td style="padding:10px 0;border-bottom:1px solid #edf0f5;font-size:14px;font-weight:600;">
                                                <a href="mailto:${safeContact.email}" style="color:#4667f2;text-decoration:none;">${safeContact.email}</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="width:120px;padding:10px 0;border-bottom:1px solid #edf0f5;color:#778197;font-size:14px;">Company</td>
                                            <td style="padding:10px 0;border-bottom:1px solid #edf0f5;font-size:14px;font-weight:600;">${safeContact.company || "Not provided"}</td>
                                        </tr>
                                        <tr>
                                            <td style="width:120px;padding:10px 0;color:#778197;font-size:14px;">Subject</td>
                                            <td style="padding:10px 0;font-size:14px;font-weight:600;">${safeContact.subject}</td>
                                        </tr>
                                    </table>

                                    <p style="margin:0 0 10px;color:#778197;font-size:12px;font-weight:700;letter-spacing:1px;text-transform:uppercase;">
                                        Message
                                    </p>
                                    <div style="padding:20px;background-color:#f7f8fb;border-left:4px solid #4667f2;border-radius:8px;font-size:15px;line-height:1.7;color:#30394d;">
                                        ${formattedMessage}
                                    </div>

                                    <div style="margin-top:28px;">
                                        <a href="mailto:${safeContact.email}?subject=Re%3A%20${encodeURIComponent(contact.subject)}" style="display:inline-block;padding:12px 20px;background-color:#172033;color:#ffffff;text-decoration:none;border-radius:8px;font-size:14px;font-weight:700;">
                                            Reply to ${safeContact.name}
                                        </a>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding:18px 32px;background-color:#f7f8fb;color:#8a93a6;font-size:12px;text-align:center;">
                                    Sent from the contact form on Nguyen Minh Quy's portfolio.
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </body>
        </html>
    `;

    try {
        await transporter.sendMail({
            from: `"Portfolio Contact" <${emailUser}>`,
            to: emailReceiver,
            replyTo: contact.email,
            subject: `[Portfolio] ${contact.subject}`,
            text: textContent,
            html: htmlContent
        });

        return res.status(200).json({
            message: "Email sent successfully."
        });
    } catch (error) {
        console.error("Email error:", error);

        return res.status(500).json({
            message: "Unable to send email."
        });
    }
});

app.use((error, req, res, next) => {
    if (error?.type === "entity.too.large") {
        return res.status(413).json({
            message: `Request body must not exceed ${CONTACT_BODY_LIMIT}.`
        });
    }

    if (error instanceof SyntaxError && error.status === 400 && "body" in error) {
        return res.status(400).json({
            message: "Request body contains invalid JSON."
        });
    }

    console.error("Unhandled server error:", error);

    return res.status(500).json({
        message: "Internal server error."
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
