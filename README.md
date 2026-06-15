# cric-scorer

Cric Scorer is a mobile-first cricket scoring app for weekly gully cricket. The goal is to score a match once from the phone, store ball-by-ball data in Convex, and let friends follow live scores and stats without manually copying data into another app.

The app is built for local cricket first. It should support flexible match rules, players joining or leaving mid-match, players appearing on both sides, and other gully cricket realities.

## Current Focus

- Native app first.
- Convex is the single source of truth.
- Web is read-only and not the current development focus.
- Admin users can write data for their organization.
- Non-admin organization members are read-only.
- Players are cricket records, not auth users.

## Docs

- [AGENTS.md](AGENTS.md): short context loaded for agents.
- [docs/TECHSTACK.md](docs/TECHSTACK.md): stack and package layout.
- [docs/FLOW.md](docs/FLOW.md): intended product behavior and app flow.

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

Use the Expo Go app to run the mobile application. The web app can run locally too, but product work should stay native-first unless explicitly requested.

## Project Structure

```
cric-scorer/
├── apps/
│   ├── web/         # Frontend application (React + TanStack Router)
│   ├── native/      # Mobile application (React Native, Expo)
├── packages/
│   ├── ui/          # Shared shadcn/ui components and styles
│   ├── backend/     # Convex backend functions and schema
```

## Available Scripts

- `bun run dev`: Start all applications in development mode
- `bun run build`: Build all applications
- `bun run dev:web`: Start only the web application
- `bun run dev:setup`: Setup and configure your Convex project
- `bun run check-types`: Check TypeScript types across all apps
- `bun run dev:native`: Start the React Native/Expo development server
