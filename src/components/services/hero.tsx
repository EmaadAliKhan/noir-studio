import { ArrowDown, Sparkles } from "lucide-react";
import { Container, Section } from "@/components/ui/section";
import { CardShell } from "@/components/ui/card-shell";
import { Pill, Eyebrow } from "@/components/ui/pill";
import { Reveal } from "@/components/ui/reveal";

const TRACK_PILLS = ["Build", "Run", "Grow"];

export function ServicesHero() {
  return (
    <Section className="pt-12 md:pt-20 pb-12 md:pb-20">
      <Container>
        <Reveal>
          <CardShell className="bg-surface rounded-[36px] px-8 py-14 md:px-16 md:py-24 bg-noise">
            <div className="relative z-10 max-w-4xl">
              <Eyebrow className="mb-8">Services</Eyebrow>
              <h1 className="font-display text-6xl md:text-8xl font-medium tracking-[-0.03em] leading-[0.95] text-ink">
                Six services.{" "}
                <span className="font-serif italic font-normal text-accent">
                  One team.
                </span>
              </h1>
              <p className="mt-8 text-lg md:text-xl text-ink-2 leading-relaxed max-w-2xl">
                Design, engineering, deployment, monitoring, data, and growth
                marketing under one roof. End-to-end ownership with senior
                architectural oversight — so you ship faster without trading
                away structural integrity.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-ink-3 mr-1">
                  Three tracks
                </span>
                {TRACK_PILLS.map((label) => (
                  <Pill key={label} className="bg-canvas-2 text-ink">
                    <Sparkles className="size-3 text-accent" />
                    {label}
                  </Pill>
                ))}
              </div>

              <a
                href="#tracks"
                className="mt-12 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-3 hover:text-ink transition-colors"
              >
                Scroll to explore
                <ArrowDown className="size-3.5" />
              </a>
            </div>

            {/* Decorative gradient halo */}
            <div
              aria-hidden
              className="pointer-events-none absolute -right-24 -top-24 size-[420px] rounded-full opacity-50 blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, rgba(217,255,91,0.25) 0%, rgba(110,231,183,0.08) 40%, transparent 70%)",
              }}
            />
          </CardShell>
        </Reveal>
      </Container>
    </Section>
  );
}
