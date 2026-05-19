## 1. Foundation

- [x] 1.1 Rewrite `src/app.css` — new color system (CSS custom properties), import Fraunces + DM Sans from Google Fonts, remove Rosé Pine palette, remove DM Mono, define mesh gradient blob base styles, define Tailwind v4 `@theme` with new tokens
- [x] 1.2 Create Svelte action `src/lib/intersect.ts` — Intersection Observer action for scroll-driven reveals (adds `.visible` class)
- [x] 1.3 Create Svelte action `src/lib/hash-scroll.ts`
 — updates URL hash as user scrolls past section boundaries

## 2. Layout & Navigation

- [x] 2.1 Rewrite `src/routes/+layout.svelte` — minimal shell (just slot, no nav/footer here)
- [x] 2.2 Create `src/components/PillNav.svelte` — floating centered pill nav with avatar, section links (Projects, Stack, About, Contact), backdrop-blur frosted glass style, smooth-scroll on click
- [x] 2.3 Remove old routes (`src/routes/about-me/`, `src/routes/projects/`) — consolidate into single page

## 3. Hero Section

- [x] 3.1 Create `src/components/Hero.svelte` — centered text "Hi, I'm Adrian. I build things for the web." with Fraunces variable font on "build" (wght 900, SOFT 100, WONK 1)
- [x] 3.2 Create `src/components/HeroCard.svelte` — reusable floating card component (frosted glass, oscillation animation, click-to-scroll)
- [x] 3.3 Add GitHub activity card and project preview card instances in Hero with static placeholder data

## 4. Mesh Atmosphere

- [x] 4.1 Create `src/components/MeshBackground.svelte` — 2-3 absolutely positioned blurred gradient blobs, hue shifts per section via class toggling on scroll
- [x] 4.2 Add `prefers-reduced-motion` support — disable blob animations when reduced motion is preferred

## 5. Projects Section

- [x] 5.1 Create `src/components/ProjectShowcase.svelte` — alternating left/right editorial layout using CSS Grid, large screenshots, text on opposite side
- [x] 5.2 Add scroll-driven reveal animations to each project (fade-in + slide-up via intersect action)
- [x] 5.3 Ensure mobile responsive stacking (single column below 768px)

## 6. Stack Section

- [x] 6.1 Create `src/components/StackPills.svelte` — flexbox-wrap layout with pill tags, deterministic scatter (rotation ±3deg, translateY ±4px based on index)
- [x] 6.2 Populate with tech stack: TypeScript, Svelte, React, .NET, PHP, Tailwind, Node.js, etc.

## 7. About & Contact Sections

- [x] 7.1 Create `src/components/AboutSection.svelte` — short bio text, clean typography
- [x] 7.2 Create `src/components/ContactSection.svelte` — minimal icons (GitHub, LinkedIn, Email) with labels

## 8. Main Page Assembly

- [x] 8.1 Rewrite `src/routes/+page.svelte` — compose all sections (PillNav, Hero, MeshBackground, ProjectShowcase, StackPills, AboutSection, ContactSection) with section `id` anchors
- [x] 8.2 Wire up hash-scroll action on the page container
- [x] 8.3 Test accent color swapping by changing `--accent` variable — verify all elements update

## 9. Polish & Cleanup

- [x] 9.1 Remove unused components (`Card.svelte`, `Button.svelte`, `Menu.svelte`) or refactor if still needed
- [x] 9.2 Update static assets — ensure project screenshots are optimized for large display
- [x] 9.3 Add `font-display: swap` and preload for Fraunces to minimize FOIT
- [x] 9.4 Verify responsive behavior across breakpoints (mobile, tablet, desktop)
- [x] 9.5 Run `bun run check` and `bun run lint` — fix any issues

## Future (not in scope)

- [ ] F.1 Replace static hero card data with real GitHub API calls
- [ ] F.2 Add dark mode with inverted palette
- [ ] F.3 Add dev-only accent color theme switcher for A/B testing
