import { STACK } from "@/lib/content";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { CardShell } from "@/components/ui/card-shell";
import { Reveal } from "@/components/ui/reveal";

export function StackSection() {
  const byCategory = STACK.reduce<Record<string, string[]>>((acc, item) => {
    (acc[item.category] ??= []).push(item.name);
    return acc;
  }, {});

  return (
    <Section className="bg-canvas-2/40">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Stack" title="Our daily kit" />
        </Reveal>

        <Reveal>
          <CardShell className="p-8 md:p-10">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(byCategory).map(([category, items]) => (
                <div key={category}>
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-3 mb-4">
                    {category}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {items.map((name) => (
                      <span
                        key={name}
                        className="px-3 py-1.5 rounded-full bg-surface-2 border border-border text-sm text-ink-2 hover:border-accent hover:text-ink transition"
                      >
                        {name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardShell>
        </Reveal>
      </Container>
    </Section>
  );
}
