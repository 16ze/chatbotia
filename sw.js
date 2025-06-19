const CACHE_NAME = "chatbot-ia-v1";
const urlsToCache = ["./chatbot.html", "./manifest.json"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Retourne la version en cache ou fetch depuis le réseau
      return response || fetch(event.request);
    })
  );
});
