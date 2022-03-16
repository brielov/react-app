/// <reference types="vitest" />

import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  build: {
    target: "es2020",
  },
  define: {
    "import.meta.vitest": false,
  },
  test: {
    environment: "jsdom",
    global: true,
    setupFiles: ["src/test.setup.ts"],
    watch: false,
    includeSource: ["src/**/*.{js,ts}"],
  },
});
