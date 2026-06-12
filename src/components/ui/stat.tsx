import * as React from "react";
import { cn } from "@/lib/utils";

export function Stat({
  value,
  label,
  className,
}: {
  value: React.ReactNode;
  label: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <div className="font-display text-4xl md:text-5xl lg:text-6xl font-medium tracking-[-0.02em] text-ink leading-none">
        {value}
      </div>
      <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-3">
        {label}
      </div>
    </div>
  );
}
