import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ViteRestart from 'vite-plugin-restart'
import app from './server/server'

const expressServerPlugin = (path, expressApp) => ({
  name: 'configure-server',
  configureServer(server) {
    server.middlewares.use(path, expressApp);
  }
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    ViteRestart({
      restart: [
        './src/App.jsx',
      ]
    }),
    expressServerPlugin('/', app)
  ], 
})
