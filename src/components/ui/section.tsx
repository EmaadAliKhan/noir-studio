import * as React from "react";
import { cn } from "@/lib/utils";

// Section: standard vertical-rhythm wrapper used by every page.
export function Section({
  className,
  children,
  bleed = false,
  ...props
}: React.HTMLAttributes<HTMLElement> & { bleed?: boolean }) {
  return (
    <section
      className={cn(
        "relative w-full",
        bleed ? "py-0" : "py-20 md:py-28",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}

// Container: the central column. Wide enough for the bento grid (~1280px)
// with comfortable gutters on smaller screens.
export function Container({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("mx-auto w-full max-w-[1280px] px-6 md:px-10", className)}
      {...props}
    >
      {children}
    </div>
  );
}

// SectionHeading: standard eyebrow + headline pair. Subagents reuse this so
// every page has consistent vertical rhythm and typography.
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl mb-12 md:mb-16",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? (
        <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-3 mb-4">
          <span className="size-1.5 rounded-full bg-accent" />
          {eyebrow}
        </div>
      ) : null}
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium tracking-[-0.02em] leading-[1.02] text-ink">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base md:text-lg text-ink-2 leading-relaxed max-w-2xl">
          {description}
        </p>
      ) : null}
    </div>
  );
}
