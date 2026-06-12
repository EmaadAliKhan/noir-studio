import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Industry } from "@/lib/content";
import { CardShell, CardGlow } from "@/components/ui/card-shell";

type IndustryCardProps = {
  industry: Industry;
  tone?: "hero" | "medium" | "small";
};

export function IndustryCard({ industry, tone = "medium" }: IndustryCardProps) {
  const Icon = industry.icon;

  const heightClass =
    tone === "hero"
      ? "min-h-[280px] md:min-h-[320px]"
      : tone === "medium"
        ? "min-h-[240px] md:min-h-[260px]"
        : "min-h-[220px] md:min-h-[240px]";

  const titleSize =
    tone === "hero"
      ? "text-2xl md:text-3xl lg:text-[34px]"
      : "text-lg md:text-xl";

  return (
    <Link
      href={`/industries/${industry.slug}`}
      className="group block h-full focus:outline-none"
      aria-label={`${industry.name} — view industry`}
    >
      <CardShell
        interactive
        className={`group h-full p-7 md:p-8 flex flex-col ${heightClass}`}
      >
        <CardGlow />
        <div className="flex items-start justify-between">
          <div className="inline-flex items-center justify-center size-11 rounded-2xl bg-accent/10 border border-accent/15 text-accent transition-colors duration-300 group-hover:bg-accent/15">
            <Icon size={18} strokeWidth={1.75} />
          </div>
          <span className="inline-flex size-9 items-center justify-center rounded-full bg-canvas-2/60 border border-border text-ink-3 transition-all duration-300 group-hover:bg-accent group-hover:text-ink-inverse group-hover:border-accent group-hover:rotate-[-12deg]">
            <ArrowUpRight size={16} strokeWidth={2} />
          </span>
        </div>

        <div className="mt-6 flex-1 flex flex-col gap-3">
          <h3
            className={`font-display font-medium tracking-tight leading-tight text-ink ${titleSize}`}
          >
            {industry.name}
          </h3>
          <p
            className={`text-ink-2 leading-relaxed ${
              tone === "hero" ? "text-sm md:text-base max-w-md" : "text-[13.5px] md:text-sm"
            }`}
          >
            {industry.summary}
          </p>
        </div>

        <div className="mt-6 pt-5 border-t border-border space-y-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-3">
            Common challenges
          </span>
          <ul className="space-y-1.5">
            {industry.challenges.slice(0, 2).map((challenge) => (
              <li
                key={challenge}
                className="text-xs md:text-[13px] text-ink-2 leading-snug flex items-start gap-2"
              >
                <span className="mt-1.5 size-1 rounded-full bg-accent shrink-0" />
                {challenge}
              </li>
            ))}
          </ul>
        </div>
      </CardShell>
    </Link>
  );
}
