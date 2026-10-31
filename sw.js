const workboxVersion = '6.4.2';

importScripts(`https://alicdn.dingzh.cc/workbox-6.4.2/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "HuaB"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

// 根首页复用 index.html 预缓存时保留请求地址，避免 PJAX 将首页改成 /index.html。
workbox.precaching.addPlugins([{
    handlerWillRespond: async ({ request, response }) => {
        if (new URL(request.url).pathname === '/' && response.url &&
            new URL(response.url).pathname === '/index.html') {
            return workbox.core.copyResponse(response);
        }
        return response;
    }
}]);

// 注册成功后要立即缓存的资源列表
// 具体缓存列表在gulpfile.js中配置，见下文
// workbox.precaching.precacheAndRoute可以在service-worker在安装之前，就把对应文件预先缓存下来。
workbox.precaching.precacheAndRoute([{"revision":"a9a964b8a5e91714c7354d37acb6587f","url":"./css/index.css"},{"revision":"e0ac8f26c757690a97c041a26f392ef7","url":"./404.html"},{"revision":"a903588957b2d5e510647f986a60ca03","url":"./index.html"}], {
    directoryIndex: 'index.html'
});

// 清空过期缓存
workbox.precaching.cleanupOutdatedCaches();

//在gulpfile.js缓存好的资源中需要缓存的资源
//workbox.routing.registerRoute表明 当service-worker在安装之后，当页面有发送对应http请求时，开始缓存。

/* // 图片资源（可选，不需要就注释掉）
workbox.routing.registerRoute(
    /\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,
    new workbox.strategies.CacheFirst({
        cacheName: "images",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
); */

//字体文件（可选，不需要就注释掉）
/* workbox.routing.registerRoute(
    /\.(?:eot|ttf|woff|woff2)$/,
    new workbox.strategies.CacheFirst({
        cacheName: "fonts",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
); */

//谷歌字体（可选，不需要就注释掉）
/* workbox.routing.registerRoute(
    /^https:\/\/fonts\.googleapis\.com/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets"
    })
);
workbox.routing.registerRoute(
    /^https:\/\/fonts\.gstatic\.com/,
    new workbox.strategies.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);*/

// CDN资源（可选，不需要就注释掉）
/* workbox.routing.registerRoute(
    /^https:\/\/unpkg\.zhimg\.com/,
    /^https:\/\/npm\.elemecdn\.com/,
    /^https:\/\/at\.alicdn\.com/,
    /^https:\/\/alicdn\.dingzh\.cc/,
    new workbox.strategies.CacheFirst({
        cacheName: "static-libs",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
); */
