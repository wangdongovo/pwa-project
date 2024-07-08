import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import { VitePWA } from 'vite-plugin-pwa'
import autoprefixer from 'autoprefixer'
import pxtoviewport from 'postcss-px-to-viewport-8-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    VitePWA({
      manifest: {
        short_name: '易观天命',
        name: '易观天命',
        icons: [
          {
            src: 'icons/manifest-icon-192.maskable.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: 'icons/manifest-icon-192.maskable.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'maskable'
          },
          {
            src: 'icons/manifest-icon-512.maskable.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: 'icons/manifest-icon-512.maskable.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ],
        start_url: '.',
        display: 'standalone',
        scope: '/',
        theme_color: '#000000',
        background_color: '#ffffff',
        related_applications: [
          {
            platform: 'webapp',
            url: 'https://dailyface.bingotom.com/easy-observe-fate-overseas/manifest.webmanifest'
          }
        ],
        prefer_related_applications: true
      },
      registerType: 'autoUpdate',
      workbox: {
        clientsClaim: true,
        skipWaiting: true
      },
      devOptions: {
        enabled: true
      }
    })
  ],
  css: {
    postcss: {
      plugins: [
        autoprefixer(),
        pxtoviewport({
          viewportWidth: 750, // 视窗的宽度，对应的是我们设计稿的宽度，可以设置为375或者750，默认是750
          viewportHeight: 1334, // 视窗的高度，可以根据设计稿的高度自行设置
          unitPrecision: 5, // 指定`px`转换为视窗单位值的小数位数
          viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用vw
          selectorBlackList: ['.ignore', '.hairlines'], // 指定不需要转换的类名
          minPixelValue: 1, // 小于或等于该值的像素不会被转换
          mediaQuery: false, // 允许在媒体查询中转换`px`
          replace: true, // 是否替换原始值，如果为true，则直接修改属性值，否则返回计算后的值
          exclude: [/node_modules/], // 排除某些文件夹下的文件，例如 node_modules
          landscape: false // 是否考虑横屏情况
        })
      ]
    }
  },

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
