"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  MapPin,
} from "lucide-react";
import { KernelStackVisual } from "@/components/home/kernel-stack-visual";
import { ButtonLink } from "@/components/ui/button";
import { CardShell, CardGlow } from "@/components/ui/card-shell";
import { Pill } from "@/components/ui/pill";
import { Container, Section } from "@/components/ui/section";
import { Reveal, RevealStagger } from "@/components/ui/reveal";
import { BRAND } from "@/lib/brand";
import {
  HERO_PILLS,
  PROCESS,
  SERVICES,
  STATS,
  TESTIMONIALS,
} from "@/lib/content";
import { ShowcaseWorkSection } from "@/components/home/showcase-work";
import { TRACKS } from "@/components/services/data";

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

const textReveal = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: EASE, delay: i * 0.08 },
  }),
};

// Single-page client landing — everything a prospect needs in one scroll.
export function ClientLanding() {
  const reduced = useReducedMotion();

  return (
    <>
      <LandingHero reduced={!!reduced} />
      <LandingStats />
      <LandingTracks />
      <LandingServices />
      <LandingProcess />
      <ShowcaseWorkSection />
      <LandingProof />
      <LandingCta />
    </>
  );
}

function LandingHero({ reduced }: { reduced: boolean }) {
  return (
    <section className="relative w-full overflow-hidden pt-6 md:pt-8 pb-4 md:pb-8">
      {/* Background orbs */}
      {!reduced ? (
        <>
          <motion.div
            aria-hidden
            animate={{ y: [0, -24, 0], x: [0, 12, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -left-32 top-24 size-64 rounded-full bg-accent/8 blur-3xl"
          />
          <motion.div
            aria-hidden
            animate={{ y: [0, 20, 0], x: [0, -16, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -right-24 top-48 size-72 rounded-full bg-accent-2/6 blur-3xl"
          />
        </>
      ) : null}

      <Container>
        <CardShell className="relative overflow-hidden rounded-[28px] md:rounded-[36px] bg-surface bg-noise">
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-32 -left-24 size-[420px] rounded-full opacity-[0.18] blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(217,255,91,0.55), transparent 60%)",
            }}
          />

          <div className="relative z-10 grid gap-10 lg:grid-cols-2 lg:gap-12 p-6 sm:p-10 md:p-14 lg:p-16 items-center">
            {/* Copy */}
            <div>
              <motion.div
                custom={0}
                initial="hidden"
                animate="show"
                variants={textReveal}
                className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-3"
              >
                <span className="relative flex size-1.5">
                  <span className="absolute inline-flex size-full rounded-full bg-accent opacity-75 animate-ping" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-accent" />
                </span>
                {BRAND.name} · {BRAND.city}
              </motion.div>

              <motion.h1
                custom={1}
                initial="hidden"
                animate="show"
                variants={textReveal}
                className="mt-6 font-display font-medium tracking-[-0.025em] leading-[0.98] text-ink text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px]"
              >
                {BRAND.tagline.split(" into ")[0]}{" "}
                <span className="block">
                  into{" "}
                  <em className="font-serif italic font-normal text-accent">
                    Powerful Realities
                  </em>
                  <span className="text-accent">.</span>
                </span>
              </motion.h1>

              <motion.p
                custom={2}
                initial="hidden"
                animate="show"
                variants={textReveal}
                className="mt-5 max-w-xl text-base md:text-lg text-ink-2 leading-relaxed"
              >
                {BRAND.description}
              </motion.p>

              <motion.div
                custom={3}
                initial="hidden"
                animate="show"
                variants={textReveal}
                className="mt-6 flex flex-wrap gap-2"
              >
                {HERO_PILLS.map((label) => (
                  <Pill key={label}>{label}</Pill>
                ))}
              </motion.div>

              <motion.div
                custom={4}
                initial="hidden"
                animate="show"
                variants={textReveal}
                className="mt-8 flex flex-wrap items-center gap-3"
              >
                <ButtonLink href="/contact" variant="primary" size="lg" className="group">
                  Become a client
                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </ButtonLink>
                <ButtonLink href="/case-studies" variant="outline" size="lg" className="group">
                  See our work
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                </ButtonLink>
              </motion.div>

              <motion.div
                custom={5}
                initial="hidden"
                animate="show"
                variants={textReveal}
                className="mt-8 flex items-start gap-2 text-sm text-ink-3"
              >
                <MapPin size={14} className="text-accent shrink-0 mt-0.5" />
                <span>{BRAND.address}</span>
              </motion.div>
            </div>

            {/* Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: EASE, delay: 0.2 }}
              className="relative lg:pl-4"
            >
              <KernelStackVisual />
            </motion.div>
          </div>

          {/* Status chip */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.7 }}
            className="absolute bottom-4 right-4 md:bottom-6 md:right-6 lg:bottom-8 lg:right-8 z-20"
          >
            <div className="inline-flex items-center gap-2.5 h-10 pl-3 pr-4 rounded-full bg-canvas-2/80 border border-border backdrop-blur-md">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full rounded-full bg-accent opacity-75 animate-ping" />
                <span className="relative inline-flex size-2 rounded-full bg-accent" />
              </span>
              <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-ink-2">
                Available for new work
              </span>
            </div>
          </motion.div>
        </CardShell>
      </Container>
    </section>
  );
}

function LandingStats() {
  return (
    <Section className="py-12 md:py-16">
      <Container>
        <RevealStagger className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {STATS.map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <div className="font-display text-3xl md:text-4xl font-medium text-accent tracking-tight">
                {s.value}
              </div>
              <div className="mt-1 text-sm text-ink-2">{s.label}</div>
            </div>
          ))}
        </RevealStagger>
      </Container>
    </Section>
  );
}

