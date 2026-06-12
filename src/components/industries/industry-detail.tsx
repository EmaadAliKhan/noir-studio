import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle2, CircleAlert } from "lucide-react";
import type { Industry } from "@/lib/content";
import { CASE_STUDIES } from "@/data/case-studies";
import { accentFor } from "@/components/case-studies/utils";
import { Container, Section } from "@/components/ui/section";
import { CardShell, CardGlow } from "@/components/ui/card-shell";
import { ButtonLink } from "@/components/ui/button";
import { Pill } from "@/components/ui/pill";
import { Reveal } from "@/components/ui/reveal";

type IndustryDetailProps = {
  industry: Industry;
};

export function IndustryDetail({ industry }: IndustryDetailProps) {
  const Icon = industry.icon;
  const relatedStudies = CASE_STUDIES.filter(
    (study) => study.industry === industry.name
  );

  return (
    <>
      <Section className="pt-10 md:pt-14 pb-8 md:pb-12">
        <Container>
          <Reveal>
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-3 hover:text-ink transition-colors mb-8"
            >
              <ArrowLeft size={14} />
              All industries
            </Link>

            <CardShell className="rounded-[36px] bg-surface relative overflow-hidden">
              <div
                aria-hidden
                className="pointer-events-none absolute -top-32 -right-32 size-[480px] rounded-full opacity-30 blur-3xl"
                style={{
                  background:
                    "radial-gradient(circle, rgba(217,255,91,0.35), transparent 70%)",
                }}
              />

              <div className="p-8 md:p-12 lg:p-16">
                <div className="inline-flex items-center justify-center size-14 rounded-2xl bg-accent/10 border border-accent/15 text-accent mb-8">
                  <Icon size={24} strokeWidth={1.75} />
                </div>

                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium tracking-[-0.02em] leading-[1.02] text-ink max-w-3xl">
                  {industry.name}
                </h1>
                <p className="mt-6 text-base md:text-lg text-ink-2 leading-relaxed max-w-2xl">
                  {industry.summary}
                </p>
              </div>
            </CardShell>
          </Reveal>
        </Container>
      </Section>

      <Section className="bg-canvas-2/40">
        <Container>
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
              <CardShell className="p-8 md:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="inline-flex items-center justify-center size-10 rounded-xl bg-accent-3/10 border border-accent-3/20 text-accent-3">
                    <CircleAlert size={18} strokeWidth={1.75} />
                  </div>
                  <h2 className="font-display text-2xl md:text-3xl font-medium tracking-tight text-ink">
                    Challenges we hear
                  </h2>
                </div>
                <ul className="space-y-4">
                  {industry.challenges.map((challenge) => (
                    <li
                      key={challenge}
                      className="flex items-start gap-3 text-ink-2 leading-relaxed"
                    >
                      <span className="mt-2 size-1.5 rounded-full bg-accent-3 shrink-0" />
                      {challenge}
                    </li>
                  ))}
                </ul>
              </CardShell>

              <CardShell className="p-8 md:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="inline-flex items-center justify-center size-10 rounded-xl bg-accent/10 border border-accent/20 text-accent">
                    <CheckCircle2 size={18} strokeWidth={1.75} />
                  </div>
                  <h2 className="font-display text-2xl md:text-3xl font-medium tracking-tight text-ink">
                    Outcomes we deliver
                  </h2>
                </div>
                <ul className="space-y-4">
                  {industry.outcomes.map((outcome) => (
                    <li
                      key={outcome}
                      className="flex items-start gap-3 text-ink-2 leading-relaxed"
                    >
                      <span className="mt-2 size-1.5 rounded-full bg-accent shrink-0" />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </CardShell>
            </div>
          </Reveal>
        </Container>
      </Section>

      {relatedStudies.length > 0 ? (
        <Section>
          <Container>
            <Reveal>
              <div className="mb-12 md:mb-16">
                <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-3 mb-4">
                  <span className="size-1.5 rounded-full bg-accent" />
                  Case studies
                </div>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium tracking-[-0.02em] leading-[1.02] text-ink">
                  Work in{" "}
                  <span className="font-serif italic text-ink-2">
                    {industry.name.toLowerCase()}
                  </span>
                </h2>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
              {relatedStudies.map((study) => {
                const accent = accentFor(study.accent);
                return (
                  <Reveal key={study.slug}>
                    <Link
                      href={`/case-studies/${study.slug}`}
                      className="group block h-full"
                    >
                      <CardShell
                        interactive
                        className="relative h-full p-7 md:p-8 flex flex-col min-h-[240px]"
                      >
                        <CardGlow color={accent.glow} />
                        <div
                          className={`absolute left-0 top-8 bottom-8 w-1 rounded-full ${accent.bg}`}
                          aria-hidden
                        />
                        <div className="pl-4 flex flex-col h-full">
                          <div className="flex flex-wrap gap-2 mb-4">
                            <Pill>{study.category}</Pill>
                            <Pill>{study.client}</Pill>
                          </div>
                          <h3 className="font-display text-xl md:text-2xl font-medium tracking-tight text-ink">
                            {study.title}
                          </h3>
                          <p className="mt-3 text-ink-2 text-sm md:text-base leading-relaxed flex-1">
                            {study.summary}
                          </p>
                          <div className="mt-6 flex items-center justify-between">
                            <div className="flex gap-4">
                              {study.metrics.slice(0, 2).map((m) => (
                                <div key={m.label}>
                                  <div className={`font-display text-xl ${accent.text}`}>
                                    {m.value}
                                  </div>
                                  <div className="font-mono text-[10px] uppercase tracking-wider text-ink-3">
                                    {m.label}
                                  </div>
                                </div>
                              ))}
                            </div>
                            <span className="inline-flex items-center gap-1 text-sm text-ink-2 group-hover:text-accent transition">
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
                  </Reveal>
                );
              })}
            </div>
          </Container>
        </Section>
      ) : null}

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
                  Building in{" "}
                  <span className="font-serif italic text-accent">
                    {industry.name.toLowerCase()}?
                  </span>
                </h2>
                <p className="mt-6 text-lg text-ink-2 max-w-xl mx-auto">
                  Tell us what you&apos;re shipping. We&apos;ll reply within one
                  business day with a clear next step.
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
