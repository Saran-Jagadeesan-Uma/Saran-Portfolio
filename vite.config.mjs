import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Saran-Portfolio/",   // <-- add this (include leading and trailing slash)
  plugins: [react()],
  server: { port: 5173 }
});
