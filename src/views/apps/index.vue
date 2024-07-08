<script setup lang="ts">
import { ref } from 'vue'

const handleNotification = () => {
  if (!('Notification' in window)) {
    alert('This browser does not support system notifications')
    return
  }

  Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
      const notification = new Notification('电商活动通知', {
        body: '快来参加我们的夏季特卖活动！',
        icon: 'https://cdn.jsdelivr.net/gh/wangdongovo/images@main/blog/202407041445910.png', // 替换成你的通知图标路径
        badge: 'https://cdn.jsdelivr.net/gh/wangdongovo/images@main/blog/202407041445910.png', // 替换成你的小图标路径
        data: {
          url: 'https://www.baidu.com/' // 替换成你的活动链接
        }
      })

      notification.onclick = () => {
        window.open(notification.data.url)
        notification.close()
      }
    }
  })
}
</script>

<template>
  <div class="apps-container">
    <h1>安装落地页</h1>

    <div @click="handleNotification">模拟推送通知</div>
  </div>
</template>

<style scoped>
.apps-container {
  h1 {
    font-size: 26px;
  }
}
</style>
