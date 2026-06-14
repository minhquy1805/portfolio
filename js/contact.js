document.addEventListener('DOMContentLoaded', function(){
         document.querySelectorAll('.btn-dark-theme').forEach(button => {
            button.addEventListener('click', function(){
                // Toggle dark mode
                document.body.classList.toggle('dark');
                 // Lấy cả hai logo trong header và offcanvas-header
                const logoHeader = document.querySelector('.header-logo img');
                const logoOffcanvas = document.querySelector('.offcanvas-title img');
                 // Thay đổi logo cho chế độ dark và light
                if (document.body.classList.contains('dark')) {
                    logoHeader.src = './assets/app.png'; // Logo cho chế độ dark trong header
                    logoOffcanvas.src = './assets/app.png'; // Logo cho chế độ dark trong offcanvas-header
                } else {
                    logoHeader.src = './assets/categories.png'; // Logo cho chế độ light trong header
                    logoOffcanvas.src = './assets/categories.png'; // Logo cho chế độ light trong offcanvas-header
                }
            });
        });
         const dropdown = document.querySelector('.header-info .dropdown');
         dropdown.addEventListener('show.bs.dropdown', function() {
            this.classList.add('show'); // Thêm class 'show' khi dropdown mở
        });
         // Lắng nghe sự kiện khi đóng dropdown
        dropdown.addEventListener('hide.bs.dropdown', function() {
            this.classList.remove('show'); // Gỡ class 'show' khi dropdown đóng
        });
         const resources = {
            en: {
                translation: {

                    "cardText": "Open to backend developer roles, internship opportunities, and meaningful software projects. Feel free to reach out.",
                    "nameLabel": "Name",
                    "namePlaceholder": "Enter your name",
                    "emailLabel": "Email",
                    "emailPlaceholder": "Enter your email",
                    "companyLabel": "Company",
                    "companyPlaceholder": "Company or organization",
                    "inquiryTypeLabel": "Inquiry Type",
                    "inquiryTypePlaceholder": "Select inquiry type",
                    "jobOpportunity": "Job Opportunity",
                    "internshipOpportunity": "Internship Opportunity",
                    "freelanceProject": "Freelance Project",
                    "collaboration": "Collaboration",
                    "other": "Other",
                    "subjectLabel": "Subject",
                    "subjectPlaceholder": "What is this about?",
                    "messageLabel": "Message",
                    "messagePlaceholder": "Tell me a bit about your opportunity, project, or message",
                    "sendMessage": "Send Message <i class='bi bi-send icon'></i>"
                }
            },
            vi:
                {
                   translation: {

                        "cardText": "Bạn đang có dự án, cơ hội thực tập hoặc vị trí phát triển backend phù hợp? Hãy gửi tin nhắn và tôi sẽ phản hồi sớm nhất có thể.",
                        "nameLabel": "Tên",
                        "namePlaceholder": "Nhập tên của bạn",
                        "emailLabel": "Email",
                        "emailPlaceholder": "Nhập email của bạn",
                        "companyLabel": "Công ty",
                        "companyPlaceholder": "Công ty hoặc tổ chức",
                        "inquiryTypeLabel": "Loại liên hệ",
                        "inquiryTypePlaceholder": "Chọn loại liên hệ",
                        "jobOpportunity": "Cơ hội việc làm",
                        "internshipOpportunity": "Cơ hội thực tập",
                        "freelanceProject": "Dự án freelance",
                        "collaboration": "Hợp tác",
                        "other": "Khác",
                        "subjectLabel": "Chủ đề",
                        "subjectPlaceholder": "Nội dung này liên quan đến vấn đề gì?",
                        "messageLabel": "Tin nhắn",
                        "messagePlaceholder": "Hãy chia sẻ thêm về cơ hội, dự án hoặc nội dung bạn muốn trao đổi",
                        "sendMessage": "Gửi tin nhắn <i class='bi bi-send icon'></i>"
                   }
                }
        };
        const savedLanguage = localStorage.getItem('language') || 'en';
        i18next.init({ lng: savedLanguage, resources: PortfolioCommon.mergeResources(resources) }, function(err, t) {
            updateContent();
        });
        function updateContent(){
            document.querySelector('.nav-link[href="./index.html"]').innerHTML = `<i class="bi bi-house"></i> ` + i18next.t('home');
            document.querySelector('.nav-link[href="./about.html"]').innerHTML = `<i class="bi bi-person"></i> ` + i18next.t('about');
            document.querySelector('.nav-link[href="/services.html"]').innerHTML = `<i class="bi bi-database"></i> ` + i18next.t('services');
            document.querySelector('.nav-link[href="./work.html"]').innerHTML = `<i class="bi bi-send"></i> ` + i18next.t('works');
            document.querySelector('.nav-link[href="./contact.html"]').innerHTML = `<i class="bi bi-chat-left-text"></i> ` + i18next.t('contact');
            document.querySelector('.header-info a').innerHTML = i18next.t('letsTalk') + `<i class="bi bi-graph-up-arrow"></i>`;
            document.querySelector('.card-text').innerHTML = i18next.t('introduction');
            document.querySelector('.btn-call').innerHTML = `<i class="bi bi-telephone-outbound"></i> ` + i18next.t('bookCall');
            document.querySelector('.btn-copy').innerHTML = `<i class="bi bi-copy"></i> ` + i18next.t('copyEmail');
            document.querySelector('.header-info .dropdown .btn').innerHTML = i18next.t('EN') + '<i class="bi bi-chevron-down"></i>';
            document.querySelector('.offcanvas-body .nav-link[href="./index.html"]').innerHTML = `<i class="bi bi-house"></i> ` + i18next.t('home');
            document.querySelector('.offcanvas-body .nav-link[href="./about.html"]').innerHTML = `<i class="bi bi-person"></i> ` + i18next.t('about');
            document.querySelector('.offcanvas-body .nav-link[href="./services.html"]').innerHTML = `<i class="bi bi-database"></i> ` + i18next.t('services');
            document.querySelector('.offcanvas-body .nav-link[href="./work.html"]').innerHTML = `<i class="bi bi-send"></i> ` + i18next.t('works');
            document.querySelector('.offcanvas-body .nav-link[href="./contact.html"]').innerHTML = `<i class="bi bi-chat-left-text"></i> ` + i18next.t('contact');
            document.querySelector('.offcanvas-body .dropdown .btn').textContent = i18next.t('changeLanguage');
            document.querySelector('.offcanvas-footer small').textContent = i18next.t('changeAppearance');
            document.querySelector('.offcanvas-footer a').innerHTML = i18next.t('letsTalk') + `<i class="bi bi-graph-up-arrow"></i>`;
            document.querySelector('.main-title').innerHTML = i18next.t('letsWorkTogether');
            document.querySelector('.top-info .card-text').innerHTML = i18next.t('cardText');
             document.querySelector('label[for="name"]').textContent = i18next.t('nameLabel');
            document.querySelector('#name').placeholder = i18next.t('namePlaceholder');
             document.querySelector('label[for="email"]').textContent = i18next.t('emailLabel');
            document.querySelector('#email').placeholder = i18next.t('emailPlaceholder');
            document.querySelector('label[for="company"]').textContent = i18next.t('companyLabel');
            document.querySelector('#company').placeholder = i18next.t('companyPlaceholder');
            document.querySelector('label[for="inquiryType"]').textContent = i18next.t('inquiryTypeLabel');
            const inquiryOptions = document.querySelectorAll('#inquiryType option');
            const inquiryOptionKeys = [
                'inquiryTypePlaceholder',
                'jobOpportunity',
                'internshipOpportunity',
                'freelanceProject',
                'collaboration',
                'other'
            ];
            inquiryOptions.forEach((option, index) => {
                option.textContent = i18next.t(inquiryOptionKeys[index]);
            });
            document.querySelector('label[for="subject"]').textContent = i18next.t('subjectLabel');
            document.querySelector('#subject').placeholder = i18next.t('subjectPlaceholder');
            document.querySelector('label[for="message"]').textContent = i18next.t('messageLabel');
            document.querySelector('#message').placeholder = i18next.t('messagePlaceholder');
            document.querySelector('.submit-btn').innerHTML = i18next.t('sendMessage');
        }
        function changeLanguage(lng) {
            i18next.changeLanguage(lng, function(err, t) {
                updateContent();
                localStorage.setItem('language', lng); // Lưu ngôn ngữ vào localStorage
            });
        }
         document.querySelectorAll('.dropdown-menu button').forEach(button => {
            button.addEventListener('click', function() {
                const lang = this.textContent.trim().toLowerCase().includes('vietnamese') ? 'vi' : 'en';
                changeLanguage(lang);
            });
        });
        var clipboard = new ClipboardJS('.btn-copy');
         // Xử lý sự kiện sau khi sao chép thành công
        clipboard.on('success', function(e) {
            var copyButton = e.trigger; // Nút đã được nhấn
            copyButton.innerHTML = 'Copied'; // Thay đổi nội dung nút
            setTimeout(function() {
                copyButton.innerHTML = '<i class="bi bi-copy"></i> Copy Email'; // Trở lại nội dung gốc sau 3 giây
            }, 3000); // Sau 3 giây, nội dung của nút sẽ trở lại ban đầu
        });
         // Xử lý sự kiện khi sao chép thất bại
        clipboard.on('error', function(e) {
            alert('Failed to copy');
        });
    });
