"use client";

import * as React from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import {
  ArrowLeft,
  Check,
  Code2,
  Layers,
  Loader2,
  Megaphone,
  Rocket,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CardShell } from "@/components/ui/card-shell";
import { cn } from "@/lib/utils";

const TOTAL_STEPS = 5;

const PROJECT_TYPES = [
  {
    id: "mvp",
    label: "New product / MVP",
    description: "Ship a credible v1 from scratch.",
    icon: Rocket,
  },
  {
    id: "redesign",
    label: "Website or app redesign",
    description: "Modernise an existing product or marketing site.",
    icon: Layers,
  },
  {
    id: "engineering",
    label: "Engineering & cloud",
    description: "Build, deploy, or scale production systems.",
    icon: Code2,
  },
  {
    id: "ai-data",
    label: "Data & AI automation",
    description: "Pipelines, dashboards, or private LLM agents.",
    icon: Sparkles,
  },
  {
    id: "marketing",
    label: "Growth & marketing",
    description: "Paid social, CRO, and demand generation.",
    icon: Megaphone,
  },
] as const;

const NEEDS = [
  "Product design & UX",
  "Full-stack development",
  "Cloud & DevOps",
  "Monitoring & support",
  "Data engineering",
  "AI / automation",
  "Performance marketing",
  "Analytics & CRO",
] as const;

const TIMELINES = [
  { id: "asap", label: "ASAP", sub: "< 4 weeks" },
  { id: "1-2mo", label: "1 – 2 mo", sub: "Short sprint" },
  { id: "3-6mo", label: "3 – 6 mo", sub: "Full build" },
  { id: "6mo+", label: "6+ mo", sub: "Large programme" },
  { id: "flex", label: "Flexible", sub: "Exploring" },
] as const;

const BUDGETS = [
  { id: "under-10k", label: "< $10k" },
  { id: "10-25k", label: "$10 – 25k" },
  { id: "25-50k", label: "$25 – 50k" },
  { id: "50k+", label: "$50k+" },
  { id: "unsure", label: "Not sure" },
] as const;

type FormState = {
  projectType: string;
  needs: string[];
  timeline: string;
  budget: string;
  message: string;
  name: string;
  email: string;
  company: string;
  phone: string;
};

const initialState: FormState = {
  projectType: "",
  needs: [],
  timeline: "",
  budget: "",
  message: "",
  name: "",
  email: "",
  company: "",
  phone: "",
};

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

const stepVariants: Variants = {
  enter: (dir: number) => ({
    opacity: 0,
    x: dir > 0 ? 24 : -24,
  }),
  center: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, ease: EASE },
  },
  exit: (dir: number) => ({
    opacity: 0,
    x: dir > 0 ? -24 : 24,
    transition: { duration: 0.25, ease: EASE },
  }),
};

