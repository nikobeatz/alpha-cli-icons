import babel from '@rollup/plugin-babel';
import path from 'path';
import copy from 'rollup-plugin-copy';
import typescript from 'rollup-plugin-typescript2'

// const resolveFile = function(filePath) {
//   const newPath = path.join(__dirname, '..', filePath)
//   console.log('joined path', newPath, __dirname)
//   return newPath
// }

export default {
  input: 'components/index.ts',
  output: {
    file: 'dist/index.js',
    format: 'cjs',
  },
  external: ['react', 'prop-types'],
  plugins: [
    typescript(),
    // commonjs(),
    // // Allow node_modules resolution, so you can use 'external' to control
    // // which external modules to include in the bundle
    // // https://github.com/rollup/rollup-plugin-node-resolve#usage
    // resolve(),

    // // Resolve source maps to the original source
    // sourceMaps(),
    copy({
      targets: [
        { src: resolveFile('components/icons.ts'), dest: resolveFile('dist/') }
      ]
    }),
    babel({
      exclude: 'node_modules/**',
    }),
  ],
};
