import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ShowcaseDetail } from "@/components/showcase/showcase-detail";
import { SHOWCASE_PROJECTS, getShowcaseProject } from "@/data/showcase";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return SHOWCASE_PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getShowcaseProject(slug);
  if (!project) return { title: "Work" };

  return {
    title: project.name,
    description: project.summary,
    openGraph: {
      images: [{ url: project.screenshot, alt: `${project.name} website screenshot` }],
    },
  };
}

export default async function WorkDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getShowcaseProject(slug);

  if (!project) {
    notFound();
  }

  return <ShowcaseDetail project={project} />;
}
