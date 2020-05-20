import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import webWorkerLoader from 'rollup-plugin-web-worker-loader'

const production = !process.env.ROLLUP_WATCH

export default {
  input: 'src/main.js',
  output: {
    file: 'public/bundle.js',
    format: 'iife',
    sourcemap: true,
  },
  plugins: [resolve(), commonjs(), webWorkerLoader(), production && terser()],
  format: 'esm',
}
