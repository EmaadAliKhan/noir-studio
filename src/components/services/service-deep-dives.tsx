import { Check } from "lucide-react";
import { SERVICES } from "@/lib/content";
import { FEATURES } from "@/lib/features";
import {
  SERVICE_ENGAGEMENTS,
  SERVICE_ICON_OVERRIDES,
  TRACKS,
} from "@/components/services/data";
import { Container, Section } from "@/components/ui/section";
import { CardShell } from "@/components/ui/card-shell";
import { Reveal } from "@/components/ui/reveal";

export function ServiceDeepDives() {
  return (
    <Section className="bg-canvas-2/40">
      <Container className="space-y-20 md:space-y-28">
        {TRACKS.map((track) => (
          <div key={track.id} id={track.id} className="scroll-mt-28">
            <Reveal>
              <div className="mb-10">
                <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-3 mb-3">
                  {track.label} track
                </div>
                <h2 className="font-display text-4xl md:text-5xl text-ink tracking-tight">
                  {track.title}
                </h2>
                <p className="mt-4 text-ink-2 max-w-2xl">{track.description}</p>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {track.serviceSlugs.map((slug) => {
                const service = SERVICES.find((s) => s.slug === slug);
                if (!service) return null;
                const engagement = SERVICE_ENGAGEMENTS[slug];
                const Icon = SERVICE_ICON_OVERRIDES[slug] ?? service.icon;
                return (
                  <Reveal key={slug}>
                    <CardShell id={slug} className="p-8 md:p-10 h-full scroll-mt-28">
                      <div className="flex items-start gap-4">
                        <div className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                          <Icon size={20} />
                        </div>
                        <div>
                          <h3 className="font-display text-2xl text-ink">{service.title}</h3>
                          <p className="mt-3 text-ink-2 leading-relaxed">{service.short}</p>
                        </div>
                      </div>

                      <ul className="mt-8 space-y-3">
                        {service.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-3 text-sm text-ink-2">
                            <Check className="size-4 text-accent shrink-0 mt-0.5" />
                            {b}
                          </li>
                        ))}
                      </ul>

                      {engagement ? (
                        <div className="mt-8 pt-8 border-t border-border grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <div className="font-mono text-[10px] uppercase tracking-wider text-ink-3">
                              Timeline
                            </div>
                            <div className="mt-1 text-sm text-ink">{engagement.duration}</div>
                          </div>
                          <div>
                            <div className="font-mono text-[10px] uppercase tracking-wider text-ink-3">
                              Outcome
                            </div>
                            <div className="mt-1 text-sm text-ink-2">{service.outcome}</div>
                          </div>
                          {FEATURES.showPricing ? (
                            <div>
                              <div className="font-mono text-[10px] uppercase tracking-wider text-ink-3">
                                From
                              </div>
                              <div className="mt-1 text-sm text-accent font-display text-lg">
                                {engagement.priceFrom}
                              </div>
                            </div>
                          ) : null}
                        </div>
                      ) : null}
                    </CardShell>
                  </Reveal>
                );
              })}
            </div>
          </div>
        ))}
      </Container>
    </Section>
  );
}
