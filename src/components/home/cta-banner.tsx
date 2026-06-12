import { ArrowUpRight } from "lucide-react";
import { Container, Section } from "@/components/ui/section";
import { CardShell } from "@/components/ui/card-shell";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export function HomeCtaBanner() {
  return (
    <Section className="pb-28 md:pb-36">
      <Container>
        <Reveal>
          <CardShell className="rounded-[36px] bg-surface px-8 py-16 md:px-16 md:py-24 text-center relative overflow-hidden">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-20"
              style={{
                background:
                  "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(217,255,91,0.4), transparent)",
              }}
            />
            <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-[-0.02em] leading-[1.02] text-ink">
                Have a stubborn problem?{" "}
                <span className="font-serif italic text-accent">We like those.</span>
              </h2>
              <p className="mt-6 text-lg text-ink-2 max-w-xl mx-auto">
                Tell us what you&apos;re building. We&apos;ll reply within one business day with
                a clear next step — no pitch deck required.
              </p>
              <ButtonLink
                href="/contact"
                variant="accent"
                size="lg"
                className="mt-10 inline-flex"
              >
                Start a conversation
                <ArrowUpRight size={18} />
              </ButtonLink>
            </div>
          </CardShell>
        </Reveal>
      </Container>
    </Section>
  );
}
