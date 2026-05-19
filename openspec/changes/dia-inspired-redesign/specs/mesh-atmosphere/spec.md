## ADDED Requirements

### Requirement: Mesh gradient blobs create atmospheric depth

The page background SHALL include 2-3 large, heavily blurred radial gradient elements positioned behind content, creating atmospheric depth without distracting from content.

#### Scenario: Blobs are visible on page load

- **WHEN** the page loads
- **THEN** blurred gradient blobs (border-radius 50%, filter blur 100px+) are visible behind the hero content

### Requirement: Mesh blobs shift hue per section

Each major section (Hero, Projects, Stack, About, Contact) SHALL have a distinct hue emphasis in the mesh gradient, creating a sense of moving through different "rooms" as the user scrolls.

#### Scenario: Gradient hue changes on scroll

- **WHEN** the user scrolls from the Hero section to the Projects section
- **THEN** the dominant mesh gradient color shifts (e.g., warm peach in Hero → cool blue/indigo in Projects)

### Requirement: Reduced motion support

The mesh gradient animations SHALL be disabled when the user has `prefers-reduced-motion: reduce` enabled.

#### Scenario: Motion preference respected

- **WHEN** the user has prefers-reduced-motion: reduce set
- **THEN** mesh blobs are static (no hue shifting or movement)
