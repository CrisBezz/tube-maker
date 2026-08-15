// MeshUtilz WIP43 scoped service worker: keep registration valid without caching cross-build assets.\nself.addEventListener('install',()=>self.skipWaiting());\nself.addEventListener('activate',event=>event.waitUntil(self.clients.claim()));

