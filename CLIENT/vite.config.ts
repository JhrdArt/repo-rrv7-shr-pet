import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { env } from "process";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "app")
    },
  },
  plugins: [tailwindcss(), 
    reactRouter(),
    tsconfigPaths()
  ],
  build: {
    outDir: "build", 
    rollupOptions: {
      input: "app/root.tsx", 
    },
  }
});
