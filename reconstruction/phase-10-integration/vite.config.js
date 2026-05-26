import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  publicDir: false,
  build: {
    outDir: 'dist',
    lib: {
      entry: 'src/index.js',
      name: 'TradingView',
      formats: ['es', 'umd'],
      fileName: (format) => `charting-library.${format}.js`
    },
    rollupOptions: {
      external: []
    }
  },
  server: {
    open: '/demo/index.html'
  }
});
