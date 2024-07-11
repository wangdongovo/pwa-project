if('serviceWorker' in navigator) navigator.serviceWorker.register('/dev-sw.js?dev-sw', { scope: '/', type: 'classic' }).then((registration) => {
    console.log('服务工作线程注册成功，范围:', registration.scope)
  })
  .catch((error) => {
    console.error('服务工作线程注册失败:', error)
  })