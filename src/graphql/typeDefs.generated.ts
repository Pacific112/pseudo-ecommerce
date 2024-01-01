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
			],
			loc: { start: 63, end: 112 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Product", loc: { start: 119, end: 126 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 131, end: 133 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 135, end: 137 },
							},
							loc: { start: 135, end: 137 },
						},
						loc: { start: 135, end: 138 },
					},
					directives: [],
					loc: { start: 131, end: 138 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 141, end: 145 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 147, end: 153 },
							},
							loc: { start: 147, end: 153 },
						},
						loc: { start: 147, end: 154 },
					},
					directives: [],
					loc: { start: 141, end: 154 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "price", loc: { start: 157, end: 162 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Price",
								loc: { start: 164, end: 169 },
							},
							loc: { start: 164, end: 169 },
						},
						loc: { start: 164, end: 170 },
					},
					directives: [],
					loc: { start: 157, end: 170 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "description",
						loc: { start: 173, end: 184 },
					},
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "String",
							loc: { start: 186, end: 192 },
						},
						loc: { start: 186, end: 192 },
					},
					directives: [],
					loc: { start: 173, end: 192 },
				},
			],
			loc: { start: 114, end: 194 },
		},
	],
	loc: { start: 0, end: 195 },
} as unknown as DocumentNode;
