# Portfolio Project (Next.js)

A modern, minimal, and fully responsive developer portfolio built with **Next.js**, **Tailwind CSS**, **Framer Motion**, and **shadcn/ui**.
Includes animated page transitions, a projects slider, resume/experience tabs, and a production-ready **contact form** that sends emails via **Resend**.

> Live Demo: **(add your deployed URL here)**

---

## ✨ Features

- **Modern UI** built with Tailwind CSS + shadcn/ui components
- **Smooth animations** and page transitions using Framer Motion
- **Projects / Work section** with a Swiper-powered slider
- **Resume section** with tabbed navigation (experience, education, skills)
- **Contact form** with server-side API route and email delivery via Resend
- **Optimized fonts** using `next/font` (JetBrains Mono)
- Built for **live deployment** (Vercel-friendly)

---

## 🧰 Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui (Radix UI primitives)
- **Animation:** Framer Motion
- **Slider:** Swiper
- **Email (Contact Form):** Resend

---

## ✅ Requirements

- **Node.js 20+** (recommended)
  *(Resend’s SDK requires Node >= 20 in this project’s dependency tree.)*

---

## 🚀 Getting Started (Local)

1. **Clone the repo**
   ```bash
   git clone https://github.com/Upnit-b/portfolio.git
   cd upnit-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set environment variables**

   Create a `.env.local` file in the project root:

   ```bash
   RESEND_API_KEY=your_resend_api_key_here
   ```

4. **Run the dev server**
   ```bash
   npm run dev
   ```

Open `http://localhost:3000`

---

## 📬 Contact Form (Resend)

The contact form submits to a Next.js route handler:

- **Endpoint:** `POST /api/contact`
- **File:** `app/api/contact/route.ts`

It validates required fields and then sends an email using Resend.

---

## 🏗️ Production Build

```bash
npm run build
npm run start
```

---

## 🌍 Deployment (Vercel)

1. Push your repo to GitHub
2. Import the project into **Vercel**
3. Add the environment variable:
   - `RESEND_API_KEY`
4. Deploy 🎉

> Any platform that supports Node (and Next.js) works, but Vercel is the smoothest for App Router.

---

## 📁 Project Structure

```txt
portfolio/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # Contact form API endpoint
│   ├── contact/
│   │   └── page.tsx              # Contact page
│   ├── resume/
│   │   └── page.tsx              # Resume/Skills page
│   ├── services/
│   │   └── page.tsx              # Services page
│   ├── work/
│   │   └── page.tsx              # Projects portfolio page
│   ├── layout.tsx                # Root layout with Header
│   ├── page.tsx                  # Home page
│   └── globals.css               # Global styles & Tailwind config
├── components/
│   ├── ui/                       # shadcn/ui components
│   ├── Header.tsx                # Navigation header
│   ├── Photo.tsx                 # Profile photo component
│   ├── Socials.tsx               # Social media links
│   ├── Stats.tsx                 # Animated statistics
│   ├── PageTransition.tsx        # Page transition animations
│   ├── StairTransition.tsx       # Stair transition effect
│   └── WorkSliderBtns.tsx        # Project slider controls
├── public/
│   ├── resume/                   # Resume PDF
│   └── *.jpg                     # Project thumbnails
├── lib/                          # Utility functions
├── package.json
├── tsconfig.json
└── next.config.ts
```

---
