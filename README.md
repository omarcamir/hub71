# HUB71

## Project Overview

This project is a production-ready Next.js page that recreates the provided Figma design.
It displays **upcoming and previous sessions** fetched from an external API and includes a **Register Interest form** with proper validation and submission handling.

The implementation focuses on clean architecture, correct API integration, user-friendly UX states (loading, error, empty), responsiveness, and basic SEO best practices.

---

## Tech Stack

- **Next.js @latest (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **next-intl** (English / Arabic with RTL support)
- **React Hook Form + Zod** (form validation)
- **Framer Motion** (subtle animations)
- **lucide-react** (icons)

---

## Features

- Fetch and display Upcoming & Previous Sessions from API
- Global loading state using `loading.tsx`
- Global error handling using `error.tsx`
- Empty states for sessions lists
- Register Interest form with client-side validation
- Responsive design (mobile, tablet, desktop)
- Multi-language support (EN / AR)
- SEO-friendly metadata
- Reusable and scalable component structure

---

## How to Run Locally

1. Install dependencies:
   ```bash
   npm install

2. Create a .env.local file in the root directory:
   ```
    NEXT_PUBLIC_API_BASE=https://hub.trianglemena.xyz/api

3. Run the development server:
   ```
    npm run dev

4. Open the app in your browser:
    http://localhost:3000

---

## Build / Start Commands

- Build the project for production:
    npm run build

- Start the production server:
    npm start

---

## Assumptions / Notes

- Loading and error states are handled at the route level using Next.js App Router conventions.
- Skeleton placeholders and animations can be extended further if required.

---

## Deployed URL

- The application is deployed on Vercel:

