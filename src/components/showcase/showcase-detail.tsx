import Link from "next/link";
import { ArrowUpRight, CheckCircle2, ExternalLink } from "lucide-react";
import type { ShowcaseProject } from "@/data/showcase";
import { SHOWCASE_PROJECTS } from "@/data/showcase";
import { getProject } from "@/data/projects";
import { accentForRegion, ShowcaseCard } from "@/components/showcase/showcase-card";
import { BrowserFrame } from "@/components/showcase/browser-frame";
import { ButtonLink } from "@/components/ui/button";
import { CardShell, CardGlow } from "@/components/ui/card-shell";
import { Pill } from "@/components/ui/pill";
import { Reveal } from "@/components/ui/reveal";
import { Container, Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";

type ShowcaseDetailProps = {
  project: ShowcaseProject;
};

export function ShowcaseDetail({ project }: ShowcaseDetailProps) {
  const accent = accentForRegion(project.region);
  const related = getProject(project.relatedProjectSlug ?? "");
  const others = SHOWCASE_PROJECTS.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <>
      <Section className="pt-10 md:pt-14 pb-8">
        <Container>
          <Reveal>
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <Pill>{project.region}</Pill>
              <Pill>{project.type}</Pill>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-ink max-w-4xl">
              {project.name}
            </h1>

            <p className="mt-5 text-base md:text-lg text-ink-2 leading-relaxed max-w-3xl">
              {project.summary}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex items-center gap-2 px-5 h-11 rounded-full border border-border bg-surface text-sm font-medium hover:bg-surface-2 transition",
                  accent.text
                )}
              >
                <ExternalLink size={16} />
                Visit live site
              </a>
              {related ? (
                <Link
                  href={`/projects/${related.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm text-ink-2 hover:text-accent transition"
                >
                  Technical project details
                  <ArrowUpRight size={15} />
                </Link>
              ) : null}
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section className="py-6 md:py-10">
        <Container>
          <Reveal>
            <BrowserFrame
              src={project.screenshot}
              alt={`Full page screenshot of ${project.name}`}
              scrollable
              maxHeight={720}
              priority
            />
            <p className="mt-3 text-center text-xs text-ink-3 font-mono uppercase tracking-wider">
              Scroll inside the frame to explore the full page
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section className="py-12 md:py-16 bg-canvas-2/40">
        <Container>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <Reveal>
              <SectionLabel>What we built</SectionLabel>
              <ul className="mt-5 space-y-3">
                {project.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-ink-2">
                    <CheckCircle2 size={18} className={cn("shrink-0 mt-0.5", accent.text)} />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal>
              <SectionLabel>Tech stack</SectionLabel>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-full bg-surface border border-border text-xs font-mono uppercase tracking-wider text-ink-2"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {related ? (
                <CardShell className="mt-8 p-6 relative overflow-hidden">
                  <CardGlow color={accent.glow} />
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-3 mb-2">
                    Related in our portfolio
                  </div>
                  <h3 className="font-display text-xl text-ink">{related.name}</h3>
                  <p className="mt-2 text-sm text-ink-2 line-clamp-2">{related.purpose}</p>
                  <Link
                    href={`/projects/${related.slug}`}
                    className={cn("mt-4 inline-flex items-center gap-1 text-sm transition", accent.text)}
                  >
                    Full project breakdown
                    <ArrowUpRight size={14} />
                  </Link>
                </CardShell>
              ) : null}
            </Reveal>
          </div>
        </Container>
      </Section>

      {others.length > 0 ? (
        <Section className="py-12 md:py-16">
          <Container>
            <Reveal>
              <div className="flex items-end justify-between gap-6 mb-8">
                <div>
                  <SectionLabel>More live work</SectionLabel>
                  <h2 className="mt-3 font-display text-3xl md:text-4xl text-ink">
                    Other shipped projects
                  </h2>
                </div>
                <Link
                  href="/work"
                  className="hidden sm:inline-flex items-center gap-1 text-sm text-ink-2 hover:text-accent transition"
                >
                  All work
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </Reveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {others.map((p) => (
                <Reveal key={p.slug}>
                  <ShowcaseCard project={p} />
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>
      ) : null}

      <Section className="pb-28 md:pb-36">
        <Container>
          <Reveal>
            <CardShell className="rounded-[36px] bg-surface px-8 py-14 md:px-14 md:py-16 text-center relative overflow-hidden">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-20"
                style={{
                  background: `radial-gradient(ellipse 80% 60% at 50% 100%, ${accent.glow}, transparent)`,
                }}
              />
              <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight text-ink">
                  Want something like{" "}
                  <span className={cn("font-serif italic", accent.text)}>{project.name}</span>?
                </h2>
                <p className="mt-4 text-ink-2">
                  Tell us what you&apos;re building — we reply within one business day.
                </p>
                <ButtonLink href="/contact" variant="accent" size="lg" className="mt-8 inline-flex">
                  Start a conversation
                  <ArrowUpRight size={18} />
                </ButtonLink>
              </div>
            </CardShell>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-3">
      <span className="size-1.5 rounded-full bg-accent" />
      {children}
    </div>
  );
}
