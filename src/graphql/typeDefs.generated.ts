import type { DocumentNode } from "graphql";
export const typeDefs = {
	kind: "Document",
	definitions: [
		{
			kind: "ScalarTypeDefinition",
			name: { kind: "Name", value: "HashID", loc: { start: 7, end: 13 } },
			directives: [],
			loc: { start: 0, end: 13 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Query", loc: { start: 20, end: 25 } },
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 15, end: 25 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Price", loc: { start: 32, end: 37 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "cents", loc: { start: 42, end: 47 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Float",
								loc: { start: 49, end: 54 },
							},
							loc: { start: 49, end: 54 },
						},
						loc: { start: 49, end: 55 },
					},
					directives: [],
					loc: { start: 42, end: 55 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "currency",
						loc: { start: 58, end: 66 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 68, end: 74 },
							},
							loc: { start: 68, end: 74 },
						},
						loc: { start: 68, end: 75 },
					},
					directives: [],
					loc: { start: 58, end: 75 },
				},
			],
			loc: { start: 27, end: 77 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "PageInfo", loc: { start: 84, end: 92 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "hasNextPage",
						loc: { start: 97, end: 108 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Boolean",
								loc: { start: 110, end: 117 },
							},
							loc: { start: 110, end: 117 },
						},
						loc: { start: 110, end: 118 },
					},
					directives: [],
					loc: { start: 97, end: 118 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "nextCursor",
						loc: { start: 121, end: 131 },
					},
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "String",
							loc: { start: 133, end: 139 },
						},
						loc: { start: 133, end: 139 },
					},
					directives: [],
					loc: { start: 121, end: 139 },
				},
			],
			loc: { start: 79, end: 141 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 154, end: 159 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "productBySlug",
						loc: { start: 164, end: 177 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "slug",
								loc: { start: 178, end: 182 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "String",
										loc: { start: 184, end: 190 },
									},
									loc: { start: 184, end: 190 },
								},
								loc: { start: 184, end: 191 },
							},
							directives: [],
							loc: { start: 178, end: 191 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Product",
								loc: { start: 194, end: 201 },
							},
							loc: { start: 194, end: 201 },
						},
						loc: { start: 194, end: 202 },
					},
					directives: [],
					loc: { start: 164, end: 202 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 205, end: 213 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "pageSize",
								loc: { start: 214, end: 222 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 224, end: 227 },
								},
								loc: { start: 224, end: 227 },
							},
							directives: [],
							loc: { start: 214, end: 227 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "after",
								loc: { start: 229, end: 234 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "String",
									loc: { start: 236, end: 242 },
								},
								loc: { start: 236, end: 242 },
							},
							directives: [],
							loc: { start: 229, end: 242 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ProductPage",
								loc: { start: 245, end: 256 },
							},
							loc: { start: 245, end: 256 },
						},
						loc: { start: 245, end: 257 },
					},
					directives: [],
					loc: { start: 205, end: 257 },
				},
			],
			loc: { start: 142, end: 259 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "ProductPage",
				loc: { start: 266, end: 277 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "nodes", loc: { start: 282, end: 287 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "ListType",
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "Product",
										loc: { start: 290, end: 297 },
									},
									loc: { start: 290, end: 297 },
								},
								loc: { start: 290, end: 298 },
							},
							loc: { start: 289, end: 299 },
						},
						loc: { start: 289, end: 300 },
					},
					directives: [],
					loc: { start: 282, end: 300 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "pageInfo",
						loc: { start: 303, end: 311 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "PageInfo",
								loc: { start: 313, end: 321 },
							},
							loc: { start: 313, end: 321 },
						},
						loc: { start: 313, end: 322 },
					},
					directives: [],
					loc: { start: 303, end: 322 },
				},
			],
			loc: { start: 261, end: 324 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "ProductAttribute",
				loc: { start: 331, end: 347 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 352, end: 356 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 358, end: 364 },
							},
							loc: { start: 358, end: 364 },
						},
						loc: { start: 358, end: 365 },
					},
					directives: [],
					loc: { start: 352, end: 365 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "value", loc: { start: 368, end: 373 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 375, end: 381 },
							},
							loc: { start: 375, end: 381 },
						},
						loc: { start: 375, end: 382 },
					},
					directives: [],
					loc: { start: 368, end: 382 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "type", loc: { start: 385, end: 389 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 391, end: 397 },
							},
							loc: { start: 391, end: 397 },
						},
						loc: { start: 391, end: 398 },
					},
					directives: [],
					loc: { start: 385, end: 398 },
				},
			],
			loc: { start: 326, end: 400 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Product", loc: { start: 407, end: 414 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 419, end: 421 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "HashID",
								loc: { start: 423, end: 429 },
							},
							loc: { start: 423, end: 429 },
						},
						loc: { start: 423, end: 430 },
					},
					directives: [],
					loc: { start: 419, end: 430 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 433, end: 437 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 439, end: 445 },
							},
							loc: { start: 439, end: 445 },
						},
						loc: { start: 439, end: 446 },
					},
					directives: [],
					loc: { start: 433, end: 446 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "price", loc: { start: 449, end: 454 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Price",
								loc: { start: 456, end: 461 },
							},
							loc: { start: 456, end: 461 },
						},
						loc: { start: 456, end: 462 },
					},
					directives: [],
					loc: { start: 449, end: 462 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "slug", loc: { start: 465, end: 469 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 471, end: 477 },
							},
							loc: { start: 471, end: 477 },
						},
						loc: { start: 471, end: 478 },
					},
					directives: [],
					loc: { start: 465, end: 478 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "description",
						loc: { start: 481, end: 492 },
					},
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "String",
							loc: { start: 494, end: 500 },
						},
						loc: { start: 494, end: 500 },
					},
					directives: [],
					loc: { start: 481, end: 500 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "attributes",
						loc: { start: 503, end: 513 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "ListType",
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ProductAttribute",
										loc: { start: 516, end: 532 },
									},
									loc: { start: 516, end: 532 },
								},
								loc: { start: 516, end: 533 },
							},
							loc: { start: 515, end: 534 },
						},
						loc: { start: 515, end: 535 },
					},
					directives: [],
					loc: { start: 503, end: 535 },
				},
			],
			loc: { start: 402, end: 537 },
		},
	],
	loc: { start: 0, end: 538 },
} as unknown as DocumentNode;
