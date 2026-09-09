/* 학습 놀이터 서비스워커
 * 목표: 인터넷이 없어도 열리되, 인터넷이 있으면 "항상 최신"이어야 한다.
 * (배포하자마자 아이들 화면에 반영돼야 해서 캐시를 우선하지 않는다)
 *
 *  - ?v= 가 붙은 주소(데이터 파일)  → 캐시 우선. 버전이 바뀌면 주소가 달라져서 저절로 새로 받는다
 *  - 그 외 (HTML 등)                → 네트워크 우선, 실패하면 캐시
 *  - 다른 사이트(발음 API 등)        → 손대지 않음
 */
const CACHE = 'study-apps-v1';

self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;

  let url;
  try { url = new URL(req.url); } catch (_) { return; }
  if (url.origin !== location.origin) return;   // 발음 API 같은 외부 요청은 그대로 흘려보낸다
  if (url.pathname.endsWith('/sw.js')) return;  // 자기 자신은 절대 캐시하지 않는다 (고장나면 되돌릴 길이 막힌다)

  e.respondWith((async () => {
    // 버전이 박힌 주소는 캐시가 곧 정답이다
    if (url.searchParams.has('v')) {
      const hit = await caches.match(req);
      if (hit) return hit;
    }
    try {
      const res = await fetch(req);
      if (res && res.ok && res.type === 'basic') {
        const cache = await caches.open(CACHE);
        cache.put(req, res.clone());
      }
      return res;
    } catch (err) {
      const hit = await caches.match(req);
      if (hit) return hit;
      // ?v= 가 올라갔는데 오프라인이면, 예전 버전이라도 보여주는 게 낫다
      const loose = await caches.match(req, { ignoreSearch: true });
      if (loose) return loose;
      throw err;
    }
  })());
});
