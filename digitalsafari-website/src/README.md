# src directory

This `src` folder follows common industry conventions for a production-ready Next.js app.

- `components/` — Reusable UI components, organized by domain and `ui/` primitives.
- `features/` — Feature folders grouping components, hooks, and state for a feature.
- `hooks/` — Shared React hooks.
- `lib/` — App-level libraries, API clients, and helpers that are not tiny utilities.
- `services/` — External service integrations (API wrappers, analytics clients).
- `utils/` — Small utility functions and helpers.
- `styles/` — Global and design-system CSS or Tailwind setup.
- `constants/` — App constants and enums.
- `types/` — Shared TypeScript types and interfaces.
- `config/` — Environment-specific configuration and feature flags.
- `store/` — State management (Redux/ Zustand) entrypoints.
- `assets/` — Images, fonts, and static assets used by the app.
- `data/` — Local mock or seed data used in development.
- `models/` — Domain models and parsers.

Use barrels (index files) to expose stable public APIs from folders.