import type { QueryResolvers } from "graphql/types.generated.ts";
import { dbClient } from "db/db.client.ts";
import { eq } from "drizzle-orm";
import { products } from "graphql/product/schema.db.ts";

export const product: NonNullable<QueryResolvers["product"]> = async (
	_parent,
	{ id },
	_ctx,
) => {
	const foundProduct = await dbClient.query.products.findFirst({
		where: eq(products.id, Number(id)),
	});
	if (!foundProduct) {
		throw "Not Found";
	}
	return foundProduct;
};
