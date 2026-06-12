// Centralised, type-safe content for the marketing site. Every page imports
// from here so non-engineers can update copy without touching components.

import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Boxes,
  Brush,
  Cloud,
  Code2,
  Compass,
  Cpu,
  Database,
  Gauge,
  Share2,
  Layers,
  LineChart,
  Megaphone,
  MonitorSmartphone,
  Network,
  Rocket,
  ScanSearch,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

// ----------------------------- Navigation -----------------------------

export const PRIMARY_NAV = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Case studies", href: "/case-studies" },
  { label: "About us", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact us", href: "/contact" },
] as const;

// ----------------------------- Services -----------------------------

export type Service = {
  slug: string;
  title: string;
  short: string;
  icon: LucideIcon;
  bullets: string[];
  outcome: string;
};

export const SERVICES: Service[] = [
  {
    slug: "web-development",
    title: "Web & product engineering",
    short:
      "Fixed-price, production-grade web apps and marketing sites — built fast with senior architectural oversight.",
    icon: Code2,
    bullets: [
      "Next.js + TypeScript front-ends",
      "Postgres, Drizzle, serverless APIs",
      "AI-accelerated MVPs in 3 – 6 weeks",
      "Full audit-trail, tests, and CI",
    ],
    outcome: "Production-ready MVP in weeks, not months.",
  },
  {
    slug: "product-design",
    title: "Brand & product design",
    short:
      "From requirement gathering to high-fidelity Figma. Striking interfaces that convert and scale.",
    icon: Brush,
    bullets: [
      "Brand identity & visual systems",
      "UX research & user journeys",
      "Design systems in Figma",
      "Pixel-perfect dev handoff",
    ],
    outcome: "Interfaces users adopt without onboarding.",
  },
  {
    slug: "cloud-deployment",
    title: "Cloud, deployment & DevOps",
    short:
      "We ship to Vercel, AWS, and managed Postgres. Zero-downtime deploys with proper observability.",
    icon: Cloud,
    bullets: [
      "Vercel, AWS, Cloudflare",
      "Neon / RDS Postgres",
      "CI/CD with preview environments",
      "Secrets, domains, DNS, SSL",
    ],
    outcome: "Stress-free launches and predictable uptime.",
  },
  {
    slug: "monitoring-support",
    title: "Monitoring & co-managed IT",
    short:
      "24×7 monitoring, incident response, and co-managed IT for teams without a full DevOps function.",
    icon: Gauge,
    bullets: [
      "Uptime + log + error monitoring",
      "On-call incident response",
      "Endpoint and identity management",
      "Quarterly security reviews",
    ],
    outcome: "Sleep at night while we watch the dashboards.",
  },
  {
    slug: "data-engineering",
    title: "Data engineering & AI",
    short:
      "Pipelines, warehouses, dashboards, and behind-the-firewall AI automations for regulated industries.",
    icon: Database,
    bullets: [
      "ETL / ELT pipelines",
      "Warehouses (Postgres, BigQuery)",
      "Internal dashboards",
      "Private LLM agents & RAG",
    ],
    outcome: "Your data, finally working for you.",
  },
  {
    slug: "growth-marketing",
    title: "Performance & Instagram marketing",
    short:
      "Conversion-driven creatives, paid social, and B2B outbound — measured in pipeline, not impressions.",
    icon: Megaphone,
    bullets: [
      "Instagram & LinkedIn campaigns",
      "Landing page CRO",
      "B2B intent + email outbound",
      "Reporting tied to revenue",
    ],
    outcome: "Marketing that compounds into pipeline.",
  },
] as const;

// ----------------------------- Capability badges (hero pills) -----------

export const HERO_PILLS = [
  "Web Development",
  "Cloud & Deployment",
  "Brand & UI Design",
  "Performance Marketing",
] as const;

// ----------------------------- Industries -----------------------------

export type Industry = {
  slug: string;
  name: string;
  icon: LucideIcon;
  summary: string;
  challenges: string[];
  outcomes: string[];
};

