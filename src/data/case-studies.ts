// Hand-curated case-study fixtures. Subagents render these on the
// /case-studies index and on /case-studies/[slug] detail pages.

export type Metric = { label: string; value: string };

export type CaseStudy = {
  slug: string;
  client: string;
  title: string;
  summary: string;
  category: "Web App" | "Mobile" | "Internal Tool" | "Marketing Site" | "Data Platform";
  industry: string;
  year: string;
  durationWeeks: number;
  services: string[];
  stack: string[];
  // Visual accent for the case-study card.
  accent: "lime" | "mint" | "amber";
  problem: string;
  approach: string[];
  outcome: string;
  metrics: Metric[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "ledger-ai-fintech-dashboard",
    client: "Ledger AI",
    title: "From spreadsheet ops to a real-time fintech dashboard in 5 weeks.",
    summary:
      "Replaced a tangled spreadsheet workflow with a Next.js dashboard, secure Postgres data layer, and a behind-the-firewall AI agent that drafts reconciliations.",
    category: "Web App",
    industry: "Financial services",
    year: "2026",
    durationWeeks: 5,
    services: [
      "Discovery & PRD",
      "Product design",
      "Web engineering",
      "Data engineering",
      "Deployment & monitoring",
    ],
    stack: ["Next.js", "TypeScript", "Postgres", "Drizzle", "Vercel", "Claude API"],
    accent: "lime",
    problem:
      "A fast-growing Hyderabad financial consultancy was reconciling client transactions across five spreadsheets. Errors were creeping in, junior analysts were burning out, and the founders couldn't get a real-time view of cash positions.",
    approach: [
      "Ran a 4-day discovery sprint and shipped a sign-off PRD covering 14 user stories.",
      "Designed a Figma system with role-based dashboards for analysts and partners.",
      "Built the app with Next.js + Drizzle + Postgres on Neon, deployed on Vercel.",
      "Trained a private LLM agent on anonymised data to suggest reconciliations.",
      "Set up Vercel monitoring, error tracking, and a weekly KPI digest email.",
    ],
    outcome:
      "Manual reconciliation workload dropped by 42% in the first month. The team retired the spreadsheets entirely and now closes books two weeks earlier.",
    metrics: [
      { label: "Manual work removed", value: "42%" },
      { label: "Time to ship MVP", value: "5 wks" },
      { label: "Books-close acceleration", value: "2 wks" },
      { label: "Production incidents", value: "0" },
    ],
    testimonial: {
      quote:
        "It felt like having a senior product team show up for a month. The PRD alone saved us a quarter of debate.",
      author: "Co-founder",
      role: "Ledger AI",
    },
  },
  {
    slug: "northstar-d2c-headless-storefront",
    client: "Northstar Apparel",
    title: "Headless storefront and Instagram growth engine for a D2C brand.",
    summary:
      "Rebuilt a slow Shopify theme into a sub-second headless storefront, paired with an Instagram-first creative loop that doubled paid ROAS.",
    category: "Marketing Site",
    industry: "Ecommerce & D2C",
    year: "2026",
    durationWeeks: 6,
    services: ["Brand design", "Web engineering", "Performance marketing"],
    stack: ["Next.js", "Tailwind", "Shopify Hydrogen", "Cloudflare", "Meta Ads"],
    accent: "mint",
    problem:
      "A 3-year-old apparel brand had outgrown its Shopify theme. Pages were slow, the brand felt stale, and paid creative was burning out within days.",
    approach: [
      "Redesigned the brand system around a single bold display face and motion-rich product detail pages.",
      "Built a headless storefront on Next.js + Shopify Hydrogen with edge caching on Cloudflare.",
      "Stood up a weekly Instagram creative cadence with the in-house team.",
      "Implemented event-based attribution so every ad linked back to gross profit.",
    ],
    outcome:
      "Storefront TTFB dropped from 1.9s to 280ms. Paid ROAS doubled within 8 weeks of launch.",
    metrics: [
      { label: "TTFB improvement", value: "7×" },
      { label: "Paid ROAS", value: "2.1×" },
      { label: "Instagram follower growth", value: "+38%" },
      { label: "Cart conversion", value: "+24%" },
    ],
    testimonial: {
      quote:
        "Design, dev, and growth from one team — we stopped translating between three vendors and just shipped.",
      author: "Head of Marketing",
      role: "Northstar Apparel",
    },
  },
  {
    slug: "siddha-coaching-cohort-platform",
    client: "Siddha Coaching",
    title: "Cohort platform + payment flow for a sold-out coaching program.",
    summary:
      "Built a branded cohort platform with payments, onboarding, and a community feed — replacing a Google Form + WhatsApp combo.",
    category: "Web App",
    industry: "Education & coaching",
    year: "2026",
    durationWeeks: 4,
    services: ["Product design", "Web engineering", "Deployment & monitoring"],
    stack: ["Next.js", "Postgres", "Razorpay", "Resend", "Vercel"],
    accent: "amber",
    problem:
      "The coach was running cohorts on Google Forms + WhatsApp + spreadsheets. Drop-off in the payment flow was high and onboarding was manual.",
    approach: [
      "Mapped the cohort lifecycle into a clean Figma flow with a public landing page, payment, onboarding, and a private member area.",
      "Built with Next.js, Postgres, and a Razorpay checkout integration.",
      "Automated welcome and weekly drip emails via Resend.",
      "Wired up KPI dashboards so the coach could see drop-off in real time.",
    ],
    outcome:
      "Cohort payment conversion went from 38% to 71%. Onboarding overhead dropped to near-zero.",
    metrics: [
      { label: "Payment conversion", value: "71%" },
      { label: "Manual onboarding time", value: "−95%" },
      { label: "NPS at week 4", value: "62" },
      { label: "Time to ship", value: "4 wks" },
    ],
    testimonial: {
      quote:
        "I run my next cohort with two clicks. The team got my brand on the first try.",
      author: "Founder",
      role: "Siddha Coaching",
    },
  },
  {
    slug: "ironclad-msp-comanaged-it",
    client: "Ironclad MSP",
    title: "Co-managed IT partnership for a 200-endpoint legal firm.",
    summary:
      "Provided 24×7 monitoring, endpoint management, and a behind-the-firewall AI assistant for an MSP supporting a regulated legal client.",
    category: "Internal Tool",
    industry: "Professional services",
    year: "2026",
    durationWeeks: 8,
    services: ["Co-managed IT", "Monitoring", "Data engineering"],
    stack: ["AWS", "Datadog", "Postgres", "Internal LLM"],
    accent: "lime",
    problem:
      "An MSP partner had a regulated legal client with 200 endpoints, strict compliance requirements, and no headcount for a senior platform engineer.",
    approach: [
      "Augmented the existing IT team with our on-call rotation.",
      "Deployed monitoring, log aggregation, and alerting on AWS + Datadog.",
      "Stood up a private LLM assistant for IT runbook lookups — never leaves the firewall.",
      "Ran a quarterly security review and remediation plan.",
    ],
    outcome:
      "Mean time to acknowledge dropped from 42 minutes to 4. Zero compliance incidents in the first 9 months.",
    metrics: [
      { label: "MTTA", value: "4 min" },
      { label: "Compliance incidents", value: "0" },
      { label: "Endpoints monitored", value: "200" },
      { label: "On-call coverage", value: "24×7" },
    ],
  },
  {
    slug: "atlas-realty-lead-engine",
    client: "Atlas Realty",
    title: "Branded property microsites + Instagram lead engine.",
    summary:
      "Per-listing microsites with floor plans, neighbourhood data, and a lead-routing pipeline — paired with a high-tempo Instagram campaign.",
    category: "Marketing Site",
    industry: "Real estate & property tech",
    year: "2026",
    durationWeeks: 3,
    services: ["Brand design", "Web engineering", "Performance marketing"],
    stack: ["Next.js", "Vercel", "Postgres", "WhatsApp API", "Meta Ads"],
    accent: "amber",
    problem:
      "A boutique real-estate firm was losing leads in WhatsApp threads. Listings looked generic and follow-up was inconsistent.",
    approach: [
      "Designed a flexible microsite template that adapts to each listing.",
      "Built lead routing into WhatsApp with automated qualification responses.",
      "Launched a paid + organic Instagram engine focused on lifestyle content.",
    ],
    outcome:
      "Lead-to-meeting conversion went from 11% to 28% in two months.",
    metrics: [
      { label: "Lead-to-meeting", value: "28%" },
      { label: "Listings live", value: "47" },
      { label: "Avg response time", value: "<2 min" },
      { label: "Paid CPL", value: "−36%" },
    ],
  },
  {
    slug: "verdant-saas-mvp",
    client: "Verdant",
    title: "SaaS MVP for a climate-tech founder.",
    summary:
      "Built a multi-tenant SaaS for carbon accounting in 6 weeks — auth, billing, dashboards, and a public marketing site.",
    category: "Web App",
    industry: "SaaS & early-stage startups",
    year: "2026",
    durationWeeks: 6,
    services: ["Discovery & PRD", "Product design", "Web engineering", "Deployment"],
    stack: ["Next.js", "Postgres", "Stripe", "Clerk", "Vercel"],
    accent: "mint",
    problem:
      "A first-time climate-tech founder had a clear thesis but no engineering team. Investors wanted to see a working product before the next cheque.",
    approach: [
      "Locked scope in a PRD covering auth, billing, dashboards, and reporting.",
      "Designed a tight Figma system and shipped weekly Loom demos.",
      "Built a multi-tenant Next.js app on Postgres with Stripe billing and Clerk auth.",
      "Deployed previews per branch so the founder could share with design partners.",
    ],
    outcome:
      "Founder closed a seed round 9 weeks after kickoff using the product as the live demo.",
    metrics: [
      { label: "Time to MVP", value: "6 wks" },
      { label: "Design partners signed", value: "7" },
      { label: "Round closed", value: "Seed" },
      { label: "Production bugs in first 30 days", value: "1" },
    ],
    testimonial: {
      quote:
        "I walked into pitches with a working product. That changed every conversation.",
      author: "Founder & CEO",
      role: "Verdant",
    },
  },
];

export function getCaseStudy(slug: string) {
  return CASE_STUDIES.find((c) => c.slug === slug);
}
