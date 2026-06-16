import { v } from "convex/values";

export const orgMemberRole = v.union(v.literal("admin"), v.literal("member"));

export const orgMemberStatus = v.union(v.literal("active"), v.literal("invited"), v.literal("removed"));

export const matchStatus = v.union(v.literal("live"), v.literal("completed"), v.literal("abandoned"));

export const matchFormat = v.union(v.literal("limited"), v.literal("test"));

export const tossDecision = v.union(v.literal("bat"), v.literal("bowl"));

export const inningStatus = v.union(
	v.literal("pending"),
	v.literal("inProgress"),
	v.literal("completed"),
	v.literal("skipped"),
	v.literal("declared"),
);

export const wicketType = v.union(
	v.literal("bowled"),
	v.literal("caught"),
	v.literal("caughtBehind"),
	v.literal("caughtAndBowled"),
	v.literal("lbw"),
	v.literal("runOut"),
	v.literal("stumped"),
	v.literal("hitWicket"),
	v.literal("retiredHurt"),
	v.literal("retiredOut"),
	v.literal("other"),
);

export const extraType = v.union(v.literal("wides"), v.literal("noBalls"), v.literal("byes"), v.literal("legByes"), v.literal("penalty"));
