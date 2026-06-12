import * as React from "react";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { BentoGrid, BentoCell } from "@/components/ui/bento";
import { CardShell, CardGlow } from "@/components/ui/card-shell";
import { Reveal } from "@/components/ui/reveal";
import { CAPABILITIES, type Capability } from "@/lib/content";

// CapabilitiesBento — 8 capabilities laid out in a bento grid. Two large
// hero tiles (6/12) anchor the top, followed by a row of 4 small tiles
// (3/12 each), then a final row of 2 medium tiles (6/12 each).
export function CapabilitiesBento() {
  // Layout map — index into CAPABILITIES → bento cell spans.
  const layout: Array<{ col: string; tone: "hero" | "small" | "medium" }> = [
    { col: "lg:col-span-7", tone: "hero" },
    { col: "lg:col-span-5", tone: "hero" },
    { col: "lg:col-span-3", tone: "small" },
    { col: "lg:col-span-3", tone: "small" },
    { col: "lg:col-span-3", tone: "small" },
    { col: "lg:col-span-3", tone: "small" },
    { col: "lg:col-span-6", tone: "medium" },
    { col: "lg:col-span-6", tone: "medium" },
  ];

  return (
    <Section className="bg-canvas-2/40">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Capabilities"
            title={
              <>
                Why founders pick us{" "}
                <span className="font-serif italic text-ink-2">
                  over a legacy shop.
                </span>
              </>
            }
            description="An AI-accelerated build pipeline with senior architectural oversight. Faster, structurally sound, and accountable end-to-end."
          />
        </Reveal>

        <BentoGrid>
          {CAPABILITIES.map((cap, i) => (
            <BentoCell
              key={cap.title}
              col={`${layout[i]?.col ?? "lg:col-span-3"} md:col-span-3`}
            >
              <BentoTile capability={cap} tone={layout[i]?.tone ?? "small"} />
            </BentoCell>
          ))}
        </BentoGrid>
      </Container>
    </Section>
  );
}

function BentoTile({
  capability,
  tone,
}: {
  capability: Capability;
  tone: "hero" | "small" | "medium";
}) {
  const Icon = capability.icon;
  const heightClass =
    tone === "hero"
      ? "min-h-[260px] md:min-h-[300px]"
      : tone === "medium"
      ? "min-h-[200px] md:min-h-[220px]"
      : "min-h-[200px] md:min-h-[220px]";

  const titleSize =
    tone === "hero"
      ? "text-2xl md:text-3xl lg:text-[34px]"
      : "text-lg md:text-xl";

  return (
    <CardShell
      interactive
      className={`group p-7 md:p-8 h-full ${heightClass} flex flex-col justify-between`}
    >
      <CardGlow />
      <div className="flex items-start justify-between">
        <div className="inline-flex items-center justify-center size-11 rounded-2xl bg-accent/10 border border-accent/15 text-accent">
          <Icon size={18} strokeWidth={1.75} />
        </div>
        {tone === "hero" ? (
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-3">
            01 / Edge
          </span>
        ) : null}
      </div>

      <div className="space-y-3">
        <h3
          className={`font-display font-medium tracking-tight leading-tight text-ink ${titleSize}`}
        >
          {capability.title}
        </h3>
        <p
          className={`text-ink-2 leading-relaxed ${
            tone === "hero" ? "text-sm md:text-base max-w-md" : "text-[13.5px] md:text-sm"
          }`}
        >
          {capability.description}
        </p>
      </div>
    </CardShell>
  );
}
