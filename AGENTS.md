# Cric Scorer

Cric Scorer is a mobile-first cricket scoring app for gully cricket matches. The motive is to score once from the phone, keep ball-by-ball history in Convex, and let friends see live scores and stats in real time.

## Direction

- Native is the main product right now. All requested product work should happen in `apps/native`.
- Do not add web app code unless the user explicitly asks for web work.
- Web is read-only against the same Convex backend. It exists for convenience and future viewing.
- Convex is the backend and source of truth.
- Scoring should be delivery-based: store balls/events, then derive scorecards and stats.
- This is for gully cricket, so support flexible local rules instead of assuming only international cricket behavior.

## Access Model

- Auth is custom Google-only auth through Convex JWT/OIDC. Do not reintroduce Better Auth unless the user explicitly asks for it.
- Each organization represents one cricket circle.
- Only one organization member should be admin.
- Only the admin has write access.
- Other organization members are read-only.
- Admin can create matches, add balls, manage players/teams, and perform future write actions.

## Debugging

- Use `bun run dev:log` when running the app for debugging.
- `bun run dev:log` writes the combined development output to `dev.log` in the repository root.
- When the user asks to check app errors, inspect `dev.log` first and focus on real failures before warnings.

## Icons

- Native custom SVG icons live in `apps/native/components/ui/icons.tsx`.
- Use Lucide icons for both native and web wherever a suitable Lucide icon exists.
- Add a custom native SVG icon only when Lucide does not provide the needed brand or product mark.

## More Detail

Read [README.md](README.md) before making stack or project-structure decisions.
Read [docs/FLOW.md](docs/FLOW.md) before making product-flow or UX decisions.
