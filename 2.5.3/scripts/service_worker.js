/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _config = __webpack_require__(1);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VERSION = _config2.default.appVersion;

addEventListener('install', function (evt) {
  var staticAssets = ['styles/dwst.css', 'scripts/dwst.js', 'images/sprite.png', 'images/favicon.png', 'images/favicon.ico', 'images/icon_128.png', 'images/icon_192.png', 'images/icon_512.png', 'manifest.json'];
  var assetPaths = staticAssets.map(function (path) {
    return '/' + VERSION + '/' + path;
  });
  var entrypoints = ['/'];
  evt.waitUntil(caches.open(VERSION).then(function (cache) {
    cache.addAll(entrypoints.concat(assetPaths));
  }));
});

/* eslint-disable consistent-return */

addEventListener('fetch', function (evt) {
  if (evt.request.url.indexOf('styleguide') !== -1) {
    return false;
  }
  if (evt.request.url.indexOf('google-analytics.com') !== -1) {
    return false;
  }
  evt.respondWith(caches.match(evt.request).then(function (response) {
    if (response) {
      return response;
    }
    return fetch(evt.request);
  }));
});

/* eslint-enable consistent-return */

addEventListener('activate', function (evt) {
  evt.waitUntil(caches.keys().then(function (cachedVersions) {
    return Promise.all(cachedVersions.map(function (cachedVersion) {
      if (cachedVersion !== VERSION) {
        return caches.delete(cachedVersion);
      }
      return Promise.resolve(null);
    }));
  }));
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  appVersion: '2.5.3',
  echoServer: 'wss://echo.websocket.org/'
};

/***/ })
/******/ ]);
//# sourceMappingURL=service_worker.js.map