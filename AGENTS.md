# AGENTS.md

## Stack

SvelteKit (Svelte 5) + Tailwind CSS v4 + TypeScript, deployed on Vercel via `@sveltejs/adapter-auto`. Package manager is **Bun**.

## Commands

| Task       | Command                            |
| ---------- | ---------------------------------- |
| Dev server | `bun run dev`                      |
| Build      | `bun run build`                    |
| Typecheck  | `bun run check`                    |
| Lint       | `bun run lint` (prettier + eslint) |
| Format     | `bun run format`                   |

No test suite exists.

## Conventions

- **Formatting:** double quotes, 2-space indent, semicolons, no trailing commas. Prettier with `prettier-plugin-svelte`.
- **Svelte files** use TypeScript via `vitePreprocess`.
- **Icons:** `@tabler/icons-svelte`.
- **Theme:** Rosé Pine color palette, light/dark via `prefers-color-scheme`. Colors are Tailwind utilities prefixed `rp-` (e.g. `text-rp-text`, `bg-rp-base`). Blend utilities: `bg-blend-{5..100}`.
- **Font:** DM Mono (loaded via Google Fonts in `src/app.css`), set as `--font-sans`.
- **CSS:** Tailwind v4 (via `@tailwindcss/vite` plugin). Global styles in `src/app.css`.

## Structure

```
src/
  routes/       — SvelteKit file-based routing (+page.svelte, +layout.svelte)
  components/   — shared UI components
  lib/          — utilities (aliased as $lib)
static/         — public assets
```

## Gotchas

- Tailwind v4 uses the Vite plugin (`@tailwindcss/vite`), not the classic `tailwind.config` file. Configuration is done in CSS with `@theme`.
- `svelte-kit sync` runs automatically before typecheck (`check` script) — don't run it separately.
