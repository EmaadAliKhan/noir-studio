import { PROJECTS } from "@/data/projects";
import { ProjectsCatalog } from "@/components/projects/filter-bar";
import { ProjectsHero } from "@/components/projects/index-hero";
import { Container, Section } from "@/components/ui/section";

export function ProjectsPage() {
  return (
    <>
      <ProjectsHero />
      <Section className="pb-28 md:pb-36">
        <Container>
          <ProjectsCatalog projects={PROJECTS} />
        </Container>
      </Section>
    </>
  );
}
