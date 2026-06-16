import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
	clientPrefix: "EXPO_PUBLIC_",
	client: {
		EXPO_PUBLIC_CONVEX_URL: z.url(),
		EXPO_PUBLIC_CONVEX_SITE_URL: z.url(),
		EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID: z.string().min(72),
		EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID: z.string().min(72),
		EXPO_PUBLIC_GOOGLE_ANDROID_CLIENT_ID: z.string().min(72),
	},
	runtimeEnv: process.env,
	emptyStringAsUndefined: true,
});
