// eslint-disable-next-line
import svelte from 'rollup-plugin-svelte';
import path from 'path';

const buildFolder = process.env.NODE_ENV === 'production' ? 'packages' : 'build';

export default {
  plugins: [svelte({ onwarn() {} })],
  root: './',
  base: '',
  publicDir: path.resolve(__dirname, 'public'),
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    assetsInlineLimit: 0,
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      'framework7/lite/bundle': path.resolve(
        __dirname,
        `../../${buildFolder}/core/framework7-lite-bundle.esm.js`,
      ),
      'framework7/css/bundle': path.resolve(
        __dirname,
        `../../${buildFolder}/core/framework7-bundle.css`,
      ),
      'framework7/lite': path.resolve(
        __dirname,
        `../../${buildFolder}/core/framework7-lite.esm.js`,
      ),
      'framework7-svelte': path.resolve(__dirname, `../../${buildFolder}/svelte`),
    },
  },
};
