import { neon, neonConfig } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "@/lib/schema";

// Cache Neon HTTP fetches across serverless invocations on Vercel.
neonConfig.fetchConnectionCache = true;

const connectionString = process.env.DATABASE_URL;

// We construct a single Drizzle client per process. If DATABASE_URL is missing
// during build or local dev, we surface a clear runtime error only when the
// client is actually used — this way the rest of the marketing site renders
// without a database configured.
function createDb() {
  if (!connectionString) {
    throw new Error(
      "DATABASE_URL is not set. Add it to your environment (Vercel / .env.local) to enable database features."
    );
  }
  const sql = neon(connectionString);
  return drizzle(sql, { schema });
}

// Lazy singleton so missing DATABASE_URL never breaks the build.
let _db: ReturnType<typeof createDb> | null = null;
export function getDb() {
  if (!_db) _db = createDb();
  return _db;
}

export { schema };
