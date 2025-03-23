import { drizzle } from "drizzle-orm/libsql";
import nodeFetch from "node-fetch";

const connectionURL = process.env.TURSO_CONNECTION_URL;
const authToken = process.env.TURSO_AUTH_TOKEN;

if (!connectionURL) {
	throw new Error("TURSO_CONNECTION_URL is not defined");
}

export const db = drizzle({
	connection: {
		url: connectionURL,
		authToken: authToken,
		fetch: async (request: Request) => {
			const decoder = new TextDecoder();
			let body = "{}";
			// biome-ignore lint/style/noNonNullAssertion: don't touch if it works
			for await (const chunk of request.body!) {
				body = decoder.decode(chunk);
			}
			return nodeFetch(request.url, {
				method: "post",
				headers: Object.fromEntries([...request.headers.entries()]),
				body,
			});
		},
	},
	logger: true,
});
