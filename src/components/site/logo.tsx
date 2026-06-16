import * as React from "react";
import Link from "next/link";
import { BRAND } from "@/lib/brand";
import { cn } from "@/lib/utils";

// AasimMark — the small geometric logomark to the left of the wordmark.
// Inspired by the reference image's stacked-rounded-square glyph.
export function AasimMark({
  className,
  size = 28,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      className={cn("text-ink", className)}
      aria-hidden
    >
      <rect
        x="2"
        y="2"
        width="20"
        height="20"
        rx="6"
        className="fill-current"
      />
      <rect
        x="10"
        y="10"
        width="20"
        height="20"
        rx="6"
        className="fill-accent"
      />
    </svg>
  );
}

// Wordmark + mark, linked to home.
export function Logo({
  className,
  variant = "default",
}: {
  className?: string;
  variant?: "default" | "compact";
}) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center gap-2 group",
        "transition-opacity hover:opacity-80",
        className
      )}
      aria-label={`${BRAND.name} — home`}
    >
      <AasimMark size={variant === "compact" ? 22 : 28} />
      <span className="font-display text-[18px] md:text-[20px] font-medium tracking-tight text-ink">
        {BRAND.wordmark}
      </span>
    </Link>
  );
}
