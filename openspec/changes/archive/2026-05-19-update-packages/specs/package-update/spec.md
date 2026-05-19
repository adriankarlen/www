## ADDED Requirements

### Requirement: All packages updated to latest compatible versions

The system SHALL have all dependencies and devDependencies updated to their latest versions as resolved by `bun update`.

#### Scenario: Successful update

- **WHEN** `bun update` is run
- **THEN** all packages in `package.json` are at their latest compatible versions and `bun.lock` is regenerated

### Requirement: Project builds after update

The project SHALL build successfully after package updates.

#### Scenario: Build passes

- **WHEN** `bun run build` is executed after updating packages
- **THEN** the build completes without errors

### Requirement: Project typechecks after update

The project SHALL pass typecheck after package updates.

#### Scenario: Typecheck passes

- **WHEN** `bun run check` is executed after updating packages
- **THEN** no type errors are reported
