import { NextResponse } from "next/server";
import { z } from "zod";
import { getDb, schema } from "@/lib/db";

export const runtime = "nodejs";

const Body = z.object({
  source: z.string().min(1).max(64),
  name: z.string().max(200).optional(),
  email: z.email().optional(),
  company: z.string().max(200).optional(),
  phone: z.string().max(64).optional(),
  budgetRange: z.string().max(64).optional(),
  timeline: z.string().max(64).optional(),
  serviceInterest: z.string().max(128).optional(),
  message: z.string().max(4000).optional(),
  metadata: z.record(z.string(), z.unknown()).optional(),
});

export async function POST(req: Request) {
  let parsed: z.infer<typeof Body>;
  try {
    parsed = Body.parse(await req.json());
  } catch {
    return NextResponse.json(
      { ok: false, error: "Some fields look off — please review and try again." },
      { status: 400 }
    );
  }

  if (!process.env.DATABASE_URL) {
    return NextResponse.json({ ok: true, dryRun: true });
  }

  try {
    const db = getDb();
    const [row] = await db
      .insert(schema.leads)
      .values({
        source: parsed.source,
        name: parsed.name,
        email: parsed.email,
        company: parsed.company,
        phone: parsed.phone,
        budgetRange: parsed.budgetRange,
        timeline: parsed.timeline,
        serviceInterest: parsed.serviceInterest,
        message: parsed.message,
        metadata: parsed.metadata ?? null,
      })
      .returning({ id: schema.leads.id });
    return NextResponse.json({ ok: true, id: row?.id });
  } catch (err) {
    console.error("[leads] insert failed", err);
    return NextResponse.json(
      { ok: false, error: "Could not save your enquiry. Try emailing us instead." },
      { status: 500 }
    );
  }
}
