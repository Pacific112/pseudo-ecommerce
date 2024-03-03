import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
import { faker } from "@faker-js/faker";
import { UniqueEnforcer } from "enforce-unique";
import {
	type ProductAssetInsert,
	productAssets,
	type ProductInsert,
	products,
} from "graphql/product/schema.db.ts";

const migrationsClient = postgres(process.env.DB_CONNECTION_STRING, {
	max: 1,
});

const db = drizzle(migrationsClient);

const EXAMPLE_ASSETS = [
	{
		assets: [
			{ id: "1732800cce9f1dd04bb40b8feb234ae6", publicId: "shop-1/sample" },
			{ id: "6f2e69ae2b862451fc401ef406586a47", publicId: "shop-1/cld-sample" },
			{
				id: "ee5ae213173843d1be6e6733b313599a",
				publicId: "shop-1/cld-sample-2",
			},
			{
				id: "3209a1fafed67ec010834693a9105507",
				publicId: "shop-1/cld-sample-3",
			},
			{
				id: "0cdb211b86ac0b99a8094f92979ad758",
				publicId: "shop-1/cld-sample-4",
			},
			{
				id: "5ecc823d6e2e7c47930d6ca63075e80d",
				publicId: "shop-1/cld-sample-5",
			},
		],
	},
	{
		assets: [
			{
				id: "dfe310230fb73f8558d20b5c89ec167f",
				publicId: "shop-2/accessories-bag",
			},
			{
				id: "e1cc6aeeb0b7aebfdd266febfb785b0d",
				publicId: "shop-2/leather-bag-gray",
			},
			{
				id: "66d1b8026fed33b5b8f3c250dd142e94",
				publicId: "shop-2/car-interior-design",
			},
			{ id: "07a4e1f69c341a9422e67511dfb3ee53", publicId: "shop-2/shoes" },
			{
				id: "07cddefd1eb7429fdc485cb74faee624",
				publicId: "shop-2/analog-classic",
			},
		],
	},
	{
		assets: [
			{ id: "8100db3e202d8e9e12f9daf926eab797", publicId: "shop-3/spices" },
			{
				id: "7383d8e1c7b322fa3e26586d7ddd4d13",
				publicId: "shop-3/put-mussels",
			},
			{
				id: "6e4b5a14572cc7eb564e3c8193870849",
				publicId: "shop-3/fish-vegetables",
			},
			{ id: "68285135a969c012920693b26fcd2003", publicId: "shop-3/dessert" },
		],
	},
];
const generateProductAssets = (productId: number) => {
	const randomAssetsBucketIndex = Math.floor(
		Math.random() * EXAMPLE_ASSETS.length,
	);

	const assetsBucket = EXAMPLE_ASSETS[randomAssetsBucketIndex];
	const numberOfAssets = assetsBucket.assets.length;
	const randomNumberOfAssets = Math.floor(Math.random() * numberOfAssets);

	const assetsToInsert = [];
	for (let i = 0; i < randomNumberOfAssets; i++) {
		const asset =
			assetsBucket.assets[Math.floor(Math.random() * numberOfAssets)];
		assetsToInsert.push({
			productId,
			path: asset.publicId,
			createdAt: faker.date.past(),
		} satisfies ProductAssetInsert);
	}

	return assetsToInsert;
};

const NUMBER_OF_PRODUCTS = 100;
const uniqueEnforcerProductName = new UniqueEnforcer();
const generateProduct = () => {
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
	} satisfies ProductInsert;
};

async function seed() {
	const productsToInsert: ProductInsert[] = [];
	for (let i = 0; i < NUMBER_OF_PRODUCTS; i++) {
		productsToInsert.push(generateProduct());
	}
	const insertedProducts = await db
		.insert(products)
		.values(productsToInsert)
		.returning({ id: products.id });

	const productAssetsToInsert = [];
	for (const product of insertedProducts) {
		const productAssets = generateProductAssets(product.id);
		productAssetsToInsert.push(...productAssets);
	}

	await db.insert(productAssets).values(productAssetsToInsert);
}

const cleanDb = async () => {
	await db.delete(productAssets).execute();
	await db.delete(products).execute();
};

try {
	await cleanDb();
	await seed();
} finally {
	await migrationsClient.end();
}
