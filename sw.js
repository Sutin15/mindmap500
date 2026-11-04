const V='mm500-v1';
const CORE=['./','index.html','manifest.webmanifest','icon-192.png','icon-512.png','s/0.webp','s/1.webp','s/2.webp','s/3.webp','s/4.webp'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(CORE)));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==V).map(k=>caches.delete(k)))));self.clients.claim()});
self.addEventListener('fetch',e=>{
  const r=e.request; if(r.method!=='GET')return;
  const u=new URL(r.url);
  if(u.origin===location.origin && /\.(webp|png)$/.test(u.pathname)){
    // cache-first: each mindmap is kept for offline after first view
    e.respondWith(caches.match(r).then(m=>m||fetch(r).then(res=>{const c=res.clone();caches.open(V).then(ca=>ca.put(r,c));return res})));
  } else {
    // network-first for the page, fallback to cache offline
    e.respondWith(fetch(r).then(res=>{if(u.origin===location.origin){const c=res.clone();caches.open(V).then(ca=>ca.put(r,c))}return res}).catch(()=>caches.match(r).then(m=>m||caches.match('index.html'))));
  }
});
