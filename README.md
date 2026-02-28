# 🛡️ Pratima Security Services - Digital Portal

Welcome to the official digital portal of **Pratima Security Services (Elite Protection)**. This is a high-performance, production-ready web application built with **Next.js 15**, designed to manage security service listings, facility management solutions, and a dynamic career recruitment system.



---

## 🚀 Key Features

### 1. **Dynamic Job Board & Recruitment**
- **Category Filtering**: Seamlessly switch between Operations, HR, Sales, and Compliance.
- **Smart Validation**: Real-time experience check (e.g., if a role requires 3 years, the form validates user input).
- **Comprehensive Form**: Includes fields for **Current Position**, **Current Company**, **Notice Period**, **CTC**, and **Resume Upload**.
- **Success States**: Animated feedback upon successful application submission.

### 2. **Elite Navigation System**
- **Active State Indicators**: Highlighting the current page with blue accents and dot indicators.
- **Nested Dropdowns**: Managed 'Our Services' menu for Security, Facility, and Personal Guarding.
- **Global Drawer**: A premium right-side navigation drawer for mobile and desktop focus.

### 3. **Modern UI/UX**
- **Design Language**: Ultra-bold (900-1000 weight) typography for a strong, "secure" brand feel.
- **Animations**: Fluid transitions using `framer-motion` for page loads and modal interactions.
- **Responsive**: Fully optimized for mobile, tablet, and desktop screens.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **Next.js 15 (App Router)** | Core Framework & Routing |
| **Tailwind CSS** | Utility-first Styling & Layout |
| **Framer Motion** | Premium UI Animations |
| **Material UI (MUI)** | Drawer, Icons, and Form Components |
| **Lucide React** | Minimalist Vector Icons |
| **TypeScript** | Type Safety & Developer Experience |

---

## 📁 Project Structure

```text
├── app/
│   ├── careers/          # Job Listings & Application Form
│   ├── services/         # Security & Facility Management Pages
│   ├── about/            # Company History & Vision
│   ├── contact/          # Lead Gen & Inquiry Form
│   ├── layout.tsx        # Global Navbar, Footer & Providers
│   └── page.tsx          # Hero Section & Service Highlights
├── components/
│   ├── Navbar.tsx        # Active-link aware Navigation
│   ├── JobBoard.tsx      # Recruitment Engine
│   └── Shared/           # Buttons, Inputs, and Modal Wrappers
└── public/               # Logos and Branding Assets



