import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { registerSW } from 'virtual:pwa-register'
import { requestNotificationPermission } from '@/utils/notifications'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

requestNotificationPermission()

const updateSW = registerSW({
  onNeedRefresh() {
    // 显示一个通知给用户，让他们手动刷新
    console.log('新的内容可用，请刷新页面。')
  },
  onOfflineReady() {
    // 应用准备离线使用
    console.log('应用现在可供离线使用。')
  }
})
