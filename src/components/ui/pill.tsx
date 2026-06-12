import * as React from "react";
import { cn } from "@/lib/utils";

// Small uppercase pill used for "BRAND DESIGN" / "INTERFACE DESIGN" style chips.
export function Pill({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 h-8 px-3.5 rounded-full",
        "bg-surface text-ink border border-border",
        "font-mono text-[10.5px] uppercase tracking-[0.16em]",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

// Eyebrow label — small monospaced tag above section headlines.
export function Eyebrow({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-3",
        className
      )}
      {...props}
    >
      <span className="size-1.5 rounded-full bg-accent" />
      {children}
    </div>
  );
}
