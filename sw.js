const CACHE_NAME = 'if-v2'; // Incremented version to force update
const ASSETS = [
  'index.html',
  'manifest.json',
  'sw.js',
  'icon.png', // Added the icon to the offline cache
  'https://cdn.tailwindcss.com'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
