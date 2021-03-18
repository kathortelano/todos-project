module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/test.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/test.js":
/*!***************************!*\
  !*** ./pages/api/test.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/mongodb */ \"./util/mongodb.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  const {\n    db\n  } = await Object(_util_mongodb__WEBPACK_IMPORTED_MODULE_0__[\"connectToDatabase\"])();\n  const movies = await db.collection(\"movies\").find({}).sort({\n    metacritic: -1\n  }).limit(20).toArray();\n  res.json(movies);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvdGVzdC5qcz9lZDJjIl0sIm5hbWVzIjpbInJlcSIsInJlcyIsImRiIiwiY29ubmVjdFRvRGF0YWJhc2UiLCJtb3ZpZXMiLCJjb2xsZWN0aW9uIiwiZmluZCIsInNvcnQiLCJtZXRhY3JpdGljIiwibGltaXQiLCJ0b0FycmF5IiwianNvbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBRWUsc0VBQU9BLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtBQUVqQyxRQUFNO0FBQUVDO0FBQUYsTUFBUyxNQUFNQyx1RUFBaUIsRUFBdEM7QUFFQSxRQUFNQyxNQUFNLEdBQUcsTUFBTUYsRUFBRSxDQUNwQkcsVUFEa0IsQ0FDUCxRQURPLEVBRWxCQyxJQUZrQixDQUViLEVBRmEsRUFHbEJDLElBSGtCLENBR2I7QUFBRUMsY0FBVSxFQUFFLENBQUM7QUFBZixHQUhhLEVBSWxCQyxLQUprQixDQUlaLEVBSlksRUFLbEJDLE9BTGtCLEVBQXJCO0FBT0FULEtBQUcsQ0FBQ1UsSUFBSixDQUFTUCxNQUFUO0FBRUQsQ0FiRCIsImZpbGUiOiIuL3BhZ2VzL2FwaS90ZXN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdFRvRGF0YWJhc2UgfSBmcm9tIFwiLi4vLi4vdXRpbC9tb25nb2RiXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuXG4gIGNvbnN0IHsgZGIgfSA9IGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKCk7XG5cbiAgY29uc3QgbW92aWVzID0gYXdhaXQgZGJcbiAgICAuY29sbGVjdGlvbihcIm1vdmllc1wiKVxuICAgIC5maW5kKHt9KVxuICAgIC5zb3J0KHsgbWV0YWNyaXRpYzogLTEgfSlcbiAgICAubGltaXQoMjApXG4gICAgLnRvQXJyYXkoKTtcblxuICByZXMuanNvbihtb3ZpZXMpO1xuXG59OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/test.js\n");

/***/ }),

/***/ "./util/mongodb.js":
/*!*************************!*\
  !*** ./util/mongodb.js ***!
  \*************************/
