/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from "./types.generated";
import { Category } from "./product/resolvers/Category";
import { HashID } from "./base/resolvers/HashID";
import { PageInfo } from "./base/resolvers/PageInfo";
import { Price } from "./base/resolvers/Price";
import { Product } from "./product/resolvers/Product";
import { ProductAttribute } from "./product/resolvers/ProductAttribute";
import { ProductPage } from "./product/resolvers/ProductPage";
import { ProductVariant } from "./product/resolvers/ProductVariant";
import { categories as Query_categories } from "./product/resolvers/Query/categories";
import { productBySlug as Query_productBySlug } from "./product/resolvers/Query/productBySlug";
import { products as Query_products } from "./product/resolvers/Query/products";
export const resolvers: Resolvers = {
	Query: {
		categories: Query_categories,
		productBySlug: Query_productBySlug,
		products: Query_products,
	},

	Category: Category,
	HashID: HashID,
	PageInfo: PageInfo,
	Price: Price,
	Product: Product,
	ProductAttribute: ProductAttribute,
	ProductPage: ProductPage,
	ProductVariant: ProductVariant,
};
