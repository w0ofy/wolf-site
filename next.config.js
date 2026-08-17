const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');

const withVanillaExtract = createVanillaExtractPlugin({
  // Next 16 runs Turbopack by default; without this the plugin only
  // registers its webpack half and the build bails out.
  unstable_turbopack: { mode: 'auto' },
});

module.exports = withVanillaExtract({
  reactStrictMode: true,
  // Next 16 writes AGENTS.md/CLAUDE.md into the repo root by default.
  agentRules: false,
});
