/// <reference types="vitest" />
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPaths(), react(), checker({ typescript: true })],
  build: {
    target: "es2020",
  },
  define: {
    "import.meta.vitest": false,
  },
  test: {
    environment: "jsdom",
    globals: true,
    includeSource: ["src/**/*.{js,ts}"],
    setupFiles: ["src/setup-tests.ts"],
    watch: false,
  },
});
