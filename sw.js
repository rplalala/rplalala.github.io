const workboxVersion="6.4.2";importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.4.2/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"rplalala"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"edbb1bf6bfa0850bed3a84522176583b",url:"./404.html"},{revision:"0c6508f8eff1e87364e7deb3b59af2e6",url:"./index.html"},{revision:"a9a466364ea23c04430e107f997aac13",url:"./js/main.js"},{revision:"93a7d6d4a55316069bef2edf6f615615",url:"./css/index.css"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.googleAnalytics.initialize();