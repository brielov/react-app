/// <reference types="vitest" />

import reactRefresh from "@vitejs/plugin-react-refresh";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [reactRefresh()],
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
  test: {
    environment: "jsdom",
    global: true,
    watch: false,
  },
});
