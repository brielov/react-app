/// <reference types="vitest" />

import reactRefresh from "@vitejs/plugin-react-refresh";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [reactRefresh()],
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
  test: {
    global: true,
    environment: "jsdom",
    setupFiles: ["src/setupTests.ts"],
  },
});
