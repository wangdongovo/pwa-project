import './assets/main.less'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { requestNotificationPermission } from '@/utils/notifications'

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/dev-sw.js?dev-sw', { scope: '/', type: 'classic' })
    .then((registration) => {
      console.log('服务工作线程注册成功，范围:', registration.scope)
    })
    .catch((error) => {
      console.error('服务工作线程注册失败:', error)
    })
}

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

requestNotificationPermission()
