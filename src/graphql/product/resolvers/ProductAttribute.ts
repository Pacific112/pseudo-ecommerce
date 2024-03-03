import type { ProductAttributeResolvers } from "./../../types.generated";
export const ProductAttribute: ProductAttributeResolvers = {
	/* Implement ProductAttribute resolver logic here */
	name: (parent) => parent.name,
	value: (parent) => parent.value,
	type: (parent) => parent.type,
};
