import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { ButtonLink } from "@/components/ui/button";
import { CardShell } from "@/components/ui/card-shell";
import { Eyebrow } from "@/components/ui/pill";
import { Reveal } from "@/components/ui/reveal";
import { Container, Section } from "@/components/ui/section";
import { Stat } from "@/components/ui/stat";

export function ProjectsHero() {
  const withLiveUrl = PROJECTS.filter((p) => p.liveUrl).length;

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
                  "radial-gradient(circle, rgba(110,231,183,0.35), transparent 70%)",
              }}
            />

            <div className="grid lg:grid-cols-[1.35fr_1fr] gap-10 lg:gap-12 p-8 md:p-12 lg:p-16">
              <div className="relative flex flex-col">
                <Eyebrow className="mb-6">Our work</Eyebrow>

                <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium tracking-[-0.02em] leading-[1.02] text-ink">
                  Products we&apos;ve{" "}
                  <span className="font-serif italic text-accent">shipped.</span>
                </h1>

                <p className="mt-6 md:mt-8 text-base md:text-lg text-ink-2 leading-relaxed max-w-xl">
                  A selection of web apps, mobile products, and platforms built across
                  Saudi Arabia, Egypt, and beyond — from coffee loyalty to real estate.
                </p>

                <div className="mt-8 md:mt-10 flex flex-wrap items-center gap-3">
                  <ButtonLink href="#catalog" variant="accent" size="lg">
                    Browse projects
                    <ArrowUpRight size={18} />
                  </ButtonLink>
                  <ButtonLink href="/contact" variant="outline" size="lg">
                    Start a project
                  </ButtonLink>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 self-end">
                <Stat value={PROJECTS.length} label="Projects delivered" />
                <Stat value={withLiveUrl} label="Live deployments" />
              </div>
            </div>
          </CardShell>
        </Reveal>
      </Container>
    </Section>
  );
}
