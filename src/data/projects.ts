// Portfolio project registry — client-facing showcase (deduplicated, no internal names).

export type ProjectRegion = "KSA" | "Egypt" | "USA + India" | "Global";
export type ProjectAccent = "lime" | "mint" | "amber";
export type ProjectEcosystem = "recaf" | "broker" | "mallsapp" | null;

export type TechStackEntry = { layer: string; technology: string };

export type Project = {
  slug: string;
  number: number;
  name: string;
  region: ProjectRegion;
  type: string;
  liveUrl?: string;
  purpose: string;
  techStack: TechStackEntry[];
  ecosystem: ProjectEcosystem;
  accent: ProjectAccent;
  ownerFolder?: string;
  howToRun?: string[];
  notes?: string[];
};

/** Hidden when FEATURES.projectExtraSections is false */
export const PROJECT_REGIONS: { region: ProjectRegion; projects: string[] }[] = [
  { region: "KSA", projects: ["Recaf", "MallsApp", "LAGO Website"] },
  { region: "Egypt", projects: ["Broker API", "Broker Dashboard", "Broker Mobile"] },
  { region: "USA + India", projects: ["NCD International"] },
  { region: "Global", projects: ["Plus Ultra", "Furns Rentals"] },
];

export const CROSS_PROJECT_NOTES = [
  "Recaf spans a mobile app, admin dashboard, and production API with Foodics POS integration.",
  "MallsApp mobile client source is not in this repository.",
  "Broker mobile app may use legacy API routes vs the current Broker API.",
] as const;

