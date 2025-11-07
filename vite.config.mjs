import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Saran-Portfolio/",
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("lottie-web") || id.includes("react-lottie-player")) {
              return "vendor-lottie";
            }
            if (id.includes("three") || id.includes("@react-three")) {
              return "vendor-three";
            }
            return "vendor";
          }
        },
      },
    },
  },
});
