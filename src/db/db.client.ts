import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
import * as schema from "./schema.ts";

const queryClient = postgres(process.env.DB_CONNECTION_STRING);
export const dbClient = drizzle(queryClient, { schema });
