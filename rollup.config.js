/* eslint-disable import/no-extraneous-dependencies */
import yaml from 'rollup-plugin-yaml';
import pkg from './package.json';

export default {
  input: 'src/main.js',
  output: { name: 'typeIs', file: pkg.main, format: 'es' },
  plugins: [yaml()],
};
