import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
import { faker } from "@faker-js/faker";
import { UniqueEnforcer } from "enforce-unique";
import {
	categories,
	type CategorySelect,
	type ProductAssetInsert,
	productAssets,
	productAttributes,
	type ProductAttributeSelect,
	type ProductAttributeValueInsert,
	productAttributeValues,
	type ProductInsert,
	products,
} from "graphql/product/schema.db.ts";
import { dbClient } from "db/db.client.ts";

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

const generateCategories = (parentId?: number) => {
	return faker.helpers
		.multiple(faker.commerce.productMaterial, { count: 3 })
		.map((name) => {
			return {
				name,
				slug: faker.helpers.slugify(name).toLowerCase(),
				parentId,
			};
		});
};

const generateProductAttributes = () =>
	dbClient
		.insert(productAttributes)
		.values([
			{
				name: "Color",
				type: "enum",
				configuration: { options: ["red", "blue", "green"] },
			},
			{
				name: "modelDescription",
				type: "string",
			},
			{
				name: "weight",
				type: "number",
			},
			{
				name: "recentlyAdded",
				type: "boolean",
			},
		])
		.returning();

const NUMBER_OF_PRODUCTS = 60;
const uniqueEnforcerProductName = new UniqueEnforcer();
const generateProduct = (category: CategorySelect) => {
	const name = uniqueEnforcerProductName.enforce(() =>
		faker.commerce.productName(),
	);
	return {
		name,
		description: faker.commerce.productDescription(),
		priceCents: Number(faker.commerce.price()),
		slug: faker.helpers.slugify(name).toLowerCase(),
		createdAt: faker.date.past(),
		categoryId: category.id,
	} satisfies ProductInsert;
};

const generateProductAttributeValues = (
	productId: number,
	productAttributes: ProductAttributeSelect[],
) => {
	const productAttributeValues: ProductAttributeValueInsert[] = [];
	for (const attribute of productAttributes) {
		switch (attribute.type) {
			case "string":
				productAttributeValues.push({
					productId,
					productAttributeId: attribute.id,
					name: attribute.name,
					type: attribute.type,
					value: faker.person.bio(),
				});
				break;
			case "number":
				productAttributeValues.push({
					productId,
					productAttributeId: attribute.id,
					name: attribute.name,
					type: attribute.type,
					value: faker.number.int({ min: 10, max: 120 }).toString(10),
				});
				break;
			case "boolean":
				productAttributeValues.push({
					productId,
					productAttributeId: attribute.id,
					name: attribute.name,
					type: attribute.type,
					value: faker.number.int() % 2 === 0 ? "true" : "false",
				});
				break;
			case "enum":
				const configuration = attribute.configuration as { options: string[] };
				productAttributeValues.push({
					productId,
					productAttributeId: attribute.id,
					type: attribute.type,
					name: attribute.name,
					value:
						configuration.options[
							Math.floor(Math.random() * configuration.options.length)
						],
				});
				break;
		}
	}

	return productAttributeValues;
};

const generateProductVariant = (parent: { id: number; name: string }) => {
	const name = `${parent.name} - ${faker.lorem.word()}`;
	return {
		name,
		description: faker.commerce.productDescription(),
		priceCents: Number(faker.commerce.price()),
		slug: faker.helpers.slugify(name).toLowerCase(),
		createdAt: faker.date.past(),
		parentId: parent.id,
	} satisfies ProductInsert;
};

const generateProductVariantAttributes = (
	productVariantId: number,
	attributes: ProductAttributeSelect[],
) => {
	const randomAttribute =
		attributes[Math.floor(Math.random() * attributes.length)];

	return generateProductAttributeValues(productVariantId, [randomAttribute]);
};

async function seed() {
	const rootCategories = await dbClient
		.insert(categories)
		.values(generateCategories())
		.returning();
	const firstLevelCategories = await dbClient
		.insert(categories)
		.values(
			rootCategories.flatMap((category) => generateCategories(category.id)),
		)
		.returning();
	const secondLevelCategories = await dbClient
		.insert(categories)
		.values(
			firstLevelCategories.flatMap((category) =>
				generateCategories(category.id),
			),
		)
		.returning();
	const allCategories = [
		...rootCategories,
		...firstLevelCategories,
		...secondLevelCategories,
	];

	const productAttributes = await generateProductAttributes();

	const productsToInsert: ProductInsert[] = [];
	for (let i = 0; i < NUMBER_OF_PRODUCTS; i++) {
		const category =
			allCategories[Math.floor(Math.random() * allCategories.length)];
		productsToInsert.push(generateProduct(category));
	}
	const insertedProducts = await db
		.insert(products)
		.values(productsToInsert)
		.returning({ id: products.id, name: products.name });

	const variantsToInsert: ProductInsert[] = [];
	for (const product of insertedProducts) {
		const variantsToGenerate = Math.floor(Math.random() * 5);
		for (let i = 0; i < variantsToGenerate; i++) {
			const variant = generateProductVariant(product);
			variantsToInsert.push(variant);
		}
	}
	const insertedVariants = await db
		.insert(products)
		.values(variantsToInsert)
		.returning();

	const productAttributeValuesToInsert: ProductAttributeValueInsert[] = [];
	for (const product of insertedProducts) {
		const productAttributeValues = generateProductAttributeValues(
			product.id,
			productAttributes,
		);
		productAttributeValuesToInsert.push(...productAttributeValues);
	}
	const variantAttributeValuesToInsert: ProductAttributeValueInsert[] = [];
	for (const variant of insertedVariants) {
		const variantAttributeValues = generateProductVariantAttributes(
			variant.id,
			productAttributes,
		);
		variantAttributeValuesToInsert.push(...variantAttributeValues);
	}

	const allAttributeValuesToInsert = [
		...productAttributeValuesToInsert,
		...variantAttributeValuesToInsert,
	];
	await db.insert(productAttributeValues).values(allAttributeValuesToInsert);

	const allInsertedProducts = [...insertedProducts, ...insertedVariants];
	const productAssetsToInsert = allInsertedProducts
		.map((p) => p.id)
		.flatMap(generateProductAssets);

	await db.insert(productAssets).values(productAssetsToInsert);
}

const cleanDb = async () => {
	await db.delete(productAttributeValues).execute();
	await db.delete(productAttributes).execute();
	await db.delete(productAssets).execute();
	await db.delete(products).execute();
};

try {
	await cleanDb();
	await seed();
} finally {
	await migrationsClient.end();
}
