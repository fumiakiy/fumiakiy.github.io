webpackHotUpdate_N_E("pages/blog/[postname]",{

/***/ "./pages/blog/[postname].tsx":
/*!***********************************!*\
  !*** ./pages/blog/[postname].tsx ***!
  \***********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BlogPost; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/lib/react-markdown.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_BlogPost_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/BlogPost.module.css */ \"./styles/BlogPost.module.css\");\n/* harmony import */ var _styles_BlogPost_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_BlogPost_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util */ \"./util.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/Users/fumiaki/blog/pages/blog/[postname].tsx\";\n\n\n\n\n\nvar __N_SSG = true;\nfunction BlogPost(_ref) {\n  var _this = this;\n\n  var frontmatter = _ref.frontmatter,\n      markdownBody = _ref.markdownBody,\n      navs = _ref.navs;\n  if (!frontmatter) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {}, void 0, false);\n  var renderers = {\n    image: function image(props) {\n      return /\\/videos\\//.test(props.src) ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"image-container\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"video\", {\n          src: props.src,\n          title: props.alt,\n          controls: true,\n          muted: true\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"image-caption\",\n          children: props.alt\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 11\n      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"image-container\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: props.src,\n          alt: props.alt\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"image-caption\",\n          children: props.alt\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 11\n      }, _this);\n    },\n    paragraph: \"div\"\n  };\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n      href: \"/blog\",\n      className: _styles_BlogPost_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.backlink,\n      children: \"https://luckypines.com/blog\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: frontmatter.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"twitter:card\",\n        content: \"summary\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"twitter:site\",\n        content: \"@fumiakiy\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"og:title\",\n        content: frontmatter.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"twitter:title\",\n        content: frontmatter.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, this), !!frontmatter.excerpt ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"description\",\n        content: frontmatter.excerpt\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 15\n      }, this) : null, !!frontmatter.excerpt ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"og:description\",\n        content: frontmatter.excerpt\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 15\n      }, this) : null, !!frontmatter.excerpt ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"twitter:description\",\n        content: frontmatter.excerpt\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 15\n      }, this) : null, !!frontmatter.ogImage ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:image\",\n        content: \"https://luckypines.com\".concat(frontmatter.ogImage)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 15\n      }, this) : null, !!frontmatter.ogImage ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        property: \"twitter:image\",\n        content: \"https://luckypines.com\".concat(frontmatter.ogImage)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 15\n      }, this) : null]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"blog\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"article\", {\n        className: _styles_BlogPost_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.article,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          children: frontmatter.title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _styles_BlogPost_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.date,\n          children: Object(_util__WEBPACK_IMPORTED_MODULE_4__[\"dateString\"])(frontmatter.epoch)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _styles_BlogPost_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.body,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_markdown__WEBPACK_IMPORTED_MODULE_2___default.a, {\n            source: markdownBody,\n            renderers: renderers\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 71,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"footer\", {\n      className: _styles_BlogPost_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.footer,\n      children: [navs.prevPage == null ? null : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n        href: {\n          pathname: \"\".concat(navs.prevPage.slug)\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          children: [\"\\xAB \", navs.prevPage.title]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 66\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 15\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n        href: {\n          pathname: \"\"\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          className: _styles_BlogPost_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.backlink,\n          children: \"Top\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 81,\n          columnNumber: 39\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 9\n      }, this), navs.nextPage == null ? null : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n        href: {\n          pathname: \"\".concat(navs.nextPage.slug)\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          children: [navs.nextPage.title, \" \\xBB \"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 85,\n          columnNumber: 66\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 15\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n_c = BlogPost;\n\nvar _c;\n\n$RefreshReg$(_c, \"BlogPost\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy9bcG9zdG5hbWVdLnRzeD9hOTk0Il0sIm5hbWVzIjpbIkJsb2dQb3N0IiwiZnJvbnRtYXR0ZXIiLCJtYXJrZG93bkJvZHkiLCJuYXZzIiwicmVuZGVyZXJzIiwiaW1hZ2UiLCJwcm9wcyIsInRlc3QiLCJzcmMiLCJhbHQiLCJwYXJhZ3JhcGgiLCJzdHlsZXMiLCJiYWNrbGluayIsInRpdGxlIiwiZXhjZXJwdCIsIm9nSW1hZ2UiLCJhcnRpY2xlIiwiZGF0ZSIsImRhdGVTdHJpbmciLCJlcG9jaCIsImJvZHkiLCJmb290ZXIiLCJwcmV2UGFnZSIsInBhdGhuYW1lIiwic2x1ZyIsIm5leHRQYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBRWUsU0FBU0EsUUFBVCxPQUF1RDtBQUFBOztBQUFBLE1BQW5DQyxXQUFtQyxRQUFuQ0EsV0FBbUM7QUFBQSxNQUF0QkMsWUFBc0IsUUFBdEJBLFlBQXNCO0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFRO0FBQ3BFLE1BQUksQ0FBQ0YsV0FBTCxFQUFrQixvQkFBTyx1SkFBUDtBQUVsQixNQUFNRyxTQUFvRCxHQUFHO0FBQzNEQyxTQUFLLEVBQUUsZUFBQUMsS0FBSztBQUFBLGFBQ1YsYUFBYUMsSUFBYixDQUFrQkQsS0FBSyxDQUFDRSxHQUF4QixpQkFFSTtBQUFLLGlCQUFTLEVBQUMsaUJBQWY7QUFBQSxnQ0FDRTtBQUFPLGFBQUcsRUFBRUYsS0FBSyxDQUFDRSxHQUFsQjtBQUF1QixlQUFLLEVBQUVGLEtBQUssQ0FBQ0csR0FBcEM7QUFBeUMsa0JBQVEsTUFBakQ7QUFBa0QsZUFBSztBQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBSyxtQkFBUyxFQUFDLGVBQWY7QUFBQSxvQkFBZ0NILEtBQUssQ0FBQ0c7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7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QUFBLFlBM0NGO0FBQUEsa0JBREY7QUEyREQ7S0FoRnVCYixRIiwiZmlsZSI6Ii4vcGFnZXMvYmxvZy9bcG9zdG5hbWVdLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdldFN0YXRpY1Byb3BzLCBHZXRTdGF0aWNQYXRocyB9IGZyb20gXCJuZXh0XCJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxuaW1wb3J0IG1hdHRlciBmcm9tIFwiZ3JheS1tYXR0ZXJcIlxuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSBcInJlYWN0LW1hcmtkb3duXCJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9CbG9nUG9zdC5tb2R1bGUuY3NzXCJcbmltcG9ydCB7IGRhdGVTdHJpbmcgfSBmcm9tIFwiLi4vLi4vdXRpbFwiXG5pbXBvcnQgeyBFbGVtZW50VHlwZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmxvZ1Bvc3QoeyBmcm9udG1hdHRlciwgbWFya2Rvd25Cb2R5LCBuYXZzIH0pIHtcbiAgaWYgKCFmcm9udG1hdHRlcikgcmV0dXJuIDw+PC8+XG5cbiAgY29uc3QgcmVuZGVyZXJzOiB7IFtub2RlVHlwZTogc3RyaW5nXTogRWxlbWVudFR5cGU8YW55PjsgfSA9IHtcbiAgICBpbWFnZTogcHJvcHMgPT5cbiAgICAgIC9cXC92aWRlb3NcXC8vLnRlc3QocHJvcHMuc3JjKVxuICAgICAgICA/IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPHZpZGVvIHNyYz17cHJvcHMuc3JjfSB0aXRsZT17cHJvcHMuYWx0fSBjb250cm9scyBtdXRlZCAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZS1jYXB0aW9uXCI+e3Byb3BzLmFsdH08L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgICAgICA6IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGltZyBzcmM9e3Byb3BzLnNyY30gYWx0PXtwcm9wcy5hbHR9IC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlLWNhcHRpb25cIj57cHJvcHMuYWx0fTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApLFxuICAgIHBhcmFncmFwaDogXCJkaXZcIlxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGEgaHJlZj1cIi9ibG9nXCIgY2xhc3NOYW1lPXtzdHlsZXMuYmFja2xpbmt9Pmh0dHBzOi8vbHVja3lwaW5lcy5jb20vYmxvZzwvYT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e2Zyb250bWF0dGVyLnRpdGxlfTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNhcmRcIiBjb250ZW50PVwic3VtbWFyeVwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnNpdGVcIiBjb250ZW50PVwiQGZ1bWlha2l5XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cIm9nOnRpdGxlXCIgY29udGVudD17ZnJvbnRtYXR0ZXIudGl0bGV9IC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnRpdGxlXCIgY29udGVudD17ZnJvbnRtYXR0ZXIudGl0bGV9IC8+XG4gICAgICAgIHtcbiAgICAgICAgICAhIWZyb250bWF0dGVyLmV4Y2VycHRcbiAgICAgICAgICAgID8gPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17ZnJvbnRtYXR0ZXIuZXhjZXJwdH0gLz5cbiAgICAgICAgICAgIDogbnVsbFxuICAgICAgICB9XG4gICAgICAgIHtcbiAgICAgICAgICAhIWZyb250bWF0dGVyLmV4Y2VycHRcbiAgICAgICAgICAgID8gPG1ldGEgbmFtZT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD17ZnJvbnRtYXR0ZXIuZXhjZXJwdH0gLz5cbiAgICAgICAgICAgIDogbnVsbFxuICAgICAgICB9XG4gICAgICAgIHtcbiAgICAgICAgICAhIWZyb250bWF0dGVyLmV4Y2VycHRcbiAgICAgICAgICAgID8gPG1ldGEgbmFtZT1cInR3aXR0ZXI6ZGVzY3JpcHRpb25cIiBjb250ZW50PXtmcm9udG1hdHRlci5leGNlcnB0fSAvPlxuICAgICAgICAgICAgOiBudWxsXG4gICAgICAgIH1cbiAgICAgICAge1xuICAgICAgICAgICEhZnJvbnRtYXR0ZXIub2dJbWFnZVxuICAgICAgICAgICAgPyA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD17YGh0dHBzOi8vbHVja3lwaW5lcy5jb20ke2Zyb250bWF0dGVyLm9nSW1hZ2V9YH0gLz5cbiAgICAgICAgICAgIDogbnVsbFxuICAgICAgICB9XG4gICAgICAgIHtcbiAgICAgICAgICAhIWZyb250bWF0dGVyLm9nSW1hZ2VcbiAgICAgICAgICAgID8gPG1ldGEgcHJvcGVydHk9XCJ0d2l0dGVyOmltYWdlXCIgY29udGVudD17YGh0dHBzOi8vbHVja3lwaW5lcy5jb20ke2Zyb250bWF0dGVyLm9nSW1hZ2V9YH0gLz5cbiAgICAgICAgICAgIDogbnVsbFxuICAgICAgICB9XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2dcIj5cbiAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPXtzdHlsZXMuYXJ0aWNsZX0+XG4gICAgICAgICAgPGgxPntmcm9udG1hdHRlci50aXRsZX08L2gxPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGF0ZX0+e2RhdGVTdHJpbmcoZnJvbnRtYXR0ZXIuZXBvY2gpfTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm9keX0+XG4gICAgICAgICAgICA8UmVhY3RNYXJrZG93biBzb3VyY2U9e21hcmtkb3duQm9keX0gcmVuZGVyZXJzPXtyZW5kZXJlcnN9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxuICAgICAgICB7XG4gICAgICAgICAgbmF2cy5wcmV2UGFnZSA9PSBudWxsXG4gICAgICAgICAgICA/IG51bGxcbiAgICAgICAgICAgIDogPExpbmsgaHJlZj17eyBwYXRobmFtZTogYCR7bmF2cy5wcmV2UGFnZS5zbHVnfWAgfX0+PGE+JmxhcXVvOyB7bmF2cy5wcmV2UGFnZS50aXRsZX08L2E+PC9MaW5rPlxuICAgICAgICB9XG4gICAgICAgIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6IFwiXCIgfX0+PGEgY2xhc3NOYW1lPXtzdHlsZXMuYmFja2xpbmt9PlRvcDwvYT48L0xpbms+XG4gICAgICAgIHtcbiAgICAgICAgICBuYXZzLm5leHRQYWdlID09IG51bGxcbiAgICAgICAgICAgID8gbnVsbFxuICAgICAgICAgICAgOiA8TGluayBocmVmPXt7IHBhdGhuYW1lOiBgJHtuYXZzLm5leHRQYWdlLnNsdWd9YCB9fT48YT57bmF2cy5uZXh0UGFnZS50aXRsZX0gJnJhcXVvOyA8L2E+PC9MaW5rPlxuICAgICAgICB9XG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8Lz5cbiAgKVxufVxuXG5mdW5jdGlvbiBmaW5kUG9zdHNBcm91bmQocG9zdG5hbWU6IHN0cmluZykge1xuICBjb25zdCBwb3N0cyA9ICgoY29udGV4dCkgPT4ge1xuICAgIGNvbnN0IGtleXMgPSBjb250ZXh0LmtleXMoKVxuICAgIGNvbnN0IHZhbHVlcyA9IGtleXMubWFwKGNvbnRleHQpXG4gICAgcmV0dXJuIHZhbHVlcy5tYXAoKHZhbHVlOmFueSkgPT4ge1xuICAgICAgY29uc3QgZG9jdW1lbnQgPSBtYXR0ZXIodmFsdWUuZGVmYXVsdClcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGVwb2NoOiBkb2N1bWVudC5kYXRhLmVwb2NoLFxuICAgICAgICB0aXRsZTogZG9jdW1lbnQuZGF0YS50aXRsZSxcbiAgICAgICAgc2x1ZzogZG9jdW1lbnQuZGF0YS5zbHVnXG4gICAgICB9XG4gICAgfSkuc29ydCgoYSwgYikgPT4gYi5lcG9jaC5sb2NhbGVDb21wYXJlKGEuZXBvY2gpKVxuICB9KShyZXF1aXJlLmNvbnRleHQoXCIuLi8uLi9wb3N0c1wiLCB0cnVlLCAvXFwubWQkLykpXG5cbiAgaWYgKHBvc3RzLmxlbmd0aCA8PSAwKSByZXR1cm4ge31cblxuICBjb25zdCB0aGlzUGFnZUluZGV4ID0gcG9zdHMuZmluZEluZGV4KHAgPT4gcC5zbHVnID09PSBgL2Jsb2cvJHtwb3N0bmFtZX1gKVxuICBpZiAodGhpc1BhZ2VJbmRleCA9PT0gMCkge1xuICAgIHJldHVybiB7XG4gICAgICBuZXh0UGFnZTogcG9zdHNbdGhpc1BhZ2VJbmRleCAtIDFdID8/IG51bGwsXG4gICAgICBwcmV2UGFnZTogcG9zdHNbdGhpc1BhZ2VJbmRleCArIDFdID8/IG51bGxcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XG4gIGNvbnN0IHsgcG9zdG5hbWUgfSA9IGNvbnRleHQucGFyYW1zXG4gIGNvbnN0IG5hdnMgPSBmaW5kUG9zdHNBcm91bmQocG9zdG5hbWUgYXMgc3RyaW5nKVxuXG4gIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCBpbXBvcnQoYC4uLy4uL3Bvc3RzLyR7cG9zdG5hbWV9Lm1kYClcbiAgY29uc3QgZGF0YSA9IG1hdHRlcihjb250ZW50LmRlZmF1bHQpXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgZnJvbnRtYXR0ZXI6IGRhdGEuZGF0YSxcbiAgICAgIG1hcmtkb3duQm9keTogZGF0YS5jb250ZW50LFxuICAgICAgbmF2czogbmF2c1xuICAgIH0sXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzOiBHZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgYmxvZ1NsdWdzID0gKChjb250ZXh0KSA9PiB7XG4gICAgY29uc3Qga2V5cyA9IGNvbnRleHQua2V5cygpXG4gICAgY29uc3QgZGF0YSA9IGtleXMubWFwKChrZXksIGluZGV4KSA9PiB7XG4gICAgICBsZXQgc2x1ZyA9IGtleS5yZXBsYWNlKC9eLipbXFxcXFxcL10vLCBcIlwiKS5zbGljZSgwLCAtMylcblxuICAgICAgcmV0dXJuIHNsdWdcbiAgICB9KVxuICAgIHJldHVybiBkYXRhXG4gIH0pKHJlcXVpcmUuY29udGV4dChcIi4uLy4uL3Bvc3RzXCIsIHRydWUsIC9cXC5tZCQvKSlcblxuICBjb25zdCBwYXRocyA9IGJsb2dTbHVncy5tYXAoKHNsdWcpID0+IGAvYmxvZy8ke3NsdWd9YClcblxuICByZXR1cm4ge1xuICAgIHBhdGhzLFxuICAgIGZhbGxiYWNrOiBmYWxzZSxcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/blog/[postname].tsx\n");

/***/ })

})