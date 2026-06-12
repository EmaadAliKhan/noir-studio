import { NextResponse } from "next/server";
import { z } from "zod";
import { getDb, schema } from "@/lib/db";

export const runtime = "nodejs";

const Body = z.object({
  projectType: z.string().max(64),
  scopeSize: z.string().max(32),
  timelineWeeks: z.number().int().min(1).max(52),
  addons: z.array(z.string()).optional(),
  estimateMinUsd: z.number().int().min(0),
  estimateMaxUsd: z.number().int().min(0),
  email: z.email().optional(),
});

export async function POST(req: Request) {
  let parsed: z.infer<typeof Body>;
  try {
    parsed = Body.parse(await req.json());
  } catch {
    return NextResponse.json(
      { ok: false, error: "Bad request body." },
      { status: 400 }
    );
  }

  if (!process.env.DATABASE_URL) {
    return NextResponse.json({ ok: true, dryRun: true });
  }

  try {
    const db = getDb();
    await db.insert(schema.pricingCalculations).values({
      projectType: parsed.projectType,
      scopeSize: parsed.scopeSize,
      timelineWeeks: parsed.timelineWeeks,
      addons: parsed.addons ?? null,
      estimateMinUsd: parsed.estimateMinUsd,
      estimateMaxUsd: parsed.estimateMaxUsd,
      email: parsed.email,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[pricing] insert failed", err);
    return NextResponse.json(
      { ok: false, error: "Could not save your estimate." },
      { status: 500 }
    );
  }
}
