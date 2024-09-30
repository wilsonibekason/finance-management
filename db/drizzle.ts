import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

export const sql = neon(process.env.DATABASE_URL!);
// export const db = drizzle(sql);
export const db = drizzle(sql, { schema });

// const result = await db.select().from(...);

const account = db.query.accounts.findMany({
  with: {
    posts: true,
  },
});
