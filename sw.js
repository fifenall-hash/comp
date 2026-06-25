// 오프라인 캐싱 로직이 모두 제거된 순수 앱 설치용 서비스 워커
self.addEventListener('install', (e) => {
    self.skipWaiting(); // 설치 즉시 활성화
});

self.addEventListener('activate', (e) => {
    return self.clients.claim();
});

// 크롬 등에서 앱 설치 조건(PWA)을 만족하려면 fetch 이벤트가 반드시 존재해야 합니다.
// 아무것도 저장하지 않고 그냥 인터넷 원본 데이터를 그대로 넘겨줍니다.
self.addEventListener('fetch', (e) => {
    e.respondWith(fetch(e.request));
});
