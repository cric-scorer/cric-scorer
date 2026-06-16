import { v } from "convex/values";

import { query } from "./_generated/server";

export const getCurrentUser = query({
	args: {},
	returns: v.union(
		v.null(),
		v.object({
			_id: v.id("users"),
			_creationTime: v.number(),
			authTokenIdentifier: v.string(),
			googleSubject: v.optional(v.string()),
			email: v.optional(v.string()),
			name: v.optional(v.string()),
			avatarUrl: v.optional(v.string()),
			orgId: v.optional(v.id("organizations")),
		}),
	),
	handler: async (ctx) => {
		const identity = await ctx.auth.getUserIdentity();
		if (!identity) {
			return null;
		}

		const user = await ctx.db
			.query("users")
			.withIndex("by_authTokenIdentifier", (q) => q.eq("authTokenIdentifier", identity.tokenIdentifier))
			.unique();

		if (!user) {
			return null;
		}

		return {
			_id: user._id,
			_creationTime: user._creationTime,
			authTokenIdentifier: user.authTokenIdentifier,
			googleSubject: user.googleSubject,
			email: user.email,
			name: user.name,
			avatarUrl: user.avatarUrl,
			orgId: user.orgId,
		};
	},
});

export const getCurrentIdentity = query({
	args: {},
	returns: v.union(
		v.null(),
		v.object({
			subject: v.string(),
			tokenIdentifier: v.string(),
			issuer: v.string(),
			name: v.optional(v.string()),
			email: v.optional(v.string()),
			emailVerified: v.optional(v.boolean()),
			pictureUrl: v.optional(v.string()),
		}),
	),
	handler: async (ctx) => {
		const identity = await ctx.auth.getUserIdentity();
		if (!identity) {
			return null;
		}

		return {
			subject: identity.subject,
			tokenIdentifier: identity.tokenIdentifier,
			issuer: identity.issuer,
			name: identity.name,
			email: identity.email,
			emailVerified: identity.emailVerified,
			pictureUrl: identity.pictureUrl,
		};
	},
});
