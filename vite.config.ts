import { fileURLToPath } from 'node:url'
import { extname, relative, resolve } from 'path'

import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { globSync } from 'glob'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

import { peerDependencies } from './package.json'

/**
 * @see https://vite.dev/config/
 * @see https://rollupjs.org/configuration-options
 */
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    dts({
      tsconfigPath: './tsconfig.lib.json',
      exclude: ['**/*.stories.tsx', '**/*.test.tsx', './src/utils/**'],
    }),
  ],
  build: {
    copyPublicDir: false,
    lib: {
      entry: './src/main.ts',
      formats: ['es'],
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies), 'react/jsx-runtime'],
      input: Object.fromEntries(
        globSync('src/**/*.{ts,tsx}', {
          ignore: [
            '**/*.d.ts',
            '**/*.stories.tsx',
            '**/*.test.tsx',
            './src/utils/**',
          ],
        }).map((file) => [
          relative('src', file.slice(0, file.length - extname(file).length)),
          fileURLToPath(new URL(file, import.meta.url)),
        ]),
      ),
      output: {
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js',
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
})
