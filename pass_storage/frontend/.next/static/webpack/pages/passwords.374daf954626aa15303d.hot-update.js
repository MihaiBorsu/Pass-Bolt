/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/passwords",{

/***/ "./pages/passwords.js":
/*!****************************!*\
  !*** ./pages/passwords.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PasswordPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_mihai_Documents_UPT_licenta_pass_storage_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"../node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _home_mihai_Documents_UPT_licenta_pass_storage_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"../node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _home_mihai_Documents_UPT_licenta_pass_storage_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/createClass */ \"../node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _home_mihai_Documents_UPT_licenta_pass_storage_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/inherits */ \"../node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _home_mihai_Documents_UPT_licenta_pass_storage_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ \"../node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _home_mihai_Documents_UPT_licenta_pass_storage_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ \"../node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ \"../node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"../node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ \"../node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _components_ListPasswords__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/ListPasswords */ \"./components/ListPasswords.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Footer */ \"./components/Footer.js\");\n/* harmony import */ var _web3_passwords__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../web3/passwords */ \"./web3/passwords.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nvar _jsxFileName = \"/home/mihai/Documents/UPT/licenta/pass_storage/frontend/pages/passwords.js\";\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_home_mihai_Documents_UPT_licenta_pass_storage_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_home_mihai_Documents_UPT_licenta_pass_storage_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_home_mihai_Documents_UPT_licenta_pass_storage_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__.default)(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\n\nvar PasswordPage = /*#__PURE__*/function (_React$Component) {\n  (0,_home_mihai_Documents_UPT_licenta_pass_storage_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.default)(PasswordPage, _React$Component);\n\n  var _super = _createSuper(PasswordPage);\n\n  function PasswordPage() {\n    var _temp, _this;\n\n    (0,_home_mihai_Documents_UPT_licenta_pass_storage_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__.default)(this, PasswordPage);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return (0,_home_mihai_Documents_UPT_licenta_pass_storage_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__.default)(_this, (_temp = _this = _super.call.apply(_super, [this].concat(args)), _this.state = {\n      passwords: []\n    }, _this.getPasswordsIds = /*#__PURE__*/(0,_home_mihai_Documents_UPT_licenta_pass_storage_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default().mark(function _callee() {\n      var passwordIds, passwordsBuffer, id, id2, response4;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return (0,_web3_passwords__WEBPACK_IMPORTED_MODULE_14__.getPasswordIdsFromUser)();\n\n            case 2:\n              passwordIds = _context.sent;\n              passwordsBuffer = [];\n              _context.t0 = _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default().keys(passwordIds);\n\n            case 5:\n              if ((_context.t1 = _context.t0()).done) {\n                _context.next = 17;\n                break;\n              }\n\n              id = _context.t1.value;\n              id2 = id;\n              id2++; // ugly workarround\n\n              _context.next = 11;\n              return (0,_web3_passwords__WEBPACK_IMPORTED_MODULE_14__.getPassword)(id2);\n\n            case 11:\n              response4 = _context.sent;\n              console.log(\"id is: \", id2);\n              console.log(\"password is: \", response4);\n              passwordsBuffer[id] = response4;\n              _context.next = 5;\n              break;\n\n            case 17:\n              console.log(passwordsBuffer);\n\n              _this.setState({\n                passwords: passwordsBuffer\n              });\n\n            case 19:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    })), _temp));\n  }\n\n  (0,_home_mihai_Documents_UPT_licenta_pass_storage_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__.default)(PasswordPage, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.getPasswordsIds();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var passwords = this.state.passwords;\n      console.log(passwords);\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_11__.Page, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_11__.Center, {\n          style: {\n            maxWidth: 560\n          },\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"jsx-1671236274\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n              className: \"jsx-1671236274\",\n              children: \"Your passwords:\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 49,\n              columnNumber: 17\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ListPasswords__WEBPACK_IMPORTED_MODULE_12__.default, {\n              passwords: passwords\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 52,\n              columnNumber: 17\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 48,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 13\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_13__.default, {\n          solid: true\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 13\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default()), {\n          id: \"1671236274\",\n          children: \"h2.jsx-1671236274{font-size:18px;font-weight:600;margin-top:70px;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21paGFpL0RvY3VtZW50cy9VUFQvbGljZW50YS9wYXNzX3N0b3JhZ2UvZnJvbnRlbmQvcGFnZXMvcGFzc3dvcmRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdEd0IsQUFHZ0MsZUFDQyxnQkFDQSxnQkFDbEIiLCJmaWxlIjoiL2hvbWUvbWloYWkvRG9jdW1lbnRzL1VQVC9saWNlbnRhL3Bhc3Nfc3RvcmFnZS9mcm9udGVuZC9wYWdlcy9wYXNzd29yZHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IFBhZ2UsIENlbnRlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IExpc3RQYXNzd29yZHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGlzdFBhc3N3b3Jkc1wiXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvb3RlclwiXG5cbmltcG9ydCB7IGdldFBhc3N3b3JkSWRzRnJvbVVzZXIsIGdldFBhc3N3b3JkIH0gZnJvbSAnLi4vd2ViMy9wYXNzd29yZHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhc3N3b3JkUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGUgPSB7XG4gICAgICAgIHBhc3N3b3JkczogW10sXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgICAgICB0aGlzLmdldFBhc3N3b3Jkc0lkcygpXG4gICAgfVxuXG4gICAgZ2V0UGFzc3dvcmRzSWRzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBwYXNzd29yZElkcyA9IGF3YWl0IGdldFBhc3N3b3JkSWRzRnJvbVVzZXIoKVxuXG4gICAgICAgIGNvbnN0IHBhc3N3b3Jkc0J1ZmZlciA9IFtdXG5cbiAgICAgICAgZm9yIChjb25zdCBpZCBpbiBwYXNzd29yZElkcyl7XG4gICAgICAgICAgICB2YXIgaWQyID0gaWRcbiAgICAgICAgICAgIGlkMisrICAvLyB1Z2x5IHdvcmthcnJvdW5kXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZTQgPSBhd2FpdCBnZXRQYXNzd29yZChpZDIpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImlkIGlzOiBcIiwgaWQyKVxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJwYXNzd29yZCBpczogXCIsIHJlc3BvbnNlNClcbiAgICAgICAgICAgIHBhc3N3b3Jkc0J1ZmZlcltpZF0gPSByZXNwb25zZTRcbiAgICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2cocGFzc3dvcmRzQnVmZmVyKVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgcGFzc3dvcmRzOiBwYXNzd29yZHNCdWZmZXJcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgcGFzc3dvcmRzIH0gPSB0aGlzLnN0YXRlXG4gICAgICAgIGNvbnNvbGUubG9nKHBhc3N3b3JkcylcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8UGFnZT5cbiAgICAgICAgICAgIDxDZW50ZXIgc3R5bGU9e3tcbiAgICAgICAgICAgICAgbWF4V2lkdGg6IDU2MCwgXG4gICAgICAgICAgICB9fT4gXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgICAgICBZb3VyIHBhc3N3b3JkczpcbiAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgIDxMaXN0UGFzc3dvcmRzIHBhc3N3b3Jkcz17cGFzc3dvcmRzfSAvPlxuICAgICAgICAgICAgPC9kaXY+ICAgICAgXG4gICAgICAgICAgICA8L0NlbnRlcj5cbiAgICAgICAgICAgIDxGb290ZXIgc29saWQ9e3RydWV9IC8+XG4gICAgXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA3MHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgXG4gICAgICAgICAgPC9QYWdlPlxuICAgICAgICApXG4gICAgICB9XG5cbn1cbiJdfQ== */\\n/*@ sourceURL=/home/mihai/Documents/UPT/licenta/pass_storage/frontend/pages/passwords.js */\"\n        }, void 0, false, void 0, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 11\n      }, this);\n    }\n  }]);\n\n  return PasswordPage;\n}((react__WEBPACK_IMPORTED_MODULE_9___default().Component));\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGFzc3dvcmRzLmpzP2M1ZWMiXSwibmFtZXMiOlsiUGFzc3dvcmRQYWdlIiwic3RhdGUiLCJwYXNzd29yZHMiLCJnZXRQYXNzd29yZHNJZHMiLCJnZXRQYXNzd29yZElkc0Zyb21Vc2VyIiwicGFzc3dvcmRJZHMiLCJwYXNzd29yZHNCdWZmZXIiLCJpZCIsImlkMiIsImdldFBhc3N3b3JkIiwicmVzcG9uc2U0IiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwibWF4V2lkdGgiLCJSZWFjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7SUFFcUJBLFk7Ozs7Ozs7Ozs7Ozs7O2tQQUNqQkMsSyxHQUFRO0FBQ0pDLGVBQVMsRUFBRTtBQURQLEssUUFRUkMsZSxxUEFBa0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDWUMsd0VBQXNCLEVBRGxDOztBQUFBO0FBQ1JDLHlCQURRO0FBR1JDLDZCQUhRLEdBR1UsRUFIVjtBQUFBLG1HQUtHRCxXQUxIOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBS0hFLGdCQUxHO0FBTU5DLGlCQU5NLEdBTUFELEVBTkE7QUFPVkMsaUJBQUcsR0FQTyxDQU9IOztBQVBHO0FBQUEscUJBUWNDLDZEQUFXLENBQUNELEdBQUQsQ0FSekI7O0FBQUE7QUFRSkUsdUJBUkk7QUFTVkMscUJBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosRUFBdUJKLEdBQXZCO0FBQ0FHLHFCQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaLEVBQTZCRixTQUE3QjtBQUNBSiw2QkFBZSxDQUFDQyxFQUFELENBQWYsR0FBc0JHLFNBQXRCO0FBWFU7QUFBQTs7QUFBQTtBQWNkQyxxQkFBTyxDQUFDQyxHQUFSLENBQVlOLGVBQVo7O0FBRUEsb0JBQUtPLFFBQUwsQ0FBYztBQUNWWCx5QkFBUyxFQUFFSTtBQURELGVBQWQ7O0FBaEJjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEs7Ozs7O3dDQUpHO0FBQ2pCLFdBQUtILGVBQUw7QUFDSDs7OzZCQXVCUTtBQUFBLFVBQ0dELFNBREgsR0FDaUIsS0FBS0QsS0FEdEIsQ0FDR0MsU0FESDtBQUVMUyxhQUFPLENBQUNDLEdBQVIsQ0FBWVYsU0FBWjtBQUNBLDBCQUNFLDhEQUFDLHFEQUFEO0FBQUEsZ0NBQ0UsOERBQUMsdURBQUQ7QUFBUSxlQUFLLEVBQUU7QUFDYlksb0JBQVEsRUFBRTtBQURHLFdBQWY7QUFBQSxpQ0FHQTtBQUFBO0FBQUEsb0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESixlQUlJLDhEQUFDLCtEQUFEO0FBQWUsdUJBQVMsRUFBRVo7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBV0UsOERBQUMsd0RBQUQ7QUFBUSxlQUFLLEVBQUU7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGO0FBd0JEOzs7O0VBekRtQ2Esd0QiLCJmaWxlIjoiLi9wYWdlcy9wYXNzd29yZHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IFBhZ2UsIENlbnRlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IExpc3RQYXNzd29yZHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGlzdFBhc3N3b3Jkc1wiXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvb3RlclwiXG5cbmltcG9ydCB7IGdldFBhc3N3b3JkSWRzRnJvbVVzZXIsIGdldFBhc3N3b3JkIH0gZnJvbSAnLi4vd2ViMy9wYXNzd29yZHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhc3N3b3JkUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGUgPSB7XG4gICAgICAgIHBhc3N3b3JkczogW10sXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgICAgICB0aGlzLmdldFBhc3N3b3Jkc0lkcygpXG4gICAgfVxuXG4gICAgZ2V0UGFzc3dvcmRzSWRzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBwYXNzd29yZElkcyA9IGF3YWl0IGdldFBhc3N3b3JkSWRzRnJvbVVzZXIoKVxuXG4gICAgICAgIGNvbnN0IHBhc3N3b3Jkc0J1ZmZlciA9IFtdXG5cbiAgICAgICAgZm9yIChjb25zdCBpZCBpbiBwYXNzd29yZElkcyl7XG4gICAgICAgICAgICB2YXIgaWQyID0gaWRcbiAgICAgICAgICAgIGlkMisrICAvLyB1Z2x5IHdvcmthcnJvdW5kXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZTQgPSBhd2FpdCBnZXRQYXNzd29yZChpZDIpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImlkIGlzOiBcIiwgaWQyKVxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJwYXNzd29yZCBpczogXCIsIHJlc3BvbnNlNClcbiAgICAgICAgICAgIHBhc3N3b3Jkc0J1ZmZlcltpZF0gPSByZXNwb25zZTRcbiAgICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2cocGFzc3dvcmRzQnVmZmVyKVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgcGFzc3dvcmRzOiBwYXNzd29yZHNCdWZmZXJcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgcGFzc3dvcmRzIH0gPSB0aGlzLnN0YXRlXG4gICAgICAgIGNvbnNvbGUubG9nKHBhc3N3b3JkcylcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8UGFnZT5cbiAgICAgICAgICAgIDxDZW50ZXIgc3R5bGU9e3tcbiAgICAgICAgICAgICAgbWF4V2lkdGg6IDU2MCwgXG4gICAgICAgICAgICB9fT4gXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgICAgICBZb3VyIHBhc3N3b3JkczpcbiAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgIDxMaXN0UGFzc3dvcmRzIHBhc3N3b3Jkcz17cGFzc3dvcmRzfSAvPlxuICAgICAgICAgICAgPC9kaXY+ICAgICAgXG4gICAgICAgICAgICA8L0NlbnRlcj5cbiAgICAgICAgICAgIDxGb290ZXIgc29saWQ9e3RydWV9IC8+XG4gICAgXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA3MHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgXG4gICAgICAgICAgPC9QYWdlPlxuICAgICAgICApXG4gICAgICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/passwords.js\n");

/***/ })

});