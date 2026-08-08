const CACHE='mesh-line-replacer-v0.8.5-shared-node-torus';
const APP_SHELL=[
  './','./index.html','./manifest.webmanifest',
  './app-v084-static/part00.txt','./app-v084-static/part01.txt','./app-v084-static/part02.txt','./app-v084-static/part03.txt','./app-v084-static/part04.txt',
  './app-v084-static/part05.txt','./app-v084-static/part06.txt','./app-v084-static/part07.txt','./app-v084-static/part08.txt','./app-v084-static/part09.txt'
];
self.addEventListener('install',(event)=>event.waitUntil(caches.open(CACHE).then((cache)=>cache.addAll(APP_SHELL)).then(()=>self.skipWaiting())));
self.addEventListener('activate',(event)=>event.waitUntil(caches.keys().then((keys)=>Promise.all(keys.filter((key)=>key!==CACHE).map((key)=>caches.delete(key)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',(event)=>{
  if(event.request.method!=='GET')return;
  event.respondWith(caches.match(event.request).then((cached)=>cached||fetch(event.request).then((response)=>{
    if(response&&(response.status===200||response.type==='opaque'))caches.open(CACHE).then((cache)=>cache.put(event.request,response.clone()));
    return response;
  }).catch(()=>caches.match('./index.html'))));
});
