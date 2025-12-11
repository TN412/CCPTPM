# Full-Stack React + Node.js Application

Dự án full-stack với React (frontend) và Node.js Express (backend).

## Cấu trúc thư mục

```
CCPTPM/
├── client/              # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   └── package.json
├── server/              # Node.js Express backend
│   ├── routes/
│   │   └── api.js
│   ├── index.js
│   ├── .env
│   └── package.json
├── package.json         # Root package.json
└── README.md
```

## Cài đặt

### Cài đặt tất cả dependencies:
```bash
npm run install-all
```

Hoặc cài đặt từng phần:
```bash
# Root dependencies
npm install

# Server dependencies
cd server
npm install

# Client dependencies
cd client
npm install
```

## Chạy ứng dụng

### Chạy cả frontend và backend cùng lúc:
```bash
npm run dev
```

### Chạy riêng từng phần:

**Backend (port 5000):**
```bash
npm run server
```

**Frontend (port 3000):**
```bash
npm run client
```

## API Endpoints

- `GET /api` - Welcome message
- `GET /api/health` - Server health check
- `GET /api/data` - Get sample data
- `GET /api/users` - Get users list
- `POST /api/users` - Create new user

## Công nghệ sử dụng

### Frontend:
- React 18
- Axios (HTTP client)
- CSS3

### Backend:
- Node.js
- Express.js
- CORS
- dotenv

### Dev Tools:
- Nodemon (auto-restart server)
- Concurrently (run multiple commands)

## Phát triển

1. Backend server chạy trên port 5000
2. React dev server chạy trên port 3000
3. Proxy được cấu hình để chuyển API requests từ port 3000 → 5000

## Build cho production

```bash
cd client
npm run build
```

Build files sẽ được tạo trong thư mục `client/build/`