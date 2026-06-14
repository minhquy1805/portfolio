document.addEventListener('DOMContentLoaded', function() {
        const swiper = new Swiper('.client-feedback-slider', {
            slidesPerView: 2,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: '.next',
                prevEl: '.preV',
            },
            breakpoints: {
                200:{
                    slidesPerView: 1,
                },
                 640: {
                    slidesPerView: 1,
                },
                1024: {
                    slidesPerView: 2,
                },
            },
        });
        const swiper1 = new Swiper('.article-publications-main', {
            slidesPerView: 2,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: '.next-projects',
                prevEl: '.preV-projects',
            },
            breakpoints: {
                200:{
                    slidesPerView: 1,
                },
                640: {
                    slidesPerView: 1,
                },
                1024: {
                    slidesPerView: 2,
                },
            },
        })
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
         // Lắng nghe sự kiện khi mở dropdown
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

                    "greeting": "Hi, I'm",
                "fullName": "Nguyen Minh Quy",
                "description": "As a software developer focused on backend engineering, system design, and cloud-ready application architecture, I build real-world projects with .NET, React, Docker, SQL Server, and cloud infrastructure. I am looking for an environment where I can grow deeply, contribute practically, and build a long-term career in software engineering.",

                "yearsExperience": "Year of Experience",
                "projectsCompleted": "Project Completed",
                "happyClients": "Happy Client",
                "workingWith": "Working With 6+ programming Language and Tools ✨ in VietNam",
                "trustedByClients": "Trusted By 5+ Clients",
                "feedback1": "A production-style admin dashboard built with React, TypeScript and Ant Design, integrated with a .NET 8 backend API for managing users, articles, media, SEO and moderation.",
                "feedback2": "A public news website built with Next.js and Tailwind CSS, designed for article reading, category browsing and a clean user experience across desktop and mobile devices.",
                "feedback3": "A full-stack news platform using ASP.NET Core Web API, SQL Server, Clean Architecture, JWT authentication, RBAC, Docker, RabbitMQ background processing and cloud deployment.",
                "educationRecognitions": "Education and Recognitions",
                "projectsAndReward": "Projects And Reward",
                "projectTitle1": "CommercialNews Admin Dashboard",
                "projectTitle2": "CommercialNews Public Website",
                "projectTag": "Full-stack Project",
                "projectStack1": "React, TypeScript, Ant Design",
                "projectStack2": "Next.js, Tailwind CSS",
                "projectDate": "2025-2026"
            }
        },
        vi: {
            translation: {

                    "greeting": "Xin chào, tôi là",
                "fullName": "Nguyễn Minh Quý",
                "description": "Là một lập trình viên tập trung vào backend engineering, thiết kế hệ thống và kiến trúc ứng dụng sẵn sàng triển khai trên cloud, tôi xây dựng các dự án thực tế với .NET, React, Docker, SQL Server và hạ tầng cloud. Tôi đang tìm kiếm một môi trường để phát triển chuyên sâu, đóng góp thực tế và xây dựng sự nghiệp lâu dài trong ngành phần mềm.",

                "yearsExperience": "Năm kinh nghiệm",
                "projectsCompleted": "Dự án hoàn thành",
                "happyClients": "Khách hàng hài lòng",
                "workingWith": "Làm việc với 6+ ngôn ngữ lập trình và công cụ ✨ tại Việt Nam",
                "trustedByClients": "Được tin tưởng bởi hơn 5 khách hàng",
                "feedback1": "Dashboard quản trị theo định hướng production được xây dựng bằng React, TypeScript và Ant Design, tích hợp API backend .NET 8 để quản lý người dùng, bài viết, media, SEO và kiểm duyệt.",
                "feedback2": "Website tin tức công khai được xây dựng bằng Next.js và Tailwind CSS, phục vụ đọc bài viết, duyệt chuyên mục và mang lại trải nghiệm rõ ràng trên desktop lẫn thiết bị di động.",
                "feedback3": "Nền tảng tin tức full-stack sử dụng ASP.NET Core Web API, SQL Server, Clean Architecture, xác thực JWT, RBAC, Docker, xử lý nền với RabbitMQ và triển khai cloud.",
                "educationRecognitions": "Giáo dục và Thành tựu",
                "projectsAndReward": "Dự án và Giải thưởng",
                "projectTitle1": "Dashboard quản trị CommercialNews",
                "projectTitle2": "Website công khai CommercialNews",
                "projectTag": "Dự án full-stack",
                "projectStack1": "React, TypeScript, Ant Design",
                "projectStack2": "Next.js, Tailwind CSS",
                "projectDate": "2025-2026"
            }
        }
    };
     const savedLanguage = localStorage.getItem('language') || 'en';
        i18next.init({ lng: savedLanguage, resources: PortfolioCommon.mergeResources(resources) }, function(err, t) {
            updateContent();
        });
     function updateContent() {
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
         const greetingText = document.querySelector('.main-title');
        const nameText = document.querySelector('.main-title span');
        const descriptionText = document.querySelector('.content-box-area .top-info-description .card-text');
        const availableText = document.querySelector('.available-btn span');
        if (greetingText && nameText && descriptionText && availableText) {
            greetingText.childNodes[0].textContent = i18next.t('greeting') + ' ';
            nameText.textContent = i18next.t('fullName');
            descriptionText.innerHTML = i18next.t('description');
            availableText.innerHTML = `<i class="bi bi-circle-fill"></i> ` + i18next.t('availableForHire');
        }
         const counters = document.querySelectorAll('.counter-item .subtitle');
         if (counters.length > 0) {
            counters[0].textContent = i18next.t('yearsExperience');
            counters[1].textContent = i18next.t('projectsCompleted');
            counters[2].textContent = i18next.t('happyClients');
        }
         const workingWithTitle = document.querySelector('.working-with-area .main-common-title');
         if (workingWithTitle) {
            workingWithTitle.textContent = i18next.t('workingWith');
        }
          const feedbackItems = document.querySelectorAll('.feedback-item .details p');
        feedbackItems.forEach((feedback, index) => {
            feedback.textContent = i18next.t(`feedback${(index % 3) + 1}`);
        });

        const feedbackDesignations = document.querySelectorAll('.feedback-item .designation');
        feedbackDesignations.forEach(designation => {
            designation.innerHTML = '<span>Nguyen Minh Quy</span>';
        });
         const mainTitle = document.querySelector('.awards-recognitions .main-common-title');
        if (mainTitle) {
            mainTitle.textContent = i18next.t('educationRecognitions');
        }
          const mainTitleProject = document.querySelector('.title-article .main-common-title');
        if (mainTitleProject) {
            mainTitleProject.textContent = i18next.t('projectsAndReward');
        }
         const trustedByClients = document.querySelector('.client-feedback .client-title .main-common-title');
        if(trustedByClients){
            trustedByClients.textContent = i18next.t('trustedByClients');
        }
          const articleTitles = document.querySelectorAll('.article-publications-item .title');
        const developerTags = document.querySelectorAll('.article-publications-item .tags');
        const weeksCode = document.querySelectorAll('.article-publications-item ul li:nth-child(1)');
        const dates = document.querySelectorAll('.article-publications-item ul li:nth-child(2)');
        articleTitles.forEach((title, index) => {
            title.textContent = i18next.t(`projectTitle${(index % 2) + 1}`);
        });
        developerTags.forEach(tag => {
            tag.textContent = i18next.t('projectTag');
        });
        weeksCode.forEach((stack, index) => {
            stack.textContent = i18next.t(`projectStack${(index % 2) + 1}`);
        });
        dates.forEach(date => {
            date.textContent = i18next.t('projectDate');
        });
           const sliderItems = document.querySelectorAll('.slider-item a');
         if (sliderItems.length > 0) {
            sliderItems.forEach(item => item.innerHTML = i18next.t('letsWorkTogether'));
        }
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
