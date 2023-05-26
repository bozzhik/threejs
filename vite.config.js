import {defineConfig} from 'vite'
import {qrcode} from 'vite-plugin-qrcode'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [qrcode()],
  build: {
    outDir: 'docs',
    assetsDir: 'assets',
    publicDir: 'public',
    assetsInclude: ['CNAME'],
    minify: true,
    rollupOptions: {
      output: {
        entryFileNames: '[name].[hash].js',
        chunkFileNames: '[name].[hash].js',
        assetFileNames: '[name].[hash].[ext]',
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  base: '',
})
