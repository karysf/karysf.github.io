import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig(() => {
  const config = {
    plugins: [react(), svgr()],
    base: "./",
  };

  return config;
});