export const INDUSTRIES: Industry[] = [
  {
    slug: "saas-startups",
    name: "SaaS & early-stage startups",
    icon: Rocket,
    summary:
      "We help founders ship a credible v1 in weeks, then layer in growth experiments without rewriting.",
    challenges: [
      "No senior engineer in-house",
      "Need to ship a credible MVP fast",
      "Limited budget, finite runway",
    ],
    outcomes: [
      "Fixed-price MVP in 3 – 6 weeks",
      "Production-grade architecture",
      "Built-in analytics + activation funnels",
    ],
  },
  {
    slug: "financial-services",
    name: "Financial services",
    icon: LineChart,
    summary:
      "Customer portals, reporting dashboards, and behind-the-firewall AI agents for regulated workflows.",
    challenges: [
      "Compliance + audit overhead",
      "Sensitive data, no public LLMs",
      "Legacy systems that can't go down",
    ],
    outcomes: [
      "On-prem / private-cloud AI",
      "SOC2-aware engineering",
      "Reduced manual processing by 40%+",
    ],
  },
  {
    slug: "ecommerce",
    name: "Ecommerce & D2C",
    icon: ShieldCheck,
    summary:
      "Headless storefronts, performance optimisation, and conversion-focused Instagram campaigns.",
    challenges: [
      "Slow storefronts hurting conversion",
      "Disjointed paid + organic strategy",
      "Inventory + CRM data in silos",
    ],
    outcomes: [
      "Headless, sub-second TTFB",
      "Unified analytics + CRO loop",
      "Creative + paid run by one team",
    ],
  },
  {
    slug: "professional-services",
    name: "Professional services",
    icon: Compass,
    summary:
      "Lead-gen websites, client portals, and internal automation for consulting, legal, and creative firms.",
    challenges: [
      "Outdated brochure-ware site",
      "Manual proposal + onboarding",
      "No partner / client portal",
    ],
    outcomes: [
      "Modern brand + lead magnets",
      "Automated proposal workflows",
      "Client portals with audit logs",
    ],
  },
  {
    slug: "real-estate",
    name: "Real estate & property tech",
    icon: Boxes,
    summary:
      "Listings, CRMs, lead capture funnels, and Instagram-led demand generation for property businesses.",
    challenges: [
      "High lead cost, low conversion",
      "Slow follow-up on inbound",
      "No unified view of pipeline",
    ],
    outcomes: [
      "Lead routing + auto-responses",
      "Branded property microsites",
      "Pipeline dashboards for founders",
    ],
  },
  {
    slug: "education",
    name: "Education & coaching",
    icon: ScanSearch,
    summary:
      "Cohort platforms, payment flows, and creator-style marketing for coaches, ed-tech, and institutes.",
    challenges: [
      "Cohort logistics on spreadsheets",
      "Drop-off in payment flows",
      "Low organic visibility",
    ],
    outcomes: [
      "Branded cohort experiences",
      "Streamlined payment + onboarding",
      "Content engine on Instagram + SEO",
    ],
  },
] as const;

// ----------------------------- Team -----------------------------

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  initials: string;
  superpower: string;
};

export const TEAM: TeamMember[] = [
  {
    name: "Managing Partner",
    role: "Operations & Client Partnerships",
    bio: "15+ years at Genpact leading IT operations and customer support for global enterprises. Anchors the agency's Hyderabad network and runs delivery governance.",
    initials: "MP",
    superpower: "Enterprise relationships",
  },
  {
    name: "Lead Architect",
    role: "CTO · Full-stack & Cloud",
    bio: "Software Engineer 2 with 3 years shipping production systems. Owns architecture, system design, security review, and the AI-assisted development workflow on Cursor + Claude Code.",
    initials: "LA",
    superpower: "Architecture & AI-first delivery",
  },
  {
    name: "Core Engineer",
    role: "Full-stack & Data Engineering",
    bio: "Full-stack engineer with a heavy data-engineering background. Runs the build pipeline — orchestrates AI agents, ships features, and owns data pipelines and integrations.",
    initials: "CE",
    superpower: "Rapid build & data pipelines",
  },
  {
    name: "Head of Design",
    role: "Product Design & Communication",
    bio: "Product designer with deep experience translating fuzzy requirements into clean, high-fidelity Figma. Owns brand, UX, and the agency's content + Instagram presence.",
    initials: "HD",
    superpower: "Design systems & storytelling",
  },
] as const;

// ----------------------------- Process -----------------------------

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const PROCESS: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery & PRD",
    description:
      "We run a structured discovery workshop and ship a Product Requirements Document — objectives, user stories, scope, and non-goals. You sign off before code starts.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Design & prototyping",
    description:
      "High-fidelity Figma flows for every screen. Click-through prototypes, design system, and a content map — so there's zero ambiguity at handoff.",
    icon: Brush,
  },
  {
    number: "03",
    title: "AI-accelerated build",
    description:
      "Cursor + Claude Code agents run in parallel on isolated branches, supervised by our Lead Architect. Tests, types, and reviews baked in.",
    icon: Cpu,
  },
  {
    number: "04",
    title: "Deploy & instrument",
    description:
      "Vercel / AWS deploy with preview environments, monitoring, logging, and analytics wired up from day one.",
    icon: Cloud,
  },
  {
    number: "05",
    title: "Monitor & grow",
    description:
      "Optional retainers: 24×7 monitoring, co-managed IT, and growth marketing — so the product compounds instead of decays.",
    icon: LineChart,
  },
] as const;

// ----------------------------- Stack -----------------------------

