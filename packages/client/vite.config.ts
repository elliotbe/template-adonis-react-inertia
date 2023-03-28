import react from '@vitejs/plugin-react-swc'
import path from 'node:path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
const config = defineConfig(({ command, mode }) => ({
  appType: 'custom',
  root: command === 'serve' ? path.resolve('..') : '.',
  plugins: [react(), reloadEdgeFiles()],
  base: command === 'serve' ? '/' : '/assets/',
  server: {
    port: 8080,
    origin: 'http://localhost:8080',
  },
  build: {
    manifest: true,
    copyPublicDir: false,
    emptyOutDir: true,
    outDir: resolve('server/public/assets'),
    assetsDir: '.',
    rollupOptions: {
      input: resolve('client/src/entrypoint-csr.tsx'),
      output: {
        assetFileNames: (asset) => {
          return asset.name?.match(/entrypoint-[c|s]sr\.css/)
            ? addHashOnProd('styles', null, mode)
            : addHashOnProd('[name]', null, mode)
        },
        entryFileNames: addHashOnProd('app', '.js', mode),
      },
    },
  },
}))

export default config

export const resolve = (...paths: string[]) => path.resolve('..', ...paths)

export const addHashOnProd = (name: string, extname: string | null, mode: string) => {
  let fileName = name
  fileName += mode === 'production' ? '-[hash]' : ''
  fileName += extname ?? '[extname]'
  return fileName
}

const reloadEdgeFiles = () => {
  return {
    name: 'reload-edge-files',
    enforce: 'post' as const,
    handleHotUpdate({ file, server }) {
      if (file.endsWith('.edge')) {
        server.ws.send({
          type: 'full-reload',
          path: 'server/resources/views/*',
        })
      }
    },
  }
}
