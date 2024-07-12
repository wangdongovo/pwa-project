import './assets/main.less'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { registerSW } from 'virtual:pwa-register'
import { requestNotificationPermission } from '@/utils/notifications'



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


if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then((registration) => {
      console.log('Service Worker registered with scope:', registration.scope);
    })
    .catch((error) => {
      console.log('Service Worker registration failed:', error);
    });
}


// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker
//     .register('/dev-sw.js?dev-sw', { scope: '/', type: 'classic' })
//     .then((registration) => {
//       console.log('服务工作线程注册成功，范围:', registration.scope)
//     })
//     .catch((error) => {
//       console.error('服务工作线程注册失败:', error)
//     })
// }


// 设置和清除小红点的逻辑
if ('setAppBadge' in navigator) {
  // 设置小红点
  navigator.setAppBadge(1).catch((error) => {
    console.error('设置小红点失败:', error);
  });
}

if ('clearAppBadge' in navigator) {
  // 清除小红点
  navigator.clearAppBadge().catch((error) => {
    console.error('清除小红点失败:', error);
  });
}

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

requestNotificationPermission()
