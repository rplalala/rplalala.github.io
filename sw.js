const workboxVersion="6.4.2";importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.4.2/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"HuaB"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"a1769771df1b25d83dc21842e5e17b55",url:"./js/custom/baidu_sub.js"},{revision:"869366b2441fde691a7fdb4dd62758ed",url:"./js/custom/fixed_card_widget.js"},{revision:"d45e2ee756ca84521d2cc6fd6f8d8d96",url:"./js/custom/fixedComment_twikoo.js"},{revision:"bebd62f166b5fdfabb5036d8e31bda40",url:"./js/custom/myJS.js"},{revision:"869dd89b40b76300769eee41af474000",url:"./js/custom/randombg.js"},{revision:"7b9a184f828487b690a7ce61b1a885bd",url:"./js/custom/reNameTalk.js"},{revision:"a4e43ec9df5df0f5db20e910b5a3ab1e",url:"./js/custom/sun_moon.js"},{revision:"afccf7cf7da1fd106c012ff0e86a5bca",url:"./404.html"},{revision:"2d8992f6d5974d75ff8bf7c6d2374e30",url:"./index.html"},{revision:"a9a466364ea23c04430e107f997aac13",url:"./js/main.js"},{revision:"b5a4fe76d80c1ca0dede620689a6aa11",url:"./css/index.css"}]),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:css|js|json|cur)$/,/^https:\/\/unpkg\.zhimg\.com/,/^https:\/\/npm\.elemecdn\.com/,/^https:\/\/cdn\.jsdelivr\.net/,/^https:\/\/busuanzi\.ibruce\.info/,/^https:\/\/alicdn\.dingzh\.cc\/ding-BlogDemo\/js/,/^https:\/\/alicdn\.dingzh\.cc\/ding-BlogDemo\/css/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();