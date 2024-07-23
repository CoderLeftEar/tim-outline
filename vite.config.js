import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd())

  return defineConfig({
    plugins: [vue()],
    base: env.VITE_APP_BASE_URL || '/',
    server: {
      host: '0.0.0.0',
      port: 9191
    }
  })
}
