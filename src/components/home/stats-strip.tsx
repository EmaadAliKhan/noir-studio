import * as React from "react";
import { Container, Section } from "@/components/ui/section";
import { Stat } from "@/components/ui/stat";
import { Reveal, RevealStagger } from "@/components/ui/reveal";
import { STATS } from "@/lib/content";

// StatsStrip — a quiet, confidence-building 4-up row that follows the hero.
// Provides a numeric anchor before the long scroll begins.
export function StatsStrip() {
  return (
    <Section className="py-16 md:py-20">
      <Container>
        <Reveal>
          <div className="flex items-center gap-3 mb-10 md:mb-14">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-3">
              By the numbers
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>
        </Reveal>
        <RevealStagger className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 md:gap-x-10">
          {STATS.map((s) => (
            <Stat key={s.label} value={s.value} label={s.label} />
          ))}
        </RevealStagger>
      </Container>
    </Section>
  );
}
