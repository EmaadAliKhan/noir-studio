import type { CaseStudy } from "@/data/case-studies";
import { CASE_STUDIES } from "@/data/case-studies";
import { StudyCard } from "@/components/case-studies/study-card";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

function scoreRelated(current: CaseStudy, candidate: CaseStudy): number {
  let score = 0;
  if (candidate.category === current.category) score += 2;
  if (candidate.industry === current.industry) score += 3;
  return score;
}

export function getRelatedStudies(current: CaseStudy, limit = 3): CaseStudy[] {
  return CASE_STUDIES.filter((study) => study.slug !== current.slug)
    .map((study) => ({ study, score: scoreRelated(current, study) }))
    .sort((a, b) => b.score - a.score || a.study.client.localeCompare(b.study.client))
    .slice(0, limit)
    .map(({ study }) => study);
}

type RelatedStudiesProps = {
  study: CaseStudy;
};

export function RelatedStudies({ study }: RelatedStudiesProps) {
  const related = getRelatedStudies(study);

  if (related.length === 0) {
    return null;
  }

  return (
    <Section className="bg-canvas-2/40">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="More work"
            title={
              <>
                Related{" "}
                <span className="font-serif italic text-ink-2">case studies.</span>
              </>
            }
            description="Similar category, industry, or delivery pattern — so you can see how we adapt."
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {related.map((item, index) => (
            <Reveal key={item.slug} delay={index * 0.05}>
              <StudyCard study={item} />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
