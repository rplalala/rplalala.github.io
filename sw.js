const workboxVersion="6.4.2";importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.4.2/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"HuaB"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"b5a4fe76d80c1ca0dede620689a6aa11",url:"./css/index.css"},{revision:"a1769771df1b25d83dc21842e5e17b55",url:"./js/custom/baidu_sub.js"},{revision:"869366b2441fde691a7fdb4dd62758ed",url:"./js/custom/fixed_card_widget.js"},{revision:"d45e2ee756ca84521d2cc6fd6f8d8d96",url:"./js/custom/fixedComment_twikoo.js"},{revision:"bebd62f166b5fdfabb5036d8e31bda40",url:"./js/custom/myJS.js"},{revision:"10c775ac698fa04ff4bbd7face3c77be",url:"./js/custom/randombg.js"},{revision:"7b9a184f828487b690a7ce61b1a885bd",url:"./js/custom/reNameTalk.js"},{revision:"a4e43ec9df5df0f5db20e910b5a3ab1e",url:"./js/custom/sun_moon.js"},{revision:"12cef07c2e9bc8841a5380df4fd342f5",url:"./js/utils.js"},{revision:"a9a466364ea23c04430e107f997aac13",url:"./js/main.js"},{revision:"fb1bc3df53b6471b4b100ca337f1ad34",url:"./page/2/index.html"},{revision:"463e8a270538a0c34532f13173be3577",url:"./page/3/index.html"},{revision:"3bc8cacfddf606d3350652977472039d",url:"./posts/140840f1.html"},{revision:"d8a67b7efcb160d11dd256ccb28b8f8c",url:"./posts/1a57c6b6.html"},{revision:"6a17e444ef4995b1703b5dda73a5373e",url:"./posts/1c7bf033.html"},{revision:"21bc8b0a3d28e4f2583cffc044a9e61f",url:"./posts/1e5452bd.html"},{revision:"270b70aed1f68d1320e1794c149ac39d",url:"./posts/1e5fbfe0.html"},{revision:"f7391a6bf65d7efbf68f92f6a1a2b28e",url:"./posts/1f4ac2fb.html"},{revision:"968dab7de7e5b3243b3382bd5a6615d4",url:"./posts/23ccefd3.html"},{revision:"94fd09d6fd803e65ea4a2188e52e37d1",url:"./posts/272bbe71.html"},{revision:"f828091a24b80efe4f668381583f9897",url:"./posts/2fafc5f1.html"},{revision:"6bdc70e74351b1a3a8aa6a7e21e661d3",url:"./posts/3151887a.html"},{revision:"49717a6c08c984444bb0bae6ea93148d",url:"./posts/332b8f17.html"},{revision:"9f8254714db79b1911b1df7eb498b1bd",url:"./posts/43cb3cd5.html"},{revision:"353364b8bfbafad59e121a8d0603700a",url:"./posts/602ee0a8.html"},{revision:"4c3268c38982708e8e0d74d3af1aca09",url:"./posts/6290ea25.html"},{revision:"bc8bd4aad0139704edb60baa71d97978",url:"./posts/6993b31.html"},{revision:"97dd1da7ba9bb12d5278b4b41fd95f04",url:"./posts/7ffd1197.html"},{revision:"c664f87c1b7e657192accc1a730d0a68",url:"./posts/8da89045.html"},{revision:"036f75ecc47545fda5da9b0d519bdbb6",url:"./posts/8dce5dd7.html"},{revision:"4f4d2e24473a8d11bf948cc0ba233198",url:"./posts/b3f89ff3.html"},{revision:"39c3c319b3bf0c757479346b660a3bc7",url:"./posts/b4104d32.html"},{revision:"b2a1590aab60342dcd065e2b89add03d",url:"./posts/b4caf892.html"},{revision:"57cafb3c1b3188e3f7a6b8478cac4798",url:"./posts/b66774c1.html"},{revision:"d27c2f20020bec4949f9c0fc0734a2df",url:"./posts/b6c47025.html"},{revision:"432a578eeb16c1fe12a8e32096ccb5b1",url:"./posts/c3498269.html"},{revision:"8e095168987a6e92b26595d7e77503f4",url:"./posts/c517589e.html"},{revision:"f45237b296e602260004a10ee58397f6",url:"./posts/dd41aa79.html"},{revision:"1aa093a040e715b03a5d39b8169e5b83",url:"./posts/ee8ba81c.html"},{revision:"5c9d6527b81ab3d732f14d6feaef32d0",url:"./posts/f77f8e26.html"},{revision:"afa28e5b6a1aef631e18d393b0611424",url:"./posts/f96a58f3.html"},{revision:"2019211e770eae2c97364bb15880f244",url:"./about/index.html"},{revision:"6c97fa91bc73e88ffa31710d42865f6e",url:"./404.html"},{revision:"a77075666f8ed46db8f5a6d6b4517d81",url:"./index.html"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();