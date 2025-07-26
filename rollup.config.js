// rollup.config.js
export default [
  {
    input: 'src/index.js',
    output: [
      {
        file: 'dist/index.cjs',
        format: 'cjs',
        exports: 'named'
      },
      {
        file: 'dist/index.mjs',
        format: 'esm'
      }
    ]
  }
];
