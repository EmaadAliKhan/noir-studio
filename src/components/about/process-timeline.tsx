import { PROCESS } from "@/lib/content";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { CardShell } from "@/components/ui/card-shell";
import { Reveal, RevealStagger } from "@/components/ui/reveal";

export function ProcessTimeline() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Process"
            title="How every engagement runs"
            description="Structured discovery, locked scope, AI-accelerated build, production deploy, optional retainers."
          />
        </Reveal>

        <RevealStagger className="space-y-4">
          {PROCESS.map((step) => {
            const Icon = step.icon;
            return (
              <CardShell key={step.number} className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="font-display text-5xl text-accent/80 w-20 shrink-0">
                    {step.number}
                  </div>
                  <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-accent/10 text-accent shrink-0">
                    <Icon size={20} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl text-ink">{step.title}</h3>
                    <p className="mt-2 text-ink-2 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </CardShell>
            );
          })}
        </RevealStagger>
      </Container>
    </Section>
  );
}
