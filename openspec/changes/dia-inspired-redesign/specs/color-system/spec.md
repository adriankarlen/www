## ADDED Requirements

### Requirement: CSS custom property color system

The color palette SHALL be defined entirely via CSS custom properties at `:root`, enabling accent color swapping by changing a single `--accent` variable.

#### Scenario: Accent color is configurable

- **WHEN** `--accent` is changed from `#f4845f` to `#2d9596`
- **THEN** all accent-colored elements (links, highlights, active states) update to the new color

### Requirement: Default palette is warm neutral with coral accent

The default palette SHALL use warm cream background (`#faf8f5`), near-black text (`#1a1a1a`), and coral/salmon accent (`#f4845f`).

#### Scenario: Default colors render correctly

- **WHEN** the page loads without any custom overrides
- **THEN** the background is warm cream, text is near-black, and accent elements are coral

### Requirement: Cards use frosted glass effect

Card elements (hero cards, any UI cards) SHALL use a semi-transparent white background with backdrop-filter blur to create a frosted glass appearance.

#### Scenario: Card has frosted glass styling

- **WHEN** a card is rendered
- **THEN** it has `background: rgba(255, 255, 255, 0.8)` and `backdrop-filter: blur(12px)`

### Requirement: Light mode only

The site SHALL render in light mode only. No dark mode toggle or `prefers-color-scheme` media query for theme switching.

#### Scenario: No dark mode

- **WHEN** the user has dark mode enabled in their OS
- **THEN** the site still renders in the light warm cream palette
