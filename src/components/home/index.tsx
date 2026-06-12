import { HomeHero } from "@/components/home/hero";
import { StatsStrip } from "@/components/home/stats-strip";
import { ServicesGrid } from "@/components/home/services-grid";
import { CapabilitiesBento } from "@/components/home/capabilities-bento";
import { ProcessSection } from "@/components/home/process-section";
import { FeaturedWork } from "@/components/home/featured-work";
import { TeamTeaser } from "@/components/home/team-teaser";
import { Testimonials } from "@/components/home/testimonials";
import { HomeCtaBanner } from "@/components/home/cta-banner";

export function HomePage() {
  return (
    <>
      <HomeHero />
      <StatsStrip />
      <ServicesGrid />
      <CapabilitiesBento />
      <ProcessSection />
      <FeaturedWork />
      <TeamTeaser />
      <Testimonials />
      <HomeCtaBanner />
    </>
  );
}
