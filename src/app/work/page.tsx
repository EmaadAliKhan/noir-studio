import type { Metadata } from "next";
import { ShowcaseCard } from "@/components/showcase/showcase-card";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { Reveal, RevealStagger } from "@/components/ui/reveal";
import { SHOWCASE_PROJECTS } from "@/data/showcase";

export const metadata: Metadata = {
  title: "Live work",
  description:
    "Shipped client websites and platforms — Recaf, MallsApp, Broker, LAGO, and NCD International.",
};

export default function WorkPage() {
  return (
    <Section className="pt-10 md:pt-14 pb-28 md:pb-36">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Portfolio"
            title={
              <>
                Live sites we&apos;ve{" "}
                <span className="font-serif italic text-accent">built.</span>
              </>
            }
            description="Full-page screenshots of production websites and platforms. Click any project for details, tech stack, and a link to the live site."
          />
        </Reveal>

        <RevealStagger
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5"
          step={0.06}
        >
          {SHOWCASE_PROJECTS.map((project) => (
            <ShowcaseCard key={project.slug} project={project} />
          ))}
        </RevealStagger>
      </Container>
    </Section>
  );
}
