import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";
import { accentForProject, formatLiveUrl, getEcosystemLabel } from "@/components/projects/utils";
import { CardShell, CardGlow } from "@/components/ui/card-shell";
import { Pill } from "@/components/ui/pill";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  large?: boolean;
  className?: string;
};

export function ProjectCard({ project, large = false, className }: ProjectCardProps) {
  const accent = accentForProject(project);
  const ecosystem = getEcosystemLabel(project.ecosystem);

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={cn("group block h-full", className)}
    >
      <CardShell
        interactive
        className={cn(
          "relative h-full p-7 md:p-8 flex flex-col",
          large ? "min-h-[380px]" : "min-h-[240px]"
        )}
      >
        <CardGlow color={accent.glow} />
        <div
          className={cn("absolute left-0 top-8 bottom-8 w-1 rounded-full", accent.bg)}
          aria-hidden
        />

        <div className="pl-4 flex flex-col h-full">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <Pill>{project.region}</Pill>
            <Pill>{project.type}</Pill>
            {ecosystem ? <Pill>{ecosystem}</Pill> : null}
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-3 ml-auto">
              #{String(project.number).padStart(2, "0")}
            </span>
          </div>

          <h3
            className={cn(
              "font-display font-medium tracking-tight text-ink leading-tight",
              large ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"
            )}
          >
            {project.name}
          </h3>

          <p className="mt-3 text-ink-2 text-sm md:text-base leading-relaxed flex-1 line-clamp-3">
            {project.purpose}
          </p>

          <div className="mt-6 flex items-end justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {project.techStack.slice(0, large ? 4 : 3).map((entry) => (
                <span
                  key={`${entry.layer}-${entry.technology}`}
                  className="px-2.5 py-1 rounded-full bg-surface-2 border border-border text-[11px] text-ink-3 font-mono uppercase tracking-wider"
                >
                  {entry.technology.split(/[,+\s]/)[0]}
                </span>
              ))}
            </div>

            <span className="inline-flex shrink-0 items-center gap-1 text-sm text-ink-2 group-hover:text-accent transition-colors">
              View details
              <ArrowUpRight
                size={16}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </span>
          </div>

          {project.liveUrl ? (
            <div className="mt-4 pt-4 border-t border-border">
              <span className="inline-flex items-center gap-1.5 text-xs text-ink-3 font-mono uppercase tracking-wider">
                <ExternalLink size={12} className={accent.text} />
                {formatLiveUrl(project.liveUrl)}
              </span>
            </div>
          ) : null}
        </div>
      </CardShell>
    </Link>
  );
}
