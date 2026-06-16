import { Megaphone, ShieldCheck, Sparkles, Workflow } from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { CardShell } from "@/components/ui/card-shell";
import { Reveal, RevealStagger } from "@/components/ui/reveal";

const VALUES = [
  {
    icon: Sparkles,
    title: "Speed with integrity",
    description: "AI agents ship fast. Senior engineers keep it production-grade.",
  },
  {
    icon: ShieldCheck,
    title: "Senior eyes on everything",
    description: "Every PR reviewed. Every architecture decision owned.",
  },
  {
    icon: Workflow,
    title: "Scope locked early",
    description: "Requirements nailed down at PRD sign-off. No scope creep.",
  },
  {
    icon: Megaphone,
    title: "Marketing and product, same room",
    description: "Design, dev, and growth under one contract.",
  },
];

export function AboutValues() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Values" title="What we won't compromise on" />
        </Reveal>

        <RevealStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {VALUES.map((v) => {
            const Icon = v.icon;
            return (
              <CardShell key={v.title} className="p-6 md:p-7 h-full">
                <Icon className="size-7 text-accent mb-4" />
                <h3 className="font-display text-lg text-ink">{v.title}</h3>
                <p className="mt-3 text-sm text-ink-2 leading-relaxed">{v.description}</p>
              </CardShell>
            );
          })}
        </RevealStagger>
      </Container>
    </Section>
  );
}
