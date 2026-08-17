# Tasks: Modernize Dependencies

## 1. Framework Upgrade (Next 16 / React 19 / TS 5)

- [x] 1.1 Upgrade `next`, `react`, `react-dom`, `@types/react` (add `@types/react-dom`) to latest majors and `typescript` to `^7` in package.json and install
- [x] 1.2 Add temporary `compiler: { emotion: true }` to next.config.js and delete `.babelrc` so the build works on SWC while Emotion is still present
- [x] 1.3 Update tsconfig.json for TS 7: `target: es2017`, `moduleResolution: bundler` (TS 7 drops `es5`/`node`); keep `jsxImportSource` until Emotion is removed; confirm `tsc --noEmit` runs clean on the native compiler
- [x] 1.4 (Not needed — TypeScript 7.0.2 type-checks and builds cleanly.) If TS 7 breaks `next build` type-checking or editor tooling, pin `typescript@^6` as the documented fallback and note it for a later retry
- [x] 1.5 Run the `new-link` codemod (or manually update) so `next/link` usages no longer wrap `<a>` children; fix any other build/type errors
- [x] 1.6 Verify `next build` and `next dev` succeed and both pages (`/`, `/resume`) render correctly

## 2. Small Dependency Swaps

- [x] 2.1 Remove `node-fetch` and `@types/node-fetch`; switch any imports to global `fetch`
- [x] 2.2 Replace `nprogress` + `hooks/useNProgress.ts` with `next-nprogress-bar` in `pages/_app.tsx`; remove `@types/nprogress`
- [x] 2.3 Remove `patch-package`, `postinstall-postinstall`, the `postinstall` script, and the `patches/` directory
- [x] 2.4 Remove `@svgr/webpack` and its `next.config.js` webpack rule (no source file imports `.svg`; the Logo SVG is inline JSX)
- [x] 2.5 Verify `@reacticons/ionicons` works with React 19; if not, replace icon usage with ionicons SVGs via SVGR

## 3. Styling Migration (Emotion → vanilla-extract)

- [x] 3.1 Install `@vanilla-extract/css` and `@vanilla-extract/next-plugin`; wire the plugin into next.config.js
- [x] 3.2 Port the theme from `styles/styles.tsx` to a vanilla-extract theme (`createTheme`), exporting typed tokens
- [x] 3.3 Port `styles/normalizeStyles.ts` to `globalStyle` calls and import once in `pages/_app.tsx`
- [x] 3.4 Migrate leaf components (`Button`, `Emoji`, `Icon`, `Logo`, `Link`, `common/*`) to `.css.ts` styles + `className`
- [x] 3.5 Migrate `Typography` (variants via `styleVariants`/recipes), `Nav`, `Header`, `Resume/*`, and `pages/resume.tsx`
- [x] 3.6 Remove `@emotion/react`, `@emotion/styled`, `compiler.emotion`, `jsxImportSource` from tsconfig, and delete `components/Theme` provider wiring if now unused
- [x] 3.7 Compare each page visually against the pre-migration site and fix regressions

## 4. Tooling Migration (ESLint/Prettier → Biome)

- [x] 4.1 Install `@biomejs/biome`; create `biome.json` matching current style (2-space indent, single quotes, semicolons) with recommended + a11y + React hooks rules
- [x] 4.2 Remove `eslint`, `prettier`, all `eslint-*` packages, `pretty-quick`, `.eslintrc`, `.prettierrc`
- [x] 4.3 Rewrite package.json scripts: `lint` → `biome check --write .`, add `format` → `biome format --write .`
- [x] 4.4 Upgrade husky to v9: replace the package.json `husky` block with `.husky/pre-commit` running `biome check --staged --write`
- [x] 4.5 Run Biome across the repo and resolve all reported issues

## 5. Final Verification

- [ ] 5.1 Clean install from lockfile (`rm -rf node_modules && yarn`) and confirm no postinstall patching runs
- [ ] 5.2 Confirm `next build` passes, no `@emotion` imports remain (`grep -r "@emotion"`), and pages render with visual parity
- [ ] 5.3 Make a test commit to confirm the pre-commit hook fires
