/* eslint-disable import/no-extraneous-dependencies */
import yaml from 'rollup-plugin-yaml';
import cleaner from 'rollup-plugin-cleaner';
import pkg from './package.json';
/* eslint-enable import/no-extraneous-dependencies */

export default {
  input: 'src/main.js',
  output: [
    { name: 'typeIs', file: pkg.module, format: 'es' },
    { name: 'typeIs', file: pkg.browser, format: 'umd' },
    { name: 'typeIs', file: pkg.main, format: 'cjs' },
  ],
  plugins: [yaml(), cleaner({ targets: ['./dist/'] })],
};
