import Image from "next/image";
import { cn } from "@/lib/utils";

type BrowserFrameProps = {
  src: string;
  alt: string;
  /** Fixed height with internal scroll — good for detail pages */
  scrollable?: boolean;
  /** Max height when scrollable (px) */
  maxHeight?: number;
  className?: string;
  priority?: boolean;
};

export function BrowserFrame({
  src,
  alt,
  scrollable = false,
  maxHeight = 640,
  className,
  priority = false,
}: BrowserFrameProps) {
  return (
    <div
      className={cn(
        "rounded-2xl md:rounded-3xl border border-border bg-surface-2 overflow-hidden shadow-[0_24px_80px_-24px_rgba(0,0,0,0.65)]",
        className
      )}
    >
      {/* Chrome bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-surface">
        <span className="size-2.5 rounded-full bg-red-400/80" />
        <span className="size-2.5 rounded-full bg-amber-300/80" />
        <span className="size-2.5 rounded-full bg-accent/80" />
        <div className="ml-3 flex-1 h-7 rounded-lg bg-canvas-2/80 border border-border" />
      </div>

      {scrollable ? (
        <div
          className="overflow-y-auto overflow-x-hidden scrollbar-none bg-canvas-2/40"
          style={{ maxHeight }}
        >
          <Image
            src={src}
            alt={alt}
            width={1440}
            height={4000}
            priority={priority}
            className="w-full h-auto block"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 960px"
          />
        </div>
      ) : (
        <div className="relative aspect-[16/10] overflow-hidden bg-canvas-2/40">
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 480px"
          />
        </div>
      )}
    </div>
  );
}
