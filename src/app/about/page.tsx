import type { Metadata } from "next";
import { AboutHero } from "@/components/about/hero";
import { AboutStats } from "@/components/about/stats-strip";
import { AboutStory } from "@/components/about/story";
import { TeamGrid } from "@/components/about/team-grid";
import { ProcessTimeline } from "@/components/about/process-timeline";
import { StackSection } from "@/components/about/stack-section";
import { AboutValues } from "@/components/about/values";
import { AboutCta } from "@/components/about/cta";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStats />
      <AboutStory />
      <TeamGrid />
      <ProcessTimeline />
      <StackSection />
      <AboutValues />
      <AboutCta />
    </>
  );
}
