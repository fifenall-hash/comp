const CACHE_NAME = 'stock-quant-app-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './icon.ico'
];

// 설치 단계: 파일들을 캐시(저장)합니다.
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// 패치 단계: 인터넷이 끊겨도 캐시된 화면을 보여줍니다.
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // 캐시에 있으면 그것을 반환하고, 없으면 네트워크에서 가져옵니다.
        return response || fetch(event.request);
      })
  );
});