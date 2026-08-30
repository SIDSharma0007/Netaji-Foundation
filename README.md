# 🕊️ Netaji Foundation — Empowering Communities, Building Futures

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Motion](https://img.shields.io/badge/Motion-Animation-f08?style=for-the-badge)](https://motion.dev/)

> **Netaji Foundation** is a modern, high-impact NGO digital platform dedicated to uplifting underserved communities across India. Built on the ideals of selfless service inspired by Netaji Subhash Chandra Bose, the platform drives transparent fundraising campaigns, volunteer recruitment, and community empowerment initiatives.

---

## 🌟 Key Features

- **🏛️ Mission & Heritage Showcase**: Rich visual storytelling celebrating community initiatives and the guiding philosophy of selfless service.
- **🎯 Dynamic Campaign Management**: Real-time tracking of active campaigns across Education, Healthcare, Environmental Sustainability, and Livelihood Aid with progress indicators and donor metrics.
- **🤝 Interactive Volunteer Portal**: Streamlined application modal allowing individuals to contribute by selecting their interest areas and availability.
- **📬 Responsive Contact & Feedback System**: Direct messaging and inquiry processing connected to Next.js API route handlers.
- **⚡ Next.js App Router Architecture**: Server-side rendered layouts, dynamic routing, metadata for search engine optimization (SEO), and fast client-side transitions.
- **🎨 Premium UI/UX Design**: Crafted with Tailwind CSS v4, smooth animations powered by Motion, responsive navigation with mobile drawer support, and accessible modal dialogs.
- **🔌 RESTful API Endpoints**: Modular backend routes for handling campaigns, volunteer signups, health checks, and user inquiries.

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Framework** | [Next.js 16 (App Router)](https://nextjs.org/) |
| **Frontend Library** | [React 19](https://react.dev/) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) & PostCSS |
| **Animations** | [Motion (`motion`)](https://motion.dev/) |
| **Iconography** | [Lucide React](https://lucide.dev/) |
| **AI Integration** | [@google/genai](https://www.npmjs.com/package/@google/genai) |
| **Data Persistence** | In-memory singleton state provider (`src/lib/db.ts`) |

---

## 📂 Project Structure

```text
Netaji-Foundation/
├── app/                        # Next.js App Router directory
│   ├── about/                  # About page route
│   │   └── page.tsx
│   ├── api/                    # Serverless API routes
│   │   ├── campaigns/          # Campaigns API endpoint
│   │   ├── contact/            # Contact message endpoint
│   │   ├── health/             # Health check endpoint
│   │   └── volunteer/          # Volunteer registration endpoint
│   ├── campaigns/              # Campaigns page route
│   │   └── page.tsx
│   ├── contact/                # Contact page route
│   │   └── page.tsx
│   ├── globals.css             # Global Tailwind CSS imports
│   ├── layout.tsx              # Root layout with Navbar, Footer & ModalProvider
│   ├── loading.tsx             # Global route loading state
│   ├── not-found.tsx           # Custom 404 page
│   └── page.tsx                # Home page route
├── public/
│   └── images/                 # Optimized campaign & organizational imagery
├── src/
│   ├── components/             # Reusable UI screen components
│   │   ├── AboutScreen.tsx
│   │   ├── CampaignsScreen.tsx
│   │   ├── ContactScreen.tsx
│   │   ├── Footer.tsx
│   │   ├── HomeScreen.tsx
│   │   ├── Navbar.tsx
│   │   └── VolunteerModal.tsx
│   ├── context/                # React Context providers (ModalContext)
│   ├── data/                   # Initial seed data for campaigns
│   ├── lib/                    # Shared database and utilities
│   └── types.ts                # TypeScript interfaces and data models
├── .env.example                # Environment variable template
├── next.config.ts              # Next.js configuration
├── package.json                # Project dependencies and scripts
├── tsconfig.json               # TypeScript configuration
└── README.md                   # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: Version 18.18+ or 20+ installed ([Download Node.js](https://nodejs.org/))
- **Package Manager**: `npm`, `yarn`, `pnpm`, or `bun`

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/netaji-foundation.git
cd netaji-foundation
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables *(Optional)*

The core website, campaigns, volunteer registration, and contact forms work out-of-the-box without any API keys. If you wish to configure environment variables, copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

```env
# Optional (Reserved for future AI features)
GEMINI_API_KEY="your_gemini_api_key_here"

# Application URL (Defaults to http://localhost:3000)
APP_URL="http://localhost:3000"
```

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the Next.js development server with hot-reloading |
| `npm run build` | Builds the optimized production build |
| `npm run start` | Starts the production server |
| `npm run lint` | Runs TypeScript type checking (`tsc --noEmit`) |

---

## 📡 API Reference

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/health` | Service health status and timestamp |
| `GET` | `/api/campaigns` | List all active humanitarian campaigns |
| `POST` | `/api/volunteer` | Submit a volunteer application |
| `POST` | `/api/contact` | Submit a general inquiry or contact form |

---

## 🤝 Contributing

Contributions are welcome! If you'd like to improve the platform or add features:

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'feat: Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🌟 Acknowledgements

- Dedicated to the vision and spirit of selfless community service.
- Built with [Next.js](https://nextjs.org/) and styled with [Tailwind CSS](https://tailwindcss.com/).
- Icons by [Lucide Icons](https://lucide.dev/).
