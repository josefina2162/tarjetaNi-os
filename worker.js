self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('tarjeta-cache').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/estilos.css',
        '/img/inicio.svg',
        '/img/btnContinuar.svg'
        // agregar el resto de tus archivos aquí
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});