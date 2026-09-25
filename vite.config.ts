/// <reference types="vitest/config" />
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Library build: dist/index.js (ESM) + dist/styles.css.
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: { index: resolve(import.meta.dirname, 'src/index.ts'), styles: resolve(import.meta.dirname, 'src/styles.css') },
      formats: ['es'],
    },
    cssCodeSplit: true,
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime', 'lucide-react'],
      output: { assetFileNames: '[name][extname]' },
    },
  },
  test: {
    environment: 'jsdom',
    include: ['src/**/*.test.tsx'],
  },
});
