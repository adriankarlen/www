## Why

Package versions are falling behind. Updating to latest keeps the project secure, performant, and compatible with ecosystem improvements (Svelte 5, Tailwind v4, Vite 6+).

## What Changes

- Update all `devDependencies` to their latest compatible versions
- Update all `dependencies` to their latest compatible versions
- Fix any breaking changes introduced by major version bumps
- Regenerate lockfile

## Capabilities

### New Capabilities

- `package-update`: Covers updating all npm packages to latest versions and resolving any compatibility issues

### Modified Capabilities

_(none)_

## Impact

- `package.json` — version bumps
- `bun.lock` — regenerated lockfile
- Potentially any source files if APIs changed (unlikely for minor/patch bumps)
