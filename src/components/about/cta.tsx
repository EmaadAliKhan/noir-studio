import { ArrowUpRight } from "lucide-react";
import { Container, Section } from "@/components/ui/section";
import { CardShell } from "@/components/ui/card-shell";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export function AboutCta() {
  return (
    <Section className="pb-24">
      <Container>
        <Reveal>
          <CardShell className="rounded-[36px] p-10 md:p-14 text-center">
            <h2 className="font-display text-4xl md:text-5xl text-ink">
              Want to meet the team?
            </h2>
            <p className="mt-4 text-ink-2 max-w-lg mx-auto">
              Book a 15-minute intro call. We&apos;ll listen first — no pitch deck required.
            </p>
            <ButtonLink href="/contact" variant="accent" size="lg" className="mt-8 inline-flex">
              Start a conversation
              <ArrowUpRight size={18} />
            </ButtonLink>
          </CardShell>
        </Reveal>
      </Container>
    </Section>
  );
}
