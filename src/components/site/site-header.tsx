"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { PRIMARY_NAV } from "@/lib/content";
import { Logo } from "@/components/site/logo";
import { ButtonLink } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Auto-close mobile menu on route change.
  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40">
      <div className="px-3 md:px-6 pt-3 md:pt-4">
        <div
          className={cn(
            "mx-auto max-w-[1280px]",
            "flex items-center justify-between gap-4",
            "h-16 md:h-[68px] px-4 md:px-6",
            "rounded-full border border-border bg-surface/85 backdrop-blur-xl",
            "transition-shadow duration-300",
            scrolled && "shadow-[0_20px_60px_-30px_rgba(0,0,0,0.6)]"
          )}
        >
          <Logo />

          <nav className="hidden lg:flex items-center gap-1">
            {PRIMARY_NAV.map((item) => {
              const active =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-3.5 py-2 rounded-full text-sm tracking-tight transition-colors",
                    active
                      ? "text-ink"
                      : "text-ink-2 hover:text-ink hover:bg-white/5"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <ButtonLink
              href="/contact"
              variant="primary"
              size="sm"
              className="hidden md:inline-flex"
            >
              Let&apos;s work
            </ButtonLink>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle navigation"
              className="lg:hidden inline-flex items-center justify-center size-10 rounded-full border border-border text-ink hover:bg-white/5 transition"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu sheet */}
      {open ? (
        <div className="lg:hidden px-3 mt-2">
          <div className="mx-auto max-w-[1280px] rounded-3xl border border-border bg-surface/95 backdrop-blur-xl p-4">
            <nav className="flex flex-col">
              {PRIMARY_NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-3 rounded-xl text-base text-ink hover:bg-white/5"
                >
                  {item.label}
                </Link>
              ))}
              <ButtonLink
                href="/contact"
                variant="primary"
                size="md"
                className="mt-3 w-full"
              >
                Let&apos;s work
              </ButtonLink>
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  );
}
