import swc from 'unplugin-swc';
import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    globals: true,
    alias: {
      '@src': './src',
      '@test': './test',
    },
    root: './',
  },
  resolve: {
    alias: {
      '@src': './src',
      '@test': './test',
    },
  },
  plugins: [swc.vite()],
});
