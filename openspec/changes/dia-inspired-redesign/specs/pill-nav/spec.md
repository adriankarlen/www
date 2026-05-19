## ADDED Requirements

### Requirement: Floating centered pill navigation

The page SHALL have a floating pill-shaped navigation bar, centered horizontally, containing section links and the user's avatar.

#### Scenario: Nav renders as floating pill

- **WHEN** the page loads
- **THEN** a centered navigation bar with rounded-full corners, backdrop-blur, and semi-transparent background is visible at the top of the viewport

### Requirement: Nav links smooth-scroll to sections

Each nav link SHALL smooth-scroll to its corresponding section anchor.

#### Scenario: Clicking Projects scrolls to projects

- **WHEN** the user clicks "Projects" in the nav
- **THEN** the page smooth-scrolls to the `#projects` section

### Requirement: Nav contains section links

The nav SHALL contain links to: Projects, Stack, About, Contact.

#### Scenario: All nav items present

- **WHEN** the nav renders
- **THEN** it contains links for Projects, Stack, About, and Contact

### Requirement: URL hash updates on scroll

The URL hash SHALL update as the user scrolls past section boundaries, making section URLs shareable.

#### Scenario: Hash updates on scroll

- **WHEN** the user scrolls into the Projects section
- **THEN** the URL updates to include `#projects` without triggering a page reload
