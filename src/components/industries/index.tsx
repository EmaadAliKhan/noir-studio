import { ArrowUpRight } from "lucide-react";
import { INDUSTRIES } from "@/lib/content";
import { IndustryCard } from "@/components/industries/industry-card";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { BentoGrid, BentoCell } from "@/components/ui/bento";
import { CardShell } from "@/components/ui/card-shell";
import { ButtonLink } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/pill";
import { Reveal } from "@/components/ui/reveal";

const BENTO_LAYOUT: Array<{ col: string; tone: "hero" | "medium" | "small" }> = [
  { col: "lg:col-span-7", tone: "hero" },
  { col: "lg:col-span-5", tone: "hero" },
  { col: "lg:col-span-4", tone: "medium" },
  { col: "lg:col-span-4", tone: "medium" },
  { col: "lg:col-span-4", tone: "medium" },
  { col: "lg:col-span-12", tone: "medium" },
];

export function IndustriesPage() {
  return (
    <>
      <Section className="pt-12 md:pt-20 pb-12 md:pb-16">
        <Container>
          <Reveal>
            <CardShell className="bg-surface rounded-[36px] px-8 py-14 md:px-16 md:py-24 bg-noise relative overflow-hidden">
              <div className="relative z-10 max-w-4xl">
                <Eyebrow className="mb-8">Industries</Eyebrow>
                <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-0.03em] leading-[0.95] text-ink">
                  We&apos;ve shipped across{" "}
                  <span className="font-serif italic font-normal text-accent">
                    six verticals.
                  </span>
                </h1>
                <p className="mt-8 text-lg md:text-xl text-ink-2 leading-relaxed max-w-2xl">
                  From fintech dashboards to cohort platforms — we bring the same
                  PRD-first process, senior architectural oversight, and fixed-price
                  delivery to every sector we touch.
                </p>
              </div>
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

      <Section className="bg-canvas-2/40">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Verticals"
              title={
                <>
                  Where we{" "}
                  <span className="font-serif italic text-ink-2">have depth.</span>
                </>
              }
              description="Every industry has its own compliance, pace, and buyer psychology. We've built playbooks for the six we know best."
            />
          </Reveal>

          <BentoGrid>
            {INDUSTRIES.map((industry, i) => (
              <BentoCell
                key={industry.slug}
                col={`${BENTO_LAYOUT[i]?.col ?? "lg:col-span-4"} md:col-span-3`}
              >
                <IndustryCard
                  industry={industry}
                  tone={BENTO_LAYOUT[i]?.tone ?? "medium"}
                />
              </BentoCell>
            ))}
          </BentoGrid>
        </Container>
      </Section>

      <Section className="pb-28 md:pb-36">
        <Container>
          <Reveal>
            <CardShell className="rounded-[36px] bg-surface px-8 py-16 md:px-16 md:py-24 text-center relative overflow-hidden">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-20"
                style={{
                  background:
                    "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(217,255,91,0.4), transparent)",
                }}
              />
              <div className="relative z-10 max-w-4xl mx-auto">
                <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium tracking-[-0.02em] leading-[1.02] text-ink">
                  Not sure if we fit your{" "}
                  <span className="font-serif italic text-accent">vertical?</span>
                </h2>
                <p className="mt-6 text-lg text-ink-2 max-w-xl mx-auto">
                  Tell us what you&apos;re building. We&apos;ll be honest about fit
                  and reply within one business day.
                </p>
                <ButtonLink
                  href="/contact"
                  variant="accent"
                  size="lg"
                  className="mt-10 inline-flex"
                >
                  Start a conversation
                  <ArrowUpRight size={18} />
                </ButtonLink>
              </div>
            </CardShell>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
