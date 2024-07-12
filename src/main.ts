// main.ts

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { registerSW } from 'virtual:pwa-register'
import { requestNotificationPermission } from '@/utils/notifications'

const app = createApp(App)

// 注册 Service Worker
const updateSW = registerSW({
  onNeedRefresh() {
    console.log('检测到新内容，请刷新页面。')
  },
  onOfflineReady() {
    console.log('应用已准备离线使用。')
  }
})

// 注册 Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js')
    .then((registration) => {
      console.log('Service Worker 注册成功，范围:', registration.scope)
    })
    .catch((error) => {
      console.error('Service Worker 注册失败:', error)
    })
}

// 设置和清除小红点的逻辑
if ('setAppBadge' in navigator && 'clearAppBadge' in navigator) {
  try {
    // 设置小红点
    navigator.setAppBadge(1).catch((error) => {
      console.error('设置小红点失败:', error)
    })

    // 清除小红点
    navigator.clearAppBadge().catch((error) => {
      console.error('清除小红点失败:', error)
    })
  } catch (error) {
    console.error('浏览器不支持设置小红点:', error)
  }
}

// 使用 Pinia 状态管理器
app.use(createPinia())
app.use(router)
app.mount('#app')

// 请求通知权限
requestNotificationPermission()
