import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import JsxVue from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    vue(),
    JsxVue(),
    AutoImport({
      imports: ['vue'],
      dts: 'src/auto-imports.d.ts',
      eslintrc: {
        enabled: true,
        filepath: './.auto-import.json'
      }
    }),
    Components({
      extensions: ['vue', 'tsx'],
      dts: './components.d.ts',
      resolvers: [
        VantResolver({
          importStyle: 'css'
        })
      ]
    })
  ],
  server: {
    host: '0.0.0.0'
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/style/theme.scss";'
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@views': path.resolve(__dirname, './src/views'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@assets': path.resolve(__dirname, './src/assets')
    }
  }
})
