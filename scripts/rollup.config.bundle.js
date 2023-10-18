import babel from '@rollup/plugin-babel';
import typescript from 'rollup-plugin-typescript2'
import multiInput from 'rollup-plugin-multi-input';

export default {
  input: ['components/*.tsx', 'components/*.ts'],
  output: {
    dir: 'dist',
    format: 'esm',
    preserveModules: true,
  },
  external: ['react', 'prop-types'],
  plugins: [
    multiInput({
      relative: "components/"
    }),
    typescript(),
    babel({
      exclude: 'node_modules/**',
    }),
  ],
};
