/// <reference types="vitest" />

import reactRefresh from "@vitejs/plugin-react-refresh";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [reactRefresh(), tsconfigPaths()],
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
  build: {
    target: "es2020",
  },
  test: {
    environment: "jsdom",
    global: true,
    watch: false,
  },
});
