import { pgTable, serial, timestamp, varchar } from "drizzle-orm/pg-core";

export const assets = pgTable("assets", {
	id: serial("id").primaryKey(),
	uuid: varchar("uuid").notNull(),
	createdAt: timestamp("created_at").notNull(),
});

export type AssetInsert = typeof assets.$inferInsert;
export type AssetSelect = typeof assets.$inferSelect;
