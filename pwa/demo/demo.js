// 为fetch事件添加监听器
self.addEventListener('fetch', event => {
    // 拦截.jpg结尾的文件, 获取demo.jpg作为代替图片来响应请求.
    if(/\.jpg$/.test(event.request.url)){
      event.respondWith(fetch('./demo.gif'));
    }
  });