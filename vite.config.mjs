// vite.config.mjs
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Saran-Portfolio/", // required so assets resolve under the repo path on GitHub Pages
  plugins: [react()],
});
