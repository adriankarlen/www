## ADDED Requirements

### Requirement: Fixed position toggle
The light switch component SHALL be rendered as a fixed-position button at bottom-right of the viewport (`bottom-6 right-6`, `z-40`).

#### Scenario: User scrolls the page
- **WHEN** the user scrolls anywhere on the page
- **THEN** the light switch remains visible in the bottom-right corner

### Requirement: Hand-drawn SVG appearance
The light switch SHALL be rendered as an inline SVG with hand-drawn/sketchy aesthetic using slightly imperfect bezier paths rather than geometric primitives.

#### Scenario: Visual inspection
- **WHEN** the toggle is visible on screen
- **THEN** it resembles a physical light switch plate with a movable nub, drawn with organic/wobbly lines

### Requirement: Playful animation on toggle
The switch SHALL animate playfully when toggled:
- Nub slides with spring easing (overshoot + settle)
- Switch plate does a brief ±2° rotational wiggle
- Whole button does a subtle scale pulse (1 → 1.05 → 1)

#### Scenario: User clicks the switch
- **WHEN** the user activates the toggle
- **THEN** the nub animates to its new position with spring bounce, the plate wiggles, and the button pulses

### Requirement: Reduced motion support
The system SHALL respect `prefers-reduced-motion: reduce` by disabling all playful animations and using an instant state change instead.

#### Scenario: User has reduced motion enabled
- **WHEN** the user has OS reduced-motion preference enabled and clicks the toggle
- **THEN** the switch changes state instantly without bounce, wiggle, or pulse animations

### Requirement: Accessibility compliance
The toggle SHALL meet accessibility requirements:
- Rendered as a `<button>` element
- Minimum 44px touch target
- `aria-label` dynamically reflects action ("Switch to dark mode" / "Switch to light mode")
- Visible focus ring on keyboard navigation

#### Scenario: Keyboard user navigates to toggle
- **WHEN** a keyboard user tabs to the light switch
- **THEN** a visible focus ring appears and pressing Enter/Space activates the toggle

#### Scenario: Screen reader announces toggle
- **WHEN** a screen reader user encounters the toggle
- **THEN** it is announced as a button with the current action label (e.g., "Switch to dark mode")
