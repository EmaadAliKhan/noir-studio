import { Container, Section, SectionHeading } from "@/components/ui/section";
import { CardShell } from "@/components/ui/card-shell";
import { Reveal, RevealStagger } from "@/components/ui/reveal";
import { PROCESS } from "@/lib/content";

export function ProcessSection() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="How we work"
            title={
              <>
                From PRD to production{" "}
                <span className="font-serif italic text-accent">in weeks.</span>
              </>
            }
            description="A structured, five-step pipeline that locks scope before code starts — then ships with AI-accelerated velocity and senior oversight."
          />
        </Reveal>

        <div className="relative">
          <div
            aria-hidden
            className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-border border-t border-dashed border-border"
          />
          <RevealStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {PROCESS.map((step) => {
              const Icon = step.icon;
              return (
                <CardShell key={step.number} className="p-6 md:p-7 h-full bg-surface">
                  <div className="font-display text-4xl text-accent/80 leading-none mb-4">
                    {step.number}
                  </div>
                  <div className="inline-flex size-10 items-center justify-center rounded-xl bg-accent/10 text-accent mb-4">
                    <Icon size={18} />
                  </div>
                  <h3 className="font-display text-lg font-medium text-ink mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-ink-2 leading-relaxed">{step.description}</p>
                </CardShell>
              );
            })}
          </RevealStagger>
        </div>
      </Container>
    </Section>
  );
}
