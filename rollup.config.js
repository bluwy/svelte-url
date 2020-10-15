import resolve from '@rollup/plugin-node-resolve'
import svelte from 'rollup-plugin-svelte'

export default [
  // SPA
  {
    input: 'src/main.js',
    output: {
      format: 'iife',
      name: 'app',
      file: 'public/build/bundle.js',
    },
    plugins: [
      svelte({
        dev: true,
        hydratable: true,
        css: (css) => {
          css.write('bundle.css')
        },
      }),
      resolve({
        browser: true,
        dedupe: ['svelte'],
      }),
    ],
  },
  // SSR
  {
    input: 'src/App.svelte',
    output: {
      format: 'cjs',
      name: 'app',
      file: 'public/build/App.js',
      exports: 'named',
    },
    plugins: [
      svelte({
        dev: true,
        generate: 'ssr',
        css: (css) => {
          css.write('bundle.css')
        },
      }),
      resolve({
        browser: false,
        dedupe: ['svelte'],
      }),
    ],
  },
]
