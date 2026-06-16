import type { Metadata } from "next";
import { ServicesHero } from "@/components/services/hero";
import { TracksOverview } from "@/components/services/tracks-overview";
import { ServiceDeepDives } from "@/components/services/service-deep-dives";
import { FEATURES } from "@/lib/features";
import { PricingCalculator } from "@/components/pricing-calculator";
import { EngagementModels } from "@/components/services/engagement-models";
import { ServicesFaq } from "@/components/services/faq";
import { ServicesCta } from "@/components/services/cta";

export const metadata: Metadata = {
  title: "Services",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <TracksOverview />
      <ServiceDeepDives />
      {FEATURES.pricingCalculator ? <PricingCalculator /> : null}
      {FEATURES.engagementModels ? <EngagementModels /> : null}
      <ServicesFaq />
      <ServicesCta />
    </>
  );
}
