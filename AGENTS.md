# Repository Guidelines

## Project Structure & Module Organization

The application is a Vite-powered Three.js experience. `index.html` is the entry document, while `src/main.js` initializes the renderer, scene, controls, and application flow. Keep new code grouped by responsibility:

- `src/domain/`: deterministic universe data, time calculations, catalogs, and random utilities.
- `src/simulation/`: civilization state and evolution rules.
- `src/rendering/`: Three.js objects, textures, and visual updates.
- `src/ui/`: DOM rendering and interface-specific behavior.
- `src/assets/` and `public/`: bundled and directly copied static assets.
- `readme-photo/`: repository documentation images.
- `dist/`: generated production output; update it when a change is intended for deployment.

## Build, Test, and Development Commands

Install dependencies with `npm install` (or `npm ci` for a lockfile-exact install).

- `npm run dev`: start Vite’s local development server with hot reload.
- `npm run build`: create the optimized production bundle in `dist/`.
- `npm run preview`: serve the production bundle for a final local check.

There is currently no automated test or lint command. Always run `npm run build` before submitting a change.

## Coding Style & Naming Conventions

Use modern JavaScript ES modules, two-space indentation, single quotes, and semicolons. Follow existing naming: `camelCase` for variables and functions, `PascalCase` for Three.js constructors, and kebab-case filenames such as `cosmic-time.js`. Prefer named exports in focused modules. Keep simulation and domain logic deterministic by accepting or deriving seeded random generators instead of calling `Math.random()` directly.

## Testing Guidelines

For logic changes, add focused tests if introducing a test framework; otherwise document manual verification. At minimum, verify universe generation, entering the galaxy view, timeline play/scrubbing, civilization updates, responsive layout, and a clean browser console. Changes to rendering should be checked with both normal and reduced-motion settings.

## Commit & Pull Request Guidelines

Recent history uses Conventional Commit-style prefixes, mainly `feat:`, `fix:`, and `refactor:`, followed by concise Chinese descriptions. Keep each commit scoped to one coherent change. Pull requests should explain behavior changes, list verification performed, link relevant issues, and include screenshots or recordings for visual or interaction changes. Note any regenerated `dist/` artifacts explicitly.

## Assets & Licensing

Do not add fonts, images, or other third-party assets without recording their source and license. Preserve the Smiley Sans license under `public/fonts/` when changing font packaging.
