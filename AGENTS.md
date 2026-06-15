# Cric Scorer

Cric Scorer is a mobile-first cricket scoring app for our weekly gully cricket matches. The motive is to score once from the phone, keep ball-by-ball history in Convex, and let friends see live scores and stats without manual double entry.

## Direction

- Native is the main product right now. Most requested product work should happen in `apps/native`.
- Do not add web app code unless the user explicitly asks for web work.
- Web is read-only against the same Convex backend. It exists for convenience and future viewing.
- Convex is the backend and source of truth.
- Scoring should be delivery-based: store balls/events, then derive scorecards and stats.
- This is for gully cricket, so support flexible local rules instead of assuming only international cricket behavior.

## Access Model

- Auth uses phone number login through Better Auth with the organization plugin.
- Each organization represents one cricket circle.
- Only one organization member should be admin.
- Only the admin has write access.
- Other organization members are read-only.
- Admin can create matches, add balls, manage players/teams, and perform future write actions.

## More Detail

Read [docs/TECHSTACK.md](docs/TECHSTACK.md) before making stack decisions.
Read [docs/FLOW.md](docs/FLOW.md) before making product-flow or UX decisions.
