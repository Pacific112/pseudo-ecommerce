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
			name: {
				kind: "Name",
				value: "ProductVariant",
				loc: { start: 407, end: 421 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 426, end: 428 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "HashID",
								loc: { start: 430, end: 436 },
							},
							loc: { start: 430, end: 436 },
						},
						loc: { start: 430, end: 437 },
					},
					directives: [],
					loc: { start: 426, end: 437 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 440, end: 444 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 446, end: 452 },
							},
							loc: { start: 446, end: 452 },
						},
						loc: { start: 446, end: 453 },
					},
					directives: [],
					loc: { start: 440, end: 453 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "price", loc: { start: 456, end: 461 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Price",
								loc: { start: 463, end: 468 },
							},
							loc: { start: 463, end: 468 },
						},
						loc: { start: 463, end: 469 },
					},
					directives: [],
					loc: { start: 456, end: 469 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "slug", loc: { start: 472, end: 476 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 478, end: 484 },
							},
							loc: { start: 478, end: 484 },
						},
						loc: { start: 478, end: 485 },
					},
					directives: [],
					loc: { start: 472, end: 485 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "description",
						loc: { start: 488, end: 499 },
					},
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "String",
							loc: { start: 501, end: 507 },
						},
						loc: { start: 501, end: 507 },
					},
					directives: [],
					loc: { start: 488, end: 507 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "attributes",
						loc: { start: 510, end: 520 },
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
										loc: { start: 523, end: 539 },
									},
									loc: { start: 523, end: 539 },
								},
								loc: { start: 523, end: 540 },
							},
							loc: { start: 522, end: 541 },
						},
						loc: { start: 522, end: 542 },
					},
					directives: [],
					loc: { start: 510, end: 542 },
				},
			],
			loc: { start: 402, end: 544 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Product", loc: { start: 551, end: 558 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 563, end: 565 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "HashID",
								loc: { start: 567, end: 573 },
							},
							loc: { start: 567, end: 573 },
						},
						loc: { start: 567, end: 574 },
					},
					directives: [],
					loc: { start: 563, end: 574 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 577, end: 581 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 583, end: 589 },
							},
							loc: { start: 583, end: 589 },
						},
						loc: { start: 583, end: 590 },
					},
					directives: [],
					loc: { start: 577, end: 590 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "price", loc: { start: 593, end: 598 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Price",
								loc: { start: 600, end: 605 },
							},
							loc: { start: 600, end: 605 },
						},
						loc: { start: 600, end: 606 },
					},
					directives: [],
					loc: { start: 593, end: 606 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "slug", loc: { start: 609, end: 613 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 615, end: 621 },
							},
							loc: { start: 615, end: 621 },
						},
						loc: { start: 615, end: 622 },
					},
					directives: [],
					loc: { start: 609, end: 622 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "description",
						loc: { start: 625, end: 636 },
					},
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "String",
							loc: { start: 638, end: 644 },
						},
						loc: { start: 638, end: 644 },
					},
					directives: [],
					loc: { start: 625, end: 644 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "attributes",
						loc: { start: 647, end: 657 },
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
										loc: { start: 660, end: 676 },
									},
									loc: { start: 660, end: 676 },
								},
								loc: { start: 660, end: 677 },
							},
							loc: { start: 659, end: 678 },
						},
						loc: { start: 659, end: 679 },
					},
					directives: [],
					loc: { start: 647, end: 679 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "variants",
						loc: { start: 682, end: 690 },
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
										value: "ProductVariant",
										loc: { start: 693, end: 707 },
									},
									loc: { start: 693, end: 707 },
								},
								loc: { start: 693, end: 708 },
							},
							loc: { start: 692, end: 709 },
						},
						loc: { start: 692, end: 710 },
					},
					directives: [],
					loc: { start: 682, end: 710 },
				},
			],
			loc: { start: 546, end: 712 },
		},
	],
	loc: { start: 0, end: 713 },
} as unknown as DocumentNode;