function LandingTracks() {
  return (
    <Section className="py-12 md:py-16">
      <Container>
        <Reveal>
          <div className="mb-8 md:mb-10 max-w-2xl">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-3">
              What we do
            </span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-ink">
              Build. Run.{" "}
              <span className="font-serif italic text-accent">Grow.</span>
            </h2>
            <p className="mt-3 text-ink-2 leading-relaxed">
              One accountable team from PRD to production to paid social — no vendor juggling.
            </p>
          </div>
        </Reveal>

        <RevealStagger className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5" step={0.08}>
          {TRACKS.map((track) => {
            const Icon = track.icon;
            return (
              <motion.div
                key={track.id}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: EASE }}
              >
                <CardShell interactive className="group h-full p-6 md:p-7 relative overflow-hidden">
                  <CardGlow />
                  <div className={`inline-flex size-11 items-center justify-center rounded-xl bg-white/5 border border-border ${track.accent}`}>
                    <Icon size={20} strokeWidth={1.75} />
                  </div>
                  <div className="mt-4 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-3">
                    {track.label}
                  </div>
                  <h3 className="mt-2 font-display text-xl font-medium text-ink">
                    {track.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-2 leading-relaxed">
                    {track.description}
                  </p>
                  <ul className="mt-4 space-y-1.5">
                    {track.serviceSlugs.map((slug) => {
                      const svc = SERVICES.find((s) => s.slug === slug);
                      if (!svc) return null;
                      return (
                        <li key={slug} className="flex items-center gap-2 text-xs text-ink-3">
                          <CheckCircle2 size={12} className="text-accent shrink-0" />
                          {svc.title}
                        </li>
                      );
                    })}
                  </ul>
                </CardShell>
              </motion.div>
            );
          })}
        </RevealStagger>
      </Container>
    </Section>
  );
}

function LandingServices() {
  return (
    <Section className="py-12 md:py-16 bg-canvas-2/40">
      <Container>
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 md:mb-10">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-3">
                Services
              </span>
              <h2 className="mt-3 font-display text-3xl md:text-4xl font-medium tracking-tight text-ink">
                Six disciplines. One team.
              </h2>
            </div>
            <Link
              href="/services"
              className="group inline-flex items-center gap-1.5 text-sm text-accent hover:brightness-110 transition shrink-0"
            >
              Full service breakdown
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </Reveal>

        <RevealStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4" step={0.05}>
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.slug}
                href="/services"
                className="group block focus:outline-none"
              >
                <CardShell interactive className="h-full p-5 md:p-6 flex gap-4 items-start relative overflow-hidden">
                  <CardGlow />
                  <div className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 border border-accent/15 text-accent">
                    <Icon size={18} strokeWidth={1.75} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display text-base md:text-lg font-medium text-ink leading-snug">
                      {service.title}
                    </h3>
                    <p className="mt-1 text-xs md:text-sm text-ink-2 line-clamp-2">
                      {service.short}
                    </p>
                    <p className="mt-2 text-[11px] font-mono uppercase tracking-wider text-accent/80">
                      {service.outcome}
                    </p>
                  </div>
                </CardShell>
              </Link>
            );
          })}
        </RevealStagger>
      </Container>
    </Section>
  );
}

