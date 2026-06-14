const PortfolioCommon = (() => {
    const translations = {
        en: {
            home: 'Home',
            about: 'About',
            services: 'Services',
            works: 'Projects',
            contact: 'Contact',
            letsTalk: "Let's Talk",
            introduction: 'As a software developer focused on backend engineering, system design, and cloud-ready application architecture, I build real-world projects with .NET, React, Docker, SQL Server, and cloud infrastructure. I am looking for an environment where I can grow deeply, contribute practically, and build a long-term career in software engineering.',
            bookCall: 'Book A Call',
            copyEmail: 'Copy Email',
            EN: 'EN',
            changeLanguage: 'Change languages',
            changeAppearance: 'Change appearance',
            availableForHire: 'Available For Hire',
            letsWorkTogether: "Let's <span class='wave'>👋</span> Work Together"
        },
        vi: {
            home: 'Trang chủ',
            about: 'Giới thiệu',
            services: 'Dịch vụ',
            works: 'Dự án',
            contact: 'Liên hệ',
            letsTalk: 'Hãy trò chuyện',
            introduction: 'Là một lập trình viên tập trung vào backend engineering, thiết kế hệ thống và kiến trúc ứng dụng sẵn sàng triển khai trên cloud, tôi xây dựng các dự án thực tế với .NET, React, Docker, SQL Server và hạ tầng cloud. Tôi đang tìm kiếm một môi trường để phát triển chuyên sâu, đóng góp thực tế và xây dựng sự nghiệp lâu dài trong ngành phần mềm.',
            bookCall: 'Đặt lịch gọi',
            copyEmail: 'Sao chép Email',
            EN: 'VN',
            changeLanguage: 'Thay đổi ngôn ngữ',
            changeAppearance: 'Thay đổi giao diện',
            availableForHire: 'Sẵn sàng làm việc',
            letsWorkTogether: "Hãy <span class='wave'>👋</span> làm việc cùng nhau"
        }
    };

    function mergeResources(pageResources = {}) {
        return Object.fromEntries(
            ['en', 'vi'].map(language => [
                language,
                {
                    translation: {
                        ...translations[language],
                        ...(pageResources[language]?.translation || {})
                    }
                }
            ])
        );
    }

    return {
        mergeResources
    };
})();
