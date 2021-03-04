import babel from '@rollup/plugin-babel';
import path from 'path';
import copy from 'rollup-plugin-copy';

const resolveFile = function(filePath) {
  const newPath = path.join(__dirname, '..', filePath)
  console.log('joined path', newPath, __dirname)
  return newPath
}

export default {
  input: 'components/icons.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs',
  },
  external: ['react', 'prop-types'],
  plugins: [
    typescript(),
    copy({
      targets: [
        { src: resolveFile('components/icons.js'), dest: resolveFile('dist/') }
      ]
    }),
    babel({
      exclude: 'node_modules/**',
    }),
  ],
};
