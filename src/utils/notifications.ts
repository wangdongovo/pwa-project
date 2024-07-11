/**
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

export function showLocalNotification(title: string, body: string) {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then((registration) => {
      registration.showNotification(title, {
        body,
        icon: 'icons/icon-192x192.png',
        badge: 'icons/icon-192x192.png'
      })
    })
  }
}
