import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('/node_modules/three/build/')) return 'three-core';
          if (id.endsWith('/src/simulation/civilization.js')) return 'civilization';
        }
      }
    }
  }
});
