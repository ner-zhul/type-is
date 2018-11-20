import pkg from './package.json';

export default {
  input: 'src/main.js',
  output: { name: 'typeIs', file: pkg.main, format: 'es' },
};