function LandingProcess() {
  return (
    <Section className="py-12 md:py-16">
      <Container>
        <Reveal>
          <div className="mb-8 md:mb-10 max-w-2xl">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-3">
              How we work
            </span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-medium tracking-tight text-ink">
              PRD to production{" "}
              <span className="font-serif italic text-accent">in weeks.</span>
            </h2>
          </div>
        </Reveal>

        <div className="relative">
          <RevealStagger
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-4"
            step={0.06}
          >
            {PROCESS.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.25 }}
                  className="relative"
                >
                  <CardShell className="p-5 md:p-6 h-full bg-surface relative overflow-hidden">
                    {i < PROCESS.length - 1 ? (
                      <span
                        aria-hidden
                        className="hidden lg:block absolute -right-2 top-1/2 w-4 h-px bg-accent/30 z-10"
                      />
                    ) : null}
                    <div className="font-display text-2xl text-accent/70 leading-none mb-3">
                      {step.number}
                    </div>
                    <div className="inline-flex size-9 items-center justify-center rounded-lg bg-accent/10 text-accent mb-3">
                      <Icon size={16} />
                    </div>
                    <h3 className="font-display text-base font-medium text-ink mb-1.5">
                      {step.title}
                    </h3>
                    <p className="text-xs md:text-sm text-ink-2 leading-relaxed line-clamp-4">
                      {step.description}
                    </p>
                  </CardShell>
                </motion.div>
              );
            })}
          </RevealStagger>
        </div>
      </Container>
    </Section>
  );
}

function LandingProof() {
  const featured = TESTIMONIALS[0];
  if (!featured) return null;

  return (
    <Section className="py-12 md:py-16">
      <Container>
        <Reveal>
          <CardShell className="p-8 md:p-10 lg:p-12 relative overflow-hidden">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-15"
              style={{
                background:
                  "radial-gradient(ellipse 70% 80% at 100% 0%, rgba(217,255,91,0.35), transparent)",
              }}
            />
            <div className="relative z-10 grid lg:grid-cols-[1.2fr_1fr] gap-8 items-center">
              <blockquote>
                <p className="font-display text-xl md:text-2xl lg:text-3xl text-ink leading-snug tracking-tight">
                  &ldquo;{featured.quote}&rdquo;
                </p>
                <footer className="mt-5 text-sm text-ink-2">
                  <span className="text-ink font-medium">{featured.author}</span>
                  {" · "}
                  {featured.role}
                </footer>
              </blockquote>
              <div className="space-y-4">
                <p className="text-sm text-ink-2 leading-relaxed">
                  Four founders in {BRAND.city}. Senior corporate IT leadership meets
                  AI-first engineering — design, ship, deploy, monitor, and market from one team.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["SaaS", "Fintech", "Ecommerce", "PropTech", "EdTech"].map((tag) => (
                    <Pill key={tag}>{tag}</Pill>
                  ))}
                </div>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1.5 text-sm text-accent hover:brightness-110 transition"
                >
                  Meet the team
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </CardShell>
        </Reveal>
      </Container>
    </Section>
  );
}

function LandingCta() {
  return (
    <Section className="pb-24 md:pb-32">
      <Container>
        <Reveal>
          <CardShell className="rounded-[28px] md:rounded-[36px] bg-surface px-6 py-12 sm:px-10 sm:py-14 md:px-14 md:py-16 text-center relative overflow-hidden">
            <motion.div
              aria-hidden
              animate={{ scale: [1, 1.08, 1], opacity: [0.15, 0.25, 0.15] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(217,255,91,0.4), transparent)",
              }}
            />
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-ink">
                Ready to build with{" "}
                <span className="font-serif italic text-accent">{BRAND.name}</span>?
              </h2>
              <p className="mt-4 text-base md:text-lg text-ink-2">
                Tell us what you&apos;re building. We reply within one business day — no pitch deck required.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <ButtonLink href="/contact" variant="accent" size="lg">
                  Start a conversation
                  <ArrowUpRight size={18} />
                </ButtonLink>
                <ButtonLink href="/projects" variant="outline" size="lg">
                  View projects
                </ButtonLink>
              </div>
              <p className="mt-6 text-xs text-ink-3 font-mono uppercase tracking-wider">
                {BRAND.contactPerson} · {BRAND.email}
              </p>
            </div>
          </CardShell>
        </Reveal>
      </Container>
    </Section>
  );
}
