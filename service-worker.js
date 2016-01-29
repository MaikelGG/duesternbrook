/**
 * Copyright 2015 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren */
'use strict';



/* eslint-disable quotes, comma-spacing */
var PrecacheConfig = [["/duesternbrook/activities.html","15f0c7c7835590e21d49fb8b732db4c3"],["/duesternbrook/content/activities-en.html","160e00eb2491d99bde9bff00d40886da"],["/duesternbrook/content/home-en.html","6e2ec166a9ebebfe259a0b9ff5c654a1"],["/duesternbrook/content/img/source/Breakfast table with view on veranda Duesternbrook [800x600].jpg","18eb7e4cae4aa44d8981aaeb7be63d81"],["/duesternbrook/content/img/source/Dinner in the Lapa 3 [800x600].jpg","60f5f271f0b0ad861702895722d802d6"],["/duesternbrook/content/img/source/Horseriding 3.jpg","afab2de52bb617533440117662cf17ff"],["/duesternbrook/content/img/source/activities.jpg","1f21bd524da46412a4067a18eec20a53"],["/duesternbrook/content/img/source/reception.jpg","bdabf6a8b990a37b5d26bf959bb4102a"],["/duesternbrook/css/oldie.css","194245c3bfa19ae0de61a4bf607c7d3f"],["/duesternbrook/css/theme.css","e85e0c5a040a865aa52d379745bce3d4"],["/duesternbrook/fonts/PTS55F.svg","13d7a577f04938cb9d40c12255afb39c"],["/duesternbrook/fonts/PTS55F.ttf","02edacd49e47361d9340612794053f51"],["/duesternbrook/fonts/PTS55F.woff","c6f7e70514b96d153172213380412644"],["/duesternbrook/fonts/PTS75F.svg","7200c1c718a9b0119a618547087bba5a"],["/duesternbrook/fonts/PTS75F.ttf","9fc7260bd63e4516e137f9a95b9339b2"],["/duesternbrook/fonts/PTS75F.woff","eaabe74523c1672230089be2b5eeaa8e"],["/duesternbrook/fonts/acme.svg","651a07f6d29fc9799b8281c9fe166f22"],["/duesternbrook/fonts/acme.ttf","17f1cd5cce8888ad8e62f0e84b0a7633"],["/duesternbrook/fonts/acme.woff","dda524f19f81cc94d40ed84e540f0da0"],["/duesternbrook/fonts/flexslider-icon.svg","10e8a5455c4522c48aa975eacd4f0023"],["/duesternbrook/fonts/flexslider-icon.ttf","b4c9e5057989b9727a5df4e0a21af33c"],["/duesternbrook/fonts/flexslider-icon.woff","f8b92f66539473eea649c8514eb836a0"],["/duesternbrook/fonts/safe_from_harm.svg","9852ee523f08a4e897c25966b743e3c3"],["/duesternbrook/fonts/safe_from_harm.ttf","6820cf2aacb0ab8bc32b16704a2c14a4"],["/duesternbrook/fonts/safe_from_harm.woff","e2c446a0b222a043d9fc2135d2c9072e"],["/duesternbrook/images/AjaxLoader.gif","5b8b06c052cac80413d62e5c45f9f37b"],["/duesternbrook/images/arrow-right.svg","cb60dd7662601acae41f747d1ae45d68"],["/duesternbrook/images/favicon/android-icon-144x144.png","62e7abdbcffc98941ed3134d6439eb5a"],["/duesternbrook/images/favicon/android-icon-192x192.png","4f78aad7b9c6cf68ba89815740e419e0"],["/duesternbrook/images/favicon/android-icon-36x36.png","fedd4d54f6ad49ec444ebb830e1bdd75"],["/duesternbrook/images/favicon/android-icon-48x48.png","d963b30b497eb076a2bf8398da835529"],["/duesternbrook/images/favicon/android-icon-72x72.png","59cc5c1a0d6d3f79ddcd54ef4d639cb9"],["/duesternbrook/images/favicon/android-icon-96x96.png","64893db6c8d6f41ae03fbe9e9b962b3e"],["/duesternbrook/images/favicon/apple-icon-114x114.png","b44c7629fbfe37d1c08e7bac78bca2a5"],["/duesternbrook/images/favicon/apple-icon-120x120.png","005758616c017184a51539081efe728d"],["/duesternbrook/images/favicon/apple-icon-144x144.png","62e7abdbcffc98941ed3134d6439eb5a"],["/duesternbrook/images/favicon/apple-icon-152x152.png","4127dceea5ed636efd892d60e48e681d"],["/duesternbrook/images/favicon/apple-icon-180x180.png","18870de8b88bfdab2da7741e16918e02"],["/duesternbrook/images/favicon/apple-icon-57x57.png","9002afa873d4bf8ab285326889bf0fa3"],["/duesternbrook/images/favicon/apple-icon-60x60.png","891f3302281e59b892a3198e908a4ea6"],["/duesternbrook/images/favicon/apple-icon-72x72.png","59cc5c1a0d6d3f79ddcd54ef4d639cb9"],["/duesternbrook/images/favicon/apple-icon-76x76.png","247cf24afa389e8f025581a4e8b57aff"],["/duesternbrook/images/favicon/apple-icon-precomposed.png","c0934f844fa704a35cffeaba6e3cfb26"],["/duesternbrook/images/favicon/apple-icon.png","c0934f844fa704a35cffeaba6e3cfb26"],["/duesternbrook/images/favicon/favicon-16x16.png","d271281d80215160400fb5243dc54c93"],["/duesternbrook/images/favicon/favicon-32x32.png","81ad3f20a6c2e86105f0e00f97f08894"],["/duesternbrook/images/favicon/favicon-96x96.png","64893db6c8d6f41ae03fbe9e9b962b3e"],["/duesternbrook/images/favicon/ms-icon-144x144.png","62e7abdbcffc98941ed3134d6439eb5a"],["/duesternbrook/images/favicon/ms-icon-150x150.png","1883cbffdbf4fa30bc7b498e8d1fcfc1"],["/duesternbrook/images/favicon/ms-icon-310x310.png","877676adbf64ff8dc3ca7194b217d106"],["/duesternbrook/images/favicon/ms-icon-70x70.png","5f495e0aa45ddb5569fd140ed044513b"],["/duesternbrook/images/flexslider-icon.svg","10e8a5455c4522c48aa975eacd4f0023"],["/duesternbrook/images/grabbing.png","d817e1dba5bd5d891d0504bf1715807b"],["/duesternbrook/images/hero-home-desk.jpg","44b2a2f9dd867bbae784332a3731da72"],["/duesternbrook/images/hero-home-desk@2x.jpg","20c15edef040c6a85e71ce71517051e2"],["/duesternbrook/images/hero-home-tab.jpg","db658a647c66098d7483f84c7d8fc533"],["/duesternbrook/images/hero-home-tab@2x.jpg","15f62ee89654f17d3ce3864cd23c42f4"],["/duesternbrook/images/hero-home.jpg","23d30aed8ba6bf32f1c20cd8d226308f"],["/duesternbrook/images/hero-home@2x.jpg","e5d99faa000ffe7f986b20660266e4ac"],["/duesternbrook/images/logo-black.svg","c77b2b304e0d0680cbfa1e33d2a9ee27"],["/duesternbrook/images/logo-white.svg","50faeddf9a499dda53a118720efcf235"],["/duesternbrook/index.html","92afd2188305e465091bdfc653eb41d5"],["/duesternbrook/js/service-worker-registration.js","82346cefdef7598695082f89e0f2207f"],["/duesternbrook/js/service-worker.js","09e6d55480f5f97b3758db0316a0904c"],["/duesternbrook/js/theme.js","0416167f82a5658f46e15457a184e335"],["/duesternbrook/partials/_favicon.html","61ee7a980df2e969b6e0ac276900d222"],["/duesternbrook/partials/_head.html","d8f02991090e4bcfe00526b7ea147891"],["/duesternbrook/partials/_header.html","21dd5660d79ebb52f0bace5db342aabf"],["/duesternbrook/partials/_scripts.html","dfe51ce95dc903006921608d6563f5c2"],["/duesternbrook/partials/layout.html","c67df7e481960900687b374e3666b3e6"],["/duesternbrook/service-worker-registration.js","c1ee5aec388e1ed07d6d290693b72547"],["/duesternbrook/service-worker.js","3ff53ea480917f9a31cd92ae6affa3f2"]];
/* eslint-enable quotes, comma-spacing */
var CacheNamePrefix = 'sw-precache-v1--' + (self.registration ? self.registration.scope : '') + '-';


var IgnoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var getCacheBustedUrl = function (url, now) {
    now = now || Date.now();

    var urlWithCacheBusting = new URL(url);
    urlWithCacheBusting.search += (urlWithCacheBusting.search ? '&' : '') + 'sw-precache=' + now;

    return urlWithCacheBusting.toString();
  };

var populateCurrentCacheNames = function (precacheConfig,
    cacheNamePrefix, baseUrl) {
    var absoluteUrlToCacheName = {};
    var currentCacheNamesToAbsoluteUrl = {};

    precacheConfig.forEach(function(cacheOption) {
      var absoluteUrl = new URL(cacheOption[0], baseUrl).toString();
      var cacheName = cacheNamePrefix + absoluteUrl + '-' + cacheOption[1];
      currentCacheNamesToAbsoluteUrl[cacheName] = absoluteUrl;
      absoluteUrlToCacheName[absoluteUrl] = cacheName;
    });

    return {
      absoluteUrlToCacheName: absoluteUrlToCacheName,
      currentCacheNamesToAbsoluteUrl: currentCacheNamesToAbsoluteUrl
    };
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var mappings = populateCurrentCacheNames(PrecacheConfig, CacheNamePrefix, self.location);
var AbsoluteUrlToCacheName = mappings.absoluteUrlToCacheName;
var CurrentCacheNamesToAbsoluteUrl = mappings.currentCacheNamesToAbsoluteUrl;

function deleteAllCaches() {
  return caches.keys().then(function(cacheNames) {
    return Promise.all(
      cacheNames.map(function(cacheName) {
        return caches.delete(cacheName);
      })
    );
  });
}

self.addEventListener('install', function(event) {
  var now = Date.now();

  event.waitUntil(
    caches.keys().then(function(allCacheNames) {
      return Promise.all(
        Object.keys(CurrentCacheNamesToAbsoluteUrl).filter(function(cacheName) {
          return allCacheNames.indexOf(cacheName) === -1;
        }).map(function(cacheName) {
          var urlWithCacheBusting = getCacheBustedUrl(CurrentCacheNamesToAbsoluteUrl[cacheName],
            now);

          return caches.open(cacheName).then(function(cache) {
            var request = new Request(urlWithCacheBusting, {credentials: 'same-origin'});
            return fetch(request).then(function(response) {
              if (response.ok) {
                return cache.put(CurrentCacheNamesToAbsoluteUrl[cacheName], response);
              }

              console.error('Request for %s returned a response with status %d, so not attempting to cache it.',
                urlWithCacheBusting, response.status);
              // Get rid of the empty cache if we can't add a successful response to it.
              return caches.delete(cacheName);
            });
          });
        })
      ).then(function() {
        return Promise.all(
          allCacheNames.filter(function(cacheName) {
            return cacheName.indexOf(CacheNamePrefix) === 0 &&
                   !(cacheName in CurrentCacheNamesToAbsoluteUrl);
          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        );
      });
    }).then(function() {
      if (typeof self.skipWaiting === 'function') {
        // Force the SW to transition from installing -> active state
        self.skipWaiting();
      }
    })
  );
});

if (self.clients && (typeof self.clients.claim === 'function')) {
  self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
  });
}

self.addEventListener('message', function(event) {
  if (event.data.command === 'delete_all') {
    console.log('About to delete all caches...');
    deleteAllCaches().then(function() {
      console.log('Caches deleted.');
      event.ports[0].postMessage({
        error: null
      });
    }).catch(function(error) {
      console.log('Caches not deleted:', error);
      event.ports[0].postMessage({
        error: error
      });
    });
  }
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    var urlWithoutIgnoredParameters = stripIgnoredUrlParameters(event.request.url,
      IgnoreUrlParametersMatching);

    var cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    var directoryIndex = 'index.html';
    if (!cacheName && directoryIndex) {
      urlWithoutIgnoredParameters = addDirectoryIndex(urlWithoutIgnoredParameters, directoryIndex);
      cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    }

    var navigateFallback = '';
    // Ideally, this would check for event.request.mode === 'navigate', but that is not widely
    // supported yet:
    // https://code.google.com/p/chromium/issues/detail?id=540967
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1209081
    if (!cacheName && navigateFallback && event.request.headers.has('accept') &&
        event.request.headers.get('accept').includes('text/html')) {
      var navigateFallbackUrl = new URL(navigateFallback, self.location);
      cacheName = AbsoluteUrlToCacheName[navigateFallbackUrl.toString()];
    }

    if (cacheName) {
      event.respondWith(
        // Rely on the fact that each cache we manage should only have one entry, and return that.
        caches.open(cacheName).then(function(cache) {
          return cache.keys().then(function(keys) {
            return cache.match(keys[0]).then(function(response) {
              if (response) {
                return response;
              }
              // If for some reason the response was deleted from the cache,
              // raise and exception and fall back to the fetch() triggered in the catch().
              throw Error('The cache ' + cacheName + ' is empty.');
            });
          });
        }).catch(function(e) {
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});

