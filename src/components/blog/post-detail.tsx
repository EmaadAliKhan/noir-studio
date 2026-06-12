import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";
import type { BlogPost } from "@/data/blog-posts";
import { BodyRenderer } from "@/components/blog/body-renderer";
import { RelatedPosts } from "@/components/blog/related-posts";
import { CardShell } from "@/components/ui/card-shell";
import { Pill } from "@/components/ui/pill";
import { Reveal } from "@/components/ui/reveal";
import { Container, Section } from "@/components/ui/section";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function PostDetail({ post }: { post: BlogPost }) {
  return (
    <>
      <Section className="pt-10 md:pt-14 pb-12 md:pb-16">
        <Container className="max-w-3xl">
          <Reveal>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-3 hover:text-ink transition-colors mb-8"
            >
              <ArrowLeft size={14} />
              Journal
            </Link>
          </Reveal>

          <Reveal delay={0.05}>
            <article>
              <header className="mb-10 md:mb-12">
                <div className="flex flex-wrap items-center gap-2 mb-5">
                  <Pill>{post.category}</Pill>
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-3">
                    {formatDate(post.publishedAt)}
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-3">
                    <Clock size={12} />
                    {post.readingMinutes} min read
                  </span>
                </div>

                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium tracking-[-0.02em] leading-[1.04] text-ink">
                  {post.title}
                </h1>

                <p className="mt-6 text-lg md:text-xl text-ink-2 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <span className="text-sm text-ink-3">By {post.author}</span>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-3 px-2.5 py-1 rounded-full border border-border bg-surface"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </header>

              <CardShell className="p-8 md:p-10 lg:p-12">
                <BodyRenderer body={post.body} />
              </CardShell>
            </article>
          </Reveal>
        </Container>
      </Section>

      <RelatedPosts post={post} />
    </>
  );
}
