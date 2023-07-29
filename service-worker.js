/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("/NeoJusicRelease/js/workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "/NeoJusicRelease/js/workbox-v4.3.1"});

importScripts(
  "/NeoJusicRelease/js/precache-manifest.3d7dc47aa070f7a9542ad06fcfce89d8.js"
);

workbox.core.setCacheNameDetails({prefix: "jusic-ui"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("/"), {
  
  blacklist: [/\/api\//],
});
