import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/content";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { CardShell } from "@/components/ui/card-shell";
import { Reveal, RevealStagger } from "@/components/ui/reveal";

export function Testimonials() {
  return (
    <Section className="bg-canvas-2/40">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Client voice"
            title={
              <>
                What partners{" "}
                <span className="font-serif italic text-ink-2">say after launch.</span>
              </>
            }
            align="center"
            className="mx-auto text-center"
          />
        </Reveal>

        <RevealStagger className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {TESTIMONIALS.map((t) => (
            <CardShell key={t.author} className="p-7 md:p-8 flex flex-col">
              <Quote className="size-8 text-accent mb-4" strokeWidth={1.25} />
              <blockquote className="font-serif italic text-xl md:text-2xl text-ink leading-snug flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <footer className="mt-6 pt-6 border-t border-border">
                <div className="font-display text-sm text-ink">{t.author}</div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-ink-3 mt-1">
                  {t.role}
                </div>
              </footer>
            </CardShell>
          ))}
        </RevealStagger>
      </Container>
    </Section>
  );
}
