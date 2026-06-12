"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { CardShell } from "@/components/ui/card-shell";
import { Container } from "@/components/ui/section";
import { Pill } from "@/components/ui/pill";
import { TrustLogos } from "@/components/ui/trust-logos";
import { HERO_PILLS } from "@/lib/content";

// Hero — the agency's first impression. A massive inset CardShell sitting
// on the teal canvas, holding an editorial headline, subhead, capability
// pills, two CTAs, and a small "available for work" status chip.
export function HomeHero() {
  return (
    <section className="relative w-full pt-6 md:pt-8">
      <Container>
        <CardShell className="relative overflow-hidden rounded-[28px] md:rounded-[36px] bg-surface bg-noise">
          {/* Decorative inset rectangles (top-right) — echoes the reference image. */}
          <div className="pointer-events-none absolute top-6 right-6 hidden md:flex items-start gap-3">
            <DecorTile delay={0} />
            <DecorTile delay={0.15} compact />
          </div>

          {/* Subtle radial accent wash bottom-left for depth. */}
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-32 -left-24 size-[420px] rounded-full opacity-[0.18] blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(217,255,91,0.55), transparent 60%)",
            }}
          />

          <div className="relative z-10 px-6 sm:px-10 md:px-14 lg:px-16 pt-14 md:pt-20 lg:pt-24 pb-12 md:pb-16 lg:pb-20">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-3"
            >
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex size-full rounded-full bg-accent opacity-75 animate-ping" />
                <span className="relative inline-flex size-1.5 rounded-full bg-accent" />
              </span>
              Hybrid agency · Hyderabad → World
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.1,
              }}
              className="mt-7 md:mt-9 font-display font-medium tracking-[-0.025em] leading-[0.96] text-ink text-[44px] sm:text-[64px] md:text-[88px] lg:text-[112px] xl:text-[128px]"
            >
              <span className="block">Turning Digital Ideas</span>
              <span className="block">
                into Powerful{" "}
                <em className="font-serif italic font-normal text-accent">
                  Realities
                </em>
                <span className="text-accent">.</span>
              </span>
            </motion.h1>

            {/* Subhead */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.25,
              }}
              className="mt-7 md:mt-9 max-w-2xl text-base md:text-lg lg:text-xl text-ink-2 leading-relaxed"
            >
              We design, engineer, deploy, monitor, and market modern software
              products — end to end, AI-accelerated, human-supervised. One
              accountable team that takes you from a fuzzy idea to a shipped
              product with a marketing engine attached.
            </motion.p>

            {/* Capability pills */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.4,
              }}
              className="mt-8 md:mt-10 flex flex-wrap gap-2.5"
            >
              {HERO_PILLS.map((label) => (
                <Pill key={label}>{label}</Pill>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.55,
              }}
              className="mt-10 md:mt-12 flex flex-wrap items-center gap-3"
            >
              <ButtonLink
                href="/contact"
                variant="primary"
                size="lg"
                className="group"
              >
                Become a client
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </ButtonLink>
              <ButtonLink
                href="/case-studies"
                variant="outline"
                size="lg"
                className="group"
              >
                See our work
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </ButtonLink>
            </motion.div>

            {/* Status chip — bottom right of the card */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.7,
              }}
              className="mt-14 md:mt-0 md:absolute md:bottom-6 md:right-6 lg:bottom-8 lg:right-8"
            >
              <div className="inline-flex items-center gap-2.5 h-10 pl-3 pr-4 rounded-full bg-canvas-2/80 border border-border backdrop-blur-md">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full rounded-full bg-accent opacity-75 animate-ping" />
                  <span className="relative inline-flex size-2 rounded-full bg-accent" />
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-2">
                  Available for new work · Q3 openings
                </span>
              </div>
            </motion.div>
          </div>
        </CardShell>

        {/* Trust logos strip beneath the hero card */}
        <div className="mt-12 md:mt-16">
          <div className="mb-5 flex items-center gap-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-3">
              Trusted by teams shipping serious things
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>
          <TrustLogos />
        </div>
      </Container>
    </section>
  );
}

// DecorTile — a small inset rectangle echoing the reference design's
// dark-on-dark stacked tiles. Adds visual density to the hero card.
function DecorTile({
  delay = 0,
  compact = false,
}: {
  delay?: number;
  compact?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: -8 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.2 + delay,
      }}
      className={`relative overflow-hidden rounded-2xl bg-canvas-2/70 border border-border ${
        compact ? "h-20 w-20" : "h-24 w-32 lg:h-28 lg:w-40"
      }`}
    >
      {/* Constellation of tiny dots */}
      <div className="absolute inset-0">
        {dotPositions.map((p, i) => (
          <span
            key={i}
            className="absolute size-[3px] rounded-full bg-ink-3/50"
            style={{ top: `${p.y}%`, left: `${p.x}%` }}
          />
        ))}
      </div>
      {/* Single bright accent dot to anchor it */}
      <span className="absolute top-3 left-3 inline-flex items-center justify-center size-5 rounded-md bg-accent/20">
        <Sparkles size={11} className="text-accent" />
      </span>
    </motion.div>
  );
}

// Deterministic dot positions — avoids hydration mismatches that random
// would cause between server and client.
const dotPositions = [
  { x: 18, y: 22 },
  { x: 42, y: 36 },
  { x: 68, y: 28 },
  { x: 30, y: 58 },
  { x: 56, y: 64 },
  { x: 78, y: 70 },
  { x: 22, y: 80 },
  { x: 86, y: 48 },
];
