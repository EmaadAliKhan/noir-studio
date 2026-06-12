import type { CaseStudy } from "@/data/case-studies";

// Maps a case study's `accent` token to Tailwind utility classes that point at
// the corresponding CSS variables. Lets every visual flourish on the page tint
// itself with the right brand colour without one-off conditionals everywhere.
export type AccentToken = CaseStudy["accent"];

export type AccentClasses = {
  text: string;
  bg: string;
  bgSoft: string;
  border: string;
  ring: string;
  glow: string;
};

export const ACCENT_CLASSES: Record<AccentToken, AccentClasses> = {
  lime: {
    text: "text-accent",
    bg: "bg-accent",
    bgSoft: "bg-accent/10",
    border: "border-accent/40",
    ring: "ring-accent/30",
    glow: "rgba(217,255,91,0.18)",
  },
  mint: {
    text: "text-accent-2",
    bg: "bg-accent-2",
    bgSoft: "bg-accent-2/10",
    border: "border-accent-2/40",
    ring: "ring-accent-2/30",
    glow: "rgba(110,231,183,0.18)",
  },
  amber: {
    text: "text-accent-3",
    bg: "bg-accent-3",
    bgSoft: "bg-accent-3/10",
    border: "border-accent-3/40",
    ring: "ring-accent-3/30",
    glow: "rgba(244,184,96,0.20)",
  },
};

export function accentFor(token: AccentToken): AccentClasses {
  return ACCENT_CLASSES[token];
}

// Build a stable, sorted list of unique values for filter chips.
export function uniqueSorted<T>(items: T[], pick: (item: T) => string): string[] {
  return Array.from(new Set(items.map(pick))).sort((a, b) => a.localeCompare(b));
}
