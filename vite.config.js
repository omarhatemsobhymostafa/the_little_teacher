import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  
  base: "/the-little-teacher/", // This ensures correct base path for GitHub Pages
});
