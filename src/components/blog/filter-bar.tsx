"use client";

import { cn } from "@/lib/utils";
import type { BlogPost } from "@/data/blog-posts";

export type BlogCategory = BlogPost["category"] | "All";

const CATEGORIES: BlogCategory[] = [
  "All",
  "Engineering",
  "Design",
  "Marketing",
  "Operations",
  "Case study",
];

export function FilterBar({
  active,
  onChange,
  counts,
}: {
  active: BlogCategory;
  onChange: (category: BlogCategory) => void;
  counts: Record<BlogCategory, number>;
}) {
  return (
    <div
      className="flex flex-wrap gap-2"
      role="tablist"
      aria-label="Filter posts by category"
    >
      {CATEGORIES.map((category) => {
        const selected = active === category;
        return (
          <button
            key={category}
            type="button"
            role="tab"
            aria-selected={selected}
            onClick={() => onChange(category)}
            className={cn(
              "inline-flex items-center gap-2 h-9 px-4 rounded-full border font-mono text-[10.5px] uppercase tracking-[0.16em] transition-all duration-200",
              selected
                ? "bg-accent text-ink-inverse border-accent"
                : "bg-surface text-ink-2 border-border hover:border-border-strong hover:text-ink"
            )}
          >
            {category}
            <span
              className={cn(
                "tabular-nums",
                selected ? "text-ink-inverse/70" : "text-ink-3"
              )}
            >
              {counts[category]}
            </span>
          </button>
        );
      })}
    </div>
  );
}
