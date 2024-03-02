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
			name: { kind: "Name", value: "Product", loc: { start: 331, end: 338 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 343, end: 345 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "HashID",
								loc: { start: 347, end: 353 },
							},
							loc: { start: 347, end: 353 },
						},
						loc: { start: 347, end: 354 },
					},
					directives: [],
					loc: { start: 343, end: 354 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 357, end: 361 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 363, end: 369 },
							},
							loc: { start: 363, end: 369 },
						},
						loc: { start: 363, end: 370 },
					},
					directives: [],
					loc: { start: 357, end: 370 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "price", loc: { start: 373, end: 378 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Price",
								loc: { start: 380, end: 385 },
							},
							loc: { start: 380, end: 385 },
						},
						loc: { start: 380, end: 386 },
					},
					directives: [],
					loc: { start: 373, end: 386 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "slug", loc: { start: 389, end: 393 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 395, end: 401 },
							},
							loc: { start: 395, end: 401 },
						},
						loc: { start: 395, end: 402 },
					},
					directives: [],
					loc: { start: 389, end: 402 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "description",
						loc: { start: 405, end: 416 },
					},
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "String",
							loc: { start: 418, end: 424 },
						},
						loc: { start: 418, end: 424 },
					},
					directives: [],
					loc: { start: 405, end: 424 },
				},
			],
			loc: { start: 326, end: 426 },
		},
	],
	loc: { start: 0, end: 427 },
} as unknown as DocumentNode;