export function ContactFunnel() {
  const [step, setStep] = React.useState(1);
  const [direction, setDirection] = React.useState(1);
  const [form, setForm] = React.useState<FormState>(initialState);
  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [error, setError] = React.useState<string | null>(null);

  function goTo(next: number) {
    setDirection(next > step ? 1 : -1);
    setStep(next);
  }

  function goBack() {
    if (step > 1) goTo(step - 1);
  }

  function goNext() {
    if (step < TOTAL_STEPS) goTo(step + 1);
  }

  function selectProjectType(id: string) {
    setForm((f) => ({ ...f, projectType: id }));
    window.setTimeout(() => {
      setDirection(1);
      setStep(2);
    }, 280);
  }

  function toggleNeed(need: string) {
    setForm((f) => ({
      ...f,
      needs: f.needs.includes(need)
        ? f.needs.filter((n) => n !== need)
        : [...f.needs, need],
    }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setError(null);

    const projectLabel =
      PROJECT_TYPES.find((p) => p.id === form.projectType)?.label ?? form.projectType;

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "contact-funnel",
          name: form.name,
          email: form.email,
          company: form.company || undefined,
          phone: form.phone || undefined,
          budgetRange: form.budget,
          timeline: form.timeline,
          serviceInterest: projectLabel,
          message: form.message || undefined,
          metadata: {
            projectType: form.projectType,
            needs: form.needs,
          },
        }),
      });

      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
      };

      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
    } catch (err: unknown) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Submission failed.");
    }
  }

  const progress = status === "success" ? 100 : (step / TOTAL_STEPS) * 100;

  return (
    <CardShell className="p-6 md:p-8">
      {status === "success" ? (
        <SuccessState />
      ) : (
        <>
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-3">
                Step {step} of {TOTAL_STEPS}
              </span>
              {step > 1 ? (
                <button
                  type="button"
                  onClick={goBack}
                  className="inline-flex items-center gap-1.5 text-sm text-ink-2 hover:text-ink transition"
                >
                  <ArrowLeft size={14} />
                  Back
                </button>
              ) : (
                <span />
              )}
            </div>
            <div className="h-1.5 rounded-full bg-surface-2 overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-accent"
                initial={false}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
          </div>

          <AnimatePresence mode="wait" custom={direction}>
            {step === 1 && (
              <motion.div
                key="step-1"
                custom={direction}
                variants={stepVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                <StepHeader
                  title="What are you building?"
                  description="Pick the closest match — we'll tailor the next questions."
                />
                <div className="mt-6 grid gap-3">
                  {PROJECT_TYPES.map((type) => (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => selectProjectType(type.id)}
                      className={cn(
                        "group flex items-start gap-4 w-full text-left rounded-2xl border p-4 transition-all duration-200",
                        form.projectType === type.id
                          ? "border-accent bg-accent/10"
                          : "border-border bg-surface-2 hover:border-border-strong hover:-translate-y-0.5"
                      )}
                    >
                      <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-surface border border-border group-hover:border-border-strong transition">
                        <type.icon size={18} className="text-accent" />
                      </span>
                      <span>
                        <span className="block font-medium text-ink">{type.label}</span>
                        <span className="block mt-0.5 text-sm text-ink-2">
                          {type.description}
                        </span>
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step-2"
                custom={direction}
                variants={stepVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                <StepHeader
                  title="What do you need help with?"
                  description="Select everything that applies — multi-select is fine."
                />
                <div className="mt-6 flex flex-wrap gap-2">
                  {NEEDS.map((need) => {
                    const selected = form.needs.includes(need);
                    return (
                      <button
                        key={need}
                        type="button"
                        onClick={() => toggleNeed(need)}
                        className={cn(
                          "h-10 px-4 rounded-full text-sm border transition-all duration-200",
                          selected
                            ? "bg-accent text-ink-inverse border-accent"
                            : "bg-surface-2 text-ink-2 border-border hover:border-border-strong hover:text-ink"
                        )}
                      >
                        {need}
                      </button>
                    );
                  })}
                </div>
                <div className="mt-8 flex justify-end">
                  <Button
                    type="button"
                    variant="primary"
                    size="md"
                    onClick={goNext}
                    disabled={form.needs.length === 0}
                  >
                    Continue
                  </Button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step-3"
                custom={direction}
                variants={stepVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                <StepHeader
                  title="Timeline & budget"
                  description="Rough ranges are enough — we'll refine on a discovery call."
                />

                <fieldset className="mt-6">
                  <legend className="text-[11px] font-mono uppercase tracking-[0.18em] text-ink-3 mb-3">
                    Timeline
                  </legend>
                  <SegmentedGroup>
                    {TIMELINES.map((t) => (
                      <SegmentedOption
                        key={t.id}
                        selected={form.timeline === t.id}
                        onClick={() => setForm((f) => ({ ...f, timeline: t.id }))}
                        label={t.label}
                        sub={t.sub}
                      />
                    ))}
                  </SegmentedGroup>
                </fieldset>

                <fieldset className="mt-6">
                  <legend className="text-[11px] font-mono uppercase tracking-[0.18em] text-ink-3 mb-3">
                    Budget
                  </legend>
                  <SegmentedGroup>
                    {BUDGETS.map((b) => (
                      <SegmentedOption
                        key={b.id}
                        selected={form.budget === b.id}
                        onClick={() => setForm((f) => ({ ...f, budget: b.id }))}
                        label={b.label}
                      />
                    ))}
                  </SegmentedGroup>
                </fieldset>

                <div className="mt-8 flex justify-end">
                  <Button
                    type="button"
                    variant="primary"
                    size="md"
                    onClick={goNext}
                    disabled={!form.timeline || !form.budget}
                  >
                    Continue
                  </Button>
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div
                key="step-4"
                custom={direction}
                variants={stepVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                <StepHeader
                  title="Anything else we should know?"
                  description="Optional — share context, links, or constraints."
                />
                <textarea
                  value={form.message}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, message: e.target.value }))
                  }
                  rows={5}
                  placeholder="e.g. We have an existing Figma file, need SOC2-aware hosting, launching in Q3…"
                  className="mt-6 w-full rounded-2xl border border-border bg-surface-2 px-4 py-3 text-sm text-ink placeholder:text-ink-3 focus:outline-none focus:border-border-strong resize-y min-h-[140px]"
                />
                <div className="mt-8 flex justify-end">
                  <Button type="button" variant="primary" size="md" onClick={goNext}>
                    Continue
                  </Button>
                </div>
              </motion.div>
            )}

            {step === 5 && (
              <motion.form
                key="step-5"
                custom={direction}
                variants={stepVariants}
                initial="enter"
                animate="center"
                exit="exit"
                onSubmit={onSubmit}
              >
                <StepHeader
                  title="How can we reach you?"
                  description="Name and work email are required. Everything else is optional."
                />

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <Field
                    label="Name"
                    required
                    value={form.name}
                    onChange={(v) => setForm((f) => ({ ...f, name: v }))}
                    placeholder="Your name"
                  />
                  <Field
                    label="Work email"
                    required
                    type="email"
                    value={form.email}
                    onChange={(v) => setForm((f) => ({ ...f, email: v }))}
                    placeholder="you@company.com"
                  />
                  <Field
                    label="Company"
                    value={form.company}
                    onChange={(v) => setForm((f) => ({ ...f, company: v }))}
                    placeholder="Company name"
                  />
                  <Field
                    label="Phone"
                    type="tel"
                    value={form.phone}
                    onChange={(v) => setForm((f) => ({ ...f, phone: v }))}
                    placeholder="+91 …"
                  />
                </div>

                {error ? (
                  <p className="mt-4 text-sm text-accent-3">{error}</p>
                ) : null}

                <div className="mt-8 flex justify-end">
                  <Button
                    type="submit"
                    variant="accent"
                    size="md"
                    disabled={status === "loading" || !form.name || !form.email}
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Sending…
                      </>
                    ) : (
                      "Send enquiry"
                    )}
                  </Button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </>
      )}
    </CardShell>
  );
}

function StepHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div>
      <h2 className="font-display text-2xl md:text-3xl tracking-tight text-ink">
        {title}
      </h2>
      <p className="mt-2 text-sm text-ink-2 leading-relaxed">{description}</p>
    </div>
  );
}

