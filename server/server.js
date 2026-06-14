const path = require("path");
const express = require("express");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;
const rootPath = path.join(__dirname, "..");

app.use(express.json());
app.use(express.static(rootPath));

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD
    }
});

const escapeHtml = (value = "") => String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

app.post("/api/contact", async (req, res) => {
    const {
        name,
        email,
        company,
        inquiryType,
        subject,
        message
    } = req.body;

    if (!name || !email || !inquiryType || !subject || !message) {
        return res.status(400).json({
            message: "Please complete all required fields."
        });
    }

    const contact = {
        name: String(name).trim(),
        email: String(email).trim(),
        company: String(company || "").trim(),
        inquiryType: String(inquiryType).trim(),
        subject: String(subject).trim(),
        message: String(message).trim()
    };

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
            from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_RECEIVER,
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

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