export const PROJECTS: Project[] = [
  {
    slug: "ncd-international",
    number: 1,
    name: "NCD International",
    region: "USA + India",
    type: "Portfolio website",
    liveUrl: "aasimalikhan.github.io/Architecture-Design-Studio",
    purpose:
      "Architecture and design studio portfolio showcasing civic, cultural, and residential projects worldwide — with an interactive Three.js globe hero, GSAP animations, and smooth scrolling.",
    techStack: [
      { layer: "Language", technology: "TypeScript" },
      { layer: "Build", technology: "Vite 5" },
      { layer: "3D", technology: "Three.js + GLSL shaders" },
      { layer: "Animation", technology: "GSAP, Lenis" },
    ],
    ecosystem: null,
    accent: "amber",
  },
  {
    slug: "recaf-api",
    number: 2,
    name: "Recaf API",
    region: "KSA",
    type: "Backend API",
    liveUrl: "api.recaf.sa",
    purpose:
      "Backend for the Recaf specialty coffee platform — e-commerce catalog, shopping cart, loyalty wallet, store locator, and Foodics POS integration for earn/redeem points at cafe locations across Saudi Arabia.",
    techStack: [
      { layer: "Framework", technology: "NestJS 11 + Fastify" },
      { layer: "ORM", technology: "Prisma + PostgreSQL" },
      { layer: "Auth", technology: "JWT, phone OTP, staff login" },
      { layer: "Integrations", technology: "Foodics POS, Firebase FCM, AWS S3" },
    ],
    ecosystem: "recaf",
    accent: "lime",
  },
  {
    slug: "recaf-dashboard",
    number: 3,
    name: "Recaf Dashboard",
    region: "KSA",
    type: "Admin dashboard",
    purpose:
      "Admin console for Recaf — manage users, stores, menu, products, banners, loyalty rewards, Foodics menu sync, QR scanning, push notifications, and audit logs.",
    techStack: [
      { layer: "Framework", technology: "Next.js 15 (App Router)" },
      { layer: "UI", technology: "React 19, TypeScript, Tailwind CSS 4" },
      { layer: "Components", technology: "Radix UI" },
      { layer: "Data", technology: "TanStack Query, React Hook Form + Zod" },
    ],
    ecosystem: "recaf",
    accent: "lime",
  },
  {
    slug: "recaf-mobile",
    number: 4,
    name: "Recaf Mobile",
    region: "KSA",
    type: "Mobile app",
    purpose:
      "Consumer mobile app for Recaf coffee — home feed, store locator, rewards and loyalty, profile, cart, product browsing, push notifications, bilingual EN/AR.",
    techStack: [
      { layer: "Framework", technology: "Expo 54, Expo Router 6" },
      { layer: "UI", technology: "React Native, NativeWind" },
      { layer: "State", technology: "Zustand" },
      { layer: "Maps", technology: "Google Maps SDK" },
    ],
    ecosystem: "recaf",
    accent: "lime",
  },
  {
    slug: "mallsapp",
    number: 5,
    name: "MallsApp",
    region: "KSA",
    type: "Backend + admin",
    liveUrl: "cp.mallsapp.me",
    purpose:
      "Backend and admin systems for a mall shopping platform in KSA — malls, brands, cinema, events, offers, shopping lists, loyalty cards, parking, receipts, and push notifications.",
    techStack: [
      { layer: "Language", technology: "PHP" },
      { layer: "Database", technology: "MySQL" },
      { layer: "Cloud", technology: "AWS EC2, S3" },
      { layer: "API", technology: "OpenAPI 3.0 REST" },
    ],
    ecosystem: "mallsapp",
    accent: "amber",
  },
  {
    slug: "plus-ultra",
    number: 6,
    name: "Plus Ultra",
    region: "Global",
    type: "Productivity app",
    liveUrl: "Vercel",
    purpose:
      "Personal productivity app — morning briefing, evening debrief, CBT journaling, AI bridge, and rolling success-rate tracking.",
    techStack: [
      { layer: "Framework", technology: "Next.js 14 (App Router)" },
      { layer: "Database", technology: "Supabase Postgres" },
      { layer: "Styling", technology: "Tailwind CSS" },
    ],
    ecosystem: null,
    accent: "mint",
  },
  {
    slug: "furns-rentals",
    number: 7,
    name: "Furns Rentals",
    region: "Global",
    type: "Rental platform",
    liveUrl: "furns-rentals.vercel.app",
    purpose:
      "Event furniture rental platform — browse catalog, manage rentals, bookings, and admin operations for event furniture.",
    techStack: [
      { layer: "Framework", technology: "Next.js 16, React 19" },
      { layer: "Database", technology: "Neon PostgreSQL + Prisma 7" },
      { layer: "UI", technology: "Tailwind CSS 4, Framer Motion" },
      { layer: "Media", technology: "Cloudinary" },
    ],
    ecosystem: null,
    accent: "mint",
  },
  {
    slug: "broker-api",
    number: 8,
    name: "Broker API",
    region: "Egypt",
    type: "Backend API",
    liveUrl: "api.brokerapp.me",
    purpose:
      "Backend for an Egyptian real estate platform — authentication, property listings, agents, payments, notifications, social login, and background jobs.",
    techStack: [
      { layer: "Framework", technology: ".NET 9 / ASP.NET Core" },
      { layer: "ORM", technology: "Entity Framework Core + SQL Server" },
      { layer: "Auth", technology: "JWT Bearer" },
      { layer: "Jobs", technology: "Hangfire" },
    ],
    ecosystem: "broker",
    accent: "mint",
  },
  {
    slug: "broker-dashboard",
    number: 9,
    name: "Broker Dashboard",
    region: "Egypt",
    type: "Admin + marketing site",
    liveUrl: "brokerapp.me",
    purpose:
      "Admin dashboard and public landing for a real estate platform — manage properties, companies, agents, users, settings, and payment analytics.",
    techStack: [
      { layer: "Backend", technology: "Laravel 10, PHP 8.1" },
      { layer: "Frontend", technology: "Blade + Vite 5" },
      { layer: "Database", technology: "SQL Server" },
      { layer: "Payments", technology: "Paymob" },
    ],
    ecosystem: "broker",
    accent: "mint",
  },
  {
    slug: "broker-mobile",
    number: 10,
    name: "Broker Mobile",
    region: "Egypt",
    type: "Mobile app",
    purpose:
      "Mobile app for Egyptian real estate — browse and search listings, post properties, favorites, broker points, maps, and push notifications.",
    techStack: [
      { layer: "Framework", technology: "Flutter / Dart" },
      { layer: "State", technology: "GetX" },
      { layer: "Maps", technology: "Google Maps" },
      { layer: "i18n", technology: "Arabic / English" },
    ],
    ecosystem: "broker",
    accent: "mint",
  },
  {
    slug: "lago-website",
    number: 11,
    name: "LAGO Website",
    region: "KSA",
    type: "Restaurant website",
    purpose:
      "Bilingual restaurant website for LAGO in Riyadh — menu, reservations, events, queue management, and an admin panel for content, bookings, and promotions.",
    techStack: [
      { layer: "Backend", technology: "Laravel 9, PHP 8.1" },
      { layer: "Admin", technology: "Inertia.js + Vue 3" },
      { layer: "Frontend", technology: "Blade + Tailwind CSS" },
      { layer: "Database", technology: "MySQL 8" },
    ],
    ecosystem: null,
    accent: "amber",
  },
];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
