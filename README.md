[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/fcRde9Vj)
# Coinbase Clone - React & Tailwind CSS Assignment

## 📋 Overview

In this assignment, you will build a full clone of the [Coinbase](https://www.coinbase.com/) website using **React.js** and **Tailwind CSS**. This project will help you practice component-based architecture, client-side routing, responsive design, and modern CSS utilities.

---

## 🚀 Getting Started

After accepting this assignment, follow these steps:

### 1. Clone Your Repository

```bash
git clone <your-repository-url>
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

---

### Technical Requirements

- [x] Use **React Router** for client-side navigation
- [x] Use **functional components** with React hooks
- [x] Create **reusable components** (Button, Card, CryptoCard, PriceChart, etc.)
- [x] Use **Tailwind CSS** for all styling (no external CSS frameworks)
- [x] Implement **responsive design** (mobile, tablet, desktop)
- [x] Use **React state management** (`useState`, `useContext` for auth)
- [x] Follow **proper file structure** and naming conventions
- [x] Write **clean, readable code** with clear layout structure

---

### ✅ Implementation Checklist

**Core Pages & Routing**

- [x] Home page with NovaBlock branding, hero, and multiple Coinbase-style sections
- [x] Explore page with market overview, inline price chart, stats, and top movers
- [x] Asset detail page with per-asset stats and price chart
- [x] Learn page with "Crypto questions, answered" layout, popular list, basics cards, and glossary
- [x] Sign in page with full-screen dark layout
- [x] Sign up page with full-screen dark layout and account type selector
- [x] NovaBlock One membership page (Coinbase One-style benefits & pricing)
- [x] NovaBlock Advanced trading page with dark hero and trading UI mock
- [x] 404 catch-all route redirecting back to home

**Navigation & Layout**

- [x] Global navigation bar with links to Home, Explore, Learn, Sign In, and Sign Up
- [x] Footer with NovaBlock branding and external informational links
- [x] Layout logic to hide Navbar and Footer on full-screen routes (Sign In, Sign Up, Advanced)

**Learn Flow Enhancements**

- [x] "Read more" CTA in Home Learn section navigates to `/learn`
- [x] Learn hero: featured visual block + right-side "Popular" list with descriptions
- [x] "Crypto basics" grid with abstract thumbnails, meta (level + time), and descriptive copy
- [x] "What is..." glossary section with chips and context text

**Branding & Visuals**

- [x] Rebranded visible text and hero copy from Coinbase to NovaBlock
- [x] Added multiple abstract "picture" elements (gradients, coins, charts) to match Coinbase feel
- [x] Kept app in a consistent light theme with intentional dark sections only (auth, advanced, some cards)

---

## 📁 Project Structure

```
src/
├── assets/          # Images, icons, and other static files
├── components/      # Reusable React components
│   ├── common/      # Shared components (Button, Card, Input, etc.)
│   ├── layout/      # Layout components (Navbar, Footer, Sidebar)
│   └── crypto/      # Crypto-specific components (CryptoCard, PriceChart)
├── pages/           # Page components
│   ├── Home.jsx
│   ├── Explore.jsx
│   ├── AssetDetail.jsx
│   ├── Learn.jsx
│   ├── SignIn.jsx
│   └── SignUp.jsx
├── data/            # Mock data and constants
├── hooks/           # Custom React hooks (optional)
├── App.jsx          # Main application with routing
├── App.css          # Global styles (if needed)
├── main.jsx         # Application entry point
└── index.css        # Tailwind CSS imports
```

---

## 🎨 Design Reference

Visit [coinbase.com](https://www.coinbase.com/) 

- Overall layout and structure across all pages
- Consistent color scheme and typography
- Navigation flow between pages
- Responsive behavior on all screen sizes
- User interface patterns and interactions

---

## 💡 Helpful Resources

- [React Documentation](https://react.dev/)
- [React Router Documentation](https://reactrouter.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/)
- [Heroicons](https://heroicons.com/) - Free SVG icons
- [reacticons](https://react-icons.github.io/react-icons/) - Free SVG icons

---

## 🌐 Deployment on Netlify

You must deploy your completed project on **Netlify**.
