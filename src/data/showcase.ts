import type { ProjectRegion } from "@/data/projects";

export type ShowcaseProject = {
  slug: string;
  name: string;
  url: string;
  screenshot: string;
  region: ProjectRegion;
  type: string;
  summary: string;
  highlights: string[];
  techStack: string[];
  /** Links to the full entry in /projects when available */
  relatedProjectSlug?: string;
};

export const SHOWCASE_PROJECTS: ShowcaseProject[] = [
  {
    slug: "recaf",
    name: "Recaf",
    url: "https://recaf.sa/",
    screenshot: "/screenshots/recaf-sa.png",
    region: "KSA",
    type: "Coffee loyalty platform",
    summary:
      "Public website for Recaf — a specialty coffee brand across Saudi Arabia. Bilingual menu, store locator, loyalty program, and app download flows for a premium cafe experience.",
    highlights: [
      "Bilingual EN/AR experience",
      "Store locator with map integration",
      "Loyalty points & rewards marketing",
      "App Store & Google Play funnels",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Foodics integration"],
    relatedProjectSlug: "recaf-mobile",
  },
  {
    slug: "mallsapp",
    name: "MallsApp",
    url: "https://mallsapp.me/",
    screenshot: "/screenshots/mallsapp-me.png",
    region: "KSA",
    type: "Mall shopping platform",
    summary:
      "Marketing site for MallsApp — a mall shopping companion for KSA covering brands, cinema, events, offers, loyalty cards, parking, and push notifications.",
    highlights: [
      "Multi-mall discovery & offers",
      "Cinema & events listings",
      "Loyalty card integration",
      "Mobile-first mall companion",
    ],
    techStack: ["PHP", "MySQL", "AWS", "OpenAPI REST"],
    relatedProjectSlug: "mallsapp",
  },
  {
    slug: "brokerapp",
    name: "Broker",
    url: "https://brokerapp.me/",
    screenshot: "/screenshots/brokerapp-me.png",
    region: "Egypt",
    type: "Real estate platform",
    summary:
      "Public landing and marketing site for Broker — an Egyptian real estate platform connecting buyers, sellers, agents, and property listings with maps and mobile app funnels.",
    highlights: [
      "Property search & listings",
      "Agent & company profiles",
      "Arabic / English support",
      "Mobile app download flows",
    ],
    techStack: ["Laravel 10", "Blade + Vite", "SQL Server", "Paymob"],
    relatedProjectSlug: "broker-dashboard",
  },
  {
    slug: "lago",
    name: "LAGO",
    url: "https://lago.com.sa/en",
    screenshot: "/screenshots/lago-com-sa.png",
    region: "KSA",
    type: "Restaurant website",
    summary:
      "Bilingual restaurant website for LAGO in Riyadh — menu, reservations, events, queue management, and brand storytelling for a premium dining experience.",
    highlights: [
      "Bilingual EN/AR menu & content",
      "Reservations & queue management",
      "Events & promotions",
      "Admin-managed content",
    ],
    techStack: ["Laravel 9", "Vue 3 + Inertia", "Tailwind CSS", "MySQL"],
    relatedProjectSlug: "lago-website",
  },
  {
    slug: "ncd-international",
    name: "NCD International",
    url: "https://aasimalikhan.github.io/Architecture-Design-Studio/",
    screenshot: "/screenshots/ncd-international.png",
    region: "USA + India",
    type: "Architecture portfolio",
    summary:
      "Portfolio for NCD International — an architecture and design studio showcasing civic, cultural, and residential projects worldwide with an interactive Three.js globe hero and cinematic scroll.",
    highlights: [
      "Interactive Three.js globe hero",
      "GSAP scroll animations",
      "Lenis smooth scrolling",
      "Global project showcase",
    ],
    techStack: ["Vite 5", "TypeScript", "Three.js", "GSAP + Lenis"],
    relatedProjectSlug: "ncd-international",
  },
];

export function getShowcaseProject(slug: string): ShowcaseProject | undefined {
  return SHOWCASE_PROJECTS.find((p) => p.slug === slug);
}

export function getShowcaseByProjectSlug(
  projectSlug: string
): ShowcaseProject | undefined {
  return SHOWCASE_PROJECTS.find(
    (p) =>
      p.relatedProjectSlug === projectSlug || p.slug === projectSlug
  );
}
