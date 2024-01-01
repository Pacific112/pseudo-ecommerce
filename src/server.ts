import { createSchema, createYoga } from "graphql-yoga";
import { typeDefs } from "./graphql/typeDefs.generated.ts";
import { resolvers } from "./graphql/resolvers.generated.ts";

const yoga = createYoga({ schema: createSchema({ typeDefs, resolvers }) });
const server = Bun.serve({
	port: 4000,
	fetch: yoga,
});

console.log(`Server listening on port ${server.port}`);
