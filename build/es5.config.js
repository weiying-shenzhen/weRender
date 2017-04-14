import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import eslint from 'rollup-plugin-eslint';
import uglify from 'rollup-plugin-uglify';

const isProduction = process.env.NODE_ENV === 'production'

export default {
  entry: 'src/index.js',
  moduleName: "weRender",
  format: 'iife',
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**'
    }),
    eslint({
      exclude: [
        'src/styles/**'
      ]
    }),
    ( isProduction && uglify())
  ],
  dest: isProduction ? 'dist/weRender.min.js' : 'dist/weRender.es5.js'
};