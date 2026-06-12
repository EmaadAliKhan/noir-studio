import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { TRACKS } from "@/components/services/data";
import { Container, Section } from "@/components/ui/section";
import { CardShell, CardGlow } from "@/components/ui/card-shell";
import { RevealStagger } from "@/components/ui/reveal";

export function TracksOverview() {
  return (
    <Section id="tracks">
      <Container>
        <RevealStagger className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {TRACKS.map((track) => {
            const Icon = track.icon;
            return (
              <Link key={track.id} href={`#${track.id}`} className="group block">
                <CardShell interactive className="h-full p-7 md:p-8">
                  <CardGlow />
                  <div className={`inline-flex size-12 items-center justify-center rounded-2xl bg-surface-2 ${track.accent}`}>
                    <Icon size={22} />
                  </div>
                  <div className="mt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-3">
                    {track.label}
                  </div>
                  <h2 className="mt-2 font-display text-2xl text-ink">{track.title}</h2>
                  <p className="mt-3 text-sm text-ink-2 leading-relaxed">{track.description}</p>
                  <span className="mt-6 inline-flex items-center gap-1 text-sm text-ink-3 group-hover:text-accent transition">
                    Explore track
                    <ArrowUpRight size={14} />
                  </span>
                </CardShell>
              </Link>
            );
          })}
        </RevealStagger>
      </Container>
    </Section>
  );
}
