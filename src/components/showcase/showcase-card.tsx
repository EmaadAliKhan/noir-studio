import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ShowcaseProject } from "@/data/showcase";
import { BrowserFrame } from "@/components/showcase/browser-frame";
import { CardShell, CardGlow } from "@/components/ui/card-shell";
import { Pill } from "@/components/ui/pill";
import { cn } from "@/lib/utils";

const REGION_ACCENT: Record<string, { bg: string; glow: string; text: string }> = {
  KSA: { bg: "bg-accent", glow: "rgba(217,255,91,0.35)", text: "text-accent" },
  Egypt: { bg: "bg-accent-2", glow: "rgba(110,231,183,0.35)", text: "text-accent-2" },
  "USA + India": { bg: "bg-accent-3", glow: "rgba(244,184,96,0.35)", text: "text-accent-3" },
  Global: { bg: "bg-accent", glow: "rgba(217,255,91,0.35)", text: "text-accent" },
};

type ShowcaseCardProps = {
  project: ShowcaseProject;
  large?: boolean;
  className?: string;
};

export function ShowcaseCard({ project, large = false, className }: ShowcaseCardProps) {
  const accent = REGION_ACCENT[project.region] ?? REGION_ACCENT.Global;

  return (
    <Link
      href={`/work/${project.slug}`}
      className={cn("group block h-full", className)}
    >
      <CardShell interactive className="relative h-full overflow-hidden flex flex-col">
        <CardGlow color={accent.glow} />

        <div className="p-3 md:p-4 pb-0">
          <BrowserFrame
            src={project.screenshot}
            alt={`${project.name} website screenshot`}
          />
        </div>

        <div className={cn("flex flex-col flex-1 p-5 md:p-6 pt-4", large && "md:p-7")}>
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <Pill>{project.region}</Pill>
            <Pill>{project.type}</Pill>
          </div>

          <h3
            className={cn(
              "font-display font-medium tracking-tight text-ink",
              large ? "text-2xl md:text-3xl" : "text-lg md:text-xl"
            )}
          >
            {project.name}
          </h3>

          <p className="mt-2 text-sm text-ink-2 leading-relaxed line-clamp-2 flex-1">
            {project.summary}
          </p>

          <div className="mt-4 flex items-center justify-between gap-3 pt-4 border-t border-border">
            <span className="font-mono text-[10px] uppercase tracking-wider text-ink-3 truncate">
              {project.url.replace(/^https?:\/\//, "")}
            </span>
            <span className={cn("inline-flex shrink-0 items-center gap-1 text-sm transition-colors", accent.text, "group-hover:brightness-110")}>
              View project
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </span>
          </div>
        </div>
      </CardShell>
    </Link>
  );
}

export function accentForRegion(region: string) {
  return REGION_ACCENT[region] ?? REGION_ACCENT.Global;
}
