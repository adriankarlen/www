## ADDED Requirements

### Requirement: Projects displayed in alternating staggered layout

The projects section SHALL display projects in an alternating left/right editorial layout — image on one side, text on the other, swapping sides for each consecutive project.

#### Scenario: Projects alternate sides

- **WHEN** the projects section is rendered with multiple projects
- **THEN** odd projects show image-left/text-right and even projects show text-left/image-right

### Requirement: Large project screenshots

Each project SHALL display a large screenshot image that showcases the visual work.

#### Scenario: Screenshot is prominently displayed

- **WHEN** a project is visible
- **THEN** the screenshot occupies approximately 60% of the row width on desktop

### Requirement: Scroll-driven project reveals

Each project SHALL animate into view as the user scrolls, with a staggered fade-in/slide-up effect.

#### Scenario: Project animates on scroll into view

- **WHEN** a project enters the viewport
- **THEN** it fades in and slides up from a slight offset over ~600ms

### Requirement: Mobile responsive

On mobile viewports, projects SHALL stack vertically (image on top, text below) regardless of the alternating pattern.

#### Scenario: Mobile layout stacks

- **WHEN** viewport width is below 768px
- **THEN** all projects display as image above text in a single column
