const workboxVersion="6.4.2";importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.4.2/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"rplalala"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"914b53d7cc821f2e1510ed773ddfad23",url:"./404.html"},{revision:"7112a8dbb710fc4c98750b17dac52e12",url:"./index.html"},{revision:"a9a466364ea23c04430e107f997aac13",url:"./js/main.js"},{revision:"3ee66423e26126f0d241043522d26d5d",url:"./css/index.css"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.googleAnalytics.initialize();