import { GraphQLScalarType } from "graphql";
import Hashids from "hashids";

const hashIds = new Hashids("ansdjasnjdknasjkdnasjkda", 5);
export const HashID = new GraphQLScalarType({
	name: "HashID",
	description: "HashID description",
	serialize: (value) => {
		if (typeof value === "number") {
			return hashIds.encode(value);
		}

		throw new Error(`Cannot serialize value ${value} to HashID`);
	},
	parseValue: (value) => {
		if (typeof value === "string") {
			return hashIds.decode(value);
		}

		throw new Error(`Cannot parse value ${value} to HashID`);
	},
	parseLiteral: (ast) => {
		if (ast.kind === "StringValue") {
			return hashIds.decode(ast.value);
		}

		throw new Error(`Cannot parse value of kind ${ast.kind} to HashID`);
	},
});
