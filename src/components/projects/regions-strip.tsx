import { PROJECT_REGIONS } from "@/data/projects";
import { CardShell } from "@/components/ui/card-shell";
import { Reveal } from "@/components/ui/reveal";
import { Container, Section, SectionHeading } from "@/components/ui/section";

export function RegionsStrip() {
  return (
    <Section className="bg-canvas-2/40 py-16 md:py-20">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Geography"
            title={
              <>
                Projects by{" "}
                <span className="font-serif italic text-ink-2">region.</span>
              </>
            }
            description="Four geographic clusters spanning Saudi Arabia, Egypt, the US/India corridor, and global deployments."
          />
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {PROJECT_REGIONS.map((entry, index) => (
            <Reveal key={entry.region} delay={index * 0.05}>
              <CardShell className="p-6 md:p-7 h-full">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent mb-3">
                  {entry.region}
                </div>
                <ul className="space-y-2">
                  {entry.projects.map((name) => (
                    <li
                      key={name}
                      className="text-sm text-ink-2 leading-relaxed flex items-start gap-2"
                    >
                      <span className="size-1 rounded-full bg-accent-2 mt-2 shrink-0" />
                      {name}
                    </li>
                  ))}
                </ul>
              </CardShell>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
