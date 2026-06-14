# Portfolio Nguyen Minh Quy

Website portfolio cá nhân giới thiệu thông tin, kỹ năng, dịch vụ, dự án và
phương thức liên hệ của Nguyen Minh Quy.

## Tính năng

- Giao diện responsive cho desktop, tablet và mobile.
- Chế độ sáng/tối.
- Chuyển đổi nội dung giữa tiếng Anh và tiếng Việt.
- Các trang giới thiệu, dịch vụ, dự án và liên hệ riêng biệt.
- Slider nội dung và danh sách dự án thực tế.
- Sao chép nhanh địa chỉ email.
- Kiểm tra dữ liệu form liên hệ ở frontend và backend.
- Gửi email từ form liên hệ bằng Express và Nodemailer.
- Email HTML responsive, hỗ trợ trả lời trực tiếp người gửi.

## Công nghệ

### Frontend

- HTML5
- CSS3
- JavaScript thuần
- Bootstrap 5 và Bootstrap Icons
- i18next
- Clipboard.js
- Swiper
- SweetAlert2

### Backend

- Node.js
- Express
- Nodemailer
- dotenv
- nodemon

## Cấu trúc dự án

```text
portfolio/
|-- assets/             # Hình ảnh và biểu tượng
|-- css/
|   |-- style.css       # Style dùng chung
|   |-- about.css
|   |-- services.css
|   `-- work-experience.css
|-- js/
|   |-- common.js       # Translation dùng chung
|   |-- index.js        # Logic trang chủ
|   |-- about.js        # Logic trang giới thiệu
|   |-- services.js     # Logic trang dịch vụ
|   |-- work.js         # Logic trang dự án
|   `-- contact.js      # Validation và gửi form liên hệ
|-- server/
|   `-- server.js       # Express server và API gửi email
|-- .env.example        # Mẫu biến môi trường
|-- package.json
|-- index.html
|-- about.html
|-- services.html
|-- work.html
|-- contact.html
`-- README.md
```

## Cài đặt

Yêu cầu Node.js và npm đã được cài trên máy.

```bash
git clone https://github.com/minhquy1805/portfolio.git
cd portfolio
npm install
```

Tạo file `.env` từ `.env.example`:

```env
PORT=3000
EMAIL_USER=your_email@gmail.com
EMAIL_APP_PASSWORD=your_app_password
EMAIL_RECEIVER=your_email@gmail.com
```

`EMAIL_APP_PASSWORD` phải là Gmail App Password, không phải mật khẩu Gmail
thông thường. Tài khoản Gmail cần bật xác minh hai bước trước khi tạo App
Password.

Không commit file `.env` lên Git.

## Chạy dự án

Chạy ở chế độ development:

```bash
npm run dev
```

Chạy ở chế độ thông thường:

```bash
npm start
```

Sau đó truy cập:

```text
http://localhost:3000
```

Website cần được mở qua Express thay vì Live Server. Live Server không xử lý
được `POST /api/contact` và sẽ trả về lỗi `405 Method Not Allowed`.

## Form liên hệ

Frontend gửi dữ liệu từ `js/contact.js` tới:

```text
POST /api/contact
```

Express kiểm tra các trường bắt buộc, sau đó Nodemailer gửi một email HTML tới
`EMAIL_RECEIVER`. Email người gửi được đặt trong `replyTo`, giúp trả lời trực
tiếp từ ứng dụng email.

Dữ liệu gửi gồm:

- Tên
- Email
- Công ty hoặc tổ chức
- Loại liên hệ
- Chủ đề
- Nội dung tin nhắn

Thông tin đăng nhập email chỉ được đọc từ biến môi trường. Dữ liệu người dùng
được escape trước khi đưa vào template HTML.

## Quản lý JavaScript

Mỗi trang tải `common.js` trước, sau đó tải file JavaScript riêng:

```html
<script src="./js/common.js"></script>
<script src="./js/index.js"></script>
```

`common.js` chứa các translation được dùng trên nhiều trang. Translation và
hành vi riêng được đặt trong file tương ứng của từng trang.

## Tác giả

**Nguyen Minh Quy**

- GitHub: [minhquy1805](https://github.com/minhquy1805)
- Email: [minhquy073@gmail.com](mailto:minhquy073@gmail.com)
