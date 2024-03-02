/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from "./types.generated";
import { HashID } from "./base/resolvers/HashID";
import { PageInfo } from "./base/resolvers/PageInfo";
import { Price } from "./base/resolvers/Price";
import { Product } from "./product/resolvers/Product";
import { ProductPage } from "./product/resolvers/ProductPage";
import { productBySlug as Query_productBySlug } from "./product/resolvers/Query/productBySlug";
import { products as Query_products } from "./product/resolvers/Query/products";
export const resolvers: Resolvers = {
	Query: { productBySlug: Query_productBySlug, products: Query_products },

	HashID: HashID,
	PageInfo: PageInfo,
	Price: Price,
	Product: Product,
	ProductPage: ProductPage,
};
