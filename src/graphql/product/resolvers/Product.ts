import type { ProductResolvers } from "./../../types.generated";
import { dbClient } from "db/db.client.ts";
import { and, eq, not, or } from "drizzle-orm";
import {
	categories,
	productAttributeValues,
	products,
} from "graphql/product/schema.db.ts";

export const Product: ProductResolvers = {
	price: (parent) => parent,
	description: (parent) => parent.description,
	name: (parent) => parent.name,
	slug: (parent) => parent.slug,
	attributes: (parent) =>
		dbClient.query.productAttributeValues.findMany({
			where: eq(productAttributeValues.productId, parent.id),
		}),
	variants: (parent) => {
		if (parent.parentId) {
			return dbClient.query.products.findMany({
				where: or(
					eq(products.id, parent.parentId),
					and(
						eq(products.parentId, parent.parentId),
						not(eq(products.id, parent.id)),
					),
				),
			});
		}

		return dbClient.query.products.findMany({
			where: eq(products.parentId, parent.id),
		});
	},
	category: (parent) => {
		if (parent.categoryId) {
			return dbClient.query.categories.findFirst({
				where: eq(categories.id, parent.categoryId),
			});
		}
	},
};
