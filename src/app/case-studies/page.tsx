import type { Metadata } from "next";
import { CaseStudiesPage } from "@/components/case-studies";

export const metadata: Metadata = {
  title: "Case studies",
};

export default function Page() {
  return <CaseStudiesPage />;
}
