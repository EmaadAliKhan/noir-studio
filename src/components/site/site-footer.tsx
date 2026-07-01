import * as React from "react";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { BRAND } from "@/lib/brand";
import { FEATURES } from "@/lib/features";
import { PRIMARY_NAV } from "@/lib/content";
import { Logo } from "@/components/site/logo";
import { Container } from "@/components/ui/section";
import { NewsletterForm } from "@/components/site/newsletter-form";

const SOCIAL_LINKS = [
  { label: "Instagram", href: (h: string) => `https://instagram.com/${h}` },
  { label: "LinkedIn", href: (h: string) => `https://linkedin.com/company/${h}` },
  { label: "X", href: (h: string) => `https://x.com/${h}` },
  { label: "GitHub", href: (h: string) => `https://github.com/${h}` },
] as const;

export function SiteFooter() {
  return (
    <footer className="relative bg-canvas-2 border-t border-border mt-24">
      <Container className="py-16 md:py-24">
        <div className="rounded-[36px] bg-surface border border-border p-8 md:p-14 mb-16 relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-3 mb-4">
                Ready to start
              </div>
              <h2 className="font-display text-4xl md:text-6xl lg:text-7xl tracking-[-0.02em] leading-[0.95] text-ink max-w-3xl">
                Let&apos;s turn your <span className="font-serif italic text-accent">idea</span> into a powerful reality.
              </h2>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 self-start md:self-end px-6 h-14 rounded-full bg-accent text-ink-inverse font-medium text-base hover:brightness-95 transition shrink-0"
            >
              Become a client
              <ArrowUpRight size={18} />
            </Link>
          </div>
          <div className="absolute -bottom-12 -right-6 opacity-[0.04] pointer-events-none select-none font-display text-[14rem] md:text-[22rem] leading-none tracking-tighter">
            labs
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-12 gap-10">
          <div className="col-span-2 md:col-span-5">
            <Logo />
            <p className="mt-5 text-ink-2 text-sm leading-relaxed max-w-sm">
              {BRAND.description}
            </p>
            <div className="mt-6 flex items-start gap-2 text-ink-3 text-sm">
              <MapPin size={14} className="text-accent shrink-0 mt-0.5" />
              {BRAND.address}
            </div>
            {FEATURES.newsletter ? (
              <div className="mt-8 max-w-sm">
                <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-3 mb-3">
                  Newsletter
                </div>
                <NewsletterForm />
              </div>
            ) : null}
          </div>

          <div className="col-span-1 md:col-span-2">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-3 mb-4">
              Site
            </div>
            <ul className="space-y-3">
              {PRIMARY_NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-ink-2 hover:text-ink transition"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2 min-w-0">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-3 mb-4">
              Contact
            </div>
            <ul className="space-y-3 text-sm">
              <li className="text-ink font-medium">{BRAND.contactPerson}</li>
              <li className="min-w-0">
                <a
                  href={`mailto:${BRAND.email}`}
                  className="text-xs text-ink-2 hover:text-ink transition break-all leading-snug"
                >
                  {BRAND.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${BRAND.phone.replace(/\s/g, "")}`}
                  className="text-ink-2 hover:text-ink transition"
                >
                  {BRAND.phone}
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-3">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-3 mb-4">
              Social
            </div>
            {FEATURES.socials ? (
              <ul className="space-y-3">
                {SOCIAL_LINKS.map((s) => {
                  const handle =
                    s.label === "Instagram"
                      ? BRAND.socials.instagram
                      : s.label === "LinkedIn"
                        ? BRAND.socials.linkedin
                        : s.label === "X"
                          ? BRAND.socials.x
                          : BRAND.socials.github;
                  return (
                    <li key={s.label}>
                      <a
                        href={s.href(handle)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-1.5 text-sm text-ink-2 hover:text-ink transition"
                      >
                        {s.label}
                        <ArrowUpRight
                          size={14}
                          className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition"
                        />
                      </a>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p className="text-sm text-ink-3 leading-relaxed">
                Coming soon — social profiles are in development.
              </p>
            )}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs text-ink-3 font-mono uppercase tracking-[0.18em]">
          <div>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-ink-2">Privacy</Link>
            <Link href="/terms" className="hover:text-ink-2">Terms</Link>
            <span className="inline-flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-accent animate-pulse" />
              Available for new work
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
