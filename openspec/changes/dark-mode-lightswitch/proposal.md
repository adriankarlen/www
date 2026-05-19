## Why

The site is currently light-only with no dark mode support. Adding a dark mode with a playful, hand-drawn light switch toggle improves user experience (respects OS preference, reduces eye strain) and adds personality to the site through a delightful interaction inspired by hellodani.co.

## What Changes

- Add a dark color palette using deep indigo (`#0f0d2e`) as the base — dramatic and vivid
- Introduce a fixed-position light switch toggle (bottom-right) with hand-drawn SVG aesthetic
- Toggle animates playfully: spring bounce on the nub, rotational wiggle, scale pulse
- Theme state persists to localStorage and respects OS `prefers-color-scheme` on first visit
- Flash prevention via inline `<head>` script
- Mesh background blobs become more vivid/saturated in dark mode
- Card surfaces invert to subtle glass-on-dark (`rgba(255,255,255,0.05)`)
- Respects `prefers-reduced-motion` by disabling playful animations

## Capabilities

### New Capabilities
- `theme-toggle`: Dark/light mode switching with persistence, OS preference detection, and flash prevention
- `lightswitch-component`: Hand-drawn SVG light switch UI with playful spring animations and a11y compliance

### Modified Capabilities

## Impact

- **New files**: `src/components/ThemeToggle.svelte`, `src/lib/theme.svelte.ts`
- **Modified files**: `src/app.css` (dark palette + transitions), `src/app.html` (inline script), `src/routes/+layout.svelte` (mount toggle)
- **No dependency additions** — pure CSS variables + vanilla JS/Svelte
- **No breaking changes** — additive only
