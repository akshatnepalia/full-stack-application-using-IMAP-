# 📧 Email Flow Vista

**Email Flow Vista** is a full-stack project that visualizes **email receiving chains** from raw headers and detects the **Email Service Provider (ESP)** type.  
It is built as part of the **LucidGrowth Software Development Engineer Assignment**.

---

## 🚀 Features
- Paste raw **email headers** and get the complete **receiving chain**
- Detect and display **ESP type** (Gmail, Outlook, Yahoo, Zoho, etc.)
- Responsive, modern **frontend (React + TailwindCSS)**
- Robust **backend (NestJS + MongoDB)** with REST APIs
- **Deployed live** with working frontend + backend integration
- **Demo video recording** available

---

## 🛠 Tech Stack
### Frontend
- React.js (Vite)
- TailwindCSS
- Axios (API calls)
- Vercel (deployment)

### Backend
- NestJS
- MongoDB Atlas (Mongoose)
- TypeScript
- Render (deployment)

---
## 📂 Project Structure
email-flow-vista/
│── frontend/ # React + Vite + Tailwind frontend
│ ├── src/
│ │ ├── App.jsx
│ │ ├── main.jsx
│ │ ├── components/
│ │ │ ├── Dashboard.jsx
│ │ │ ├── EmailChain.jsx
│ │ │ ├── ESPTypeBadge.jsx
│ │ │ └── Header.jsx
│ └── tailwind.config.js
│
│── backend/ # NestJS + MongoDB backend
│ ├── src/
│ │ ├── main.ts
│ │ ├── app.module.ts
│ │ ├── email/
│ │ │ ├── email.module.ts
│ │ │ ├── email.controller.ts
│ │ │ ├── email.service.ts
│ │ │ └── schemas/email.schema.ts
│ └── package.json


## 📂 Project Structure
