// Blog post fixtures. Subagents render these on /blog and /blog/[slug].
// Bodies are markdown-ish plain text rendered via a tiny formatter in the
// post template — keeps things dependency-free for now.

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category:
    | "Engineering"
    | "Design"
    | "Marketing"
    | "Operations"
    | "Case study";
  readingMinutes: number;
  publishedAt: string;
  author: string;
  tags: string[];
  body: string;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "ship-an-mvp-in-five-weeks",
    title: "How we ship production MVPs in five weeks (without cutting corners).",
    excerpt:
      "AI-assisted coding compresses the build, but the real gains come from a brutally tight PRD and an honest definition of done.",
    category: "Engineering",
    readingMinutes: 7,
    publishedAt: "2026-05-22",
    author: "Lead Architect",
    tags: ["MVP", "Process", "AI", "Cursor"],
    body: `Most agencies still bill on time and materials, which means every extra week is revenue. We scope upfront, which means every extra week is loss. That single incentive flip rewires the whole process.

## Discovery is a deliverable, not a sales call
Before we write code, we ship a Product Requirements Document — objectives, user stories, scope, and an explicit "out of scope" list. The client signs off. Then the scope and timeline are locked.

## AI agents are interns with photographic memory
We run Cursor + Claude Code agents in parallel on isolated branches. They generate boring code at superhuman speed. A senior engineer reviews every PR. Speed × judgement = production quality.

## Definition of done is non-negotiable
Tests pass, types are tight, errors are tracked, the dashboard is wired up. "Working on my machine" is not done.

Five weeks isn't magic. It's a tight PRD, the right tools, and a senior pair of eyes on every commit.`,
  },
  {
    slug: "design-systems-that-survive-handoff",
    title: "Design systems that survive the engineering handoff.",
    excerpt:
      "Beautiful Figma files often die at the dev handoff. Here's how we keep design intent intact all the way to production.",
    category: "Design",
    readingMinutes: 6,
    publishedAt: "2026-05-08",
    author: "Head of Design",
    tags: ["Design systems", "Figma", "Handoff"],
    body: `The hand-off graveyard is full of beautiful Figma files. The reason is rarely the engineer. It's the design system.

## Tokens, not pixels
Engineers ship reliably from tokens — colours, spacing, radii, typography — not from pixel-accurate measurements. Build the token table first; build screens second.

## Components, not screens
A 60-screen Figma file with no components is unmaintainable. We design five well-named components and compose 60 screens from them.

## Loom over Slack
A 90-second walkthrough video answers questions a paragraph in Slack cannot.

The result: pixel-perfect handoff with no babysitting required.`,
  },
  {
    slug: "instagram-funnels-for-b2b",
    title: "Instagram funnels actually work for B2B (here's the playbook).",
    excerpt:
      "Most B2B teams ignore Instagram. The ones who don't are quietly building the cheapest qualified-lead engine in the market.",
    category: "Marketing",
    readingMinutes: 5,
    publishedAt: "2026-04-29",
    author: "Head of Design",
    tags: ["Marketing", "Instagram", "B2B"],
    body: `"Instagram is for D2C." That belief is now wrong, and it's wrong in a useful way: if your competitors believe it, you have a wide-open channel.

## Founders are on Instagram
Founders, marketing leads, and IT directors all scroll Instagram. They just don't admit it. Meet them where they actually are.

## Demonstration beats explanation
A 12-second time-lapse of a Figma file becoming a real product converts harder than any explainer carousel.

## Comment → DM → call
Optimise for DMs, not clicks. Treat the DM as the funnel.

Three months of consistent posting will beat the average cold-email campaign.`,
  },
  {
    slug: "co-managed-it-the-quiet-msr",
    title: "Co-managed IT: the quietest source of monthly recurring revenue.",
    excerpt:
      "Software is loud and lumpy. Co-managed IT is quiet and predictable. Together they're the strongest agency revenue mix we've seen.",
    category: "Operations",
    readingMinutes: 6,
    publishedAt: "2026-04-15",
    author: "Managing Partner",
    tags: ["Operations", "MRR", "IT"],
    body: `Most agency owners think in projects. Some think in retainers. Almost none think in co-managed IT.

## The market is real
Mid-sized firms in financial services, legal, and creative all need real IT, but can't justify a full-time senior platform engineer. They want a partner — not a help-desk vendor.

## The work compounds
Once you're on the inside, you see every system. Software projects follow naturally.

## The margins are excellent
A small, senior team can co-manage IT for several clients on a single rotation. The margin profile is closer to a software business than a services one.`,
  },
  {
    slug: "private-llms-for-regulated-industries",
    title: "Private LLMs for regulated industries: the practical version.",
    excerpt:
      "You don't need a research lab to run an LLM behind your firewall. You need a good prompt library, a vector store, and discipline.",
    category: "Engineering",
    readingMinutes: 8,
    publishedAt: "2026-03-28",
    author: "Lead Architect",
    tags: ["AI", "Security", "RAG"],
    body: `Regulated industries — finance, healthcare, legal — can't send sensitive data to public LLM APIs. They can, however, run an LLM on their own infrastructure.

## Start with retrieval, not fine-tuning
A well-built RAG pipeline beats a poorly fine-tuned model 9 times out of 10.

## Keep the prompt library in version control
Prompts are code. Treat them like it.

## Logs are the audit trail
Log every model call with the prompt, response, and source documents. This is non-negotiable for compliance.

It's less glamorous than fine-tuning your own model. It works better.`,
  },
  {
    slug: "fixed-price-vs-time-and-materials",
    title: "Why we walked away from time-and-materials billing.",
    excerpt:
      "T&M billing pays you to be slow. Fixed-price plus AI tooling lets you charge more for shipping faster. The maths is not subtle.",
    category: "Operations",
    readingMinutes: 5,
    publishedAt: "2026-03-10",
    author: "Managing Partner",
    tags: ["Pricing", "Strategy"],
    body: `If you bill hourly, you're penalised every time you find a faster way. That's not a business — that's a treadmill.

## Fixed price aligns incentives
The client knows the cost. We know the budget. Speed becomes a margin lever, not a revenue cut.

## AI tooling makes fixed price viable
Cursor + Claude let us ship 3–5× faster than legacy shops. At fixed price, that's pure margin.

## The PRD is your insurance
Without a tight PRD, fixed price is suicidal. With one, it's an unfair advantage.`,
  },
];

export function getBlogPost(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
