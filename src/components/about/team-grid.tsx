import { TEAM } from "@/lib/content";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { CardShell, CardGlow } from "@/components/ui/card-shell";
import { Reveal, RevealStagger } from "@/components/ui/reveal";

export function TeamGrid() {
  return (
    <Section className="bg-canvas-2/40">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Team" title="The founding matrix" />
        </Reveal>

        <RevealStagger className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {TEAM.map((member) => (
            <CardShell key={member.initials} interactive className="group p-8 md:p-10">
              <CardGlow />
              <div className="flex items-start gap-5">
                <div className="size-20 rounded-3xl bg-accent text-ink-inverse font-display text-3xl flex items-center justify-center shrink-0">
                  {member.initials}
                </div>
                <div>
                  <h3 className="font-display text-2xl text-ink">{member.name}</h3>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-3 mt-1">
                    {member.role}
                  </p>
                </div>
              </div>
              <p className="mt-6 text-ink-2 leading-relaxed">{member.bio}</p>
              <p className="mt-4 text-sm">
                <span className="text-ink-3">Superpower: </span>
                <span className="font-serif italic text-accent">{member.superpower}</span>
              </p>
            </CardShell>
          ))}
        </RevealStagger>
      </Container>
    </Section>
  );
}
