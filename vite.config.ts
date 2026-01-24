import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"

export default defineConfig({
  // Your actual app lives here
  root: path.resolve(__dirname, "client"),

  // Required so assets load correctly on Vercel
  base: "/",

  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src")
    }
  },

  build: {
    // IMPORTANT: output goes to repo-level /dist
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true
  }
})