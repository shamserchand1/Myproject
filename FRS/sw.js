const CACHE_NAME = 'attendance-cache-v1';
const urlsToCache = [
  'https://shamserchand.com.np/FRS/',
  'https://shamserchand.com.np/FRS/index.html',
  'https://shamserchand.com.np/FRS/manifest.json',
  'https://shamserchand.com.np/FRS/icon.png',
  'https://shamserchand.com.np/FRS/error.html',
  'https://shamserchand.com.np/FRS/face-api.min.js',
  'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css',
  'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css',
  'https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .catch(() => caches.match(event.request))
      .catch(() => caches.match('https://shamserchand.com.np/FRS/
/error.html'))
  );
});

self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
