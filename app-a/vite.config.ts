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
    port: 3001,
  },
  plugins: [
    react(),
    federation({
      name: "app-a",
      filename: "app-a.js",
      exposes: {
        "./App": "./src/App.tsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
});
