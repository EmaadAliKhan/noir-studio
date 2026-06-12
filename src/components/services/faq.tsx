"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { FAQ } from "@/lib/content";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { CardShell } from "@/components/ui/card-shell";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export function ServicesFaq() {
  const [open, setOpen] = React.useState<number | null>(0);

  return (
    <Section id="faq" className="bg-canvas-2/40">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="FAQ" title="Common questions" />
        </Reveal>

        <Reveal className="max-w-3xl space-y-3">
          {FAQ.map((item, i) => {
            const isOpen = open === i;
            return (
              <CardShell key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-start justify-between gap-4 p-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg text-ink">{item.q}</span>
                  <ChevronDown
                    className={cn(
                      "size-5 text-ink-3 shrink-0 transition-transform",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>
                {isOpen ? (
                  <div className="px-6 pb-6 text-ink-2 leading-relaxed">{item.a}</div>
                ) : null}
              </CardShell>
            );
          })}
        </Reveal>
      </Container>
    </Section>
  );
}
