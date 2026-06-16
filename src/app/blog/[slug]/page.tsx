import { notFound } from "next/navigation";
import { BLOG_POSTS, getBlogPost } from "@/data/blog-posts";
import { FEATURES } from "@/lib/features";
import { PostDetail } from "@/components/blog/post-detail";

function isPricingPost(slug: string): boolean {
  const post = getBlogPost(slug);
  return Boolean(
    post &&
      (post.tags.includes("Pricing") || post.slug === "fixed-price-vs-time-and-materials")
  );
}

export function generateStaticParams() {
  const posts = FEATURES.showPricing
    ? BLOG_POSTS
    : BLOG_POSTS.filter((p) => !p.tags.includes("Pricing"));
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!FEATURES.showPricing && isPricingPost(slug)) notFound();
  const post = getBlogPost(slug);
  if (!post) notFound();
  return <PostDetail post={post} />;
}
