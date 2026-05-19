## Context

Current site is a SvelteKit multi-page app with Rosé Pine theming, DM Mono font, and neobrutalist styling. The redesign transforms it into a single-page scroll with an editorial, Dia/Arc-inspired aesthetic — variable fonts, mesh gradients, floating UI elements, generous whitespace.

Tech stack remains: SvelteKit + Tailwind CSS v4 + TypeScript, deployed on Vercel.

## Goals / Non-Goals

**Goals:**

- Premium editorial feel with Fraunces variable font as the signature element
- Single-page architecture with smooth scroll navigation
- Swappable accent color system for A/B testing (coral, teal, indigo, amber)
- Atmospheric depth via mesh gradient blobs
- Floating ambient UI cards in hero that double as navigation
- Scroll-driven animations (intersection observer based)

**Non-Goals:**

- Dark mode (future enhancement)
- Real-time GitHub data in hero cards (future — start with static)
- Blog/writing section
- CMS integration
- Server-side data fetching

## Decisions

### 1. Single-page scroll vs. SvelteKit routing

**Decision:** Keep SvelteKit but use a single `+page.svelte` with section components. Remove `/about-me` and `/projects` routes.

**Rationale:** SvelteKit still provides the build pipeline, adapter-auto for Vercel, and future flexibility (could add routes later). But the page itself is one continuous scroll with `id` anchors.

**Alternative considered:** Full static HTML/Vite — rejected because SvelteKit's component model, transitions, and reactivity are still useful for animations and potential future dynamic content.

### 2. Typography: Fraunces + DM Sans

**Decision:** Fraunces (variable, Google Fonts) for display headings. DM Sans (variable, already imported) for body text. Drop DM Mono entirely.

**Rationale:** Fraunces has `wght`, `opsz`, `SOFT`, and `WONK` axes — the SOFT axis (0→100) creates the organic, ink-blot feel similar to Dia's hero. DM Sans is a clean geometric complement already in the project.

**Font variation settings for "build":**

```css
.hero-keyword {
  font-family: "Fraunces", serif;
  font-variation-settings:
    "wght" 900,
    "SOFT" 100,
    "WONK" 1;
}
```

### 3. Color system architecture

**Decision:** CSS custom properties at `:root` with a single `--accent` variable that controls the primary color. Mesh blob colors derived from accent + fixed complementary hues.

```css
:root {
  --bg: #faf8f5;
  --bg-alt: #f3f0eb;
  --text: #1a1a1a;
  --text-sub: #6b6b6b;
  --accent: #f4845f; /* coral — swap to test others */
  --card-bg: rgba(255, 255, 255, 0.8);
  --card-border: rgba(0, 0, 0, 0.05);
  --mesh-1: #f4845f33;
  --mesh-2: #6366f122;
  --mesh-3: #2d959611;
}
```

**Rationale:** Single-variable swap makes testing trivial. Could add a dev-only theme switcher component later.

### 4. Mesh gradient implementation

**Decision:** 2-3 fixed-position `div` elements with large `border-radius: 50%`, `filter: blur(100px+)`, and background colors from mesh variables. Positioned absolutely behind content. Hue shifts per section via CSS scroll-driven animations or intersection observer toggling classes.

**Alternative considered:** CSS `@property` animated gradients — rejected due to limited browser support for scroll-driven `@property` animation. Simple positioned blobs with opacity transitions are more reliable.

### 5. Floating hero cards

**Decision:** Absolutely positioned card components within the hero section. Each has:

- Gentle CSS `@keyframes` oscillation (`translateY(±8px)` over 4-6s, ease-in-out, infinite)
- `backdrop-filter: blur(12px)` + semi-transparent white bg
- `cursor: pointer` + click handler for smooth scroll to target section
- Slight rotation (`rotate(±2deg)`) for casual placement feel

### 6. Project layout: CSS Grid with manual placement

**Decision:** Use CSS Grid with `grid-template-columns: 1fr 1fr` and alternate project items between `grid-column: 1` and `grid-column: 2`, with the text in the opposite column. On mobile, collapse to single column.

**Alternative considered:** Flexbox with `flex-direction` alternating — works but grid gives more precise control over vertical alignment between image and text.

### 7. Stack pills: randomized scatter

**Decision:** Flexbox with `flex-wrap: wrap` and `gap`, but each pill gets a slight random `transform: rotate(±3deg) translateY(±4px)` via inline styles (generated at build time or via Svelte `each` with index-based offsets). Not truly random — deterministic from index so layout doesn't shift.

### 8. Scroll animations

**Decision:** Intersection Observer API (via a Svelte action) to add `.visible` class when elements enter viewport. CSS handles the actual animation. No heavy JS animation libraries.

**Rationale:** Lightweight, performant, progressive enhancement (content visible without JS, just not animated).

## Risks / Trade-offs

- **Variable font file size** → Fraunces variable from Google Fonts is ~100KB. Acceptable for a portfolio. Mitigate with `font-display: swap` and preload.
- **Mesh blobs performance on low-end devices** → Large blurred elements can be GPU-intensive. Mitigate with `will-change: transform` and consider `@media (prefers-reduced-motion)` to disable.
- **Single page SEO** → Less important for a portfolio, but use semantic HTML (`<section>`, `<h2>`) and proper meta tags.
- **Losing direct URLs to sections** → Mitigate by updating `window.location.hash` on scroll, so `#projects` is shareable.
- **Static hero card data** → Looks less impressive than real data. Noted as future enhancement.
