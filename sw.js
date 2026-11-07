/* Offline cache: somente os arquivos estáticos do app; os dados ficam no
   armazenamento do navegador, protegidos pelas mesmas opções de backup. */
const CACHE_NAME='controle-banca-mobile-v2-3524';
const APP_ASSETS=['./','./index.html','./style.css','./mobile.css','./charts-lite.js','./script.js','./mobile.js','./manifest.webmanifest','./icon-192.png','./icon-512.png'];
self.addEventListener('install',event=>{
  event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(APP_ASSETS)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',event=>{
  event.waitUntil(caches.keys().then(names=>Promise.all(names.filter(k=>k.startsWith('controle-banca-mobile-')&&k!==CACHE_NAME).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',event=>{
  const req=event.request;
  if(req.method!=='GET')return;
  const url=new URL(req.url);
  if(url.origin!==self.location.origin)return;
  if(req.mode==='navigate'){
    event.respondWith(fetch(req).then(response=>{
      const copy=response.clone();
      caches.open(CACHE_NAME).then(cache=>cache.put('./index.html',copy)).catch(()=>{});
      return response;
    }).catch(()=>caches.match('./index.html')));
  } else {
    event.respondWith(caches.match(req).then(cached=>cached||fetch(req).then(response=>{
      if(response.ok)caches.open(CACHE_NAME).then(cache=>cache.put(req,response.clone())).catch(()=>{});
      return response;
    })));
  }
});
