import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FEATURES } from "@/lib/features";
import { IndustriesPage } from "@/components/industries";

export const metadata: Metadata = { title: "Industries" };

export default function Page() {
  if (!FEATURES.industries) notFound();
  return <IndustriesPage />;
}
