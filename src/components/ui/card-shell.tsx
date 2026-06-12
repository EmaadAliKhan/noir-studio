"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

// CardShell — the base inset-card used everywhere. Matches the reference
// design's "card-inside-canvas" look with a subtle border, rounded corners,
// and a tactile hover lift. Used by every bento cell, service card, etc.
export function CardShell({
  className,
  children,
  interactive = false,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { interactive?: boolean }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[28px] bg-surface border border-border",
        "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)]",
        interactive &&
          "transition-all duration-300 ease-out hover:border-border-strong hover:-translate-y-0.5 hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.06)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

// CardGlow — subtle radial gradient that animates with the cursor on hover.
// Used inside CardShell for premium "alive" feel.
export function CardGlow({
  className,
  color = "rgba(217,255,91,0.10)",
}: {
  className?: string;
  color?: string;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const parent = el.parentElement;
    if (!parent) return;

    const onMove = (e: MouseEvent) => {
      const rect = parent.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty("--mx", `${x}%`);
      el.style.setProperty("--my", `${y}%`);
    };
    parent.addEventListener("mousemove", onMove);
    return () => parent.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100",
        className
      )}
      style={{
        background: `radial-gradient(360px circle at var(--mx,50%) var(--my,50%), ${color}, transparent 60%)`,
      }}
      aria-hidden
    />
  );
}
