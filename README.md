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

## 📂 Project Structure
email-flow-vista/
│
├── frontend/ # React.js + TailwindCSS app (Vite)
│ ├── public/ # Static assets (icons, logos, etc.)
│ ├── src/
│ │ ├── components/ # Reusable UI components
│ │ │ ├── Dashboard.jsx # Main dashboard to display email analysis
│ │ │ ├── EmailChain.jsx # Timeline/table for receiving chain
│ │ │ ├── ESPTypeBadge.jsx # Badge to show ESP type visually
│ │ │ └── Header.jsx # Page header/navbar
│ │ ├── pages/ # Page-level components (if routing is added)
│ │ ├── App.jsx # Root application component
│ │ ├── main.jsx # Entry point (renders <App />)
│ │ ├── index.css # Global styles (imports Tailwind)
│ │ └── assets/ # Images / icons
│ ├── tailwind.config.js # TailwindCSS configuration
│ ├── postcss.config.js # PostCSS config for Tailwind
│ ├── vite.config.js # Vite build config
│ └── package.json
│
├── backend/ # NestJS backend app
│ ├── src/
│ │ ├── app.module.ts # Root module
│ │ ├── main.ts # Entry point for NestJS
│ │ ├── email/ # Email module (core logic)
│ │ │ ├── email.module.ts
│ │ │ ├── email.controller.ts # API routes (process email headers)
│ │ │ ├── email.service.ts # Business logic (parse headers, detect ESP)
│ │ │ └── schemas/
│ │ │ └── email.schema.ts # Mongoose schema for storing emails
│ ├── test/ # Unit & e2e tests
│ ├── .env.example # Sample environment variables
│ ├── nest-cli.json # Nest CLI configuration
│ ├── tsconfig.json # TypeScript configuration
│ └── package.json
