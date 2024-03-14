import type { CategoryResolvers } from "./../../types.generated";
import { dbClient } from "db/db.client.ts";
import { eq } from "drizzle-orm";
import { categories, products } from "graphql/product/schema.db.ts";

export const Category: CategoryResolvers = {
	/* Implement Category resolver logic here */
	name: (parent) => parent.name,
	slug: (parent) => parent.slug,
	categories: (parent) =>
		dbClient.query.categories.findMany({
			where: eq(categories.parentId, parent.id),
		}),
	parent: (parent) => {
		if (parent.parentId) {
			return dbClient.query.categories.findFirst({
				where: eq(categories.id, parent.parentId),
			});
		}

		return null;
	},
	products: async (parent) => {
		const result = await dbClient.query.products.findMany({
			where: eq(products.categoryId, parent.id),
		});
		return {
			nodes: result,
			pageInfo: {
				hasNextPage: false,
				hasPreviousPage: false,
			},
		};
	},
};
