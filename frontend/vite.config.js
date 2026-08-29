import { defineConfig } from 'vite';

export default defineConfig(({ command }) => ({
  // Si estamos en 'build' (producción), asigna el subpath del repo; en 'serve' (local) usa '/'
  base: command === 'build' ? '/Banquetes-Hub/' : '/',
  root: '.',

  // Inyecta la URL de la API según el entorno
  define: {
    __API_URL__: JSON.stringify(
      command === 'build'
        ? 'https://banquetes-hub.onrender.com/api' // Cambia esto por tu URL de Render
        : 'http://localhost:5000/api'
    )
  },
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