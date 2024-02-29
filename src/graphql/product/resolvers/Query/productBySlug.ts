import type { QueryResolvers } from "./../../../types.generated";
import { dbClient } from "db/db.client.ts";
import { eq } from "drizzle-orm";
import { products } from "graphql/product/schema.db.ts";

export const productBySlug: NonNullable<
	QueryResolvers["productBySlug"]
> = async (_parent, { slug }, _ctx) => {
	const foundProduct = await dbClient.query.products.findFirst({
		where: eq(products.slug, slug),
	});

	if (!foundProduct) {
		throw new Error("Product not found");
	}

	return foundProduct;
};
