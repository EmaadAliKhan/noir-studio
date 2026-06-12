import { CardShell } from "@/components/ui/card-shell";
import { Reveal, RevealStagger } from "@/components/ui/reveal";
import { Container, Section } from "@/components/ui/section";
import { Stat } from "@/components/ui/stat";
import { STATS } from "@/lib/content";

export function AboutStats() {
  return (
    <Section className="py-6 md:py-10">
      <Container>
        <Reveal>
          <CardShell className="rounded-[28px]">
            <RevealStagger className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 p-8 md:p-10">
              {STATS.map((s) => (
                <Stat key={s.label} value={s.value} label={s.label} />
              ))}
            </RevealStagger>
          </CardShell>
        </Reveal>
      </Container>
    </Section>
  );
}
