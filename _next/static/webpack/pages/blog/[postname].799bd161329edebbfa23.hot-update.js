webpackHotUpdate_N_E("pages/blog/[postname]",{

/***/ "./pages/blog/[postname].tsx":
/*!***********************************!*\
  !*** ./pages/blog/[postname].tsx ***!
  \***********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BlogPost; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/lib/react-markdown.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_BlogPost_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/BlogPost.module.css */ \"./styles/BlogPost.module.css\");\n/* harmony import */ var _styles_BlogPost_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_BlogPost_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util */ \"./util.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/Users/fumiaki/blog/pages/blog/[postname].tsx\";\n\n\n\n\n\nvar __N_SSG = true;\nfunction BlogPost(_ref) {\n  var _this = this;\n\n  var frontmatter = _ref.frontmatter,\n      markdownBody = _ref.markdownBody,\n      navs = _ref.navs;\n  if (!frontmatter) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {}, void 0, false);\n  var renderers = {\n    image: function image(props) {\n      return /\\/videos\\//.test(props.src) ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"image-container\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"video\", {\n          src: props.src,\n          title: props.alt,\n          controls: true,\n          muted: true\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"image-caption\",\n          children: props.alt\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 11\n      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"image-container\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: props.src,\n          alt: props.alt\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"image-caption\",\n          children: props.alt\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 11\n      }, _this);\n    },\n    paragraph: \"div\"\n  };\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n      href: \"/blog\",\n      className: _styles_BlogPost_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.backlink,\n      children: \"https://luckypines.com/blog\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: frontmatter.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"twitter:card\",\n        content: \"summary\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"twitter:site\",\n        content: \"@fumiakiy\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"og:title\",\n        content: frontmatter.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"twitter:title\",\n        content: frontmatter.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, this), !!frontmatter.excerpt ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"description\",\n        content: frontmatter.excerpt\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 15\n      }, this) : null, !!frontmatter.excerpt ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"og:description\",\n        content: frontmatter.excerpt\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 15\n      }, this) : null, !!frontmatter.excerpt ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"twitter:description\",\n        content: frontmatter.excerpt\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 15\n      }, this) : null, !!frontmatter.ogImage ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:image\",\n        content: \"https://luckypines.com\".concat(frontmatter.ogImage)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 15\n      }, this) : null, !!frontmatter.ogImage ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        property: \"twitter:image\",\n        content: \"https://luckypines.com\".concat(frontmatter.ogImage)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 15\n      }, this) : null]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"blog\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"article\", {\n        className: _styles_BlogPost_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.article,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          children: frontmatter.title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _styles_BlogPost_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.date,\n          children: Object(_util__WEBPACK_IMPORTED_MODULE_4__[\"dateString\"])(frontmatter.epoch)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _styles_BlogPost_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.body,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_markdown__WEBPACK_IMPORTED_MODULE_2___default.a, {\n            source: markdownBody,\n            renderers: renderers\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 71,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"footer\", {\n      className: _styles_BlogPost_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.footer,\n      children: [navs.prevPage == null ? null : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n        href: {\n          pathname: \"\".concat(navs.prevPage.slug)\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          className: _styles_BlogPost_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.prev,\n          children: [\"\\xAB \", navs.prevPage.title]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 66\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 15\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n        href: {\n          pathname: \"\"\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          className: _styles_BlogPost_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.top,\n          children: \"Top\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 81,\n          columnNumber: 39\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 9\n      }, this), navs.nextPage == null ? null : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n        href: {\n          pathname: \"\".concat(navs.nextPage.slug)\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          className: _styles_BlogPost_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.next,\n          children: [navs.nextPage.title, \" \\xBB \"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 85,\n          columnNumber: 66\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 15\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n_c = BlogPost;\n\nvar _c;\n\n$RefreshReg$(_c, \"BlogPost\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy9bcG9zdG5hbWVdLnRzeD9hOTk0Il0sIm5hbWVzIjpbIkJsb2dQb3N0IiwiZnJvbnRtYXR0ZXIiLCJtYXJrZG93bkJvZHkiLCJuYXZzIiwicmVuZGVyZXJzIiwiaW1hZ2UiLCJwcm9wcyIsInRlc3QiLCJzcmMiLCJhbHQiLCJwYXJhZ3JhcGgiLCJzdHlsZXMiLCJiYWNrbGluayIsInRpdGxlIiwiZXhjZXJwdCIsIm9nSW1hZ2UiLCJhcnRpY2xlIiwiZGF0ZSIsImRhdGVTdHJpbmciLCJlcG9jaCIsImJvZHkiLCJmb290ZXIiLCJwcmV2UGFnZSIsInBhdGhuYW1lIiwic2x1ZyIsInByZXYiLCJ0b3AiLCJuZXh0UGFnZSIsIm5leHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7QUFFZSxTQUFTQSxRQUFULE9BQXVEO0FBQUE7O0FBQUEsTUFBbkNDLFdBQW1DLFFBQW5DQSxXQUFtQztBQUFBLE1BQXRCQyxZQUFzQixRQUF0QkEsWUFBc0I7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7QUFDcEUsTUFBSSxDQUFDRixXQUFMLEVBQWtCLG9CQUFPLHVKQUFQO0FBRWxCLE1BQU1HLFNBQW9ELEdBQUc7QUFDM0RDLFNBQUssRUFBRSxlQUFBQyxLQUFLO0FBQUEsYUFDVixhQUFhQyxJQUFiLENBQWtCRCxLQUFLLENBQUNFLEdBQXhCLGlCQUVJO0FBQUssaUJBQVMsRUFBQyxpQkFBZjtBQUFBLGdDQUNFO0FBQU8sYUFBRyxFQUFFRixLQUFLLENBQUNFLEdBQWxCO0FBQXVCLGVBQUssRUFBRUYsS0FBSyxDQUFDRyxHQUFwQztBQUF5QyxrQkFBUSxNQUFqRDtBQUFrRCxlQUFLO0FBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFLLG1CQUFTLEVBQUMsZUFBZjtBQUFBLG9CQUFnQ0gsS0FBSyxDQUFDRztBQUF0QztBQUFBO0FBQUE7QUFBQTtB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UUFBTCxDQUFjZCxLQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTNDRjtBQUFBLGtCQURGO0FBMkREO0tBaEZ1QmIsUSIsImZpbGUiOiIuL3BhZ2VzL2Jsb2cvW3Bvc3RuYW1lXS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHZXRTdGF0aWNQcm9wcywgR2V0U3RhdGljUGF0aHMgfSBmcm9tIFwibmV4dFwiXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCJcbmltcG9ydCBtYXR0ZXIgZnJvbSBcImdyYXktbWF0dGVyXCJcbmltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gXCJyZWFjdC1tYXJrZG93blwiXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvQmxvZ1Bvc3QubW9kdWxlLmNzc1wiXG5pbXBvcnQgeyBkYXRlU3RyaW5nIH0gZnJvbSBcIi4uLy4uL3V0aWxcIlxuaW1wb3J0IHsgRWxlbWVudFR5cGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJsb2dQb3N0KHsgZnJvbnRtYXR0ZXIsIG1hcmtkb3duQm9keSwgbmF2cyB9KSB7XG4gIGlmICghZnJvbnRtYXR0ZXIpIHJldHVybiA8PjwvPlxuXG4gIGNvbnN0IHJlbmRlcmVyczogeyBbbm9kZVR5cGU6IHN0cmluZ106IEVsZW1lbnRUeXBlPGFueT47IH0gPSB7XG4gICAgaW1hZ2U6IHByb3BzID0+XG4gICAgICAvXFwvdmlkZW9zXFwvLy50ZXN0KHByb3BzLnNyYylcbiAgICAgICAgPyAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDx2aWRlbyBzcmM9e3Byb3BzLnNyY30gdGl0bGU9e3Byb3BzLmFsdH0gY29udHJvbHMgbXV0ZWQgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2UtY2FwdGlvblwiPntwcm9wcy5hbHR9PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgICAgOiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtwcm9wcy5zcmN9IGFsdD17cHJvcHMuYWx0fSAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZS1jYXB0aW9uXCI+e3Byb3BzLmFsdH08L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSxcbiAgICBwYXJhZ3JhcGg6IFwiZGl2XCJcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxhIGhyZWY9XCIvYmxvZ1wiIGNsYXNzTmFtZT17c3R5bGVzLmJhY2tsaW5rfT5odHRwczovL2x1Y2t5cGluZXMuY29tL2Jsb2c8L2E+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPntmcm9udG1hdHRlci50aXRsZX08L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cInN1bW1hcnlcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpzaXRlXCIgY29udGVudD1cIkBmdW1pYWtpeVwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e2Zyb250bWF0dGVyLnRpdGxlfSAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjp0aXRsZVwiIGNvbnRlbnQ9e2Zyb250bWF0dGVyLnRpdGxlfSAvPlxuICAgICAgICB7XG4gICAgICAgICAgISFmcm9udG1hdHRlci5leGNlcnB0XG4gICAgICAgICAgICA/IDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Zyb250bWF0dGVyLmV4Y2VycHR9IC8+XG4gICAgICAgICAgICA6IG51bGxcbiAgICAgICAgfVxuICAgICAgICB7XG4gICAgICAgICAgISFmcm9udG1hdHRlci5leGNlcnB0XG4gICAgICAgICAgICA/IDxtZXRhIG5hbWU9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Zyb250bWF0dGVyLmV4Y2VycHR9IC8+XG4gICAgICAgICAgICA6IG51bGxcbiAgICAgICAgfVxuICAgICAgICB7XG4gICAgICAgICAgISFmcm9udG1hdHRlci5leGNlcnB0XG4gICAgICAgICAgICA/IDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCIgY29udGVudD17ZnJvbnRtYXR0ZXIuZXhjZXJwdH0gLz5cbiAgICAgICAgICAgIDogbnVsbFxuICAgICAgICB9XG4gICAgICAgIHtcbiAgICAgICAgICAhIWZyb250bWF0dGVyLm9nSW1hZ2VcbiAgICAgICAgICAgID8gPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9e2BodHRwczovL2x1Y2t5cGluZXMuY29tJHtmcm9udG1hdHRlci5vZ0ltYWdlfWB9IC8+XG4gICAgICAgICAgICA6IG51bGxcbiAgICAgICAgfVxuICAgICAgICB7XG4gICAgICAgICAgISFmcm9udG1hdHRlci5vZ0ltYWdlXG4gICAgICAgICAgICA/IDxtZXRhIHByb3BlcnR5PVwidHdpdHRlcjppbWFnZVwiIGNvbnRlbnQ9e2BodHRwczovL2x1Y2t5cGluZXMuY29tJHtmcm9udG1hdHRlci5vZ0ltYWdlfWB9IC8+XG4gICAgICAgICAgICA6IG51bGxcbiAgICAgICAgfVxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nXCI+XG4gICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT17c3R5bGVzLmFydGljbGV9PlxuICAgICAgICAgIDxoMT57ZnJvbnRtYXR0ZXIudGl0bGV9PC9oMT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRhdGV9PntkYXRlU3RyaW5nKGZyb250bWF0dGVyLmVwb2NoKX08L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvZHl9PlxuICAgICAgICAgICAgPFJlYWN0TWFya2Rvd24gc291cmNlPXttYXJrZG93bkJvZHl9IHJlbmRlcmVycz17cmVuZGVyZXJzfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2FydGljbGU+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cbiAgICAgICAge1xuICAgICAgICAgIG5hdnMucHJldlBhZ2UgPT0gbnVsbFxuICAgICAgICAgICAgPyBudWxsXG4gICAgICAgICAgICA6IDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6IGAke25hdnMucHJldlBhZ2Uuc2x1Z31gIH19PjxhIGNsYXNzTmFtZT17c3R5bGVzLnByZXZ9PiZsYXF1bzsge25hdnMucHJldlBhZ2UudGl0bGV9PC9hPjwvTGluaz5cbiAgICAgICAgfVxuICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiBcIlwiIH19PjxhIGNsYXNzTmFtZT17c3R5bGVzLnRvcH0+VG9wPC9hPjwvTGluaz5cbiAgICAgICAge1xuICAgICAgICAgIG5hdnMubmV4dFBhZ2UgPT0gbnVsbFxuICAgICAgICAgICAgPyBudWxsXG4gICAgICAgICAgICA6IDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6IGAke25hdnMubmV4dFBhZ2Uuc2x1Z31gIH19PjxhIGNsYXNzTmFtZT17c3R5bGVzLm5leHR9PntuYXZzLm5leHRQYWdlLnRpdGxlfSAmcmFxdW87IDwvYT48L0xpbms+XG4gICAgICAgIH1cbiAgICAgIDwvZm9vdGVyPlxuICAgIDwvPlxuICApXG59XG5cbmZ1bmN0aW9uIGZpbmRQb3N0c0Fyb3VuZChwb3N0bmFtZTogc3RyaW5nKSB7XG4gIGNvbnN0IHBvc3RzID0gKChjb250ZXh0KSA9PiB7XG4gICAgY29uc3Qga2V5cyA9IGNvbnRleHQua2V5cygpXG4gICAgY29uc3QgdmFsdWVzID0ga2V5cy5tYXAoY29udGV4dClcbiAgICByZXR1cm4gdmFsdWVzLm1hcCgodmFsdWU6YW55KSA9PiB7XG4gICAgICBjb25zdCBkb2N1bWVudCA9IG1hdHRlcih2YWx1ZS5kZWZhdWx0KVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZXBvY2g6IGRvY3VtZW50LmRhdGEuZXBvY2gsXG4gICAgICAgIHRpdGxlOiBkb2N1bWVudC5kYXRhLnRpdGxlLFxuICAgICAgICBzbHVnOiBkb2N1bWVudC5kYXRhLnNsdWdcbiAgICAgIH1cbiAgICB9KS5zb3J0KChhLCBiKSA9PiBiLmVwb2NoLmxvY2FsZUNvbXBhcmUoYS5lcG9jaCkpXG4gIH0pKHJlcXVpcmUuY29udGV4dChcIi4uLy4uL3Bvc3RzXCIsIHRydWUsIC9cXC5tZCQvKSlcblxuICBpZiAocG9zdHMubGVuZ3RoIDw9IDApIHJldHVybiB7fVxuICBjb25zdCB0aGlzUGFnZUluZGV4ID0gcG9zdHMuZmluZEluZGV4KHAgPT4gcC5zbHVnID09PSBgL2Jsb2cvJHtwb3N0bmFtZX1gKVxuICByZXR1cm4ge1xuICAgIG5leHRQYWdlOiBwb3N0c1t0aGlzUGFnZUluZGV4IC0gMV0gPz8gbnVsbCxcbiAgICBwcmV2UGFnZTogcG9zdHNbdGhpc1BhZ2VJbmRleCArIDFdID8/IG51bGxcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKGNvbnRleHQpID0+IHtcbiAgY29uc3QgeyBwb3N0bmFtZSB9ID0gY29udGV4dC5wYXJhbXNcbiAgY29uc3QgbmF2cyA9IGZpbmRQb3N0c0Fyb3VuZChwb3N0bmFtZSBhcyBzdHJpbmcpXG5cbiAgY29uc3QgY29udGVudCA9IGF3YWl0IGltcG9ydChgLi4vLi4vcG9zdHMvJHtwb3N0bmFtZX0ubWRgKVxuICBjb25zdCBkYXRhID0gbWF0dGVyKGNvbnRlbnQuZGVmYXVsdClcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBmcm9udG1hdHRlcjogZGF0YS5kYXRhLFxuICAgICAgbWFya2Rvd25Cb2R5OiBkYXRhLmNvbnRlbnQsXG4gICAgICBuYXZzOiBuYXZzXG4gICAgfSxcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHM6IEdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBibG9nU2x1Z3MgPSAoKGNvbnRleHQpID0+IHtcbiAgICBjb25zdCBrZXlzID0gY29udGV4dC5rZXlzKClcbiAgICBjb25zdCBkYXRhID0ga2V5cy5tYXAoKGtleSwgaW5kZXgpID0+IHtcbiAgICAgIGxldCBzbHVnID0ga2V5LnJlcGxhY2UoL14uKltcXFxcXFwvXS8sIFwiXCIpLnNsaWNlKDAsIC0zKVxuXG4gICAgICByZXR1cm4gc2x1Z1xuICAgIH0pXG4gICAgcmV0dXJuIGRhdGFcbiAgfSkocmVxdWlyZS5jb250ZXh0KFwiLi4vLi4vcG9zdHNcIiwgdHJ1ZSwgL1xcLm1kJC8pKVxuXG4gIGNvbnN0IHBhdGhzID0gYmxvZ1NsdWdzLm1hcCgoc2x1ZykgPT4gYC9ibG9nLyR7c2x1Z31gKVxuXG4gIHJldHVybiB7XG4gICAgcGF0aHMsXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/blog/[postname].tsx\n");

/***/ })

})