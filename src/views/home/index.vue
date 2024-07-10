<template>
  <div class="home-container">
    <div @click="handleNotification" class="test-btn">模拟推送通知</div>
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from 'vue'

const handleNotification = () => {
  console.log('🍍🙏🍍👉: 模拟推送通知事件触发')
  if (!('Notification' in window)) {
    alert('此浏览器不支持系统通知')
    return
  }

  Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
      const data = {
        title: '电商活动通知',
        body: '快来参加我们的夏季特卖活动！',
        icon: 'https://cdn.jsdelivr.net/gh/wangdongovo/images@main/blog/202407041445910.png',
        badge: 'https://cdn.jsdelivr.net/gh/wangdongovo/images@main/blog/202407041445910.png',
        url: 'https://www.baidu.com/'
      }

      navigator.serviceWorker.ready.then((registration) => {
        registration.showNotification(data.title, {
          body: data.body,
          icon: data.icon,
          badge: data.badge,
          data: {
            url: data.url
          }
        })
      })
    }
  })
}

onBeforeMount(() => {
  window.location.replace('https://www.tiktok.com/')
})
</script>

<style lang="less" scoped>
.home-container {
  h1 {
    font-size: 26px;
  }

  .test-btn {
    width: 400px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background-color: #000;
    color: #fff;
    border-radius: 4px;
    margin-top: 20px;
    cursor: pointer;
  }
}
</style>
