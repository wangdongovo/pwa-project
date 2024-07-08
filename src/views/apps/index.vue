<template>
  <div class="apps-container">
    <div class="nav-section">
      <a href="/store/games" aria-label="Google Play 徽标" class="f0UV3d">
        <svg
          class="kOqhQd"
          aria-hidden="true"
          viewBox="0 0 40 40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="none" d="M0,0h40v40H0V0z"></path>
          <g>
            <path
              d="M19.7,19.2L4.3,35.3c0,0,0,0,0,0c0.5,1.7,2.1,3,4,3c0.8,0,1.5-0.2,2.1-0.6l0,0l17.4-9.9L19.7,19.2z"
              fill="#EA4335"
            ></path>
            <path
              d="M35.3,16.4L35.3,16.4l-7.5-4.3l-8.4,7.4l8.5,8.3l7.5-4.2c1.3-0.7,2.2-2.1,2.2-3.6C37.5,18.5,36.6,17.1,35.3,16.4z"
              fill="#FBBC04"
            ></path>
            <path
              d="M4.3,4.7C4.2,5,4.2,5.4,4.2,5.8v28.5c0,0.4,0,0.7,0.1,1.1l16-15.7L4.3,4.7z"
              fill="#4285F4"
            ></path>
            <path
              d="M19.8,20l8-7.9L10.5,2.3C9.9,1.9,9.1,1.7,8.3,1.7c-1.9,0-3.6,1.3-4,3c0,0,0,0,0,0L19.8,20z"
              fill="#34A853"
            ></path>
          </g>
        </svg>
        <span aria-hidden="true">Google Play</span>
      </a>
    </div>

    <div class="app-section">
      <div class="first-content">
        <img
          class="icon"
          src="https://play-lh.googleusercontent.com/Ui_-OW6UJI147ySDX9guWWDiCPSq1vtxoC-xG17BU2FpU0Fi6qkWwuLdpddmT9fqrA=w480-h960-rw"
          alt=""
        />
        <div class="first-content-text">
          <h1>TikTok</h1>
          <p class="p1">TikTok Pte. Ltd.</p>
          <p class="p2">应用内购商品</p>
        </div>
      </div>
    </div>

    <div class="pwa-container">
      <div
        v-if="installedAppsCount === 0"
        class="download-section"
        id="installPrompt"
        @click="handleInstallClick"
      >
        安装
      </div>
      <div v-else class="open-section" id="openApp" @click="handleOpenAppClick">打开</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

const deferredPrompt = ref<BeforeInstallPromptEvent | null>(null)
const installedAppsCount = ref<number>(0)

const updateButtonVisibility = (count: number) => {
  installedAppsCount.value = count
}

const getInstalledApps = async () => {
  if ('getInstalledRelatedApps' in navigator) {
    try {
      const installedApps = await (navigator as any).getInstalledRelatedApps()
      updateButtonVisibility(installedApps.length)
    } catch (error) {
      console.error('获取已安装应用时出错:', error)
      updateButtonVisibility(0)
    }
  } else {
    const isInstalled = localStorage.getItem('isInstalled') === 'true'
    updateButtonVisibility(isInstalled ? 1 : 0)
  }
}

const handleBeforeInstallPrompt = (event: Event) => {
  event.preventDefault()
  deferredPrompt.value = event as BeforeInstallPromptEvent
  localStorage.setItem('installPrompt', 'true')
  updateButtonVisibility(0)
}

const handleAppInstalled = () => {
  console.log('触发 appinstalled 事件，PWA 安装完成')
  localStorage.setItem('isInstalled', 'true')
  localStorage.removeItem('installPrompt')
  updateButtonVisibility(1)
}

onMounted(() => {
  window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
  window.addEventListener('appinstalled', handleAppInstalled)
  getInstalledApps()
})

onUnmounted(() => {
  window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
  window.removeEventListener('appinstalled', handleAppInstalled)
})

