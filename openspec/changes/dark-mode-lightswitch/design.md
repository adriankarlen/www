## Context

The site is a single-page portfolio built with SvelteKit + Tailwind v4. Colors are defined as CSS custom properties on `:root` and mapped to Tailwind utilities via `@theme`. There is no existing dark mode infrastructure — all values are light-only. The PillNav is fixed top-center; bottom-right is free for the toggle.

## Goals / Non-Goals

**Goals:**
- Add a dark mode with a dramatic deep indigo palette
- Provide a delightful, hand-drawn light switch toggle with playful animations
- Respect OS preference on first visit, persist user choice
- Prevent flash of wrong theme on load
- Full a11y compliance (focus, aria, reduced motion)

**Non-Goals:**
- Multiple theme options (only light/dark)
- Theme customization by the user
- Server-side theme detection (SSR hint via cookies)
- Animated page-wide transition effects beyond simple CSS transitions

## Decisions

### 1. Theme storage: `data-theme` attribute on `<html>`

**Rationale**: CSS attribute selectors (`[data-theme="dark"]`) are simple, require no JS framework involvement for styling, and work with the inline flash-prevention script. Alternatives considered:
- Class-based (`.dark`) — equivalent but `data-*` is more semantic
- CSS `color-scheme` property — too limited for custom palettes

### 2. State management: Svelte 5 runes in `$lib/theme.svelte.ts`

**Rationale**: A reactive module using `$state` keeps theme accessible anywhere without prop drilling or context. The module handles localStorage sync and DOM attribute updates.

### 3. Flash prevention: inline blocking script in `<head>`

**Rationale**: The script runs before paint, reads localStorage/OS pref, and sets `data-theme` immediately. This is the standard approach — no FOUC. Tiny (~150 bytes).

### 4. Animation approach: CSS transitions + Svelte reactive classes

**Rationale**: The switch nub position, rotation wiggle, and scale pulse can all be CSS transitions triggered by class/attribute changes. No animation library needed. `prefers-reduced-motion` disables them cleanly.

### 5. SVG style: hand-drawn with imperfect paths

**Rationale**: Using slightly wobbly SVG paths (hand-drawn bezier curves instead of perfect rects) gives the sketchy feel without needing an illustration library. Static SVG, animation is CSS-driven on the nub element within it.

## Risks / Trade-offs

- **Risk**: Project screenshots may look odd on dark background → Mitigation: screenshots already have their own backgrounds; if needed, add subtle rounded border in dark mode later
- **Risk**: Mesh background blobs may need per-mode tuning → Mitigation: increase opacity values in dark mode; can iterate
- **Trade-off**: Inline script adds a tiny blocking resource to every page load (~150 bytes, negligible)
- **Trade-off**: Hand-drawn SVG paths are harder to maintain than icon library usage → acceptable for a single bespoke element
