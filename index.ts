import { handleHome } from "./home.ts";

const server = Bun.serve({
	port: 3000,
	fetch() {
		const body = handleHome();
		return new Response(body);
	},
});

console.log(`Server running at http://localhost:${server.port}/`);
