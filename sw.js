const workboxVersion="6.4.2";importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.4.2/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"rplalala"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"eabb0987ea81beb8f71a1ea4b5b309f4",url:"./404.html"},{revision:"b045584b420b648ad81b26cf84c5af17",url:"./index.html"},{revision:"a9a466364ea23c04430e107f997aac13",url:"./js/main.js"},{revision:"c3b90e123be341f90b7f6eb3174544b0",url:"./css/index.css"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.googleAnalytics.initialize();