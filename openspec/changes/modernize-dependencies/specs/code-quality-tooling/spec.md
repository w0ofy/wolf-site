# code-quality-tooling

## ADDED Requirements

### Requirement: Biome as the single lint and format tool

The repository SHALL use Biome for both linting and formatting, configured in `biome.json`, and SHALL NOT depend on ESLint, Prettier, or their plugin packages.

#### Scenario: Lint script runs Biome

- **WHEN** `yarn lint` is run
- **THEN** Biome checks all `.ts`/`.tsx`/`.js` files and exits non-zero on lint errors

#### Scenario: Format script runs Biome

- **WHEN** the format script is run
- **THEN** Biome formats the codebase according to the existing style (2-space indent, single quotes, semicolons)

#### Scenario: Legacy tooling removed

- **WHEN** `package.json` and the repo root are inspected after migration
- **THEN** `eslint`, `prettier`, all `eslint-*` packages, `pretty-quick`, `.eslintrc`, and `.prettierrc` are gone

### Requirement: Pre-commit enforcement

Staged files SHALL be checked and formatted by Biome before each commit via a husky v9 hook.

#### Scenario: Commit with staged violations

- **WHEN** a commit is attempted with staged files containing auto-fixable issues
- **THEN** the pre-commit hook runs `biome check --staged --write`, applies fixes, and blocks the commit on unfixable errors
