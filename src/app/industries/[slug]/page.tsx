import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { INDUSTRIES } from "@/lib/content";
import { FEATURES } from "@/lib/features";
import { IndustryDetail } from "@/components/industries/industry-detail";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return INDUSTRIES.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = INDUSTRIES.find((i) => i.slug === slug);
  if (!industry) return { title: "Industry" };
  return {
    title: industry.name,
    description: industry.summary,
  };
}

export default async function Page({ params }: PageProps) {
  if (!FEATURES.industries) notFound();
  const { slug } = await params;
  const industry = INDUSTRIES.find((i) => i.slug === slug);
  if (!industry) notFound();
  return <IndustryDetail industry={industry} />;
}
