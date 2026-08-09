# ⚡ Good Whizbang | Accessible Pre-Construction Smart Office & Living Suites

[![Accessibility](https://img.shields.io/badge/WCAG_2.1-AAA_Compliant-success?style=for-the-badge&logo=accessibility)](https://goodwhizbang.com)
[![React](https://img.shields.io/badge/React-18.2-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.2-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Express.js](https://img.shields.io/badge/Express-4.19-000000?style=for-the-badge&logo=express)](https://expressjs.com/)
[![Google Gemini AI](https://img.shields.io/badge/Google_Gemini-AI_Concierge-8E44AD?style=for-the-badge&logo=google)](https://ai.google.dev/)

**Good Whizbang** is an enterprise-grade, high-converting pre-construction marketplace for senior-accessible smart office and home suites. Designed specifically for active retirees, remote consultants, and multi-generational households, Good Whizbang combines **100% zero-barrier universal architectural standards** with **touchless voice environmental automation**, **auto-tinting electrochromic privacy glass**, **circadian health lighting**, and **solar battery power systems**.

---

## 🌟 Executive Highlights & Innovations

### 1. ♿ WCAG 2.1 AAA Senior Accessibility Toolbar
- **Print Font Size Scaler**: Instant client-side font sizing across 4 levels (`Normal` 100%, `Large` 110%, `XL` 125%, `XXL` 140%).
- **Dyslexic-Friendly Font Mode**: Applies enhanced letter spacing and low-fatigue typography.
- **High-Contrast Theme Engine**: Supports `Standard Dark Mode`, `High-Contrast Ultra-Black Mode`, and `Warm Paper Mode`.
- **Text-to-Speech Audio Assist**: Native browser Web Speech API synthesis reads brand overviews and AI responses aloud for low-vision users.

### 2. 🗺️ SPA Client-Side URL Routing (`react-router-dom`)
- Clean deep linking for every office model:
  - `/` — High-converting Hero Landing Page with live feature demos.
  - `/models` — Pre-Construction Catalog with search bar, price filters, and category toggles.
  - `/models/:slug` — Dedicated Model Spec Page (e.g. `/models/lumina-senior-workpod`).
  - `/customizer` — 3-Step Interactive "Build Your Custom Pod" Wizard.
  - `/calculator` — Interactive Financing & Solar Energy Utility Offset Estimator.
  - `/about` — Brand Story, Architecture Team, and Mission.
  - `/terms` — Terms of Service & Accessible Living Guarantee.

### 3. 🛠️ 3-Step Interactive Pod Configurator Wizard (`/customizer`)
- **Step 1: Office Model Selection**: Pick base floor plan (Lumina, Apex, Solis, Horizon, Haven, Tranquility).
- **Step 2: Senior Accessibility Package**: Choose between Standard Zero-Barrier, Tactile & Voice Automation, or Hydrotherapy Care Suite.
- **Step 3: Solar & Battery Resiliency**: Select standard grid, 5kW solar tiles, or off-grid 72-hour battery backup.
- **Live Price Estimation**: Real-time summary sidebar with customized reservation quote requests.

### 4. 📄 Instant Client-Side PDF Spec Sheet Generator
- Powered by `jspdf` directly in the user's browser with **zero backend PDF latency**.
- Senior buyers and financial advisors can click **"Download PDF Spec Flyer"** on any model page to generate a formatted printable flyer with pricing, single-level specs, and accessibility checklists.

### 5. 📍 Interactive Architectural Blueprint Hotspot Inspector
- Visual floor plan graphics with interactive hotspot pins detailing:
  - 📍 **36" Zero-Lip Sliding Doors**: Extra-wide wheelchair accessible entryways.
  - 📍 **Circadian LED Illumination**: 98+ CRI non-glare lighting to prevent visual fatigue.
  - 📍 **48" Low-Reach Control Array**: Tactile low-reach buttons & voice microphone array.

### 6. 🤖 Google Gemini AI Assistant & In-Chat Action Shortcuts
- Context-aware reactive AI concierge powered by `@google/generative-ai`.
- Embedded in-chat quick action buttons (`Explore Catalog`, `Configure Pod`, `Calculate Financing`) that navigate users directly to requested tools.
- Web Speech synthesis read-aloud support for all assistant replies.

### 7. 🛡️ Backend Security, Rate-Limiting & Lead API
- Express.js API server protected by `express-rate-limit` (100 req/15 min for public API, 40 req/15 min for AI Chat).
- REST API endpoint `/api/reservations` with **MongoDB Atlas Mongoose schema** and **graceful in-memory fallback**.

---

## 🏗️ Technology Architecture

### Frontend Tech Stack
- **Framework:** React 18 + Vite 5 (Lightning-fast SPA compilation)
- **Routing:** `react-router-dom` v6
- **Styling:** Vanilla CSS + Tailwind CSS v3.4 + Framer Motion
- **Icons:** `lucide-react`
- **Document Generation:** `jspdf`

### Backend Tech Stack
- **Runtime:** Node.js + Express.js
- **Database:** MongoDB Atlas + Mongoose ORM (with in-memory fallback)
- **AI Engine:** Google Gemini AI API (`@google/generative-ai`)
- **Security:** `cors` + `express-rate-limit`

---

## 📁 Repository Directory Structure

```
Good Whizbang Source/
├── client/                      # Vite + React Frontend SPA
│   ├── src/
│   │   ├── components/          # Reusable UI Components
│   │   │   ├── Footer.jsx       # Accessible Footer with VIP Newsletter Form
│   │   │   ├── GeminiChatbot.jsx# Slide-out AI Concierge with Action Shortcuts
│   │   │   ├── Header.jsx       # Header with Senior Accessibility Control Bar
│   │   │   ├── Logo.jsx         # SVG Brand Logo
│   │   │   ├── MortgageSavingsCalculator.jsx # Financial Estimator
│   │   │   └── SmartFeatureToggle.jsx # Live Feature Demo
│   │   ├── context/
│   │   │   └── AccessibilityContext.jsx # Font Scaler, Contrast Theme & Speech Provider
│   │   ├── data/
│   │   │   └── catalogData.js   # Centralized Pre-Construction Office Models & Specs
│   │   ├── pages/
│   │   │   ├── AboutPage.jsx    # Leadership & Universal Design Story
│   │   │   ├── CalculatorPage.jsx # Dedicated Financing Page
│   │   │   ├── LandingPage.jsx  # Hero Landing Page
│   │   │   ├── ModelDetailPage.jsx # Model Specs, Gallery, PDF & Blueprint Hotspots
│   │   │   ├── PodCustomizerPage.jsx # 3-Step Configurator Wizard
│   │   │   ├── ProductsPage.jsx # Model Catalog with Search & Filters
│   │   │   └── TermsPage.jsx    # Terms & Accessibility Guarantee
│   │   ├── App.jsx              # Main App Shell & Router Config
│   │   ├── index.css            # Global Tailwind Design System & Tokens
│   │   └── main.jsx             # React DOM Entrypoint
│   ├── package.json
│   └── vite.config.js
│
├── server/                      # Express API Backend
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js            # MongoDB Atlas Connection Setup
│   │   ├── models/
│   │   │   ├── Product.js       # Product Model Schema
│   │   │   └── Reservation.js   # Buyer Lead Reservation Schema
│   │   ├── routes/
│   │   │   ├── chatRoutes.js    # Gemini AI Integration Route
│   │   │   ├── newsletterRoutes.js # Newsletter Subscriber Route
│   │   │   ├── productRoutes.js # Catalog Retrieval API
│   │   │   └── reservationRoutes.js # Lead Submission API
│   │   └── index.js             # Express Server Entrypoint with Rate Limiting
│   ├── .env.example
│   └── package.json
│
└── README.md                    # Platform Documentation
```

---

## 🔌 API Endpoint Documentation

| Method | Endpoint | Description | Rate Limit |
| :--- | :--- | :--- | :--- |
| **GET** | `/api/health` | Service health status check | 100 req / 15 min |
| **GET** | `/api/products` | Retrieve pre-construction office models catalog | 100 req / 15 min |
| **POST** | `/api/reservations` | Submit pre-construction pod inquiry lead | 100 req / 15 min |
| **POST** | `/api/newsletter` | Subscribe to VIP pre-construction updates | 100 req / 15 min |
| **POST** | `/api/chat` | Send prompt to Google Gemini AI Assistant | 40 req / 15 min |

---

## ⚡ Quick Start & Local Development

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### Installation Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/ananthram-dotcom/Good-Whizbang-Source.git
   cd "Good-Whizbang-Source"
   ```

2. **Install Client Dependencies**:
   ```bash
   cd client
   npm install
   ```

3. **Install Server Dependencies**:
   ```bash
   cd ../server
   npm install
   ```

4. **Configure Environment Variables**:
   Create a `.env` file inside `/server`:
   ```env
   PORT=5000
   NODE_ENV=development
   MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/goodwhizbang?retryWrites=true&w=majority
   GEMINI_API_KEY=your_google_ai_studio_gemini_api_key
   ```

5. **Run Development Mode**:
   - Backend Server: `npm run dev` (in `/server`)
   - Frontend Client: `npm run dev` (in `/client`)

6. **Build for Production**:
   ```bash
   cd client
   npm run build
   ```

---

## 🎯 SEO & Senior Accessibility Standards

- **Semantic HTML5:** Uses `<header>`, `<main>`, `<nav>`, `<article>`, `<footer>`, and `<section>` landmarks.
- **Accessible Touch Targets:** Minimum `48x48px` clickable target boundaries.
- **Dynamic Document Titles:** Dynamic page titles updated automatically on route navigation.
- **Contrast Ratios:** Complies with WCAG 2.1 AAA contrast requirements (>7:1 contrast ratio for normal text).
- **Keyboard Navigation:** Full focus ring highlights and `Skip to main content` shortcut link (`#main-content`).

---

## 📄 License & Copyright

© 2026 **Good Whizbang Inc.** All rights reserved. Built for 100% senior accessibility and workplace independence.
