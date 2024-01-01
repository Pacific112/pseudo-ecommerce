/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from "./types.generated";
import { Price } from "./base/resolvers/Price";
import { Product } from "./product/resolvers/Product";
import { product as Query_product } from "./product/resolvers/Query/product";
export const resolvers: Resolvers = {
	Query: { product: Query_product },

	Price: Price,
	Product: Product,
};
