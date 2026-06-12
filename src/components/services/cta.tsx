import { ArrowUpRight } from "lucide-react";
import { Container, Section } from "@/components/ui/section";
import { CardShell } from "@/components/ui/card-shell";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export function ServicesCta() {
  return (
    <Section className="pb-24">
      <Container>
        <Reveal>
          <CardShell className="rounded-[36px] p-10 md:p-14 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <h2 className="font-display text-3xl md:text-4xl text-ink">
                Not sure what fits?{" "}
                <span className="font-serif italic text-accent">Tell us your problem.</span>
              </h2>
              <p className="mt-3 text-ink-2 max-w-lg">
                We&apos;ll recommend the right track — build, run, or grow — and send a one-page
                scope within 48 hours.
              </p>
            </div>
            <ButtonLink href="/contact" variant="accent" size="lg" className="shrink-0">
              Start a conversation
              <ArrowUpRight size={18} />
            </ButtonLink>
          </CardShell>
        </Reveal>
      </Container>
    </Section>
  );
}
