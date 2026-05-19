## 1. Theme Infrastructure

- [x] 1.1 Add dark palette CSS variables under `[data-theme="dark"]` in `src/app.css`
- [x] 1.2 Add CSS transition (~200ms) on `background-color` and `color` to `body`/root elements
- [x] 1.3 Add inline blocking script in `src/app.html` `<head>` for flash prevention (localStorage → OS pref → sets `data-theme`)

## 2. Theme State Module

- [x] 2.1 Create `src/lib/theme.svelte.ts` with `$state` rune holding `'light' | 'dark'`
- [x] 2.2 Implement init logic: read localStorage, fallback to OS `matchMedia`, fallback to `'light'`
- [x] 2.3 Implement `toggle()` function that flips state, updates `document.documentElement.dataset.theme`, and persists to localStorage
- [x] 2.4 Listen for OS preference changes (mediaQuery `change` event) when no stored preference exists

## 3. Light Switch Component

- [x] 3.1 Create `src/components/ThemeToggle.svelte` with fixed bottom-6 right-6 positioning, z-40
- [x] 3.2 Design hand-drawn SVG light switch with wobbly bezier paths (switch plate + movable nub)
- [x] 3.3 Implement nub position toggle (up = light, down = dark) driven by theme state
- [x] 3.4 Add playful animations: spring bounce on nub, ±2° plate wiggle, scale pulse on button
- [x] 3.5 Add `prefers-reduced-motion` media query to disable animations (instant state change)
- [x] 3.6 Add a11y: `<button>`, dynamic `aria-label`, visible focus ring, 44px minimum touch target

## 4. Integration

- [x] 4.1 Mount `ThemeToggle` in `src/routes/+layout.svelte`
- [x] 4.2 Increase mesh background blob opacity values in dark mode (update MeshBackground if needed)
- [ ] 4.3 Verify PillNav `backdrop-blur` and `card-bg`/`card-border` look correct in dark mode
- [ ] 4.4 Visual QA: check all sections (Hero, ProjectShowcase, StackPills, About, Contact) in both modes
