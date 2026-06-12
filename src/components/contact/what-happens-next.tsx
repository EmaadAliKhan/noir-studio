import { CalendarCheck, FileText, MessageSquare } from "lucide-react";
import { CardShell } from "@/components/ui/card-shell";
import { SectionHeading } from "@/components/ui/section";
import { RevealStagger } from "@/components/ui/reveal";

const STEPS = [
  {
    icon: MessageSquare,
    title: "We read every submission",
    description:
      "A real person on our team reviews your brief within one business day — no auto-replies, no ticket queues.",
  },
  {
    icon: CalendarCheck,
    title: "Discovery call",
    description:
      "If there's a fit, we'll book a 30-minute call to understand goals, constraints, and timeline in detail.",
  },
  {
    icon: FileText,
    title: "Scope & proposal",
    description:
      "You'll receive a fixed-price proposal with milestones, deliverables, and a realistic launch date before any code starts.",
  },
] as const;

export function WhatHappensNext() {
  return (
    <div>
      <SectionHeading
        eyebrow="What happens next"
        title="From enquiry to kickoff."
        description="No sales theatre — just a clear path from your first message to a signed-off scope."
        className="mb-10 md:mb-12"
      />

      <RevealStagger className="grid md:grid-cols-3 gap-4 md:gap-5">
        {STEPS.map((step) => (
          <CardShell key={step.title} className="p-6 md:p-7">
            <span className="inline-flex size-10 items-center justify-center rounded-2xl bg-surface-2 border border-border mb-4">
              <step.icon size={18} className="text-accent" />
            </span>
            <h3 className="font-display text-lg tracking-tight text-ink">
              {step.title}
            </h3>
            <p className="mt-2 text-sm text-ink-2 leading-relaxed">
              {step.description}
            </p>
          </CardShell>
        ))}
      </RevealStagger>
    </div>
  );
}
