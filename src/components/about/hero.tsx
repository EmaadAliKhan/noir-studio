import { ArrowUpRight } from "lucide-react";
import { CardShell } from "@/components/ui/card-shell";
import { ButtonLink } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/pill";
import { Reveal } from "@/components/ui/reveal";
import { Container, Section } from "@/components/ui/section";
import { BRAND } from "@/lib/brand";

export function AboutHero() {
  return (
    <Section className="pt-10 md:pt-14 pb-12 md:pb-16">
      <Container>
        <Reveal>
          <CardShell className="rounded-[36px] bg-surface relative overflow-hidden">
            {/* Soft ambient glow in the top-right corner. */}
            <div
              aria-hidden
              className="pointer-events-none absolute -top-32 -right-32 size-[480px] rounded-full opacity-30 blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, rgba(217,255,91,0.35), transparent 70%)",
              }}
            />

            <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-12 p-8 md:p-12 lg:p-16">
              {/* Left — eyebrow + headline + subhead + CTAs. */}
              <div className="relative flex flex-col">
                <Eyebrow className="mb-6">About us</Eyebrow>

                <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium tracking-[-0.02em] leading-[1.02] text-ink">
                  A small team that{" "}
                  <span className="font-serif italic text-accent">
                    punches above
                  </span>{" "}
                  its weight.
                </h1>

                <p className="mt-6 md:mt-8 text-base md:text-lg text-ink-2 leading-relaxed max-w-xl">
                  We&apos;re a four-person studio in {BRAND.city} pairing 15+
                  years of senior corporate IT leadership with a deliberately
                  AI-first build process. The result: a senior&#8209;corporate
                  brain inside a fast-builder body — one matrix of skills that
                  designs, ships, deploys, monitors, and markets the product.
                </p>

                <div className="mt-8 md:mt-10 flex flex-wrap items-center gap-3">
                  <ButtonLink href="/contact" variant="accent" size="lg">
                    Work with us
                    <ArrowUpRight size={18} />
                  </ButtonLink>
                  <ButtonLink href="/case-studies" variant="outline" size="lg">
                    See our work
                  </ButtonLink>
                </div>
              </div>

              {/* Right — decorative 2x2 grid of mini cards. */}
              <div
                aria-hidden
                className="hidden lg:grid grid-cols-2 grid-rows-2 gap-3 self-stretch min-h-[320px]"
              >
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="relative rounded-3xl bg-surface-2 border border-border overflow-hidden"
                  >
                    <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_30%_30%,#fff,transparent_60%)]" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-3">
                        0{i + 1}
                      </span>
                      <span className="size-1.5 rounded-full bg-accent/70" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardShell>
        </Reveal>
      </Container>
    </Section>
  );
}
