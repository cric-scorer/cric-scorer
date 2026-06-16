# Cric Scorer

Cric Scorer is a mobile-first cricket scoring app for gully cricket. The goal is to score a match once from the phone, store ball-by-ball data in Convex, and let friends follow live scores and stats without manually copying data into another app.

The app is built for local cricket first. It should support flexible match rules, players joining or leaving mid-match, players appearing on both sides, and other gully cricket realities.

## Current Focus

- Native app first.
- Convex is the single source of truth.
- Web is read-only and not the current development focus.
- Auth is custom Google-only auth through Convex JWT/OIDC.
- Admin users can write data for their organization.
- Non-admin organization members are read-only.
- Players are cricket records, not auth users.

## Docs

- [AGENTS.md](AGENTS.md): short context loaded for agents.
- [docs/FLOW.md](docs/FLOW.md): intended product behavior and app flow.

## Project Structure

```text
cric-scorer/
├── apps/
│   ├── native/      # Main mobile app, React Native + Expo
│   └── web/         # Read-only web app, React + TanStack Router
├── packages/
│   ├── backend/     # Convex schema, functions, auth config
│   ├── config/      # Shared TypeScript/config package
│   ├── env/         # Shared environment validation
│   └── ui/          # Shared web UI primitives and styles
└── docs/
    └── FLOW.md      # Product behavior and app-flow guidance
```

## Tech Stack

Workspace:

- Better-T-Stack monorepo
- Bun package manager
- Turborepo workspace runner
- TypeScript
- Prettier

Native app: `apps/native`

- Expo SDK 54
- React Native
- Expo Router
- Convex client with `ConvexProviderWithAuth`
- Custom Google auth through Convex JWT/OIDC
- Expo Secure Store
- Uniwind and Tailwind CSS
- HeroUI Native
- React Native Gesture Handler
- React Native Reanimated
- React Native Screens
- React Native SVG
- Outfit via `@expo-google-fonts/outfit`

Current native route baseline:

- `/login`: public auth UI with cricket background and Google button.
- `/`: temporary redirect to `/login`.

Web app: `apps/web`

- React
- TanStack Router
- Vite
- TypeScript
- Tailwind CSS
- Convex client
- Shared UI package from `packages/ui`

Backend: `packages/backend`

- Convex functions and schema in `packages/backend/convex`
- Convex JWT/OIDC auth config in `packages/backend/convex/auth.config.ts`
- Custom auth tables for users, organizations, and memberships
- Zod where runtime validation is needed

## Auth Model

- Auth is Google-only for now.
- Auth is custom app auth, not Better Auth.
- Convex validates auth tokens through `auth.config.ts`.
- Convex functions must derive the current user from `ctx.auth.getUserIdentity()`.
- App user, organization, and membership records are stored in Convex.
- Each organization is one cricket circle.
- Only one organization member should be admin.
- Admin has write access.
- Other members are read-only.

## UI And Icons

- Native UI lives in `apps/native` and should not assume web components work there.
- Shared web UI primitives live in `packages/ui`.
- Native custom SVG icons live in `apps/native/components/ui/icons.tsx`.
- Use Lucide icons for both native and web wherever a suitable Lucide icon exists.
- Add custom SVG icons only for marks Lucide does not provide, such as the Google logo.

## Getting Started

First, install the dependencies:

```bash
bun install
```

## Convex Setup

This project uses Convex as the backend. Set up Convex before running the app:

```bash
bun run dev:setup
```

Follow the prompts to create a new Convex project and connect it to your application.

Copy environment variables from `packages/backend/.env.local` to `apps/*/.env`.

Then, run the development server:

```bash
bun run dev
```

For debugging, prefer the logging script:

```bash
bun run dev:log
```

This writes combined native, web, and backend development output to `dev.log` in the repository root. Share or inspect that file when checking runtime errors.

## Available Scripts

- `bun run dev`: Start all applications in development mode
- `bun run dev:log`: Start all applications and write combined logs to `dev.log`
- `bun run build`: Build all applications
- `bun run dev:native`: Start the React Native/Expo development server
- `bun run dev:web`: Start only the web application
- `bun run dev:server`: Start only the Convex backend development server
- `bun run dev:setup`: Setup and configure your Convex project
- `bun run check-types`: Check TypeScript types across all apps
