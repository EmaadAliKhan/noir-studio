import { ArrowUpRight } from "lucide-react";
import { CASE_STUDIES } from "@/data/case-studies";
import { ButtonLink } from "@/components/ui/button";
import { CardShell } from "@/components/ui/card-shell";
import { Eyebrow } from "@/components/ui/pill";
import { Reveal } from "@/components/ui/reveal";
import { Container, Section } from "@/components/ui/section";
import { Stat } from "@/components/ui/stat";

export function CaseStudiesHero() {
  const totalWeeks = CASE_STUDIES.reduce((sum, study) => sum + study.durationWeeks, 0);
  const avgWeeks = Math.round(totalWeeks / CASE_STUDIES.length);

  return (
    <Section className="pt-10 md:pt-14 pb-12 md:pb-16">
      <Container>
        <Reveal>
          <CardShell className="rounded-[36px] bg-surface relative overflow-hidden">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-32 -right-32 size-[480px] rounded-full opacity-30 blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, rgba(217,255,91,0.35), transparent 70%)",
              }}
            />

            <div className="grid lg:grid-cols-[1.35fr_1fr] gap-10 lg:gap-12 p-8 md:p-12 lg:p-16">
              <div className="relative flex flex-col">
                <Eyebrow className="mb-6">Case studies</Eyebrow>

                <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium tracking-[-0.02em] leading-[1.02] text-ink">
                  Proof, not{" "}
                  <span className="font-serif italic text-accent">promises.</span>
                </h1>

                <p className="mt-6 md:mt-8 text-base md:text-lg text-ink-2 leading-relaxed max-w-xl">
                  Narrative case studies with hard numbers — MVPs shipped in weeks,
                  manual work removed, and growth loops that compound. Filter by
                  category or industry to find work closest to yours.
                </p>

                <div className="mt-8 md:mt-10 flex flex-wrap items-center gap-3">
                  <ButtonLink href="/contact" variant="accent" size="lg">
                    Start a project
                    <ArrowUpRight size={18} />
                  </ButtonLink>
                  <ButtonLink href="/services" variant="outline" size="lg">
                    See services
                  </ButtonLink>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 self-end">
                <Stat value={CASE_STUDIES.length} label="Published studies" />
                <Stat value={`${avgWeeks} wks`} label="Avg delivery time" />
                <Stat value="40%+" label="Manual work removed" />
                <Stat value="100%" label="Fixed-price delivery" />
              </div>
            </div>
          </CardShell>
        </Reveal>
      </Container>
    </Section>
  );
}
