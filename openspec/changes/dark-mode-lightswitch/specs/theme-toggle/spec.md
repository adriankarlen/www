## ADDED Requirements

### Requirement: OS preference detection
The system SHALL detect the user's OS color scheme preference on first visit and apply the matching theme (light or dark).

#### Scenario: First visit with OS dark preference
- **WHEN** a user visits the site for the first time with OS set to dark mode
- **THEN** the site renders in dark mode without any flash of light theme

#### Scenario: First visit with OS light preference
- **WHEN** a user visits the site for the first time with OS set to light mode
- **THEN** the site renders in light mode

### Requirement: Theme persistence
The system SHALL persist the user's theme choice to localStorage and restore it on subsequent visits, overriding OS preference.

#### Scenario: User switches to dark mode and revisits
- **WHEN** a user toggles to dark mode and later revisits the site
- **THEN** the site loads in dark mode regardless of current OS preference

#### Scenario: User clears localStorage
- **WHEN** a user clears browser storage and revisits
- **THEN** the system falls back to OS preference detection

### Requirement: Flash prevention
The system SHALL set the correct theme before first paint to prevent flash of wrong theme (FOUC).

#### Scenario: Dark mode user loads page
- **WHEN** a user with stored dark preference loads any page
- **THEN** the `data-theme="dark"` attribute is set on `<html>` before any content paints

### Requirement: Dark palette definition
The system SHALL define a dark color palette using deep indigo as the base with the following mappings:
- `--bg`: `#0f0d2e`
- `--bg-alt`: `#16133a`
- `--text`: `#f0ede8`
- `--text-sub`: `#a8a4b8`
- `--accent`: `#f4845f` (unchanged)
- `--card-bg`: `rgba(255, 255, 255, 0.05)`
- `--card-border`: `rgba(255, 255, 255, 0.1)`
- `--mesh-1`: `#f4845f44`
- `--mesh-2`: `#6366f144`
- `--mesh-3`: `#2d959633`

#### Scenario: Dark mode active
- **WHEN** `data-theme="dark"` is set on the document
- **THEN** all CSS custom properties reflect the dark palette values

### Requirement: Smooth theme transition
The system SHALL apply a CSS transition (~200ms) on background-color and color properties when switching themes.

#### Scenario: User toggles theme
- **WHEN** the user clicks the theme toggle
- **THEN** colors transition smoothly over approximately 200ms rather than flashing instantly
