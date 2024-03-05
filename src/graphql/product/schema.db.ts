import {
	type AnyPgColumn,
	integer,
	jsonb,
	pgEnum,
	pgTable,
	serial,
	timestamp,
	varchar,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const attributeTypeEnum = pgEnum("attribute_type", [
	"string",
	"number",
	"boolean",
	"enum",
]);

export const productAttributes = pgTable("product_attributes", {
	id: serial("id").primaryKey(),
	name: varchar("name").notNull(),
	type: attributeTypeEnum("type").notNull(),
	configuration: jsonb("configuration"),
});

export type ProductAttributeInsert = typeof productAttributes.$inferInsert;
export type ProductAttributeSelect = typeof productAttributes.$inferSelect;

export const productAttributeValues = pgTable("product_attribute_values", {
	id: serial("id").primaryKey(),
	type: attributeTypeEnum("type").notNull(),
	name: varchar("name").notNull(),
	value: varchar("value").notNull(),
	productAttributeId: integer("product_attribute_id")
		.notNull()
		.references(() => productAttributes.id),
	productId: integer("product_id")
		.notNull()
		.references(() => products.id),
});

export type ProductAttributeValueInsert =
	typeof productAttributeValues.$inferInsert;
export type ProductAttributeValueSelect =
	typeof productAttributeValues.$inferSelect;

export const products = pgTable("products", {
	id: serial("id").primaryKey(),
	name: varchar("name").notNull(),
	description: varchar("description"),
	slug: varchar("slug").notNull().unique(),
	createdAt: timestamp("created_at").notNull(),
	priceCents: integer("price").notNull(),
	priceCurrency: varchar("currency").notNull().default("USD"),
	parentId: integer("parent_id").references((): AnyPgColumn => products.id),
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

export const productAttributeValueRelations = relations(
	productAttributeValues,
	({ one }) => ({
		product: one(products, {
			fields: [productAttributeValues.productId],
			references: [products.id],
		}),
	}),
);

export const productRelations = relations(products, ({ many, one }) => ({
	attributes: many(productAttributeValues),
	parent: one(products, {
		fields: [products.parentId],
		references: [products.id],
	}),
	variants: many(products),
}));
