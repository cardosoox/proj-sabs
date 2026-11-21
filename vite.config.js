import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "./" para funcionar em qualquer subcaminho (GitHub Pages, Netlify, etc.)
export default defineConfig({
  plugins: [react()],
  base: "./",
});
