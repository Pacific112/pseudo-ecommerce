import type { PriceResolvers } from "./../../types.generated";

export const Price: PriceResolvers = {
	cents: (parent) => parent.priceCents,
	currency: (parent) => parent.priceCurrency,
};
