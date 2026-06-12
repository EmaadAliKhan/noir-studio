import { Container, Section } from "@/components/ui/section";
import { BRAND } from "@/lib/brand";

export const metadata = { title: "Terms" };

export default function TermsPage() {
  return (
    <Section>
      <Container className="max-w-3xl">
        <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-3 mb-4">
          Last updated · {new Date().getFullYear()}
        </div>
        <h1 className="font-display text-5xl tracking-tight mb-8">Terms of service</h1>
        <div className="prose prose-invert text-ink-2 space-y-5 text-base leading-relaxed">
          <p>
            These terms govern your use of the {BRAND.name} website. By browsing the site you
            agree to these terms. Engagement with {BRAND.name} for paid work is governed by a
            separate written agreement (typically a Master Services Agreement plus a
            project-specific Statement of Work).
          </p>
          <p>
            All content on this website, including copy, designs, and case-study materials,
            is the intellectual property of {BRAND.name} unless otherwise credited. You may
            quote brief excerpts with attribution.
          </p>
          <p>
            We strive for accuracy, but the contents of this site are provided &quot;as is&quot;
            without warranty. For specific advice about your project, please contact us at{" "}
            <a className="text-accent hover:underline" href={`mailto:${BRAND.email}`}>{BRAND.email}</a>.
          </p>
        </div>
      </Container>
    </Section>
  );
}
