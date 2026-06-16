import type { Metadata } from "next";
import { ProjectsPage } from "@/components/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Complete portfolio registry — 13 applications across Saudi Arabia, Egypt, and global deployments.",
};

export default function Page() {
  return <ProjectsPage />;
}
