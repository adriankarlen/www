## Why

The current portfolio has a developer/terminal aesthetic (DM Mono, neobrutalist borders, Rosé Pine palette) that doesn't reflect the level of design craft in the actual projects. Redesigning with a Dia/Arc-inspired editorial approach — variable font play, generous whitespace, ambient floating UI — will better showcase the work and create a memorable, premium feel.

## What Changes

- Replace the multi-page routing structure with a single-page scroll (SPA)
- Replace Rosé Pine palette with a warm neutral system (cream bg, charcoal text, coral accent) using CSS custom properties for easy accent swapping
- Replace DM Mono with Fraunces (variable, display) + DM Sans (body)
- Replace the top nav bar with a floating centered pill nav
- Add a hero section with animated variable font ("build") and floating ambient UI cards that act as section navigation
- Add mesh gradient blob atmosphere (blurred radials shifting hue per section)
- Redesign project display as editorial staggered layout (alternating L/R, large screenshots)
- Add a Stack/Tools section with scattered floating pill tags
- Consolidate About and Contact into the single page
- Add scroll-driven reveal animations for sections

## Capabilities

### New Capabilities

- `hero-section`: Animated hero with Fraunces variable font effect on "build", floating ambient cards (GitHub activity card, project preview card) that link to sections below
- `mesh-atmosphere`: Background mesh gradient blobs (2-3 blurred radials) that shift hue per section on scroll
- `editorial-projects`: Staggered alternating left/right project showcase with large screenshots and scroll-driven reveals
- `stack-display`: Floating scattered pill tags showing tech stack/tools
- `pill-nav`: Floating centered pill navigation with smooth-scroll to sections
- `color-system`: CSS custom property based color system with swappable accent color (coral default, teal/indigo/amber alternatives to test)

### Modified Capabilities

<!-- None — this is a full redesign, no existing specs -->

## Impact

- All route files replaced (multi-page → single scroll page)
- `src/app.css` fully rewritten (new palette, fonts, mesh gradients, animations)
- Components rewritten or replaced (Card, Button, Menu → new components)
- Google Fonts import changes (add Fraunces, swap DM Mono for DM Sans)
- Static assets: project screenshots retained, avatar retained
- No backend/API changes
- Future enhancement: hero cards pull real GitHub API data (not in initial scope)
