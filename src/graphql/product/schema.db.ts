import {
	integer,
	pgTable,
	serial,
	timestamp,
	varchar,
} from "drizzle-orm/pg-core";

export const products = pgTable("products", {
	id: serial("id").primaryKey(),
	name: varchar("name").notNull(),
	description: varchar("description"),
	slug: varchar("slug").notNull().unique(),
	createdAt: timestamp("created_at").notNull(),
	priceCents: integer("price").notNull(),
	priceCurrency: varchar("currency").notNull().default("USD"),
	quantity: integer("quantity").notNull(),
	sku: varchar("sku").notNull().unique(),
	size: varchar("size").notNull(),
	color: varchar("color").notNull(),
});

export type ProductInsert = typeof products.$inferInsert;
export type ProductSelect = typeof products.$inferSelect;

export const productAssets = pgTable("product_assets", {
	id: serial("id").primaryKey(),
	productId: integer("product_id")
		.notNull()
		.references(() => products.id),
	path: varchar("path").notNull(),
	createdAt: timestamp("created_at").notNull(),
});

export type ProductAssetInsert = typeof productAssets.$inferInsert;
