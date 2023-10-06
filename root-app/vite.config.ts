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
    port: 3003,
  },
  plugins: [
    react(),
    federation({
      name: "root-app",
      remotes: {
        "app-a": "http://localhost:3001/assets/app-a.js",
        "app-b": "http://localhost:3002/assets/app-b.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],
});
