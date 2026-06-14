document.addEventListener('DOMContentLoaded', function () {
        document.querySelectorAll('.btn-dark-theme').forEach(button => {
            button.addEventListener('click', function () {
                document.body.classList.toggle('dark');
                 const logoHeader = document.querySelector('.header-logo img');
                const logoOffcanvas = document.querySelector('.offcanvas-title img');
                 if (document.body.classList.contains('dark')) {
                    if (logoHeader) logoHeader.src = './assets/app.png';
                    if (logoOffcanvas) logoOffcanvas.src = './assets/app.png';
                } else {
                    if (logoHeader) logoHeader.src = './assets/categories.png';
                    if (logoOffcanvas) logoOffcanvas.src = './assets/categories.png';
                }
            });
        });
         const dropdown = document.querySelector('.header-info .dropdown');
         if (dropdown) {
            dropdown.addEventListener('show.bs.dropdown', function () {
                this.classList.add('show');
            });
             dropdown.addEventListener('hide.bs.dropdown', function () {
                this.classList.remove('show');
            });
        }
         const resources = {
            en: {
                translation: {

                     "servicesOffered": "Services I <span>Offered</span>",
                    "servicesDescription": "I build practical software solutions with a strong focus on backend engineering, system architecture, clean code, cloud deployment, and modern frontend development.",

                     "faqTitle1": "Who am I as a developer?",
                    "faqAnswer1": "I am a software developer focused on backend engineering, system design, and cloud-ready application architecture. My main technology stack includes C#, ASP.NET Core, SQL Server, React, Docker, and cloud infrastructure. I enjoy building real-world systems with clean structure, maintainable code, and production-oriented practices.",
                     "faqTitle2": "What is my main technology stack?",
                    "faqAnswer2": "My current stack is centered around .NET backend development with ASP.NET Core, C#, SQL Server, ADO.NET/Dapper-style data access, Clean Architecture, RESTful APIs, authentication, authorization, Redis, RabbitMQ, Docker, and CI/CD. On the frontend side, I work with React, TypeScript, Vite, Ant Design, and I am also expanding toward Next.js for public-facing web applications.",
                     "faqTitle3": "What kind of backend systems do I build?",
                    "faqAnswer3": "I build backend systems that focus on authentication, role-based authorization, content management, audit logging, media handling, notifications, and interaction features such as views, likes, comments, and moderation. I care about clear module boundaries, transaction consistency, error handling, scalability, and maintainable service design.",
                     "faqTitle4": "What is Clean Architecture and why do I use it?",
                    "faqAnswer4": "Clean Architecture is a way of organizing software so that business logic is separated from frameworks, databases, and external services. I use it to make applications easier to maintain, test, extend, and refactor. In my projects, I separate responsibilities into layers such as Domain, Application, Infrastructure, and API.",
                     "faqTitle5": "What is my approach to Modular Monolith and Microservices?",
                    "faqAnswer5": "I prefer building a strong Modular Monolith first, with clear boundaries between modules such as Identity, Content, Media, SEO, Reading, Interaction, Notification, and Audit. After the core system is stable, selected modules can be extracted into microservices for learning, scaling, or independent deployment. This approach helps me balance software quality, learning depth, and practical delivery.",
                     "faqTitle6": "What DevOps and Cloud skills am I developing?",
                    "faqAnswer6": "I am developing practical DevOps and cloud skills through Docker, Docker Compose, Linux servers, Nginx reverse proxy, HTTPS with SSL certificates, CI/CD pipelines, container image tagging, registry publishing, and deployment to cloud virtual machines. My long-term direction is to become stronger in Cloud, DevSecOps, and cloud security engineering.",
                     "faqTitle7": "What is the difference between HTTP and HTTPS?",
                    "faqAnswer7": "HTTP is used for communication between a client and a server, but the data is transferred in plain text. HTTPS adds encryption through TLS, protecting data from being intercepted or modified. In production systems, HTTPS is essential for security, authentication, user trust, and safe API communication.",
                     "faqTitle8": "What is a RESTful API?",
                    "faqAnswer8": "A RESTful API is an architectural style for designing web APIs using HTTP methods such as GET, POST, PUT, PATCH, and DELETE. I use REST APIs to connect frontend applications with backend services, while keeping endpoints clear, predictable, stateless, and easy to consume.",
                     "faqTitle9": "What frontend technologies do I use?",
                    "faqAnswer9": "I use React, TypeScript, Vite, React Router, React Query, Ant Design, and modern frontend architecture to build admin dashboards and management systems. I am also learning Next.js to build public websites with better routing, rendering strategies, SEO support, and production readiness.",
                     "faqTitle10": "What is my long-term direction?",
                    "faqAnswer10": "My long-term direction is to become a strong software engineer with deep knowledge in backend development, cloud infrastructure, security, distributed systems, and system architecture. I want to build systems that are not only functional, but also reliable, maintainable, secure, and ready for real-world production environments."
                }
            },
             vi: {
                translation: {

                     "servicesOffered": "Dịch Vụ Tôi <span>Cung Cấp</span>",
                    "servicesDescription": "Tôi xây dựng các giải pháp phần mềm thực tế, tập trung vào backend engineering, kiến trúc hệ thống, clean code, triển khai cloud và phát triển frontend hiện đại.",

                     "faqTitle1": "Tôi là ai với vai trò lập trình viên?",
                    "faqAnswer1": "Tôi là một lập trình viên tập trung vào backend engineering, thiết kế hệ thống và kiến trúc ứng dụng sẵn sàng triển khai trên cloud. Công nghệ chính của tôi bao gồm C#, ASP.NET Core, SQL Server, React, Docker và hạ tầng cloud. Tôi thích xây dựng các hệ thống thực tế có cấu trúc rõ ràng, dễ bảo trì và theo định hướng production.",
                     "faqTitle2": "Công nghệ chính của tôi là gì?",
                    "faqAnswer2": "Stack hiện tại của tôi tập trung vào backend .NET với ASP.NET Core, C#, SQL Server, ADO.NET/Dapper-style data access, Clean Architecture, RESTful APIs, authentication, authorization, Redis, RabbitMQ, Docker và CI/CD. Ở frontend, tôi làm việc với React, TypeScript, Vite, Ant Design và đang mở rộng sang Next.js cho các website public-facing.",
                     "faqTitle3": "Tôi xây dựng những hệ thống backend như thế nào?",
                    "faqAnswer3": "Tôi xây dựng các hệ thống backend tập trung vào xác thực, phân quyền theo vai trò, quản lý nội dung, audit logging, xử lý media, notification và các tính năng tương tác như lượt xem, lượt thích, bình luận và moderation. Tôi quan tâm đến ranh giới module rõ ràng, tính nhất quán giao dịch, xử lý lỗi, khả năng mở rộng và thiết kế service dễ bảo trì.",
                     "faqTitle4": "Clean Architecture là gì và vì sao tôi sử dụng nó?",
                    "faqAnswer4": "Clean Architecture là cách tổ chức phần mềm giúp tách business logic khỏi framework, database và các dịch vụ bên ngoài. Tôi sử dụng nó để ứng dụng dễ bảo trì, dễ kiểm thử, dễ mở rộng và dễ refactor hơn. Trong các dự án của mình, tôi thường tách trách nhiệm thành các layer như Domain, Application, Infrastructure và API.",
                     "faqTitle5": "Cách tiếp cận của tôi với Modular Monolith và Microservices là gì?",
                    "faqAnswer5": "Tôi ưu tiên xây dựng một Modular Monolith vững chắc trước, với ranh giới rõ ràng giữa các module như Identity, Content, Media, SEO, Reading, Interaction, Notification và Audit. Sau khi hệ thống lõi ổn định, một số module có thể được tách sang microservices để học, mở rộng hoặc triển khai độc lập. Cách tiếp cận này giúp tôi cân bằng giữa chất lượng phần mềm, chiều sâu học tập và khả năng hoàn thiện sản phẩm thực tế.",
                     "faqTitle6": "Tôi đang phát triển kỹ năng DevOps và Cloud nào?",
                    "faqAnswer6": "Tôi đang phát triển kỹ năng DevOps và cloud thông qua Docker, Docker Compose, Linux server, Nginx reverse proxy, HTTPS với SSL certificate, CI/CD pipeline, container image tagging, đẩy image lên registry và triển khai lên cloud virtual machine. Định hướng dài hạn của tôi là phát triển sâu hơn về Cloud, DevSecOps và Cloud Security Engineering.",
                     "faqTitle7": "HTTP và HTTPS khác nhau như thế nào?",
                    "faqAnswer7": "HTTP được dùng để giao tiếp giữa client và server, nhưng dữ liệu được truyền ở dạng plain text. HTTPS bổ sung mã hóa thông qua TLS, giúp bảo vệ dữ liệu khỏi việc bị nghe lén hoặc chỉnh sửa. Trong hệ thống production, HTTPS rất quan trọng cho bảo mật, xác thực, độ tin cậy của người dùng và giao tiếp API an toàn.",
                     "faqTitle8": "RESTful API là gì?",
                    "faqAnswer8": "RESTful API là một phong cách thiết kế web API sử dụng các HTTP methods như GET, POST, PUT, PATCH và DELETE. Tôi sử dụng REST API để kết nối frontend với backend, đồng thời giữ endpoint rõ ràng, dễ đoán, stateless và dễ sử dụng.",
                     "faqTitle9": "Tôi sử dụng những công nghệ frontend nào?",
                    "faqAnswer9": "Tôi sử dụng React, TypeScript, Vite, React Router, React Query, Ant Design và kiến trúc frontend hiện đại để xây dựng admin dashboard và hệ thống quản trị. Tôi cũng đang học Next.js để xây dựng website public với routing tốt hơn, rendering strategy linh hoạt, hỗ trợ SEO và sẵn sàng cho production.",
                     "faqTitle10": "Định hướng dài hạn của tôi là gì?",
                    "faqAnswer10": "Định hướng dài hạn của tôi là trở thành một software engineer vững về backend development, cloud infrastructure, security, distributed systems và system architecture. Tôi muốn xây dựng các hệ thống không chỉ chạy được, mà còn đáng tin cậy, dễ bảo trì, an toàn và sẵn sàng cho môi trường production thực tế."
                }
            }
        };
         const savedLanguage = localStorage.getItem('language') || 'en';
         i18next.init({ lng: savedLanguage, resources: PortfolioCommon.mergeResources(resources) }, function (err, t) {
            updateContent();
        });
         function setHtml(selector, html) {
            const element = document.querySelector(selector);
            if (element) {
                element.innerHTML = html;
            }
        }
         function setText(selector, text) {
            const element = document.querySelector(selector);
            if (element) {
                element.textContent = text;
            }
        }
         function updateFaqItem(headingSelector, collapseSelector, titleKey, answerKey) {
            const button = document.querySelector(`${headingSelector} button`);
            const answer = document.querySelector(`${collapseSelector} .accordion-body p`);
             if (button) {
                const iconWrapper = button.querySelector('.ms-auto');
                 button.innerHTML = `
                    ${i18next.t(titleKey)}
                    ${iconWrapper ? iconWrapper.outerHTML : `
                        <span class="ms-auto d-flex">
                            <span class="icon ms-4" style="display: flex; justify-content: center; align-items: center;">
                                <i class="bi bi-plus icon-plus"></i>
                                <i class="bi bi-dash icon-minus"></i>
                            </span>
                        </span>
                    `}
                `;
            }
             if (answer) {
                answer.textContent = i18next.t(answerKey);
            }
        }
         function updateFaqContent() {
            updateFaqItem('#headingOne', '#collapseOne', 'faqTitle1', 'faqAnswer1');
            updateFaqItem('#headingTwo', '#collapseTwo', 'faqTitle2', 'faqAnswer2');
            updateFaqItem('#headingThree', '#collapseThree', 'faqTitle3', 'faqAnswer3');
            updateFaqItem('#headingFour', '#collapseFour', 'faqTitle4', 'faqAnswer4');
            updateFaqItem('#headingFive', '#collapseFive', 'faqTitle5', 'faqAnswer5');
            updateFaqItem('#headingSix', '#collapseSix', 'faqTitle6', 'faqAnswer6');
            updateFaqItem('#headingSeven', '#collapseSeven', 'faqTitle7', 'faqAnswer7');
            updateFaqItem('#headingEight', '#collapseEight', 'faqTitle8', 'faqAnswer8');
            updateFaqItem('#headingNine', '#collapseNine', 'faqTitle9', 'faqAnswer9');
            updateFaqItem('#headingTen', '#collapseTen', 'faqTitle10', 'faqAnswer10');
        }
         function updateContent() {
            setHtml('.nav-link[href="./index.html"]', `<i class="bi bi-house"></i> ${i18next.t('home')}`);
            setHtml('.nav-link[href="./about.html"]', `<i class="bi bi-person"></i> ${i18next.t('about')}`);
            setHtml('.nav-link[href="/services.html"]', `<i class="bi bi-database"></i> ${i18next.t('services')}`);
            setHtml('.nav-link[href="./work.html"]', `<i class="bi bi-send"></i> ${i18next.t('works')}`);
            setHtml('.nav-link[href="./contact.html"]', `<i class="bi bi-chat-left-text"></i> ${i18next.t('contact')}`);
             setHtml('.header-info a', `${i18next.t('letsTalk')} <i class="bi bi-graph-up-arrow"></i>`);
             setHtml('.card-text', i18next.t('introduction'));
            setHtml('.btn-call', `<i class="bi bi-telephone-outbound"></i> ${i18next.t('bookCall')}`);
            setHtml('.btn-copy', `<i class="bi bi-copy"></i> ${i18next.t('copyEmail')}`);
             setHtml('.header-info .dropdown .btn', `${i18next.t('EN')}<i class="bi bi-chevron-down"></i>`);
             setHtml('.offcanvas-body .nav-link[href="./index.html"]', `<i class="bi bi-house"></i> ${i18next.t('home')}`);
            setHtml('.offcanvas-body .nav-link[href="./about.html"]', `<i class="bi bi-person"></i> ${i18next.t('about')}`);
            setHtml('.offcanvas-body .nav-link[href="./services.html"]', `<i class="bi bi-database"></i> ${i18next.t('services')}`);
            setHtml('.offcanvas-body .nav-link[href="./work.html"]', `<i class="bi bi-send"></i> ${i18next.t('works')}`);
            setHtml('.offcanvas-body .nav-link[href="./contact.html"]', `<i class="bi bi-chat-left-text"></i> ${i18next.t('contact')}`);
             setText('.offcanvas-body .dropdown .btn', i18next.t('changeLanguage'));
            setText('.offcanvas-footer small', i18next.t('changeAppearance'));
            setHtml('.offcanvas-footer a', `${i18next.t('letsTalk')} <i class="bi bi-graph-up-arrow"></i>`);
             const mainTitle = document.querySelector('.main-title');
            if (mainTitle) {
                mainTitle.innerHTML = i18next.t('servicesOffered');
            }
             const cardText = document.querySelector('.top-info-description .card-text');
            if (cardText) {
                cardText.innerHTML = i18next.t('servicesDescription');
            }
             const availableBtn = document.querySelector('.available-btn span');
            if (availableBtn) {
                availableBtn.innerHTML = `<i class="bi bi-circle-fill"></i> ${i18next.t('availableForHire')}`;
            }
             updateFaqContent();
             const sliderItems = document.querySelectorAll('.slider-item a');
             if (sliderItems.length > 0) {
                sliderItems.forEach(item => {
                    item.innerHTML = i18next.t('letsWorkTogether');
                });
            }
        }
         function changeLanguage(lng) {
            i18next.changeLanguage(lng, function (err, t) {
                updateContent();
                localStorage.setItem('language', lng);
            });
        }
         document.querySelectorAll('.dropdown-menu button').forEach(button => {
            button.addEventListener('click', function () {
                const lang = this.textContent.trim().toLowerCase().includes('vietnamese') ? 'vi' : 'en';
                changeLanguage(lang);
            });
        });
         const clipboard = new ClipboardJS('.btn-copy');
         clipboard.on('success', function (e) {
            const copyButton = e.trigger;
            copyButton.innerHTML = 'Copied';
             setTimeout(function () {
                copyButton.innerHTML = `<i class="bi bi-copy"></i> ${i18next.t('copyEmail')}`;
            }, 3000);
        });
         clipboard.on('error', function (e) {
            alert('Failed to copy');
        });
    });
