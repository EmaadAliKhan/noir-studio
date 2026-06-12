"use client";

import * as React from "react";
import type { CaseStudy } from "@/data/case-studies";
import { uniqueSorted } from "@/components/case-studies/utils";
import { StudyCard } from "@/components/case-studies/study-card";
import { BentoCell, BentoGrid } from "@/components/ui/bento";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

const ALL = "All";

type FilterBarProps = {
  categories: string[];
  industries: string[];
  category: string;
  industry: string;
  onCategoryChange: (value: string) => void;
  onIndustryChange: (value: string) => void;
  resultCount: number;
};

export function FilterBar({
  categories,
  industries,
  category,
  industry,
  onCategoryChange,
  onIndustryChange,
  resultCount,
}: FilterBarProps) {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div className="space-y-4">
          <FilterGroup
            label="Category"
            values={[ALL, ...categories]}
            active={category}
            onChange={onCategoryChange}
          />
          <FilterGroup
            label="Industry"
            values={[ALL, ...industries]}
            active={industry}
            onChange={onIndustryChange}
          />
        </div>

        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-3">
          {resultCount} {resultCount === 1 ? "study" : "studies"}
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

function filterStudies(
  studies: CaseStudy[],
  category: string,
  industry: string
): CaseStudy[] {
  return studies.filter((study) => {
    const categoryMatch = category === ALL || study.category === category;
    const industryMatch = industry === ALL || study.industry === industry;
    return categoryMatch && industryMatch;
  });
}

export function CaseStudiesCatalog({ studies }: { studies: CaseStudy[] }) {
  const categories = React.useMemo(
    () => uniqueSorted(studies, (study) => study.category),
    [studies]
  );
  const industries = React.useMemo(
    () => uniqueSorted(studies, (study) => study.industry),
    [studies]
  );

  const [category, setCategory] = React.useState(ALL);
  const [industry, setIndustry] = React.useState(ALL);

  const filtered = React.useMemo(
    () => filterStudies(studies, category, industry),
    [studies, category, industry]
  );

  const showBento = category === ALL && industry === ALL && filtered.length >= 3;

  return (
    <div className="space-y-10">
      <FilterBar
        categories={categories}
        industries={industries}
        category={category}
        industry={industry}
        onCategoryChange={setCategory}
        onIndustryChange={setIndustry}
        resultCount={filtered.length}
      />

      {filtered.length === 0 ? (
        <div className="rounded-[28px] border border-border bg-surface px-8 py-16 text-center">
          <p className="font-display text-2xl text-ink">No studies match those filters.</p>
          <p className="mt-3 text-ink-2">Try clearing a filter to see more work.</p>
        </div>
      ) : showBento ? (
        <BentoGrid>
          <BentoCell col="lg:col-span-7 md:col-span-6">
            <Reveal>
              <StudyCard study={filtered[0]!} large />
            </Reveal>
          </BentoCell>

          <BentoCell col="lg:col-span-5 md:col-span-6">
            <div className="flex h-full flex-col gap-4">
              {filtered.slice(1, 3).map((study, index) => (
                <Reveal key={study.slug} delay={index * 0.05} className="flex-1">
                  <StudyCard study={study} />
                </Reveal>
              ))}
            </div>
          </BentoCell>

          {filtered.slice(3).map((study, index) => (
            <BentoCell key={study.slug} col="lg:col-span-4 md:col-span-3">
              <Reveal delay={index * 0.04}>
                <StudyCard study={study} />
              </Reveal>
            </BentoCell>
          ))}
        </BentoGrid>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((study, index) => (
            <Reveal key={study.slug} delay={index * 0.04}>
              <StudyCard study={study} />
            </Reveal>
          ))}
        </div>
      )}
    </div>
  );
}
