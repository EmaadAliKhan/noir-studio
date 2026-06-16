import type { Project } from "@/data/projects";
import { ACCENT_CLASSES, type AccentClasses } from "@/components/case-studies/utils";

export function accentForProject(project: Project): AccentClasses {
  return ACCENT_CLASSES[project.accent];
}

export function uniqueSorted<T>(items: T[], pick: (item: T) => string): string[] {
  return Array.from(new Set(items.map(pick))).sort((a, b) => a.localeCompare(b));
}

export function getEcosystemLabel(ecosystem: Project["ecosystem"]): string | null {
  if (!ecosystem) return null;
  if (ecosystem === "recaf") return "Recaf";
  if (ecosystem === "broker") return "Broker";
  if (ecosystem === "mallsapp") return "MallsApp";
  return null;
}

export function formatLiveUrl(url: string): string {
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}
