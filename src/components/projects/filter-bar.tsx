"use client";

import * as React from "react";
import type { Project } from "@/data/projects";
import { uniqueSorted } from "@/components/projects/utils";
import { ProjectCard } from "@/components/projects/project-card";
import { BentoCell, BentoGrid } from "@/components/ui/bento";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

const ALL = "All";

type FilterBarProps = {
  regions: string[];
  types: string[];
  region: string;
  type: string;
  onRegionChange: (value: string) => void;
  onTypeChange: (value: string) => void;
  resultCount: number;
};

function FilterBar({
  regions,
  types,
  region,
  type,
  onRegionChange,
  onTypeChange,
  resultCount,
}: FilterBarProps) {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div className="space-y-4">
          <FilterGroup
            label="Region"
            values={[ALL, ...regions]}
            active={region}
            onChange={onRegionChange}
          />
          <FilterGroup
            label="Type"
            values={[ALL, ...types]}
            active={type}
            onChange={onTypeChange}
          />
        </div>

        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-3">
          {resultCount} {resultCount === 1 ? "project" : "projects"}
        </p>
      </div>
    </div>
  );
}

function FilterGroup({
  label,
  values,
  active,
  onChange,
}: {
  label: string;
  values: string[];
  active: string;
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-3 mb-2">
        {label}
      </p>
      <div className="flex flex-wrap gap-2">
        {values.map((value) => {
          const selected = active === value;
          return (
            <button
              key={value}
              type="button"
              onClick={() => onChange(value)}
              className={cn(
                "inline-flex h-9 items-center rounded-full border px-4",
                "font-mono text-[10.5px] uppercase tracking-[0.14em] transition-all duration-200",
                selected
                  ? "border-accent/50 bg-accent/10 text-accent"
                  : "border-border bg-surface text-ink-2 hover:border-border-strong hover:text-ink"
              )}
            >
              {value}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function filterProjects(
  projects: Project[],
  region: string,
  type: string
): Project[] {
  return projects.filter((project) => {
    const regionMatch = region === ALL || project.region === region;
    const typeMatch = type === ALL || project.type === type;
    return regionMatch && typeMatch;
  });
}

export function ProjectsCatalog({ projects }: { projects: Project[] }) {
  const regions = React.useMemo(
    () => uniqueSorted(projects, (p) => p.region),
    [projects]
  );
  const types = React.useMemo(
    () => uniqueSorted(projects, (p) => p.type),
    [projects]
  );

  const [region, setRegion] = React.useState(ALL);
  const [type, setType] = React.useState(ALL);

  const filtered = React.useMemo(
    () => filterProjects(projects, region, type),
    [projects, region, type]
  );

  const showBento = region === ALL && type === ALL && filtered.length >= 3;

  return (
    <div id="catalog" className="space-y-10 scroll-mt-28">
      <FilterBar
        regions={regions}
        types={types}
        region={region}
        type={type}
        onRegionChange={setRegion}
        onTypeChange={setType}
        resultCount={filtered.length}
      />

      {filtered.length === 0 ? (
        <div className="rounded-[28px] border border-border bg-surface px-8 py-16 text-center">
          <p className="font-display text-2xl text-ink">No projects match those filters.</p>
          <p className="mt-3 text-ink-2">Try clearing a filter to see more work.</p>
        </div>
      ) : showBento ? (
        <BentoGrid>
          <BentoCell col="lg:col-span-7 md:col-span-6">
            <Reveal>
              <ProjectCard project={filtered[0]!} large />
            </Reveal>
          </BentoCell>

          <BentoCell col="lg:col-span-5 md:col-span-6">
            <div className="flex h-full flex-col gap-4">
              {filtered.slice(1, 3).map((study, index) => (
                <Reveal key={study.slug} delay={index * 0.05} className="flex-1">
                  <ProjectCard project={study} />
                </Reveal>
              ))}
            </div>
          </BentoCell>

          {filtered.slice(3).map((study, index) => (
            <BentoCell key={study.slug} col="lg:col-span-4 md:col-span-3">
              <Reveal delay={index * 0.04}>
                <ProjectCard project={study} />
              </Reveal>
            </BentoCell>
          ))}
        </BentoGrid>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((study, index) => (
            <Reveal key={study.slug} delay={index * 0.04}>
              <ProjectCard project={study} />
            </Reveal>
          ))}
        </div>
      )}
    </div>
  );
}
