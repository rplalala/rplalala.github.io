const workboxVersion="6.4.2";importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.4.2/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"HuaB"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"f5257037ac0031746d24e4ad755da30a",url:"./404.html"},{revision:"b478cfc9173a72a9263db702f459f0c5",url:"./index.html"},{revision:"a9a466364ea23c04430e107f997aac13",url:"./js/main.js"},{revision:"b5a4fe76d80c1ca0dede620689a6aa11",url:"./css/index.css"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/^https:\/\/unpkg\.zhimg\.com/,/^https:\/\/npm\.elemecdn\.com/,/^https:\/\/cdn\.jsdelivr\.net/,/^https:\/\/busuanzi\.ibruce\.info/,/^https:\/\/alicdn\.dingzh\.cc\/ding-BlogDemo\/js/,/^https:\/\/alicdn\.dingzh\.cc\/ding-BlogDemo\/css/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();