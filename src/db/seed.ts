import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
import {
	type AssetInsert,
	assets,
	type AssetSelect,
	productAssets,
	type ProductInsert,
	products,
} from "./schema.ts";
import { faker } from "@faker-js/faker";
import { UniqueEnforcer } from "enforce-unique";

const migrationsClient = postgres(process.env.DB_CONNECTION_STRING, {
	max: 1,
});

const db = drizzle(migrationsClient);

const NUMBER_OF_PRODUCT_ASSETS = 5;
const NUMBER_OF_PRODUCTS = 100;

const uniqueEnforcerProductName = new UniqueEnforcer();

const generateProduct = (thumbnailId: number) => {
	const name = uniqueEnforcerProductName.enforce(() =>
		faker.commerce.productName(),
	);
	return {
		name,
		description: faker.commerce.productDescription(),
		priceCents: Number(faker.commerce.price()),
		slug: faker.helpers.slugify(name).toLowerCase(),
		color: faker.color.human(),
		sku: faker.string.alphanumeric(10),
		createdAt: faker.date.past(),
		quantity: faker.number.int({ min: 0, max: 100 }),
		size: ["XS", "S", "M", "L", "XL"][faker.number.int({ min: 0, max: 4 })],
		thumbnailId,
	} satisfies ProductInsert;
};

const generateAsset = (dirPrefix: string, name: string) => {
	return {
		uuid: `static/${dirPrefix}/${name}.jpg`,
		createdAt: faker.date.past(),
	} satisfies AssetInsert;
};

async function seed() {
	const createdAssets: AssetSelect[] = [];
	for (let i = 0; i < NUMBER_OF_PRODUCT_ASSETS; i++) {
		const asset = await db
			.insert(assets)
			.values(generateAsset("product_assets", `thumb${i + 1}.png`))
			.returning();
		createdAssets.push(asset[0]);
	}

	const productsToInsert: ProductInsert[] = [];
	for (let i = 0; i < NUMBER_OF_PRODUCTS; i++) {
		productsToInsert.push(
			generateProduct(createdAssets[i % NUMBER_OF_PRODUCT_ASSETS].id),
		);
	}
	await db.insert(products).values(productsToInsert);
}

const cleanDb = async () => {
	await db.delete(productAssets).execute();
	await db.delete(products).execute();
	await db.delete(assets).execute();
};

try {
	await cleanDb();
	await seed();
} finally {
	await migrationsClient.end();
}
