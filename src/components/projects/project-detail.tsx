import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";
import { PROJECTS } from "@/data/projects";
import { accentForProject, formatLiveUrl, getEcosystemLabel } from "@/components/projects/utils";
import { ProjectCard } from "@/components/projects/project-card";
import { ButtonLink } from "@/components/ui/button";
import { CardShell, CardGlow } from "@/components/ui/card-shell";
import { Pill } from "@/components/ui/pill";
import { Reveal } from "@/components/ui/reveal";
import { Container, Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";

type ProjectDetailProps = {
  project: Project;
};

export function ProjectDetail({ project }: ProjectDetailProps) {
  const accent = accentForProject(project);
  const ecosystem = getEcosystemLabel(project.ecosystem);
  const related = PROJECTS.filter(
    (p) =>
      p.slug !== project.slug &&
      p.ecosystem === project.ecosystem &&
      project.ecosystem !== null
  ).slice(0, 3);

  return (
    <>
      <Section className="pt-10 md:pt-14 pb-8 md:pb-12">
        <Container>
          <Reveal>
            <CardShell className="rounded-[36px] bg-surface relative overflow-hidden">
              <CardGlow color={accent.glow} />
              <div
                aria-hidden
                className="pointer-events-none absolute -top-24 -right-24 size-[420px] rounded-full opacity-25 blur-3xl"
                style={{
                  background: `radial-gradient(circle, ${accent.glow}, transparent 70%)`,
                }}
              />

              <div className="relative p-8 md:p-12 lg:p-16">
                <div
                  className={cn("absolute left-0 top-10 bottom-10 w-1 rounded-full", accent.bg)}
                  aria-hidden
                />

                <div className="pl-5 md:pl-6 max-w-4xl">
                  <div className="flex flex-wrap items-center gap-2 mb-5">
                    <Pill>{project.region}</Pill>
                    <Pill>{project.type}</Pill>
                    {ecosystem ? <Pill>{ecosystem}</Pill> : null}
                  </div>

                  <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium tracking-[-0.02em] leading-[1.04] text-ink">
                    {project.name}
                  </h1>

                  <p className="mt-6 text-base md:text-lg text-ink-2 leading-relaxed max-w-3xl">
                    {project.purpose}
                  </p>

                  {project.liveUrl ? (
                    <a
                      href={
                        project.liveUrl.startsWith("http")
                          ? project.liveUrl
                          : `https://${project.liveUrl}`
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "mt-6 inline-flex items-center gap-2 text-sm font-mono uppercase tracking-wider transition-colors",
                        accent.text,
                        "hover:opacity-80"
                      )}
                    >
                      <ExternalLink size={14} />
                      {formatLiveUrl(project.liveUrl)}
                    </a>
                  ) : null}
                </div>
              </div>
            </CardShell>
          </Reveal>
        </Container>
      </Section>

      <Section className="py-12 md:py-16">
        <Container>
          <Reveal>
            <SectionLabel>Tech stack</SectionLabel>
            <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {project.techStack.map((entry) => (
                <div
                  key={`${entry.layer}-${entry.technology}`}
                  className="rounded-2xl border border-border bg-surface px-4 py-3"
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-3">
                    {entry.layer}
                  </span>
                  <p className="mt-1 text-sm text-ink-2">{entry.technology}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      {related.length > 0 ? (
        <Section className="bg-canvas-2/40 py-12 md:py-16">
          <Container>
            <Reveal>
              <div className="flex items-end justify-between gap-6 mb-10">
                <div>
                  <SectionLabel>Related work</SectionLabel>
                  <h2 className="mt-3 font-display text-3xl md:text-4xl text-ink">
                    More in {ecosystem}
                  </h2>
                </div>
                <Link
                  href="/projects"
                  className="hidden sm:inline-flex items-center gap-1 text-sm text-ink-2 hover:text-accent transition"
                >
                  All projects
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </Reveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {related.map((p, index) => (
                <Reveal key={p.slug} delay={index * 0.05}>
                  <ProjectCard project={p} />
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>
      ) : null}

      <Section className="pb-28 md:pb-36">
        <Container>
          <Reveal>
            <CardShell className="rounded-[36px] bg-surface px-8 py-16 md:px-16 md:py-24 text-center relative overflow-hidden">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-20"
                style={{
                  background: `radial-gradient(ellipse 80% 60% at 50% 100%, ${accent.glow}, transparent)`,
                }}
              />
              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium tracking-[-0.02em] leading-[1.04] text-ink">
                  Building something like{" "}
                  <span className={cn("font-serif italic", accent.text)}>
                    {project.name}
                  </span>
                  ?
                </h2>
                <p className="mt-6 text-lg text-ink-2">
                  Tell us what you&apos;re building. We&apos;ll reply within one business
                  day with a clear next step.
                </p>
                <ButtonLink
                  href="/contact"
                  variant="accent"
                  size="lg"
                  className="mt-10 inline-flex"
                >
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
