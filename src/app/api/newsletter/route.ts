import { NextResponse } from "next/server";
import { z } from "zod";
import { getDb, schema } from "@/lib/db";

export const runtime = "nodejs";

const Body = z.object({
  email: z.email(),
  source: z.string().max(64).optional(),
});

export async function POST(req: Request) {
  let parsed: z.infer<typeof Body>;
  try {
    parsed = Body.parse(await req.json());
  } catch {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email." },
      { status: 400 }
    );
  }

  if (!process.env.DATABASE_URL) {
    // Soft-fail in local dev with no DB — pretend success so the UI works.
    return NextResponse.json({ ok: true, dryRun: true });
  }

  try {
    const db = getDb();
    await db
      .insert(schema.newsletterSubscribers)
      .values({ email: parsed.email, source: parsed.source ?? "footer" })
      .onConflictDoNothing({ target: schema.newsletterSubscribers.email });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[newsletter] insert failed", err);
    return NextResponse.json(
      { ok: false, error: "Could not subscribe right now." },
      { status: 500 }
    );
  }
}
