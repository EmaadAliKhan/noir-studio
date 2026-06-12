import type { LucideIcon } from "lucide-react";
import {
  Brush,
  Cloud,
  Code2,
  Database,
  Gauge,
  Hammer,
  HeartPulse,
  Megaphone,
  TrendingUp,
} from "lucide-react";

export type Track = {
  id: "build" | "run" | "grow";
  label: string;
  title: string;
  description: string;
  icon: LucideIcon;
  serviceSlugs: string[];
  accent: string;
};

export const TRACKS: Track[] = [
  {
    id: "build",
    label: "Build",
    title: "Design, engineer & ship",
    description:
      "Senior architecture, AI-accelerated delivery, pixel-perfect product design, and the data plumbing underneath.",
    icon: Hammer,
    serviceSlugs: ["web-development", "product-design", "data-engineering"],
    accent: "text-accent",
  },
  {
    id: "run",
    label: "Run",
    title: "Deploy, monitor & support",
    description:
      "Cloud deployments, observability, and 24×7 co-managed IT for teams without a full DevOps function.",
    icon: HeartPulse,
    serviceSlugs: ["cloud-deployment", "monitoring-support"],
    accent: "text-accent-2",
  },
  {
    id: "grow",
    label: "Grow",
    title: "Market, measure & compound",
    description:
      "Performance creative, paid social, B2B outbound, and CRO loops — measured in pipeline, not impressions.",
    icon: TrendingUp,
    serviceSlugs: ["growth-marketing"],
    accent: "text-accent-3",
  },
];

export type Engagement = {
  duration: string;
  deliverables: string[];
  priceFrom: string;
};

export const SERVICE_ENGAGEMENTS: Record<string, Engagement> = {
  "web-development": {
    duration: "3 – 6 weeks",
    deliverables: [
      "Production-grade Next.js app",
      "Postgres schema + serverless APIs",
      "CI/CD with preview environments",
      "Tests, types, and audit trail",
    ],
    priceFrom: "$15k",
  },
  "product-design": {
    duration: "2 – 4 weeks",
    deliverables: [
      "Brand identity & visual system",
      "High-fidelity Figma flows",
      "Component library + tokens",
      "Pixel-perfect dev handoff",
    ],
    priceFrom: "$8k",
  },
  "cloud-deployment": {
    duration: "1 – 2 weeks",
    deliverables: [
      "Vercel / AWS / Cloudflare setup",
      "Postgres + caching + queues",
      "Domains, DNS, SSL, secrets",
      "CI/CD with preview environments",
    ],
    priceFrom: "$4k",
  },
  "monitoring-support": {
    duration: "Monthly retainer",
    deliverables: [
      "Uptime, log, and error monitoring",
      "On-call incident response",
      "Endpoint + identity management",
      "Quarterly security reviews",
    ],
    priceFrom: "$5k / mo",
  },
  "data-engineering": {
    duration: "4 – 8 weeks",
    deliverables: [
      "ETL / ELT pipelines",
      "Warehouse (Postgres / BigQuery)",
      "Internal dashboards",
      "Private LLM agents & RAG",
    ],
    priceFrom: "$15k",
  },
  "growth-marketing": {
    duration: "Monthly retainer",
    deliverables: [
      "Content + paid social engine",
      "Landing pages + CRO loops",
      "B2B intent + email outbound",
      "Pipeline-tied reporting",
    ],
    priceFrom: "$4k / mo",
  },
};

export type EngagementModel = {
  id: string;
  title: string;
  cadence: string;
  price: string;
  description: string;
  includes: string[];
  icon: LucideIcon;
};

export const ENGAGEMENT_MODELS: EngagementModel[] = [
  {
    id: "fixed-price-mvp",
    title: "Fixed-price MVP",
    cadence: "3 – 6 weeks",
    price: "$15k – $35k",
    description:
      "Scope, timeline, and price locked at PRD sign-off. Best for v1 launches and proof-of-concepts.",
    includes: [
      "Discovery workshop + signed PRD",
      "High-fidelity Figma + design system",
      "Production app + deploy + analytics",
      "30 days post-launch hypercare",
    ],
    icon: Code2,
  },
  {
    id: "engineering-pod",
    title: "Dedicated engineering pod",
    cadence: "Monthly · ongoing",
    price: "$15k – $40k / mo",
    description:
      "A senior-led pod (2 – 4 engineers + design) embedded in your team. Best for sustained roadmap velocity.",
    includes: [
      "Lead architect + 2 – 3 engineers",
      "Embedded designer (part-time)",
      "Linear + GitHub + Slack workflow",
      "Monthly business reviews",
    ],
    icon: Brush,
  },
  {
    id: "comanaged-it",
    title: "Co-managed IT retainer",
    cadence: "Monthly · ongoing",
    price: "$5k – $15k / mo",
    description:
      "24×7 monitoring, incident response, and small features. Best for teams without a full DevOps function.",
    includes: [
      "Uptime + error + log monitoring",
      "On-call incident response",
      "Cloud cost + security reviews",
      "Pool of monthly feature hours",
    ],
    icon: Gauge,
  },
];

export const SERVICE_ICON_OVERRIDES: Record<string, LucideIcon> = {
  "web-development": Code2,
  "product-design": Brush,
  "cloud-deployment": Cloud,
  "monitoring-support": Gauge,
  "data-engineering": Database,
  "growth-marketing": Megaphone,
};
