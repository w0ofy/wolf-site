# framework-runtime

## ADDED Requirements

### Requirement: Application runs on supported framework versions

The application SHALL build and run on Next.js 16, React 19, and TypeScript 7 (the native compiler), with no dependency on end-of-life major versions of these packages.

#### Scenario: Production build succeeds

- **WHEN** `next build` is run on the upgraded stack
- **THEN** the build completes without errors using the SWC compiler (no `.babelrc` present)

#### Scenario: Type checking with the native compiler

- **WHEN** `tsc --noEmit` is run with `typescript@7`
- **THEN** the codebase type-checks with no errors and no unsupported tsconfig options

#### Scenario: All pages render

- **WHEN** each route (`/`, `/resume`) is requested from the built application
- **THEN** the page renders with the same content and layout as before the upgrade

### Requirement: Native fetch replaces node-fetch

The application SHALL use the platform-native `fetch` API and SHALL NOT depend on `node-fetch`.

#### Scenario: Fetch calls work without polyfill

- **WHEN** any code path that previously imported `node-fetch` executes
- **THEN** it uses global `fetch` and behaves identically, and `node-fetch`/`@types/node-fetch` are absent from `package.json`

### Requirement: Route progress indicator without patched dependencies

The application SHALL display a progress indicator during client-side route transitions using a maintained library, with no `patch-package` patches in the repository.

#### Scenario: Progress bar on navigation

- **WHEN** the user navigates between pages client-side
- **THEN** a progress bar appears during the transition and completes on load

#### Scenario: Clean install has no patch step

- **WHEN** dependencies are installed from a clean checkout
- **THEN** no `postinstall` patching occurs and the `patches/` directory does not exist

### Requirement: No unused build loaders

The build configuration SHALL NOT include loaders for file types no source file imports (e.g., SVGR, since the only SVG is inline JSX).

#### Scenario: SVGR removed

- **WHEN** `next.config.js` and `package.json` are inspected after migration
- **THEN** `@svgr/webpack` and its webpack rule are absent and the Logo still renders from inline JSX
