import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  root: "src-v2",
  plugins: [
    react(),
    tailwindcss(),
    tsconfigPaths({ projects: ["../tsconfig.v2.json"] }),
  ],
  build: {
    outDir: "../dist-v2",
    emptyOutDir: true,
  },
  server: {
    port: 5174,
  },
  preview: {
    port: 4174,
  },
});
