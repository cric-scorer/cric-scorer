# App Flow

This document describes how Cric Scorer should behave. It is product-flow guidance, not a tech-stack reference.

## Main Direction

Cric Scorer is mobile-first. Build product features in `apps/native` unless the user explicitly asks for web work.

The web app should not receive new product code for now. It will eventually read from the same Convex backend for convenience, live viewing, and stats, but native is the main app.

Convex is the single source of truth for both native and web. The main reason for using Convex is reactivity: when the admin records a ball, viewers should see the match update live.

## Access Model

Every user belongs to an organization. Each organization is one cricket circle.

Only admins can write data, and only inside their own organization.

Other organization users have read-only access to their organization data.

There should be only one admin per organization. Do not build multi-admin or multi-scorer write behavior unless explicitly requested.

Admin write access includes:

- creating matches
- deleting matches
- creating players
- creating teams
- selecting teams and players for a match
- adding balls/deliveries
- correcting or undoing score actions
- adding future organization data we introduce later

Read-only users can view:

- matches
- live scores
- players
- teams
- scorecards
- commentary
- over details
- stats

## Authentication And Organization Onboarding

Use custom Google login through the Convex auth integration. Better Auth is not part of the current auth direction.

Current UI state:

- `/login` is the only public screen.
- `/` temporarily redirects to `/login`.

After Google login, Convex should resolve the authenticated identity through `ctx.auth.getUserIdentity()` and map it to an app user record. Do not trust client-supplied user ids for authorization.

After signup or first login, show the user two choices:

1. Create an organization as admin.
2. Join an existing organization.

If the user creates an organization:

- create the organization
- make that user the single admin
- generate or show an organization join code
- allow the admin to share that code with friends

If the user joins an organization:

- ask for the organization code
- validate the code
- add the user as a read-only member

Admins can add or remove users from their organization.

## Auth Users And Cricket Players

Auth users and cricket players are different concepts.

Auth users are people who log in to the app.

Players are cricket records in the database. They are not linked to auth user profiles.

This is important because many players may never install the app, and some read-only users may not be cricket players.

## Players

Players belong to an organization.

Admins can create players from the players area.

Admins can also create a player during match creation if the needed player does not already exist.

When selecting players for a match, the admin should choose from the organization players table. Avoid free-text match-only players unless we explicitly decide to support that later.

## Teams

Teams are traditional cricket teams.

A team has players in it.

Teams belong to an organization.

Admins can create and manage teams.

During match creation, admin can select existing teams and their players.

For gully cricket, team membership should stay flexible. A match can use team players, but the admin may still add another existing player during match setup.

## Matches

Admins can create and delete matches.

A match belongs to one organization.

A match should support:

- selected teams
- selected players
- innings setup
- over limits where needed
- match status
- live scoring
- match result
- player of the match

Match data should be built from ball-by-ball deliveries, not manual totals.

## Admin Match Screen

The admin match screen has everything read-only users see, plus an additional admin scoring area.

The admin scoring area should appear as a separate tab or clearly separated board inside the match screen.

The scoring board should let the admin quickly add:

- runs
- dots
- fours
- sixes
- wides
- no-balls
- byes
- leg byes
- wickets
- striker changes
- bowler changes
- over completion
- undo/correction actions

The scoring board should be optimized for fast use during a real match.

## Read-Only Match Screen

For non-admin users, the match screen should feel like a traditional live cricket match screen.

It should show:

- match title/status
- teams
- current score
- wickets
- overs
- current run rate
- required runs and required run rate when chasing
- current batters
- current bowler
- recent balls
- innings summary
- match result when completed

Use clear match tabs so viewers can move between live score, scorecard, over details, and commentary.

## Match Screen Tabs

Expected tabs:

- `Live`: current score, current batters, current bowler, recent balls, run rates, and match situation.
- `Scorecard`: batting and bowling scorecard for each innings.
- `Overs`: over-by-over breakdown with balls in each over.
- `Commentary`: ball-by-ball text commentary and key events.
- `Info`: match setup, teams, toss, venue/date if available, and result summary.

For admin users, add:

- `Scoring`: admin-only scoring board.

The match screen should prioritize the information people want during a live match:

- score first
- batters and bowler next
- recent balls
- chase equation when relevant
- scorecard and commentary one tap away

## Commentary And Over Details

Commentary should be generated from delivery events.

Examples of commentary content:

- runs scored
- dot ball
- boundary
- six
- wicket
- wide/no-ball/bye/leg-bye
- over summary
- batter milestone if we add milestones later

Over details should group deliveries by over and show each ball clearly.

## Stats

Stats are important and should be broad.

Show player stats for:

- batting
- bowling
- fielding
- player of the match

Show team stats too.

Stats should support:

- all-time view
- date filter
- match-day view

Date filtering matters because players often play three to four matches in a single day. Users should be able to see both career stats and stats for one date/match day.

## Source Of Truth

Store deliveries as the main match data.

Derive from deliveries:

- totals
- scorecards
- partnerships
- current score
- batting stats
- bowling stats
- fielding stats
- team stats
- player of the match stats
- commentary
- over details

Do not build flows where admins manually maintain separate totals that can drift from deliveries.

## Future Notes

We will add more detail as the app evolves. If new behavior is decided, update this file so future agents do not need the same explanation again.
