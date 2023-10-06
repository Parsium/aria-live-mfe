import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: "esnext",
    modulePreload: false,
  },
  preview: {
    strictPort: true,
    port: 3002,
  },
  plugins: [
    react(),
    federation({
      name: "app-b",
      filename: "app-b.js",
      exposes: {
        "./App": "./src/App.tsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
});
