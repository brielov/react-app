/// <reference types="vitest" />

import reactRefresh from "@vitejs/plugin-react-refresh";
import { defineConfig } from "vite";
import { join } from "path";

export default defineConfig({
  plugins: [reactRefresh()],
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
  build: {
    target: "es2020",
  },
  resolve: {
    alias: {
      src: join(__dirname, "src"),
    },
  },
  test: {
    environment: "jsdom",
    global: true,
    watch: false,
  },
});
