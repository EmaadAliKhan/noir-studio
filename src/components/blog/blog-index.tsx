"use client";

import * as React from "react";
import { BLOG_POSTS, type BlogPost } from "@/data/blog-posts";
import { FilterBar, type BlogCategory } from "@/components/blog/filter-bar";
import { PostCard } from "@/components/blog/post-card";
import { CardShell } from "@/components/ui/card-shell";
import { Eyebrow } from "@/components/ui/pill";
import { Reveal, RevealStagger } from "@/components/ui/reveal";
import { Container, Section } from "@/components/ui/section";
import { FEATURES } from "@/lib/features";
import { NewsletterForm } from "@/components/site/newsletter-form";

function visiblePosts(): BlogPost[] {
  if (FEATURES.showPricing) return BLOG_POSTS;
  return BLOG_POSTS.filter(
    (p) => !p.tags.includes("Pricing") && p.slug !== "fixed-price-vs-time-and-materials"
  );
}

function buildCounts(posts: BlogPost[]): Record<BlogCategory, number> {
  const counts: Record<BlogCategory, number> = {
    All: posts.length,
    Engineering: 0,
    Design: 0,
    Marketing: 0,
    Operations: 0,
    "Case study": 0,
  };

  for (const post of posts) {
    counts[post.category] += 1;
  }

  return counts;
}

export function BlogIndex() {
  const [active, setActive] = React.useState<BlogCategory>("All");
  const posts = React.useMemo(() => visiblePosts(), []);
  const [featured, ...rest] = posts;
  const counts = React.useMemo(() => buildCounts(posts), [posts]);

  const filtered =
    active === "All"
      ? rest
      : rest.filter((post) => post.category === active);

  return (
    <>
      <Section className="pt-10 md:pt-14 pb-12 md:pb-16">
        <Container>
          <Reveal>
            <CardShell className="rounded-[36px] relative overflow-hidden p-8 md:p-12 lg:p-16 mb-12 md:mb-16">
              <div
                aria-hidden
                className="pointer-events-none absolute -top-32 -right-32 size-[480px] rounded-full opacity-30 blur-3xl"
                style={{
                  background:
                    "radial-gradient(circle, rgba(217,255,91,0.35), transparent 70%)",
                }}
              />
              <Eyebrow className="mb-6">Journal</Eyebrow>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium tracking-[-0.02em] leading-[1.02] text-ink max-w-4xl">
                Notes on{" "}
                <span className="font-serif italic text-accent">building</span>{" "}
                at agency speed.
              </h1>
              <p className="mt-6 md:mt-8 text-base md:text-lg text-ink-2 leading-relaxed max-w-2xl">
                Essays on engineering, design, marketing, and operations from
                the team shipping MVPs in five weeks.
              </p>
            </CardShell>
          </Reveal>

          {featured ? (
            <Reveal className="mb-12 md:mb-16">
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-3 mb-4">
                Featured
              </div>
              <PostCard post={featured} featured />
            </Reveal>
          ) : null}

          <Reveal className="mb-8">
            <FilterBar active={active} onChange={setActive} counts={counts} />
          </Reveal>

          {filtered.length > 0 ? (
            <RevealStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filtered.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </RevealStagger>
          ) : (
            <Reveal>
              <CardShell className="p-10 text-center">
                <p className="text-ink-2">No posts in this category yet.</p>
              </CardShell>
            </Reveal>
          )}
        </Container>
      </Section>

      {FEATURES.newsletter ? (
        <Section className="bg-canvas-2/40 border-t border-border pb-20 md:pb-28">
          <Container>
            <Reveal>
              <CardShell className="rounded-[36px] p-8 md:p-12 lg:p-16 relative overflow-hidden">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -bottom-24 -left-24 size-[360px] rounded-full opacity-20 blur-3xl"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(110,231,183,0.4), transparent 70%)",
                  }}
                />
                <div className="relative grid md:grid-cols-[1.2fr_1fr] gap-8 md:gap-12 items-end">
                  <div>
                    <Eyebrow className="mb-4">Newsletter</Eyebrow>
                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-ink">
                      New essays,{" "}
                      <span className="font-serif italic text-accent-2">
                        no fluff.
                      </span>
                    </h2>
                    <p className="mt-4 text-ink-2 leading-relaxed max-w-md">
                      Occasional notes on shipping faster and building products
                      that survive handoff.
                    </p>
                  </div>
                  <div className="pb-2">
                    <NewsletterForm />
                  </div>
                </div>
              </CardShell>
            </Reveal>
          </Container>
        </Section>
      ) : null}
    </>
  );
}
