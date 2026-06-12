import * as React from "react";
import { cn } from "@/lib/utils";

// BentoGrid — a 12-col CSS grid for assembling bento layouts. Each child
// BentoCell declares its column / row span. On mobile everything collapses
// to a single column.
export function BentoGrid({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-3 md:gap-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

// BentoCell — a single tile. `col` and `row` accept Tailwind utility strings
// (e.g. "lg:col-span-4 lg:row-span-2") so each cell can be shaped freely.
export function BentoCell({
  className,
  col,
  row,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { col?: string; row?: string }) {
  return (
    <div className={cn("relative", col, row, className)} {...props}>
      {children}
    </div>
  );
}
