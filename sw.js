
importScripts('serviceworker-cache-polyfill.js');

var CACHE_NAME = 'simple-pwa-v2';

// File want to cache
var urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './serviceworker-cache-polyfill.js',
  './assets/img/blank-thumbnail.png',
  './assets/img/favicon.png',
  './assets/img/icon-48.png',
  './assets/img/icon-96.png',
  './assets/img/icon-128.png',
  './assets/img/icon-144.png',
  './assets/img/icon-152.png',
  './assets/img/icon-196.png',
  './assets/img/icon-384.png',
  './assets/vendor/bootstrap/css/bootstrap.min.css',
  './assets/vendor/ionicons/css/ionicons.min.css',
  './assets/vendor/ionicons/fonts/ionicons.ttf',
  './assets/vendor/ionicons/fonts/ionicons.woff',
  './js/build.js',
  './assets/css/main.css',
];


// Set the callback for the install step
self.oninstall = function (e) {
  console.log('[serviceWorker]: Installing...');
  // perform install steps
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(function (cache) {
        console.log('[serviceWorker]: Cache All');
        return cache.addAll(urlsToCache);
      })
      .then(function () {
        console.log('[serviceWorker]: Intalled And Skip Waiting on Install');
        return self.skipWaiting();
      })
  );
};


self.onactivate = function (e) {

  console.log('[serviceWorker]: Actived');

  var whiteList = [CACHE_NAME];

  e.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (cacheName) {
          if (whiteList.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      )
    }).then(function () {
      console.log('[serviceWorker]: Clients Claims');
      return self.clients.claim();
    })
  );

};


self.onfetch = function (e) {
  console.log('[serviceWorker]: Fetching ' + e.request.url);
  var raceUrl = 'api/v1';
  if(e.request.url.indexOf(raceUrl) > -1){
    console.log('[serviceWorker]: Try to caching ' + e.request.url);
    e.respondWith(
      caches.open(CACHE_NAME).then(function (cache) {
        return fetch(e.request).then(function (res) {
          cache.put(e.request.url, res.clone());
          return res;
        }).catch(err => {
          return cache.match(e.request).then(function (response) {
            if (response) return response
            console.log('[serviceWorker]: Fetch Error ' + err);
          });
        });
      })
    );
  }

  else if (e.request.url.indexOf('js/') > -1) {
    e.respondWith(
      caches.match(e.request).then(function (res) {

        if(res) return res

        return fetch(e.request.clone(), { mode: 'no-cors' }).then(function (newRes) {

          if(!newRes || newRes.status !== 200 || newRes.type !== 'basic') {
            return newRes;
          }

          caches.open(CACHE_NAME).then(function (cache) {
            cache.put(e.request, newRes.clone());
          }).catch(err => {
            console.log('[serviceWorker]: Fetch Error ' + err);
          });

          return newRes;
        });

      })
    );
  }

  else {
    e.respondWith(
      caches.match(e.request).then(function (res) {
        return res || fetch(e.request)
      })
    );
  }

};
