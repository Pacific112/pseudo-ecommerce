import type { ProductResolvers } from "./../../types.generated";

export const Product: ProductResolvers = {
	description: (parent) => parent.description,
	id: (parent) => parent.id,
	name: (parent) => parent.name,
	price: (parent) => ({
		cents: parent.priceCents,
		currency: parent.priceCurrency,
	}),
};
