import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import { addHashOnProd, resolve } from './vite.config'

// https://vitejs.dev/config/
const config = defineConfig(({ mode }) => ({
  appType: 'custom',
  root: '.',
  plugins: [react()],
  base: '/assets/',
  ssr: {
    noExternal: ['@inertiajs/react'],
  },
  legacy: {
    buildSsrCjsExternalHeuristics: true,
  },
  build: {
    ssr: true,
    manifest: mode === 'development',
    ssrEmitAssets: mode === 'development',
    copyPublicDir: false,
    emptyOutDir: true,
    outDir:
      mode === 'development' ? resolve('server/public/assets') : resolve('server/inertia/ssr'),
    assetsDir: '.',
    rollupOptions: {
      input: resolve('client/src/entrypoint-ssr.tsx'),
      output: {
        assetFileNames: (asset) => {
          return asset.name?.match(/entrypoint-[c|s]sr\.css/)
            ? addHashOnProd('styles', null, mode)
            : addHashOnProd('[name]', null, mode)
        },
        entryFileNames: 'ssr.js',
      },
    },
  },
}))

export default config
