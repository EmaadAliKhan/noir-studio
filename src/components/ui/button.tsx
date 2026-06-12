import * as React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonStyles = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium tracking-tight transition-all duration-200 ease-out disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
  {
    variants: {
      variant: {
        // White pill — primary CTA, matches the "Become a client" button.
        primary:
          "bg-ink text-ink-inverse hover:bg-accent hover:text-ink-inverse shadow-[0_8px_24px_-12px_rgba(217,255,91,0.5)]",
        // Lime — used sparingly for the loudest, single CTA on a page.
        accent:
          "bg-accent text-ink-inverse hover:brightness-95 shadow-[0_10px_30px_-12px_rgba(217,255,91,0.8)]",
        // Dark pill on light surfaces (or vice versa) — outline style.
        outline:
          "bg-transparent text-ink border border-border-strong hover:bg-surface-2 hover:border-ink-3",
        // Solid dark pill — matches the BRAND DESIGN / INTERFACE DESIGN tags.
        chip: "bg-surface text-ink border border-border hover:border-border-strong",
        // Ghost — header nav buttons.
        ghost:
          "bg-transparent text-ink-2 hover:text-ink hover:bg-white/5",
      },
      size: {
        sm: "h-9 px-4 text-sm rounded-full",
        md: "h-11 px-6 text-sm rounded-full",
        lg: "h-14 px-8 text-base rounded-full",
        chip: "h-9 px-4 text-[11px] uppercase tracking-[0.14em] rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonStyles> & {
    asChild?: boolean;
  };

export function Button({
  className,
  variant,
  size,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonStyles({ variant, size }), className)}
      {...props}
    />
  );
}

type ButtonLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof buttonStyles> & {
    href: string;
  };

export function ButtonLink({
  className,
  variant,
  size,
  href,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(buttonStyles({ variant, size }), className)}
      {...props}
    />
  );
}

export { buttonStyles };
