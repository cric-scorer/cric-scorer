import type { AuthConfig } from "convex/server";

import { env } from "./_generated/server";

export default {
	providers: [
		{
			domain: env.AUTH_ISSUER_URL,
			applicationID: env.GOOGLE_WEB_CLIENT_ID,
		},
	],
} satisfies AuthConfig;
