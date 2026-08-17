# Proposal: Modernize Dependencies

## Why

The site runs on a 2021-era stack — Next.js 11, React 17, TypeScript 4.3, ESLint 7 + Prettier 2 — that is multiple major versions behind, no longer receives security patches, and carries workarounds (Babel config, patched nprogress, node-fetch polyfill) that modern versions make unnecessary. Upgrading now, while the codebase is small (~4 pages, ~20 components), keeps the migration cheap and unblocks future work on a supported toolchain.

## What Changes

- **BREAKING** Upgrade Next.js 11 → 16 and React 17 → 19 (keep Pages Router; no App Router migration in this change)
- **BREAKING** Migrate styling from Emotion (`@emotion/react`, `@emotion/styled`, css prop) to vanilla-extract — zero-runtime, TypeScript-native theming, compatible with SWC/Turbopack
- Replace ESLint 7 + Prettier 2 + `pretty-quick` + `eslint-*` plugin stack with Biome (single tool for lint + format)
- Remove `.babelrc` and switch to Next's default SWC compiler (Babel config exists only to support Emotion)
- **BREAKING** Upgrade TypeScript 4.3 → 7.x (the native Go-based compiler); requires dropping legacy tsconfig options (`target: es5`, `moduleResolution: node`) that TS 7 no longer supports
- Remove `node-fetch` and `@types/node-fetch` in favor of native `fetch` (Node 18+; repo runs Node 20)
- Replace `nprogress` + its `patch-package` patch with a maintained route-progress solution; remove `patch-package` and `postinstall-postinstall`
- Remove `@svgr/webpack` and its webpack rule (no source file imports `.svg` — the Logo is inline JSX)
- Replace `husky` v7 + `pretty-quick` pre-commit hook with a Biome-based pre-commit check

## Capabilities

### New Capabilities

- `framework-runtime`: The Next.js/React application builds and serves all pages on the upgraded framework versions (Next 16, React 19, TypeScript 7, native fetch, SWC compiler)
- `styling-system`: All component styling is authored in vanilla-extract with a typed theme, producing static CSS with no runtime CSS-in-JS
- `code-quality-tooling`: Linting and formatting is provided by Biome, enforced locally via pre-commit hook and runnable via package scripts

### Modified Capabilities

_None — no existing specs in `openspec/specs/`._

## Impact

- **Dependencies**: ~15 packages removed (Emotion pair, ESLint/Prettier plugin stack, node-fetch, patch-package, postinstall-postinstall, pretty-quick), ~4 added (Biome, vanilla-extract packages, progress bar replacement)
- **Code**: All 14 files importing `@emotion/*` (components/, styles/, pages/resume.tsx) rewritten to vanilla-extract `.css.ts` files; `styles/styles.tsx` theme and `styles/normalizeStyles.ts` converted to vanilla-extract theme contract and global styles
- **Config**: `.babelrc` deleted; `.eslintrc` and `.prettierrc` replaced by `biome.json`; `tsconfig.json` loses `jsxImportSource`; `next.config.js` SVGR rule updated; `package.json` scripts and husky hook rewritten
- **Behavior**: Visual output should be unchanged; route progress indicator may look slightly different depending on the nprogress replacement chosen in design
