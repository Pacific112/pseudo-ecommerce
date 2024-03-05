import type { ProductVariantResolvers } from "./../../types.generated";
import { dbClient } from "db/db.client.ts";
import { eq } from "drizzle-orm";
import { productAttributeValues } from "graphql/product/schema.db.ts";

export const ProductVariant: ProductVariantResolvers = {
	price: (parent) => parent,
	description: (parent) => parent.description,
	name: (parent) => parent.name,
	slug: (parent) => parent.slug,
	attributes: (parent) =>
		dbClient.query.productAttributeValues.findMany({
			where: eq(productAttributeValues.productId, parent.id),
		}),
};
