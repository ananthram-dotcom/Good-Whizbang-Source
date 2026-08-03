# Good Whizbang - Pre-Construction Smart Office/Home Spaces

**Good Whizbang** is a modern MERN stack web application offering accessible, smart-automated pre-construction home and office spaces specifically designed for seniors and modern buyers.

## Brand Overview
- **Company Name:** Good Whizbang
- **Target Audience:** Seniors & Accessible living enthusiasts (high contrast, 18px+ font size, 48x48px touch targets)
- **Palette:** Sleek base grey (`#1F2937`, `#111827`, `#374151`) with vibrant energetic accents (bright orange `#FF6B00`, crisp cyan `#00F0FF`, warm teal `#0D9488`).

## Architecture Overview
- `/client`: React (Vite) + Tailwind CSS + Framer Motion + Lucide React
- `/server`: Node.js + Express.js + Mongoose (MongoDB Atlas) + Google Gemini AI (`@google/genai`)

## Project Structure
```
Good Whizbang Source/
├── client/          # Vite + React Frontend
├── server/          # Express API Backend
├── .gitignore       # Root Git ignore rules
└── README.md        # Documentation & setup instructions
```

## Quick Start (Local Development)
1. Install dependencies for server and client.
2. Configure `.env` in `/server` with `MONGO_URI` and `GEMINI_API_KEY`.
3. Run backend: `npm run dev` in `/server`
4. Run frontend: `npm run dev` in `/client`
