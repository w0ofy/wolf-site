# Design: Modernize Dependencies

## Context

The site is a small personal website (4 pages, ~20 components) on Next.js 11 / React 17 / TypeScript 4.3, built with Babel because Emotion's css prop requires `@emotion/babel-plugin`. Linting is ESLint 7 with six plugins plus Prettier 2, wired through husky v7 config in `package.json` and `pretty-quick`. `nprogress` is patched via `patch-package`, and `node-fetch` polyfills fetch. The repo uses Yarn (node-modules linker) on Node 20.

## Goals / Non-Goals

**Goals:**
- Land on currently supported major versions of every dependency
- Eliminate runtime CSS-in-JS and the Babel build it requires
- Collapse the lint/format toolchain into one tool
- Preserve the site's current visual appearance and routing behavior

**Non-Goals:**
- App Router migration (Pages Router stays; can be a follow-up change)
- Visual redesign or component API redesign beyond what the styling migration forces
- Adding tests or CI (out of scope; pre-commit hook is the only enforcement)

## Decisions

### 1. Next.js 16 + React 19, staying on Pages Router

Jump straight to the latest majors rather than stepping through 12/13/14/15. The codebase has no `getServerSideProps`/API routes complexity — the main breaking changes that apply are React 18/19 rendering changes, `Link` no longer requiring a child `<a>` (Next 13 codemod `new-link` exists), and removal of the Babel pipeline. Stepping through intermediate majors would multiply work with no benefit for a codebase this small.

- *Alternative considered*: incremental upgrade (11→12→13→…) — safer for large apps, unnecessary overhead here.
- *Alternative considered*: App Router migration — orthogonal, larger blast radius; deferred.

### 2. Emotion → vanilla-extract

vanilla-extract (`@vanilla-extract/css` + `@vanilla-extract/next-plugin`) is the styling target:

- **Zero runtime**: styles compile to static CSS, removing Emotion's runtime and the `.babelrc`/`jsxImportSource` config.
- **TypeScript-native theming**: the existing `styles/styles.tsx` theme object maps directly to a vanilla-extract theme contract (`createTheme`/`createThemeContract`), and `components/Typography/variants.ts` maps to `styleVariants`. This is the closest conceptual fit to the current typed-theme Emotion code.
- **Future-proof**: works with SWC/Turbopack and App Router/RSC if that migration happens later.

Migration shape: each `styled.x` component becomes a `.css.ts` style + a plain component (or `recipes` for variant-driven ones like Button/Typography); css-prop usages become `className`. `styles/normalizeStyles.ts` becomes `globalStyle` calls in a global `.css.ts`.

- *Alternative considered*: Tailwind CSS v4 — excellent tooling but a full re-authoring into utility classes; discards the existing typed theme structure.
- *Alternative considered*: Panda CSS — closest API match (styled/css function) but heavier codegen setup for a site this small.
- *Alternative considered*: keep Emotion via Next's SWC `compiler.emotion` — viable short-term but keeps runtime CSS-in-JS and blocks any future RSC adoption; the point of this change is to migrate off it.

### 3. ESLint + Prettier → Biome

Biome replaces ESLint 7, Prettier 2, and seven plugin/config packages with one dependency and one `biome.json`. It covers the rules actually used here (TypeScript, React hooks, a11y via `lint/a11y/*`) and formats. Next-specific lint rules (`eslint-config-next`) are lost, but the codebase is small and stable enough that this trade is acceptable.

- *Alternative considered*: oxlint (Oxc) — extremely fast linter but no formatter yet at parity; would still need Prettier. Biome covers both.
- *Alternative considered*: upgrade to ESLint 9 flat config + Prettier 3 — keeps Next plugin but retains the multi-tool sprawl this change is meant to remove.

### 4. nprogress → next-nprogress-bar

The local patch (`patches/nprogress+0.2.0.patch`) exists because nprogress is unmaintained (last release 2013-era API). Replace `nprogress` + `hooks/useNProgress.ts` with `next-nprogress-bar` (maintained, supports Pages Router via a drop-in `AppProgressBar`/router-events component), which removes the patch and with it `patch-package` and `postinstall-postinstall`.

- *Alternative considered*: keep patched nprogress — keeps two extra dev deps and a postinstall step for a progress bar.

### 5. Supporting decisions

- **SVGR**: remove `@svgr/webpack` and its `next.config.js` rule entirely — a repo-wide search found no `.svg` imports (the Logo is inline JSX), so the loader is dead config.
- **fetch**: delete `node-fetch`/`@types/node-fetch`; Node 20 and all browsers provide `fetch` globally.
- **Pre-commit**: husky v9 (`.husky/pre-commit` file replaces the `package.json` `husky` block) running `biome check --staged --write`, replacing `pretty-quick`.
- **TypeScript 7**: `typescript@7` on npm is the native Go-based compiler (tsgo), roughly 10x faster than the JS implementation. It drops legacy options this repo currently uses — `target: es5` and `moduleResolution: node` — so bump `target` to `es2017`+ and `moduleResolution` to `bundler`, and remove `jsxImportSource` once Emotion is gone. Editor support requires a TS-7-aware editor/extension (current VS Code handles this).
  - *Alternative considered*: TypeScript 6.x — same language behavior on the older JS implementation; it is the designated fallback if TS 7 hits a compatibility wall (see Risks), not a reason to stop short of 7.

## Risks / Trade-offs

- [React 17→19 behavior changes (automatic batching, StrictMode double-render)] → site is static/presentational with almost no state; verify each page renders identically in dev with StrictMode on.
- [Visual regressions from re-authoring all styles] → migrate component-by-component, comparing rendered output against the pre-migration site side-by-side; theme tokens are ported 1:1 before any component work starts.
- [Biome lacks `eslint-config-next` rules (e.g., no-html-link-for-pages)] → codebase already complies; acceptable loss for a 4-page site.
- [`@reacticons/ionicons` may be incompatible with React 19 peer deps] → check on install; if broken, swap to `ionicons` SVGs through the existing SVGR pipeline.
- [TS 7 native compiler incompatibility — Next's build-time type checking or some `@types` packages may not yet handle typescript@7] → TS 6.x is behavior-identical on the JS implementation; pin to 6 and retry 7 later if `next build` or editor tooling breaks. Next declares no TypeScript peer-dependency constraint, so installation itself won't conflict.
- [Big-bang upgrade means a broken intermediate state] → do the work on a branch; the site has no CI/CD coupling that forces incremental merges.

## Migration Plan

1. Branch; upgrade Next/React/TypeScript and fix build errors (Link children, types) with Emotion temporarily kept working via `compiler.emotion` in `next.config.js`.
2. Migrate styling to vanilla-extract component-by-component; delete Emotion, `.babelrc`, and `compiler.emotion` last.
3. Swap nprogress, node-fetch, SVGR.
4. Replace lint/format tooling and pre-commit hook; run Biome across the repo.
5. Verify: `next build` succeeds, all pages render correctly, hook fires on commit.

**Rollback**: single branch/PR — revert the merge commit. No data or API surface involved.

## Open Questions

- None blocking. If `@reacticons/ionicons` proves incompatible with React 19 (see Risks), the fallback is decided: inline ionicons SVGs via SVGR.
