import type { QueryResolvers } from "graphql/types.generated.ts";
import { dbClient } from "db/db.client.ts";

export const products: NonNullable<QueryResolvers["products"]> = async (
	_parent,
	_arg,
	_ctx,
) => {
	const products = await dbClient.query.products.findMany({
		limit: 1000,
	});

	return {
		nodes: products,
		pageInfo: {
			hasNextPage: false,
		},
	};
};
