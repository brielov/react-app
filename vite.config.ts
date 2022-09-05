/// <reference types="vitest" />

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import tsconfigPaths from "vite-tsconfig-paths";

const MIN_COVERAGE = 90;

export default defineConfig({
  plugins: [tsconfigPaths(), react(), checker({ typescript: true })],
  build: {
    target: "es2021",
  },
  define: {
    "import.meta.vitest": false,
  },
  test: {
    environment: "jsdom",
    globals: true,
    includeSource: ["src/**/*.{js,ts}"],
    setupFiles: ["src/setup-tests.ts"],
    exclude: [
      "node_modules",
      "dist",
      "dist-stories",
      "src/setup-tests.ts",
      ".idea",
      ".git",
      ".cache",
    ],
    watch: false,
    coverage: {
      branches: MIN_COVERAGE,
      functions: MIN_COVERAGE,
      lines: MIN_COVERAGE,
    },
  },
});
