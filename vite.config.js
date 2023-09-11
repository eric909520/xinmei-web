import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import postCssPxToRem from "postcss-pxtorem"
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  server: {
    host: '0.0.0.0',
    port: 7000,
    cors: true,
    // https: true,
    proxy: {
      "/api": {
        target: 'http://10.15.25.143:81',
        changeOrigin: true,
        // secure: false
      },
    }
  },
  css: {
    // 此代码为适配移动端px2rem
    postcss: {
      plugins: [
        postCssPxToRem({
          rootValue: 57.5, // 1rem的大小
          propList: ['*'], // 需要转换的属性，这里选择全部都进行转换
        })
      ]
    }
  },
  plugins: [vue()],
})
