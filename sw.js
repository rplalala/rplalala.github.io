const workboxVersion="6.4.2";importScripts("https://alicdn.dingzh.cc/workbox-6.4.2/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"HuaB"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"b5a4fe76d80c1ca0dede620689a6aa11",url:"./css/index.css"},{revision:"f0944f2c79afa9e2591446a6875875ae",url:"./404.html"},{revision:"ca1cba5ae890be82853dfab8dba6655a",url:"./index.html"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.googleAnalytics.initialize();