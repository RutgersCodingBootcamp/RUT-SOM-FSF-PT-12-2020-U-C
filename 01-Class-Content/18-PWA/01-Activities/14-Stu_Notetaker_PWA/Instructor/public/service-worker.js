const FILES_TO_CACHE = [
  "/",
  "/index.html",
  "/app.js",
  "/favicon.ico",
  "/manifest.json",
  "/assets/images/icons/icon-128x128.png",
  "/assets/images/icons/icon-144x144.png",
  "/assets/images/icons/icon-152x152.png",
  "/assets/images/icons/icon-192x192.png",
  "/assets/images/icons/icon-384x384.png",
  "/assets/images/icons/icon-512x512.png",
  "/assets/images/icons/icon-72x72.png",
  "/assets/images/icons/icon-96x96.png"
];

const CACHE_NAME = "static-cache-v2";
const DATA_CACHE_NAME = "data-cache-v1";
// need the main page
// need icons
// manifest
// app.js

// api calls????


// install
self.addEventListener("install", function (evt) {
  evt.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log("Your files were pre-cached successfully!");
      return cache.addAll(FILES_TO_CACHE);
    })
  );

  self.skipWaiting();
});

// clean up (allows for new versions of cache)
self.addEventListener("activate", function (evt) {
  evt.waitUntil(
    caches.keys().then(keyList => {
      return Promise.all(
        keyList.map(key => {
          if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) {
            console.log("Removing old cache data", key);
            return caches.delete(key);
          }
        })
      );
    })
  );

  self.clients.claim();
});

// fetch
self.addEventListener("fetch", function (evt) {
  console.log("here");
  // cache successful requests to the API
  // indexDB
  if (evt.request.url.includes("/testapi/")) {
    console.log("got here");
    evt.respondWith(
      caches.open(DATA_CACHE_NAME).then(cache => {
        var init = { "status" : 200 , "statusText" : "OK"};
        return new Response("<html><body><img src='https://i.ytimg.com/vi/0-cmcLdc104/hqdefault.jpg'/></body></html>", init);
        // return fetch(evt.request)
        //   .then(response => {
        //     if (response.status === 200) {
        //       cache.put(evt.request.url, response.clone());
        //     }

        //     return response;
        //   })
        //   .catch(err => {
        //     console.log("Error on my new route");
        //     // Network request failed, try to get it from the cache.
        //     return cache.match(evt.request);
        //   });

      }).catch(err => console.log(err))
    )
    return;
  }
  else if (evt.request.url.includes("/api/")) {
    evt.respondWith(
      caches.open(DATA_CACHE_NAME).then(cache => {
        return fetch(evt.request)
          .then(response => {
            // If the response was good, clone it and store it in the cache.
            if (response.status === 200) {
              cache.put(evt.request.url, response.clone());
            }

            return response;
          })
          .catch(err => {
            // Network request failed, try to get it from the cache.
            return cache.match(evt.request);
          });
      }).catch(err => console.log(err))
    );

    return;
  }

  // if the request is not for the API, serve static assets using "offline-first" approach.
  // see https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook#cache-falling-back-to-network
  evt.respondWith(
    caches.match(evt.request).then(function (response) {
      console.log(response);
      return response || fetch(evt.request);
    })
  );
});