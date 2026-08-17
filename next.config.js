module.exports = {
  reactStrictMode: true,
  // Next 16 writes AGENTS.md/CLAUDE.md into the repo root by default.
  agentRules: false,
  // Temporary: keeps Emotion working on SWC until the vanilla-extract
  // migration (phase 3) removes Emotion entirely.
  compiler: {
    emotion: true,
  },
};
