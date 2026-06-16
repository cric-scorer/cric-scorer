import { defineApp } from "convex/server";
import { v } from "convex/values";

const app = defineApp({
	env: {
		SITE_URL: v.string(),
		AUTH_ISSUER_URL: v.string(),
		AUTH_SECRET: v.string(),
		GOOGLE_WEB_CLIENT_ID: v.string(),
		GOOGLE_IOS_CLIENT_ID: v.string(),
		GOOGLE_CLIENT_SECRET: v.string(),
		GOOGLE_ANDROID_CLIENT_ID: v.string(),
	},
});

export default app;
