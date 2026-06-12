import * as React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { CardShell, CardGlow } from "@/components/ui/card-shell";
import { Reveal, RevealStagger } from "@/components/ui/reveal";
import { SERVICES, type Service } from "@/lib/content";

// ServicesGrid — six service cards in a 3×2 grid on desktop. Each card has
// a Lucide icon in lime, the service title, a short blurb, and a "Learn
// more" link to the services page. Group hover triggers the CardGlow.
export function ServicesGrid() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="What we do"
            title={
              <>
                Six disciplines.{" "}
                <span className="font-serif italic text-ink-2">One team.</span>
              </>
            }
            description="From PRD to production to paid social — we cover the entire stack so you don't have to juggle vendors, contracts, or excuses."
          />
        </Reveal>

        <RevealStagger
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
          step={0.06}
        >
          {SERVICES.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </RevealStagger>
      </Container>
    </Section>
  );
}

function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <Link
      href="/services"
      className="group block focus:outline-none"
      aria-label={`${service.title} — learn more`}
    >
      <CardShell
        interactive
        className="group h-full p-7 md:p-8 flex flex-col gap-6 min-h-[280px]"
      >
        <CardGlow />
        <div className="flex items-start justify-between">
          <div className="inline-flex items-center justify-center size-12 rounded-2xl bg-accent/10 border border-accent/15 text-accent transition-colors duration-300 group-hover:bg-accent/15">
            <Icon size={20} strokeWidth={1.75} />
          </div>
          <span className="inline-flex size-9 items-center justify-center rounded-full bg-canvas-2/60 border border-border text-ink-3 transition-all duration-300 group-hover:bg-accent group-hover:text-ink-inverse group-hover:border-accent group-hover:rotate-[-12deg]">
            <ArrowUpRight size={16} strokeWidth={2} />
          </span>
        </div>

        <div className="flex-1 flex flex-col gap-3">
          <h3 className="font-display text-xl md:text-2xl font-medium tracking-tight text-ink leading-snug">
            {service.title}
          </h3>
          <p className="text-sm md:text-[15px] text-ink-2 leading-relaxed">
            {service.short}
          </p>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-border">
          <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-ink-3">
            Outcome
          </span>
          <span className="text-xs md:text-[13px] text-ink-2 text-right max-w-[70%] truncate">
            {service.outcome}
          </span>
        </div>
      </CardShell>
    </Link>
  );
}
