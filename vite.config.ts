import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  base: '/',
  resolve: {
    alias: {
      '@openeagle/vue-component-template': '/src',
    },
  },
  plugins: [vue(), vueJsx()],
})
