document.addEventListener('DOMContentLoaded', function() {

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
              "home": "Home",
              "about": "About",
              "services": "Services",
              "works": "Works",
              "contact": "Contact",
              "letsTalk": "Let's Talk",
              "introduction": "As a fresh graduate passionate about technology, I have completed various full-stack and DevOps projects, gaining valuable experience. I'm seeking a dynamic environment to grow my skills and build a lasting career.",
              "bookCall": "Book A Call",
              "copyEmail": "Copy Email",
              "workExperience": "Work Experience",
              "azureTitle": "Azure",
              "azureSubtitle": "Exploring and deploying projects on Azure",
              "dockerTitle": "Docker",
              "dockerSubtitle": "Understanding container and Docker Image",
              "htmlTitle": "HTML 5",
              "htmlSubtitle": "Building several websites for businesses",
              "cssTitle": "CSS",
              "cssSubtitle": "Responsive websites using Bootstrap and CSS",
              "jsTitle": "Javascript",
              "jsSubtitle": "Understanding deeply advanced Javascript",
              "reactTitle": "React",
              "reactSubtitle": "Understanding React essentials: Components, JSX, State, Redux ...",
              "nodeTitle": "Node",
              "nodeSubtitle": "Building several projects with Expressjs",
              "csharpTitle": "C#",
              "csharpSubtitle": "Using ASP.NET Core and N-layer architecture",
              "expertArea": "My Expert Area",
              "recentProjects": "Recent Projects",
              "allProjects": "All Projects",
              "workExperience": "Work Experience",
              "servicesOffered": "Services I Offered",
              "seeAllServices": "See All Services",
              "webDeveloper": "Web Developer",
              "linxDeveloper": "Linux",
              "devOpsDeveloper": "DevOps Developer",
              "uiUxDeveloper": "UI UX Developer",
              "availableForHire": "Available For Hire 🚀 Developer Experiences 👨‍💻 in VietNam",
              "lets": "Let's",
              "workTogether": "Work Together",
              "letsTalk": "Let's Talk",
              "EN": "EN",
              "changeLanguage": "Change languages",
              "changeAppearance": "Change appearance",
          }
        },
        vi: {
          translation: {
              "home": "Trang chủ",
              "about": "Giới thiệu",
              "services": "Dịch vụ",
              "works": "Công việc",
              "contact": "Liên hệ",
              "letsTalk": "Hãy nói chuyện",
              "introduction": "Là một sinh viên mới tốt nghiệp đam mê công nghệ, tôi đã hoàn thành nhiều dự án full-stack và DevOps, tích lũy được nhiều kinh nghiệm quý báu. Tôi đang tìm kiếm một môi trường năng động để phát triển kỹ năng và xây dựng sự nghiệp lâu dài.",
              "bookCall": "Đặt lịch gọi",
              "copyEmail": "Sao chép Email",
              "workExperience": "Kinh nghiệm làm việc",
              "azureTitle": "Azure",
              "azureSubtitle": "Khám phá và triển khai các dự án trên Azure",
              "dockerTitle": "Docker",
              "dockerSubtitle": "Understanding container and Docker Image",
              "htmlTitle": "HTML 5",
              "htmlSubtitle": "Xây dựng nhiều trang web cho doanh nghiệp",
              "cssTitle": "CSS",
              "cssSubtitle": "Các trang web đáp ứng sử dụng Bootstrap và CSS",
              "jsTitle": "Javascript",
              "jsSubtitle": "Hiểu Javascript nâng cao sâu sắc",
              "reactTitle": "React",
              "reactSubtitle": "Hiểu những điều cơ bản về React: Component, JSX, State, Redux ...",
              "nodeTitle": "Node",
              "nodeSubtitle": "Xây dựng nhiều dự án với Expressjs",
              "csharpTitle": "C#",
              "csharpSubtitle": "Sử dụng ASP.NET Core và kiến ​​trúc N-layer",
              "expertArea": "Lĩnh Vực Chuyên Môn Của Tôi",
              "recentProjects": "Dự Án Gần Đây",
              "allProjects": "Tất Cả Dự Án",
              "workExperience": "Kinh Nghiệm Làm Việc",
              "servicesOffered": "Các Dịch Vụ Tôi Cung Cấp",
              "seeAllServices": "Xem Tất Cả Các Dịch Vụ",
              "webDeveloper": "Lập trình viên Web",
              "linxDeveloper": "Linux",
              "devOpsDeveloper": "Lập trình viên DevOps",
              "uiUxDeveloper": "Lập trình viên UI UX",
              "availableForHire": "Sẵn sàng làm việc 🚀 Kinh nghiệm lập trình viên 👨‍💻 tại Việt Nam",
              "lets": "Hãy",
              "workTogether": "Làm Việc Cùng Nhau",
              "letsTalk": "Hãy Trò Chuyện",
              "EN": "VN",
              "changeLanguage": "Thay đổi ngôn ngữ",
              "changeAppearance": "Thay đổi giao diện",
          }
        }
      };
  
    const savedLanguage = localStorage.getItem('language') || 'en';
    i18next.init({ lng: savedLanguage, resources }, function(err, t) {
        updateContent();
    });

  
      function updateContent() {
        document.querySelector('.nav-link.active').innerHTML = `<i class="bi bi-house"></i> ` + i18next.t('home');
        document.querySelector('.nav-link[href="./about.html"]').innerHTML = `<i class="bi bi-person"></i> ` + i18next.t('about');
        document.querySelector('.nav-link[href="/services.html"]').innerHTML = `<i class="bi bi-database"></i> ` + i18next.t('services');
        document.querySelector('.nav-link[href="./work.html"]').innerHTML = `<i class="bi bi-send"></i> ` + i18next.t('works');
        document.querySelector('.nav-link[href="./contact.html"]').innerHTML = `<i class="bi bi-chat-left-text"></i> ` + i18next.t('contact');
        document.querySelector('.header-info a').innerHTML = i18next.t('letsTalk') + `<i class="bi bi-graph-up-arrow"></i>`;

        document.querySelector('.card-text').innerHTML = i18next.t('introduction');
        document.querySelector('.btn-call').innerHTML = `<i class="bi bi-telephone-outbound"></i> ` + i18next.t('bookCall');
        document.querySelector('.btn-copy').innerHTML = `<i class="bi bi-copy"></i> ` + i18next.t('copyEmail');

        document.querySelector('.expertise-card .card-title').innerHTML = i18next.t('expertArea');
        document.querySelector('.card-projects .card-title').firstChild.textContent = i18next.t('recentProjects');
    
        // Cập nhật phần Tất cả dự án
        document.querySelector('.card-projects .link-btn').innerHTML = i18next.t('allProjects') + ' <i class="bi bi-arrow-right"></i>';
        document.querySelector('.header-info .dropdown .btn').innerHTML = i18next.t('EN') + '<i class="bi bi-chevron-down"></i>'
        
        document.querySelector('.offcanvas-body .nav-link.active').innerHTML = `<i class="bi bi-house"></i> ` + i18next.t('home');
        document.querySelector('.offcanvas-body .nav-link[href="./about.html"]').innerHTML = `<i class="bi bi-person"></i> ` + i18next.t('about');
        document.querySelector('.offcanvas-body .nav-link[href="./services.html"]').innerHTML = `<i class="bi bi-database"></i> ` + i18next.t('services');
        document.querySelector('.offcanvas-body .nav-link[href="./work.html"]').innerHTML = `<i class="bi bi-send"></i> ` + i18next.t('works');
        document.querySelector('.offcanvas-body .nav-link[href="./contact.html"]').innerHTML = `<i class="bi bi-chat-left-text"></i> ` + i18next.t('contact');


        // Cập nhật nội dung nút Change Language và Change Appearance
        document.querySelector('.offcanvas-body .dropdown .btn').textContent = i18next.t('changeLanguage');
        document.querySelector('.offcanvas-footer small').textContent = i18next.t('changeAppearance');
        document.querySelector('.offcanvas-footer a').innerHTML = i18next.t('letsTalk') + `<i class="bi bi-graph-up-arrow"></i>`;

        document.querySelector('.work-experience-card .card-title').innerHTML = i18next.t('workExperience');
        document.querySelectorAll('.work-experience-slider li').forEach(function(li, index) {
            if (index === 0) {
                li.querySelector('.title').textContent = i18next.t('azureTitle');
                li.querySelector('.subtitle').textContent = i18next.t('azureSubtitle');
            } else if (index === 1) {
                li.querySelector('.title').textContent = i18next.t('dockerTitle');
                li.querySelector('.subtitle').textContent = i18next.t('dockerSubtitle');
            } else if (index === 2) {
                li.querySelector('.title').textContent = i18next.t('htmlTitle');
                li.querySelector('.subtitle').textContent = i18next.t('htmlSubtitle');
            } else if (index === 3) {
                li.querySelector('.title').textContent = i18next.t('cssTitle');
                li.querySelector('.subtitle').textContent = i18next.t('cssSubtitle');
            } else if (index === 4) {
                li.querySelector('.title').textContent = i18next.t('jsTitle');
                li.querySelector('.subtitle').textContent = i18next.t('jsSubtitle');
            } else if (index === 5) {
                li.querySelector('.title').textContent = i18next.t('reactTitle');
                li.querySelector('.subtitle').textContent = i18next.t('reactSubtitle');
            } else if (index === 6) {
                li.querySelector('.title').textContent = i18next.t('nodeTitle');
                li.querySelector('.subtitle').textContent = i18next.t('nodeSubtitle');
            } else if (index === 7) {
                li.querySelector('.title').textContent = i18next.t('csharpTitle');
                li.querySelector('.subtitle').textContent = i18next.t('csharpSubtitle');
            }
        });
         
        const serviceTitle = document.querySelector('.services-card .card-title');
        const serviceLink = document.querySelector('.services-card .link-btn');
        if (serviceTitle) {
            serviceTitle.firstChild.textContent = i18next.t('servicesOffered');
        }

        if (serviceLink) {
            serviceLink.innerHTML = i18next.t('seeAllServices') + ' <i class="bi bi-arrow-right"></i>';
        }


        const serviceTitles = document.querySelectorAll('.services-item .title');
        if (serviceTitles.length > 0) {
            serviceTitles[0].textContent = i18next.t('webDeveloper');
            serviceTitles[1].textContent = i18next.t('linxDeveloper');
            serviceTitles[2].textContent = i18next.t('devOpsDeveloper');
            serviceTitles[3].textContent = i18next.t('uiUxDeveloper');
        }
  
  
  
        const scrollingInfo = document.querySelector('.scrolling-info .slider-item p');
        if (scrollingInfo) {
            scrollingInfo.textContent = i18next.t('availableForHire');
        }

        // Cập nhật phần "Let's" và "Work Together" trong các thẻ riêng biệt
        const letsText = document.querySelector('.talk-card .card-title');
        const workTogetherText = document.querySelector('.talk-card .card-title .d-block');

        if (letsText) {
            letsText.childNodes[0].textContent = i18next.t('lets');
        }

        if (workTogetherText) {
            workTogetherText.textContent = i18next.t('workTogether');
        }

        // Cập nhật nút "Let's Talk"
        const talkLink = document.querySelector('.talk-card .link-btn');
        if (talkLink) {
            talkLink.innerHTML = `${i18next.t('letsTalk')} <i class="bi bi-arrow-right"></i>`;
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


