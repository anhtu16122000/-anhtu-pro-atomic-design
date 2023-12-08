const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const typescript = require('@rollup/plugin-typescript');
const dts = require('rollup-plugin-dts').default;
const tailwindcss = require('tailwindcss');
const postcss = require('rollup-plugin-postcss')
const babel = require('@rollup/plugin-babel').default;

const tailwindConfig = require('./tailwind.config.js');

const packageJson = require('./package.json');

module.exports = [
  {
    external: ['react', 'react-dom', 'react/jsx-runtime'],
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      postcss({
        config: {
          path: './postcss.config.js'
        },
        extensions: ['.css', '.module.css'],
        minimize: true,
        inject: {
          insertAt: 'top'
        },
        plugins: [tailwindcss(tailwindConfig)],
      }),
      babel({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**', // Exclude node_modules
        presets: [
          '@babel/preset-env', // Enable transpilation for modern JavaScript features
          '@babel/preset-react', // Enable React JSX support
        ],
      }),
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
    ],
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    external: ['/\.css', './tailwind.css']
  },
];