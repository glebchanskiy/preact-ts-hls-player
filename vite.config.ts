import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { externalizeDeps } from 'vite-plugin-externalize-deps'

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'preact-ts-hls-player',
      fileName: 'index',
      // formats: ['es', 'cjs']
    },
    rollupOptions: {
      external: ['preact', '@preact/signals', 'hls.js'],
      output: {
        globals: {
          preact: 'preact',
          '@preact/signals': '@preact/signals',
          'hls.js': 'hls.js'
        }
      }
    }
  },
  plugins: [
    dts({
      insertTypesEntry: true,
      include: ['src/index.ts', 'src/lib']
    }),
    // externalizeDeps({
    //   deps: true,
    //   devDeps: false,
    //   except: [],
    //   nodeBuiltins: true,
    //   optionalDeps: true,
    //   peerDeps: true,
    // })
  ]
});
