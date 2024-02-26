/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from "./types.generated";
import { PageInfo } from "./product/resolvers/PageInfo";
import { Price } from "./base/resolvers/Price";
import { Product } from "./product/resolvers/Product";
import { ProductPage } from "./product/resolvers/ProductPage";
import { product as Query_product } from "./product/resolvers/Query/product";
import { products as Query_products } from "./product/resolvers/Query/products";
export const resolvers: Resolvers = {
	Query: { product: Query_product, products: Query_products },

	PageInfo: PageInfo,
	Price: Price,
	Product: Product,
	ProductPage: ProductPage,
};
