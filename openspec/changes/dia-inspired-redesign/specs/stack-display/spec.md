## ADDED Requirements

### Requirement: Stack displayed as scattered floating pills

The stack/tools section SHALL display technology names as pill-shaped tags with a slightly scattered/organic layout (small rotations and vertical offsets per pill).

#### Scenario: Pills render with scattered positioning

- **WHEN** the stack section is visible
- **THEN** each pill has a deterministic slight rotation (±3deg) and vertical offset (±4px) based on its index

### Requirement: Pills are non-interactive labels

The stack pills SHALL be display-only labels showing technology/tool names. They are not links.

#### Scenario: Pill displays tool name

- **WHEN** the stack section renders
- **THEN** each pill shows a technology name (e.g., "TypeScript", "Svelte", "React", ".NET", "PHP")
