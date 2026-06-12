import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import type { BlogPost } from "@/data/blog-posts";
import { CardShell, CardGlow } from "@/components/ui/card-shell";
import { Pill } from "@/components/ui/pill";
import { cn } from "@/lib/utils";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

const CATEGORY_GLOW: Record<BlogPost["category"], string> = {
  Engineering: "rgba(110,231,183,0.12)",
  Design: "rgba(217,255,91,0.12)",
  Marketing: "rgba(244,184,96,0.12)",
  Operations: "rgba(200,196,186,0.10)",
  "Case study": "rgba(217,255,91,0.14)",
};

export function PostCard({
  post,
  featured = false,
}: {
  post: BlogPost;
  featured?: boolean;
}) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
      <CardShell
        interactive
        className={cn(
          "relative h-full flex flex-col p-7 md:p-8",
          featured ? "min-h-[360px]" : "min-h-[280px]"
        )}
      >
        <CardGlow color={CATEGORY_GLOW[post.category]} />
        <div className="relative flex flex-col h-full">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <Pill>{post.category}</Pill>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-3">
              {formatDate(post.publishedAt)}
            </span>
          </div>

          <h3
            className={cn(
              "font-display font-medium tracking-tight text-ink leading-snug",
              featured ? "text-2xl md:text-3xl lg:text-4xl" : "text-xl md:text-2xl"
            )}
          >
            {post.title}
          </h3>

          <p className="mt-3 text-ink-2 text-sm md:text-base leading-relaxed flex-1">
            {post.excerpt}
          </p>

          <div className="mt-6 flex items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-ink-3 text-sm">
              <span>{post.author}</span>
              <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider">
                <Clock size={12} />
                {post.readingMinutes} min
              </span>
            </div>
            <span className="inline-flex items-center justify-center size-10 rounded-full border border-border text-ink-2 group-hover:border-accent group-hover:text-accent transition-colors">
              <ArrowUpRight size={16} />
            </span>
          </div>
        </div>
      </CardShell>
    </Link>
  );
}
