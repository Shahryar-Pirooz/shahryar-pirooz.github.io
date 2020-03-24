'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/main.dart.js": "bca0504c1544737139853ef51e50fef1",
"/icons/Icon-192.png": "52acf2ea2762204030cb26b457d06567",
"/icons/Icon-512.png": "c0a40e12ed5cf0a8415d89030b2cabfd",
"/index.html": "cfda4dd793f4c63c048e60491619fa69",
"/assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "51d23d1c30deda6f34673e0d5600fd38",
"/assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "0ea892e09437fcaa050b2b15c53173b7",
"/assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "d51b09f7b8345b41dd3b2201f653c62b",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/FontManifest.json": "1c6946b6133fbe283bd617ed5e2f25c8",
"/assets/LICENSE": "4d1ffacb08cc046ff04a54455be84d42",
"/assets/AssetManifest.json": "f2b97eeba21744bffde115d2826e093a",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/fonts/Steinerlight.ttf": "a556f8a62a0d9d120055fc864c3cef77",
"/favicon.png": "3c536f78b1ebf16ccfde1e7bd1f762e0",
"/manifest.json": "f0c8dad18d6b6d7560c90966bc6d37be"
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
