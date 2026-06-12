"use client";

import * as React from "react";
import { TRUST_LOGOS } from "@/lib/content";
import { cn } from "@/lib/utils";

// TrustLogos — recreates the reference image's text-logo strip at the
// bottom of the hero. We render each "logo" as a styled wordmark with a
// playful per-brand style (italic / bold / tight) and CSS-marquee them
// across the page for movement without external assets.
export function TrustLogos({
  className,
  intent = "subtle",
}: {
  className?: string;
  intent?: "subtle" | "bright";
}) {
  // Duplicate the array so the marquee can loop seamlessly with translateX(-50%).
  const logos = [...TRUST_LOGOS, ...TRUST_LOGOS];

  return (
    <div
      className={cn(
        "scrollbar-none relative w-full overflow-hidden",
        intent === "subtle" ? "opacity-60" : "opacity-100",
        className
      )}
      aria-label="Brands we've worked with"
    >
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-canvas to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-canvas to-transparent" />

      <div className="flex w-max gap-12 md:gap-20 items-center animate-marquee">
        {logos.map((logo, i) => (
          <LogoText key={`${logo.name}-${i}`} name={logo.name} style={logo.style} />
        ))}
      </div>
    </div>
  );
}

function LogoText({
  name,
  style,
}: {
  name: string;
  style: "italic" | "bold" | "tight";
}) {
  const base = "text-2xl md:text-3xl text-ink-2 select-none whitespace-nowrap";
  if (style === "italic") {
    return (
      <span className={cn(base, "font-serif italic")}>{name}</span>
    );
  }
  if (style === "tight") {
    return (
      <span className={cn(base, "font-display tracking-tight")}>{name}</span>
    );
  }
  // bold
  return (
    <span className={cn(base, "font-display font-bold lowercase")}>{name}</span>
  );
}
