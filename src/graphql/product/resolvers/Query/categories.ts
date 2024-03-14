import type { QueryResolvers } from "./../../../types.generated";
import { dbClient } from "db/db.client.ts";
import { isNull } from "drizzle-orm";
import { categories as categoriesTable } from "graphql/product/schema.db.ts";

export const categories: NonNullable<QueryResolvers["categories"]> = async (
	_parent,
	_arg,
	_ctx,
) =>
	dbClient.query.categories.findMany({
		where: isNull(categoriesTable.parentId),
	});
