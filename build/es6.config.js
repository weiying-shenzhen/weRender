import eslint from 'rollup-plugin-eslint';
import babel from 'rollup-plugin-babel';

export default {
  entry: 'src/index.js',
  format: 'cjs',
  plugins: [
    eslint({
      exclude: [
        'src/styles/**'
      ]
    }),
    babel({
      babelrc: false,
      plugins: ["external-helpers", "transform-class-properties"],
    })
  ],
  dest: 'dist/weRender.es6.js'
};
