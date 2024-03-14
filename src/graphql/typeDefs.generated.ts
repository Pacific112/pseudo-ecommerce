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
						value: "categories",
						loc: { start: 164, end: 174 },
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
										value: "Category",
										loc: { start: 177, end: 185 },
									},
									loc: { start: 177, end: 185 },
								},
								loc: { start: 177, end: 186 },
							},
							loc: { start: 176, end: 187 },
						},
						loc: { start: 176, end: 188 },
					},
					directives: [],
					loc: { start: 164, end: 188 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "productBySlug",
						loc: { start: 191, end: 204 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "slug",
								loc: { start: 205, end: 209 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "String",
										loc: { start: 211, end: 217 },
									},
									loc: { start: 211, end: 217 },
								},
								loc: { start: 211, end: 218 },
							},
							directives: [],
							loc: { start: 205, end: 218 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Product",
								loc: { start: 221, end: 228 },
							},
							loc: { start: 221, end: 228 },
						},
						loc: { start: 221, end: 229 },
					},
					directives: [],
					loc: { start: 191, end: 229 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 232, end: 240 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "pageSize",
								loc: { start: 241, end: 249 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 251, end: 254 },
								},
								loc: { start: 251, end: 254 },
							},
							directives: [],
							loc: { start: 241, end: 254 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "after",
								loc: { start: 256, end: 261 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "String",
									loc: { start: 263, end: 269 },
								},
								loc: { start: 263, end: 269 },
							},
							directives: [],
							loc: { start: 256, end: 269 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ProductPage",
								loc: { start: 272, end: 283 },
							},
							loc: { start: 272, end: 283 },
						},
						loc: { start: 272, end: 284 },
					},
					directives: [],
					loc: { start: 232, end: 284 },
				},
			],
			loc: { start: 142, end: 286 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Category", loc: { start: 293, end: 301 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 306, end: 308 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "HashID",
								loc: { start: 310, end: 316 },
							},
							loc: { start: 310, end: 316 },
						},
						loc: { start: 310, end: 317 },
					},
					directives: [],
					loc: { start: 306, end: 317 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 320, end: 324 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 326, end: 332 },
							},
							loc: { start: 326, end: 332 },
						},
						loc: { start: 326, end: 333 },
					},
					directives: [],
					loc: { start: 320, end: 333 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "slug", loc: { start: 336, end: 340 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 342, end: 348 },
							},
							loc: { start: 342, end: 348 },
						},
						loc: { start: 342, end: 349 },
					},
					directives: [],
					loc: { start: 336, end: 349 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "categories",
						loc: { start: 352, end: 362 },
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
										value: "Category",
										loc: { start: 365, end: 373 },
									},
									loc: { start: 365, end: 373 },
								},
								loc: { start: 365, end: 374 },
							},
							loc: { start: 364, end: 375 },
						},
						loc: { start: 364, end: 376 },
					},
					directives: [],
					loc: { start: 352, end: 376 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "parent",
						loc: { start: 379, end: 385 },
					},
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Category",
							loc: { start: 387, end: 395 },
						},
						loc: { start: 387, end: 395 },
					},
					directives: [],
					loc: { start: 379, end: 395 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 398, end: 406 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "pageSize",
								loc: { start: 407, end: 415 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 417, end: 420 },
								},
								loc: { start: 417, end: 420 },
							},
							directives: [],
							loc: { start: 407, end: 420 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "after",
								loc: { start: 422, end: 427 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "String",
									loc: { start: 429, end: 435 },
								},
								loc: { start: 429, end: 435 },
							},
							directives: [],
							loc: { start: 422, end: 435 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "ProductPage",
							loc: { start: 438, end: 449 },
						},
						loc: { start: 438, end: 449 },
					},
					directives: [],
					loc: { start: 398, end: 449 },
				},
			],
			loc: { start: 288, end: 451 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "ProductPage",
				loc: { start: 458, end: 469 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "nodes", loc: { start: 474, end: 479 } },
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
										loc: { start: 482, end: 489 },
									},
									loc: { start: 482, end: 489 },
								},
								loc: { start: 482, end: 490 },
							},
							loc: { start: 481, end: 491 },
						},
						loc: { start: 481, end: 492 },
					},
					directives: [],
					loc: { start: 474, end: 492 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "pageInfo",
						loc: { start: 495, end: 503 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "PageInfo",
								loc: { start: 505, end: 513 },
							},
							loc: { start: 505, end: 513 },
						},
						loc: { start: 505, end: 514 },
					},
					directives: [],
					loc: { start: 495, end: 514 },
				},
			],
			loc: { start: 453, end: 516 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "ProductAttribute",
				loc: { start: 523, end: 539 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 544, end: 548 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 550, end: 556 },
							},
							loc: { start: 550, end: 556 },
						},
						loc: { start: 550, end: 557 },
					},
					directives: [],
					loc: { start: 544, end: 557 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "value", loc: { start: 560, end: 565 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 567, end: 573 },
							},
							loc: { start: 567, end: 573 },
						},
						loc: { start: 567, end: 574 },
					},
					directives: [],
					loc: { start: 560, end: 574 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "type", loc: { start: 577, end: 581 } },
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
			],
			loc: { start: 518, end: 592 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "ProductVariant",
				loc: { start: 599, end: 613 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 618, end: 620 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "HashID",
								loc: { start: 622, end: 628 },
							},
							loc: { start: 622, end: 628 },
						},
						loc: { start: 622, end: 629 },
					},
					directives: [],
					loc: { start: 618, end: 629 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 632, end: 636 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 638, end: 644 },
							},
							loc: { start: 638, end: 644 },
						},
						loc: { start: 638, end: 645 },
					},
					directives: [],
					loc: { start: 632, end: 645 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "price", loc: { start: 648, end: 653 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Price",
								loc: { start: 655, end: 660 },
							},
							loc: { start: 655, end: 660 },
						},
						loc: { start: 655, end: 661 },
					},
					directives: [],
					loc: { start: 648, end: 661 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "slug", loc: { start: 664, end: 668 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 670, end: 676 },
							},
							loc: { start: 670, end: 676 },
						},
						loc: { start: 670, end: 677 },
					},
					directives: [],
					loc: { start: 664, end: 677 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "description",
						loc: { start: 680, end: 691 },
					},
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "String",
							loc: { start: 693, end: 699 },
						},
						loc: { start: 693, end: 699 },
					},
					directives: [],
					loc: { start: 680, end: 699 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "attributes",
						loc: { start: 702, end: 712 },
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
										loc: { start: 715, end: 731 },
									},
									loc: { start: 715, end: 731 },
								},
								loc: { start: 715, end: 732 },
							},
							loc: { start: 714, end: 733 },
						},
						loc: { start: 714, end: 734 },
					},
					directives: [],
					loc: { start: 702, end: 734 },
				},
			],
			loc: { start: 594, end: 736 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Product", loc: { start: 743, end: 750 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 755, end: 757 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "HashID",
								loc: { start: 759, end: 765 },
							},
							loc: { start: 759, end: 765 },
						},
						loc: { start: 759, end: 766 },
					},
					directives: [],
					loc: { start: 755, end: 766 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 769, end: 773 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 775, end: 781 },
							},
							loc: { start: 775, end: 781 },
						},
						loc: { start: 775, end: 782 },
					},
					directives: [],
					loc: { start: 769, end: 782 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "price", loc: { start: 785, end: 790 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Price",
								loc: { start: 792, end: 797 },
							},
							loc: { start: 792, end: 797 },
						},
						loc: { start: 792, end: 798 },
					},
					directives: [],
					loc: { start: 785, end: 798 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "slug", loc: { start: 801, end: 805 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 807, end: 813 },
							},
							loc: { start: 807, end: 813 },
						},
						loc: { start: 807, end: 814 },
					},
					directives: [],
					loc: { start: 801, end: 814 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "description",
						loc: { start: 817, end: 828 },
					},
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "String",
							loc: { start: 830, end: 836 },
						},
						loc: { start: 830, end: 836 },
					},
					directives: [],
					loc: { start: 817, end: 836 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "attributes",
						loc: { start: 839, end: 849 },
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
										loc: { start: 852, end: 868 },
									},
									loc: { start: 852, end: 868 },
								},
								loc: { start: 852, end: 869 },
							},
							loc: { start: 851, end: 870 },
						},
						loc: { start: 851, end: 871 },
					},
					directives: [],
					loc: { start: 839, end: 871 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "variants",
						loc: { start: 874, end: 882 },
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
										loc: { start: 885, end: 899 },
									},
									loc: { start: 885, end: 899 },
								},
								loc: { start: 885, end: 900 },
							},
							loc: { start: 884, end: 901 },
						},
						loc: { start: 884, end: 902 },
					},
					directives: [],
					loc: { start: 874, end: 902 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "category",
						loc: { start: 905, end: 913 },
					},
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Category",
							loc: { start: 915, end: 923 },
						},
						loc: { start: 915, end: 923 },
					},
					directives: [],
					loc: { start: 905, end: 923 },
				},
			],
			loc: { start: 738, end: 925 },
		},
	],
	loc: { start: 0, end: 926 },
} as unknown as DocumentNode;