// Lắng nghe sự kiện submit của form
const showSweetAlert = (type, success) => {
    const language = localStorage.getItem('language') || 'en'; // Lấy ngôn ngữ từ localStorage, mặc định là 'en'
    const messages = {
        en: {
            successTitle: 'Sent successfully!',
            successText: 'Your message has been sent.',
            errorTitle: 'Error!',
            errorText: 'Message sending failed, please try again.',
            okButton: 'OK'
        },
        vi: {
            successTitle: 'Gửi thành công!',
            successText: 'Tin nhắn của bạn đã được gửi đi.',
            errorTitle: 'Lỗi!',
            errorText: 'Gửi tin nhắn không thành công, vui lòng thử lại.',
            okButton: 'Đồng ý'
        }
    };
     // Hiển thị SweetAlert dựa trên loại thông báo và ngôn ngữ
    Swal.fire({
        icon: type === 'success' ? 'success' : 'error',
        title: type === 'success' ? messages[language].successTitle : messages[language].errorTitle,
        text: type === 'success' ? messages[language].successText : messages[language].errorText,
        confirmButtonText: messages[language].okButton
    });
};
  document.getElementById('contact-form').addEventListener('submit', async (event) => {
    event.preventDefault();
     // Lấy dữ liệu từ form
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const company = document.getElementById('company').value.trim();
    const inquiryType = document.getElementById('inquiryType').value;
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
     // Đặt mặc định là hợp lệ
    let valid = true;
     // Xóa thông báo lỗi trước đó
    document.querySelectorAll('.text-danger').forEach(el => el.innerHTML = '');
     // Kiểm tra tên
    if (name.length < 3 || name.length > 30) {
        document.getElementById('name').nextElementSibling.innerHTML = 'Tên phải từ 3 đến 30 ký tự.';
        valid = false;
    }
     // Kiểm tra email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('email').nextElementSibling.innerHTML = 'Địa chỉ email không hợp lệ.';
        valid = false;
    }
    if (company.length > 100) {
        document.getElementById('company').nextElementSibling.innerHTML = 'Tên công ty không được vượt quá 100 ký tự.';
        valid = false;
    }
     // Kiểm tra subject
    if (subject.length === 0 || subject.length > 100) {
        document.getElementById('subject').nextElementSibling.innerHTML = 'Chủ đề không được để trống và phải dưới 100 ký tự.';
        valid = false;
    }
    if (!inquiryType) {
        document.getElementById('inquiryType').nextElementSibling.innerHTML = 'Vui lòng chọn loại liên hệ.';
        valid = false;
    }
    if (message.length === 0 || message.length > 500) {
        document.getElementById('message').nextElementSibling.innerHTML = 'Tin nhắn không được để trống và phải dưới 500 ký tự.';
        valid = false;
    }
     if (!valid) return; // Dừng lại nếu có lỗi
     try {
        const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                email,
                company,
                inquiryType,
                subject,
                message
            })
        });
        if (response.ok) {
            showSweetAlert('success'); // Hiển thị thông báo thành công
            document.getElementById('contact-form').reset(); // Xóa dữ liệu form sau khi gửi thành công
        } else {
            showSweetAlert('error'); // Hiển thị thông báo lỗi
        }
    } catch (error) {
        console.error('Error:', error);
        showSweetAlert('error'); // Hiển thị thông báo lỗi
    }
});
