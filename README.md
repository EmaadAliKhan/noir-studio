# AASIM — agency website

A striking, dark-mode, bento-grid marketing site for **AASIM** — a hybrid technology + marketing agency based in Hyderabad. Built with Next.js 16 (App Router), React 19, Tailwind v4, Framer Motion, and Neon Postgres.

> Built end-to-end with parallel Cursor agents on top of a shared design system. See [`/docs/deep-research.md`](./docs/deep-research.md) for the strategic blueprint behind the copy.

---

## Stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js 16 (App Router, Turbopack) |
| Language | TypeScript (strict) |
| UI | React 19 + Tailwind CSS v4 |
| Motion | Framer Motion |
| Icons | Lucide |
| Forms | React Hook Form + Zod |
| Database | Postgres on Neon (HTTP driver) |
| ORM | Drizzle |
| Hosting | Vercel |
| Package manager | pnpm |

---

## Project structure

```
src/
├── app/
│   ├── layout.tsx            # root layout, fonts, header, footer, custom cursor
│   ├── page.tsx              # home
│   ├── services/             # services + pricing calculator
│   ├── industries/           # industry index + dynamic [slug] briefs
│   ├── case-studies/         # case study index + dynamic [slug] details
│   ├── about/                # team, story, process
│   ├── blog/                 # blog index + dynamic [slug] essays
│   ├── contact/              # multi-step qualification funnel
│   ├── privacy/              # privacy stub
│   ├── terms/                # terms stub
│   └── api/                  # leads, pricing, newsletter endpoints
├── components/
│   ├── site/                 # header, footer, logo, cursor, newsletter
│   ├── ui/                   # design-system primitives (Button, Pill, CardShell, BentoGrid, etc.)
│   ├── home/                 # home-page sections
│   ├── services/             # services-page sections
│   ├── pricing-calculator/   # interactive estimator
│   ├── industries/           # industry pages
│   ├── case-studies/         # case-study pages
│   ├── about/                # about pages
│   ├── contact/              # contact funnel
│   └── blog/                 # blog pages
├── data/
│   ├── case-studies.ts       # case-study fixtures
│   └── blog-posts.ts         # blog post fixtures
└── lib/
    ├── brand.ts              # BRAND identity (name, tagline, socials) — edit me first
    ├── content.ts            # site copy + services / industries / team / process / FAQ
    ├── fonts.ts              # Geist + Space Grotesk + Instrument Serif
    ├── utils.ts              # cn() helper
    ├── db.ts                 # Neon HTTP client + Drizzle
    └── schema.ts             # leads, newsletter_subscribers, pricing_calculations
```

---

## Local development

```bash
pnpm install
cp .env.example .env.local      # then fill in DATABASE_URL
pnpm dev
```

Open <http://localhost:3000>.

### Without a database

You can run the entire site without configuring `DATABASE_URL`. The lead, newsletter, and pricing API routes will short-circuit to a "dry run" success response, so the contact funnel and newsletter form render and behave correctly in dev. **All copy, design, and pages render fully without a DB.**

---

## Database — Neon Postgres

We host Postgres on [Neon](https://neon.tech). The driver is `@neondatabase/serverless` (HTTP), perfect for Vercel serverless functions.

### 1) Create the database

1. Sign up at <https://console.neon.tech>.
2. Create a new project. Pick a region close to your users (we use `aws-eu-west-1`).
3. From the Neon dashboard, copy the **pooled connection string** (format `postgres://user:pass@ep-…-pooler.region.aws.neon.tech/dbname?sslmode=require`).
4. Paste it into `.env.local` as `DATABASE_URL`.

### 2) Push the schema

```bash
pnpm db:push      # creates leads / newsletter_subscribers / pricing_calculations
pnpm db:studio    # optional — opens Drizzle Studio at https://local.drizzle.studio
```

The schema lives in `src/lib/schema.ts`. To evolve it:

```bash
# Edit src/lib/schema.ts
pnpm db:generate  # creates a versioned migration in ./drizzle
pnpm db:push      # applies it to Neon
```

---

## Deployment — Vercel

### 1) Push to GitHub

```bash
git init -b main
git remote add origin git@github.com:your-org/aasim-site.git
git push -u origin main
```

### 2) Import into Vercel

1. Go to <https://vercel.com/new>, import the GitHub repo.
2. Framework preset: **Next.js** (auto-detected).
3. Build command: `pnpm build`. Install command: `pnpm install`. Output: default.
4. **Add Environment Variables** (Project Settings → Environment Variables):
   - `DATABASE_URL` — your Neon pooled connection string (Production + Preview + Development)
   - `NEXT_PUBLIC_SITE_URL` — `https://aasim.studio` (or your custom domain)
5. Deploy.

> Vercel automatically uses the Neon serverless driver over HTTP, so cold starts are fast and you don't need a separate connection pooler.

### 3) Custom domain

1. Vercel project → Settings → Domains → Add `aasim.studio` (or your domain).
2. In your registrar, point an `A` record to `76.76.21.21` (Vercel) or `CNAME` to `cname.vercel-dns.com`.
3. Vercel issues a free TLS cert in ~30 seconds.

---

## Rebranding

Everything brand-related lives in **one file**: `src/lib/brand.ts`. Change `name`, `tagline`, `email`, `phone`, `socials`, and the site updates everywhere.

Copy for services, industries, team, process, FAQ, testimonials, hero pills, and trust logos lives in `src/lib/content.ts`. Edit there to update marketing language without touching components.

Case-study fixtures: `src/data/case-studies.ts`. Blog posts: `src/data/blog-posts.ts`.

---

## Design system

Tokens live in `src/app/globals.css` under `:root` and are exposed to Tailwind via `@theme inline`. The full palette:

| Token | Value |
| --- | --- |
| `bg-canvas` | `#0e2522` (deep teal page) |
| `bg-canvas-2` | `#0a1c1a` (footer) |
| `bg-surface` | `#0a0f0e` (inset card) |
| `bg-surface-2` | `#111817` (input/hover) |
| `text-ink` | `#f5f3ee` (warm bone) |
| `text-ink-2` | `#c8c4ba` |
| `text-ink-3` | `#8a8a82` |
| `bg-accent` | `#d9ff5b` (electric lime) |
| `bg-accent-2` | `#6ee7b7` (mint) |
| `bg-accent-3` | `#f4b860` (amber) |

Typography: **Space Grotesk** for display, **Geist Sans** for UI, **Instrument Serif** for italic accents, **Geist Mono** for eyebrows and numerics.

---

## Scripts

| Command | Purpose |
| --- | --- |
| `pnpm dev` | Run the Next dev server (Turbopack). |
| `pnpm build` | Production build. |
| `pnpm start` | Run the production build locally. |
| `pnpm lint` | ESLint (Next core-web-vitals + TS config). |
| `pnpm typecheck` | `tsc --noEmit` for a strict type pass. |
| `pnpm db:push` | Sync schema to Neon. |
| `pnpm db:generate` | Generate a new migration file. |
| `pnpm db:studio` | Open Drizzle Studio. |

---

## Credits

Designed and built by the AASIM team in Hyderabad. Direction: see `/docs/deep-research.md`. Visual reference: dark agency aesthetic from Vercel, Linear, Framer, and the [qwy.studio](https://qwy.studio)-style bento card.
