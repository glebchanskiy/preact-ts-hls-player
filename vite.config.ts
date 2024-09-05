import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'preact-ts-hls-player',
      fileName: 'index'
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
    })
  ]
});
