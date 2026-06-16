import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

import { extraType, inningStatus, matchFormat, matchStatus, orgMemberRole, orgMemberStatus, tossDecision, wicketType } from "./lib/enums";

export default defineSchema({
	users: defineTable({
		authTokenIdentifier: v.string(),
		googleSubject: v.string(),
		email: v.string(),
		name: v.string(),
		avatarUrl: v.optional(v.string()),
		orgId: v.optional(v.id("organizations")),
	})
		.index("by_authTokenIdentifier", ["authTokenIdentifier"])
		.index("by_googleSubject", ["googleSubject"])
		.index("by_email", ["email"]),

	organizations: defineTable({
		name: v.string(),
		code: v.string(),
		adminId: v.id("users"),
	})
		.index("by_adminId", ["adminId"])
		.index("by_code", ["code"]),

	orgMembers: defineTable({
		orgId: v.id("organizations"),
		userId: v.id("users"),
		role: orgMemberRole,
		status: orgMemberStatus,
	})
		.index("by_userId_status", ["userId", "status"])
		.index("by_orgId_status", ["orgId", "status"])
		.index("by_orgId_userId", ["orgId", "userId"])
		.index("by_orgId_role_status", ["orgId", "role", "status"]),

	players: defineTable({
		orgId: v.id("organizations"),
		name: v.string(),
		role: v.optional(v.string()),
		avatarId: v.optional(v.id("_storage")),
		battingStyle: v.optional(v.string()),
		bowlingStyle: v.optional(v.string()),
	}).index("by_orgId", ["orgId"]),

	teams: defineTable({
		orgId: v.id("organizations"),
		name: v.string(),
		shortName: v.string(),
		avatarId: v.optional(v.id("_storage")),
		players: v.array(v.id("players")),
	}).index("by_orgId", ["orgId"]),

	dates: defineTable({
		orgId: v.id("organizations"),
		date: v.string(),
		title: v.optional(v.string()),
	}).index("by_orgId", ["orgId"]),

	matches: defineTable({
		orgId: v.id("organizations"),
		dateId: v.id("dates"),
		matchNumber: v.number(),
		overs: v.number(),
		format: matchFormat,
		status: matchStatus,
		result: v.optional(v.string()),
		tossDecision: v.optional(tossDecision),
		tossWinnerSideId: v.optional(v.id("teams")),
		winnerSideId: v.optional(v.id("teams")),
		playerOfMatchId: v.optional(v.id("players")),
	})
		.index("by_orgId", ["orgId"])
		.index("by_orgId_dateId", ["orgId", "dateId"])
		.index("by_orgId_status", ["orgId", "status"]),

	innings: defineTable({
		orgId: v.id("organizations"),
		dateId: v.id("dates"),
		matchId: v.id("matches"),
		inningsNumber: v.number(),
		status: inningStatus,
		battingSideId: v.id("teams"),
		bowlingSideId: v.id("teams"),
		strikerId: v.optional(v.id("players")),
		nonStrikerId: v.optional(v.id("players")),
		bowlerId: v.optional(v.id("players")),
		isAllOut: v.boolean(),
		batters: v.array(v.id("players")),
		bowlers: v.array(v.id("players")),
	})
		.index("by_orgId_matchId", ["orgId", "matchId"])
		.index("by_orgId_matchId_status", ["orgId", "matchId", "status"]),

	balls: defineTable({
		orgId: v.id("organizations"),
		dateId: v.id("dates"),
		matchId: v.id("matches"),
		inningId: v.id("innings"),
		ballSequenece: v.number(),
		batterId: v.id("players"),
		nonStrikerId: v.id("players"),
		bowlerId: v.id("players"),
		fielderIds: v.array(v.id("players")),
		dismissedId: v.optional(v.id("players")),
		batterRuns: v.number(),
		extraRuns: v.number(),
		totalRuns: v.number(),
		isLegalBall: v.boolean(),
		isDotBall: v.boolean(),
		wicket: v.optional(wicketType),
		extra: v.optional(extraType),
		overNumber: v.number(),
		ballNumberInOver: v.number(),
	})
		.index("by_orgId_matchId", ["orgId", "matchId"])
		.index("by_orgId_inningId", ["orgId", "inningId"])
		.index("by_orgId_dateId", ["orgId", "dateId"])
		.index("by_orgId_batterId", ["orgId", "batterId"])
		.index("by_orgId_bowlerId", ["orgId", "bowlerId"])
		.index("by_inningId_ballSequenece", ["inningId", "ballSequenece"]),
});
