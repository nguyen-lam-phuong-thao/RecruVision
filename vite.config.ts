import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),],
  base: "./",
  css: {},
  optimizeDeps: {
    include: ['pdfjs-dist/build/pdf.worker.mjs'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'pdfjs-worker': ['pdfjs-dist/build/pdf.worker.mjs'],
        },
      },
    },
  },
});
