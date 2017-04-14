import eslint from 'rollup-plugin-eslint';

export default {
  entry: 'src/index.js',
  format: 'cjs',
  plugins: [
    eslint({
      exclude: [
        'src/styles/**'
      ]
    })
  ],
  dest: 'dist/weRender.js'
};