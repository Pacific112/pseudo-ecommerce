import type {
	ProductAttributeValueSelect,
	ProductSelect,
} from "./schema.db.ts";
export type { ProductAttributeValueSelect as ProductAttributeMapper } from "./schema.db.ts";

export type ProductMapper = ProductSelect & {
	attributes: ProductAttributeValueSelect[];
};
