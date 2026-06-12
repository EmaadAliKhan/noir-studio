import {
  integer,
  jsonb,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

// `leads` stores every inbound enquiry from the multi-step contact funnel
// and the pricing calculator. Designed to be append-only — we never UPDATE
// these rows after insert, so audit/reporting stays simple.
export const leads = pgTable("leads", {
  id: serial("id").primaryKey(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  // Funnel step: which CTA the user came from (contact-form, calculator, etc).
  source: varchar("source", { length: 64 }).notNull(),
  // Optional structured fields — kept nullable so partial submissions still save.
  name: varchar("name", { length: 200 }),
  email: varchar("email", { length: 320 }),
  company: varchar("company", { length: 200 }),
  phone: varchar("phone", { length: 64 }),
  budgetRange: varchar("budget_range", { length: 64 }),
  timeline: varchar("timeline", { length: 64 }),
  serviceInterest: varchar("service_interest", { length: 128 }),
  message: text("message"),
  // Anything else the funnel collected — kept loose for forward-compat.
  metadata: jsonb("metadata"),
});

export type Lead = typeof leads.$inferSelect;
export type NewLead = typeof leads.$inferInsert;

// `newsletter_subscribers` — simple email capture for the blog / footer.
export const newsletterSubscribers = pgTable("newsletter_subscribers", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 320 }).notNull().unique(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  source: varchar("source", { length: 64 }),
});

export type NewsletterSubscriber = typeof newsletterSubscribers.$inferSelect;
export type NewNewsletterSubscriber =
  typeof newsletterSubscribers.$inferInsert;

// `pricing_calculations` — every time a visitor uses the pricing calculator
// we persist the inputs and the estimate. Useful for sales follow-up + product
// analytics on what kinds of projects people are pricing.
export const pricingCalculations = pgTable("pricing_calculations", {
  id: serial("id").primaryKey(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  projectType: varchar("project_type", { length: 64 }).notNull(),
  scopeSize: varchar("scope_size", { length: 32 }).notNull(),
  timelineWeeks: integer("timeline_weeks").notNull(),
  addons: jsonb("addons"),
  estimateMinUsd: integer("estimate_min_usd").notNull(),
  estimateMaxUsd: integer("estimate_max_usd").notNull(),
  email: varchar("email", { length: 320 }),
});

export type PricingCalculation = typeof pricingCalculations.$inferSelect;
export type NewPricingCalculation = typeof pricingCalculations.$inferInsert;
