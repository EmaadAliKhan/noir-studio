import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SHOWCASE_PROJECTS } from "@/data/showcase";
import { ShowcaseCard } from "@/components/showcase/showcase-card";
import { ButtonLink } from "@/components/ui/button";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { Reveal, RevealStagger } from "@/components/ui/reveal";

export function ShowcaseWorkSection() {
  const [featured, ...rest] = SHOWCASE_PROJECTS;

  return (
    <Section className="py-12 md:py-16 bg-canvas-2/40">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Live work"
            title={
              <>
                Sites we&apos;ve{" "}
                <span className="font-serif italic text-accent">shipped.</span>
              </>
            }
            description="Real client projects — click any card for the full screenshot and breakdown."
          />
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-5">
          {featured ? (
            <Reveal className="lg:col-span-7">
              <ShowcaseCard project={featured} large />
            </Reveal>
          ) : null}
          <RevealStagger className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 md:gap-5">
            {rest.slice(0, 2).map((project) => (
              <ShowcaseCard key={project.slug} project={project} />
            ))}
          </RevealStagger>
        </div>

        <RevealStagger
          className="mt-4 md:mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-5"
          step={0.06}
        >
          {rest.slice(2).map((project) => (
            <ShowcaseCard key={project.slug} project={project} />
          ))}
        </RevealStagger>

        <Reveal className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <ButtonLink href="/work" variant="outline" size="md">
            View all live work
          </ButtonLink>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1 text-sm text-ink-2 hover:text-accent transition"
          >
            Full project registry
            <ArrowUpRight size={15} />
          </Link>
        </Reveal>
      </Container>
    </Section>
  );
}
