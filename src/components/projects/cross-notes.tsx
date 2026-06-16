import { CROSS_PROJECT_NOTES } from "@/data/projects";
import { CardShell } from "@/components/ui/card-shell";
import { Reveal } from "@/components/ui/reveal";
import { Container, Section, SectionHeading } from "@/components/ui/section";

export function CrossProjectNotes() {
  return (
    <Section className="pb-28 md:pb-36">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Reference"
            title={
              <>
                Cross-project{" "}
                <span className="font-serif italic text-ink-2">notes.</span>
              </>
            }
            description="Important context when navigating the monorepo — duplicate stacks, missing sources, and API version mismatches."
          />
        </Reveal>

        <Reveal>
          <CardShell className="p-8 md:p-10">
            <ol className="space-y-5">
              {CROSS_PROJECT_NOTES.map((note, index) => (
                <li key={note} className="flex gap-4">
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent shrink-0 pt-0.5">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm md:text-base text-ink-2 leading-relaxed">{note}</p>
                </li>
              ))}
            </ol>
          </CardShell>
        </Reveal>
      </Container>
    </Section>
  );
}
