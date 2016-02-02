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
var PrecacheConfig = [["/duesternbrook/activities.html","63ac20638a33d2ab89d82318cb82f0e2"],["/duesternbrook/bird-watching.html","f81d181c4e08c015e9d505bbd3878ded"],["/duesternbrook/cats-unlimited.html","a1ed762e4f5404e7bafc713bec50f793"],["/duesternbrook/content/activities-en.html","035b54744c1c9ea893681e741b99cdc9"],["/duesternbrook/content/bird-watching-en.html","d393f92b45bc86949dd22cdcff571b46"],["/duesternbrook/content/cats-unlimited-en.html","7ed3a461a0f1499d43807111f574122e"],["/duesternbrook/content/game-drive-en.html","35f80a9159157d3cc2669e8602b26cd6"],["/duesternbrook/content/home-en.html","fac53c6bc279965fc5d7f5816379afb0"],["/duesternbrook/content/horse-riding-en.html","36596c21f163cdf1c5c04e56abf61303"],["/duesternbrook/content/img/medium/01.jpg","811f4fbdd31707cb7a6116f0697f2bf1"],["/duesternbrook/content/img/medium/02.jpg","058154ac23423df3903e760840798eac"],["/duesternbrook/content/img/medium/03.jpg","95b5a9bd4c1577878fe679bea6f4335c"],["/duesternbrook/content/img/medium/08.jpg","671a9fe30b95fdbf57227acdf0546b7d"],["/duesternbrook/content/img/medium/09.jpg","fc19def2b832297174e7773bde0f7479"],["/duesternbrook/content/img/medium/10.jpg","9391126531d6ec8717d5c711f92a74f4"],["/duesternbrook/content/img/medium/100.jpg","c72c177b66d9de8d55228318bc1dc587"],["/duesternbrook/content/img/medium/101.jpg","84d1367bc3bca3c58fdc0dfd18309f1d"],["/duesternbrook/content/img/medium/104.jpg","bedf9a8dec193ca697fb6f3f619e126d"],["/duesternbrook/content/img/medium/108.jpg","1bcf141925a340ae9a7855f7ef2a8cfa"],["/duesternbrook/content/img/medium/109.jpg","1798a97dbb5c3849ef9bb5039f485d78"],["/duesternbrook/content/img/medium/11.jpg","f5653a607feedbced019e82249c14676"],["/duesternbrook/content/img/medium/110.jpg","4ab631212e4014e9450d90d340603593"],["/duesternbrook/content/img/medium/111.jpg","5f4bff0e4a7b7548ab3c3d73aaa78d3e"],["/duesternbrook/content/img/medium/112.jpg","781d433863788fecb3fbfa448eff7088"],["/duesternbrook/content/img/medium/113.jpg","449e6e6bce6008174c9d93772029dbef"],["/duesternbrook/content/img/medium/114.jpg","f66b318ad95f2689a1ab1f5b3c4cda7d"],["/duesternbrook/content/img/medium/115.jpg","206b694d41398eb36cebe334ee8d21d5"],["/duesternbrook/content/img/medium/116.jpg","e977290c6e24e6b57ec981b4bb6c5721"],["/duesternbrook/content/img/medium/12.jpg","2615e29c1f170220c5622782ecd07a13"],["/duesternbrook/content/img/medium/120.jpg","2d45e63b28e6d40e7ef40fe30a3e7946"],["/duesternbrook/content/img/medium/121.jpg","139ac5c9f1d510782977901321b2ad8a"],["/duesternbrook/content/img/medium/122.jpg","79c708537f596cb0cd307ac611879789"],["/duesternbrook/content/img/medium/123.jpg","b662717221433d44fad42994e2dac9de"],["/duesternbrook/content/img/medium/124.jpg","71af29130d011f8672cc3902e55ea77a"],["/duesternbrook/content/img/medium/126.jpg","3b711eaf143e77378ce8cdd4600aa2e8"],["/duesternbrook/content/img/medium/127.jpg","6207795770324ffa7902c80292b7cfb1"],["/duesternbrook/content/img/medium/128.jpg","8d09a4ac542dcb0b31fc46a489847449"],["/duesternbrook/content/img/medium/129.jpg","d1433668282f2f353d08ca87b4a1e2c8"],["/duesternbrook/content/img/medium/13.jpg","c0bc8699655cc3f3fd4949128c6c83a8"],["/duesternbrook/content/img/medium/131.jpg","f96c831df1bcfe7a20f107b093f4bf53"],["/duesternbrook/content/img/medium/133.jpg","bd51d0623387e11d1dd6f5b6e92c4df3"],["/duesternbrook/content/img/medium/134.jpg","1bec29a47ebdb198169ce593c24880c0"],["/duesternbrook/content/img/medium/136.jpg","430cf30c45d3867da8e18cf29c17d54c"],["/duesternbrook/content/img/medium/137.jpg","f7ab4ad613eb843ea8f33e53d4e43c8d"],["/duesternbrook/content/img/medium/138.jpg","5f960fa578ddf6a0bed2957690aaa253"],["/duesternbrook/content/img/medium/14.jpg","f319593b7fb24f1de0eaef196734cf31"],["/duesternbrook/content/img/medium/15.jpg","3bf67da3879cb6c640fd0e99a48e8cf7"],["/duesternbrook/content/img/medium/16.jpg","fbc8775bb765f6e043d37c93743872e7"],["/duesternbrook/content/img/medium/17.jpg","09b327e75651cb1d004b4dc492851b28"],["/duesternbrook/content/img/medium/22.jpg","8207f6fcbcbbe823ee47f5779a1e1314"],["/duesternbrook/content/img/medium/33.jpg","de14f2c5ec3842f217d2b6fcb2c95dc7"],["/duesternbrook/content/img/medium/34.jpg","1306b418835a54ad19a1a74325ee253a"],["/duesternbrook/content/img/medium/60.jpg","f52563c73379e397f7f081e31d94ae61"],["/duesternbrook/content/img/medium/61.jpg","69ddf1981f55a9712a36164fc2ba74df"],["/duesternbrook/content/img/medium/62.jpg","f155e9e82ba0fc32497d141eef69d3f0"],["/duesternbrook/content/img/medium/63.jpg","2c229b776276e306d4eeb117a00650b1"],["/duesternbrook/content/img/medium/64.jpg","dcbc6778987b5dad401c18bb1e4a422a"],["/duesternbrook/content/img/medium/65.jpg","a306b5224078ef57788d444bdea59c37"],["/duesternbrook/content/img/medium/66.jpg","7c710f6a31d3dc62dc51112ded36171f"],["/duesternbrook/content/img/medium/67.jpg","e60d7f9676985b7588b10728abba3411"],["/duesternbrook/content/img/medium/74.jpg","fbc84cfddaf31175848bbcad706f28a9"],["/duesternbrook/content/img/medium/75.jpg","7906b4ffd9f2755c82d331df9da982a8"],["/duesternbrook/content/img/medium/76.jpg","8694323ab267ff81f3f025434ca1c469"],["/duesternbrook/content/img/medium/80.jpg","2376e676e26ff750bffa9a577e74c7c4"],["/duesternbrook/content/img/medium/81.jpg","0699c5cc067536cc3b87f40bfc958d43"],["/duesternbrook/content/img/medium/82.jpg","03c7274b74feff00ee55086c1627045f"],["/duesternbrook/content/img/medium/83.jpg","517cdbab5aea7d5edf737954493cad12"],["/duesternbrook/content/img/medium/84.jpg","e773445313d3e6f6ce83020de2e6f55e"],["/duesternbrook/content/img/medium/85.jpg","5daa0ca810089aa6154e01efcd9af104"],["/duesternbrook/content/img/medium/86.jpg","3bf67da3879cb6c640fd0e99a48e8cf7"],["/duesternbrook/content/img/medium/87.jpg","72dd9ee377ac814b1cbdb322fbca1974"],["/duesternbrook/content/img/medium/88.jpg","5baf833c3ee89fcd0c4555a291c7e9d8"],["/duesternbrook/content/img/medium/89.jpg","7d8597991a7dba074f0c9dc7749e57e1"],["/duesternbrook/content/img/medium/90.jpg","60007c9d12ab3d52d40aa452a5991166"],["/duesternbrook/content/img/medium/93.jpg","291bbe4ef744267fe32a493327a03c9c"],["/duesternbrook/content/img/medium/94.jpg","b2b30bac1aa5b6f9d6845b3c931b20ce"],["/duesternbrook/content/img/medium/95.jpg","01bf6164bfc92dd88182f7e0efead6bb"],["/duesternbrook/content/img/medium/96.jpg","c8aec7fbd5ac4ba0ed5c57c5df46a091"],["/duesternbrook/content/img/medium/baboon-in-river.jpg","483749f2d9af538f5c9ca4dd985a5aa6"],["/duesternbrook/content/img/medium/bird-watching.jpg","d8629e0ff02abf51b622174365e04ae3"],["/duesternbrook/content/img/medium/car-activities.jpg","b2d9f3da423ce88f111dbb24037a9d2e"],["/duesternbrook/content/img/medium/cats-unlimited.jpg","7fdfe52b26f8eb9d59d4d96a5b6dc848"],["/duesternbrook/content/img/medium/cats-unlimited1.jpg","09d3bd5a0ef7076996c25d299c8ccba3"],["/duesternbrook/content/img/medium/cats-unlimited2.jpg","9e4cd72947deebe6fabfbb659f032836"],["/duesternbrook/content/img/medium/eland-herd.jpg","2edcff07ac6589f602b58739b5debba1"],["/duesternbrook/content/img/medium/farmhouse.jpg","d261bc9e3b712f6c07c5104b9261c816"],["/duesternbrook/content/img/medium/giraffes-2.jpg","1a9fdb1dc1cfeef62c9d0946009782ba"],["/duesternbrook/content/img/medium/giraffes.jpg","14a0f68dc072ec43cb08cfe5b3b7ab57"],["/duesternbrook/content/img/medium/hiking.jpg","8333435beb47121a44f60df121648c4d"],["/duesternbrook/content/img/medium/hippo-and-baby.jpg","3cf1fe8e490dab39ff9edfe95df982bb"],["/duesternbrook/content/img/medium/horseriding-1.jpg","b750c22e39a94bda0f3f8bb012c3e107"],["/duesternbrook/content/img/medium/horseriding-2.jpg","e7a84702e7cb92ae7bd989d334b3096b"],["/duesternbrook/content/img/medium/horseriding-3.jpg","6471d70460891260465d2a7d77995931"],["/duesternbrook/content/img/medium/horseriding-4.jpg","46eb8a287f481682c1d44b16fd96492c"],["/duesternbrook/content/img/medium/horseriding.jpg","e7a84702e7cb92ae7bd989d334b3096b"],["/duesternbrook/content/img/medium/impalas.jpg","b75a72e5698ca8da6d63a073ecd83334"],["/duesternbrook/content/img/medium/klipspringer.jpg","ff6aad985f859d62e0d8ad465312bdb0"],["/duesternbrook/content/img/medium/leopard1.jpg","b17fd7a9fb0f0df3d3c5f73ef7cdef28"],["/duesternbrook/content/img/medium/mountain-drive.jpg","e66e173e088bd25d09392f23a0b251a9"],["/duesternbrook/content/img/medium/mountain-zebra.jpg","23c337d26d3f337d03e7cefa2c63bcd7"],["/duesternbrook/content/img/medium/oryx-herd.jpg","42398962fdb5aed0a38a04e890a54541"],["/duesternbrook/content/img/medium/ostrich-female.jpg","c3a047800fc3a90a917b968055117121"],["/duesternbrook/content/img/medium/pelicans.jpg","63ceffe3aa5c5e3e32c08f8156f072d5"],["/duesternbrook/content/img/medium/reception.jpg","69e9fcea4ccccda40bef72cfb5ecd2b8"],["/duesternbrook/content/img/medium/warthog.jpg","284bd173192d96bb356ab995a35e1c33"],["/duesternbrook/content/img/medium/waterbuck.jpg","2287d57b5b12ac99245faed6f454ef73"],["/duesternbrook/content/img/medium/wildebeast-herd.jpg","8c1686aa57abe88dd33c811037955652"],["/duesternbrook/content/img/namibian-purple-roller.jpg","fccb54df27197579fcd356bc87a9acc1"],["/duesternbrook/content/img/small/01.jpg","f4a3eff5dae00fd6805cccfb52101b2b"],["/duesternbrook/content/img/small/02.jpg","ed4fd58c4af10bd52ca918c17401515a"],["/duesternbrook/content/img/small/03.jpg","0a30763b822ff7915e8eb26024de9483"],["/duesternbrook/content/img/small/08.jpg","06877ac2cda8037c3d424bc598e8a591"],["/duesternbrook/content/img/small/09.jpg","49f87e8b0b7ba88e6685be5574852664"],["/duesternbrook/content/img/small/10.jpg","bd049ced098130116748b711b5c520fa"],["/duesternbrook/content/img/small/100.jpg","bfbbc9261d0b97d2a275ea623040239a"],["/duesternbrook/content/img/small/101.jpg","5cec95a5a810ea44c27ab9a964f296e0"],["/duesternbrook/content/img/small/104.jpg","16f2e0103d93861655f8f33f5c5646df"],["/duesternbrook/content/img/small/108.jpg","feb14c7b236e7b534ce97cbc77e4dd08"],["/duesternbrook/content/img/small/109.jpg","aac2fa09016a5b43c6c5fab47882ff84"],["/duesternbrook/content/img/small/11.jpg","6efcc4c20b6299348947489300c2f96b"],["/duesternbrook/content/img/small/110.jpg","3a11ce5e2e6ccb0e326192e5c5ee6b6b"],["/duesternbrook/content/img/small/111.jpg","b95898ebf56593b0c8a27acd6321bfe7"],["/duesternbrook/content/img/small/112.jpg","0d750dc40b3ce44057cd3b5113e7a570"],["/duesternbrook/content/img/small/113.jpg","e2755c359fdbcbe026040d1ba008fd18"],["/duesternbrook/content/img/small/114.jpg","f794f98a6f0cf40b31802cd5cff5cb93"],["/duesternbrook/content/img/small/115.jpg","cb3b3ad2dc3e1bb5bf23aef0c78c13c5"],["/duesternbrook/content/img/small/116.jpg","2bbcc066b735eec85a44bdd36dad2f1d"],["/duesternbrook/content/img/small/12.jpg","20e6665b586188ff84c8c353284455e2"],["/duesternbrook/content/img/small/120.jpg","54af482f5d7fb6f5e3091f750c5537a3"],["/duesternbrook/content/img/small/121.jpg","af0f3daa971c1a3fc0f9b70a0d4ae2d3"],["/duesternbrook/content/img/small/122.jpg","074d2d6a196916a620bdb3abdda9ac15"],["/duesternbrook/content/img/small/123.jpg","eaf850f501471c8f882943895946e091"],["/duesternbrook/content/img/small/124.jpg","0669dab1c7cf7d4d623a02cc0999ef2a"],["/duesternbrook/content/img/small/126.jpg","f1c7e975c4d9d965c73021af1170962f"],["/duesternbrook/content/img/small/127.jpg","105365581b256f9858a93c0525889543"],["/duesternbrook/content/img/small/128.jpg","30c2f54f57184768bad7f0125b249ac2"],["/duesternbrook/content/img/small/129.jpg","61651d77289f25988f960a6056e751d8"],["/duesternbrook/content/img/small/13.jpg","036692aa18cb83dfcdfc479d530efa14"],["/duesternbrook/content/img/small/131.jpg","bb3e57ea9ed2103faea7ee97a5423498"],["/duesternbrook/content/img/small/133.jpg","f08c912d8696dc77c1305230a78de391"],["/duesternbrook/content/img/small/134.jpg","d80840316c70eb280873e605b71ba2fd"],["/duesternbrook/content/img/small/136.jpg","81e32fb75fe1e70a353b30c0039b561a"],["/duesternbrook/content/img/small/137.jpg","5b832e9f5056f7a366e4242e48cc6c35"],["/duesternbrook/content/img/small/138.jpg","41c8875e79eedb141652b68429b133ff"],["/duesternbrook/content/img/small/14.jpg","fb55a9c685d0152371ee8b22d338cea8"],["/duesternbrook/content/img/small/15.jpg","642f7babcada8c240036818546d990bf"],["/duesternbrook/content/img/small/16.jpg","e74cdea74b3e4b4f61c0b4f6a84850bc"],["/duesternbrook/content/img/small/17.jpg","88a552260aea1ef02f91dc17b6027c64"],["/duesternbrook/content/img/small/22.jpg","054643cfd7644fc913d3b7a1f0539a70"],["/duesternbrook/content/img/small/baboon-in-river.jpg","557074bd4b444d59b2b248996bb6a205"],["/duesternbrook/content/img/small/bird-watching.jpg","8b774dbd0743d0365c3df98f920d2516"],["/duesternbrook/content/img/small/car-activities.jpg","b37ccb9bffb74f6d15c0fbe7c075c39e"],["/duesternbrook/content/img/small/cats-unlimited.jpg","407df2669fc56290eb1cfbfd6fede855"],["/duesternbrook/content/img/small/eland-herd.jpg","10534acd96917a817ae653bea79ac5b4"],["/duesternbrook/content/img/small/farmhouse.jpg","fe4ef7fa9480b094cf39965e06c84a25"],["/duesternbrook/content/img/small/giraffes-2.jpg","8fccf5df07f775968b2978d88ad1b161"],["/duesternbrook/content/img/small/giraffes.jpg","805461cd1ada9be7cf88851a3fc2ecf4"],["/duesternbrook/content/img/small/hiking.jpg","ba3f8f868157a55a9f407f01bf473d13"],["/duesternbrook/content/img/small/hippo-and-baby.jpg","4653cdcdad8b154358ec86c49a39e28f"],["/duesternbrook/content/img/small/horseriding.jpg","d2093d3751680b96ad1ddbe982aec9ca"],["/duesternbrook/content/img/small/impalas.jpg","4c861c63b952d242a8062b6d334d3f5e"],["/duesternbrook/content/img/small/klipspringer.jpg","e58a1dd26b37cf84c4ef72202d8d6187"],["/duesternbrook/content/img/small/leopard1.jpg","a160b92f625fb586630e12659cbcc789"],["/duesternbrook/content/img/small/mountain-drive.jpg","34f498a9e113a0605f9db918b4e539f5"],["/duesternbrook/content/img/small/mountain-zebra.jpg","5199950ac408bf21c8a591e4d2800a34"],["/duesternbrook/content/img/small/oryx-herd.jpg","4cdd4b3133edcb6394a1edada800c36c"],["/duesternbrook/content/img/small/ostrich-female.jpg","8a967169e3db5b9918b0fb43a82053d1"],["/duesternbrook/content/img/small/pelicans.jpg","c4770f91241a4f5e5627b0fd8a5e869a"],["/duesternbrook/content/img/small/reception.jpg","cda4d3dd86c247368e2d94b74823f626"],["/duesternbrook/content/img/small/warthog.jpg","4e2b7dd8dd3cbd4bdcdbad949b83609a"],["/duesternbrook/content/img/small/waterbuck.jpg","62bc9bf63c45f0e2bc509d909704c478"],["/duesternbrook/content/img/small/wildebeast-herd.jpg","f8a01e6c2e4820105c108ed602a64a5e"],["/duesternbrook/content/img/source/Breakfast table with view on veranda Duesternbrook [800x600].jpg","18eb7e4cae4aa44d8981aaeb7be63d81"],["/duesternbrook/content/img/source/Dinner in the Lapa 3 [800x600].jpg","60f5f271f0b0ad861702895722d802d6"],["/duesternbrook/content/img/source/Horseriding 3.jpg","afab2de52bb617533440117662cf17ff"],["/duesternbrook/content/img/source/activities.jpg","1f21bd524da46412a4067a18eec20a53"],["/duesternbrook/content/img/source/reception.jpg","bdabf6a8b990a37b5d26bf959bb4102a"],["/duesternbrook/content/services-en.html","6b8f300e6da479bc71a1a28417120b85"],["/duesternbrook/css/oldie.css","5d4f20a2412e8fc01c73f6f8ff4c051e"],["/duesternbrook/css/organisms/owl.carousel.css","03114a451ed53c8f4ae0d168b1d9603f"],["/duesternbrook/css/organisms/owl.theme.css","257fdf99656b7bbb629f88a4cbd66ad2"],["/duesternbrook/css/organisms/owl.transitions.css","79b15e4ae4f05e3c184dce1bdf6bbda1"],["/duesternbrook/css/theme.css","ac53d99fec51cee3abc7af374a443144"],["/duesternbrook/fonts/PTS55F.svg","13d7a577f04938cb9d40c12255afb39c"],["/duesternbrook/fonts/PTS55F.ttf","02edacd49e47361d9340612794053f51"],["/duesternbrook/fonts/PTS55F.woff","c6f7e70514b96d153172213380412644"],["/duesternbrook/fonts/PTS75F.svg","7200c1c718a9b0119a618547087bba5a"],["/duesternbrook/fonts/PTS75F.ttf","9fc7260bd63e4516e137f9a95b9339b2"],["/duesternbrook/fonts/PTS75F.woff","eaabe74523c1672230089be2b5eeaa8e"],["/duesternbrook/fonts/acme.svg","651a07f6d29fc9799b8281c9fe166f22"],["/duesternbrook/fonts/acme.ttf","17f1cd5cce8888ad8e62f0e84b0a7633"],["/duesternbrook/fonts/acme.woff","dda524f19f81cc94d40ed84e540f0da0"],["/duesternbrook/fonts/flexslider-icon.svg","10e8a5455c4522c48aa975eacd4f0023"],["/duesternbrook/fonts/flexslider-icon.ttf","b4c9e5057989b9727a5df4e0a21af33c"],["/duesternbrook/fonts/flexslider-icon.woff","f8b92f66539473eea649c8514eb836a0"],["/duesternbrook/fonts/safe_from_harm.svg","9852ee523f08a4e897c25966b743e3c3"],["/duesternbrook/fonts/safe_from_harm.ttf","6820cf2aacb0ab8bc32b16704a2c14a4"],["/duesternbrook/fonts/safe_from_harm.woff","e2c446a0b222a043d9fc2135d2c9072e"],["/duesternbrook/game-drive.html","cab1a70778c5359fe2620b18b123c8f5"],["/duesternbrook/horse-riding.html","6fc5a35faa2af923c02577a31eee2d6e"],["/duesternbrook/images/AjaxLoader.gif","5b8b06c052cac80413d62e5c45f9f37b"],["/duesternbrook/images/arrow-right.svg","cb60dd7662601acae41f747d1ae45d68"],["/duesternbrook/images/favicon/android-icon-144x144.png","62e7abdbcffc98941ed3134d6439eb5a"],["/duesternbrook/images/favicon/android-icon-192x192.png","4f78aad7b9c6cf68ba89815740e419e0"],["/duesternbrook/images/favicon/android-icon-36x36.png","fedd4d54f6ad49ec444ebb830e1bdd75"],["/duesternbrook/images/favicon/android-icon-48x48.png","d963b30b497eb076a2bf8398da835529"],["/duesternbrook/images/favicon/android-icon-72x72.png","59cc5c1a0d6d3f79ddcd54ef4d639cb9"],["/duesternbrook/images/favicon/android-icon-96x96.png","64893db6c8d6f41ae03fbe9e9b962b3e"],["/duesternbrook/images/favicon/apple-icon-114x114.png","b44c7629fbfe37d1c08e7bac78bca2a5"],["/duesternbrook/images/favicon/apple-icon-120x120.png","005758616c017184a51539081efe728d"],["/duesternbrook/images/favicon/apple-icon-144x144.png","62e7abdbcffc98941ed3134d6439eb5a"],["/duesternbrook/images/favicon/apple-icon-152x152.png","4127dceea5ed636efd892d60e48e681d"],["/duesternbrook/images/favicon/apple-icon-180x180.png","18870de8b88bfdab2da7741e16918e02"],["/duesternbrook/images/favicon/apple-icon-57x57.png","9002afa873d4bf8ab285326889bf0fa3"],["/duesternbrook/images/favicon/apple-icon-60x60.png","891f3302281e59b892a3198e908a4ea6"],["/duesternbrook/images/favicon/apple-icon-72x72.png","59cc5c1a0d6d3f79ddcd54ef4d639cb9"],["/duesternbrook/images/favicon/apple-icon-76x76.png","247cf24afa389e8f025581a4e8b57aff"],["/duesternbrook/images/favicon/apple-icon-precomposed.png","c0934f844fa704a35cffeaba6e3cfb26"],["/duesternbrook/images/favicon/apple-icon.png","c0934f844fa704a35cffeaba6e3cfb26"],["/duesternbrook/images/favicon/favicon-16x16.png","d271281d80215160400fb5243dc54c93"],["/duesternbrook/images/favicon/favicon-32x32.png","81ad3f20a6c2e86105f0e00f97f08894"],["/duesternbrook/images/favicon/favicon-96x96.png","64893db6c8d6f41ae03fbe9e9b962b3e"],["/duesternbrook/images/favicon/ms-icon-144x144.png","62e7abdbcffc98941ed3134d6439eb5a"],["/duesternbrook/images/favicon/ms-icon-150x150.png","1883cbffdbf4fa30bc7b498e8d1fcfc1"],["/duesternbrook/images/favicon/ms-icon-310x310.png","877676adbf64ff8dc3ca7194b217d106"],["/duesternbrook/images/favicon/ms-icon-70x70.png","5f495e0aa45ddb5569fd140ed044513b"],["/duesternbrook/images/flexslider-icon.svg","10e8a5455c4522c48aa975eacd4f0023"],["/duesternbrook/images/grabbing.png","d817e1dba5bd5d891d0504bf1715807b"],["/duesternbrook/images/hero-home-desk.jpg","44b2a2f9dd867bbae784332a3731da72"],["/duesternbrook/images/hero-home-desk@2x.jpg","20c15edef040c6a85e71ce71517051e2"],["/duesternbrook/images/hero-home-tab.jpg","db658a647c66098d7483f84c7d8fc533"],["/duesternbrook/images/hero-home-tab@2x.jpg","15f62ee89654f17d3ce3864cd23c42f4"],["/duesternbrook/images/hero-home.jpg","23d30aed8ba6bf32f1c20cd8d226308f"],["/duesternbrook/images/hero-home@2x.jpg","e5d99faa000ffe7f986b20660266e4ac"],["/duesternbrook/images/logo-black.svg","c77b2b304e0d0680cbfa1e33d2a9ee27"],["/duesternbrook/images/logo-white.svg","50faeddf9a499dda53a118720efcf235"],["/duesternbrook/index.html","066c255815cc84b3818c0ae6adf82fb7"],["/duesternbrook/js/theme.js","81597f525a2015cccc94169800687ec8"],["/duesternbrook/partials/_favicon.html","61ee7a980df2e969b6e0ac276900d222"],["/duesternbrook/partials/_head.html","d8f02991090e4bcfe00526b7ea147891"],["/duesternbrook/partials/_header.html","037978ecc1b2b085b6a19173bce4c5f8"],["/duesternbrook/partials/_scripts.html","dfe51ce95dc903006921608d6563f5c2"],["/duesternbrook/partials/layout.html","c67df7e481960900687b374e3666b3e6"],["/duesternbrook/service-worker-registration.js","c1ee5aec388e1ed07d6d290693b72547"],["/duesternbrook/service-worker.js","e18e59dec2ff8987f0ea7745828199f8"],["/duesternbrook/services.html","e05004312a3845bc8d092f3e7006a0f8"]];
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

