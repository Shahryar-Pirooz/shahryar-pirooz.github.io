'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/main.dart.js": "c867469713c68596931b4cc146e5d4c4",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/index.html": "652f1d157f6b1c0d5caf3e45b26a7ae1",
"/assets/images/avatar.png": "37c097e6439c3bfd8f15e5619c55ebeb",
"/assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "51d23d1c30deda6f34673e0d5600fd38",
"/assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "0ea892e09437fcaa050b2b15c53173b7",
"/assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "d51b09f7b8345b41dd3b2201f653c62b",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/FontManifest.json": "54b5ee929c30057adfe21172c5065ff5",
"/assets/LICENSE": "da8c2f4cd846f2d258bb1fdf504120a9",
"/assets/AssetManifest.json": "0bf74fc4af251854607b34108e835d41",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/fonts/Domine-Regular.ttf": "d46ffdb264f408db3f3a72f61b13f66a",
"/assets/fonts/Domine-Bold.ttf": "a61ec7a0190e6c13ffd4e9c9a9b5aa26",
"/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"/manifest.json": "ab37e86fd5442b60470928b510b4a11f"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
