import { defineConfig } from 'vite';

export default defineConfig(({ command }) => ({
  // Si estamos en 'build' (producción), asigna el subpath del repo; en 'serve' (local) usa '/'
  base: command === 'build' ? '/Banquetes-Hub/' : '/',
  root: '.',
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false
      }
    }
  },
  build: {
    outDir: 'dist',
    target: 'es2020'
  }
}));