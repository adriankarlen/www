## Context

The project uses Bun as package manager with a standard SvelteKit + Tailwind v4 stack. All packages use caret (`^`) ranges so minor/patch updates are expected to be compatible.

## Goals / Non-Goals

**Goals:**

- Update all packages to their latest versions
- Ensure the project builds and typechecks after update

**Non-Goals:**

- Migrating to new major frameworks (e.g., SvelteKit 3 if released)
- Adding new packages
- Refactoring code unrelated to compatibility fixes

## Decisions

- **Use `bun update`** to update all packages at once rather than one-by-one, since caret ranges should resolve cleanly.
- **Verify with `bun run build` and `bun run check`** — the project has no test suite, so build + typecheck is the validation gate.
- **Fix breaking changes inline** if any arise from major bumps (check changelogs).

## Risks / Trade-offs

- [Breaking API changes in major bumps] → Check changelogs before updating; pin if a major version is incompatible.
- [svelte-check version mismatch with Svelte 5] → Ensure svelte-check is updated to a version compatible with Svelte 5.
