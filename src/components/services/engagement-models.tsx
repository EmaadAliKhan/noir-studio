import { ENGAGEMENT_MODELS } from "@/components/services/data";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { CardShell, CardGlow } from "@/components/ui/card-shell";
import { Reveal, RevealStagger } from "@/components/ui/reveal";

export function EngagementModels() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Engagement models"
            title={
              <>
                Fixed price by default.{" "}
                <span className="font-serif italic text-ink-2">Retainers when it fits.</span>
              </>
            }
          />
        </Reveal>

        <RevealStagger className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {ENGAGEMENT_MODELS.map((model) => {
            const Icon = model.icon;
            return (
              <CardShell key={model.id} interactive className="group p-8 h-full">
                <CardGlow />
                <Icon className="size-8 text-accent mb-6" />
                <h3 className="font-display text-2xl text-ink">{model.title}</h3>
                <div className="mt-2 font-mono text-[10px] uppercase tracking-wider text-ink-3">
                  {model.cadence}
                </div>
                <div className="mt-4 font-display text-3xl text-accent">{model.price}</div>
                <p className="mt-4 text-sm text-ink-2 leading-relaxed">{model.description}</p>
                <ul className="mt-6 space-y-2">
                  {model.includes.map((item) => (
                    <li key={item} className="text-sm text-ink-2 flex items-start gap-2">
                      <span className="text-accent mt-1">·</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardShell>
            );
          })}
        </RevealStagger>
      </Container>
    </Section>
  );
}
