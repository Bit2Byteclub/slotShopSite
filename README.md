# Used Slot Shop - E-Commerce Website

Premium used slot machine marketplace delivering Vegas-quality machines at bargain prices.

## About The Business

Used Slot Shop is your trusted partner for premium used slot machines, specializing in providing bars, gaming lounges, and entertainment venues with high-quality, refurbished slot machines at competitive prices.

### Key Features

- **300+ Models** - From vintage classics to the latest video reels
- **33+ Years Experience** - Market expertise and deep industry knowledge
- **Nationwide Delivery** - Safe delivery and professional installation across the USA
- **Casino-Grade Quality** - Every machine rigorously inspected and refurbished by certified technicians
- **Full Vetting Process** - Comprehensive testing of coin mechanisms, RNG systems, bill validators, and displays

### Services

- **High-Speed Quality Service** - Instant online valuations, same-day inspections, and 24-hour order confirmations
- **Professional Refurbishment** - Certified technicians ensure each machine meets casino-grade standards
- **Maintenance & Repairs** - Full diagnostic and repair services included
- **Transparent Documentation** - Detailed service histories and transparent reports for every machine

### Contact Information

- **Location**: 6806 Frerichs Ranch Road, Hackberry, Arizona 86411
- **Phone**: (928) 418-0549
- **Email**: usedslotshop@yahoo.com
- **Hours**: Monday - Friday, 9am - 5pm

## Tech Stack

This website is built with:

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first styling
- **Supabase** - PostgreSQL database and backend
- **Framer Motion** - Smooth animations and transitions
- **React Icons** - UI iconography

## Getting Started

### Prerequisites

- Node.js 18+ installed
- Supabase account and credentials

### Installation

1. Clone the repository
```bash
git clone https://github.com/Bit2Byteclub/slotShopSite.git
cd slotShopSite
```

2. Install dependencies
```bash
npm install
```

3. Create `.env.local` file in the root directory
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Run the development server
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
slotShopSite/
├── public/
│   ├── icons/                             # Public icon assets
│   └── slots-images/                      # Product images organized by manufacturer
│       ├── aristocrat/                    # Aristocrat machine images
│       ├── bally/                         # Bally machines (alpha2, curve, m9000, etc.)
│       ├── igt/                           # IGT machines (g20, g22, s2000, etc.)
│       ├── konami/                        # Konami machine images
│       ├── williams/                      # Williams machine images
│       ├── ainsworth/                     # Ainsworth machines (a560, a640, multigame)
│       └── aruze/                         # Aruze machines (cube-x, innovator)
├── src/
│   ├── app/
│   │   ├── page.tsx                       # Homepage with hero, stats, featured slots, reviews
│   │   ├── layout.tsx                     # Root layout with navbar, footer, error boundary
│   │   ├── globals.css                    # Global styles and Tailwind v4 theme config
│   │   ├── slot-machines/
│   │   │   ├── page.tsx                   # Manufacturer grid page (refactored with components)
│   │   │   └── [manufacturer]/
│   │   │       ├── page.tsx               # Manufacturer detail with filtering (connected to DB)
│   │   │       └── [productId]/
│   │   │           └── page.tsx           # Individual product detail page
│   │   ├── about/                         # Company information page (renamed from policy)
│   │   ├── contact-us/                    # Contact form with validation
│   │   ├── privacy-policy/                # Privacy policy (legal)
│   │   ├── terms-of-service/              # Terms of service (legal)
│   │   ├── warranty/                      # Warranty information (customer service)
│   │   ├── return-policy/                 # Return policy (customer service)
│   │   ├── _components/                   # Shared components (excluded from routing)
│   │   │   ├── Footer.tsx                 # Site footer with business info
│   │   │   ├── LoadingBar.tsx             # Page transition loading bar
│   │   │   ├── ErrorBoundary.tsx          # Error handling wrapper
│   │   │   ├── navbarComponents/
│   │   │   │   ├── navbar.tsx             # Main navigation bar
│   │   │   │   ├── SlotLink.tsx           # Custom navigation link
│   │   │   │   └── hamburger.tsx          # Mobile menu toggle
│   │   │   ├── homeComponents/
│   │   │   │   ├── button.tsx             # Reusable button component
│   │   │   │   ├── featuredSlots.tsx      # Featured products section
│   │   │   │   ├── icon.tsx               # Icon wrapper component
│   │   │   │   ├── product.tsx            # Product card component
│   │   │   │   ├── review.tsx             # Customer review card
│   │   │   │   ├── statcard.tsx           # Statistics card
│   │   │   │   ├── tag.tsx                # Tag/badge component
│   │   │   │   └── index.ts               # Barrel export
│   │   │   └── policyComponents/
│   │   │       ├── PolicyLayout.tsx       # Reusable layout for policy pages
│   │   │       └── PolicyComponents.tsx   # PolicySection, InfoBox, ContactInfo
│   │   └── assets/
│   │       └── icons/                     # SVG icon exports
│   ├── constants/
│   │   └── businessInfo.ts                # Centralized business information (phone, email, address, hours)
│   ├── lib/
│   │   └── supabaseClient.ts              # Supabase configuration and client
│   ├── services/
│   │   ├── manufacturers.ts               # Get manufacturers, classifications, machines by manufacturer
│   │   ├── machineDetails.ts              # Get machine by slug, recommended machines
│   │   ├── mockData.ts                    # Mock data fallback for development/testing
│   │   ├── slotMachineByFeatured.ts       # Get featured products
│   │   ├── slotMachineByName.ts           # Search by name
│   │   ├── slotMachineByOnSale.ts         # Get sale items
│   │   ├── slotMachineByPriceRange.ts     # Filter by price range
│   │   └── slotMachineByProvider.ts       # Filter by manufacturer
│   ├── types/
│   │   └── slotMachines.ts                # TypeScript interfaces (SlotInventory, Manufacturer)
│   └── utils/
│       └── validation.ts                  # Form validation utilities (email, phone, contact form)
├── .env.local                             # Environment variables (not in git)
├── next.config.ts                         # Next.js configuration
├── tsconfig.json                          # TypeScript configuration
├── tailwind.config.mjs                    # Tailwind CSS configuration
└── package.json                           # Project dependencies
```

## Key Features & Architecture

### Centralized Business Information
All business details (contact, address, hours) are centralized in `/src/constants/businessInfo.ts` and used across:
- Contact page
- Footer
- Policy pages
- Navbar

### Component Architecture
- **Reusable Components** - Icon, Button, StatCard, Tag, Review, Product cards
- **Policy Components** - Shared layout and components for policy pages
- **Extracted Components** - LoadingState, EmptyState, ManufacturerCard for better organization

## License

All rights reserved © Used Slot Shop
