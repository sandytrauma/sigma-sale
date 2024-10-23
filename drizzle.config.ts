import 'dotenv/config';
import { defineConfig } from "drizzle-kit";
export default defineConfig({
  dialect: "postgresql",
  out:"./drizzle",
  schema: "./src/db/schema.ts",
  dbCredentials:
   {
    url: "postgresql://neondb_owner:EptPo0ehq4ZT@ep-quiet-pine-a1f40w1l.ap-southeast-1.aws.neon.tech/neondb?sslmode=require"
  },
});