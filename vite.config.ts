/// <reference types="vitest" />

import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  build: {
    target: "es2020",
  },
  test: {
    environment: "jsdom",
    global: true,
    watch: false,
  },
});
