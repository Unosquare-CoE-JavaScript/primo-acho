webpackHotUpdate_N_E("pages/blog",{

/***/ "./pages/blog/index.tsx":
/*!******************************!*\
  !*** ./pages/blog/index.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var evergreen_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! evergreen-ui */ \"./node_modules/evergreen-ui/esm/index.js\");\n/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/container */ \"./components/container.tsx\");\n/* harmony import */ var _components_homeNav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/homeNav */ \"./components/homeNav.tsx\");\n/* harmony import */ var _components_postPreview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/postPreview */ \"./components/postPreview.tsx\");\n\n\nvar _jsxFileName = \"/Users/primo.acho/dev/primo-acho/next-courses/prod-app/pages/blog/index.tsx\",\n    _this = undefined;\n\n\n\n\n\n\n\nvar Blog = function Blog(_ref) {\n  var posts = _ref.posts;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(evergreen_ui__WEBPACK_IMPORTED_MODULE_2__[\"Pane\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"header\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_homeNav__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_container__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: posts.map(function (post) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(evergreen_ui__WEBPACK_IMPORTED_MODULE_2__[\"Pane\"], {\n            marginY: Object(evergreen_ui__WEBPACK_IMPORTED_MODULE_2__[\"majorScale\"])(5),\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_postPreview__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n              post: post\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 22,\n              columnNumber: 15\n            }, _this)\n          }, post.title, false, {\n            fileName: _jsxFileName,\n            lineNumber: 21,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 14,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = Blog;\nBlog.defaultProps = {\n  posts: []\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blog);\n/**\n * Need to get the posts from the\n * fs and our CMS\n */\n\nvar _c;\n\n$RefreshReg$(_c, \"Blog\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy9pbmRleC50c3g/MWRmMyJdLCJuYW1lcyI6WyJCbG9nIiwicG9zdHMiLCJtYXAiLCJwb3N0IiwibWFqb3JTY2FsZSIsInRpdGxlIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBZTtBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTtBQUMxQixzQkFDRSxxRUFBQyxpREFBRDtBQUFBLDRCQUNFO0FBQUEsNkJBQ0UscUVBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUlFO0FBQUEsNkJBQ0UscUVBQUMsNkRBQUQ7QUFBQSxrQkFDR0EsS0FBSyxDQUFDQyxHQUFOLENBQVUsVUFBQ0MsSUFBRDtBQUFBLDhCQUNULHFFQUFDLGlEQUFEO0FBQXVCLG1CQUFPLEVBQUVDLCtEQUFVLENBQUMsQ0FBRCxDQUExQztBQUFBLG1DQUNFLHFFQUFDLCtEQUFEO0FBQWEsa0JBQUksRUFBRUQ7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLGFBQVdBLElBQUksQ0FBQ0UsS0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEUztBQUFBLFNBQVY7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBZ0JELENBakJEOztLQUFNTCxJO0FBbUJOQSxJQUFJLENBQUNNLFlBQUwsR0FBb0I7QUFDbEJMLE9BQUssRUFBRTtBQURXLENBQXBCO0FBR2VELG1FQUFmO0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9wYWdlcy9ibG9nL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFBhbmUsIG1ham9yU2NhbGUgfSBmcm9tICdldmVyZ3JlZW4tdWknXG5pbXBvcnQgbWF0dGVyIGZyb20gJ2dyYXktbWF0dGVyJ1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCBmcyBmcm9tICdmcydcbmltcG9ydCBvcmRlcmJ5IGZyb20gJ2xvZGFzaC5vcmRlcmJ5J1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbnRhaW5lcidcbmltcG9ydCBIb21lTmF2IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaG9tZU5hdidcbmltcG9ydCBQb3N0UHJldmlldyBmcm9tICcuLi8uLi9jb21wb25lbnRzL3Bvc3RQcmV2aWV3J1xuaW1wb3J0IHsgcG9zdHMgYXMgcG9zdHNGcm9tQ01TIH0gZnJvbSAnLi4vLi4vY29udGVudCdcblxuY29uc3QgQmxvZyA9ICh7IHBvc3RzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8UGFuZT5cbiAgICAgIDxoZWFkZXI+XG4gICAgICAgIDxIb21lTmF2IC8+XG4gICAgICA8L2hlYWRlcj5cbiAgICAgIDxtYWluPlxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgIHtwb3N0cy5tYXAoKHBvc3QpID0+IChcbiAgICAgICAgICAgIDxQYW5lIGtleT17cG9zdC50aXRsZX0gbWFyZ2luWT17bWFqb3JTY2FsZSg1KX0+XG4gICAgICAgICAgICAgIDxQb3N0UHJldmlldyBwb3N0PXtwb3N0fSAvPlxuICAgICAgICAgICAgPC9QYW5lPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvbWFpbj5cbiAgICA8L1BhbmU+XG4gIClcbn1cblxuQmxvZy5kZWZhdWx0UHJvcHMgPSB7XG4gIHBvc3RzOiBbXSxcbn1cbmV4cG9ydCBkZWZhdWx0IEJsb2dcblxuLyoqXG4gKiBOZWVkIHRvIGdldCB0aGUgcG9zdHMgZnJvbSB0aGVcbiAqIGZzIGFuZCBvdXIgQ01TXG4gKi9cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/blog/index.tsx\n");

/***/ })

})