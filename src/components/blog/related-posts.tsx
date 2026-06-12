import { BLOG_POSTS, type BlogPost } from "@/data/blog-posts";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { Reveal, RevealStagger } from "@/components/ui/reveal";
import { PostCard } from "@/components/blog/post-card";

export function RelatedPosts({ post }: { post: BlogPost }) {
  const related = BLOG_POSTS.filter(
    (p) => p.slug !== post.slug && p.category === post.category
  ).slice(0, 3);

  if (related.length === 0) return null;

  return (
    <Section className="bg-canvas-2/40 border-t border-border">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Keep reading"
            title={
              <>
                More from{" "}
                <span className="font-serif italic text-ink-2">
                  {post.category.toLowerCase()}.
                </span>
              </>
            }
          />
        </Reveal>

        <RevealStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {related.map((item) => (
            <PostCard key={item.slug} post={item} />
          ))}
        </RevealStagger>
      </Container>
    </Section>
  );
}
