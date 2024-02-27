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
						value: "product",
						loc: { start: 100, end: 107 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 108, end: 110 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "HashID",
										loc: { start: 112, end: 118 },
									},
									loc: { start: 112, end: 118 },
								},
								loc: { start: 112, end: 119 },
							},
							directives: [],
							loc: { start: 108, end: 119 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Product",
							loc: { start: 122, end: 129 },
						},
						loc: { start: 122, end: 129 },
					},
					directives: [],
					loc: { start: 100, end: 129 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 132, end: 140 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "pageSize",
								loc: { start: 141, end: 149 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 151, end: 154 },
								},
								loc: { start: 151, end: 154 },
							},
							directives: [],
							loc: { start: 141, end: 154 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "after",
								loc: { start: 156, end: 161 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "String",
									loc: { start: 163, end: 169 },
								},
								loc: { start: 163, end: 169 },
							},
							directives: [],
							loc: { start: 156, end: 169 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ProductPage",
								loc: { start: 172, end: 183 },
							},
							loc: { start: 172, end: 183 },
						},
						loc: { start: 172, end: 184 },
					},
					directives: [],
					loc: { start: 132, end: 184 },
				},
			],
			loc: { start: 78, end: 186 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "ProductPage",
				loc: { start: 193, end: 204 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "nodes", loc: { start: 209, end: 214 } },
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
										loc: { start: 217, end: 224 },
									},
									loc: { start: 217, end: 224 },
								},
								loc: { start: 217, end: 225 },
							},
							loc: { start: 216, end: 226 },
						},
						loc: { start: 216, end: 227 },
					},
					directives: [],
					loc: { start: 209, end: 227 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "pageInfo",
						loc: { start: 230, end: 238 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "PageInfo",
								loc: { start: 240, end: 248 },
							},
							loc: { start: 240, end: 248 },
						},
						loc: { start: 240, end: 249 },
					},
					directives: [],
					loc: { start: 230, end: 249 },
				},
			],
			loc: { start: 188, end: 251 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Product", loc: { start: 258, end: 265 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 270, end: 272 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "HashID",
								loc: { start: 274, end: 280 },
							},
							loc: { start: 274, end: 280 },
						},
						loc: { start: 274, end: 281 },
					},
					directives: [],
					loc: { start: 270, end: 281 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 284, end: 288 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 290, end: 296 },
							},
							loc: { start: 290, end: 296 },
						},
						loc: { start: 290, end: 297 },
					},
					directives: [],
					loc: { start: 284, end: 297 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "price", loc: { start: 300, end: 305 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Price",
								loc: { start: 307, end: 312 },
							},
							loc: { start: 307, end: 312 },
						},
						loc: { start: 307, end: 313 },
					},
					directives: [],
					loc: { start: 300, end: 313 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "description",
						loc: { start: 316, end: 327 },
					},
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "String",
							loc: { start: 329, end: 335 },
						},
						loc: { start: 329, end: 335 },
					},
					directives: [],
					loc: { start: 316, end: 335 },
				},
			],
			loc: { start: 253, end: 337 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "PageInfo", loc: { start: 344, end: 352 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "hasNextPage",
						loc: { start: 357, end: 368 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Boolean",
								loc: { start: 370, end: 377 },
							},
							loc: { start: 370, end: 377 },
						},
						loc: { start: 370, end: 378 },
					},
					directives: [],
					loc: { start: 357, end: 378 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "nextCursor",
						loc: { start: 381, end: 391 },
					},
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "String",
							loc: { start: 393, end: 399 },
						},
						loc: { start: 393, end: 399 },
					},
					directives: [],
					loc: { start: 381, end: 399 },
				},
			],
			loc: { start: 339, end: 401 },
		},
	],
	loc: { start: 0, end: 402 },
} as unknown as DocumentNode;
