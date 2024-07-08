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
