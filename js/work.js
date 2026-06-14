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

                    "projectsTitle": "Check Out My Latest <span>Projects</span>",
                    "projectsDescription": "I build practical full-stack applications with a strong focus on ASP.NET Core, Clean Architecture, SQL Server, React, Docker, and cloud deployment.",
                    "portfolioTitleCommercialNews": "CommercialNews Website",
                    "portfolioSubtitleCommercialNews": "Next.js, Tailwind CSS, ASP.NET Core API",
                    "portfolioTitleCommercialNewsAdmin": "CommercialNews Admin Dashboard",
                    "portfolioSubtitleCommercialNewsAdmin": "React, TypeScript, Ant Design, ASP.NET Core API",
                    "portfolioTitleAdminDashboard": "Web Admin - Home Page",
                    "portfolioSubtitleAdminDashboard": "HTML5, CSS, Javascript Admin Dashboard",
                    "portfolioTitleHTMLFC": "Web Football - Home Page",
                    "portfolioSubtitleHTMLFC": "HTML FC",
                    "visitSite": "Visit Site"
                }
            },
            vi: {
                translation: {

                    "projectsTitle": "Khám phá <span>những dự án</span> mới nhất của tôi",
                    "projectsDescription": "Tôi xây dựng các ứng dụng full-stack thực tế, tập trung vào ASP.NET Core, Clean Architecture, SQL Server, React, Docker và triển khai cloud.",
                    "portfolioTitleCommercialNews": "Website CommercialNews",
                    "portfolioSubtitleCommercialNews": "Next.js, Tailwind CSS, API ASP.NET Core",
                    "portfolioTitleCommercialNewsAdmin": "Dashboard quản trị CommercialNews",
                    "portfolioSubtitleCommercialNewsAdmin": "React, TypeScript, Ant Design, API ASP.NET Core",
                    "portfolioTitleAdminDashboard": "Trang chủ Web Admin - Home Page",
                    "portfolioSubtitleAdminDashboard": "Phần mềm quản lý với HTML5, CSS, Javascript",
                    "portfolioTitleHTMLFC": "Trang chủ Web HTMLFC - Home Page",
                    "portfolioSubtitleHTMLFC": "HTML FC",
                    "visitSite": "Truy cập trang web"
                }
            }
        };
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
             const sliderItems = document.querySelectorAll('.slider-item a');
             if (sliderItems.length > 0) {
                sliderItems.forEach(item => item.innerHTML = i18next.t('letsWorkTogether'));
            }
            const mainTitle = document.querySelector('.main-title');
            if (mainTitle) {
                mainTitle.innerHTML = i18next.t('projectsTitle');
            }
             // Cập nhật mô tả dịch vụ
            const cardText = document.querySelector('.text .card-text');
            if (cardText) {
                cardText.innerHTML = i18next.t('projectsDescription');
            }
             document.querySelectorAll('.portfolio-item').forEach((item) => {
                const projectKey = item.getAttribute('data-project'); // Lấy key dự án
                  // Cập nhật nút "Visit Site"
                 document.querySelectorAll('.visible-btn a').forEach((btn) => {
                    btn.innerHTML = i18next.t('visitSite') + ` <i class="bi bi-arrow-up-right"></i>`;
                });
                 const title = item.querySelector('.title');
                if (title) {
                    title.textContent = i18next.t(`portfolioTitle${projectKey}`);
                }
                 const subtitle = item.querySelector('.subtitle');
                if (subtitle) {
                    subtitle.textContent = i18next.t(`portfolioSubtitle${projectKey}`);
                }
            });
           }
         const savedLanguage = localStorage.getItem('language') || 'en';
        i18next.init({ lng: savedLanguage, resources: PortfolioCommon.mergeResources(resources) }, function(err, t) {
            updateContent();
        });
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
