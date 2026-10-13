import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        thailand: resolve(__dirname, 'countries/thailand.html'),
        malaysia: resolve(__dirname, 'countries/malaysia.html'),
        singapore: resolve(__dirname, 'countries/singapore.html'),
        saudi: resolve(__dirname, 'countries/saudi.html'),
        kuwait: resolve(__dirname, 'countries/kuwait.html'),
        bahrain: resolve(__dirname, 'countries/bahrain.html'),
        qatar: resolve(__dirname, 'countries/qatar.html'),
        brunei: resolve(__dirname, 'countries/brunei.html'),
      }
    }
  }
});