const handleInstallClick = async () => {
  if (deferredPrompt.value) {
    try {
      await deferredPrompt.value.prompt()
      const choiceResult = await deferredPrompt.value.userChoice
      if (choiceResult.outcome === 'accepted') {
        console.log('用户接受了安装')
        localStorage.setItem('isInstalled', 'true')
        localStorage.removeItem('installPrompt')
        updateButtonVisibility(1)
      } else {
        console.log('用户取消了安装')
      }
    } catch (error) {
      console.error('执行安装提示时出错:', error)
    } finally {
      deferredPrompt.value = null
    }
  }
}

const handleOpenAppClick = () => {
  console.log('用户点击了打开应用按钮')
  if (
    window.matchMedia('(display-mode: standalone)').matches ||
    (window.navigator as any).standalone
  ) {
    window.location.href = '/'
  } else {
    window.open(`${window.location.origin}/`, '_blank')
  }
}
</script>

<style scoped lang="less">
@font-face {
  font-family: 'Google Sans';

  src: url(https://fonts.gstatic.com/s/googlesans/v58/4UasrENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iqcsih3SAyH6cAwhX9RPjIUvbQoi-E.woff2)
    format('woff2');
}

.apps-container {
  .nav-section {
    align-items: center;
    display: flex;
    height: 112px;
    width: 100%;

    .f0UV3d {
      fill: rgb(95, 99, 104);
      stop-color: rgb(95, 99, 104);
      font-family: 'Google Sans', Roboto, Arial, sans-serif;

      font-size: 44px;
      letter-spacing: 0;
      font-weight: 500;
      align-items: center;
      display: flex;
      height: 100%;
      margin: 0 16px;
      white-space: nowrap;
      z-index: 1;

      .kOqhQd {
        margin-right: 16px;
        height: 80px;
        width: 80px;
      }
    }
  }

  .app-section {
    margin: 0 auto;
    min-height: 56px;
    position: relative;
    width: calc(100% - 96px);
    .first-content {
      margin-top: 96px;

      display: flex;
      .icon {
        border-radius: 20%;
        border-width: 0;
        box-shadow:
          0 1px 2px 0 rgba(60, 64, 67, 0.3),
          0 1px 3px 1px rgba(60, 64, 67, 0.15);

        margin: 7px 24px 0 0;
        width: 144px;
      }

      .first-content-text {
        h1 {
          font-family: 'Google Sans', Roboto, Arial, sans-serif;

          font-size: 48px;
          letter-spacing: 0;

          font-weight: 500;
          align-items: flex-end;
          display: flex;
          overflow-wrap: anywhere;
          width: 100%;
          word-break: keep-all;
        }

        .p1 {
          font-family: 'Google Sans', Roboto, Arial, sans-serif;
          font-size: 32px;
          letter-spacing: 0.00625em;
          font-weight: 500;
          fill: #01875f;
          stop-color: #01875f;
        }

        .p2 {
          fill: rgb(95, 99, 104);
          stop-color: rgb(95, 99, 104);
          font-family: Roboto, Arial, sans-serif;

          font-size: 24px;
          letter-spacing: 0.025em;
          font-weight: 400;
          color: rgb(95, 99, 104);
        }
      }
    }
  }

  .download-section,
  .open-section {
    background-color: #01875f;
    height: 72px;
    line-height: 72px;
    text-align: center;
    font-family: 'Google Sans', Roboto, Arial, sans-serif;
    width: calc(100% - 96px);
    margin: 0 auto;
    border-radius: 8px;
    color: #fff;
    font-size: 28px;
    margin-top: 24px;
    cursor: 'pointer';
  }
}

.nav-section {
  // 导航栏样式
}

.app-section {
  // 应用信息部分样式
}

.pwa-container {
  // PWA 安装按钮或打开按钮样式
}

.download-section {
  // 安装按钮样式
  cursor: pointer;
}

.open-section {
  // 打开按钮样式
  cursor: pointer;
}
</style>
