import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Demo app: the website UI kit, component gallery and foundations.
export default defineConfig({
  root: resolve(import.meta.dirname, 'demo'),
  base: './',
  server: { fs: { allow: [import.meta.dirname] } },
  plugins: [react()],
  build: {
    outDir: resolve(import.meta.dirname, 'dist-demo'),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: resolve(import.meta.dirname, 'demo/index.html'),
        components: resolve(import.meta.dirname, 'demo/components.html'),
        foundations: resolve(import.meta.dirname, 'demo/foundations.html'),
        thumbnail: resolve(import.meta.dirname, 'demo/thumbnail.html'),
      },
    },
  },
});
