import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths({ projects: ["./tsconfig.v2.json"] })],
  test: {
    environment: "jsdom",
    setupFiles: ["./src-v2/test/setup.ts"],
    globals: true,
    include: ["src-v2/**/*.{test,spec}.{ts,tsx}"],
    passWithNoTests: true,
    coverage: {
      provider: "v8",
      reporter: ["text", "lcov", "html"],
      include: ["src-v2/**"],
      exclude: ["src-v2/test/**", "src-v2/main.tsx"],
      thresholds: {
        lines: 0,
        functions: 0,
        branches: 0,
        statements: 0,
      },
    },
  },
});
