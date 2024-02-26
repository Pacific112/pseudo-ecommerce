import type { CodegenConfig } from "@graphql-codegen/cli";
import { defineConfig } from "@eddeee888/gcg-typescript-resolver-files";

export default {
	schema: "**/schema.graphql",
	generates: {
		"src/graphql": defineConfig({
			typesPluginsConfig: {
				useTypeImports: true,
			},
		}),
	},
} satisfies CodegenConfig;
