/* eslint-disable import/no-extraneous-dependencies */
import cleaner from 'rollup-plugin-cleaner';
import pkg from './package.json';
/* eslint-enable import/no-extraneous-dependencies */

export default {
  input: 'src/main.js',
  output: { name: 'typeIs', file: pkg.main, format: 'es' },
  plugins: [cleaner({ targets: ['./dist/'] })],
};
