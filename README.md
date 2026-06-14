<div align="center">
  <img src="./assets/logo-me.jpg" width="120" alt="Nguyen Minh Quy Portfolio logo">

  # Nguyen Minh Quy Portfolio

  Website portfolio cá nhân giới thiệu thông tin, kỹ năng, dịch vụ, dự án và
  phương thức liên hệ.

  [![Node.js](https://img.shields.io/badge/Node.js-22-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
  [![Express](https://img.shields.io/badge/Express-5-000000?logo=express&logoColor=white)](https://expressjs.com/)
  [![Docker](https://img.shields.io/badge/Docker-ready-2496ED?logo=docker&logoColor=white)](https://www.docker.com/)
  [![License](https://img.shields.io/badge/License-ISC-blue.svg)](./package.json)
</div>

## ✨ Tính năng

- 📱 Giao diện responsive cho desktop, tablet và mobile.
- 🌗 Hỗ trợ chế độ sáng và tối.
- 🌐 Chuyển đổi nội dung giữa tiếng Anh và tiếng Việt.
- 🧭 Các trang giới thiệu, dịch vụ, dự án và liên hệ riêng biệt.
- 🖼️ Slider nội dung và danh sách dự án thực tế.
- 📋 Sao chép nhanh địa chỉ email.
- ✅ Validation form liên hệ ở cả frontend và backend.
- ✉️ Gửi email bằng Express và Nodemailer.
- 🛡️ Giới hạn kích thước request và số lần gọi API contact.
- 🐳 Hỗ trợ build và chạy bằng Docker.

## 🧰 Công nghệ

### Frontend

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap_5-7952B3?logo=bootstrap&logoColor=white)

- HTML5, CSS3 và JavaScript thuần
- Bootstrap 5 và Bootstrap Icons
- i18next
- Clipboard.js
- Swiper
- SweetAlert2

### Backend

![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?logo=express&logoColor=white)
![Nodemailer](https://img.shields.io/badge/Nodemailer-0F9D58?logo=gmail&logoColor=white)

- Node.js và Express
- Nodemailer
- express-rate-limit
- dotenv
- nodemon

## 📁 Cấu trúc dự án

```text
portfolio/
|-- assets/             # Hình ảnh và biểu tượng
|-- css/                # Style dùng chung và từng trang
|-- js/
|   |-- common.js       # Translation dùng chung
|   |-- index.js        # Logic trang chủ
|   |-- about.js        # Logic trang giới thiệu
|   |-- services.js     # Logic trang dịch vụ
|   |-- work.js         # Logic trang dự án
|   `-- contact.js      # Validation và gửi form liên hệ
|-- server/
|   `-- server.js       # Express server và API contact
|-- .dockerignore
|-- .env.example
|-- Dockerfile
|-- package.json
|-- index.html
|-- about.html
|-- services.html
|-- work.html
|-- contact.html
`-- README.md
```

## 🚀 Cài đặt

Yêu cầu:

- Node.js 22 được khuyến nghị
- npm

```bash
git clone https://github.com/minhquy1805/portfolio.git
cd portfolio
npm install
```

Tạo file `.env` từ `.env.example`:

```bash
cp .env.example .env
```

Cập nhật thông tin trong `.env`:

```env
PORT=3001
PORTFOLIO_SMTP_USER=your_email@gmail.com
PORTFOLIO_SMTP_PASS=your_app_password
PORTFOLIO_CONTACT_EMAIL_TO=your_email@gmail.com
```

`PORTFOLIO_SMTP_PASS` phải là Gmail App Password, không phải mật khẩu Gmail
thông thường. Tài khoản Gmail cần bật xác minh hai bước trước khi tạo App
Password.

> [!IMPORTANT]
> Không commit file `.env` hoặc thông tin đăng nhập email lên Git.

## ▶️ Chạy dự án

Chế độ development:

```bash
npm run dev
```

Chế độ thông thường:

```bash
npm start
```

Truy cập [http://localhost:3001](http://localhost:3001).

> [!NOTE]
> Website cần được mở qua Express. Live Server không xử lý được
> `POST /api/contact` và sẽ trả về `405 Method Not Allowed`.

## 🐳 Chạy bằng Docker

Build image:

```bash
docker build -t portfolio .
```

Chạy container:

```bash
docker run --name portfolio \
  --env-file .env \
  -p 3001:3001 \
  -d \
  portfolio
```

Truy cập [http://localhost:3001](http://localhost:3001).

Các lệnh quản lý:

```bash
# Xem log
docker logs -f portfolio

# Dừng container
docker stop portfolio

# Khởi động lại container
docker start portfolio

# Xóa container đã dừng
docker rm portfolio
```

File `.env` không được đưa vào Docker image. Các biến nhạy cảm chỉ được truyền
vào container tại thời điểm chạy.

## 📬 API Contact

### Endpoint

```http
POST /api/contact
Content-Type: application/json
```

### Request body

```json
{
  "name": "Nguyen Van A",
  "email": "example@gmail.com",
  "company": "Example Company",
  "inquiryType": "Job Opportunity",
  "subject": "Backend Developer Opportunity",
  "message": "I would like to discuss a job opportunity."
}
```

### Quy tắc validation

| Field | Bắt buộc | Giới hạn |
| --- | :---: | --- |
| `name` | Có | 3-30 ký tự, một dòng |
| `email` | Có | Email hợp lệ, tối đa 254 ký tự |
| `company` | Không | Tối đa 100 ký tự |
| `inquiryType` | Có | Phải thuộc danh sách trên form |
| `subject` | Có | 1-100 ký tự, một dòng |
| `message` | Có | 1-500 ký tự |

### Lớp bảo vệ

- 🧹 Chuẩn hóa chuỗi và escape dữ liệu trước khi tạo email HTML.
- 📦 JSON request body tối đa `20kb`.
- ⏱️ Mỗi địa chỉ IP được gửi tối đa 5 request trong 15 phút.
- 🚫 Từ chối request không sử dụng `Content-Type: application/json`.
- 🔒 Server không công khai header `X-Powered-By`.

API có thể trả về các status code:

| Status | Ý nghĩa |
| :---: | --- |
| `200` | Email đã được gửi |
| `400` | JSON hoặc field không hợp lệ |
| `413` | Request body vượt quá `20kb` |
| `415` | Content type không được hỗ trợ |
| `429` | Vượt quá rate limit |
| `500` | Không thể gửi email hoặc lỗi server |

> [!NOTE]
> Rate limit hiện sử dụng memory store, phù hợp khi chạy một Node process hoặc
> một container. Khi triển khai nhiều instance, nên dùng shared store như Redis.

## 🧩 Quản lý JavaScript

Mỗi trang tải `common.js` trước, sau đó tải file JavaScript riêng:

```html
<script src="./js/common.js"></script>
<script src="./js/index.js"></script>
```

`common.js` chứa translation dùng trên nhiều trang. Translation và hành vi
riêng được đặt trong file tương ứng của từng trang.

## 👤 Tác giả

**Nguyen Minh Quy**

[![GitHub](https://img.shields.io/badge/GitHub-minhquy1805-181717?logo=github)](https://github.com/minhquy1805)
[![Email](https://img.shields.io/badge/Email-minhquy073%40gmail.com-EA4335?logo=gmail&logoColor=white)](mailto:minhquy073@gmail.com)
