import { Container, Section } from "@/components/ui/section";
import { BRAND } from "@/lib/brand";

export const metadata = { title: "Privacy" };

export default function PrivacyPage() {
  return (
    <Section>
      <Container className="max-w-3xl">
        <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-3 mb-4">
          Last updated · {new Date().getFullYear()}
        </div>
        <h1 className="font-display text-5xl tracking-tight mb-8">Privacy policy</h1>
        <div className="prose prose-invert text-ink-2 space-y-5 text-base leading-relaxed">
          <p>
            {BRAND.name} (&quot;we&quot;, &quot;us&quot;) collects only the information you
            explicitly provide through our contact forms and newsletter signup. We
            never sell your data and we never share it with third parties without
            your explicit consent.
          </p>
          <p>
            <strong>What we collect:</strong> name, work email, company, phone (optional),
            and the details of your enquiry. Submissions are stored in our Postgres
            database hosted on Neon (EU region).
          </p>
          <p>
            <strong>How we use it:</strong> to respond to your enquiry and, if you opt in,
            to send occasional updates about our work.
          </p>
          <p>
            <strong>Your rights:</strong> you can request deletion of your data at any time
            by emailing <a className="text-accent hover:underline" href={`mailto:${BRAND.email}`}>{BRAND.email}</a>.
          </p>
          <p>
            Cookies: we use first-party analytics to understand which pages perform.
            No personal information is captured by these analytics.
          </p>
        </div>
      </Container>
    </Section>
  );
}
