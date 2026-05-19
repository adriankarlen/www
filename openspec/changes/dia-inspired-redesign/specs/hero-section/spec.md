## ADDED Requirements

### Requirement: Hero displays animated variable font keyword

The hero section SHALL display the text "Hi, I'm Adrian. I build things for the web." with the word "build" rendered in Fraunces variable font at weight 900, SOFT 100, WONK 1, creating an organic ink-blot effect.

#### Scenario: Hero text renders with variable font effect

- **WHEN** the page loads
- **THEN** the word "build" is displayed with Fraunces font-variation-settings `'wght' 900, 'SOFT' 100, 'WONK' 1`

### Requirement: Floating ambient cards in hero

The hero SHALL contain floating card elements: a GitHub activity card and a project preview card. Each card SHALL have a gentle vertical oscillation animation and act as navigation links to their respective sections.

#### Scenario: GitHub card links to about section

- **WHEN** user clicks the GitHub activity card in the hero
- **THEN** the page smooth-scrolls to the About/Activity section

#### Scenario: Project card links to projects section

- **WHEN** user clicks the project preview card in the hero
- **THEN** the page smooth-scrolls to the Projects section

#### Scenario: Cards have floating animation

- **WHEN** the hero is visible
- **THEN** each card oscillates vertically (±8px) with a 4-6 second infinite ease-in-out animation

### Requirement: Hero cards use static placeholder data

The hero cards SHALL display hardcoded static data (e.g., "12 commits this week", a project screenshot thumbnail). Real API data is a future enhancement.

#### Scenario: Cards render with static content

- **WHEN** the page loads
- **THEN** the GitHub card shows placeholder commit activity and the project card shows a static project screenshot
