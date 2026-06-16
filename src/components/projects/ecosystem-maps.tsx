import { ArrowRight } from "lucide-react";
import { CardShell } from "@/components/ui/card-shell";
import { Reveal } from "@/components/ui/reveal";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { cn } from "@/lib/utils";

type NodeProps = {
  label: string;
  sub?: string;
  accent?: "lime" | "mint" | "amber";
};

function Node({ label, sub, accent = "lime" }: NodeProps) {
  const accentClass =
    accent === "lime"
      ? "border-accent/30 bg-accent/5 text-accent"
      : accent === "mint"
        ? "border-accent-2/30 bg-accent-2/5 text-accent-2"
        : "border-accent-3/30 bg-accent-3/5 text-accent-3";

  return (
    <div
      className={cn(
        "rounded-2xl border px-4 py-3 text-center min-w-[120px]",
        accentClass
      )}
    >
      <div className="font-medium text-sm text-ink leading-snug">{label}</div>
      {sub ? (
        <div className="mt-1 font-mono text-[9px] uppercase tracking-wider text-ink-3">
          {sub}
        </div>
      ) : null}
    </div>
  );
}

function FlowArrow() {
  return (
    <ArrowRight
      size={16}
      className="text-ink-3 shrink-0 hidden sm:block"
      aria-hidden
    />
  );
}

function EcosystemCard({
  title,
  region,
  accent,
  children,
}: {
  title: string;
  region: string;
  accent: "lime" | "mint" | "amber";
  children: React.ReactNode;
}) {
  const glowColor =
    accent === "lime"
      ? "rgba(217,255,91,0.15)"
      : accent === "mint"
        ? "rgba(110,231,183,0.15)"
        : "rgba(244,184,96,0.15)";

  return (
    <CardShell className="p-6 md:p-8 relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-16 -right-16 size-48 rounded-full opacity-40 blur-2xl"
        style={{ background: `radial-gradient(circle, ${glowColor}, transparent 70%)` }}
      />
      <div className="relative">
        <div className="flex items-center justify-between gap-4 mb-6">
          <h3 className="font-display text-xl md:text-2xl text-ink">{title}</h3>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-3">
            {region}
          </span>
        </div>
        {children}
      </div>
    </CardShell>
  );
}

export function EcosystemMaps() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Architecture"
            title={
              <>
                Three product{" "}
                <span className="font-serif italic text-accent">ecosystems.</span>
              </>
            }
            description="How the major platforms connect — mobile clients, admin dashboards, APIs, and third-party integrations."
          />
        </Reveal>

        <div className="space-y-6">
          <Reveal>
            <EcosystemCard title="Recaf" region="KSA — Coffee Loyalty" accent="lime">
              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                  <Node label="Recaf Mobile" sub="Expo RN" />
                  <FlowArrow />
                  <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                    <Node label="Recaf API (afroz)" sub="NestJS e-commerce" />
                    <Node label="Recaf API (aasim)" sub="NestJS + Foodics" accent="mint" />
                  </div>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                  <Node label="Recaf Dashboard" sub="Next.js — aasim" accent="amber" />
                  <FlowArrow />
                  <Node label="Recaf Admin" sub="React — afroz" />
                  <FlowArrow />
                  <Node label="Foodics POS" sub="Webhooks" accent="mint" />
                </div>
              </div>
            </EcosystemCard>
          </Reveal>

          <Reveal delay={0.05}>
            <EcosystemCard title="Broker" region="Egypt — Real Estate" accent="mint">
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                <Node label="BrokerApp Mobile" sub="Flutter" accent="mint" />
                <FlowArrow />
                <Node label="ApiBroker" sub=".NET 9 API" accent="mint" />
                <FlowArrow />
                <Node label="SQL Server" sub="brokerDB" />
              </div>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                <Node label="broker_dashboard" sub="Laravel admin" accent="mint" />
                <FlowArrow />
                <Node label="ApiBroker" sub="REST API" accent="mint" />
                <FlowArrow />
                <Node label="Paymob Egypt" sub="Payments" accent="amber" />
              </div>
            </EcosystemCard>
          </Reveal>

          <Reveal delay={0.1}>
            <EcosystemCard title="MallsApp" region="KSA — Mall Shopping" accent="amber">
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                <Node label="MallsApp Mobile" sub="Not in repo" accent="amber" />
                <FlowArrow />
                <Node label="apiUsersV2.php" sub="PHP REST" accent="amber" />
                <FlowArrow />
                <Node label="MySQL" sub="mallzapp2019" />
              </div>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                <Node label="mallsappextra Admin" sub="Operations" accent="amber" />
                <Node label="mallsAdmin Corporate" sub="Brand partners" accent="amber" />
              </div>
            </EcosystemCard>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
