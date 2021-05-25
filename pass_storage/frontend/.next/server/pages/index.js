/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ IndexPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _web3_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../web3/provider */ \"./web3/provider.js\");\n\nvar _jsxFileName = \"/home/mihai/Documents/UPT/licenta/pass_storage/frontend/pages/index.js\";\n\n\nclass IndexPage extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {\n  async componentDidMount() {\n    try {\n      await ethereum.enable();\n      const addresses = await _web3_provider__WEBPACK_IMPORTED_MODULE_2__.eth.getAccounts();\n      console.log(addresses);\n      const balance = await _web3_provider__WEBPACK_IMPORTED_MODULE_2__.eth.getBalance(addresses[0]);\n      console.log(balance);\n    } catch (err) {\n      console.error(\"User denied access to their ETH addresses!\");\n    }\n  }\n\n  render() {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      children: \"hello world!\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }, this);\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkluZGV4UGFnZSIsIlJlYWN0IiwiY29tcG9uZW50RGlkTW91bnQiLCJldGhlcmV1bSIsImVuYWJsZSIsImFkZHJlc3NlcyIsImV0aCIsImNvbnNvbGUiLCJsb2ciLCJiYWxhbmNlIiwiZXJyIiwiZXJyb3IiLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLE1BQU1BLFNBQU4sU0FBd0JDLHdEQUF4QixDQUF3QztBQUNuRCxRQUFNQyxpQkFBTixHQUEwQjtBQUN0QixRQUFHO0FBQ0MsWUFBTUMsUUFBUSxDQUFDQyxNQUFULEVBQU47QUFDQSxZQUFNQyxTQUFTLEdBQUcsTUFBTUMsMkRBQUEsRUFBeEI7QUFDQUMsYUFBTyxDQUFDQyxHQUFSLENBQVlILFNBQVo7QUFFQSxZQUFNSSxPQUFPLEdBQUcsTUFBTUgsMERBQUEsQ0FBZUQsU0FBUyxDQUFDLENBQUQsQ0FBeEIsQ0FBdEI7QUFDQUUsYUFBTyxDQUFDQyxHQUFSLENBQVlDLE9BQVo7QUFDSCxLQVBELENBUUEsT0FBT0MsR0FBUCxFQUFZO0FBQ1JILGFBQU8sQ0FBQ0ksS0FBUixDQUFjLDRDQUFkO0FBQ0g7QUFDSjs7QUFFREMsUUFBTSxHQUFHO0FBQ1Asd0JBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQUdEOztBQW5Ca0QiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGV0aCB9IGZyb20gJy4uL3dlYjMvcHJvdmlkZXInXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4UGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRyeXtcbiAgICAgICAgICAgIGF3YWl0IGV0aGVyZXVtLmVuYWJsZSgpIFxuICAgICAgICAgICAgY29uc3QgYWRkcmVzc2VzID0gYXdhaXQgZXRoLmdldEFjY291bnRzKClcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFkZHJlc3NlcylcblxuICAgICAgICAgICAgY29uc3QgYmFsYW5jZSA9IGF3YWl0IGV0aC5nZXRCYWxhbmNlKGFkZHJlc3Nlc1swXSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGJhbGFuY2UpXG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlVzZXIgZGVuaWVkIGFjY2VzcyB0byB0aGVpciBFVEggYWRkcmVzc2VzIVwiKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGgxPmhlbGxvIHdvcmxkITwvaDE+XG4gICAgICApXG4gICAgfVxuICB9Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./web3/provider.js":
/*!**************************!*\
  !*** ./web3/provider.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"eth\": function() { return /* binding */ eth; }\n/* harmony export */ });\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web3 */ \"web3\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst provider = () => {\n  // If the user has MetaMask:\n  if (typeof web3 !== 'undefined') {\n    return web3.currentProvider;\n  } else {\n    console.error(\"You need to install MetaMask for this app to work!\");\n  }\n};\n\nconst eth = new (web3__WEBPACK_IMPORTED_MODULE_0___default())(provider()).eth;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93ZWIzL3Byb3ZpZGVyLmpzPzUyY2MiXSwibmFtZXMiOlsicHJvdmlkZXIiLCJ3ZWIzIiwiY3VycmVudFByb3ZpZGVyIiwiY29uc29sZSIsImVycm9yIiwiZXRoIiwiV2ViMyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsUUFBUSxHQUFHLE1BQU07QUFDckI7QUFDQSxNQUFJLE9BQU9DLElBQVAsS0FBZ0IsV0FBcEIsRUFBaUM7QUFDL0IsV0FBT0EsSUFBSSxDQUFDQyxlQUFaO0FBQ0QsR0FGRCxNQUVPO0FBQ0xDLFdBQU8sQ0FBQ0MsS0FBUixDQUFjLG9EQUFkO0FBQ0Q7QUFDRixDQVBEOztBQVNPLE1BQU1DLEdBQUcsR0FBRyxJQUFJQyw2Q0FBSixDQUFTTixRQUFRLEVBQWpCLEVBQXFCSyxHQUFqQyIsImZpbGUiOiIuL3dlYjMvcHJvdmlkZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgV2ViMyBmcm9tIFwid2ViM1wiXG5cbmNvbnN0IHByb3ZpZGVyID0gKCkgPT4ge1xuICAvLyBJZiB0aGUgdXNlciBoYXMgTWV0YU1hc2s6XG4gIGlmICh0eXBlb2Ygd2ViMyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gd2ViMy5jdXJyZW50UHJvdmlkZXJcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmVycm9yKFwiWW91IG5lZWQgdG8gaW5zdGFsbCBNZXRhTWFzayBmb3IgdGhpcyBhcHAgdG8gd29yayFcIilcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZXRoID0gbmV3IFdlYjMocHJvdmlkZXIoKSkuZXRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./web3/provider.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "web3":
/*!***********************!*\
  !*** external "web3" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("web3");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();