export const STACK = [
  { name: "Next.js", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Framer Motion", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Postgres", category: "Database" },
  { name: "Drizzle ORM", category: "Database" },
  { name: "Neon", category: "Database" },
  { name: "Vercel", category: "Cloud" },
  { name: "AWS", category: "Cloud" },
  { name: "Cloudflare", category: "Cloud" },
  { name: "Cursor", category: "Tooling" },
  { name: "Claude Code", category: "Tooling" },
  { name: "Figma", category: "Design" },
  { name: "Linear", category: "Tooling" },
  { name: "GitHub Actions", category: "DevOps" },
  { name: "Docker", category: "DevOps" },
] as const;

// ----------------------------- Stats -----------------------------

export const STATS = [
  { value: "3 – 6 wks", label: "Average MVP timeline" },
  { value: "40%+", label: "Manual work removed for clients" },
  { value: "24×7", label: "Monitoring & on-call cover" },
  { value: "100%", label: "Fixed-price, milestone billing" },
] as const;

// ----------------------------- Logo strip -----------------------------

// Placeholder names rendered as text logos on the home page strip.
// Swap with real client / partner names as they come in.
export const TRUST_LOGOS = [
  { name: "Aller", style: "italic" as const },
  { name: "unisport", style: "bold" as const },
  { name: "Layerise", style: "tight" as const },
  { name: "stripe", style: "bold" as const },
  { name: "unisport", style: "bold" as const },
  { name: "DeepMind", style: "tight" as const },
  { name: "stripe", style: "bold" as const },
  { name: "coinbase", style: "tight" as const },
] as const;

// ----------------------------- Testimonials -----------------------------

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "They shipped a working MVP in five weeks. Our internal team had spent six months on the same scope. The architecture is clean enough that we kept building on top of it.",
    author: "Founder, fintech startup",
    role: "Hyderabad, India",
  },
  {
    quote:
      "We replaced three vendors with one team — design, dev, and growth. Pipeline went up, costs went down, and the dashboards finally tell the truth.",
    author: "Head of Marketing, D2C brand",
    role: "Bengaluru, India",
  },
  {
    quote:
      "Their PRD process saved us from scope creep. Everything was nailed down before code started. We launched on the date we committed to, which was a first for us.",
    author: "VP Operations, consulting firm",
    role: "Mumbai, India",
  },
] as const;

// ----------------------------- Capability matrix (bento) -----------------

export type Capability = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const CAPABILITIES: Capability[] = [
  {
    title: "AI-accelerated delivery",
    description:
      "Cursor agents in isolated VMs ship features in parallel. We're 3 – 5× faster than legacy shops.",
    icon: Sparkles,
  },
  {
    title: "Senior architectural oversight",
    description:
      "A senior engineer reviews every PR. You get speed and the structural integrity of a serious build.",
    icon: ShieldCheck,
  },
  {
    title: "End-to-end ownership",
    description:
      "Design, code, deploy, monitor, market. One contract, one accountable team, one Slack channel.",
    icon: Workflow,
  },
  {
    title: "Fixed-price MVPs",
    description:
      "Scope, price, and timeline locked at PRD sign-off. No T&M surprises, no scope-creep arguments.",
    icon: Layers,
  },
  {
    title: "Hyderabad network",
    description:
      "Decades of relationships across IT operations, BFSI, and the local startup ecosystem.",
    icon: Network,
  },
  {
    title: "Performance marketing built-in",
    description:
      "Instagram, LinkedIn, and SEO loops launched with the product — not bolted on six months later.",
    icon: Share2,
  },
  {
    title: "Cross-platform",
    description:
      "Web, mobile-responsive, PWA, internal tools — one design system, every surface.",
    icon: MonitorSmartphone,
  },
  {
    title: "Analytics from day one",
    description:
      "Product analytics, funnels, and revenue attribution wired up before launch — not after.",
    icon: BarChart3,
  },
] as const;

// ----------------------------- FAQ -----------------------------

export const FAQ = [
  {
    q: "How fast can you ship an MVP?",
    a: "Most fixed-price MVPs ship in 3 – 6 weeks from PRD sign-off. Larger products take 8 – 12 weeks. We commit to a date and a price before we start.",
  },
  {
    q: "Do you work with non-tech founders?",
    a: "All the time. We translate your business problem into a PRD, then design and build. You don't need to know what 'Next.js' means.",
  },
  {
    q: "Where do you host? Can we own the code?",
    a: "We deploy to Vercel + Neon Postgres by default, but we'll deploy anywhere you want — AWS, Cloudflare, your own infra. You own the repo, the domain, and every secret from day one.",
  },
  {
    q: "Do you do ongoing maintenance?",
    a: "Yes. Optional monthly retainers cover monitoring, security patches, small features, and on-call. Most clients keep us on after launch.",
  },
  {
    q: "Can you also handle our marketing?",
    a: "Yes — Instagram, LinkedIn, landing-page CRO, and B2B outbound. We'll build the product and the demand-gen engine that fills it.",
  },
  {
    q: "Where are you based?",
    a: "Hyderabad, India. We work with clients globally, async-first, with overlap windows for IST / EU / US timezones.",
  },
] as const;
