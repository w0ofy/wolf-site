# styling-system

## ADDED Requirements

### Requirement: Zero-runtime styling via vanilla-extract

All component styling SHALL be authored in vanilla-extract (`.css.ts` files) and compile to static CSS. The application SHALL NOT depend on `@emotion/react`, `@emotion/styled`, or any runtime CSS-in-JS library.

#### Scenario: No Emotion imports remain

- **WHEN** the codebase is searched for `@emotion` imports after migration
- **THEN** no source file imports any `@emotion/*` package and both packages are absent from `package.json`

#### Scenario: Styles are static CSS

- **WHEN** the production bundle is built
- **THEN** styles are emitted as static `.css` assets rather than injected at runtime by JavaScript

### Requirement: Typed theme preserved

The design tokens currently defined in `styles/styles.tsx` (colors, spacing, typography) SHALL be available as a typed vanilla-extract theme consumable from any `.css.ts` file.

#### Scenario: Component consumes theme token

- **WHEN** a component style references a theme token (e.g., a color)
- **THEN** the token resolves to the same value as the pre-migration Emotion theme, and referencing a nonexistent token is a TypeScript compile error

### Requirement: Visual parity

The migrated site SHALL be visually equivalent to the Emotion version, including global normalize styles and typography variants.

#### Scenario: Global styles applied

- **WHEN** any page loads
- **THEN** the normalize/global styles (previously `styles/normalizeStyles.ts`) are applied document-wide

#### Scenario: Typography variants match

- **WHEN** a Typography component renders with a given variant
- **THEN** its computed styles match the pre-migration variant definitions from `components/Typography/variants.ts`
