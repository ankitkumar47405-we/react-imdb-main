import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import WindiCSS from 'vite-plugin-windicss'

export default defineConfig({
  plugins: [
    react(),
    WindiCSS(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
        format: 'es'
      }
    },
    base: './',
    assetsDir: 'assets',
    emptyOutDir: true
  },
  server: {
    headers: {
      'Content-Type': 'application/javascript'
    }
  }
})