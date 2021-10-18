webpackHotUpdate_N_E("pages/blog",{

/***/ "./pages/blog/index.tsx":
/*!******************************!*\
  !*** ./pages/blog/index.tsx ***!
  \******************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var evergreen_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! evergreen-ui */ \"./node_modules/evergreen-ui/esm/index.js\");\n/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/container */ \"./components/container.tsx\");\n/* harmony import */ var _components_homeNav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/homeNav */ \"./components/homeNav.tsx\");\n/* harmony import */ var _components_postPreview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/postPreview */ \"./components/postPreview.tsx\");\n\n\nvar _jsxFileName = \"/Users/primo.acho/dev/primo-acho/next-courses/prod-app/pages/blog/index.tsx\",\n    _this = undefined;\n\n\n\n\n\n\n\nvar Blog = function Blog(_ref) {\n  var posts = _ref.posts;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(evergreen_ui__WEBPACK_IMPORTED_MODULE_2__[\"Pane\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"header\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_homeNav__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_container__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: posts.map(function (post) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(evergreen_ui__WEBPACK_IMPORTED_MODULE_2__[\"Pane\"], {\n            marginY: Object(evergreen_ui__WEBPACK_IMPORTED_MODULE_2__[\"majorScale\"])(5),\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_postPreview__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n              post: post\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 23,\n              columnNumber: 15\n            }, _this)\n          }, post.title, false, {\n            fileName: _jsxFileName,\n            lineNumber: 22,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = Blog;\nBlog.defaultProps = {\n  posts: []\n};\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blog);\n/**\n * Need to get the posts from the\n * fs and our CMS\n */\n\nvar _c;\n\n$RefreshReg$(_c, \"Blog\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy9pbmRleC50c3g/MWRmMyJdLCJuYW1lcyI6WyJCbG9nIiwicG9zdHMiLCJtYXAiLCJwb3N0IiwibWFqb3JTY2FsZSIsInRpdGxlIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUNBOztBQUlBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQWU7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7QUFDMUIsc0JBQ0UscUVBQUMsaURBQUQ7QUFBQSw0QkFDRTtBQUFBLDZCQUNFLHFFQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFJRTtBQUFBLDZCQUNFLHFFQUFDLDZEQUFEO0FBQUEsa0JBQ0dBLEtBQUssQ0FBQ0MsR0FBTixDQUFVLFVBQUNDLElBQUQ7QUFBQSw4QkFDVCxxRUFBQyxpREFBRDtBQUF1QixtQkFBTyxFQUFFQywrREFBVSxDQUFDLENBQUQsQ0FBMUM7QUFBQSxtQ0FDRSxxRUFBQywrREFBRDtBQUFhLGtCQUFJLEVBQUVEO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixhQUFXQSxJQUFJLENBQUNFLEtBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRFM7QUFBQSxTQUFWO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWdCRCxDQWpCRDs7S0FBTUwsSTtBQW1CTkEsSUFBSSxDQUFDTSxZQUFMLEdBQW9CO0FBQ2xCTCxPQUFLLEVBQUU7QUFEVyxDQUFwQjs7QUFVZUQsbUVBQWY7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3BhZ2VzL2Jsb2cvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgUGFuZSwgbWFqb3JTY2FsZSB9IGZyb20gJ2V2ZXJncmVlbi11aSdcbmltcG9ydCBtYXR0ZXIgZnJvbSAnZ3JheS1tYXR0ZXInXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IGZzIGZyb20gJ2ZzJ1xuaW1wb3J0IG9yZGVyYnkgZnJvbSAnbG9kYXNoLm9yZGVyYnknXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29udGFpbmVyJ1xuaW1wb3J0IEhvbWVOYXYgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9ob21lTmF2J1xuaW1wb3J0IFBvc3RQcmV2aWV3IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcG9zdFByZXZpZXcnXG5pbXBvcnQgeyBwb3N0cyBhcyBwb3N0c0Zyb21DTVMgfSBmcm9tICcuLi8uLi9jb250ZW50J1xuaW1wb3J0IHsgaG9tZSB9IGZyb20gJy4uLy4uL2NvbnRlbnQnO1xuXG5jb25zdCBCbG9nID0gKHsgcG9zdHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxQYW5lPlxuICAgICAgPGhlYWRlcj5cbiAgICAgICAgPEhvbWVOYXYgLz5cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgPG1haW4+XG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAge3Bvc3RzLm1hcCgocG9zdCkgPT4gKFxuICAgICAgICAgICAgPFBhbmUga2V5PXtwb3N0LnRpdGxlfSBtYXJnaW5ZPXttYWpvclNjYWxlKDUpfT5cbiAgICAgICAgICAgICAgPFBvc3RQcmV2aWV3IHBvc3Q9e3Bvc3R9IC8+XG4gICAgICAgICAgICA8L1BhbmU+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9tYWluPlxuICAgIDwvUGFuZT5cbiAgKVxufVxuXG5CbG9nLmRlZmF1bHRQcm9wcyA9IHtcbiAgcG9zdHM6IFtdLFxufVxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICByZXR1cm4ge1xuICAgIHByb3BzOntcbiAgICAgIGNvbnRlbnQ6IGhvbWUucHVibGlzaGVkLFxuICAgIH0sXG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEJsb2dcblxuLyoqXG4gKiBOZWVkIHRvIGdldCB0aGUgcG9zdHMgZnJvbSB0aGVcbiAqIGZzIGFuZCBvdXIgQ01TXG4gKi9cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/blog/index.tsx\n");

/***/ })

})