import type { DocumentNode } from "graphql";
export const typeDefs = {
	kind: "Document",
	definitions: [
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Query", loc: { start: 5, end: 10 } },
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 0, end: 10 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Price", loc: { start: 17, end: 22 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "cents", loc: { start: 27, end: 32 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Float",
								loc: { start: 34, end: 39 },
							},
							loc: { start: 34, end: 39 },
						},
						loc: { start: 34, end: 40 },
					},
					directives: [],
					loc: { start: 27, end: 40 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "currency",
						loc: { start: 43, end: 51 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 53, end: 59 },
							},
							loc: { start: 53, end: 59 },
						},
						loc: { start: 53, end: 60 },
					},
					directives: [],
					loc: { start: 43, end: 60 },
				},
			],
			loc: { start: 12, end: 62 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 75, end: 80 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "product", loc: { start: 85, end: 92 } },
					arguments: [
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "id", loc: { start: 93, end: 95 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 97, end: 99 },
									},
									loc: { start: 97, end: 99 },
								},
								loc: { start: 97, end: 100 },
							},
							directives: [],
							loc: { start: 93, end: 100 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Product",
							loc: { start: 103, end: 110 },
						},
						loc: { start: 103, end: 110 },
					},
					directives: [],
					loc: { start: 85, end: 110 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 113, end: 121 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "pageSize",
								loc: { start: 122, end: 130 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 132, end: 135 },
								},
								loc: { start: 132, end: 135 },
							},
							directives: [],
							loc: { start: 122, end: 135 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "after",
								loc: { start: 137, end: 142 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "String",
									loc: { start: 144, end: 150 },
								},
								loc: { start: 144, end: 150 },
							},
							directives: [],
							loc: { start: 137, end: 150 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ProductPage",
								loc: { start: 153, end: 164 },
							},
							loc: { start: 153, end: 164 },
						},
						loc: { start: 153, end: 165 },
					},
					directives: [],
					loc: { start: 113, end: 165 },
				},
			],
			loc: { start: 63, end: 167 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "ProductPage",
				loc: { start: 174, end: 185 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "nodes", loc: { start: 190, end: 195 } },
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
										loc: { start: 198, end: 205 },
									},
									loc: { start: 198, end: 205 },
								},
								loc: { start: 198, end: 206 },
							},
							loc: { start: 197, end: 207 },
						},
						loc: { start: 197, end: 208 },
					},
					directives: [],
					loc: { start: 190, end: 208 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "pageInfo",
						loc: { start: 211, end: 219 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "PageInfo",
								loc: { start: 221, end: 229 },
							},
							loc: { start: 221, end: 229 },
						},
						loc: { start: 221, end: 230 },
					},
					directives: [],
					loc: { start: 211, end: 230 },
				},
			],
			loc: { start: 169, end: 232 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Product", loc: { start: 239, end: 246 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 251, end: 253 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 255, end: 257 },
							},
							loc: { start: 255, end: 257 },
						},
						loc: { start: 255, end: 258 },
					},
					directives: [],
					loc: { start: 251, end: 258 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 261, end: 265 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 267, end: 273 },
							},
							loc: { start: 267, end: 273 },
						},
						loc: { start: 267, end: 274 },
					},
					directives: [],
					loc: { start: 261, end: 274 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "price", loc: { start: 277, end: 282 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Price",
								loc: { start: 284, end: 289 },
							},
							loc: { start: 284, end: 289 },
						},
						loc: { start: 284, end: 290 },
					},
					directives: [],
					loc: { start: 277, end: 290 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "description",
						loc: { start: 293, end: 304 },
					},
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "String",
							loc: { start: 306, end: 312 },
						},
						loc: { start: 306, end: 312 },
					},
					directives: [],
					loc: { start: 293, end: 312 },
				},
			],
			loc: { start: 234, end: 314 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "PageInfo", loc: { start: 321, end: 329 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "hasNextPage",
						loc: { start: 334, end: 345 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Boolean",
								loc: { start: 347, end: 354 },
							},
							loc: { start: 347, end: 354 },
						},
						loc: { start: 347, end: 355 },
					},
					directives: [],
					loc: { start: 334, end: 355 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "nextCursor",
						loc: { start: 358, end: 368 },
					},
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "String",
							loc: { start: 370, end: 376 },
						},
						loc: { start: 370, end: 376 },
					},
					directives: [],
					loc: { start: 358, end: 376 },
				},
			],
			loc: { start: 316, end: 378 },
		},
	],
	loc: { start: 0, end: 379 },
} as unknown as DocumentNode;
