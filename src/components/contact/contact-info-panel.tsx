import type { LucideIcon } from "lucide-react";
import { Calendar, Mail, MapPin, Phone } from "lucide-react";
import { CardShell } from "@/components/ui/card-shell";
import { Button } from "@/components/ui/button";
import { BRAND } from "@/lib/brand";

export function ContactInfoPanel() {
  return (
    <CardShell className="p-6 md:p-8 space-y-6">
      <div>
        <h2 className="font-display text-2xl tracking-tight text-ink">
          Reach us directly
        </h2>
        <p className="mt-2 text-sm text-ink-2 leading-relaxed">
          Prefer email or a quick call? We&apos;re async-first with overlap for
          IST, EU, and US timezones.
        </p>
      </div>

      <ul className="space-y-4">
        <ContactRow
          icon={Mail}
          label="Email"
          href={`mailto:${BRAND.email}`}
          value={BRAND.email}
        />
        <ContactRow
          icon={Phone}
          label="Phone"
          href={`tel:${BRAND.phone.replace(/\s/g, "")}`}
          value={BRAND.phone}
        />
        <ContactRow
          icon={MapPin}
          label="Office"
          value={`${BRAND.address}, ${BRAND.city}`}
        />
      </ul>

      <div className="pt-2 border-t border-border">
        <p className="text-xs font-mono uppercase tracking-[0.18em] text-ink-3 mb-3">
          Book a call
        </p>
        <Button
          type="button"
          variant="outline"
          size="md"
          className="w-full"
          disabled
        >
          <Calendar size={16} />
          Schedule via Cal.com
          <span className="ml-1 text-[10px] font-mono uppercase tracking-wider text-ink-3">
            (coming soon)
          </span>
        </Button>
      </div>
    </CardShell>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-3">
      <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-surface-2 border border-border">
        <Icon size={16} className="text-accent" />
      </span>
      <div className="min-w-0">
        <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-ink-3">
          {label}
        </p>
        <p className="mt-0.5 text-sm text-ink break-words">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <li>
        <a
          href={href}
          className="block rounded-2xl -mx-2 px-2 py-1 transition hover:bg-surface-2"
        >
          {content}
        </a>
      </li>
    );
  }

  return <li>{content}</li>;
}
