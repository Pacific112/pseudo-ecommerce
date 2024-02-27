import type { Config } from "drizzle-kit";

export default {
	schema: ["src/**/schema.db.ts"],
	out: ".drizzle",
	driver: "pg",
	dbCredentials: {
		connectionString: process.env.DB_CONNECTION_STRING,
	},
} satisfies Config;
