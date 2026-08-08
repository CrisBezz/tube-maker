const CACHE='mesh-line-replacer-v0.8.8-view-modes';
const APP_SHELL=[
  './','./index.html','./manifest.webmanifest',
  './wip/app-v086-static/part00.txt','./wip/app-v086-static/part01.txt','./wip/app-v086-static/part02.txt','./wip/app-v086-static/part03.txt','./wip/app-v086-static/part04.txt',
  './wip/app-v086-static/part05.txt','./wip/app-v086-static/part06.txt','./wip/app-v086-static/part07.txt','./wip/app-v086-static/part08.txt','./wip/app-v086-static/part08b.txt','./wip/app-v086-static/part09.txt',
  './wip/app-v087-static/grouped-instances.txt',
  './wip/app-v088-static/view-modes.txt'
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