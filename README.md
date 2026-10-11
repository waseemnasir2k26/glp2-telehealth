# VitalPath - GLP-2 Telehealth Demo

A complete, production-ready telehealth demo website for GLP-2 weight management therapy. Built with Next.js 14, Tailwind CSS, Framer Motion, and TypeScript.

## Status

Last reviewed: October 2026 · release v2026.10

![VitalPath Demo](https://img.shields.io/badge/Demo-Live-green) ![Next.js](https://img.shields.io/badge/Next.js-14-black) ![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)

## Features

### Public Pages
- **Landing Page** - Hero, How It Works, Benefits, Testimonials, Pricing, FAQ, CTA sections
- **About Us** - Company story, mission, and team
- **How It Works** - Step-by-step process explanation
- **GLP-2 Therapy** - Detailed treatment information
- **Contact** - Contact form with business information
- **Assessment** - 6-step patient intake wizard

### Legal Pages
- Privacy Policy
- Terms of Service
- Telehealth Informed Consent
- HIPAA Notice of Privacy Practices

### Patient Portal
- **Login** - Patient authentication
- **Dashboard** - Weight tracking, stats, progress
- **Appointments** - Schedule and manage appointments
- **Messages** - HIPAA-compliant messaging
- **Medications** - Track medications, request refills
- **Records** - Lab results, documents, medical history
- **Settings** - Profile, payment, notifications, privacy

### Super Admin Portal
- **Admin Login** - Secure admin authentication
- **Dashboard** - Revenue charts, patient stats, pending approvals
- **Patients** - Full patient management with search/filter
- **And more** - Providers, billing, analytics (expandable)

## Demo Credentials

### Patient Portal
- Email: `sarah.johnson@email.com`
- Password: `demo123`

### Super Admin Portal
- Email: `admin@vitalpath.com`
- Password: `admin123`

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Plus Jakarta Sans, Instrument Serif

## Design System

### Colors
- **Primary**: `#0D4F4F` (Teal)
- **Accent**: `#C9A84C` (Gold)
- **Background**: `#FAFAF7` (Off-white)
- **Dark**: `#0A1628`

### Typography
- **Display/Headings**: Instrument Serif
- **Body**: Plus Jakarta Sans

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/glp2-telehealth.git

# Navigate to project directory
cd glp2-telehealth

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

### Static Export

```bash
# Build and export as static HTML
npm run build
```

The static files will be in the `out/` directory.

## Project Structure

```
glp2-telehealth/
├── app/                    # Next.js App Router pages
│   ├── admin/             # Super Admin portal
│   ├── portal/            # Patient portal
│   ├── assessment/        # Patient intake wizard
│   └── ...               # Other public pages
├── components/
│   ├── admin/            # Admin-specific components
│   ├── forms/            # Form components
│   ├── landing/          # Landing page sections
│   ├── layout/           # Layout components
│   ├── portal/           # Portal components
│   └── ui/               # Reusable UI components
├── lib/
│   ├── admin-data.ts     # Admin mock data
│   ├── mock-data.ts      # Patient mock data
│   └── utils.ts          # Utility functions
└── public/               # Static assets
```

## Compliance Features

- HIPAA compliance badges and disclaimers
- LegitScript certification placeholders
- State licensing disclaimers
- Privacy-first messaging interface
- Secure telehealth consent workflows

## License

This is a demo project. All rights reserved.

---

Built with care for VitalPath Health, Inc.

## Work with SkynetLabs

Built by [Waseem Nasir](https://www.skynetjoe.com/?utm_source=github&utm_medium=readme&utm_campaign=glp2-telehealth) at SkynetLabs — n8n + AI automation for small businesses.

- Hire on Fiverr: https://www.fiverr.com/agencies/skynetjoellc
- Hire on Upwork: https://www.upwork.com/freelancers/muhammadwaseemnasir
- Book a free call: https://calendly.com/skynetlabs/schedule-a-free-consultation
