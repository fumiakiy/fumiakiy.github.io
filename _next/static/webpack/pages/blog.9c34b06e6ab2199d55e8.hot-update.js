webpackHotUpdate_N_E("pages/blog",{

/***/ "./pages/blog/index.tsx":
/*!******************************!*\
  !*** ./pages/blog/index.tsx ***!
  \******************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/fumiaki/blog/pages/blog/index.tsx\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\nvar BlogIndex = function BlogIndex(_ref) {\n  var posts = _ref.posts,\n      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref, [\"posts\"]);\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }\n  }, \"Blog | Fumiaki Yoshimatsu\")), __jsx(\"main\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }\n  }, __jsx(Posts, {\n    posts: posts,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 9\n    }\n  })));\n};\n\n_c = BlogIndex;\n\nfunction Posts(props) {\n  var _this2 = this;\n\n  return __jsx(\"ul\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 11\n    }\n  }, props.posts.map(function (post) {\n    return __jsx(\"li\", {\n      key: post.frontmatter.epoch,\n      __self: _this2,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }\n    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      href: {\n        pathname: \"\".concat(post.frontmatter.slug)\n      },\n      __self: _this2,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 11\n      }\n    }, __jsx(\"a\", {\n      __self: _this2,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 13\n      }\n    }, post.frontmatter.title)));\n  }));\n}\n\n_c2 = Posts;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BlogIndex);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"BlogIndex\");\n$RefreshReg$(_c2, \"Posts\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy9pbmRleC50c3g/MWRmMyJdLCJuYW1lcyI6WyJCbG9nSW5kZXgiLCJwb3N0cyIsInByb3BzIiwiUG9zdHMiLCJtYXAiLCJwb3N0IiwiZnJvbnRtYXR0ZXIiLCJlcG9jaCIsInBhdGhuYW1lIiwic2x1ZyIsInRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTs7QUFnQkEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBeUI7QUFBQSxNQUF0QkMsS0FBc0IsUUFBdEJBLEtBQXNCO0FBQUEsTUFBWkMsS0FBWTs7QUFDekMsU0FDRSxtRUFDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQURGLENBREYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxLQUFEO0FBQU8sU0FBSyxFQUFFRCxLQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUpGLENBREY7QUFVRCxDQVhEOztLQUFNRCxTOztBQWFOLFNBQVNHLEtBQVQsQ0FBZUQsS0FBZixFQUFrQztBQUFBOztBQUNoQyxTQUFRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFSkEsS0FBSyxDQUFDRCxLQUFOLENBQVlHLEdBQVosQ0FBZ0IsVUFBQUMsSUFBSTtBQUFBLFdBQ2xCO0FBQUksU0FBRyxFQUFFQSxJQUFJLENBQUNDLFdBQUwsQ0FBaUJDLEtBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFFO0FBQUVDLGdCQUFRLFlBQUtILElBQUksQ0FBQ0MsV0FBTCxDQUFpQkcsSUFBdEI7QUFBVixPQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUlKLElBQUksQ0FBQ0MsV0FBTCxDQUFpQkksS0FBckIsQ0FERixDQURGLENBRGtCO0FBQUEsR0FBcEIsQ0FGSSxDQUFSO0FBV0Q7O01BWlFQLEs7O0FBbUNNSCx3RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2Jsb2cvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1hdHRlciBmcm9tIFwiZ3JheS1tYXR0ZXJcIlxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcblxuaW50ZXJmYWNlIFBvc3Qge1xuICBmcm9udG1hdHRlcjoge1xuICAgIGRhdGU6IHN0cmluZ1xuICAgIGVwb2NoOiBzdHJpbmdcbiAgICBzbHVnOiBzdHJpbmdcbiAgICB0aXRsZTogc3RyaW5nXG4gIH1cbiAgbWFya2Rvd25Cb2R5OiBzdHJpbmdcbn1cblxuaW50ZXJmYWNlIFBvc3RzUHJvcHMge1xuICBwb3N0czogUG9zdFtdXG59XG5cbmNvbnN0IEJsb2dJbmRleCA9ICh7IHBvc3RzLCAuLi5wcm9wcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+QmxvZyB8IEZ1bWlha2kgWW9zaGltYXRzdTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8bWFpbj5cbiAgICAgICAgPFBvc3RzIHBvc3RzPXtwb3N0c30gLz5cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKVxufVxuXG5mdW5jdGlvbiBQb3N0cyhwcm9wczogUG9zdHNQcm9wcykge1xuICByZXR1cm4gKDx1bD5cbiAgICB7XG4gICAgICBwcm9wcy5wb3N0cy5tYXAocG9zdCA9PlxuICAgICAgICA8bGkga2V5PXtwb3N0LmZyb250bWF0dGVyLmVwb2NofT5cbiAgICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiBgJHtwb3N0LmZyb250bWF0dGVyLnNsdWd9YCB9fT5cbiAgICAgICAgICAgIDxhPntwb3N0LmZyb250bWF0dGVyLnRpdGxlfTwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvbGk+XG4gICAgICApXG4gICAgfVxuICA8L3VsPilcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCBwb3N0cyA9ICgoY29udGV4dCkgPT4ge1xuICAgIGNvbnN0IGtleXMgPSBjb250ZXh0LmtleXMoKVxuICAgIGNvbnN0IHZhbHVlcyA9IGtleXMubWFwKGNvbnRleHQpXG4gICAgY29uc3QgZGF0YSA9IHZhbHVlcy5tYXAodmFsdWUgPT4ge1xuICAgICAgY29uc3QgZG9jdW1lbnQgPSBtYXR0ZXIodmFsdWUuZGVmYXVsdClcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGZyb250bWF0dGVyOiBkb2N1bWVudC5kYXRhLFxuICAgICAgICBtYXJrZG93bkJvZHk6IGRvY3VtZW50LmNvbnRlbnRcbiAgICAgIH0gICAgICBcbiAgICB9KS5zb3J0KChhLCBiKSA9PiBiLmZyb250bWF0dGVyLmVwb2NoIC0gYS5mcm9udG1hdHRlci5lcG9jaClcbiAgICByZXR1cm4gZGF0YVxuICB9KShyZXF1aXJlW1wiY29udGV4dFwiXSgnLi4vLi4vcG9zdHMnLCB0cnVlLCAvXFwubWQkLykpXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcG9zdHNcbiAgICB9LFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJsb2dJbmRleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/blog/index.tsx\n");

/***/ })

})