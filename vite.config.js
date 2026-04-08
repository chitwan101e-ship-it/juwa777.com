import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    host: 'localhost', // Listen on localhost
    port: 5173,
    strictPort: false,
    open: true // Automatically open browser
  },
  base: '/', // Change this to '/JuwaCasino/' if your repo is not using a custom domain
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true
  }
})