<template>
  <div class="home-container">
    <div @click="handleSubscribe" class="subscribe-section">订阅推送通知</div>
    <!-- <div @click="handleNotification" class="test-btn">模拟推送通知</div> -->
    <div class="video-section">
      <video src="https://file.supamob.com.cn/1513c548/pwa/1721024379876.mp4" controls loop autoplay></video>
    </div>

    <div class="audio">
      
      <!-- 音频 -->
      <audio src="https://file.supamob.com.cn/1513c548/pwa/1721025382670.mp3" controls ></audio>
    </div>
    
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount, onMounted } from 'vue'

import { subscribeUser } from '@/utils/notifications'

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
        body: `快来参加我们的夏季特卖活动！${new Date().getTime()}`,
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

const handleSubscribe = async () => {
  try {
    await subscribeUser()
  } catch (error) {
    console.error('订阅失败:', error)
  }
}

// onBeforeMount(() => {
//   window.location.replace('https://www.tiktok.com/')
// })


onMounted(() => {
  window.addEventListener('load', function() {
  var video: any = document.querySelector('video');
  video.addEventListener('loadeddata', function() {
    video.play();
    video.loop = true;
  });
});
})
</script>

<style lang="less" scoped>
.home-container {
  h1 {
    font-size: 26px;
  }

  .subscribe-section {
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


  .video-section {
    width: 750px;
    height: 500px;

    video {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
