import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { TEAM } from "@/lib/content";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { CardShell, CardGlow } from "@/components/ui/card-shell";
import { Reveal, RevealStagger } from "@/components/ui/reveal";

export function TeamTeaser() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="The team"
            title={
              <>
                Four founders.{" "}
                <span className="font-serif italic text-accent">One delivery matrix.</span>
              </>
            }
            description="Corporate IT leadership, senior engineering, data pipelines, and product design — in one Slack channel."
          />
        </Reveal>

        <RevealStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {TEAM.map((member) => (
            <CardShell key={member.initials} interactive className="group p-6 md:p-7">
              <CardGlow />
              <div className="size-16 rounded-2xl bg-accent text-ink-inverse font-display text-2xl flex items-center justify-center mb-5">
                {member.initials}
              </div>
              <h3 className="font-display text-xl text-ink">{member.name}</h3>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-3 mt-1">
                {member.role}
              </p>
              <p className="mt-4 text-sm text-ink-2 leading-relaxed line-clamp-3">
                {member.bio}
              </p>
              <p className="mt-4 text-sm">
                <span className="text-ink-3">Superpower: </span>
                <span className="font-serif italic text-accent">{member.superpower}</span>
              </p>
            </CardShell>
          ))}
        </RevealStagger>

        <Reveal className="mt-10">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-sm text-ink-2 hover:text-accent transition"
          >
            Meet the full team
            <ArrowUpRight size={16} />
          </Link>
        </Reveal>
      </Container>
    </Section>
  );
}
