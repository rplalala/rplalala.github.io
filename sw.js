const workboxVersion="6.4.2";importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.4.2/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"rplalala"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"77e7732d2d0a953e56ed9a990d037f2f",url:"./404.html"},{revision:"5dfbe32a01043e5c98dc6a0407184818",url:"./index.html"},{revision:"240e062def7897dd4c03a12bf07fdc65",url:"./js/main.js"},{revision:"33135a3640a27121c6eff2d2a8315a51",url:"./css/index.css"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/^https:\/\/unpkg\.zhimg\.com/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();