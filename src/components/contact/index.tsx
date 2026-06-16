import { Container, Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { FEATURES } from "@/lib/features";
import { TrustLogos } from "@/components/ui/trust-logos";
import { ContactFunnel } from "@/components/contact/contact-funnel";
import { ContactInfoPanel } from "@/components/contact/contact-info-panel";
import { WhatHappensNext } from "@/components/contact/what-happens-next";

export function ContactPage() {
  return (
    <>
      <Section className="pt-10 md:pt-14 pb-12 md:pb-16">
        <Container>
          <Reveal>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium tracking-[-0.02em] leading-[1.02] text-ink max-w-4xl">
              Let&apos;s start a conversation.
            </h1>
          </Reveal>

          <div className="mt-12 md:mt-16 grid lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-10 items-start">
            <Reveal delay={0.05}>
              <ContactFunnel />
            </Reveal>
            <Reveal delay={0.1}>
              <ContactInfoPanel />
            </Reveal>
          </div>

          {FEATURES.trustLogos ? (
            <div className="mt-16 md:mt-20">
              <TrustLogos />
            </div>
          ) : null}

          <div className="mt-16 md:mt-20">
            <WhatHappensNext />
          </div>
        </Container>
      </Section>
    </>
  );
}
