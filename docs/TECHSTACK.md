# Tech Stack

## Repository Layout

- `apps/native`: Expo React Native app. This is the main app.
- `apps/web`: React web app. Read-only for now and not the active build focus.
- `packages/backend`: Convex backend, schema, functions, and auth integration.
- `packages/ui`: shared UI primitives and styles.
- `packages/config`: shared TypeScript/config package.
- `packages/env`: shared environment validation package.

## Workspace

- Better-T-Stack monorepo.
- Bun package manager.
- Turborepo workspace runner.
- TypeScript.
- Prettier.

Root scripts:

```bash
bun run dev
bun run dev:native
bun run dev:web
bun run dev:server
bun run check-types
```

## Native Stack

Native app location: `apps/native`.

- Expo
- React Native
- Expo Router
- TypeScript
- Convex client
- Better Auth Expo plugin
- Expo Secure Store
- Uniwind
- Tailwind CSS
- HeroUI Native
- React Native Gesture Handler
- React Native Reanimated
- React Native Screens
- React Native SVG

## Web Stack

Web app location: `apps/web`.

- React
- TanStack Router
- Vite
- TypeScript
- Tailwind CSS
- Convex client
- Better Auth client
- shared UI package from `packages/ui`

Web is read-only for now. Do not build web write/admin flows unless explicitly requested.

## Backend Stack

Backend location: `packages/backend`.

- Convex functions and schema in `packages/backend/convex`
- `@convex-dev/better-auth`
- Better Auth
- Better Auth organization plugin
- Better Auth Expo support for native auth
- Zod where runtime validation is needed

## Auth Stack

- Better Auth is the auth framework.
- Phone number auth is the intended login method.
- The organization plugin is required.
- Each organization is one cricket circle.
- Only one member should be admin per organization.
- Admin has write access.
- Other members are read-only.

## Shared UI Stack

- Shared components live in `packages/ui`.
- Web can use the shared shadcn-style UI package.
- Native uses its own React Native UI stack and should not assume web components work there.
