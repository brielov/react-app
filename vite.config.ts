/// <reference types="vitest" />
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

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
    setupFiles: ["src/setup-tests.ts"],
    watch: false,
    includeSource: ["src/**/*.{js,ts}"],
  },
});
