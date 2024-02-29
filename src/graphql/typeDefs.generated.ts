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
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 90, end: 95 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "productBySlug",
						loc: { start: 100, end: 113 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "slug",
								loc: { start: 114, end: 118 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "String",
										loc: { start: 120, end: 126 },
									},
									loc: { start: 120, end: 126 },
								},
								loc: { start: 120, end: 127 },
							},
							directives: [],
							loc: { start: 114, end: 127 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Product",
								loc: { start: 130, end: 137 },
							},
							loc: { start: 130, end: 137 },
						},
						loc: { start: 130, end: 138 },
					},
					directives: [],
					loc: { start: 100, end: 138 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 141, end: 149 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "pageSize",
								loc: { start: 150, end: 158 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 160, end: 163 },
								},
								loc: { start: 160, end: 163 },
							},
							directives: [],
							loc: { start: 150, end: 163 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "after",
								loc: { start: 165, end: 170 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "String",
									loc: { start: 172, end: 178 },
								},
								loc: { start: 172, end: 178 },
							},
							directives: [],
							loc: { start: 165, end: 178 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ProductPage",
								loc: { start: 181, end: 192 },
							},
							loc: { start: 181, end: 192 },
						},
						loc: { start: 181, end: 193 },
					},
					directives: [],
					loc: { start: 141, end: 193 },
				},
			],
			loc: { start: 78, end: 195 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "ProductPage",
				loc: { start: 202, end: 213 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "nodes", loc: { start: 218, end: 223 } },
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
										loc: { start: 226, end: 233 },
									},
									loc: { start: 226, end: 233 },
								},
								loc: { start: 226, end: 234 },
							},
							loc: { start: 225, end: 235 },
						},
						loc: { start: 225, end: 236 },
					},
					directives: [],
					loc: { start: 218, end: 236 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "pageInfo",
						loc: { start: 239, end: 247 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "PageInfo",
								loc: { start: 249, end: 257 },
							},
							loc: { start: 249, end: 257 },
						},
						loc: { start: 249, end: 258 },
					},
					directives: [],
					loc: { start: 239, end: 258 },
				},
			],
			loc: { start: 197, end: 260 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Product", loc: { start: 267, end: 274 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 279, end: 281 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "HashID",
								loc: { start: 283, end: 289 },
							},
							loc: { start: 283, end: 289 },
						},
						loc: { start: 283, end: 290 },
					},
					directives: [],
					loc: { start: 279, end: 290 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 293, end: 297 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 299, end: 305 },
							},
							loc: { start: 299, end: 305 },
						},
						loc: { start: 299, end: 306 },
					},
					directives: [],
					loc: { start: 293, end: 306 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "price", loc: { start: 309, end: 314 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Price",
								loc: { start: 316, end: 321 },
							},
							loc: { start: 316, end: 321 },
						},
						loc: { start: 316, end: 322 },
					},
					directives: [],
					loc: { start: 309, end: 322 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "slug", loc: { start: 325, end: 329 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 331, end: 337 },
							},
							loc: { start: 331, end: 337 },
						},
						loc: { start: 331, end: 338 },
					},
					directives: [],
					loc: { start: 325, end: 338 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "description",
						loc: { start: 341, end: 352 },
					},
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "String",
							loc: { start: 354, end: 360 },
						},
						loc: { start: 354, end: 360 },
					},
					directives: [],
					loc: { start: 341, end: 360 },
				},
			],
			loc: { start: 262, end: 362 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "PageInfo", loc: { start: 369, end: 377 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "hasNextPage",
						loc: { start: 382, end: 393 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Boolean",
								loc: { start: 395, end: 402 },
							},
							loc: { start: 395, end: 402 },
						},
						loc: { start: 395, end: 403 },
					},
					directives: [],
					loc: { start: 382, end: 403 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "nextCursor",
						loc: { start: 406, end: 416 },
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
					loc: { start: 406, end: 424 },
				},
			],
			loc: { start: 364, end: 426 },
		},
	],
	loc: { start: 0, end: 427 },
} as unknown as DocumentNode;
