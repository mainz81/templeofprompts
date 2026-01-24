import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"

export default defineConfig({
  // The React app lives here
  root: path.resolve(__dirname, "client"),

  plugins: [react()],

  // Needed so assets load correctly on Vercel
  base: "/",

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src"),
    },
  },

  build: {
    // Output to repo-level /dist
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
  },
})
