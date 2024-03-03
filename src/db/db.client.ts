import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
import * as productSchema from "../graphql/product/schema.db.ts";

const queryClient = postgres(process.env.DB_CONNECTION_STRING);
export const dbClient = drizzle(queryClient, {
	schema: {
		...productSchema,
	},
});
