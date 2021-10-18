webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var evergreen_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! evergreen-ui */ \"./node_modules/evergreen-ui/esm/index.js\");\n/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/container */ \"./components/container.tsx\");\n/* harmony import */ var _components_hero__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/hero */ \"./components/hero.tsx\");\n/* harmony import */ var _components_homeNav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/homeNav */ \"./components/homeNav.tsx\");\n/* harmony import */ var _components_featureSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/featureSection */ \"./components/featureSection.tsx\");\n\n\nvar _jsxFileName = \"/Users/primo.acho/dev/primo-acho/next-courses/prod-app/pages/index.tsx\",\n    _this = undefined;\n\n\n\n\n\n\n\n\nvar Home = function Home(_ref) {\n  var content = _ref.content;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(evergreen_ui__WEBPACK_IMPORTED_MODULE_2__[\"Pane\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"header\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_homeNav__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_container__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_hero__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n          content: content.hero\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 15,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n      children: content.features.map(function (feature, i) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_featureSection__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          title: feature.title,\n          body: feature.body,\n          image: \"/docs.png\",\n          invert: i % 2 === 0\n        }, feature.title, false, {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"footer\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(evergreen_ui__WEBPACK_IMPORTED_MODULE_2__[\"Pane\"], {\n        background: \"overlay\",\n        paddingY: Object(evergreen_ui__WEBPACK_IMPORTED_MODULE_2__[\"majorScale\"])(9),\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_container__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          children: \"hello\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 5\n  }, _this);\n};\n/**\n * Should really get this content from our CMS\n */\n\n\n_c = Home;\nHome.defaultProps = {\n  content: {\n    features: [{\n      title: 'default feature',\n      body: 'default body'\n    }],\n    hero: {\n      title: 'default title',\n      body: 'default body'\n    }\n  }\n};\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiSG9tZSIsImNvbnRlbnQiLCJoZXJvIiwiZmVhdHVyZXMiLCJtYXAiLCJmZWF0dXJlIiwiaSIsInRpdGxlIiwiYm9keSIsIm1ham9yU2NhbGUiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsSUFBcUQsR0FBRyxTQUF4REEsSUFBd0QsT0FBaUI7QUFBQSxNQUFkQyxPQUFjLFFBQWRBLE9BQWM7QUFDN0Usc0JBQ0UscUVBQUMsaURBQUQ7QUFBQSw0QkFDRTtBQUFBLDhCQUNFLHFFQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFLHFFQUFDLDZEQUFEO0FBQUEsK0JBQ0UscUVBQUMsd0RBQUQ7QUFBTSxpQkFBTyxFQUFFQSxPQUFPLENBQUNDO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFPRTtBQUFBLGdCQUNHRCxPQUFPLENBQUNFLFFBQVIsQ0FBaUJDLEdBQWpCLENBQXFCLFVBQUNDLE9BQUQsRUFBVUMsQ0FBVjtBQUFBLDRCQUNwQixxRUFBQyxrRUFBRDtBQUVFLGVBQUssRUFBRUQsT0FBTyxDQUFDRSxLQUZqQjtBQUdFLGNBQUksRUFBRUYsT0FBTyxDQUFDRyxJQUhoQjtBQUlFLGVBQUssRUFBQyxXQUpSO0FBS0UsZ0JBQU0sRUFBRUYsQ0FBQyxHQUFHLENBQUosS0FBVTtBQUxwQixXQUNPRCxPQUFPLENBQUNFLEtBRGY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEb0I7QUFBQSxPQUFyQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQRixlQWtCRTtBQUFBLDZCQUNFLHFFQUFDLGlEQUFEO0FBQU0sa0JBQVUsRUFBQyxTQUFqQjtBQUEyQixnQkFBUSxFQUFFRSwrREFBVSxDQUFDLENBQUQsQ0FBL0M7QUFBQSwrQkFDRSxxRUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBMEJELENBM0JEO0FBNkJBO0FBQ0E7QUFDQTs7O0tBL0JNVCxJO0FBaUNOQSxJQUFJLENBQUNVLFlBQUwsR0FBb0I7QUFDbEJULFNBQU8sRUFBRTtBQUNQRSxZQUFRLEVBQUUsQ0FBQztBQUFFSSxXQUFLLEVBQUUsaUJBQVQ7QUFBNEJDLFVBQUksRUFBRTtBQUFsQyxLQUFELENBREg7QUFFUE4sUUFBSSxFQUFFO0FBQUVLLFdBQUssRUFBRSxlQUFUO0FBQTBCQyxVQUFJLEVBQUU7QUFBaEM7QUFGQztBQURTLENBQXBCOztBQWVlUixtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgUGFuZSwgbWFqb3JTY2FsZSB9IGZyb20gJ2V2ZXJncmVlbi11aSdcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy9jb250YWluZXInXG5pbXBvcnQgSGVybyBmcm9tICcuLi9jb21wb25lbnRzL2hlcm8nXG5pbXBvcnQgSG9tZU5hdiBmcm9tICcuLi9jb21wb25lbnRzL2hvbWVOYXYnXG5pbXBvcnQgRmVhdHVyZVNlY3Rpb24gZnJvbSAnLi4vY29tcG9uZW50cy9mZWF0dXJlU2VjdGlvbidcbmltcG9ydCB7IGhvbWUgfSBmcm9tICcuLi9jb250ZW50JztcblxuY29uc3QgSG9tZTogRkM8eyBjb250ZW50OiB7IGhlcm86IGFueTsgZmVhdHVyZXM6IGFueVtdIH0gfT4gPSAoeyBjb250ZW50IH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8UGFuZT5cbiAgICAgIDxoZWFkZXI+XG4gICAgICAgIDxIb21lTmF2IC8+XG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgPEhlcm8gY29udGVudD17Y29udGVudC5oZXJvfSAvPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgPG1haW4+XG4gICAgICAgIHtjb250ZW50LmZlYXR1cmVzLm1hcCgoZmVhdHVyZSwgaSkgPT4gKFxuICAgICAgICAgIDxGZWF0dXJlU2VjdGlvblxuICAgICAgICAgICAga2V5PXtmZWF0dXJlLnRpdGxlfVxuICAgICAgICAgICAgdGl0bGU9e2ZlYXR1cmUudGl0bGV9XG4gICAgICAgICAgICBib2R5PXtmZWF0dXJlLmJvZHl9XG4gICAgICAgICAgICBpbWFnZT1cIi9kb2NzLnBuZ1wiXG4gICAgICAgICAgICBpbnZlcnQ9e2kgJSAyID09PSAwfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgPC9tYWluPlxuICAgICAgPGZvb3Rlcj5cbiAgICAgICAgPFBhbmUgYmFja2dyb3VuZD1cIm92ZXJsYXlcIiBwYWRkaW5nWT17bWFqb3JTY2FsZSg5KX0+XG4gICAgICAgICAgPENvbnRhaW5lcj5oZWxsbzwvQ29udGFpbmVyPlxuICAgICAgICA8L1BhbmU+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8L1BhbmU+XG4gIClcbn1cblxuLyoqXG4gKiBTaG91bGQgcmVhbGx5IGdldCB0aGlzIGNvbnRlbnQgZnJvbSBvdXIgQ01TXG4gKi9cblxuSG9tZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGNvbnRlbnQ6IHtcbiAgICBmZWF0dXJlczogW3sgdGl0bGU6ICdkZWZhdWx0IGZlYXR1cmUnLCBib2R5OiAnZGVmYXVsdCBib2R5JyB9XSxcbiAgICBoZXJvOiB7IHRpdGxlOiAnZGVmYXVsdCB0aXRsZScsIGJvZHk6ICdkZWZhdWx0IGJvZHknIH0sXG4gIH0sXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczp7XG4gICAgICBjb250ZW50OiBob21lLnB1Ymxpc2hlZCxcbiAgICB9LFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})