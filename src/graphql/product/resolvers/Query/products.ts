import type { QueryResolvers } from "graphql/types.generated.ts";
import { dbClient } from "db/db.client.ts";
import { products as productsTable } from "graphql/product/schema.db.ts";
import { gt } from "drizzle-orm";
import { GraphQLError } from "graphql/error";

const DEFAULT_LIMIT = 20;
const MAX_PAGE_SIZE = 1000;

const deserializeCursor = (cursor?: string | null) => {
	if (cursor) {
		return parseInt(atob(cursor), 10);
	}

	return null;
};

const serializeCursor = (id?: number) => (id ? btoa(id.toString()) : undefined);

export const products: NonNullable<QueryResolvers["products"]> = async (
	_parent,
	{ after, pageSize },
	_ctx,
) => {
	const limit = pageSize || DEFAULT_LIMIT;
	const requestedId = deserializeCursor(after);

	if (limit > MAX_PAGE_SIZE) {
		throw new GraphQLError(
			`Page size must be less than or equal to ${MAX_PAGE_SIZE}`,
		);
	}

	const foundProducts = await dbClient.query.products.findMany({
		where: requestedId ? gt(productsTable.id, requestedId) : undefined,
		with: {
			attributes: true,
		},
		limit,
	});

	return {
		nodes: foundProducts,
		pageInfo: {
			nextCursor: serializeCursor(foundProducts.at(-1)?.id),
			hasNextPage: foundProducts.length === limit,
		},
	};
};
