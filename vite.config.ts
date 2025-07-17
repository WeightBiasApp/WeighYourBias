// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  publicDir: "./static",
  base: command === 'serve' ? '/' : '/weigh-your-bias/', // Update with your repo name
  css: {
    postcss: {
      plugins: [tailwind()],
    },
  },
  server: {
    host: true,
    port: 5173,
    hmr: {
      timeout: 5000,
    },
  },
}));
