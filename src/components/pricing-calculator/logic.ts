export type ProjectType =
  | "marketing-site"
  | "web-app"
  | "mobile-app"
  | "internal-tool"
  | "data-platform";

export type ScopeSize = "sm" | "md" | "lg" | "xl";

export type AddonKey =
  | "brand"
  | "illustrations"
  | "animations"
  | "cms"
  | "auth"
  | "payments"
  | "analytics"
  | "seo"
  | "comanagedIt"
  | "marketing";

export type PricingInput = {
  projectType: ProjectType;
  scopeSize: ScopeSize;
  timelineWeeks: number;
  addons: AddonKey[];
};

export type PricingEstimate = {
  minUsd: number;
  maxUsd: number;
  breakdown: { label: string; amount: number }[];
};

const PROJECT_BASE_USD: Record<ProjectType, number> = {
  "marketing-site": 8000,
  "web-app": 18000,
  "mobile-app": 28000,
  "internal-tool": 14000,
  "data-platform": 22000,
};

const SCOPE_MULTIPLIER: Record<ScopeSize, number> = {
  sm: 1,
  md: 1.6,
  lg: 2.4,
  xl: 3.5,
};

const ADDON_COST: Record<AddonKey, number> = {
  brand: 4000,
  illustrations: 3500,
  animations: 3000,
  cms: 2500,
  auth: 4500,
  payments: 3500,
  analytics: 2000,
  seo: 2500,
  comanagedIt: 9000,
  marketing: 12000,
};

const ADDON_LABELS: Record<AddonKey, string> = {
  brand: "Brand identity",
  illustrations: "Custom illustrations",
  animations: "Motion & animations",
  cms: "CMS integration",
  auth: "Auth & multi-tenant",
  payments: "Payments",
  analytics: "Product analytics",
  seo: "SEO foundation",
  comanagedIt: "Co-managed IT (3 mo)",
  marketing: "Performance marketing (3 mo)",
};

function timelineFactor(weeks: number) {
  if (weeks < 4) return 1.3;
  if (weeks > 12) return 0.9;
  return 1;
}

function roundToThousands(n: number) {
  return Math.round(n / 1000) * 1000;
}

export function calculateEstimate(input: PricingInput): PricingEstimate {
  const base = PROJECT_BASE_USD[input.projectType];
  const scopeMult = SCOPE_MULTIPLIER[input.scopeSize];
  const tf = timelineFactor(input.timelineWeeks);
  const core = base * scopeMult * tf;

  const addonTotal = input.addons.reduce((sum, key) => sum + ADDON_COST[key], 0);
  const engineering = core * 0.55;
  const design = core * 0.25;
  const deployment = core * 0.2;

  const total = core + addonTotal;
  const minUsd = roundToThousands(total);
  const maxUsd = roundToThousands(total * 1.4);

  const breakdown = [
    { label: "Engineering", amount: Math.round(engineering) },
    { label: "Design", amount: Math.round(design) },
    { label: "Deployment & DevOps", amount: Math.round(deployment) },
    ...input.addons.map((key) => ({
      label: ADDON_LABELS[key],
      amount: ADDON_COST[key],
    })),
  ];

  return { minUsd, maxUsd, breakdown };
}

export function formatUsd(n: number) {
  if (n >= 1000) return `$${Math.round(n / 1000)}k`;
  return `$${n}`;
}

export const PROJECT_TYPES: { id: ProjectType; label: string }[] = [
  { id: "marketing-site", label: "Marketing site" },
  { id: "web-app", label: "Web app / SaaS" },
  { id: "mobile-app", label: "Mobile app" },
  { id: "internal-tool", label: "Internal tool" },
  { id: "data-platform", label: "Data platform" },
];

export const SCOPE_SIZES: { id: ScopeSize; label: string; hint: string }[] = [
  { id: "sm", label: "Small", hint: "5 – 10 screens" },
  { id: "md", label: "Medium", hint: "10 – 25 screens" },
  { id: "lg", label: "Large", hint: "25 – 60 screens" },
  { id: "xl", label: "XL", hint: "60+ screens" },
];

export const ADDON_OPTIONS: { id: AddonKey; label: string }[] = [
  { id: "brand", label: "Brand identity" },
  { id: "illustrations", label: "Illustrations" },
  { id: "animations", label: "Animations" },
  { id: "cms", label: "CMS" },
  { id: "auth", label: "Auth" },
  { id: "payments", label: "Payments" },
  { id: "analytics", label: "Analytics" },
  { id: "seo", label: "SEO" },
  { id: "comanagedIt", label: "Co-managed IT" },
  { id: "marketing", label: "Marketing" },
];
