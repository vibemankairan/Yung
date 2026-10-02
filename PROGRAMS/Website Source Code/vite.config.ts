import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import fs from "node:fs";
import path from "node:path";
import { defineConfig, type Plugin } from "vite";

// Vite always writes <script type="module" crossorigin> in the HTML for the
// app build, even though rollupOptions.output.format below produces a plain
// IIFE bundle (no import/export). type="module" scripts are blocked by
// browsers when a page is opened via file:// (double-click), which is what
// caused the blank white page. Since the emitted bundle isn't actually an ES
// module, it's safe to rewrite the tag to a normal classic <script>.
function classicScriptTag(): Plugin {
  return {
    name: "classic-script-tag",
    closeBundle() {
      const htmlPath = path.resolve(
        import.meta.dirname,
        "dist/public/index.html",
      );
      if (!fs.existsSync(htmlPath)) return;
      let html = fs.readFileSync(htmlPath, "utf-8");
      html = html
        .replace(/<script type="module" crossorigin /g, "<script defer ")
        .replace(/ crossorigin href="\.\/assets\/style\.css"/g, ' href="./assets/style.css"');
      fs.writeFileSync(htmlPath, html);
    },
  };
}

export default defineConfig({
  base: "./",
  plugins: [react(), tailwindcss(), classicScriptTag()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
    },
  },
  envDir: path.resolve(import.meta.dirname),
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
    // Browsers block type="module" scripts from loading over file:// (CORS),
    // which is why double-clicking index.html showed a blank page. Forcing a
    // classic (non-module) single-file bundle avoids that entirely so the
    // site opens correctly with a plain double-click, no server required.
    modulePreload: false,
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        format: "iife",
        inlineDynamicImports: true,
        entryFileNames: "assets/app.js",
        chunkFileNames: "assets/app.js",
        assetFileNames: "assets/[name][extname]",
      },
    },
  },
  server: {
    port: 3000,
    strictPort: false,
    host: true,
  },
});
