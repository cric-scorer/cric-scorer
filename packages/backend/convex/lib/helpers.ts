import { ConvexError } from "convex/values";

import type { ActionCtx, MutationCtx, QueryCtx } from "../_generated/server";

export async function validateUser(ctx: QueryCtx | MutationCtx | ActionCtx) {
	const identity = await ctx.auth.getUserIdentity();
	if (!identity) throw new ConvexError({ code: "UNAUTHENTICATED" });

	return {
		subject: identity.subject,
		name: identity.name,
		email: identity.email,
		emailVerified: identity.emailVerified,
		sessionId: identity.sessionId,
		tokenIdentifier: identity.tokenIdentifier,
		createdAt: identity.createdAt,
		updatedAt: identity.updatedAt,
		issuer: identity.issuer
	};
}
