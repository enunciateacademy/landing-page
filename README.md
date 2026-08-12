# Enunciate Academy Landing Page

A high-conversion, trustworthy, mobile-first entrance exam coaching landing page for **Enunciate Academy** (specializing in Sainik School, Navodaya Vidyalaya, and Rashtriya Military Schools entrance coaching).

---

## 🌟 Key Features

- **Mobile-First & Fully Responsive:** Designed for seamless viewing across mobile, tablet, and desktop viewports.
- **Sticky Top Navigation & Mobile Drawer:** Quick call & WhatsApp access with sticky scroll header.
- **Sticky Mobile Bottom Action Bar:** Persistent `CALL NOW | WHATSAPP | JOIN NOW` bar on mobile screens.
- **Interactive Enrollment Lead Modal:** Parents can request callbacks, select target exams (Class 6 / Class 9), and directly connect via WhatsApp.
- **Centralized Data Layer:** Easily edit courses, contact details, testimonials, results, FAQs, and stats from `src/data/*.ts` without touching React JSX code.
- **Trust-First Architecture:** Displays genuine preparation steps, OMR test features, verified result placeholders, and parent assurance checklists.

---

## 📂 Content Management (Easy Editing)

All text, contact numbers, course prices, and testimonials are organized in `src/data/`:

| Data File | Description / What To Edit |
|---|---|
| `src/data/contact.ts` | Academy phone (`9492444498`), WhatsApp number, address & email |
| `src/data/courses.ts` | Course titles, prices (`₹[PRICE]`), subjects, and feature lists |
| `src/data/results.ts` | Student selection records and verified result placeholders |
| `src/data/stats.ts` | Academy numbers (`Students Trained`, `Mock Tests`, etc.) |
| `src/data/testimonials.ts` | Parent feedback & reviews |
| `src/data/faqs.ts` | 10 key parent questions & answers |
| `src/data/studyMaterials.ts` | Book kit details and sample highlights |
| `src/data/faculty.ts` | Teacher profiles & qualifications |
| `src/data/journey.ts` | 5-phase student preparation timeline |

---

## 🛠️ Local Development Setup

### 1. Clone & Install Dependencies
```bash
git clone https://github.com/your-username/enunciate-academy.git
cd enunciate-academy
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```

---

## 🚀 GitHub Pages Deployment Guide

This project is pre-configured with `base: './'` in `vite.config.ts` for instant GitHub Pages compatibility.

### Option A: Automatic Deployment using GitHub Actions (Recommended)

1. Push your repository to GitHub.
2. In your repository settings on GitHub, navigate to **Settings** > **Pages**.
3. Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. Create a file `.github/workflows/deploy.yml` in your project with:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Install Dependencies
        run: npm ci

      - name: Build Project
        run: npm run build

      - name: Upload Artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

      - name: Deploy to GitHub Pages
        uses: actions/deploy-pages@v4
```

---

### Option B: Manual `gh-pages` Branch Deployment

1. Install `gh-pages` as a dev dependency:
```bash
npm install -D gh-pages
```

2. Add these scripts to `package.json`:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

3. Run deploy command:
```bash
npm run deploy
```

---

## 📞 Primary Contact Info

- **Academy Phone:** `9492444498`
- **WhatsApp:** `9492444498`
- **Email:** `enunciateacademy@gmail.com`
