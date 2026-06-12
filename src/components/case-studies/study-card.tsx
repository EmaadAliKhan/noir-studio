import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { CaseStudy } from "@/data/case-studies";
import { accentFor } from "@/components/case-studies/utils";
import { CardShell, CardGlow } from "@/components/ui/card-shell";
import { Pill } from "@/components/ui/pill";
import { cn } from "@/lib/utils";

type StudyCardProps = {
  study: CaseStudy;
  large?: boolean;
  className?: string;
};

export function StudyCard({ study, large = false, className }: StudyCardProps) {
  const accent = accentFor(study.accent);

  return (
    <Link
      href={`/case-studies/${study.slug}`}
      className={cn("group block h-full", className)}
    >
      <CardShell
        interactive
        className={cn(
          "relative h-full p-7 md:p-8 flex flex-col",
          large ? "min-h-[420px]" : "min-h-[240px]"
        )}
      >
        <CardGlow color={accent.glow} />
        <div
          className={cn("absolute left-0 top-8 bottom-8 w-1 rounded-full", accent.bg)}
          aria-hidden
        />

        <div className="pl-4 flex flex-col h-full">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <Pill>{study.category}</Pill>
            <Pill>{study.industry}</Pill>
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-3 ml-auto">
              {study.year} · {study.durationWeeks} wks
            </span>
          </div>

          <p className={cn("font-mono text-[11px] uppercase tracking-[0.18em] mb-2", accent.text)}>
            {study.client}
          </p>

          <h3
            className={cn(
              "font-display font-medium tracking-tight text-ink leading-tight",
              large ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"
            )}
          >
            {study.title}
          </h3>

          <p className="mt-3 text-ink-2 text-sm md:text-base leading-relaxed flex-1">
            {study.summary}
          </p>

          <div className="mt-6 flex items-end justify-between gap-4">
            <div className="flex flex-wrap gap-4">
              {study.metrics.slice(0, large ? 3 : 2).map((metric) => (
                <div key={metric.label}>
                  <div className={cn("font-display text-xl md:text-2xl", accent.text)}>
                    {metric.value}
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-ink-3">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

            <span className="inline-flex shrink-0 items-center gap-1 text-sm text-ink-2 group-hover:text-accent transition-colors">
              Read case study
              <ArrowUpRight
                size={16}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </span>
          </div>
        </div>
      </CardShell>
    </Link>
  );
}
