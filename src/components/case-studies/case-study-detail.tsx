import type * as React from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import type { CaseStudy } from "@/data/case-studies";
import { accentFor } from "@/components/case-studies/utils";
import { RelatedStudies } from "@/components/case-studies/related-studies";
import { ButtonLink } from "@/components/ui/button";
import { CardShell, CardGlow } from "@/components/ui/card-shell";
import { Pill } from "@/components/ui/pill";
import { Reveal } from "@/components/ui/reveal";
import { Container, Section } from "@/components/ui/section";
import { Stat } from "@/components/ui/stat";
import { cn } from "@/lib/utils";

type CaseStudyDetailProps = {
  study: CaseStudy;
};

export function CaseStudyDetail({ study }: CaseStudyDetailProps) {
  const accent = accentFor(study.accent);

  return (
    <>
      <Section className="pt-10 md:pt-14 pb-8 md:pb-12">
        <Container>
          <Reveal>
            <CardShell className="rounded-[36px] bg-surface relative overflow-hidden">
              <CardGlow color={accent.glow} />
              <div
                aria-hidden
                className="pointer-events-none absolute -top-24 -right-24 size-[420px] rounded-full opacity-25 blur-3xl"
                style={{
                  background: `radial-gradient(circle, ${accent.glow}, transparent 70%)`,
                }}
              />

              <div className="relative p-8 md:p-12 lg:p-16">
                <div
                  className={cn("absolute left-0 top-10 bottom-10 w-1 rounded-full", accent.bg)}
                  aria-hidden
                />

                <div className="pl-5 md:pl-6 max-w-4xl">
                  <div className="flex flex-wrap items-center gap-2 mb-5">
                    <Pill>{study.category}</Pill>
                    <Pill>{study.industry}</Pill>
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-3">
                      {study.year} · {study.durationWeeks} weeks
                    </span>
                  </div>

                  <p
                    className={cn(
                      "font-mono text-[11px] uppercase tracking-[0.2em] mb-3",
                      accent.text
                    )}
                  >
                    {study.client}
                  </p>

                  <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium tracking-[-0.02em] leading-[1.04] text-ink">
                    {study.title}
                  </h1>

                  <p className="mt-6 text-base md:text-lg text-ink-2 leading-relaxed max-w-3xl">
                    {study.summary}
                  </p>
                </div>

                <div className="mt-10 md:mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 pl-5 md:pl-6">
                  {study.metrics.map((metric) => (
                    <Stat
                      key={metric.label}
                      value={
                        <span className={accent.text}>{metric.value}</span>
                      }
                      label={metric.label}
                    />
                  ))}
                </div>
              </div>
            </CardShell>
          </Reveal>
        </Container>
      </Section>

      <Section className="py-12 md:py-16">
        <Container>
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16">
            <Reveal>
              <div>
                <SectionLabel>The problem</SectionLabel>
                <p className="mt-4 text-base md:text-lg text-ink-2 leading-relaxed">
                  {study.problem}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <div>
                <SectionLabel>The outcome</SectionLabel>
                <p className="mt-4 text-base md:text-lg text-ink-2 leading-relaxed">
                  {study.outcome}
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section className="bg-canvas-2/40 py-12 md:py-16">
        <Container>
          <Reveal>
            <SectionLabel>Our approach</SectionLabel>
            <p className="mt-3 max-w-2xl text-ink-2">
              A fixed sequence from discovery to launch — scoped in the PRD before
              code started.
            </p>
          </Reveal>

          <ol className="mt-10 space-y-4">
            {study.approach.map((step, index) => (
              <Reveal key={step} delay={index * 0.04}>
                <CardShell className="group p-6 md:p-7 flex gap-4 md:gap-5">
                  <CardGlow color={accent.glow} />
                  <div
                    className={cn(
                      "flex size-10 shrink-0 items-center justify-center rounded-2xl border font-mono text-sm",
                      accent.bgSoft,
                      accent.border,
                      accent.text
                    )}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="flex-1">
                    <p className="text-base md:text-lg text-ink leading-relaxed">{step}</p>
                  </div>
                  <CheckCircle2
                    size={18}
                    className={cn("shrink-0 opacity-40 mt-1", accent.text)}
                    aria-hidden
                  />
                </CardShell>
              </Reveal>
            ))}
          </ol>
        </Container>
      </Section>

      <Section className="py-12 md:py-16">
        <Container>
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            <Reveal>
              <div>
                <SectionLabel>Services delivered</SectionLabel>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {study.services.map((service) => (
                    <Pill key={service}>{service}</Pill>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <div>
                <SectionLabel>Stack</SectionLabel>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {study.stack.map((item) => (
                    <Pill key={item} className={cn(accent.bgSoft, accent.border)}>
                      {item}
                    </Pill>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {study.testimonial ? (
        <Section className="bg-canvas-2/40 py-12 md:py-16">
          <Container>
            <Reveal>
              <CardShell className="rounded-[32px] p-8 md:p-12 relative overflow-hidden">
                <CardGlow color={accent.glow} />
                <div
                  className={cn("absolute left-0 top-8 bottom-8 w-1 rounded-full", accent.bg)}
                  aria-hidden
                />
                <blockquote className="pl-5 md:pl-6 max-w-3xl">
                  <p className="font-display text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight leading-snug text-ink">
                    &ldquo;{study.testimonial.quote}&rdquo;
                  </p>
                  <footer className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-3">
                    {study.testimonial.author} · {study.testimonial.role}
                  </footer>
                </blockquote>
              </CardShell>
            </Reveal>
          </Container>
        </Section>
      ) : null}

      <RelatedStudies study={study} />

      <Section className="pb-28 md:pb-36">
        <Container>
          <Reveal>
            <CardShell className="rounded-[36px] bg-surface px-8 py-16 md:px-16 md:py-24 text-center relative overflow-hidden">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-20"
                style={{
                  background: `radial-gradient(ellipse 80% 60% at 50% 100%, ${accent.glow}, transparent)`,
                }}
              />
              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium tracking-[-0.02em] leading-[1.04] text-ink">
                  Want results like{" "}
                  <span className={cn("font-serif italic", accent.text)}>
                    {study.client}
                  </span>
                  ?
                </h2>
                <p className="mt-6 text-lg text-ink-2">
                  Tell us what you&apos;re building. We&apos;ll reply within one business
                  day with a clear next step — scope, timeline, and fixed price.
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

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-3">
      <span className="size-1.5 rounded-full bg-accent" />
      {children}
    </div>
  );
}
