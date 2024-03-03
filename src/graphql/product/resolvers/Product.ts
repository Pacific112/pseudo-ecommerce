import type { ProductResolvers } from "./../../types.generated";

export const Product: ProductResolvers = {
	price: (parent) => parent,
	description: (parent) => parent.description,
	name: (parent) => parent.name,
	slug: (parent) => parent.slug,
	attributes: (parent) => parent.attributes,
};
