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
  css:{
    // 此代码为适配移动端px2rem
      postcss: {
        plugins: [
          postCssPxToRem({
            rootValue: 37.5, // 1rem的大小
            propList: ['*'], // 需要转换的属性，这里选择全部都进行转换
          })
        ]
      }
  },
  plugins: [vue()],
})
