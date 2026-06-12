import { CASE_STUDIES } from "@/data/case-studies";
import { CaseStudiesCatalog } from "@/components/case-studies/filter-bar";
import { CaseStudiesHero } from "@/components/case-studies/index-hero";
import { Container, Section } from "@/components/ui/section";

export function CaseStudiesPage() {
  return (
    <>
      <CaseStudiesHero />
      <Section className="pb-28 md:pb-36">
        <Container>
          <CaseStudiesCatalog studies={CASE_STUDIES} />
        </Container>
      </Section>
    </>
  );
}
