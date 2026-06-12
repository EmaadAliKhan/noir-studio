"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Loader2, RotateCcw } from "lucide-react";
import {
  ADDON_OPTIONS,
  calculateEstimate,
  formatUsd,
  PROJECT_TYPES,
  SCOPE_SIZES,
  type PricingInput,
  type ProjectType,
  type ScopeSize,
} from "@/components/pricing-calculator/logic";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { CardShell } from "@/components/ui/card-shell";
import { Button, ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

const defaultInput: PricingInput = {
  projectType: "web-app",
  scopeSize: "md",
  timelineWeeks: 6,
  addons: [],
};

export function PricingCalculator() {
  const [input, setInput] = React.useState<PricingInput>(defaultInput);
  const [email, setEmail] = React.useState("");
  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = React.useState<string | null>(null);

  const estimate = React.useMemo(() => calculateEstimate(input), [input]);

  async function emailEstimate() {
    setStatus("loading");
    setError(null);
    try {
      const payload = {
        projectType: input.projectType,
        scopeSize: input.scopeSize,
        timelineWeeks: input.timelineWeeks,
        addons: input.addons,
        estimateMinUsd: estimate.minUsd,
        estimateMaxUsd: estimate.maxUsd,
        email: email || undefined,
      };
      const res = await fetch("/api/pricing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Could not save estimate.");
      if (email) {
        await fetch("/api/leads", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            source: "pricing-calculator",
            email,
            serviceInterest: input.projectType,
            metadata: payload,
          }),
        });
      }
      setStatus("success");
    } catch (e) {
      setStatus("error");
      setError(e instanceof Error ? e.message : "Something went wrong.");
    }
  }

  return (
    <Section id="calculator">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Pricing calculator"
            title={
              <>
                Ballpark your project{" "}
                <span className="font-serif italic text-accent">in 60 seconds.</span>
              </>
            }
            description="Transparent estimates — final scope and price are locked at PRD sign-off."
          />
        </Reveal>

        <CardShell className="overflow-hidden">
          <div className="grid lg:grid-cols-[1.1fr_1fr]">
            <div className="p-6 md:p-10 border-b lg:border-b-0 lg:border-r border-border space-y-8">
              <Field label="Project type">
                <Segmented
                  options={PROJECT_TYPES.map((p) => ({ id: p.id, label: p.label }))}
                  value={input.projectType}
                  onChange={(v) => setInput((s) => ({ ...s, projectType: v as ProjectType }))}
                />
              </Field>

              <Field label="Scope size">
                <Segmented
                  options={SCOPE_SIZES.map((s) => ({ id: s.id, label: s.label, hint: s.hint }))}
                  value={input.scopeSize}
                  onChange={(v) => setInput((s) => ({ ...s, scopeSize: v as ScopeSize }))}
                />
              </Field>

              <Field label={`Timeline — ${input.timelineWeeks} weeks`}>
                <input
                  type="range"
                  min={2}
                  max={24}
                  value={input.timelineWeeks}
                  onChange={(e) =>
                    setInput((s) => ({ ...s, timelineWeeks: Number(e.target.value) }))
                  }
                  className="w-full accent-accent"
                />
              </Field>

              <Field label="Add-ons">
                <div className="flex flex-wrap gap-2">
                  {ADDON_OPTIONS.map((opt) => {
                    const selected = input.addons.includes(opt.id);
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() =>
                          setInput((s) => ({
                            ...s,
                            addons: selected
                              ? s.addons.filter((a) => a !== opt.id)
                              : [...s.addons, opt.id],
                          }))
                        }
                        className={cn(
                          "h-9 px-4 rounded-full text-sm border transition",
                          selected
                            ? "bg-accent text-ink-inverse border-accent"
                            : "bg-surface text-ink border-border hover:border-border-strong"
                        )}
                      >
                        {opt.label}
                      </button>
                    );
                  })}
                </div>
              </Field>

              <Field label="Email me a detailed breakdown (optional)">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full h-12 px-4 rounded-2xl bg-surface-2 border border-border text-ink placeholder:text-ink-3 focus:border-accent focus:outline-none"
                />
              </Field>

              <button
                type="button"
                onClick={() => {
                  setInput(defaultInput);
                  setEmail("");
                  setStatus("idle");
                }}
                className="inline-flex items-center gap-2 text-sm text-ink-3 hover:text-ink transition"
              >
                <RotateCcw size={14} />
                Reset
              </button>
            </div>

            <div className="p-6 md:p-10 bg-canvas-2/50 lg:sticky lg:top-24 self-start">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-3">
                Estimated investment
              </div>
              <motion.div
                key={`${estimate.minUsd}-${estimate.maxUsd}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-3 font-display text-5xl md:text-6xl text-ink tracking-tight"
              >
                {formatUsd(estimate.minUsd)} – {formatUsd(estimate.maxUsd)}
                <span className="text-2xl text-ink-3 ml-2">USD</span>
              </motion.div>

              <div className="mt-8 space-y-3">
                {estimate.breakdown.map((row) => (
                  <div key={row.label} className="flex justify-between text-sm">
                    <span className="text-ink-2">{row.label}</span>
                    <span className="text-ink font-mono">{formatUsd(row.amount)}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <div className="text-sm text-ink-3">
                  Typical timeline:{" "}
                  <span className="text-ink">{input.timelineWeeks} weeks</span>
                </div>
                <p className="mt-4 text-xs text-ink-3 leading-relaxed">
                  Estimates only. Final scope confirmed in your PRD.
                </p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button
                  variant="accent"
                  size="md"
                  className="flex-1"
                  onClick={emailEstimate}
                  disabled={status === "loading"}
                >
                  {status === "loading" ? (
                    <Loader2 className="size-4 animate-spin" />
                  ) : status === "success" ? (
                    "Sent!"
                  ) : (
                    "Email me this estimate"
                  )}
                </Button>
                <ButtonLink href="/contact" variant="outline" size="md" className="flex-1">
                  Book a call
                </ButtonLink>
              </div>
              {error ? <p className="mt-3 text-sm text-accent-3">{error}</p> : null}
            </div>
          </div>
        </CardShell>
      </Container>
    </Section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-3 mb-3">
        {label}
      </div>
      {children}
    </div>
  );
}

function Segmented({
  options,
  value,
  onChange,
}: {
  options: { id: string; label: string; hint?: string }[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => (
        <button
          key={opt.id}
          type="button"
          onClick={() => onChange(opt.id)}
          className={cn(
            "px-4 py-2.5 rounded-2xl text-sm border transition text-left",
            value === opt.id
              ? "bg-accent text-ink-inverse border-accent"
              : "bg-surface text-ink border-border hover:border-border-strong"
          )}
        >
          <div>{opt.label}</div>
          {opt.hint ? (
            <div className={cn("text-[11px] mt-0.5", value === opt.id ? "text-ink-inverse/70" : "text-ink-3")}>
              {opt.hint}
            </div>
          ) : null}
        </button>
      ))}
    </div>
  );
}
