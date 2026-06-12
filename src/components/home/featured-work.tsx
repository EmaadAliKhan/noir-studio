import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CASE_STUDIES } from "@/data/case-studies";
import { accentFor } from "@/components/case-studies/utils";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { CardShell, CardGlow } from "@/components/ui/card-shell";
import { Pill } from "@/components/ui/pill";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";

const featured = CASE_STUDIES.slice(0, 3);

export function FeaturedWork() {
  const [hero, ...rest] = featured;

  return (
    <Section className="bg-canvas-2/40">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Selected work"
            title={
              <>
                Builds that{" "}
                <span className="font-serif italic text-ink-2">moved the needle.</span>
              </>
            }
            description="Narrative case studies with hard numbers — not just screenshots."
          />
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {hero ? (
            <Reveal className="lg:col-span-7">
              <StudyTile study={hero} large />
            </Reveal>
          ) : null}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {rest.map((study) => (
              <Reveal key={study.slug}>
                <StudyTile study={study} />
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-10 flex justify-center">
          <ButtonLink href="/case-studies" variant="outline" size="md">
            View all case studies
          </ButtonLink>
        </Reveal>
      </Container>
    </Section>
  );
}

function StudyTile({
  study,
  large = false,
}: {
  study: (typeof CASE_STUDIES)[number];
  large?: boolean;
}) {
  const accent = accentFor(study.accent);
  return (
    <Link href={`/case-studies/${study.slug}`} className="group block h-full">
      <CardShell
        interactive
        className={`relative h-full p-7 md:p-8 flex flex-col ${large ? "min-h-[420px]" : "min-h-[200px]"}`}
      >
        <CardGlow color={accent.glow} />
        <div
          className={`absolute left-0 top-8 bottom-8 w-1 rounded-full ${accent.bg}`}
          aria-hidden
        />
        <div className="pl-4 flex flex-col h-full">
          <div className="flex flex-wrap gap-2 mb-4">
            <Pill>{study.category}</Pill>
            <Pill>{study.industry}</Pill>
          </div>
          <h3
            className={`font-display font-medium tracking-tight text-ink ${
              large ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"
            }`}
          >
            {study.title}
          </h3>
          <p className="mt-3 text-ink-2 text-sm md:text-base leading-relaxed flex-1">
            {study.summary}
          </p>
          <div className="mt-6 flex items-center justify-between">
            <div className="flex gap-4">
              {study.metrics.slice(0, 2).map((m) => (
                <div key={m.label}>
                  <div className={`font-display text-xl ${accent.text}`}>{m.value}</div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-ink-3">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
            <span className="inline-flex items-center gap-1 text-sm text-ink-2 group-hover:text-accent transition">
              Read case study
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </div>
        </div>
      </CardShell>
    </Link>
  );
}
