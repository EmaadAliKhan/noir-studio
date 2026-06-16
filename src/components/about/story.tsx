import { MapPin } from "lucide-react";
import { BRAND } from "@/lib/brand";
import { Container, Section } from "@/components/ui/section";
import { CardShell } from "@/components/ui/card-shell";
import { Reveal } from "@/components/ui/reveal";

export function AboutStory() {
  return (
    <Section>
      <Container>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <Reveal>
            <div className="space-y-6 text-ink-2 leading-relaxed text-base md:text-lg">
              <p>
                Noir Studio started when four people with complementary skills got tired of watching
                founders juggle three vendors, two freelancers, and a marketing agency that
                didn&apos;t understand the product.
              </p>
              <p>
                Our managing partner brings 15+ years from Genpact — IT operations, customer
                support, and a deep network across Hyderabad&apos;s enterprise and startup
                ecosystem. Our lead architect ships production systems with senior oversight on
                every AI-assisted build. Our core engineer runs data pipelines and orchestrates
                Cursor agents at speed. Our head of design turns fuzzy requirements into
                interfaces people actually adopt.
              </p>
              <p className="text-ink font-display text-xl md:text-2xl tracking-tight">
                Together, we ship like a senior team — with startup speed.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <CardShell className="p-8 md:p-10">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent mb-4">
                Founded in Hyderabad · 2025
              </div>
              <h2 className="font-display text-3xl text-ink">One studio, full stack.</h2>
              <div className="mt-6 flex items-start gap-3 text-ink-2">
                <MapPin className="size-5 text-accent shrink-0 mt-0.5" />
                <div>{BRAND.address}</div>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { label: "Team size", value: "4 founders" },
                  { label: "Focus", value: "Build · Run · Grow" },
                  { label: "Typical MVP", value: "3 – 6 weeks" },
                  { label: "Model", value: "End-to-end" },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl bg-surface-2 border border-border p-4">
                    <div className="font-mono text-[10px] uppercase tracking-wider text-ink-3">
                      {item.label}
                    </div>
                    <div className="mt-1 font-display text-lg text-ink">{item.value}</div>
                  </div>
                ))}
              </div>
            </CardShell>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
