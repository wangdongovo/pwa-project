/**
 * 用户授权通知
 *一旦用户选择授权，这个授权结果对通知 API 和推送 API 两者都有效。
 * 用户的授权的结果有三种，default（默认）、granted（允许）或者 denied（拒绝），
 * 当用户没有做出选择的时候，授权结果会返回 default，另外两种结果分别在用户选择了
 * 允许或者拒绝的时候返回。*/

export async function requestNotificationPermission() {
  if ('Notification' in window) {
    const permission = await Notification.requestPermission()
    if (permission === 'granted') {
      console.log('通知权限已授予')
    }
  }
}

const publicKey =
  'BM52cAZGBfOYkvLPOfgPi6EkbeOYzG2394T7CqdOdcfQBLITNqV6q-wvLy2hQYXEfLBH5NHSm8gRh4qahem95Hc'

// 订阅用户
export async function subscribeUser(): Promise<void> {
  try {
    // 获取 Service Worker 实例
    const serviceWorker = await navigator.serviceWorker.ready

    // 请求推送订阅
    const subscription = await serviceWorker.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(publicKey)
    })

    // 将订阅信息发送到后端保存
    await fetch('https://09e6-107-155-24-205.ngrok-free.app/subscribe', {
      method: 'POST',
      body: JSON.stringify(subscription),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    console.log('订阅成功！')
  } catch (error) {
    console.error('订阅失败:', error)
  }
}

// 将 base64 字符串转换为 Uint8Array 格式
function urlBase64ToUint8Array(base64String: string): Uint8Array {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4)
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/')
  const rawData = window.atob(base64)
  const outputArray = new Uint8Array(rawData.length)
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i)
  }
  return outputArray
}
