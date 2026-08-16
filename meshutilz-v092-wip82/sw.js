// MeshUtilz WIP82 scoped service worker: keep registration valid without caching cross-build assets.
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',event=>event.waitUntil(self.clients.claim()));
