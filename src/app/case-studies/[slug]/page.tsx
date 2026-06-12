import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyDetail } from "@/components/case-studies/case-study-detail";
import { CASE_STUDIES, getCaseStudy } from "@/data/case-studies";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return CASE_STUDIES.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    return { title: "Case study" };
  }

  return {
    title: study.title,
    description: study.summary,
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    notFound();
  }

  return <CaseStudyDetail study={study} />;
}