function SegmentedGroup({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-wrap gap-2">{children}</div>
  );
}

function SegmentedOption({
  label,
  sub,
  selected,
  onClick,
}: {
  label: string;
  sub?: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex flex-col items-center justify-center min-w-[5.5rem] px-3 py-2.5 rounded-2xl border text-sm transition-all duration-200",
        selected
          ? "bg-accent text-ink-inverse border-accent"
          : "bg-surface-2 text-ink-2 border-border hover:border-border-strong hover:text-ink"
      )}
    >
      <span className="font-medium">{label}</span>
      {sub ? (
        <span
          className={cn(
            "text-[11px] mt-0.5",
            selected ? "text-ink-inverse/80" : "text-ink-3"
          )}
        >
          {sub}
        </span>
      ) : null}
    </button>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  required,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  required?: boolean;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-ink-3">
        {label}
        {required ? <span className="text-accent ml-0.5">*</span> : null}
      </span>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-2 w-full h-11 rounded-2xl border border-border bg-surface-2 px-4 text-sm text-ink placeholder:text-ink-3 focus:outline-none focus:border-border-strong"
      />
    </label>
  );
}

function SuccessState() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="py-10 md:py-14 text-center"
    >
      <span className="inline-flex size-14 items-center justify-center rounded-full bg-accent/15 border border-accent/30 mb-6">
        <Check size={28} className="text-accent" />
      </span>
      <h2 className="font-display text-3xl md:text-4xl tracking-tight text-ink">
        Thanks — we&apos;ve got it.
      </h2>
      <p className="mt-3 text-sm md:text-base text-ink-2 max-w-md mx-auto leading-relaxed">
        A real person on our team will read your brief and reply within one
        business day. Check your inbox for a confirmation.
      </p>
    </motion.div>
  );
}