/*! exports provided: connectToDatabase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"connectToDatabase\", function() { return connectToDatabase; });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst {\n  MONGODB_URI,\n  MONGODB_DB\n} = process.env;\n\nif (!MONGODB_URI) {\n  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');\n}\n\nif (!MONGODB_DB) {\n  throw new Error('Please define the MONGODB_DB environment variable inside .env.local');\n}\n/**\n * Global is used here to maintain a cached connection across hot reloads\n * in development. This prevents connections growing exponentially\n * during API Route usage.\n */\n\n\nlet cached = global.mongo;\n\nif (!cached) {\n  cached = global.mongo = {\n    conn: null,\n    promise: null\n  };\n}\n\nasync function connectToDatabase() {\n  if (cached.conn) {\n    return cached.conn;\n  }\n\n  if (!cached.promise) {\n    const opts = {\n      useNewUrlParser: true,\n      useUnifiedTopology: true\n    };\n    cached.promise = mongodb__WEBPACK_IMPORTED_MODULE_0__[\"MongoClient\"].connect(MONGODB_URI, opts).then(client => {\n      return {\n        client,\n        db: client.db(MONGODB_DB)\n      };\n    });\n  }\n\n  cached.conn = await cached.promise;\n  return cached.conn;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlsL21vbmdvZGIuanM/MWRmYyJdLCJuYW1lcyI6WyJNT05HT0RCX1VSSSIsIk1PTkdPREJfREIiLCJwcm9jZXNzIiwiZW52IiwiRXJyb3IiLCJjYWNoZWQiLCJnbG9iYWwiLCJtb25nbyIsImNvbm4iLCJwcm9taXNlIiwiY29ubmVjdFRvRGF0YWJhc2UiLCJvcHRzIiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5IiwiTW9uZ29DbGllbnQiLCJjb25uZWN0IiwidGhlbiIsImNsaWVudCIsImRiIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEsTUFBTTtBQUFFQSxhQUFGO0FBQWVDO0FBQWYsSUFBOEJDLE9BQU8sQ0FBQ0MsR0FBNUM7O0FBRUEsSUFBSSxDQUFDSCxXQUFMLEVBQWtCO0FBQ2hCLFFBQU0sSUFBSUksS0FBSixDQUNKLHNFQURJLENBQU47QUFHRDs7QUFFRCxJQUFJLENBQUNILFVBQUwsRUFBaUI7QUFDZixRQUFNLElBQUlHLEtBQUosQ0FDSixxRUFESSxDQUFOO0FBR0Q7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxJQUFJQyxNQUFNLEdBQUdDLE1BQU0sQ0FBQ0MsS0FBcEI7O0FBRUEsSUFBSSxDQUFDRixNQUFMLEVBQWE7QUFDWEEsUUFBTSxHQUFHQyxNQUFNLENBQUNDLEtBQVAsR0FBZTtBQUFFQyxRQUFJLEVBQUUsSUFBUjtBQUFjQyxXQUFPLEVBQUU7QUFBdkIsR0FBeEI7QUFDRDs7QUFFTSxlQUFlQyxpQkFBZixHQUFtQztBQUN4QyxNQUFJTCxNQUFNLENBQUNHLElBQVgsRUFBaUI7QUFDZixXQUFPSCxNQUFNLENBQUNHLElBQWQ7QUFDRDs7QUFFRCxNQUFJLENBQUNILE1BQU0sQ0FBQ0ksT0FBWixFQUFxQjtBQUNuQixVQUFNRSxJQUFJLEdBQUc7QUFDWEMscUJBQWUsRUFBRSxJQUROO0FBRVhDLHdCQUFrQixFQUFFO0FBRlQsS0FBYjtBQUtBUixVQUFNLENBQUNJLE9BQVAsR0FBaUJLLG1EQUFXLENBQUNDLE9BQVosQ0FBb0JmLFdBQXBCLEVBQWlDVyxJQUFqQyxFQUF1Q0ssSUFBdkMsQ0FBNkNDLE1BQUQsSUFBWTtBQUN2RSxhQUFPO0FBQ0xBLGNBREs7QUFFTEMsVUFBRSxFQUFFRCxNQUFNLENBQUNDLEVBQVAsQ0FBVWpCLFVBQVY7QUFGQyxPQUFQO0FBSUQsS0FMZ0IsQ0FBakI7QUFNRDs7QUFDREksUUFBTSxDQUFDRyxJQUFQLEdBQWMsTUFBTUgsTUFBTSxDQUFDSSxPQUEzQjtBQUNBLFNBQU9KLE1BQU0sQ0FBQ0csSUFBZDtBQUNEIiwiZmlsZSI6Ii4vdXRpbC9tb25nb2RiLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tICdtb25nb2RiJ1xuXG5jb25zdCB7IE1PTkdPREJfVVJJLCBNT05HT0RCX0RCIH0gPSBwcm9jZXNzLmVudlxuXG5pZiAoIU1PTkdPREJfVVJJKSB7XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICAnUGxlYXNlIGRlZmluZSB0aGUgTU9OR09EQl9VUkkgZW52aXJvbm1lbnQgdmFyaWFibGUgaW5zaWRlIC5lbnYubG9jYWwnXG4gIClcbn1cblxuaWYgKCFNT05HT0RCX0RCKSB7XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICAnUGxlYXNlIGRlZmluZSB0aGUgTU9OR09EQl9EQiBlbnZpcm9ubWVudCB2YXJpYWJsZSBpbnNpZGUgLmVudi5sb2NhbCdcbiAgKVxufVxuXG4vKipcbiAqIEdsb2JhbCBpcyB1c2VkIGhlcmUgdG8gbWFpbnRhaW4gYSBjYWNoZWQgY29ubmVjdGlvbiBhY3Jvc3MgaG90IHJlbG9hZHNcbiAqIGluIGRldmVsb3BtZW50LiBUaGlzIHByZXZlbnRzIGNvbm5lY3Rpb25zIGdyb3dpbmcgZXhwb25lbnRpYWxseVxuICogZHVyaW5nIEFQSSBSb3V0ZSB1c2FnZS5cbiAqL1xubGV0IGNhY2hlZCA9IGdsb2JhbC5tb25nb1xuXG5pZiAoIWNhY2hlZCkge1xuICBjYWNoZWQgPSBnbG9iYWwubW9uZ28gPSB7IGNvbm46IG51bGwsIHByb21pc2U6IG51bGwgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29ubmVjdFRvRGF0YWJhc2UoKSB7XG4gIGlmIChjYWNoZWQuY29ubikge1xuICAgIHJldHVybiBjYWNoZWQuY29ublxuICB9XG5cbiAgaWYgKCFjYWNoZWQucHJvbWlzZSkge1xuICAgIGNvbnN0IG9wdHMgPSB7XG4gICAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXG4gICAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXG4gICAgfVxuXG4gICAgY2FjaGVkLnByb21pc2UgPSBNb25nb0NsaWVudC5jb25uZWN0KE1PTkdPREJfVVJJLCBvcHRzKS50aGVuKChjbGllbnQpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNsaWVudCxcbiAgICAgICAgZGI6IGNsaWVudC5kYihNT05HT0RCX0RCKSxcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIGNhY2hlZC5jb25uID0gYXdhaXQgY2FjaGVkLnByb21pc2VcbiAgcmV0dXJuIGNhY2hlZC5jb25uXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./util/mongodb.js\n");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongodb\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb2RiXCI/ZGVmZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJtb25nb2RiLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongodb\n");

/***/ })

/******/ });