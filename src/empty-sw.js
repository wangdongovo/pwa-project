self.addEventListener('notificationclick', function (event) {
  console.log('🍍🙏🍍👉: 触发 notificationclick 事件')
  const url = event.notification.data.url
  event.notification.close()
  event.waitUntil(
    clients.matchAll({ type: 'window' }).then((windowClients) => {
      console.log('当前打开的窗口:', windowClients)

      for (let i = 0; i < windowClients.length; i++) {
        const client = windowClients[i]
        if (client.url === url && 'focus' in client) {
          console.log('找到已经打开的目标窗口，聚焦:', url)
          return client.focus()
        }
      }

      if (clients.openWindow) {
        console.log('没有找到目标窗口，打开一个新的:', url)
        return clients.openWindow(url)
      }
    })
  )
})

self.addEventListener('push', (event) => {
  const data = event.data.json()
  console.log('🍍🙏🍍👉: 收到服务端推送', data)

  const options = {
    body: data.body, // 通知的正文内容
    icon: 'https://cdn.jsdelivr.net/gh/wangdongovo/images@main/blog/202407151211206.png', // 图标的 URL，用于在通知中显示图标
    image: 'https://cdn.jsdelivr.net/gh/wangdongovo/images@main/blog/202407151211343.png', // 大图片的 URL，用于在通知中显示大图片
    badge: 'https://cdn.jsdelivr.net/gh/wangdongovo/images@main/blog/202407151210536.png', // URL，用于显示在通知上的徽章（通常是一个小图标）
    vibrate: [200, 100, 200], // 设备振动模式（数组形式），用于通知振动效果
    tag: 'example-notification', // 通知标签，用于合并具有相同标签的通知
    data: {
      url: data.url // 自定义数据，可以在通知点击时传递
    },
    actions: [
      {
        action: 'open_url', // 按钮动作标识符
        title: 'Open URL' // 按钮标题
      },
      {
        action: 'dismiss', // 另一个按钮动作标识符
        title: 'Dismiss' // 另一个按钮标题
      }
    ],
    dir: 'ltr', // 文本方向（`auto`、`ltr` 或 `rtl`）
    lang: 'en-US', // 通知的语言
    requireInteraction: false, // 是否要求用户交互（即通知不会自动消失）
    renotify: true, // 是否在更新通知时发出提示音
    silent: false, // 是否静音（即通知不会发出声音）
    timestamp: Date.now(), // 时间戳，用于显示通知的时间
    noscreen: false, // 是否阻止通知在屏幕上弹出
    sticky: false // 是否使通知粘性（不会被自动关闭）
  }

  event.waitUntil(self.registration.showNotification(data.title, options))
})
