/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/todo-bg.jpg */ "./src/images/todo-bg.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\r\n! tailwindcss v3.2.7 | MIT License | https://tailwindcss.com\r\n*/\r\n\r\n/*\r\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\r\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\r\n*/\r\n\r\n*,\r\n::before,\r\n::after {\r\n  box-sizing: border-box;\r\n  /* 1 */\r\n  border-width: 0;\r\n  /* 2 */\r\n  border-style: solid;\r\n  /* 2 */\r\n  border-color: #e5e7eb;\r\n  /* 2 */\r\n}\r\n\r\n::before,\r\n::after {\r\n  --tw-content: '';\r\n}\r\n\r\n/*\r\n1. Use a consistent sensible line-height in all browsers.\r\n2. Prevent adjustments of font size after orientation changes in iOS.\r\n3. Use a more readable tab size.\r\n4. Use the user's configured `sans` font-family by default.\r\n5. Use the user's configured `sans` font-feature-settings by default.\r\n*/\r\n\r\nhtml {\r\n  line-height: 1.5;\r\n  /* 1 */\r\n  -webkit-text-size-adjust: 100%;\r\n  /* 2 */\r\n  -moz-tab-size: 4;\r\n  /* 3 */\r\n  -o-tab-size: 4;\r\n     tab-size: 4;\r\n  /* 3 */\r\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\r\n  /* 4 */\r\n  font-feature-settings: normal;\r\n  /* 5 */\r\n}\r\n\r\n/*\r\n1. Remove the margin in all browsers.\r\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\r\n*/\r\n\r\nbody {\r\n  margin: 0;\r\n  /* 1 */\r\n  line-height: inherit;\r\n  /* 2 */\r\n}\r\n\r\n/*\r\n1. Add the correct height in Firefox.\r\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\r\n3. Ensure horizontal rules are visible by default.\r\n*/\r\n\r\nhr {\r\n  height: 0;\r\n  /* 1 */\r\n  color: inherit;\r\n  /* 2 */\r\n  border-top-width: 1px;\r\n  /* 3 */\r\n}\r\n\r\n/*\r\nAdd the correct text decoration in Chrome, Edge, and Safari.\r\n*/\r\n\r\nabbr:where([title]) {\r\n  -webkit-text-decoration: underline dotted;\r\n          text-decoration: underline dotted;\r\n}\r\n\r\n/*\r\nRemove the default font size and weight for headings.\r\n*/\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  font-size: inherit;\r\n  font-weight: inherit;\r\n}\r\n\r\n/*\r\nReset links to optimize for opt-in styling instead of opt-out.\r\n*/\r\n\r\na {\r\n  color: inherit;\r\n  text-decoration: inherit;\r\n}\r\n\r\n/*\r\nAdd the correct font weight in Edge and Safari.\r\n*/\r\n\r\nb,\r\nstrong {\r\n  font-weight: bolder;\r\n}\r\n\r\n/*\r\n1. Use the user's configured `mono` font family by default.\r\n2. Correct the odd `em` font sizing in all browsers.\r\n*/\r\n\r\ncode,\r\nkbd,\r\nsamp,\r\npre {\r\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\r\n  /* 1 */\r\n  font-size: 1em;\r\n  /* 2 */\r\n}\r\n\r\n/*\r\nAdd the correct font size in all browsers.\r\n*/\r\n\r\nsmall {\r\n  font-size: 80%;\r\n}\r\n\r\n/*\r\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\r\n*/\r\n\r\nsub,\r\nsup {\r\n  font-size: 75%;\r\n  line-height: 0;\r\n  position: relative;\r\n  vertical-align: baseline;\r\n}\r\n\r\nsub {\r\n  bottom: -0.25em;\r\n}\r\n\r\nsup {\r\n  top: -0.5em;\r\n}\r\n\r\n/*\r\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\r\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\r\n3. Remove gaps between table borders by default.\r\n*/\r\n\r\ntable {\r\n  text-indent: 0;\r\n  /* 1 */\r\n  border-color: inherit;\r\n  /* 2 */\r\n  border-collapse: collapse;\r\n  /* 3 */\r\n}\r\n\r\n/*\r\n1. Change the font styles in all browsers.\r\n2. Remove the margin in Firefox and Safari.\r\n3. Remove default padding in all browsers.\r\n*/\r\n\r\nbutton,\r\ninput,\r\noptgroup,\r\nselect,\r\ntextarea {\r\n  font-family: inherit;\r\n  /* 1 */\r\n  font-size: 100%;\r\n  /* 1 */\r\n  font-weight: inherit;\r\n  /* 1 */\r\n  line-height: inherit;\r\n  /* 1 */\r\n  color: inherit;\r\n  /* 1 */\r\n  margin: 0;\r\n  /* 2 */\r\n  padding: 0;\r\n  /* 3 */\r\n}\r\n\r\n/*\r\nRemove the inheritance of text transform in Edge and Firefox.\r\n*/\r\n\r\nbutton,\r\nselect {\r\n  text-transform: none;\r\n}\r\n\r\n/*\r\n1. Correct the inability to style clickable types in iOS and Safari.\r\n2. Remove default button styles.\r\n*/\r\n\r\nbutton,\r\n[type='button'],\r\n[type='reset'],\r\n[type='submit'] {\r\n  -webkit-appearance: button;\r\n  /* 1 */\r\n  background-color: transparent;\r\n  /* 2 */\r\n  background-image: none;\r\n  /* 2 */\r\n}\r\n\r\n/*\r\nUse the modern Firefox focus style for all focusable elements.\r\n*/\r\n\r\n:-moz-focusring {\r\n  outline: auto;\r\n}\r\n\r\n/*\r\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\r\n*/\r\n\r\n:-moz-ui-invalid {\r\n  box-shadow: none;\r\n}\r\n\r\n/*\r\nAdd the correct vertical alignment in Chrome and Firefox.\r\n*/\r\n\r\nprogress {\r\n  vertical-align: baseline;\r\n}\r\n\r\n/*\r\nCorrect the cursor style of increment and decrement buttons in Safari.\r\n*/\r\n\r\n::-webkit-inner-spin-button,\r\n::-webkit-outer-spin-button {\r\n  height: auto;\r\n}\r\n\r\n/*\r\n1. Correct the odd appearance in Chrome and Safari.\r\n2. Correct the outline style in Safari.\r\n*/\r\n\r\n[type='search'] {\r\n  -webkit-appearance: textfield;\r\n  /* 1 */\r\n  outline-offset: -2px;\r\n  /* 2 */\r\n}\r\n\r\n/*\r\nRemove the inner padding in Chrome and Safari on macOS.\r\n*/\r\n\r\n::-webkit-search-decoration {\r\n  -webkit-appearance: none;\r\n}\r\n\r\n/*\r\n1. Correct the inability to style clickable types in iOS and Safari.\r\n2. Change font properties to `inherit` in Safari.\r\n*/\r\n\r\n::-webkit-file-upload-button {\r\n  -webkit-appearance: button;\r\n  /* 1 */\r\n  font: inherit;\r\n  /* 2 */\r\n}\r\n\r\n/*\r\nAdd the correct display in Chrome and Safari.\r\n*/\r\n\r\nsummary {\r\n  display: list-item;\r\n}\r\n\r\n/*\r\nRemoves the default spacing and border for appropriate elements.\r\n*/\r\n\r\nblockquote,\r\ndl,\r\ndd,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\nhr,\r\nfigure,\r\np,\r\npre {\r\n  margin: 0;\r\n}\r\n\r\nfieldset {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nlegend {\r\n  padding: 0;\r\n}\r\n\r\nol,\r\nul,\r\nmenu {\r\n  list-style: none;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n/*\r\nPrevent resizing textareas horizontally by default.\r\n*/\r\n\r\ntextarea {\r\n  resize: vertical;\r\n}\r\n\r\n/*\r\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\r\n2. Set the default placeholder color to the user's configured gray 400 color.\r\n*/\r\n\r\ninput::-moz-placeholder, textarea::-moz-placeholder {\r\n  opacity: 1;\r\n  /* 1 */\r\n  color: #9ca3af;\r\n  /* 2 */\r\n}\r\n\r\ninput::placeholder,\r\ntextarea::placeholder {\r\n  opacity: 1;\r\n  /* 1 */\r\n  color: #9ca3af;\r\n  /* 2 */\r\n}\r\n\r\n/*\r\nSet the default cursor for buttons.\r\n*/\r\n\r\nbutton,\r\n[role=\"button\"] {\r\n  cursor: pointer;\r\n}\r\n\r\n/*\r\nMake sure disabled buttons don't get the pointer cursor.\r\n*/\r\n\r\n:disabled {\r\n  cursor: default;\r\n}\r\n\r\n/*\r\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\r\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\r\n   This can trigger a poorly considered lint error in some tools but is included by design.\r\n*/\r\n\r\nimg,\r\nsvg,\r\nvideo,\r\ncanvas,\r\naudio,\r\niframe,\r\nembed,\r\nobject {\r\n  display: block;\r\n  /* 1 */\r\n  vertical-align: middle;\r\n  /* 2 */\r\n}\r\n\r\n/*\r\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\r\n*/\r\n\r\nimg,\r\nvideo {\r\n  max-width: 100%;\r\n  height: auto;\r\n}\r\n\r\n/* Make elements with the HTML hidden attribute stay hidden by default */\r\n\r\n[hidden] {\r\n  display: none;\r\n}\r\n\r\n*, ::before, ::after {\r\n  --tw-border-spacing-x: 0;\r\n  --tw-border-spacing-y: 0;\r\n  --tw-translate-x: 0;\r\n  --tw-translate-y: 0;\r\n  --tw-rotate: 0;\r\n  --tw-skew-x: 0;\r\n  --tw-skew-y: 0;\r\n  --tw-scale-x: 1;\r\n  --tw-scale-y: 1;\r\n  --tw-pan-x:  ;\r\n  --tw-pan-y:  ;\r\n  --tw-pinch-zoom:  ;\r\n  --tw-scroll-snap-strictness: proximity;\r\n  --tw-ordinal:  ;\r\n  --tw-slashed-zero:  ;\r\n  --tw-numeric-figure:  ;\r\n  --tw-numeric-spacing:  ;\r\n  --tw-numeric-fraction:  ;\r\n  --tw-ring-inset:  ;\r\n  --tw-ring-offset-width: 0px;\r\n  --tw-ring-offset-color: #fff;\r\n  --tw-ring-color: rgb(59 130 246 / 0.5);\r\n  --tw-ring-offset-shadow: 0 0 #0000;\r\n  --tw-ring-shadow: 0 0 #0000;\r\n  --tw-shadow: 0 0 #0000;\r\n  --tw-shadow-colored: 0 0 #0000;\r\n  --tw-blur:  ;\r\n  --tw-brightness:  ;\r\n  --tw-contrast:  ;\r\n  --tw-grayscale:  ;\r\n  --tw-hue-rotate:  ;\r\n  --tw-invert:  ;\r\n  --tw-saturate:  ;\r\n  --tw-sepia:  ;\r\n  --tw-drop-shadow:  ;\r\n  --tw-backdrop-blur:  ;\r\n  --tw-backdrop-brightness:  ;\r\n  --tw-backdrop-contrast:  ;\r\n  --tw-backdrop-grayscale:  ;\r\n  --tw-backdrop-hue-rotate:  ;\r\n  --tw-backdrop-invert:  ;\r\n  --tw-backdrop-opacity:  ;\r\n  --tw-backdrop-saturate:  ;\r\n  --tw-backdrop-sepia:  ;\r\n}\r\n\r\n::backdrop {\r\n  --tw-border-spacing-x: 0;\r\n  --tw-border-spacing-y: 0;\r\n  --tw-translate-x: 0;\r\n  --tw-translate-y: 0;\r\n  --tw-rotate: 0;\r\n  --tw-skew-x: 0;\r\n  --tw-skew-y: 0;\r\n  --tw-scale-x: 1;\r\n  --tw-scale-y: 1;\r\n  --tw-pan-x:  ;\r\n  --tw-pan-y:  ;\r\n  --tw-pinch-zoom:  ;\r\n  --tw-scroll-snap-strictness: proximity;\r\n  --tw-ordinal:  ;\r\n  --tw-slashed-zero:  ;\r\n  --tw-numeric-figure:  ;\r\n  --tw-numeric-spacing:  ;\r\n  --tw-numeric-fraction:  ;\r\n  --tw-ring-inset:  ;\r\n  --tw-ring-offset-width: 0px;\r\n  --tw-ring-offset-color: #fff;\r\n  --tw-ring-color: rgb(59 130 246 / 0.5);\r\n  --tw-ring-offset-shadow: 0 0 #0000;\r\n  --tw-ring-shadow: 0 0 #0000;\r\n  --tw-shadow: 0 0 #0000;\r\n  --tw-shadow-colored: 0 0 #0000;\r\n  --tw-blur:  ;\r\n  --tw-brightness:  ;\r\n  --tw-contrast:  ;\r\n  --tw-grayscale:  ;\r\n  --tw-hue-rotate:  ;\r\n  --tw-invert:  ;\r\n  --tw-saturate:  ;\r\n  --tw-sepia:  ;\r\n  --tw-drop-shadow:  ;\r\n  --tw-backdrop-blur:  ;\r\n  --tw-backdrop-brightness:  ;\r\n  --tw-backdrop-contrast:  ;\r\n  --tw-backdrop-grayscale:  ;\r\n  --tw-backdrop-hue-rotate:  ;\r\n  --tw-backdrop-invert:  ;\r\n  --tw-backdrop-opacity:  ;\r\n  --tw-backdrop-saturate:  ;\r\n  --tw-backdrop-sepia:  ;\r\n}\r\n\r\n.container {\r\n  width: 100%;\r\n}\r\n\r\n@media (min-width: 640px) {\r\n  .container {\r\n    max-width: 640px;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .container {\r\n    max-width: 768px;\r\n  }\r\n}\r\n\r\n@media (min-width: 1024px) {\r\n  .container {\r\n    max-width: 1024px;\r\n  }\r\n}\r\n\r\n@media (min-width: 1280px) {\r\n  .container {\r\n    max-width: 1280px;\r\n  }\r\n}\r\n\r\n@media (min-width: 1536px) {\r\n  .container {\r\n    max-width: 1536px;\r\n  }\r\n}\r\n\r\n.absolute {\r\n  position: absolute;\r\n}\r\n\r\n.m-auto {\r\n  margin: auto;\r\n}\r\n\r\n.mx-4 {\r\n  margin-left: 1rem;\r\n  margin-right: 1rem;\r\n}\r\n\r\n.flex {\r\n  display: flex;\r\n}\r\n\r\n.grid {\r\n  display: grid;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n.w-full {\r\n  width: 100%;\r\n}\r\n\r\n.flex-row {\r\n  flex-direction: row;\r\n}\r\n\r\n.flex-col {\r\n  flex-direction: column;\r\n}\r\n\r\n.items-start {\r\n  align-items: flex-start;\r\n}\r\n\r\n.items-center {\r\n  align-items: center;\r\n}\r\n\r\n.items-stretch {\r\n  align-items: stretch;\r\n}\r\n\r\n.justify-start {\r\n  justify-content: flex-start;\r\n}\r\n\r\n.justify-end {\r\n  justify-content: flex-end;\r\n}\r\n\r\n.justify-between {\r\n  justify-content: space-between;\r\n}\r\n\r\n.gap-2 {\r\n  gap: 0.5rem;\r\n}\r\n\r\n.gap-4 {\r\n  gap: 1rem;\r\n}\r\n\r\n.gap-8 {\r\n  gap: 2rem;\r\n}\r\n\r\n.rounded-full {\r\n  border-radius: 9999px;\r\n}\r\n\r\n.rounded-md {\r\n  border-radius: 0.375rem;\r\n}\r\n\r\n.border-b-2 {\r\n  border-bottom-width: 2px;\r\n}\r\n\r\n.border-t-2 {\r\n  border-top-width: 2px;\r\n}\r\n\r\n.border-solid {\r\n  border-style: solid;\r\n}\r\n\r\n.border-blue-700 {\r\n  --tw-border-opacity: 1;\r\n  border-color: rgb(29 78 216 / var(--tw-border-opacity));\r\n}\r\n\r\n.border-white {\r\n  --tw-border-opacity: 1;\r\n  border-color: rgb(255 255 255 / var(--tw-border-opacity));\r\n}\r\n\r\n.bg-blue-600 {\r\n  --tw-bg-opacity: 1;\r\n  background-color: rgb(37 99 235 / var(--tw-bg-opacity));\r\n}\r\n\r\n.bg-blue-700 {\r\n  --tw-bg-opacity: 1;\r\n  background-color: rgb(29 78 216 / var(--tw-bg-opacity));\r\n}\r\n\r\n.bg-red-500 {\r\n  --tw-bg-opacity: 1;\r\n  background-color: rgb(239 68 68 / var(--tw-bg-opacity));\r\n}\r\n\r\n.bg-slate-300 {\r\n  --tw-bg-opacity: 1;\r\n  background-color: rgb(203 213 225 / var(--tw-bg-opacity));\r\n}\r\n\r\n.bg-slate-500 {\r\n  --tw-bg-opacity: 1;\r\n  background-color: rgb(100 116 139 / var(--tw-bg-opacity));\r\n}\r\n\r\n.bg-transparent {\r\n  background-color: transparent;\r\n}\r\n\r\n.bg-yellow-500 {\r\n  --tw-bg-opacity: 1;\r\n  background-color: rgb(234 179 8 / var(--tw-bg-opacity));\r\n}\r\n\r\n.p-4 {\r\n  padding: 1rem;\r\n}\r\n\r\n.px-4 {\r\n  padding-left: 1rem;\r\n  padding-right: 1rem;\r\n}\r\n\r\n.px-8 {\r\n  padding-left: 2rem;\r\n  padding-right: 2rem;\r\n}\r\n\r\n.py-16 {\r\n  padding-top: 4rem;\r\n  padding-bottom: 4rem;\r\n}\r\n\r\n.py-2 {\r\n  padding-top: 0.5rem;\r\n  padding-bottom: 0.5rem;\r\n}\r\n\r\n.py-4 {\r\n  padding-top: 1rem;\r\n  padding-bottom: 1rem;\r\n}\r\n\r\n.py-8 {\r\n  padding-top: 2rem;\r\n  padding-bottom: 2rem;\r\n}\r\n\r\n.pl-4 {\r\n  padding-left: 1rem;\r\n}\r\n\r\n.pl-8 {\r\n  padding-left: 2rem;\r\n}\r\n\r\n.text-center {\r\n  text-align: center;\r\n}\r\n\r\n.text-2xl {\r\n  font-size: 1.5rem;\r\n  line-height: 2rem;\r\n}\r\n\r\n.text-3xl {\r\n  font-size: 1.875rem;\r\n  line-height: 2.25rem;\r\n}\r\n\r\n.text-sm {\r\n  font-size: 0.875rem;\r\n  line-height: 1.25rem;\r\n}\r\n\r\n.text-xl {\r\n  font-size: 1.25rem;\r\n  line-height: 1.75rem;\r\n}\r\n\r\n.font-bold {\r\n  font-weight: 700;\r\n}\r\n\r\n.font-medium {\r\n  font-weight: 500;\r\n}\r\n\r\n.text-blue-700 {\r\n  --tw-text-opacity: 1;\r\n  color: rgb(29 78 216 / var(--tw-text-opacity));\r\n}\r\n\r\n.text-slate-200 {\r\n  --tw-text-opacity: 1;\r\n  color: rgb(226 232 240 / var(--tw-text-opacity));\r\n}\r\n\r\n.text-slate-500 {\r\n  --tw-text-opacity: 1;\r\n  color: rgb(100 116 139 / var(--tw-text-opacity));\r\n}\r\n\r\n.text-white {\r\n  --tw-text-opacity: 1;\r\n  color: rgb(255 255 255 / var(--tw-text-opacity));\r\n}\r\n\r\n.filter {\r\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\r\n}\r\n\r\n.transition-all {\r\n  transition-property: all;\r\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\r\n  transition-duration: 150ms;\r\n}\r\n\r\nbody {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  background-clip: border-box;\r\n  height: 100vh;\r\n  /* padding-top: 5.49rem;\r\n    padding-left: 25vw; */\r\n}\r\n\r\naside {\r\n  width: 20vw;\r\n  position: fixed;\r\n  top: 7.35rem;\r\n  right: 1rem;\r\n  left: 2.5rem;\r\n  bottom: 1rem;\r\n  overflow: scroll;\r\n}\r\n\r\n#content-container {\r\n  position: fixed;\r\n  top: 7.35rem;\r\n  left: 25vw;\r\n  right: 2rem;\r\n  height: 79.6vh;\r\n}\r\n\r\nfooter{\r\n  bottom: 1rem;\r\n}\r\n\r\nfooter,#projects-header {\r\n  position: fixed;\r\n  left: 2.5rem;\r\n  width: 20vw;\r\n  z-index: 100;\r\n}\r\n\r\nform{\r\n  width: 30vw;\r\n  left: calc(25vw - 1rem);\r\n  top: 7.35rem;\r\n}\r\n\r\nheader {\r\n  position: fixed;\r\n  top: 1.5rem;\r\n  right: 1rem;\r\n  left: 1.5rem;\r\n}\r\n\r\n#new-project-btn{\r\n  padding-block: .5rem;\r\n  padding-inline: .8rem;\r\n  border-radius: 30px;\r\n}\r\n\r\n#profile {\r\n  position: absolute;\r\n  right: 0;\r\n}\r\n\r\n#profile-picture {\r\n  width: 45px;\r\n}\r\n\r\n#projects-header{\r\n  top: 7.35rem;\r\n}\r\n\r\n#task-container{\r\n  overflow: scroll;\r\n}\r\n\r\n#task-form {\r\n  left: calc(40vw);\r\n  top: 16.8rem;\r\n}\r\n\r\n.hover\\:bg-blue-600:hover {\r\n  --tw-bg-opacity: 1;\r\n  background-color: rgb(37 99 235 / var(--tw-bg-opacity));\r\n}\r\n\r\n.hover\\:bg-blue-700:hover {\r\n  --tw-bg-opacity: 1;\r\n  background-color: rgb(29 78 216 / var(--tw-bg-opacity));\r\n}\r\n\r\n.hover\\:bg-red-700:hover {\r\n  --tw-bg-opacity: 1;\r\n  background-color: rgb(185 28 28 / var(--tw-bg-opacity));\r\n}\r\n\r\n.hover\\:bg-slate-100:hover {\r\n  --tw-bg-opacity: 1;\r\n  background-color: rgb(241 245 249 / var(--tw-bg-opacity));\r\n}\r\n\r\n.hover\\:bg-yellow-700:hover {\r\n  --tw-bg-opacity: 1;\r\n  background-color: rgb(161 98 7 / var(--tw-bg-opacity));\r\n}\r\n\r\n.focus\\:outline-none:focus {\r\n  outline: 2px solid transparent;\r\n  outline-offset: 2px;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"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","sourcesContent":["/*\r\n! tailwindcss v3.2.7 | MIT License | https://tailwindcss.com\r\n*/\r\n\r\n/*\r\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\r\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\r\n*/\r\n\r\n*,\r\n::before,\r\n::after {\r\n  box-sizing: border-box;\r\n  /* 1 */\r\n  border-width: 0;\r\n  /* 2 */\r\n  border-style: solid;\r\n  /* 2 */\r\n  border-color: #e5e7eb;\r\n  /* 2 */\r\n}\r\n\r\n::before,\r\n::after {\r\n  --tw-content: '';\r\n}\r\n\r\n/*\r\n1. Use a consistent sensible line-height in all browsers.\r\n2. Prevent adjustments of font size after orientation changes in iOS.\r\n3. Use a more readable tab size.\r\n4. Use the user's configured `sans` font-family by default.\r\n5. Use the user's configured `sans` font-feature-settings by default.\r\n*/\r\n\r\nhtml {\r\n  line-height: 1.5;\r\n  /* 1 */\r\n  -webkit-text-size-adjust: 100%;\r\n  /* 2 */\r\n  -moz-tab-size: 4;\r\n  /* 3 */\r\n  -o-tab-size: 4;\r\n     tab-size: 4;\r\n  /* 3 */\r\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\r\n  /* 4 */\r\n  font-feature-settings: normal;\r\n  /* 5 */\r\n}\r\n\r\n/*\r\n1. Remove the margin in all browsers.\r\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\r\n*/\r\n\r\nbody {\r\n  margin: 0;\r\n  /* 1 */\r\n  line-height: inherit;\r\n  /* 2 */\r\n}\r\n\r\n/*\r\n1. Add the correct height in Firefox.\r\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\r\n3. Ensure horizontal rules are visible by default.\r\n*/\r\n\r\nhr {\r\n  height: 0;\r\n  /* 1 */\r\n  color: inherit;\r\n  /* 2 */\r\n  border-top-width: 1px;\r\n  /* 3 */\r\n}\r\n\r\n/*\r\nAdd the correct text decoration in Chrome, Edge, and Safari.\r\n*/\r\n\r\nabbr:where([title]) {\r\n  -webkit-text-decoration: underline dotted;\r\n          text-decoration: underline dotted;\r\n}\r\n\r\n/*\r\nRemove the default font size and weight for headings.\r\n*/\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  font-size: inherit;\r\n  font-weight: inherit;\r\n}\r\n\r\n/*\r\nReset links to optimize for opt-in styling instead of opt-out.\r\n*/\r\n\r\na {\r\n  color: inherit;\r\n  text-decoration: inherit;\r\n}\r\n\r\n/*\r\nAdd the correct font weight in Edge and Safari.\r\n*/\r\n\r\nb,\r\nstrong {\r\n  font-weight: bolder;\r\n}\r\n\r\n/*\r\n1. Use the user's configured `mono` font family by default.\r\n2. Correct the odd `em` font sizing in all browsers.\r\n*/\r\n\r\ncode,\r\nkbd,\r\nsamp,\r\npre {\r\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\r\n  /* 1 */\r\n  font-size: 1em;\r\n  /* 2 */\r\n}\r\n\r\n/*\r\nAdd the correct font size in all browsers.\r\n*/\r\n\r\nsmall {\r\n  font-size: 80%;\r\n}\r\n\r\n/*\r\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\r\n*/\r\n\r\nsub,\r\nsup {\r\n  font-size: 75%;\r\n  line-height: 0;\r\n  position: relative;\r\n  vertical-align: baseline;\r\n}\r\n\r\nsub {\r\n  bottom: -0.25em;\r\n}\r\n\r\nsup {\r\n  top: -0.5em;\r\n}\r\n\r\n/*\r\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\r\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\r\n3. Remove gaps between table borders by default.\r\n*/\r\n\r\ntable {\r\n  text-indent: 0;\r\n  /* 1 */\r\n  border-color: inherit;\r\n  /* 2 */\r\n  border-collapse: collapse;\r\n  /* 3 */\r\n}\r\n\r\n/*\r\n1. Change the font styles in all browsers.\r\n2. Remove the margin in Firefox and Safari.\r\n3. Remove default padding in all browsers.\r\n*/\r\n\r\nbutton,\r\ninput,\r\noptgroup,\r\nselect,\r\ntextarea {\r\n  font-family: inherit;\r\n  /* 1 */\r\n  font-size: 100%;\r\n  /* 1 */\r\n  font-weight: inherit;\r\n  /* 1 */\r\n  line-height: inherit;\r\n  /* 1 */\r\n  color: inherit;\r\n  /* 1 */\r\n  margin: 0;\r\n  /* 2 */\r\n  padding: 0;\r\n  /* 3 */\r\n}\r\n\r\n/*\r\nRemove the inheritance of text transform in Edge and Firefox.\r\n*/\r\n\r\nbutton,\r\nselect {\r\n  text-transform: none;\r\n}\r\n\r\n/*\r\n1. Correct the inability to style clickable types in iOS and Safari.\r\n2. Remove default button styles.\r\n*/\r\n\r\nbutton,\r\n[type='button'],\r\n[type='reset'],\r\n[type='submit'] {\r\n  -webkit-appearance: button;\r\n  /* 1 */\r\n  background-color: transparent;\r\n  /* 2 */\r\n  background-image: none;\r\n  /* 2 */\r\n}\r\n\r\n/*\r\nUse the modern Firefox focus style for all focusable elements.\r\n*/\r\n\r\n:-moz-focusring {\r\n  outline: auto;\r\n}\r\n\r\n/*\r\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\r\n*/\r\n\r\n:-moz-ui-invalid {\r\n  box-shadow: none;\r\n}\r\n\r\n/*\r\nAdd the correct vertical alignment in Chrome and Firefox.\r\n*/\r\n\r\nprogress {\r\n  vertical-align: baseline;\r\n}\r\n\r\n/*\r\nCorrect the cursor style of increment and decrement buttons in Safari.\r\n*/\r\n\r\n::-webkit-inner-spin-button,\r\n::-webkit-outer-spin-button {\r\n  height: auto;\r\n}\r\n\r\n/*\r\n1. Correct the odd appearance in Chrome and Safari.\r\n2. Correct the outline style in Safari.\r\n*/\r\n\r\n[type='search'] {\r\n  -webkit-appearance: textfield;\r\n  /* 1 */\r\n  outline-offset: -2px;\r\n  /* 2 */\r\n}\r\n\r\n/*\r\nRemove the inner padding in Chrome and Safari on macOS.\r\n*/\r\n\r\n::-webkit-search-decoration {\r\n  -webkit-appearance: none;\r\n}\r\n\r\n/*\r\n1. Correct the inability to style clickable types in iOS and Safari.\r\n2. Change font properties to `inherit` in Safari.\r\n*/\r\n\r\n::-webkit-file-upload-button {\r\n  -webkit-appearance: button;\r\n  /* 1 */\r\n  font: inherit;\r\n  /* 2 */\r\n}\r\n\r\n/*\r\nAdd the correct display in Chrome and Safari.\r\n*/\r\n\r\nsummary {\r\n  display: list-item;\r\n}\r\n\r\n/*\r\nRemoves the default spacing and border for appropriate elements.\r\n*/\r\n\r\nblockquote,\r\ndl,\r\ndd,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\nhr,\r\nfigure,\r\np,\r\npre {\r\n  margin: 0;\r\n}\r\n\r\nfieldset {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nlegend {\r\n  padding: 0;\r\n}\r\n\r\nol,\r\nul,\r\nmenu {\r\n  list-style: none;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n/*\r\nPrevent resizing textareas horizontally by default.\r\n*/\r\n\r\ntextarea {\r\n  resize: vertical;\r\n}\r\n\r\n/*\r\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\r\n2. Set the default placeholder color to the user's configured gray 400 color.\r\n*/\r\n\r\ninput::-moz-placeholder, textarea::-moz-placeholder {\r\n  opacity: 1;\r\n  /* 1 */\r\n  color: #9ca3af;\r\n  /* 2 */\r\n}\r\n\r\ninput::placeholder,\r\ntextarea::placeholder {\r\n  opacity: 1;\r\n  /* 1 */\r\n  color: #9ca3af;\r\n  /* 2 */\r\n}\r\n\r\n/*\r\nSet the default cursor for buttons.\r\n*/\r\n\r\nbutton,\r\n[role=\"button\"] {\r\n  cursor: pointer;\r\n}\r\n\r\n/*\r\nMake sure disabled buttons don't get the pointer cursor.\r\n*/\r\n\r\n:disabled {\r\n  cursor: default;\r\n}\r\n\r\n/*\r\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\r\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\r\n   This can trigger a poorly considered lint error in some tools but is included by design.\r\n*/\r\n\r\nimg,\r\nsvg,\r\nvideo,\r\ncanvas,\r\naudio,\r\niframe,\r\nembed,\r\nobject {\r\n  display: block;\r\n  /* 1 */\r\n  vertical-align: middle;\r\n  /* 2 */\r\n}\r\n\r\n/*\r\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\r\n*/\r\n\r\nimg,\r\nvideo {\r\n  max-width: 100%;\r\n  height: auto;\r\n}\r\n\r\n/* Make elements with the HTML hidden attribute stay hidden by default */\r\n\r\n[hidden] {\r\n  display: none;\r\n}\r\n\r\n*, ::before, ::after {\r\n  --tw-border-spacing-x: 0;\r\n  --tw-border-spacing-y: 0;\r\n  --tw-translate-x: 0;\r\n  --tw-translate-y: 0;\r\n  --tw-rotate: 0;\r\n  --tw-skew-x: 0;\r\n  --tw-skew-y: 0;\r\n  --tw-scale-x: 1;\r\n  --tw-scale-y: 1;\r\n  --tw-pan-x:  ;\r\n  --tw-pan-y:  ;\r\n  --tw-pinch-zoom:  ;\r\n  --tw-scroll-snap-strictness: proximity;\r\n  --tw-ordinal:  ;\r\n  --tw-slashed-zero:  ;\r\n  --tw-numeric-figure:  ;\r\n  --tw-numeric-spacing:  ;\r\n  --tw-numeric-fraction:  ;\r\n  --tw-ring-inset:  ;\r\n  --tw-ring-offset-width: 0px;\r\n  --tw-ring-offset-color: #fff;\r\n  --tw-ring-color: rgb(59 130 246 / 0.5);\r\n  --tw-ring-offset-shadow: 0 0 #0000;\r\n  --tw-ring-shadow: 0 0 #0000;\r\n  --tw-shadow: 0 0 #0000;\r\n  --tw-shadow-colored: 0 0 #0000;\r\n  --tw-blur:  ;\r\n  --tw-brightness:  ;\r\n  --tw-contrast:  ;\r\n  --tw-grayscale:  ;\r\n  --tw-hue-rotate:  ;\r\n  --tw-invert:  ;\r\n  --tw-saturate:  ;\r\n  --tw-sepia:  ;\r\n  --tw-drop-shadow:  ;\r\n  --tw-backdrop-blur:  ;\r\n  --tw-backdrop-brightness:  ;\r\n  --tw-backdrop-contrast:  ;\r\n  --tw-backdrop-grayscale:  ;\r\n  --tw-backdrop-hue-rotate:  ;\r\n  --tw-backdrop-invert:  ;\r\n  --tw-backdrop-opacity:  ;\r\n  --tw-backdrop-saturate:  ;\r\n  --tw-backdrop-sepia:  ;\r\n}\r\n\r\n::backdrop {\r\n  --tw-border-spacing-x: 0;\r\n  --tw-border-spacing-y: 0;\r\n  --tw-translate-x: 0;\r\n  --tw-translate-y: 0;\r\n  --tw-rotate: 0;\r\n  --tw-skew-x: 0;\r\n  --tw-skew-y: 0;\r\n  --tw-scale-x: 1;\r\n  --tw-scale-y: 1;\r\n  --tw-pan-x:  ;\r\n  --tw-pan-y:  ;\r\n  --tw-pinch-zoom:  ;\r\n  --tw-scroll-snap-strictness: proximity;\r\n  --tw-ordinal:  ;\r\n  --tw-slashed-zero:  ;\r\n  --tw-numeric-figure:  ;\r\n  --tw-numeric-spacing:  ;\r\n  --tw-numeric-fraction:  ;\r\n  --tw-ring-inset:  ;\r\n  --tw-ring-offset-width: 0px;\r\n  --tw-ring-offset-color: #fff;\r\n  --tw-ring-color: rgb(59 130 246 / 0.5);\r\n  --tw-ring-offset-shadow: 0 0 #0000;\r\n  --tw-ring-shadow: 0 0 #0000;\r\n  --tw-shadow: 0 0 #0000;\r\n  --tw-shadow-colored: 0 0 #0000;\r\n  --tw-blur:  ;\r\n  --tw-brightness:  ;\r\n  --tw-contrast:  ;\r\n  --tw-grayscale:  ;\r\n  --tw-hue-rotate:  ;\r\n  --tw-invert:  ;\r\n  --tw-saturate:  ;\r\n  --tw-sepia:  ;\r\n  --tw-drop-shadow:  ;\r\n  --tw-backdrop-blur:  ;\r\n  --tw-backdrop-brightness:  ;\r\n  --tw-backdrop-contrast:  ;\r\n  --tw-backdrop-grayscale:  ;\r\n  --tw-backdrop-hue-rotate:  ;\r\n  --tw-backdrop-invert:  ;\r\n  --tw-backdrop-opacity:  ;\r\n  --tw-backdrop-saturate:  ;\r\n  --tw-backdrop-sepia:  ;\r\n}\r\n\r\n.container {\r\n  width: 100%;\r\n}\r\n\r\n@media (min-width: 640px) {\r\n  .container {\r\n    max-width: 640px;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .container {\r\n    max-width: 768px;\r\n  }\r\n}\r\n\r\n@media (min-width: 1024px) {\r\n  .container {\r\n    max-width: 1024px;\r\n  }\r\n}\r\n\r\n@media (min-width: 1280px) {\r\n  .container {\r\n    max-width: 1280px;\r\n  }\r\n}\r\n\r\n@media (min-width: 1536px) {\r\n  .container {\r\n    max-width: 1536px;\r\n  }\r\n}\r\n\r\n.absolute {\r\n  position: absolute;\r\n}\r\n\r\n.m-auto {\r\n  margin: auto;\r\n}\r\n\r\n.mx-4 {\r\n  margin-left: 1rem;\r\n  margin-right: 1rem;\r\n}\r\n\r\n.flex {\r\n  display: flex;\r\n}\r\n\r\n.grid {\r\n  display: grid;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n.w-full {\r\n  width: 100%;\r\n}\r\n\r\n.flex-row {\r\n  flex-direction: row;\r\n}\r\n\r\n.flex-col {\r\n  flex-direction: column;\r\n}\r\n\r\n.items-start {\r\n  align-items: flex-start;\r\n}\r\n\r\n.items-center {\r\n  align-items: center;\r\n}\r\n\r\n.items-stretch {\r\n  align-items: stretch;\r\n}\r\n\r\n.justify-start {\r\n  justify-content: flex-start;\r\n}\r\n\r\n.justify-end {\r\n  justify-content: flex-end;\r\n}\r\n\r\n.justify-between {\r\n  justify-content: space-between;\r\n}\r\n\r\n.gap-2 {\r\n  gap: 0.5rem;\r\n}\r\n\r\n.gap-4 {\r\n  gap: 1rem;\r\n}\r\n\r\n.gap-8 {\r\n  gap: 2rem;\r\n}\r\n\r\n.rounded-full {\r\n  border-radius: 9999px;\r\n}\r\n\r\n.rounded-md {\r\n  border-radius: 0.375rem;\r\n}\r\n\r\n.border-b-2 {\r\n  border-bottom-width: 2px;\r\n}\r\n\r\n.border-t-2 {\r\n  border-top-width: 2px;\r\n}\r\n\r\n.border-solid {\r\n  border-style: solid;\r\n}\r\n\r\n.border-blue-700 {\r\n  --tw-border-opacity: 1;\r\n  border-color: rgb(29 78 216 / var(--tw-border-opacity));\r\n}\r\n\r\n.border-white {\r\n  --tw-border-opacity: 1;\r\n  border-color: rgb(255 255 255 / var(--tw-border-opacity));\r\n}\r\n\r\n.bg-blue-600 {\r\n  --tw-bg-opacity: 1;\r\n  background-color: rgb(37 99 235 / var(--tw-bg-opacity));\r\n}\r\n\r\n.bg-blue-700 {\r\n  --tw-bg-opacity: 1;\r\n  background-color: rgb(29 78 216 / var(--tw-bg-opacity));\r\n}\r\n\r\n.bg-red-500 {\r\n  --tw-bg-opacity: 1;\r\n  background-color: rgb(239 68 68 / var(--tw-bg-opacity));\r\n}\r\n\r\n.bg-slate-300 {\r\n  --tw-bg-opacity: 1;\r\n  background-color: rgb(203 213 225 / var(--tw-bg-opacity));\r\n}\r\n\r\n.bg-slate-500 {\r\n  --tw-bg-opacity: 1;\r\n  background-color: rgb(100 116 139 / var(--tw-bg-opacity));\r\n}\r\n\r\n.bg-transparent {\r\n  background-color: transparent;\r\n}\r\n\r\n.bg-yellow-500 {\r\n  --tw-bg-opacity: 1;\r\n  background-color: rgb(234 179 8 / var(--tw-bg-opacity));\r\n}\r\n\r\n.p-4 {\r\n  padding: 1rem;\r\n}\r\n\r\n.px-4 {\r\n  padding-left: 1rem;\r\n  padding-right: 1rem;\r\n}\r\n\r\n.px-8 {\r\n  padding-left: 2rem;\r\n  padding-right: 2rem;\r\n}\r\n\r\n.py-16 {\r\n  padding-top: 4rem;\r\n  padding-bottom: 4rem;\r\n}\r\n\r\n.py-2 {\r\n  padding-top: 0.5rem;\r\n  padding-bottom: 0.5rem;\r\n}\r\n\r\n.py-4 {\r\n  padding-top: 1rem;\r\n  padding-bottom: 1rem;\r\n}\r\n\r\n.py-8 {\r\n  padding-top: 2rem;\r\n  padding-bottom: 2rem;\r\n}\r\n\r\n.pl-4 {\r\n  padding-left: 1rem;\r\n}\r\n\r\n.pl-8 {\r\n  padding-left: 2rem;\r\n}\r\n\r\n.text-center {\r\n  text-align: center;\r\n}\r\n\r\n.text-2xl {\r\n  font-size: 1.5rem;\r\n  line-height: 2rem;\r\n}\r\n\r\n.text-3xl {\r\n  font-size: 1.875rem;\r\n  line-height: 2.25rem;\r\n}\r\n\r\n.text-sm {\r\n  font-size: 0.875rem;\r\n  line-height: 1.25rem;\r\n}\r\n\r\n.text-xl {\r\n  font-size: 1.25rem;\r\n  line-height: 1.75rem;\r\n}\r\n\r\n.font-bold {\r\n  font-weight: 700;\r\n}\r\n\r\n.font-medium {\r\n  font-weight: 500;\r\n}\r\n\r\n.text-blue-700 {\r\n  --tw-text-opacity: 1;\r\n  color: rgb(29 78 216 / var(--tw-text-opacity));\r\n}\r\n\r\n.text-slate-200 {\r\n  --tw-text-opacity: 1;\r\n  color: rgb(226 232 240 / var(--tw-text-opacity));\r\n}\r\n\r\n.text-slate-500 {\r\n  --tw-text-opacity: 1;\r\n  color: rgb(100 116 139 / var(--tw-text-opacity));\r\n}\r\n\r\n.text-white {\r\n  --tw-text-opacity: 1;\r\n  color: rgb(255 255 255 / var(--tw-text-opacity));\r\n}\r\n\r\n.filter {\r\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\r\n}\r\n\r\n.transition-all {\r\n  transition-property: all;\r\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\r\n  transition-duration: 150ms;\r\n}\r\n\r\nbody {\r\n  background-image: url('../images/todo-bg.jpg');\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  background-clip: border-box;\r\n  height: 100vh;\r\n  /* padding-top: 5.49rem;\r\n    padding-left: 25vw; */\r\n}\r\n\r\naside {\r\n  width: 20vw;\r\n  position: fixed;\r\n  top: 7.35rem;\r\n  right: 1rem;\r\n  left: 2.5rem;\r\n  bottom: 1rem;\r\n  overflow: scroll;\r\n}\r\n\r\n#content-container {\r\n  position: fixed;\r\n  top: 7.35rem;\r\n  left: 25vw;\r\n  right: 2rem;\r\n  height: 79.6vh;\r\n}\r\n\r\nfooter{\r\n  bottom: 1rem;\r\n}\r\n\r\nfooter,#projects-header {\r\n  position: fixed;\r\n  left: 2.5rem;\r\n  width: 20vw;\r\n  z-index: 100;\r\n}\r\n\r\nform{\r\n  width: 30vw;\r\n  left: calc(25vw - 1rem);\r\n  top: 7.35rem;\r\n}\r\n\r\nheader {\r\n  position: fixed;\r\n  top: 1.5rem;\r\n  right: 1rem;\r\n  left: 1.5rem;\r\n}\r\n\r\n#new-project-btn{\r\n  padding-block: .5rem;\r\n  padding-inline: .8rem;\r\n  border-radius: 30px;\r\n}\r\n\r\n#profile {\r\n  position: absolute;\r\n  right: 0;\r\n}\r\n\r\n#profile-picture {\r\n  width: 45px;\r\n}\r\n\r\n#projects-header{\r\n  top: 7.35rem;\r\n}\r\n\r\n#task-container{\r\n  overflow: scroll;\r\n}\r\n\r\n#task-form {\r\n  left: calc(40vw);\r\n  top: 16.8rem;\r\n}\r\n\r\n.hover\\:bg-blue-600:hover {\r\n  --tw-bg-opacity: 1;\r\n  background-color: rgb(37 99 235 / var(--tw-bg-opacity));\r\n}\r\n\r\n.hover\\:bg-blue-700:hover {\r\n  --tw-bg-opacity: 1;\r\n  background-color: rgb(29 78 216 / var(--tw-bg-opacity));\r\n}\r\n\r\n.hover\\:bg-red-700:hover {\r\n  --tw-bg-opacity: 1;\r\n  background-color: rgb(185 28 28 / var(--tw-bg-opacity));\r\n}\r\n\r\n.hover\\:bg-slate-100:hover {\r\n  --tw-bg-opacity: 1;\r\n  background-color: rgb(241 245 249 / var(--tw-bg-opacity));\r\n}\r\n\r\n.hover\\:bg-yellow-700:hover {\r\n  --tw-bg-opacity: 1;\r\n  background-color: rgb(161 98 7 / var(--tw-bg-opacity));\r\n}\r\n\r\n.focus\\:outline-none:focus {\r\n  outline: 2px solid transparent;\r\n  outline-offset: 2px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/scripts/dom_manager.js":
/*!************************************!*\
  !*** ./src/scripts/dom_manager.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DOMManager)
/* harmony export */ });

class DOMManager {

  constructor () {

  }
  //Add Icon
  createAddButton () {

    //Button
    const button = document.createElement('button')
    button.className = 'bg-blue-600 rounded-full hover:bg-blue-700 transition-all'

    //Icon
    const icon = document.createElement('i')
    icon.className = 'text-xl text-slate-200 fa-solid fa-plus font-medium'

    button.appendChild(icon)

    return button
  }
  //Div Container
  createContainer () {
    const div = document.createElement('div')
    div.className = 'p-4'

    return div
  }
  //Footer
  createFooter () {
    const footer = document.createElement('footer')
      footer.className = 'border-t-2 border-solid border-white bg-blue-700'

  //Paragraph
  const p = document.createElement('p')
    p.className = 'text-sm text-slate-500 text-center py-4'
    p.innerHTML = `Copyright &copy; ${new Date().getFullYear()}`
    footer.appendChild(p)

    return footer
  }
  //Page header
  createHeader () {
    const header = document.createElement('header')
    header.className = 'p-4 bg-blue-700 m-auto mx-4 rounded-top rounded-md'
    return header
  }
  //Heading element
  createHeading (text) {
    const heading = document.createElement('h1')
    heading.className = 'text-xl text-slate-200'
    heading.textContent = text

    return heading
  }
  //Horizontal line
  createHorizontalLine () {
    const line = document.createElement('hr')
    line.style.height = '1xp'
    line.className = 'bg-slate-500 w-full'

    return line
  }
  //Business name
  createLogo (text) {
    const logo = this.createHeading(text)
    logo.classList.remove('text-xl')
    logo.classList.add('text-2xl','font-bold','text-center')

    return logo
  }
  //Project container
  //used for dislay in the side bar
  createProjectContainer (projectName) {
    const hashLink = document.createElement('a')
    hashLink.href = `#${projectName.replaceAll(' ','-')}`
    const projCont = document.createElement('div')
      projCont.id = `${projectName.toLowerCase().replaceAll(' ', '-')}-container`
      projCont.className = 'w-full bg-blue-600 border-t-2 border-solid border-white hover:bg-blue-700 transition-all'

      //Name
      const projName = this.createHeading(projectName)
        projName.id = `${projectName.toLowerCase().replaceAll(' ', '-')}`
        projName.className = 'project py-2 text-slate-200 text-xl px-4'
      
      //Append name
      hashLink.appendChild(projName)
      projCont.appendChild(hashLink)

      return projCont
  }
  //Description container
  createProjectDescription (description) {
    const container = this.createContainer()
    container.classList.add('bg-blue-600','px-8', 'py-4')

    //Paragraph
    const par = document.createElement('p')
    par.className = 'text-slate-200 text-md'
    par.textContent = description

    container.appendChild(par)

    return container
  }
  //Project header
  //display in the main body 
  //Peiod is an object with period.start and period.end
  createProjectHeader (project){
    //Main container
    const container = this.createContainer()
    container.className = 'flex flex-row justify-between bg-blue-600 items-center w-full py-4 pl-8'
    //Add Name
    const projectTitle = this.createHeading(project.name)
    projectTitle.classList.add('font-bold')
    projectTitle.id = 'project-name'
    container.appendChild(projectTitle)

    return container
  }
  //Side bar
  createSidebar () {
     const sidebar = document.createElement('aside')
     sidebar.className = 'px-4 bg-blue-700 rounded-md py-16'

     return sidebar
  }
  //User profile
  createUserProfile (userName) {
    //Profile container
    const profile = this.createContainer()
    profile.classList.add('flex', 'flex-row', 'justify-end', 'items-center', 'gap-4')
    profile.id = 'profile'

    //picture image
    const pic = document.createElement('img')
    pic.id = 'profile-picture'
    pic.className = 'rounded-full'
    profile.appendChild(pic)

    //user name
    const name = this.createHeading(userName)
    profile.prepend(name)

    return profile
  }
  displayForm (hashFormId) {
    document.querySelector(hashFormId).classList.toggle('hidden')
  }
  getFormData (hashFormId) {
    const data = []
    //Get node list
    document.querySelectorAll(`${hashFormId} input`).forEach(element =>{
      //get input values and add to data array
      data.push(element.value.trim())
    })
    return data
  } 
  hideForm(hashFormId) {
    document.querySelector(hashFormId).classList.add('hidden')
  }
  //Append to DOM
  render (content) {
      const contentContainer = document.querySelector('#content')
      contentContainer.appendChild(content)
    }
    
}

/***/ }),

/***/ "./src/scripts/project.js":
/*!********************************!*\
  !*** ./src/scripts/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _task_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task_manager */ "./src/scripts/task_manager.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/scripts/task.js");


class Project extends _task_manager__WEBPACK_IMPORTED_MODULE_0__["default"] {

    //Project open
    #complete = false
    #description = ''
    
    constructor(name){
        super()
        this.name = name
    }
    createNewTask (data) {
        const task = new _task__WEBPACK_IMPORTED_MODULE_1__["default"](data.title)//instanciate task
        task.setDescription(data.description)
        task.setDueDate(data.dueDate)
        
        return task.toJSON()
    }
    //return value of description
    getDescription(){
        return this.#description
    }
    //is complete
    isComplete(){
        return this.#complete
    }
    
    //Mark as complete
    markAsComplete(){
        this.#complete = true
    }
    //Mark as incomplete
    markAsIncomplete(){
        if(this.#complete)
            this.#complete = false
    }
   
    //initialize descripion
    setDescription(description){
        this.#description = description
    }
    toJSON (){
        return {
            "name": this.name,
            "complete": this.isComplete(),
            "description": this.getDescription(),
            "tasks": this.getTasks()
        }
    }

}



/***/ }),

/***/ "./src/scripts/project_manager.js":
/*!****************************************!*\
  !*** ./src/scripts/project_manager.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProjectManager)
/* harmony export */ });

class ProjectManager {
     /*
    Project manager class performs operations on Projects
    */
   #completedProjects = []
   #projects = []
    constructor () {

    }
    //Add to list
    accessLocalStorage () {
        return JSON.parse(localStorage.getItem('projects'))
    }
    //Update completed projects
    addToCompleted(project){
        this.#completedProjects.push(project)
        this.removeProject(project)
    }
    addToProjectList (newProject) {
        this.#projects.push(newProject)
    }
   
    //Get list of completed projects
    getCompleted(){
        return this.#completedProjects
    }
    //get projects
    getProjects(){
        return this.#projects
    }

    //remove project from list
    removeProject(project){
        this.#projects = this.#projects.filter(element => {
            if(element === project)
                return false
            else
                return true
        })
    }
    updateLocalStorage(){
        localStorage.setItem('projects', JSON.stringify(this.#projects))
    }


}


/***/ }),

/***/ "./src/scripts/task.js":
/*!*****************************!*\
  !*** ./src/scripts/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
class Task {
    /*
        Task class create Task objects
    */

    //Task.description
    #description

    //Task.duedate
    #dueDate
    #complete = false

    //Task.priority
    constructor(title){
        this.title = title
    }
    //Edit task properties
    edit(data){
        this.title = data.title
        this.#description = this.setDescription(data.description)
        this.#dueDate = this.setDueDate(data.dueDate)
        
    }
    //return value of description
    getDescription(){
        return this.#description
    }
    //return due date
    getDueDate(){
        return this.#dueDate
    }
    //Check if complete
    isComplete(){
        return this.#complete
    }
    //Mark as complete
    markAsComplete(){
        this.#complete = true
    }
    //Mark as incomplete
    markAsIncomplete(){
        if(this.#complete)
            this.#complete = false
    }
    //initialize descripion
    setDescription(description){
        this.#description = description
    }
    //set due date
    setDueDate(dueDate){
        this.#dueDate = dueDate
    }
    toJSON () {
        return {
            "title": this.title,
            "complete": this.isComplete(),
            "description": this.getDescription(),
            "dueDate": this.getDueDate()
        }
    }
}

/***/ }),

/***/ "./src/scripts/task_manager.js":
/*!*************************************!*\
  !*** ./src/scripts/task_manager.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TaskManager)
/* harmony export */ });
class TaskManager {
    /*
    Task manager class performs operations with and on Task objects
    Used together with Task class
    */
    #taskList = []
    #completedTasks = []
    constructor () {

    }
    //Add to list
    addTask(task){
        this.#taskList.push(task)
    }
    //Update completed tasks
    addToCompleted(task){
        this.#completedTasks.push(task)
        this.removeTask(task)
    }
    //Get list of completed tasks
    getCompleted(){
        return this.#completedTasks
    }
    //get tasks
    getTasks(){
        return this.#taskList
    }
    //remove task from list
    removeTask(Task){
        this.#taskList = this.#taskList.filter(task => {
            if(task === Task)
                return false
            else
                return true
        })
    }

}


/***/ }),

/***/ "./src/images/todo-bg.jpg":
/*!********************************!*\
  !*** ./src/images/todo-bg.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "todo-bg.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + "8c55f80b8c07c2026108" + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "todo-ist--one:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			};
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunktodo_ist_one"] = self["webpackChunktodo_ist_one"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/styles.css */ "./src/styles/styles.css");
/* harmony import */ var _dom_manager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom_manager.js */ "./src/scripts/dom_manager.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project.js */ "./src/scripts/project.js");
/* harmony import */ var _project_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project_manager */ "./src/scripts/project_manager.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./task */ "./src/scripts/task.js");
/* harmony import */ var _task_manager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./task_manager */ "./src/scripts/task_manager.js");







// localStorage.removeItem('projects')
const domManager = new _dom_manager_js__WEBPACK_IMPORTED_MODULE_1__["default"]()
const projectManager = new _project_manager__WEBPACK_IMPORTED_MODULE_3__["default"]()

window.location.hash =''
//Create Project list container
const projectList = document.createElement('div')
projectList.className = 'flex flex-col gap-2'


function displayNewProject(project){
    
    //Display Default Project
    const container = domManager.createProjectContainer(project.name)
    // Append to list
    projectList.appendChild(container)
    
    // addEventListenerToProject()
}
function displayProjectCredentials(project){
    const projectHeader = domManager.createProjectHeader(project)
    container.appendChild(projectHeader)
    //Project description and new task btn
    const descNBtnContainer = domManager.createContainer()
    descNBtnContainer.className = 'flex flex-row justify-between items-center w-full'
    //DESCRIPTION
    const projectDescription = domManager.createProjectDescription(project.getDescription())
    projectDescription.id = 'project-description'
    //Display description
    descNBtnContainer.appendChild(projectDescription)
    
    //  New task button
    const button = document.createElement('button')
    button.textContent = 'New Task'
    button.className = 'bg-slate-300 text-blue-700 py-2 px-4 rounded-md hover:bg-slate-100'
    button.id = 'new-task-btn'
    
    //Display btn
    descNBtnContainer.appendChild(button)
    container.appendChild(descNBtnContainer)
    
}
//Display more an=out the project
function displayTasksContainer(){
    //Tasks container
    const tasksContainer = domManager.createContainer()
    tasksContainer.classList.add('w-full', 'bg-blue-600', 'grid', 'grid-2', 'gap-4')
    tasksContainer.id = 'task-container'
    
    //No tasks to display
    const par = document.createElement('p')
    par.className = 'text-slate-200 text-center text-3xl font-medium'
    par.id = 'no-tasks'
    par.textContent = 'No Tasks Listed Here'
    tasksContainer.appendChild(par)
     
    container.appendChild(tasksContainer)
    }
function displayCurrentProject (project) {
    document.querySelector('#content-container #project-name').textContent = project.name
    document.querySelector('#project-description p').textContent = project.description
}

//Get currenttly displaying project from localstorage
function getCurrentProject(){
    const projects = projectManager.accessLocalStorage()
    const projectName = window.location.hash.substring(1).replaceAll('-', ' ')
    if(projectName)
        return projects.find(project => project.name === projectName)
    else 
        return projects.find(project => project.name === 'Today')
}
//Store project in local storage
function saveProject (project) {
    projectManager.addToProjectList(project.toJSON())
    projectManager.updateLocalStorage()
    
}
// Create and display header
const header = domManager.createHeader()
    const logo = domManager.createLogo('Plansen')
    header.appendChild(logo)
    document.body.prepend(header)

    //sidebar
const sidebar = domManager.createSidebar()
domManager.render(sidebar)
sidebar.id = 'main-side-bar'

//Content container
const container = domManager.createContainer()
container.classList.add('bg-blue-700', 'flex','flex-col', 'items-start', 'justify-start', 'gap-2')
    container.id = 'content-container'
    domManager.render(container)
    
    //Footer
const footer = domManager.createFooter()
sidebar.appendChild(footer)

//User profile
const profile = domManager.createUserProfile('The Architech')
header.appendChild(profile)
header.classList.add('flex', 'flex-row', 'justify-between', 'items-center')

//Import profile pic
    __webpack_require__.e(/*! import() */ "src_images_profile-pic_png").then(__webpack_require__.t.bind(__webpack_require__, /*! ../images/profile-pic.png */ "./src/images/profile-pic.png", 17)).then(({default:pic}) =>{
        document.querySelector('#profile-picture').src = pic
    }).catch((error)=>console.error(`Error ocuured while importing profile pic: ${error}`))

    //Projects header
    const projectsHeader = domManager.createContainer()
    projectsHeader.className = 'flex flex-row items-center justify-between bg-blue-600 px-4 py-2'
    projectsHeader.id = 'projects-header'

    //Heading
    const heading = domManager.createHeading('My Projects')
    heading.classList.add('font-medium', 'w-full')
    projectsHeader.appendChild(heading)
    
    // New project Add button
    const addBtn = domManager.createAddButton()
    addBtn.id = 'new-project-btn'
    projectsHeader.appendChild(addBtn)
    
    sidebar.appendChild(projectsHeader) 

//Create default Project
const defaultProject = new _project_js__WEBPACK_IMPORTED_MODULE_2__["default"]('Today')
    defaultProject.setDescription('Today\'s Activities')
    projectManager.addToProjectList(defaultProject.toJSON()) //Add to projects
    displayNewProject(defaultProject)
    sidebar.appendChild(projectList)

    //Display default project details
    displayProjectCredentials(defaultProject)
    displayTasksContainer()

    
//Create new Project
// ___________________________________________________________________
window.addEventListener('load', (e) =>{
    
    //Access and display projects from localstorage
    const projects = projectManager.accessLocalStorage()
    if(Array.isArray(projects)){
        projectList.innerHTML = ''
        projects.forEach(project =>{
            displayNewProject(project)
        })
    }
    else{
        projectManager.updateLocalStorage()
    }

    //Create new Project
    addBtn.addEventListener('click', (e) =>{
        //project manager create new project
        domManager.displayForm('#project-form')
        //Close form on CANCELL
        document.querySelector('#hide-project-form').addEventListener('click', () =>{
            domManager.hideForm('#project-form')
        })
    })
    //Add event listener to form
    document.querySelector('form#project-form').addEventListener('submit', (event) =>{
        event.preventDefault()
        const data = domManager.getFormData('#project-form')//Get data
        const project = new _project_js__WEBPACK_IMPORTED_MODULE_2__["default"](data[0])//Create new Project
        project.setDescription(data[1])
        saveProject(project) //Add to project list and update localStorage
        displayNewProject(project)//Display Project container
        domManager.hideForm('#project-form') //hide project form
    })

    //NewTask
    document.querySelector('#new-task-btn').addEventListener('click', () =>{
        domManager.displayForm('#task-form')
        //Hide form on btn click
        document.querySelector('#hide-task-form').addEventListener('click', () =>{
            domManager.hideForm('#task-form')
        })
        //Create task
        document.querySelector('form#task-form').addEventListener('submit', (e) =>{
            e.preventDefault()
            //get data
            const input = domManager.getFormData('#task-form')

            //Initialize data object
            const data = {
                title: input[0],
                description: input[1],
                dueDate: input[2]
            }
           //Get current project
            const currentProject = getCurrentProject()
            console.log(data)
            domManager.hideForm('#task-form')
        })
    })
    // addEventListenerToProject()//Add event listener to project every time page is loaded
})
//Display Current project
window.addEventListener('hashchange', () =>{
    const currentProject = getCurrentProject()
    displayCurrentProject(currentProject)
})
window.dispatchEvent(new Event('hashchange'))
// console.log(getCurrentProject())



/**_____________________________________________________________________________________________________
 *Open Project to view project details 
 * 
 * When Project is clicked, the Dom is populated with project deatails
 * */    

   
    

    
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFdBQVcsWUFBWSxXQUFXLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sTUFBTSxNQUFNLE1BQU0sVUFBVSxNQUFNLE9BQU8sTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sT0FBTyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxNQUFNLE1BQU0saUJBQWlCLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLE9BQU8sWUFBWSxXQUFXLFVBQVUsTUFBTSxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sT0FBTyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sTUFBTSxNQUFNLFVBQVUsT0FBTyxNQUFNLE1BQU0sS0FBSyxVQUFVLE9BQU8sUUFBUSxNQUFNLFlBQVksVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLE1BQU0sTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLGFBQWEsTUFBTSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM5Q2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDNURlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Q7V0FDdEQsc0NBQXNDLGlFQUFpRTtXQUN2RztXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7Ozs7O1dDUkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NKQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHVCQUF1Qiw0QkFBNEI7V0FDbkQ7V0FDQTtXQUNBO1dBQ0EsaUJBQWlCLG9CQUFvQjtXQUNyQztXQUNBLG1HQUFtRyxZQUFZO1dBQy9HO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxtRUFBbUUsaUNBQWlDO1dBQ3BHO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ3hDQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQzs7V0FFakM7V0FDQTtXQUNBO1dBQ0EsS0FBSztXQUNMLGVBQWU7V0FDZjtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU07V0FDTjtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7V0NyRkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTZCO0FBQ1k7QUFDUDtBQUNZO0FBQ3JCO0FBQ2U7QUFDeEM7QUFDQTtBQUNBLHVCQUF1Qix1REFBVTtBQUNqQywyQkFBMkIsd0RBQWM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw4TEFBbUMsUUFBUSxZQUFZO0FBQzNEO0FBQ0EsS0FBSyw2RUFBNkUsTUFBTTtBQUN4RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixtREFBTztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsbURBQU87QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1pc3QtLW9uZS8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90b2RvLWlzdC0tb25lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWlzdC0tb25lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWlzdC0tb25lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1pc3QtLW9uZS8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzcz9lNDViIiwid2VicGFjazovL3RvZG8taXN0LS1vbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1pc3QtLW9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1pc3QtLW9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWlzdC0tb25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8taXN0LS1vbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWlzdC0tb25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1pc3QtLW9uZS8uL3NyYy9zY3JpcHRzL2RvbV9tYW5hZ2VyLmpzIiwid2VicGFjazovL3RvZG8taXN0LS1vbmUvLi9zcmMvc2NyaXB0cy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8taXN0LS1vbmUvLi9zcmMvc2NyaXB0cy9wcm9qZWN0X21hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1pc3QtLW9uZS8uL3NyYy9zY3JpcHRzL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1pc3QtLW9uZS8uL3NyYy9zY3JpcHRzL3Rhc2tfbWFuYWdlci5qcyIsIndlYnBhY2s6Ly90b2RvLWlzdC0tb25lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8taXN0LS1vbmUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1pc3QtLW9uZS93ZWJwYWNrL3J1bnRpbWUvY3JlYXRlIGZha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWlzdC0tb25lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWlzdC0tb25lL3dlYnBhY2svcnVudGltZS9lbnN1cmUgY2h1bmsiLCJ3ZWJwYWNrOi8vdG9kby1pc3QtLW9uZS93ZWJwYWNrL3J1bnRpbWUvZ2V0IGphdmFzY3JpcHQgY2h1bmsgZmlsZW5hbWUiLCJ3ZWJwYWNrOi8vdG9kby1pc3QtLW9uZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8taXN0LS1vbmUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWlzdC0tb25lL3dlYnBhY2svcnVudGltZS9sb2FkIHNjcmlwdCIsIndlYnBhY2s6Ly90b2RvLWlzdC0tb25lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1pc3QtLW9uZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWlzdC0tb25lL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8taXN0LS1vbmUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8taXN0LS1vbmUvLi9zcmMvc2NyaXB0cy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL3RvZG8tYmcuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLypcXHJcXG4hIHRhaWx3aW5kY3NzIHYzLjIuNyB8IE1JVCBMaWNlbnNlIHwgaHR0cHM6Ly90YWlsd2luZGNzcy5jb21cXHJcXG4qL1xcclxcblxcclxcbi8qXFxyXFxuMS4gUHJldmVudCBwYWRkaW5nIGFuZCBib3JkZXIgZnJvbSBhZmZlY3RpbmcgZWxlbWVudCB3aWR0aC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvNClcXHJcXG4yLiBBbGxvdyBhZGRpbmcgYSBib3JkZXIgdG8gYW4gZWxlbWVudCBieSBqdXN0IGFkZGluZyBhIGJvcmRlci13aWR0aC4gKGh0dHBzOi8vZ2l0aHViLmNvbS90YWlsd2luZGNzcy90YWlsd2luZGNzcy9wdWxsLzExNilcXHJcXG4qL1xcclxcblxcclxcbiosXFxyXFxuOjpiZWZvcmUsXFxyXFxuOjphZnRlciB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgLyogMSAqL1xcclxcbiAgYm9yZGVyLXdpZHRoOiAwO1xcclxcbiAgLyogMiAqL1xcclxcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG4gIC8qIDIgKi9cXHJcXG4gIGJvcmRlci1jb2xvcjogI2U1ZTdlYjtcXHJcXG4gIC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuOjpiZWZvcmUsXFxyXFxuOjphZnRlciB7XFxyXFxuICAtLXR3LWNvbnRlbnQ6ICcnO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbjEuIFVzZSBhIGNvbnNpc3RlbnQgc2Vuc2libGUgbGluZS1oZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcclxcbjIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcclxcbjMuIFVzZSBhIG1vcmUgcmVhZGFibGUgdGFiIHNpemUuXFxyXFxuNC4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBgc2Fuc2AgZm9udC1mYW1pbHkgYnkgZGVmYXVsdC5cXHJcXG41LiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIGBzYW5zYCBmb250LWZlYXR1cmUtc2V0dGluZ3MgYnkgZGVmYXVsdC5cXHJcXG4qL1xcclxcblxcclxcbmh0bWwge1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXHJcXG4gIC8qIDEgKi9cXHJcXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXHJcXG4gIC8qIDIgKi9cXHJcXG4gIC1tb3otdGFiLXNpemU6IDQ7XFxyXFxuICAvKiAzICovXFxyXFxuICAtby10YWItc2l6ZTogNDtcXHJcXG4gICAgIHRhYi1zaXplOiA0O1xcclxcbiAgLyogMyAqL1xcclxcbiAgZm9udC1mYW1pbHk6IHVpLXNhbnMtc2VyaWYsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEFyaWFsLCBcXFwiTm90byBTYW5zXFxcIiwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCIsIFxcXCJOb3RvIENvbG9yIEVtb2ppXFxcIjtcXHJcXG4gIC8qIDQgKi9cXHJcXG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogbm9ybWFsO1xcclxcbiAgLyogNSAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbjEuIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cXHJcXG4yLiBJbmhlcml0IGxpbmUtaGVpZ2h0IGZyb20gYGh0bWxgIHNvIHVzZXJzIGNhbiBzZXQgdGhlbSBhcyBhIGNsYXNzIGRpcmVjdGx5IG9uIHRoZSBgaHRtbGAgZWxlbWVudC5cXHJcXG4qL1xcclxcblxcclxcbmJvZHkge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgLyogMSAqL1xcclxcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxyXFxuICAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuMS4gQWRkIHRoZSBjb3JyZWN0IGhlaWdodCBpbiBGaXJlZm94LlxcclxcbjIuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIG9mIGJvcmRlciBjb2xvciBpbiBGaXJlZm94LiAoaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTkwNjU1KVxcclxcbjMuIEVuc3VyZSBob3Jpem9udGFsIHJ1bGVzIGFyZSB2aXNpYmxlIGJ5IGRlZmF1bHQuXFxyXFxuKi9cXHJcXG5cXHJcXG5ociB7XFxyXFxuICBoZWlnaHQ6IDA7XFxyXFxuICAvKiAxICovXFxyXFxuICBjb2xvcjogaW5oZXJpdDtcXHJcXG4gIC8qIDIgKi9cXHJcXG4gIGJvcmRlci10b3Atd2lkdGg6IDFweDtcXHJcXG4gIC8qIDMgKi9cXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5BZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXHJcXG4qL1xcclxcblxcclxcbmFiYnI6d2hlcmUoW3RpdGxlXSkge1xcclxcbiAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XFxyXFxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5SZW1vdmUgdGhlIGRlZmF1bHQgZm9udCBzaXplIGFuZCB3ZWlnaHQgZm9yIGhlYWRpbmdzLlxcclxcbiovXFxyXFxuXFxyXFxuaDEsXFxyXFxuaDIsXFxyXFxuaDMsXFxyXFxuaDQsXFxyXFxuaDUsXFxyXFxuaDYge1xcclxcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcclxcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuUmVzZXQgbGlua3MgdG8gb3B0aW1pemUgZm9yIG9wdC1pbiBzdHlsaW5nIGluc3RlYWQgb2Ygb3B0LW91dC5cXHJcXG4qL1xcclxcblxcclxcbmEge1xcclxcbiAgY29sb3I6IGluaGVyaXQ7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIEVkZ2UgYW5kIFNhZmFyaS5cXHJcXG4qL1xcclxcblxcclxcbmIsXFxyXFxuc3Ryb25nIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuMS4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBgbW9ub2AgZm9udCBmYW1pbHkgYnkgZGVmYXVsdC5cXHJcXG4yLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuKi9cXHJcXG5cXHJcXG5jb2RlLFxcclxcbmtiZCxcXHJcXG5zYW1wLFxcclxcbnByZSB7XFxyXFxuICBmb250LWZhbWlseTogdWktbW9ub3NwYWNlLCBTRk1vbm8tUmVndWxhciwgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsIFxcXCJMaWJlcmF0aW9uIE1vbm9cXFwiLCBcXFwiQ291cmllciBOZXdcXFwiLCBtb25vc3BhY2U7XFxyXFxuICAvKiAxICovXFxyXFxuICBmb250LXNpemU6IDFlbTtcXHJcXG4gIC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5BZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXHJcXG4qL1xcclxcblxcclxcbnNtYWxsIHtcXHJcXG4gIGZvbnQtc2l6ZTogODAlO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcblByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuKi9cXHJcXG5cXHJcXG5zdWIsXFxyXFxuc3VwIHtcXHJcXG4gIGZvbnQtc2l6ZTogNzUlO1xcclxcbiAgbGluZS1oZWlnaHQ6IDA7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxyXFxufVxcclxcblxcclxcbnN1YiB7XFxyXFxuICBib3R0b206IC0wLjI1ZW07XFxyXFxufVxcclxcblxcclxcbnN1cCB7XFxyXFxuICB0b3A6IC0wLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4xLiBSZW1vdmUgdGV4dCBpbmRlbnRhdGlvbiBmcm9tIHRhYmxlIGNvbnRlbnRzIGluIENocm9tZSBhbmQgU2FmYXJpLiAoaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTk5MDg4LCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MjAxMjk3KVxcclxcbjIuIENvcnJlY3QgdGFibGUgYm9yZGVyIGNvbG9yIGluaGVyaXRhbmNlIGluIGFsbCBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTkzNTcyOSwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE5NTAxNilcXHJcXG4zLiBSZW1vdmUgZ2FwcyBiZXR3ZWVuIHRhYmxlIGJvcmRlcnMgYnkgZGVmYXVsdC5cXHJcXG4qL1xcclxcblxcclxcbnRhYmxlIHtcXHJcXG4gIHRleHQtaW5kZW50OiAwO1xcclxcbiAgLyogMSAqL1xcclxcbiAgYm9yZGVyLWNvbG9yOiBpbmhlcml0O1xcclxcbiAgLyogMiAqL1xcclxcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXHJcXG4gIC8qIDMgKi9cXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4xLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXHJcXG4yLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxyXFxuMy4gUmVtb3ZlIGRlZmF1bHQgcGFkZGluZyBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuKi9cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxuaW5wdXQsXFxyXFxub3B0Z3JvdXAsXFxyXFxuc2VsZWN0LFxcclxcbnRleHRhcmVhIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcbiAgLyogMSAqL1xcclxcbiAgZm9udC1zaXplOiAxMDAlO1xcclxcbiAgLyogMSAqL1xcclxcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XFxyXFxuICAvKiAxICovXFxyXFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcXHJcXG4gIC8qIDEgKi9cXHJcXG4gIGNvbG9yOiBpbmhlcml0O1xcclxcbiAgLyogMSAqL1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgLyogMiAqL1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIC8qIDMgKi9cXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5SZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UgYW5kIEZpcmVmb3guXFxyXFxuKi9cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxuc2VsZWN0IHtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbjEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxyXFxuMi4gUmVtb3ZlIGRlZmF1bHQgYnV0dG9uIHN0eWxlcy5cXHJcXG4qL1xcclxcblxcclxcbmJ1dHRvbixcXHJcXG5bdHlwZT0nYnV0dG9uJ10sXFxyXFxuW3R5cGU9J3Jlc2V0J10sXFxyXFxuW3R5cGU9J3N1Ym1pdCddIHtcXHJcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcclxcbiAgLyogMSAqL1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAvKiAyICovXFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xcclxcbiAgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcblVzZSB0aGUgbW9kZXJuIEZpcmVmb3ggZm9jdXMgc3R5bGUgZm9yIGFsbCBmb2N1c2FibGUgZWxlbWVudHMuXFxyXFxuKi9cXHJcXG5cXHJcXG46LW1vei1mb2N1c3Jpbmcge1xcclxcbiAgb3V0bGluZTogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5SZW1vdmUgdGhlIGFkZGl0aW9uYWwgYDppbnZhbGlkYCBzdHlsZXMgaW4gRmlyZWZveC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL2dlY2tvLWRldi9ibG9iLzJmOWVhY2Q5ZDNkOTk1YzkzN2I0MjUxYTU1NTdkOTVkNDk0YzliZTEvbGF5b3V0L3N0eWxlL3Jlcy9mb3Jtcy5jc3MjTDcyOC1MNzM3KVxcclxcbiovXFxyXFxuXFxyXFxuOi1tb3otdWktaW52YWxpZCB7XFxyXFxuICBib3gtc2hhZG93OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbkFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lIGFuZCBGaXJlZm94LlxcclxcbiovXFxyXFxuXFxyXFxucHJvZ3Jlc3Mge1xcclxcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbkNvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIFNhZmFyaS5cXHJcXG4qL1xcclxcblxcclxcbjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXHJcXG46Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbjEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcclxcbjIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcclxcbiovXFxyXFxuXFxyXFxuW3R5cGU9J3NlYXJjaCddIHtcXHJcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xcclxcbiAgLyogMSAqL1xcclxcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7XFxyXFxuICAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcclxcbiovXFxyXFxuXFxyXFxuOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXHJcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4xLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcclxcbjIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXHJcXG4qL1xcclxcblxcclxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcclxcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxyXFxuICAvKiAxICovXFxyXFxuICBmb250OiBpbmhlcml0O1xcclxcbiAgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbkFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIENocm9tZSBhbmQgU2FmYXJpLlxcclxcbiovXFxyXFxuXFxyXFxuc3VtbWFyeSB7XFxyXFxuICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuUmVtb3ZlcyB0aGUgZGVmYXVsdCBzcGFjaW5nIGFuZCBib3JkZXIgZm9yIGFwcHJvcHJpYXRlIGVsZW1lbnRzLlxcclxcbiovXFxyXFxuXFxyXFxuYmxvY2txdW90ZSxcXHJcXG5kbCxcXHJcXG5kZCxcXHJcXG5oMSxcXHJcXG5oMixcXHJcXG5oMyxcXHJcXG5oNCxcXHJcXG5oNSxcXHJcXG5oNixcXHJcXG5ocixcXHJcXG5maWd1cmUsXFxyXFxucCxcXHJcXG5wcmUge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5maWVsZHNldCB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5sZWdlbmQge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxub2wsXFxyXFxudWwsXFxyXFxubWVudSB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5QcmV2ZW50IHJlc2l6aW5nIHRleHRhcmVhcyBob3Jpem9udGFsbHkgYnkgZGVmYXVsdC5cXHJcXG4qL1xcclxcblxcclxcbnRleHRhcmVhIHtcXHJcXG4gIHJlc2l6ZTogdmVydGljYWw7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuMS4gUmVzZXQgdGhlIGRlZmF1bHQgcGxhY2Vob2xkZXIgb3BhY2l0eSBpbiBGaXJlZm94LiAoaHR0cHM6Ly9naXRodWIuY29tL3RhaWx3aW5kbGFicy90YWlsd2luZGNzcy9pc3N1ZXMvMzMwMClcXHJcXG4yLiBTZXQgdGhlIGRlZmF1bHQgcGxhY2Vob2xkZXIgY29sb3IgdG8gdGhlIHVzZXIncyBjb25maWd1cmVkIGdyYXkgNDAwIGNvbG9yLlxcclxcbiovXFxyXFxuXFxyXFxuaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIsIHRleHRhcmVhOjotbW96LXBsYWNlaG9sZGVyIHtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxuICAvKiAxICovXFxyXFxuICBjb2xvcjogIzljYTNhZjtcXHJcXG4gIC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQ6OnBsYWNlaG9sZGVyLFxcclxcbnRleHRhcmVhOjpwbGFjZWhvbGRlciB7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbiAgLyogMSAqL1xcclxcbiAgY29sb3I6ICM5Y2EzYWY7XFxyXFxuICAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuU2V0IHRoZSBkZWZhdWx0IGN1cnNvciBmb3IgYnV0dG9ucy5cXHJcXG4qL1xcclxcblxcclxcbmJ1dHRvbixcXHJcXG5bcm9sZT1cXFwiYnV0dG9uXFxcIl0ge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbk1ha2Ugc3VyZSBkaXNhYmxlZCBidXR0b25zIGRvbid0IGdldCB0aGUgcG9pbnRlciBjdXJzb3IuXFxyXFxuKi9cXHJcXG5cXHJcXG46ZGlzYWJsZWQge1xcclxcbiAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbjEuIE1ha2UgcmVwbGFjZWQgZWxlbWVudHMgYGRpc3BsYXk6IGJsb2NrYCBieSBkZWZhdWx0LiAoaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy8xNClcXHJcXG4yLiBBZGQgYHZlcnRpY2FsLWFsaWduOiBtaWRkbGVgIHRvIGFsaWduIHJlcGxhY2VkIGVsZW1lbnRzIG1vcmUgc2Vuc2libHkgYnkgZGVmYXVsdC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9qZW5zaW1tb25zL2Nzc3JlbWVkeS9pc3N1ZXMvMTQjaXNzdWVjb21tZW50LTYzNDkzNDIxMClcXHJcXG4gICBUaGlzIGNhbiB0cmlnZ2VyIGEgcG9vcmx5IGNvbnNpZGVyZWQgbGludCBlcnJvciBpbiBzb21lIHRvb2xzIGJ1dCBpcyBpbmNsdWRlZCBieSBkZXNpZ24uXFxyXFxuKi9cXHJcXG5cXHJcXG5pbWcsXFxyXFxuc3ZnLFxcclxcbnZpZGVvLFxcclxcbmNhbnZhcyxcXHJcXG5hdWRpbyxcXHJcXG5pZnJhbWUsXFxyXFxuZW1iZWQsXFxyXFxub2JqZWN0IHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgLyogMSAqL1xcclxcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG4gIC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5Db25zdHJhaW4gaW1hZ2VzIGFuZCB2aWRlb3MgdG8gdGhlIHBhcmVudCB3aWR0aCBhbmQgcHJlc2VydmUgdGhlaXIgaW50cmluc2ljIGFzcGVjdCByYXRpby4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvMTQpXFxyXFxuKi9cXHJcXG5cXHJcXG5pbWcsXFxyXFxudmlkZW8ge1xcclxcbiAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNYWtlIGVsZW1lbnRzIHdpdGggdGhlIEhUTUwgaGlkZGVuIGF0dHJpYnV0ZSBzdGF5IGhpZGRlbiBieSBkZWZhdWx0ICovXFxyXFxuXFxyXFxuW2hpZGRlbl0ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuKiwgOjpiZWZvcmUsIDo6YWZ0ZXIge1xcclxcbiAgLS10dy1ib3JkZXItc3BhY2luZy14OiAwO1xcclxcbiAgLS10dy1ib3JkZXItc3BhY2luZy15OiAwO1xcclxcbiAgLS10dy10cmFuc2xhdGUteDogMDtcXHJcXG4gIC0tdHctdHJhbnNsYXRlLXk6IDA7XFxyXFxuICAtLXR3LXJvdGF0ZTogMDtcXHJcXG4gIC0tdHctc2tldy14OiAwO1xcclxcbiAgLS10dy1za2V3LXk6IDA7XFxyXFxuICAtLXR3LXNjYWxlLXg6IDE7XFxyXFxuICAtLXR3LXNjYWxlLXk6IDE7XFxyXFxuICAtLXR3LXBhbi14OiAgO1xcclxcbiAgLS10dy1wYW4teTogIDtcXHJcXG4gIC0tdHctcGluY2gtem9vbTogIDtcXHJcXG4gIC0tdHctc2Nyb2xsLXNuYXAtc3RyaWN0bmVzczogcHJveGltaXR5O1xcclxcbiAgLS10dy1vcmRpbmFsOiAgO1xcclxcbiAgLS10dy1zbGFzaGVkLXplcm86ICA7XFxyXFxuICAtLXR3LW51bWVyaWMtZmlndXJlOiAgO1xcclxcbiAgLS10dy1udW1lcmljLXNwYWNpbmc6ICA7XFxyXFxuICAtLXR3LW51bWVyaWMtZnJhY3Rpb246ICA7XFxyXFxuICAtLXR3LXJpbmctaW5zZXQ6ICA7XFxyXFxuICAtLXR3LXJpbmctb2Zmc2V0LXdpZHRoOiAwcHg7XFxyXFxuICAtLXR3LXJpbmctb2Zmc2V0LWNvbG9yOiAjZmZmO1xcclxcbiAgLS10dy1yaW5nLWNvbG9yOiByZ2IoNTkgMTMwIDI0NiAvIDAuNSk7XFxyXFxuICAtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdzogMCAwICMwMDAwO1xcclxcbiAgLS10dy1yaW5nLXNoYWRvdzogMCAwICMwMDAwO1xcclxcbiAgLS10dy1zaGFkb3c6IDAgMCAjMDAwMDtcXHJcXG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IDAgMCAjMDAwMDtcXHJcXG4gIC0tdHctYmx1cjogIDtcXHJcXG4gIC0tdHctYnJpZ2h0bmVzczogIDtcXHJcXG4gIC0tdHctY29udHJhc3Q6ICA7XFxyXFxuICAtLXR3LWdyYXlzY2FsZTogIDtcXHJcXG4gIC0tdHctaHVlLXJvdGF0ZTogIDtcXHJcXG4gIC0tdHctaW52ZXJ0OiAgO1xcclxcbiAgLS10dy1zYXR1cmF0ZTogIDtcXHJcXG4gIC0tdHctc2VwaWE6ICA7XFxyXFxuICAtLXR3LWRyb3Atc2hhZG93OiAgO1xcclxcbiAgLS10dy1iYWNrZHJvcC1ibHVyOiAgO1xcclxcbiAgLS10dy1iYWNrZHJvcC1icmlnaHRuZXNzOiAgO1xcclxcbiAgLS10dy1iYWNrZHJvcC1jb250cmFzdDogIDtcXHJcXG4gIC0tdHctYmFja2Ryb3AtZ3JheXNjYWxlOiAgO1xcclxcbiAgLS10dy1iYWNrZHJvcC1odWUtcm90YXRlOiAgO1xcclxcbiAgLS10dy1iYWNrZHJvcC1pbnZlcnQ6ICA7XFxyXFxuICAtLXR3LWJhY2tkcm9wLW9wYWNpdHk6ICA7XFxyXFxuICAtLXR3LWJhY2tkcm9wLXNhdHVyYXRlOiAgO1xcclxcbiAgLS10dy1iYWNrZHJvcC1zZXBpYTogIDtcXHJcXG59XFxyXFxuXFxyXFxuOjpiYWNrZHJvcCB7XFxyXFxuICAtLXR3LWJvcmRlci1zcGFjaW5nLXg6IDA7XFxyXFxuICAtLXR3LWJvcmRlci1zcGFjaW5nLXk6IDA7XFxyXFxuICAtLXR3LXRyYW5zbGF0ZS14OiAwO1xcclxcbiAgLS10dy10cmFuc2xhdGUteTogMDtcXHJcXG4gIC0tdHctcm90YXRlOiAwO1xcclxcbiAgLS10dy1za2V3LXg6IDA7XFxyXFxuICAtLXR3LXNrZXcteTogMDtcXHJcXG4gIC0tdHctc2NhbGUteDogMTtcXHJcXG4gIC0tdHctc2NhbGUteTogMTtcXHJcXG4gIC0tdHctcGFuLXg6ICA7XFxyXFxuICAtLXR3LXBhbi15OiAgO1xcclxcbiAgLS10dy1waW5jaC16b29tOiAgO1xcclxcbiAgLS10dy1zY3JvbGwtc25hcC1zdHJpY3RuZXNzOiBwcm94aW1pdHk7XFxyXFxuICAtLXR3LW9yZGluYWw6ICA7XFxyXFxuICAtLXR3LXNsYXNoZWQtemVybzogIDtcXHJcXG4gIC0tdHctbnVtZXJpYy1maWd1cmU6ICA7XFxyXFxuICAtLXR3LW51bWVyaWMtc3BhY2luZzogIDtcXHJcXG4gIC0tdHctbnVtZXJpYy1mcmFjdGlvbjogIDtcXHJcXG4gIC0tdHctcmluZy1pbnNldDogIDtcXHJcXG4gIC0tdHctcmluZy1vZmZzZXQtd2lkdGg6IDBweDtcXHJcXG4gIC0tdHctcmluZy1vZmZzZXQtY29sb3I6ICNmZmY7XFxyXFxuICAtLXR3LXJpbmctY29sb3I6IHJnYig1OSAxMzAgMjQ2IC8gMC41KTtcXHJcXG4gIC0tdHctcmluZy1vZmZzZXQtc2hhZG93OiAwIDAgIzAwMDA7XFxyXFxuICAtLXR3LXJpbmctc2hhZG93OiAwIDAgIzAwMDA7XFxyXFxuICAtLXR3LXNoYWRvdzogMCAwICMwMDAwO1xcclxcbiAgLS10dy1zaGFkb3ctY29sb3JlZDogMCAwICMwMDAwO1xcclxcbiAgLS10dy1ibHVyOiAgO1xcclxcbiAgLS10dy1icmlnaHRuZXNzOiAgO1xcclxcbiAgLS10dy1jb250cmFzdDogIDtcXHJcXG4gIC0tdHctZ3JheXNjYWxlOiAgO1xcclxcbiAgLS10dy1odWUtcm90YXRlOiAgO1xcclxcbiAgLS10dy1pbnZlcnQ6ICA7XFxyXFxuICAtLXR3LXNhdHVyYXRlOiAgO1xcclxcbiAgLS10dy1zZXBpYTogIDtcXHJcXG4gIC0tdHctZHJvcC1zaGFkb3c6ICA7XFxyXFxuICAtLXR3LWJhY2tkcm9wLWJsdXI6ICA7XFxyXFxuICAtLXR3LWJhY2tkcm9wLWJyaWdodG5lc3M6ICA7XFxyXFxuICAtLXR3LWJhY2tkcm9wLWNvbnRyYXN0OiAgO1xcclxcbiAgLS10dy1iYWNrZHJvcC1ncmF5c2NhbGU6ICA7XFxyXFxuICAtLXR3LWJhY2tkcm9wLWh1ZS1yb3RhdGU6ICA7XFxyXFxuICAtLXR3LWJhY2tkcm9wLWludmVydDogIDtcXHJcXG4gIC0tdHctYmFja2Ryb3Atb3BhY2l0eTogIDtcXHJcXG4gIC0tdHctYmFja2Ryb3Atc2F0dXJhdGU6ICA7XFxyXFxuICAtLXR3LWJhY2tkcm9wLXNlcGlhOiAgO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogNjQwcHgpIHtcXHJcXG4gIC5jb250YWluZXIge1xcclxcbiAgICBtYXgtd2lkdGg6IDY0MHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXHJcXG4gIC5jb250YWluZXIge1xcclxcbiAgICBtYXgtd2lkdGg6IDc2OHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XFxyXFxuICAuY29udGFpbmVyIHtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMDI0cHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiAxMjgwcHgpIHtcXHJcXG4gIC5jb250YWluZXIge1xcclxcbiAgICBtYXgtd2lkdGg6IDEyODBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDE1MzZweCkge1xcclxcbiAgLmNvbnRhaW5lciB7XFxyXFxuICAgIG1heC13aWR0aDogMTUzNnB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uYWJzb2x1dGUge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ubS1hdXRvIHtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLm14LTQge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5mbGV4IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5ncmlkIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxufVxcclxcblxcclxcbi5oaWRkZW4ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnctZnVsbCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmZsZXgtcm93IHtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxufVxcclxcblxcclxcbi5mbGV4LWNvbCB7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbXMtc3RhcnQge1xcclxcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbi5pdGVtcy1jZW50ZXIge1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW1zLXN0cmV0Y2gge1xcclxcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxyXFxufVxcclxcblxcclxcbi5qdXN0aWZ5LXN0YXJ0IHtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuLmp1c3RpZnktZW5kIHtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxufVxcclxcblxcclxcbi5qdXN0aWZ5LWJldHdlZW4ge1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FwLTIge1xcclxcbiAgZ2FwOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5nYXAtNCB7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5nYXAtOCB7XFxyXFxuICBnYXA6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5yb3VuZGVkLWZ1bGwge1xcclxcbiAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucm91bmRlZC1tZCB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmJvcmRlci1iLTIge1xcclxcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYm9yZGVyLXQtMiB7XFxyXFxuICBib3JkZXItdG9wLXdpZHRoOiAycHg7XFxyXFxufVxcclxcblxcclxcbi5ib3JkZXItc29saWQge1xcclxcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG59XFxyXFxuXFxyXFxuLmJvcmRlci1ibHVlLTcwMCB7XFxyXFxuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xcclxcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMjkgNzggMjE2IC8gdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJvcmRlci13aGl0ZSB7XFxyXFxuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xcclxcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMjU1IDI1NSAyNTUgLyB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xcclxcbn1cXHJcXG5cXHJcXG4uYmctYmx1ZS02MDAge1xcclxcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM3IDk5IDIzNSAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJnLWJsdWUtNzAwIHtcXHJcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyOSA3OCAyMTYgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxyXFxufVxcclxcblxcclxcbi5iZy1yZWQtNTAwIHtcXHJcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzkgNjggNjggLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxyXFxufVxcclxcblxcclxcbi5iZy1zbGF0ZS0zMDAge1xcclxcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMyAyMTMgMjI1IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcclxcbn1cXHJcXG5cXHJcXG4uYmctc2xhdGUtNTAwIHtcXHJcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDAgMTE2IDEzOSAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJnLXRyYW5zcGFyZW50IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uYmcteWVsbG93LTUwMCB7XFxyXFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM0IDE3OSA4IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcclxcbn1cXHJcXG5cXHJcXG4ucC00IHtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5weC00IHtcXHJcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5weC04IHtcXHJcXG4gIHBhZGRpbmctbGVmdDogMnJlbTtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5weS0xNiB7XFxyXFxuICBwYWRkaW5nLXRvcDogNHJlbTtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiA0cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHktMiB7XFxyXFxuICBwYWRkaW5nLXRvcDogMC41cmVtO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnB5LTQge1xcclxcbiAgcGFkZGluZy10b3A6IDFyZW07XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnB5LTgge1xcclxcbiAgcGFkZGluZy10b3A6IDJyZW07XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnBsLTQge1xcclxcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucGwtOCB7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi50ZXh0LWNlbnRlciB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50ZXh0LTJ4bCB7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dC0zeGwge1xcclxcbiAgZm9udC1zaXplOiAxLjg3NXJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyLjI1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dC1zbSB7XFxyXFxuICBmb250LXNpemU6IDAuODc1cmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuMjVyZW07XFxyXFxufVxcclxcblxcclxcbi50ZXh0LXhsIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9udC1ib2xkIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVxcclxcblxcclxcbi5mb250LW1lZGl1bSB7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dC1ibHVlLTcwMCB7XFxyXFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXHJcXG4gIGNvbG9yOiByZ2IoMjkgNzggMjE2IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxyXFxufVxcclxcblxcclxcbi50ZXh0LXNsYXRlLTIwMCB7XFxyXFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXHJcXG4gIGNvbG9yOiByZ2IoMjI2IDIzMiAyNDAgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHQtc2xhdGUtNTAwIHtcXHJcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcclxcbiAgY29sb3I6IHJnYigxMDAgMTE2IDEzOSAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dC13aGl0ZSB7XFxyXFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXHJcXG4gIGNvbG9yOiByZ2IoMjU1IDI1NSAyNTUgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZpbHRlciB7XFxyXFxuICBmaWx0ZXI6IHZhcigtLXR3LWJsdXIpIHZhcigtLXR3LWJyaWdodG5lc3MpIHZhcigtLXR3LWNvbnRyYXN0KSB2YXIoLS10dy1ncmF5c2NhbGUpIHZhcigtLXR3LWh1ZS1yb3RhdGUpIHZhcigtLXR3LWludmVydCkgdmFyKC0tdHctc2F0dXJhdGUpIHZhcigtLXR3LXNlcGlhKSB2YXIoLS10dy1kcm9wLXNoYWRvdyk7XFxyXFxufVxcclxcblxcclxcbi50cmFuc2l0aW9uLWFsbCB7XFxyXFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBhbGw7XFxyXFxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcXHJcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDE1MG1zO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGJhY2tncm91bmQtY2xpcDogYm9yZGVyLWJveDtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICAvKiBwYWRkaW5nLXRvcDogNS40OXJlbTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAyNXZ3OyAqL1xcclxcbn1cXHJcXG5cXHJcXG5hc2lkZSB7XFxyXFxuICB3aWR0aDogMjB2dztcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogNy4zNXJlbTtcXHJcXG4gIHJpZ2h0OiAxcmVtO1xcclxcbiAgbGVmdDogMi41cmVtO1xcclxcbiAgYm90dG9tOiAxcmVtO1xcclxcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnQtY29udGFpbmVyIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogNy4zNXJlbTtcXHJcXG4gIGxlZnQ6IDI1dnc7XFxyXFxuICByaWdodDogMnJlbTtcXHJcXG4gIGhlaWdodDogNzkuNnZoO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXJ7XFxyXFxuICBib3R0b206IDFyZW07XFxyXFxufVxcclxcblxcclxcbmZvb3RlciwjcHJvamVjdHMtaGVhZGVyIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGxlZnQ6IDIuNXJlbTtcXHJcXG4gIHdpZHRoOiAyMHZ3O1xcclxcbiAgei1pbmRleDogMTAwO1xcclxcbn1cXHJcXG5cXHJcXG5mb3Jte1xcclxcbiAgd2lkdGg6IDMwdnc7XFxyXFxuICBsZWZ0OiBjYWxjKDI1dncgLSAxcmVtKTtcXHJcXG4gIHRvcDogNy4zNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMS41cmVtO1xcclxcbiAgcmlnaHQ6IDFyZW07XFxyXFxuICBsZWZ0OiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbiNuZXctcHJvamVjdC1idG57XFxyXFxuICBwYWRkaW5nLWJsb2NrOiAuNXJlbTtcXHJcXG4gIHBhZGRpbmctaW5saW5lOiAuOHJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbiNwcm9maWxlIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvZmlsZS1waWN0dXJlIHtcXHJcXG4gIHdpZHRoOiA0NXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvamVjdHMtaGVhZGVye1xcclxcbiAgdG9wOiA3LjM1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jdGFzay1jb250YWluZXJ7XFxyXFxuICBvdmVyZmxvdzogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG4jdGFzay1mb3JtIHtcXHJcXG4gIGxlZnQ6IGNhbGMoNDB2dyk7XFxyXFxuICB0b3A6IDE2LjhyZW07XFxyXFxufVxcclxcblxcclxcbi5ob3ZlclxcXFw6YmctYmx1ZS02MDA6aG92ZXIge1xcclxcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM3IDk5IDIzNSAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvdmVyXFxcXDpiZy1ibHVlLTcwMDpob3ZlciB7XFxyXFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjkgNzggMjE2IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcclxcbn1cXHJcXG5cXHJcXG4uaG92ZXJcXFxcOmJnLXJlZC03MDA6aG92ZXIge1xcclxcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4NSAyOCAyOCAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvdmVyXFxcXDpiZy1zbGF0ZS0xMDA6aG92ZXIge1xcclxcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MSAyNDUgMjQ5IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcclxcbn1cXHJcXG5cXHJcXG4uaG92ZXJcXFxcOmJnLXllbGxvdy03MDA6aG92ZXIge1xcclxcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2MSA5OCA3IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9jdXNcXFxcOm91dGxpbmUtbm9uZTpmb2N1cyB7XFxyXFxuICBvdXRsaW5lOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuICBvdXRsaW5lLW9mZnNldDogMnB4O1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0NBRUM7O0FBRUQ7OztDQUdDOztBQUVEOzs7RUFHRSxzQkFBc0I7RUFDdEIsTUFBTTtFQUNOLGVBQWU7RUFDZixNQUFNO0VBQ04sbUJBQW1CO0VBQ25CLE1BQU07RUFDTixxQkFBcUI7RUFDckIsTUFBTTtBQUNSOztBQUVBOztFQUVFLGdCQUFnQjtBQUNsQjs7QUFFQTs7Ozs7O0NBTUM7O0FBRUQ7RUFDRSxnQkFBZ0I7RUFDaEIsTUFBTTtFQUNOLDhCQUE4QjtFQUM5QixNQUFNO0VBQ04sZ0JBQWdCO0VBQ2hCLE1BQU07RUFDTixjQUFjO0tBQ1gsV0FBVztFQUNkLE1BQU07RUFDTiw0TkFBNE47RUFDNU4sTUFBTTtFQUNOLDZCQUE2QjtFQUM3QixNQUFNO0FBQ1I7O0FBRUE7OztDQUdDOztBQUVEO0VBQ0UsU0FBUztFQUNULE1BQU07RUFDTixvQkFBb0I7RUFDcEIsTUFBTTtBQUNSOztBQUVBOzs7O0NBSUM7O0FBRUQ7RUFDRSxTQUFTO0VBQ1QsTUFBTTtFQUNOLGNBQWM7RUFDZCxNQUFNO0VBQ04scUJBQXFCO0VB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b250ZW50XCI6W1wiLypcXHJcXG4hIHRhaWx3aW5kY3NzIHYzLjIuNyB8IE1JVCBMaWNlbnNlIHwgaHR0cHM6Ly90YWlsd2luZGNzcy5jb21cXHJcXG4qL1xcclxcblxcclxcbi8qXFxyXFxuMS4gUHJldmVudCBwYWRkaW5nIGFuZCBib3JkZXIgZnJvbSBhZmZlY3RpbmcgZWxlbWVudCB3aWR0aC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvNClcXHJcXG4yLiBBbGxvdyBhZGRpbmcgYSBib3JkZXIgdG8gYW4gZWxlbWVudCBieSBqdXN0IGFkZGluZyBhIGJvcmRlci13aWR0aC4gKGh0dHBzOi8vZ2l0aHViLmNvbS90YWlsd2luZGNzcy90YWlsd2luZGNzcy9wdWxsLzExNilcXHJcXG4qL1xcclxcblxcclxcbiosXFxyXFxuOjpiZWZvcmUsXFxyXFxuOjphZnRlciB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgLyogMSAqL1xcclxcbiAgYm9yZGVyLXdpZHRoOiAwO1xcclxcbiAgLyogMiAqL1xcclxcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG4gIC8qIDIgKi9cXHJcXG4gIGJvcmRlci1jb2xvcjogI2U1ZTdlYjtcXHJcXG4gIC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuOjpiZWZvcmUsXFxyXFxuOjphZnRlciB7XFxyXFxuICAtLXR3LWNvbnRlbnQ6ICcnO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbjEuIFVzZSBhIGNvbnNpc3RlbnQgc2Vuc2libGUgbGluZS1oZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcclxcbjIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcclxcbjMuIFVzZSBhIG1vcmUgcmVhZGFibGUgdGFiIHNpemUuXFxyXFxuNC4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBgc2Fuc2AgZm9udC1mYW1pbHkgYnkgZGVmYXVsdC5cXHJcXG41LiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIGBzYW5zYCBmb250LWZlYXR1cmUtc2V0dGluZ3MgYnkgZGVmYXVsdC5cXHJcXG4qL1xcclxcblxcclxcbmh0bWwge1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXHJcXG4gIC8qIDEgKi9cXHJcXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXHJcXG4gIC8qIDIgKi9cXHJcXG4gIC1tb3otdGFiLXNpemU6IDQ7XFxyXFxuICAvKiAzICovXFxyXFxuICAtby10YWItc2l6ZTogNDtcXHJcXG4gICAgIHRhYi1zaXplOiA0O1xcclxcbiAgLyogMyAqL1xcclxcbiAgZm9udC1mYW1pbHk6IHVpLXNhbnMtc2VyaWYsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEFyaWFsLCBcXFwiTm90byBTYW5zXFxcIiwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCIsIFxcXCJOb3RvIENvbG9yIEVtb2ppXFxcIjtcXHJcXG4gIC8qIDQgKi9cXHJcXG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogbm9ybWFsO1xcclxcbiAgLyogNSAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbjEuIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cXHJcXG4yLiBJbmhlcml0IGxpbmUtaGVpZ2h0IGZyb20gYGh0bWxgIHNvIHVzZXJzIGNhbiBzZXQgdGhlbSBhcyBhIGNsYXNzIGRpcmVjdGx5IG9uIHRoZSBgaHRtbGAgZWxlbWVudC5cXHJcXG4qL1xcclxcblxcclxcbmJvZHkge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgLyogMSAqL1xcclxcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxyXFxuICAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuMS4gQWRkIHRoZSBjb3JyZWN0IGhlaWdodCBpbiBGaXJlZm94LlxcclxcbjIuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIG9mIGJvcmRlciBjb2xvciBpbiBGaXJlZm94LiAoaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTkwNjU1KVxcclxcbjMuIEVuc3VyZSBob3Jpem9udGFsIHJ1bGVzIGFyZSB2aXNpYmxlIGJ5IGRlZmF1bHQuXFxyXFxuKi9cXHJcXG5cXHJcXG5ociB7XFxyXFxuICBoZWlnaHQ6IDA7XFxyXFxuICAvKiAxICovXFxyXFxuICBjb2xvcjogaW5oZXJpdDtcXHJcXG4gIC8qIDIgKi9cXHJcXG4gIGJvcmRlci10b3Atd2lkdGg6IDFweDtcXHJcXG4gIC8qIDMgKi9cXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5BZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXHJcXG4qL1xcclxcblxcclxcbmFiYnI6d2hlcmUoW3RpdGxlXSkge1xcclxcbiAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XFxyXFxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5SZW1vdmUgdGhlIGRlZmF1bHQgZm9udCBzaXplIGFuZCB3ZWlnaHQgZm9yIGhlYWRpbmdzLlxcclxcbiovXFxyXFxuXFxyXFxuaDEsXFxyXFxuaDIsXFxyXFxuaDMsXFxyXFxuaDQsXFxyXFxuaDUsXFxyXFxuaDYge1xcclxcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcclxcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuUmVzZXQgbGlua3MgdG8gb3B0aW1pemUgZm9yIG9wdC1pbiBzdHlsaW5nIGluc3RlYWQgb2Ygb3B0LW91dC5cXHJcXG4qL1xcclxcblxcclxcbmEge1xcclxcbiAgY29sb3I6IGluaGVyaXQ7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIEVkZ2UgYW5kIFNhZmFyaS5cXHJcXG4qL1xcclxcblxcclxcbmIsXFxyXFxuc3Ryb25nIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuMS4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBgbW9ub2AgZm9udCBmYW1pbHkgYnkgZGVmYXVsdC5cXHJcXG4yLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuKi9cXHJcXG5cXHJcXG5jb2RlLFxcclxcbmtiZCxcXHJcXG5zYW1wLFxcclxcbnByZSB7XFxyXFxuICBmb250LWZhbWlseTogdWktbW9ub3NwYWNlLCBTRk1vbm8tUmVndWxhciwgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsIFxcXCJMaWJlcmF0aW9uIE1vbm9cXFwiLCBcXFwiQ291cmllciBOZXdcXFwiLCBtb25vc3BhY2U7XFxyXFxuICAvKiAxICovXFxyXFxuICBmb250LXNpemU6IDFlbTtcXHJcXG4gIC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5BZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXHJcXG4qL1xcclxcblxcclxcbnNtYWxsIHtcXHJcXG4gIGZvbnQtc2l6ZTogODAlO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcblByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuKi9cXHJcXG5cXHJcXG5zdWIsXFxyXFxuc3VwIHtcXHJcXG4gIGZvbnQtc2l6ZTogNzUlO1xcclxcbiAgbGluZS1oZWlnaHQ6IDA7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxyXFxufVxcclxcblxcclxcbnN1YiB7XFxyXFxuICBib3R0b206IC0wLjI1ZW07XFxyXFxufVxcclxcblxcclxcbnN1cCB7XFxyXFxuICB0b3A6IC0wLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4xLiBSZW1vdmUgdGV4dCBpbmRlbnRhdGlvbiBmcm9tIHRhYmxlIGNvbnRlbnRzIGluIENocm9tZSBhbmQgU2FmYXJpLiAoaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTk5MDg4LCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MjAxMjk3KVxcclxcbjIuIENvcnJlY3QgdGFibGUgYm9yZGVyIGNvbG9yIGluaGVyaXRhbmNlIGluIGFsbCBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTkzNTcyOSwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE5NTAxNilcXHJcXG4zLiBSZW1vdmUgZ2FwcyBiZXR3ZWVuIHRhYmxlIGJvcmRlcnMgYnkgZGVmYXVsdC5cXHJcXG4qL1xcclxcblxcclxcbnRhYmxlIHtcXHJcXG4gIHRleHQtaW5kZW50OiAwO1xcclxcbiAgLyogMSAqL1xcclxcbiAgYm9yZGVyLWNvbG9yOiBpbmhlcml0O1xcclxcbiAgLyogMiAqL1xcclxcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXHJcXG4gIC8qIDMgKi9cXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4xLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXHJcXG4yLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxyXFxuMy4gUmVtb3ZlIGRlZmF1bHQgcGFkZGluZyBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuKi9cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxuaW5wdXQsXFxyXFxub3B0Z3JvdXAsXFxyXFxuc2VsZWN0LFxcclxcbnRleHRhcmVhIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcbiAgLyogMSAqL1xcclxcbiAgZm9udC1zaXplOiAxMDAlO1xcclxcbiAgLyogMSAqL1xcclxcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XFxyXFxuICAvKiAxICovXFxyXFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcXHJcXG4gIC8qIDEgKi9cXHJcXG4gIGNvbG9yOiBpbmhlcml0O1xcclxcbiAgLyogMSAqL1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgLyogMiAqL1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIC8qIDMgKi9cXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5SZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UgYW5kIEZpcmVmb3guXFxyXFxuKi9cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxuc2VsZWN0IHtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbjEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxyXFxuMi4gUmVtb3ZlIGRlZmF1bHQgYnV0dG9uIHN0eWxlcy5cXHJcXG4qL1xcclxcblxcclxcbmJ1dHRvbixcXHJcXG5bdHlwZT0nYnV0dG9uJ10sXFxyXFxuW3R5cGU9J3Jlc2V0J10sXFxyXFxuW3R5cGU9J3N1Ym1pdCddIHtcXHJcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcclxcbiAgLyogMSAqL1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAvKiAyICovXFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xcclxcbiAgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcblVzZSB0aGUgbW9kZXJuIEZpcmVmb3ggZm9jdXMgc3R5bGUgZm9yIGFsbCBmb2N1c2FibGUgZWxlbWVudHMuXFxyXFxuKi9cXHJcXG5cXHJcXG46LW1vei1mb2N1c3Jpbmcge1xcclxcbiAgb3V0bGluZTogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5SZW1vdmUgdGhlIGFkZGl0aW9uYWwgYDppbnZhbGlkYCBzdHlsZXMgaW4gRmlyZWZveC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL2dlY2tvLWRldi9ibG9iLzJmOWVhY2Q5ZDNkOTk1YzkzN2I0MjUxYTU1NTdkOTVkNDk0YzliZTEvbGF5b3V0L3N0eWxlL3Jlcy9mb3Jtcy5jc3MjTDcyOC1MNzM3KVxcclxcbiovXFxyXFxuXFxyXFxuOi1tb3otdWktaW52YWxpZCB7XFxyXFxuICBib3gtc2hhZG93OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbkFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lIGFuZCBGaXJlZm94LlxcclxcbiovXFxyXFxuXFxyXFxucHJvZ3Jlc3Mge1xcclxcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbkNvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIFNhZmFyaS5cXHJcXG4qL1xcclxcblxcclxcbjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXHJcXG46Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbjEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcclxcbjIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcclxcbiovXFxyXFxuXFxyXFxuW3R5cGU9J3NlYXJjaCddIHtcXHJcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xcclxcbiAgLyogMSAqL1xcclxcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7XFxyXFxuICAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcclxcbiovXFxyXFxuXFxyXFxuOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXHJcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4xLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcclxcbjIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXHJcXG4qL1xcclxcblxcclxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcclxcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxyXFxuICAvKiAxICovXFxyXFxuICBmb250OiBpbmhlcml0O1xcclxcbiAgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbkFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIENocm9tZSBhbmQgU2FmYXJpLlxcclxcbiovXFxyXFxuXFxyXFxuc3VtbWFyeSB7XFxyXFxuICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuUmVtb3ZlcyB0aGUgZGVmYXVsdCBzcGFjaW5nIGFuZCBib3JkZXIgZm9yIGFwcHJvcHJpYXRlIGVsZW1lbnRzLlxcclxcbiovXFxyXFxuXFxyXFxuYmxvY2txdW90ZSxcXHJcXG5kbCxcXHJcXG5kZCxcXHJcXG5oMSxcXHJcXG5oMixcXHJcXG5oMyxcXHJcXG5oNCxcXHJcXG5oNSxcXHJcXG5oNixcXHJcXG5ocixcXHJcXG5maWd1cmUsXFxyXFxucCxcXHJcXG5wcmUge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5maWVsZHNldCB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5sZWdlbmQge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxub2wsXFxyXFxudWwsXFxyXFxubWVudSB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5QcmV2ZW50IHJlc2l6aW5nIHRleHRhcmVhcyBob3Jpem9udGFsbHkgYnkgZGVmYXVsdC5cXHJcXG4qL1xcclxcblxcclxcbnRleHRhcmVhIHtcXHJcXG4gIHJlc2l6ZTogdmVydGljYWw7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuMS4gUmVzZXQgdGhlIGRlZmF1bHQgcGxhY2Vob2xkZXIgb3BhY2l0eSBpbiBGaXJlZm94LiAoaHR0cHM6Ly9naXRodWIuY29tL3RhaWx3aW5kbGFicy90YWlsd2luZGNzcy9pc3N1ZXMvMzMwMClcXHJcXG4yLiBTZXQgdGhlIGRlZmF1bHQgcGxhY2Vob2xkZXIgY29sb3IgdG8gdGhlIHVzZXIncyBjb25maWd1cmVkIGdyYXkgNDAwIGNvbG9yLlxcclxcbiovXFxyXFxuXFxyXFxuaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIsIHRleHRhcmVhOjotbW96LXBsYWNlaG9sZGVyIHtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxuICAvKiAxICovXFxyXFxuICBjb2xvcjogIzljYTNhZjtcXHJcXG4gIC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQ6OnBsYWNlaG9sZGVyLFxcclxcbnRleHRhcmVhOjpwbGFjZWhvbGRlciB7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbiAgLyogMSAqL1xcclxcbiAgY29sb3I6ICM5Y2EzYWY7XFxyXFxuICAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuU2V0IHRoZSBkZWZhdWx0IGN1cnNvciBmb3IgYnV0dG9ucy5cXHJcXG4qL1xcclxcblxcclxcbmJ1dHRvbixcXHJcXG5bcm9sZT1cXFwiYnV0dG9uXFxcIl0ge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbk1ha2Ugc3VyZSBkaXNhYmxlZCBidXR0b25zIGRvbid0IGdldCB0aGUgcG9pbnRlciBjdXJzb3IuXFxyXFxuKi9cXHJcXG5cXHJcXG46ZGlzYWJsZWQge1xcclxcbiAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbjEuIE1ha2UgcmVwbGFjZWQgZWxlbWVudHMgYGRpc3BsYXk6IGJsb2NrYCBieSBkZWZhdWx0LiAoaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy8xNClcXHJcXG4yLiBBZGQgYHZlcnRpY2FsLWFsaWduOiBtaWRkbGVgIHRvIGFsaWduIHJlcGxhY2VkIGVsZW1lbnRzIG1vcmUgc2Vuc2libHkgYnkgZGVmYXVsdC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9qZW5zaW1tb25zL2Nzc3JlbWVkeS9pc3N1ZXMvMTQjaXNzdWVjb21tZW50LTYzNDkzNDIxMClcXHJcXG4gICBUaGlzIGNhbiB0cmlnZ2VyIGEgcG9vcmx5IGNvbnNpZGVyZWQgbGludCBlcnJvciBpbiBzb21lIHRvb2xzIGJ1dCBpcyBpbmNsdWRlZCBieSBkZXNpZ24uXFxyXFxuKi9cXHJcXG5cXHJcXG5pbWcsXFxyXFxuc3ZnLFxcclxcbnZpZGVvLFxcclxcbmNhbnZhcyxcXHJcXG5hdWRpbyxcXHJcXG5pZnJhbWUsXFxyXFxuZW1iZWQsXFxyXFxub2JqZWN0IHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgLyogMSAqL1xcclxcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG4gIC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5Db25zdHJhaW4gaW1hZ2VzIGFuZCB2aWRlb3MgdG8gdGhlIHBhcmVudCB3aWR0aCBhbmQgcHJlc2VydmUgdGhlaXIgaW50cmluc2ljIGFzcGVjdCByYXRpby4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvMTQpXFxyXFxuKi9cXHJcXG5cXHJcXG5pbWcsXFxyXFxudmlkZW8ge1xcclxcbiAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNYWtlIGVsZW1lbnRzIHdpdGggdGhlIEhUTUwgaGlkZGVuIGF0dHJpYnV0ZSBzdGF5IGhpZGRlbiBieSBkZWZhdWx0ICovXFxyXFxuXFxyXFxuW2hpZGRlbl0ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuKiwgOjpiZWZvcmUsIDo6YWZ0ZXIge1xcclxcbiAgLS10dy1ib3JkZXItc3BhY2luZy14OiAwO1xcclxcbiAgLS10dy1ib3JkZXItc3BhY2luZy15OiAwO1xcclxcbiAgLS10dy10cmFuc2xhdGUteDogMDtcXHJcXG4gIC0tdHctdHJhbnNsYXRlLXk6IDA7XFxyXFxuICAtLXR3LXJvdGF0ZTogMDtcXHJcXG4gIC0tdHctc2tldy14OiAwO1xcclxcbiAgLS10dy1za2V3LXk6IDA7XFxyXFxuICAtLXR3LXNjYWxlLXg6IDE7XFxyXFxuICAtLXR3LXNjYWxlLXk6IDE7XFxyXFxuICAtLXR3LXBhbi14OiAgO1xcclxcbiAgLS10dy1wYW4teTogIDtcXHJcXG4gIC0tdHctcGluY2gtem9vbTogIDtcXHJcXG4gIC0tdHctc2Nyb2xsLXNuYXAtc3RyaWN0bmVzczogcHJveGltaXR5O1xcclxcbiAgLS10dy1vcmRpbmFsOiAgO1xcclxcbiAgLS10dy1zbGFzaGVkLXplcm86ICA7XFxyXFxuICAtLXR3LW51bWVyaWMtZmlndXJlOiAgO1xcclxcbiAgLS10dy1udW1lcmljLXNwYWNpbmc6ICA7XFxyXFxuICAtLXR3LW51bWVyaWMtZnJhY3Rpb246ICA7XFxyXFxuICAtLXR3LXJpbmctaW5zZXQ6ICA7XFxyXFxuICAtLXR3LXJpbmctb2Zmc2V0LXdpZHRoOiAwcHg7XFxyXFxuICAtLXR3LXJpbmctb2Zmc2V0LWNvbG9yOiAjZmZmO1xcclxcbiAgLS10dy1yaW5nLWNvbG9yOiByZ2IoNTkgMTMwIDI0NiAvIDAuNSk7XFxyXFxuICAtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdzogMCAwICMwMDAwO1xcclxcbiAgLS10dy1yaW5nLXNoYWRvdzogMCAwICMwMDAwO1xcclxcbiAgLS10dy1zaGFkb3c6IDAgMCAjMDAwMDtcXHJcXG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IDAgMCAjMDAwMDtcXHJcXG4gIC0tdHctYmx1cjogIDtcXHJcXG4gIC0tdHctYnJpZ2h0bmVzczogIDtcXHJcXG4gIC0tdHctY29udHJhc3Q6ICA7XFxyXFxuICAtLXR3LWdyYXlzY2FsZTogIDtcXHJcXG4gIC0tdHctaHVlLXJvdGF0ZTogIDtcXHJcXG4gIC0tdHctaW52ZXJ0OiAgO1xcclxcbiAgLS10dy1zYXR1cmF0ZTogIDtcXHJcXG4gIC0tdHctc2VwaWE6ICA7XFxyXFxuICAtLXR3LWRyb3Atc2hhZG93OiAgO1xcclxcbiAgLS10dy1iYWNrZHJvcC1ibHVyOiAgO1xcclxcbiAgLS10dy1iYWNrZHJvcC1icmlnaHRuZXNzOiAgO1xcclxcbiAgLS10dy1iYWNrZHJvcC1jb250cmFzdDogIDtcXHJcXG4gIC0tdHctYmFja2Ryb3AtZ3JheXNjYWxlOiAgO1xcclxcbiAgLS10dy1iYWNrZHJvcC1odWUtcm90YXRlOiAgO1xcclxcbiAgLS10dy1iYWNrZHJvcC1pbnZlcnQ6ICA7XFxyXFxuICAtLXR3LWJhY2tkcm9wLW9wYWNpdHk6ICA7XFxyXFxuICAtLXR3LWJhY2tkcm9wLXNhdHVyYXRlOiAgO1xcclxcbiAgLS10dy1iYWNrZHJvcC1zZXBpYTogIDtcXHJcXG59XFxyXFxuXFxyXFxuOjpiYWNrZHJvcCB7XFxyXFxuICAtLXR3LWJvcmRlci1zcGFjaW5nLXg6IDA7XFxyXFxuICAtLXR3LWJvcmRlci1zcGFjaW5nLXk6IDA7XFxyXFxuICAtLXR3LXRyYW5zbGF0ZS14OiAwO1xcclxcbiAgLS10dy10cmFuc2xhdGUteTogMDtcXHJcXG4gIC0tdHctcm90YXRlOiAwO1xcclxcbiAgLS10dy1za2V3LXg6IDA7XFxyXFxuICAtLXR3LXNrZXcteTogMDtcXHJcXG4gIC0tdHctc2NhbGUteDogMTtcXHJcXG4gIC0tdHctc2NhbGUteTogMTtcXHJcXG4gIC0tdHctcGFuLXg6ICA7XFxyXFxuICAtLXR3LXBhbi15OiAgO1xcclxcbiAgLS10dy1waW5jaC16b29tOiAgO1xcclxcbiAgLS10dy1zY3JvbGwtc25hcC1zdHJpY3RuZXNzOiBwcm94aW1pdHk7XFxyXFxuICAtLXR3LW9yZGluYWw6ICA7XFxyXFxuICAtLXR3LXNsYXNoZWQtemVybzogIDtcXHJcXG4gIC0tdHctbnVtZXJpYy1maWd1cmU6ICA7XFxyXFxuICAtLXR3LW51bWVyaWMtc3BhY2luZzogIDtcXHJcXG4gIC0tdHctbnVtZXJpYy1mcmFjdGlvbjogIDtcXHJcXG4gIC0tdHctcmluZy1pbnNldDogIDtcXHJcXG4gIC0tdHctcmluZy1vZmZzZXQtd2lkdGg6IDBweDtcXHJcXG4gIC0tdHctcmluZy1vZmZzZXQtY29sb3I6ICNmZmY7XFxyXFxuICAtLXR3LXJpbmctY29sb3I6IHJnYig1OSAxMzAgMjQ2IC8gMC41KTtcXHJcXG4gIC0tdHctcmluZy1vZmZzZXQtc2hhZG93OiAwIDAgIzAwMDA7XFxyXFxuICAtLXR3LXJpbmctc2hhZG93OiAwIDAgIzAwMDA7XFxyXFxuICAtLXR3LXNoYWRvdzogMCAwICMwMDAwO1xcclxcbiAgLS10dy1zaGFkb3ctY29sb3JlZDogMCAwICMwMDAwO1xcclxcbiAgLS10dy1ibHVyOiAgO1xcclxcbiAgLS10dy1icmlnaHRuZXNzOiAgO1xcclxcbiAgLS10dy1jb250cmFzdDogIDtcXHJcXG4gIC0tdHctZ3JheXNjYWxlOiAgO1xcclxcbiAgLS10dy1odWUtcm90YXRlOiAgO1xcclxcbiAgLS10dy1pbnZlcnQ6ICA7XFxyXFxuICAtLXR3LXNhdHVyYXRlOiAgO1xcclxcbiAgLS10dy1zZXBpYTogIDtcXHJcXG4gIC0tdHctZHJvcC1zaGFkb3c6ICA7XFxyXFxuICAtLXR3LWJhY2tkcm9wLWJsdXI6ICA7XFxyXFxuICAtLXR3LWJhY2tkcm9wLWJyaWdodG5lc3M6ICA7XFxyXFxuICAtLXR3LWJhY2tkcm9wLWNvbnRyYXN0OiAgO1xcclxcbiAgLS10dy1iYWNrZHJvcC1ncmF5c2NhbGU6ICA7XFxyXFxuICAtLXR3LWJhY2tkcm9wLWh1ZS1yb3RhdGU6ICA7XFxyXFxuICAtLXR3LWJhY2tkcm9wLWludmVydDogIDtcXHJcXG4gIC0tdHctYmFja2Ryb3Atb3BhY2l0eTogIDtcXHJcXG4gIC0tdHctYmFja2Ryb3Atc2F0dXJhdGU6ICA7XFxyXFxuICAtLXR3LWJhY2tkcm9wLXNlcGlhOiAgO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogNjQwcHgpIHtcXHJcXG4gIC5jb250YWluZXIge1xcclxcbiAgICBtYXgtd2lkdGg6IDY0MHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXHJcXG4gIC5jb250YWluZXIge1xcclxcbiAgICBtYXgtd2lkdGg6IDc2OHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XFxyXFxuICAuY29udGFpbmVyIHtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMDI0cHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiAxMjgwcHgpIHtcXHJcXG4gIC5jb250YWluZXIge1xcclxcbiAgICBtYXgtd2lkdGg6IDEyODBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDE1MzZweCkge1xcclxcbiAgLmNvbnRhaW5lciB7XFxyXFxuICAgIG1heC13aWR0aDogMTUzNnB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uYWJzb2x1dGUge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ubS1hdXRvIHtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLm14LTQge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5mbGV4IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5ncmlkIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxufVxcclxcblxcclxcbi5oaWRkZW4ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnctZnVsbCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmZsZXgtcm93IHtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxufVxcclxcblxcclxcbi5mbGV4LWNvbCB7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbXMtc3RhcnQge1xcclxcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbi5pdGVtcy1jZW50ZXIge1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW1zLXN0cmV0Y2gge1xcclxcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxyXFxufVxcclxcblxcclxcbi5qdXN0aWZ5LXN0YXJ0IHtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuLmp1c3RpZnktZW5kIHtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxufVxcclxcblxcclxcbi5qdXN0aWZ5LWJldHdlZW4ge1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FwLTIge1xcclxcbiAgZ2FwOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5nYXAtNCB7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5nYXAtOCB7XFxyXFxuICBnYXA6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5yb3VuZGVkLWZ1bGwge1xcclxcbiAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucm91bmRlZC1tZCB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmJvcmRlci1iLTIge1xcclxcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYm9yZGVyLXQtMiB7XFxyXFxuICBib3JkZXItdG9wLXdpZHRoOiAycHg7XFxyXFxufVxcclxcblxcclxcbi5ib3JkZXItc29saWQge1xcclxcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG59XFxyXFxuXFxyXFxuLmJvcmRlci1ibHVlLTcwMCB7XFxyXFxuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xcclxcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMjkgNzggMjE2IC8gdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJvcmRlci13aGl0ZSB7XFxyXFxuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xcclxcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMjU1IDI1NSAyNTUgLyB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xcclxcbn1cXHJcXG5cXHJcXG4uYmctYmx1ZS02MDAge1xcclxcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM3IDk5IDIzNSAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJnLWJsdWUtNzAwIHtcXHJcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyOSA3OCAyMTYgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxyXFxufVxcclxcblxcclxcbi5iZy1yZWQtNTAwIHtcXHJcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzkgNjggNjggLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxyXFxufVxcclxcblxcclxcbi5iZy1zbGF0ZS0zMDAge1xcclxcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMyAyMTMgMjI1IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcclxcbn1cXHJcXG5cXHJcXG4uYmctc2xhdGUtNTAwIHtcXHJcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDAgMTE2IDEzOSAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJnLXRyYW5zcGFyZW50IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uYmcteWVsbG93LTUwMCB7XFxyXFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM0IDE3OSA4IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcclxcbn1cXHJcXG5cXHJcXG4ucC00IHtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5weC00IHtcXHJcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5weC04IHtcXHJcXG4gIHBhZGRpbmctbGVmdDogMnJlbTtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5weS0xNiB7XFxyXFxuICBwYWRkaW5nLXRvcDogNHJlbTtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiA0cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHktMiB7XFxyXFxuICBwYWRkaW5nLXRvcDogMC41cmVtO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnB5LTQge1xcclxcbiAgcGFkZGluZy10b3A6IDFyZW07XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnB5LTgge1xcclxcbiAgcGFkZGluZy10b3A6IDJyZW07XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnBsLTQge1xcclxcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucGwtOCB7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi50ZXh0LWNlbnRlciB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50ZXh0LTJ4bCB7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dC0zeGwge1xcclxcbiAgZm9udC1zaXplOiAxLjg3NXJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyLjI1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dC1zbSB7XFxyXFxuICBmb250LXNpemU6IDAuODc1cmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuMjVyZW07XFxyXFxufVxcclxcblxcclxcbi50ZXh0LXhsIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9udC1ib2xkIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVxcclxcblxcclxcbi5mb250LW1lZGl1bSB7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dC1ibHVlLTcwMCB7XFxyXFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXHJcXG4gIGNvbG9yOiByZ2IoMjkgNzggMjE2IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxyXFxufVxcclxcblxcclxcbi50ZXh0LXNsYXRlLTIwMCB7XFxyXFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXHJcXG4gIGNvbG9yOiByZ2IoMjI2IDIzMiAyNDAgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHQtc2xhdGUtNTAwIHtcXHJcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcclxcbiAgY29sb3I6IHJnYigxMDAgMTE2IDEzOSAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dC13aGl0ZSB7XFxyXFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXHJcXG4gIGNvbG9yOiByZ2IoMjU1IDI1NSAyNTUgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZpbHRlciB7XFxyXFxuICBmaWx0ZXI6IHZhcigtLXR3LWJsdXIpIHZhcigtLXR3LWJyaWdodG5lc3MpIHZhcigtLXR3LWNvbnRyYXN0KSB2YXIoLS10dy1ncmF5c2NhbGUpIHZhcigtLXR3LWh1ZS1yb3RhdGUpIHZhcigtLXR3LWludmVydCkgdmFyKC0tdHctc2F0dXJhdGUpIHZhcigtLXR3LXNlcGlhKSB2YXIoLS10dy1kcm9wLXNoYWRvdyk7XFxyXFxufVxcclxcblxcclxcbi50cmFuc2l0aW9uLWFsbCB7XFxyXFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBhbGw7XFxyXFxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcXHJcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDE1MG1zO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL3RvZG8tYmcuanBnJyk7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGJhY2tncm91bmQtY2xpcDogYm9yZGVyLWJveDtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICAvKiBwYWRkaW5nLXRvcDogNS40OXJlbTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAyNXZ3OyAqL1xcclxcbn1cXHJcXG5cXHJcXG5hc2lkZSB7XFxyXFxuICB3aWR0aDogMjB2dztcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogNy4zNXJlbTtcXHJcXG4gIHJpZ2h0OiAxcmVtO1xcclxcbiAgbGVmdDogMi41cmVtO1xcclxcbiAgYm90dG9tOiAxcmVtO1xcclxcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnQtY29udGFpbmVyIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogNy4zNXJlbTtcXHJcXG4gIGxlZnQ6IDI1dnc7XFxyXFxuICByaWdodDogMnJlbTtcXHJcXG4gIGhlaWdodDogNzkuNnZoO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXJ7XFxyXFxuICBib3R0b206IDFyZW07XFxyXFxufVxcclxcblxcclxcbmZvb3RlciwjcHJvamVjdHMtaGVhZGVyIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGxlZnQ6IDIuNXJlbTtcXHJcXG4gIHdpZHRoOiAyMHZ3O1xcclxcbiAgei1pbmRleDogMTAwO1xcclxcbn1cXHJcXG5cXHJcXG5mb3Jte1xcclxcbiAgd2lkdGg6IDMwdnc7XFxyXFxuICBsZWZ0OiBjYWxjKDI1dncgLSAxcmVtKTtcXHJcXG4gIHRvcDogNy4zNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMS41cmVtO1xcclxcbiAgcmlnaHQ6IDFyZW07XFxyXFxuICBsZWZ0OiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbiNuZXctcHJvamVjdC1idG57XFxyXFxuICBwYWRkaW5nLWJsb2NrOiAuNXJlbTtcXHJcXG4gIHBhZGRpbmctaW5saW5lOiAuOHJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbiNwcm9maWxlIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvZmlsZS1waWN0dXJlIHtcXHJcXG4gIHdpZHRoOiA0NXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvamVjdHMtaGVhZGVye1xcclxcbiAgdG9wOiA3LjM1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jdGFzay1jb250YWluZXJ7XFxyXFxuICBvdmVyZmxvdzogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG4jdGFzay1mb3JtIHtcXHJcXG4gIGxlZnQ6IGNhbGMoNDB2dyk7XFxyXFxuICB0b3A6IDE2LjhyZW07XFxyXFxufVxcclxcblxcclxcbi5ob3ZlclxcXFw6YmctYmx1ZS02MDA6aG92ZXIge1xcclxcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM3IDk5IDIzNSAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvdmVyXFxcXDpiZy1ibHVlLTcwMDpob3ZlciB7XFxyXFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjkgNzggMjE2IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcclxcbn1cXHJcXG5cXHJcXG4uaG92ZXJcXFxcOmJnLXJlZC03MDA6aG92ZXIge1xcclxcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4NSAyOCAyOCAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvdmVyXFxcXDpiZy1zbGF0ZS0xMDA6aG92ZXIge1xcclxcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MSAyNDUgMjQ5IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcclxcbn1cXHJcXG5cXHJcXG4uaG92ZXJcXFxcOmJnLXllbGxvdy03MDA6aG92ZXIge1xcclxcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2MSA5OCA3IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9jdXNcXFxcOm91dGxpbmUtbm9uZTpmb2N1cyB7XFxyXFxuICBvdXRsaW5lOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuICBvdXRsaW5lLW9mZnNldDogMnB4O1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRE9NTWFuYWdlciB7XHJcblxyXG4gIGNvbnN0cnVjdG9yICgpIHtcclxuXHJcbiAgfVxyXG4gIC8vQWRkIEljb25cclxuICBjcmVhdGVBZGRCdXR0b24gKCkge1xyXG5cclxuICAgIC8vQnV0dG9uXHJcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgYnV0dG9uLmNsYXNzTmFtZSA9ICdiZy1ibHVlLTYwMCByb3VuZGVkLWZ1bGwgaG92ZXI6YmctYmx1ZS03MDAgdHJhbnNpdGlvbi1hbGwnXHJcblxyXG4gICAgLy9JY29uXHJcbiAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpXHJcbiAgICBpY29uLmNsYXNzTmFtZSA9ICd0ZXh0LXhsIHRleHQtc2xhdGUtMjAwIGZhLXNvbGlkIGZhLXBsdXMgZm9udC1tZWRpdW0nXHJcblxyXG4gICAgYnV0dG9uLmFwcGVuZENoaWxkKGljb24pXHJcblxyXG4gICAgcmV0dXJuIGJ1dHRvblxyXG4gIH1cclxuICAvL0RpdiBDb250YWluZXJcclxuICBjcmVhdGVDb250YWluZXIgKCkge1xyXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGRpdi5jbGFzc05hbWUgPSAncC00J1xyXG5cclxuICAgIHJldHVybiBkaXZcclxuICB9XHJcbiAgLy9Gb290ZXJcclxuICBjcmVhdGVGb290ZXIgKCkge1xyXG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJylcclxuICAgICAgZm9vdGVyLmNsYXNzTmFtZSA9ICdib3JkZXItdC0yIGJvcmRlci1zb2xpZCBib3JkZXItd2hpdGUgYmctYmx1ZS03MDAnXHJcblxyXG4gIC8vUGFyYWdyYXBoXHJcbiAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgcC5jbGFzc05hbWUgPSAndGV4dC1zbSB0ZXh0LXNsYXRlLTUwMCB0ZXh0LWNlbnRlciBweS00J1xyXG4gICAgcC5pbm5lckhUTUwgPSBgQ29weXJpZ2h0ICZjb3B5OyAke25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX1gXHJcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQocClcclxuXHJcbiAgICByZXR1cm4gZm9vdGVyXHJcbiAgfVxyXG4gIC8vUGFnZSBoZWFkZXJcclxuICBjcmVhdGVIZWFkZXIgKCkge1xyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJylcclxuICAgIGhlYWRlci5jbGFzc05hbWUgPSAncC00IGJnLWJsdWUtNzAwIG0tYXV0byBteC00IHJvdW5kZWQtdG9wIHJvdW5kZWQtbWQnXHJcbiAgICByZXR1cm4gaGVhZGVyXHJcbiAgfVxyXG4gIC8vSGVhZGluZyBlbGVtZW50XHJcbiAgY3JlYXRlSGVhZGluZyAodGV4dCkge1xyXG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcclxuICAgIGhlYWRpbmcuY2xhc3NOYW1lID0gJ3RleHQteGwgdGV4dC1zbGF0ZS0yMDAnXHJcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gdGV4dFxyXG5cclxuICAgIHJldHVybiBoZWFkaW5nXHJcbiAgfVxyXG4gIC8vSG9yaXpvbnRhbCBsaW5lXHJcbiAgY3JlYXRlSG9yaXpvbnRhbExpbmUgKCkge1xyXG4gICAgY29uc3QgbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJylcclxuICAgIGxpbmUuc3R5bGUuaGVpZ2h0ID0gJzF4cCdcclxuICAgIGxpbmUuY2xhc3NOYW1lID0gJ2JnLXNsYXRlLTUwMCB3LWZ1bGwnXHJcblxyXG4gICAgcmV0dXJuIGxpbmVcclxuICB9XHJcbiAgLy9CdXNpbmVzcyBuYW1lXHJcbiAgY3JlYXRlTG9nbyAodGV4dCkge1xyXG4gICAgY29uc3QgbG9nbyA9IHRoaXMuY3JlYXRlSGVhZGluZyh0ZXh0KVxyXG4gICAgbG9nby5jbGFzc0xpc3QucmVtb3ZlKCd0ZXh0LXhsJylcclxuICAgIGxvZ28uY2xhc3NMaXN0LmFkZCgndGV4dC0yeGwnLCdmb250LWJvbGQnLCd0ZXh0LWNlbnRlcicpXHJcblxyXG4gICAgcmV0dXJuIGxvZ29cclxuICB9XHJcbiAgLy9Qcm9qZWN0IGNvbnRhaW5lclxyXG4gIC8vdXNlZCBmb3IgZGlzbGF5IGluIHRoZSBzaWRlIGJhclxyXG4gIGNyZWF0ZVByb2plY3RDb250YWluZXIgKHByb2plY3ROYW1lKSB7XHJcbiAgICBjb25zdCBoYXNoTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxyXG4gICAgaGFzaExpbmsuaHJlZiA9IGAjJHtwcm9qZWN0TmFtZS5yZXBsYWNlQWxsKCcgJywnLScpfWBcclxuICAgIGNvbnN0IHByb2pDb250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgcHJvakNvbnQuaWQgPSBgJHtwcm9qZWN0TmFtZS50b0xvd2VyQ2FzZSgpLnJlcGxhY2VBbGwoJyAnLCAnLScpfS1jb250YWluZXJgXHJcbiAgICAgIHByb2pDb250LmNsYXNzTmFtZSA9ICd3LWZ1bGwgYmctYmx1ZS02MDAgYm9yZGVyLXQtMiBib3JkZXItc29saWQgYm9yZGVyLXdoaXRlIGhvdmVyOmJnLWJsdWUtNzAwIHRyYW5zaXRpb24tYWxsJ1xyXG5cclxuICAgICAgLy9OYW1lXHJcbiAgICAgIGNvbnN0IHByb2pOYW1lID0gdGhpcy5jcmVhdGVIZWFkaW5nKHByb2plY3ROYW1lKVxyXG4gICAgICAgIHByb2pOYW1lLmlkID0gYCR7cHJvamVjdE5hbWUudG9Mb3dlckNhc2UoKS5yZXBsYWNlQWxsKCcgJywgJy0nKX1gXHJcbiAgICAgICAgcHJvak5hbWUuY2xhc3NOYW1lID0gJ3Byb2plY3QgcHktMiB0ZXh0LXNsYXRlLTIwMCB0ZXh0LXhsIHB4LTQnXHJcbiAgICAgIFxyXG4gICAgICAvL0FwcGVuZCBuYW1lXHJcbiAgICAgIGhhc2hMaW5rLmFwcGVuZENoaWxkKHByb2pOYW1lKVxyXG4gICAgICBwcm9qQ29udC5hcHBlbmRDaGlsZChoYXNoTGluaylcclxuXHJcbiAgICAgIHJldHVybiBwcm9qQ29udFxyXG4gIH1cclxuICAvL0Rlc2NyaXB0aW9uIGNvbnRhaW5lclxyXG4gIGNyZWF0ZVByb2plY3REZXNjcmlwdGlvbiAoZGVzY3JpcHRpb24pIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuY3JlYXRlQ29udGFpbmVyKClcclxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdiZy1ibHVlLTYwMCcsJ3B4LTgnLCAncHktNCcpXHJcblxyXG4gICAgLy9QYXJhZ3JhcGhcclxuICAgIGNvbnN0IHBhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgcGFyLmNsYXNzTmFtZSA9ICd0ZXh0LXNsYXRlLTIwMCB0ZXh0LW1kJ1xyXG4gICAgcGFyLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb25cclxuXHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocGFyKVxyXG5cclxuICAgIHJldHVybiBjb250YWluZXJcclxuICB9XHJcbiAgLy9Qcm9qZWN0IGhlYWRlclxyXG4gIC8vZGlzcGxheSBpbiB0aGUgbWFpbiBib2R5IFxyXG4gIC8vUGVpb2QgaXMgYW4gb2JqZWN0IHdpdGggcGVyaW9kLnN0YXJ0IGFuZCBwZXJpb2QuZW5kXHJcbiAgY3JlYXRlUHJvamVjdEhlYWRlciAocHJvamVjdCl7XHJcbiAgICAvL01haW4gY29udGFpbmVyXHJcbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmNyZWF0ZUNvbnRhaW5lcigpXHJcbiAgICBjb250YWluZXIuY2xhc3NOYW1lID0gJ2ZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIGJnLWJsdWUtNjAwIGl0ZW1zLWNlbnRlciB3LWZ1bGwgcHktNCBwbC04J1xyXG4gICAgLy9BZGQgTmFtZVxyXG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gdGhpcy5jcmVhdGVIZWFkaW5nKHByb2plY3QubmFtZSlcclxuICAgIHByb2plY3RUaXRsZS5jbGFzc0xpc3QuYWRkKCdmb250LWJvbGQnKVxyXG4gICAgcHJvamVjdFRpdGxlLmlkID0gJ3Byb2plY3QtbmFtZSdcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpXHJcblxyXG4gICAgcmV0dXJuIGNvbnRhaW5lclxyXG4gIH1cclxuICAvL1NpZGUgYmFyXHJcbiAgY3JlYXRlU2lkZWJhciAoKSB7XHJcbiAgICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FzaWRlJylcclxuICAgICBzaWRlYmFyLmNsYXNzTmFtZSA9ICdweC00IGJnLWJsdWUtNzAwIHJvdW5kZWQtbWQgcHktMTYnXHJcblxyXG4gICAgIHJldHVybiBzaWRlYmFyXHJcbiAgfVxyXG4gIC8vVXNlciBwcm9maWxlXHJcbiAgY3JlYXRlVXNlclByb2ZpbGUgKHVzZXJOYW1lKSB7XHJcbiAgICAvL1Byb2ZpbGUgY29udGFpbmVyXHJcbiAgICBjb25zdCBwcm9maWxlID0gdGhpcy5jcmVhdGVDb250YWluZXIoKVxyXG4gICAgcHJvZmlsZS5jbGFzc0xpc3QuYWRkKCdmbGV4JywgJ2ZsZXgtcm93JywgJ2p1c3RpZnktZW5kJywgJ2l0ZW1zLWNlbnRlcicsICdnYXAtNCcpXHJcbiAgICBwcm9maWxlLmlkID0gJ3Byb2ZpbGUnXHJcblxyXG4gICAgLy9waWN0dXJlIGltYWdlXHJcbiAgICBjb25zdCBwaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxyXG4gICAgcGljLmlkID0gJ3Byb2ZpbGUtcGljdHVyZSdcclxuICAgIHBpYy5jbGFzc05hbWUgPSAncm91bmRlZC1mdWxsJ1xyXG4gICAgcHJvZmlsZS5hcHBlbmRDaGlsZChwaWMpXHJcblxyXG4gICAgLy91c2VyIG5hbWVcclxuICAgIGNvbnN0IG5hbWUgPSB0aGlzLmNyZWF0ZUhlYWRpbmcodXNlck5hbWUpXHJcbiAgICBwcm9maWxlLnByZXBlbmQobmFtZSlcclxuXHJcbiAgICByZXR1cm4gcHJvZmlsZVxyXG4gIH1cclxuICBkaXNwbGF5Rm9ybSAoaGFzaEZvcm1JZCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihoYXNoRm9ybUlkKS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKVxyXG4gIH1cclxuICBnZXRGb3JtRGF0YSAoaGFzaEZvcm1JZCkge1xyXG4gICAgY29uc3QgZGF0YSA9IFtdXHJcbiAgICAvL0dldCBub2RlIGxpc3RcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYCR7aGFzaEZvcm1JZH0gaW5wdXRgKS5mb3JFYWNoKGVsZW1lbnQgPT57XHJcbiAgICAgIC8vZ2V0IGlucHV0IHZhbHVlcyBhbmQgYWRkIHRvIGRhdGEgYXJyYXlcclxuICAgICAgZGF0YS5wdXNoKGVsZW1lbnQudmFsdWUudHJpbSgpKVxyXG4gICAgfSlcclxuICAgIHJldHVybiBkYXRhXHJcbiAgfSBcclxuICBoaWRlRm9ybShoYXNoRm9ybUlkKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGhhc2hGb3JtSWQpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXHJcbiAgfVxyXG4gIC8vQXBwZW5kIHRvIERPTVxyXG4gIHJlbmRlciAoY29udGVudCkge1xyXG4gICAgICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKVxyXG4gICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnQpXHJcbiAgICB9XHJcbiAgICBcclxufSIsImltcG9ydCBUYXNrTWFuYWdlciBmcm9tIFwiLi90YXNrX21hbmFnZXJcIjtcclxuaW1wb3J0IFRhc2sgZnJvbSBcIi4vdGFza1wiO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IGV4dGVuZHMgVGFza01hbmFnZXIge1xyXG5cclxuICAgIC8vUHJvamVjdCBvcGVuXHJcbiAgICAjY29tcGxldGUgPSBmYWxzZVxyXG4gICAgI2Rlc2NyaXB0aW9uID0gJydcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IobmFtZSl7XHJcbiAgICAgICAgc3VwZXIoKVxyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWVcclxuICAgIH1cclxuICAgIGNyZWF0ZU5ld1Rhc2sgKGRhdGEpIHtcclxuICAgICAgICBjb25zdCB0YXNrID0gbmV3IFRhc2soZGF0YS50aXRsZSkvL2luc3RhbmNpYXRlIHRhc2tcclxuICAgICAgICB0YXNrLnNldERlc2NyaXB0aW9uKGRhdGEuZGVzY3JpcHRpb24pXHJcbiAgICAgICAgdGFzay5zZXREdWVEYXRlKGRhdGEuZHVlRGF0ZSlcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gdGFzay50b0pTT04oKVxyXG4gICAgfVxyXG4gICAgLy9yZXR1cm4gdmFsdWUgb2YgZGVzY3JpcHRpb25cclxuICAgIGdldERlc2NyaXB0aW9uKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuI2Rlc2NyaXB0aW9uXHJcbiAgICB9XHJcbiAgICAvL2lzIGNvbXBsZXRlXHJcbiAgICBpc0NvbXBsZXRlKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuI2NvbXBsZXRlXHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vTWFyayBhcyBjb21wbGV0ZVxyXG4gICAgbWFya0FzQ29tcGxldGUoKXtcclxuICAgICAgICB0aGlzLiNjb21wbGV0ZSA9IHRydWVcclxuICAgIH1cclxuICAgIC8vTWFyayBhcyBpbmNvbXBsZXRlXHJcbiAgICBtYXJrQXNJbmNvbXBsZXRlKCl7XHJcbiAgICAgICAgaWYodGhpcy4jY29tcGxldGUpXHJcbiAgICAgICAgICAgIHRoaXMuI2NvbXBsZXRlID0gZmFsc2VcclxuICAgIH1cclxuICAgXHJcbiAgICAvL2luaXRpYWxpemUgZGVzY3JpcGlvblxyXG4gICAgc2V0RGVzY3JpcHRpb24oZGVzY3JpcHRpb24pe1xyXG4gICAgICAgIHRoaXMuI2Rlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25cclxuICAgIH1cclxuICAgIHRvSlNPTiAoKXtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBcIm5hbWVcIjogdGhpcy5uYW1lLFxyXG4gICAgICAgICAgICBcImNvbXBsZXRlXCI6IHRoaXMuaXNDb21wbGV0ZSgpLFxyXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IHRoaXMuZ2V0RGVzY3JpcHRpb24oKSxcclxuICAgICAgICAgICAgXCJ0YXNrc1wiOiB0aGlzLmdldFRhc2tzKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4iLCJcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdE1hbmFnZXIge1xyXG4gICAgIC8qXHJcbiAgICBQcm9qZWN0IG1hbmFnZXIgY2xhc3MgcGVyZm9ybXMgb3BlcmF0aW9ucyBvbiBQcm9qZWN0c1xyXG4gICAgKi9cclxuICAgI2NvbXBsZXRlZFByb2plY3RzID0gW11cclxuICAgI3Byb2plY3RzID0gW11cclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuXHJcbiAgICB9XHJcbiAgICAvL0FkZCB0byBsaXN0XHJcbiAgICBhY2Nlc3NMb2NhbFN0b3JhZ2UgKCkge1xyXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKVxyXG4gICAgfVxyXG4gICAgLy9VcGRhdGUgY29tcGxldGVkIHByb2plY3RzXHJcbiAgICBhZGRUb0NvbXBsZXRlZChwcm9qZWN0KXtcclxuICAgICAgICB0aGlzLiNjb21wbGV0ZWRQcm9qZWN0cy5wdXNoKHByb2plY3QpXHJcbiAgICAgICAgdGhpcy5yZW1vdmVQcm9qZWN0KHByb2plY3QpXHJcbiAgICB9XHJcbiAgICBhZGRUb1Byb2plY3RMaXN0IChuZXdQcm9qZWN0KSB7XHJcbiAgICAgICAgdGhpcy4jcHJvamVjdHMucHVzaChuZXdQcm9qZWN0KVxyXG4gICAgfVxyXG4gICBcclxuICAgIC8vR2V0IGxpc3Qgb2YgY29tcGxldGVkIHByb2plY3RzXHJcbiAgICBnZXRDb21wbGV0ZWQoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy4jY29tcGxldGVkUHJvamVjdHNcclxuICAgIH1cclxuICAgIC8vZ2V0IHByb2plY3RzXHJcbiAgICBnZXRQcm9qZWN0cygpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLiNwcm9qZWN0c1xyXG4gICAgfVxyXG5cclxuICAgIC8vcmVtb3ZlIHByb2plY3QgZnJvbSBsaXN0XHJcbiAgICByZW1vdmVQcm9qZWN0KHByb2plY3Qpe1xyXG4gICAgICAgIHRoaXMuI3Byb2plY3RzID0gdGhpcy4jcHJvamVjdHMuZmlsdGVyKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBpZihlbGVtZW50ID09PSBwcm9qZWN0KVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSgpe1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHRoaXMuI3Byb2plY3RzKSlcclxuICAgIH1cclxuXHJcblxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sge1xyXG4gICAgLypcclxuICAgICAgICBUYXNrIGNsYXNzIGNyZWF0ZSBUYXNrIG9iamVjdHNcclxuICAgICovXHJcblxyXG4gICAgLy9UYXNrLmRlc2NyaXB0aW9uXHJcbiAgICAjZGVzY3JpcHRpb25cclxuXHJcbiAgICAvL1Rhc2suZHVlZGF0ZVxyXG4gICAgI2R1ZURhdGVcclxuICAgICNjb21wbGV0ZSA9IGZhbHNlXHJcblxyXG4gICAgLy9UYXNrLnByaW9yaXR5XHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSl7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlXHJcbiAgICB9XHJcbiAgICAvL0VkaXQgdGFzayBwcm9wZXJ0aWVzXHJcbiAgICBlZGl0KGRhdGEpe1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSBkYXRhLnRpdGxlXHJcbiAgICAgICAgdGhpcy4jZGVzY3JpcHRpb24gPSB0aGlzLnNldERlc2NyaXB0aW9uKGRhdGEuZGVzY3JpcHRpb24pXHJcbiAgICAgICAgdGhpcy4jZHVlRGF0ZSA9IHRoaXMuc2V0RHVlRGF0ZShkYXRhLmR1ZURhdGUpXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICAvL3JldHVybiB2YWx1ZSBvZiBkZXNjcmlwdGlvblxyXG4gICAgZ2V0RGVzY3JpcHRpb24oKXtcclxuICAgICAgICByZXR1cm4gdGhpcy4jZGVzY3JpcHRpb25cclxuICAgIH1cclxuICAgIC8vcmV0dXJuIGR1ZSBkYXRlXHJcbiAgICBnZXREdWVEYXRlKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuI2R1ZURhdGVcclxuICAgIH1cclxuICAgIC8vQ2hlY2sgaWYgY29tcGxldGVcclxuICAgIGlzQ29tcGxldGUoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy4jY29tcGxldGVcclxuICAgIH1cclxuICAgIC8vTWFyayBhcyBjb21wbGV0ZVxyXG4gICAgbWFya0FzQ29tcGxldGUoKXtcclxuICAgICAgICB0aGlzLiNjb21wbGV0ZSA9IHRydWVcclxuICAgIH1cclxuICAgIC8vTWFyayBhcyBpbmNvbXBsZXRlXHJcbiAgICBtYXJrQXNJbmNvbXBsZXRlKCl7XHJcbiAgICAgICAgaWYodGhpcy4jY29tcGxldGUpXHJcbiAgICAgICAgICAgIHRoaXMuI2NvbXBsZXRlID0gZmFsc2VcclxuICAgIH1cclxuICAgIC8vaW5pdGlhbGl6ZSBkZXNjcmlwaW9uXHJcbiAgICBzZXREZXNjcmlwdGlvbihkZXNjcmlwdGlvbil7XHJcbiAgICAgICAgdGhpcy4jZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxyXG4gICAgfVxyXG4gICAgLy9zZXQgZHVlIGRhdGVcclxuICAgIHNldER1ZURhdGUoZHVlRGF0ZSl7XHJcbiAgICAgICAgdGhpcy4jZHVlRGF0ZSA9IGR1ZURhdGVcclxuICAgIH1cclxuICAgIHRvSlNPTiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgXCJ0aXRsZVwiOiB0aGlzLnRpdGxlLFxyXG4gICAgICAgICAgICBcImNvbXBsZXRlXCI6IHRoaXMuaXNDb21wbGV0ZSgpLFxyXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IHRoaXMuZ2V0RGVzY3JpcHRpb24oKSxcclxuICAgICAgICAgICAgXCJkdWVEYXRlXCI6IHRoaXMuZ2V0RHVlRGF0ZSgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFza01hbmFnZXIge1xyXG4gICAgLypcclxuICAgIFRhc2sgbWFuYWdlciBjbGFzcyBwZXJmb3JtcyBvcGVyYXRpb25zIHdpdGggYW5kIG9uIFRhc2sgb2JqZWN0c1xyXG4gICAgVXNlZCB0b2dldGhlciB3aXRoIFRhc2sgY2xhc3NcclxuICAgICovXHJcbiAgICAjdGFza0xpc3QgPSBbXVxyXG4gICAgI2NvbXBsZXRlZFRhc2tzID0gW11cclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuXHJcbiAgICB9XHJcbiAgICAvL0FkZCB0byBsaXN0XHJcbiAgICBhZGRUYXNrKHRhc2spe1xyXG4gICAgICAgIHRoaXMuI3Rhc2tMaXN0LnB1c2godGFzaylcclxuICAgIH1cclxuICAgIC8vVXBkYXRlIGNvbXBsZXRlZCB0YXNrc1xyXG4gICAgYWRkVG9Db21wbGV0ZWQodGFzayl7XHJcbiAgICAgICAgdGhpcy4jY29tcGxldGVkVGFza3MucHVzaCh0YXNrKVxyXG4gICAgICAgIHRoaXMucmVtb3ZlVGFzayh0YXNrKVxyXG4gICAgfVxyXG4gICAgLy9HZXQgbGlzdCBvZiBjb21wbGV0ZWQgdGFza3NcclxuICAgIGdldENvbXBsZXRlZCgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLiNjb21wbGV0ZWRUYXNrc1xyXG4gICAgfVxyXG4gICAgLy9nZXQgdGFza3NcclxuICAgIGdldFRhc2tzKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuI3Rhc2tMaXN0XHJcbiAgICB9XHJcbiAgICAvL3JlbW92ZSB0YXNrIGZyb20gbGlzdFxyXG4gICAgcmVtb3ZlVGFzayhUYXNrKXtcclxuICAgICAgICB0aGlzLiN0YXNrTGlzdCA9IHRoaXMuI3Rhc2tMaXN0LmZpbHRlcih0YXNrID0+IHtcclxuICAgICAgICAgICAgaWYodGFzayA9PT0gVGFzaylcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCJ2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgPyAob2JqKSA9PiAoT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaikpIDogKG9iaikgPT4gKG9iai5fX3Byb3RvX18pO1xudmFyIGxlYWZQcm90b3R5cGVzO1xuLy8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4vLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbi8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuLy8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4vLyBtb2RlICYgMTY6IHJldHVybiB2YWx1ZSB3aGVuIGl0J3MgUHJvbWlzZS1saWtlXG4vLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuXHRpZihtb2RlICYgMSkgdmFsdWUgPSB0aGlzKHZhbHVlKTtcblx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcblx0aWYodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSkge1xuXHRcdGlmKChtb2RlICYgNCkgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuXHRcdGlmKChtb2RlICYgMTYpICYmIHR5cGVvZiB2YWx1ZS50aGVuID09PSAnZnVuY3Rpb24nKSByZXR1cm4gdmFsdWU7XG5cdH1cblx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcblx0dmFyIGRlZiA9IHt9O1xuXHRsZWFmUHJvdG90eXBlcyA9IGxlYWZQcm90b3R5cGVzIHx8IFtudWxsLCBnZXRQcm90byh7fSksIGdldFByb3RvKFtdKSwgZ2V0UHJvdG8oZ2V0UHJvdG8pXTtcblx0Zm9yKHZhciBjdXJyZW50ID0gbW9kZSAmIDIgJiYgdmFsdWU7IHR5cGVvZiBjdXJyZW50ID09ICdvYmplY3QnICYmICF+bGVhZlByb3RvdHlwZXMuaW5kZXhPZihjdXJyZW50KTsgY3VycmVudCA9IGdldFByb3RvKGN1cnJlbnQpKSB7XG5cdFx0T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoY3VycmVudCkuZm9yRWFjaCgoa2V5KSA9PiAoZGVmW2tleV0gPSAoKSA9PiAodmFsdWVba2V5XSkpKTtcblx0fVxuXHRkZWZbJ2RlZmF1bHQnXSA9ICgpID0+ICh2YWx1ZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChucywgZGVmKTtcblx0cmV0dXJuIG5zO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmYgPSB7fTtcbi8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbi8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5lID0gKGNodW5rSWQpID0+IHtcblx0cmV0dXJuIFByb21pc2UuYWxsKE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uZikucmVkdWNlKChwcm9taXNlcywga2V5KSA9PiB7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5mW2tleV0oY2h1bmtJZCwgcHJvbWlzZXMpO1xuXHRcdHJldHVybiBwcm9taXNlcztcblx0fSwgW10pKTtcbn07IiwiLy8gVGhpcyBmdW5jdGlvbiBhbGxvdyB0byByZWZlcmVuY2UgYXN5bmMgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnUgPSAoY2h1bmtJZCkgPT4ge1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgYmFzZWQgb24gdGVtcGxhdGVcblx0cmV0dXJuIFwiXCIgKyBjaHVua0lkICsgXCIuXCIgKyBcIjhjNTVmODBiOGMwN2MyMDI2MTA4XCIgKyBcIi5qc1wiO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJ2YXIgaW5Qcm9ncmVzcyA9IHt9O1xudmFyIGRhdGFXZWJwYWNrUHJlZml4ID0gXCJ0b2RvLWlzdC0tb25lOlwiO1xuLy8gbG9hZFNjcmlwdCBmdW5jdGlvbiB0byBsb2FkIGEgc2NyaXB0IHZpYSBzY3JpcHQgdGFnXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmwgPSAodXJsLCBkb25lLCBrZXksIGNodW5rSWQpID0+IHtcblx0aWYoaW5Qcm9ncmVzc1t1cmxdKSB7IGluUHJvZ3Jlc3NbdXJsXS5wdXNoKGRvbmUpOyByZXR1cm47IH1cblx0dmFyIHNjcmlwdCwgbmVlZEF0dGFjaDtcblx0aWYoa2V5ICE9PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzY3JpcHRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgcyA9IHNjcmlwdHNbaV07XG5cdFx0XHRpZihzLmdldEF0dHJpYnV0ZShcInNyY1wiKSA9PSB1cmwgfHwgcy5nZXRBdHRyaWJ1dGUoXCJkYXRhLXdlYnBhY2tcIikgPT0gZGF0YVdlYnBhY2tQcmVmaXggKyBrZXkpIHsgc2NyaXB0ID0gczsgYnJlYWs7IH1cblx0XHR9XG5cdH1cblx0aWYoIXNjcmlwdCkge1xuXHRcdG5lZWRBdHRhY2ggPSB0cnVlO1xuXHRcdHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuXG5cdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuXHRcdHNjcmlwdC50aW1lb3V0ID0gMTIwO1xuXHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKSB7XG5cdFx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgX193ZWJwYWNrX3JlcXVpcmVfXy5uYyk7XG5cdFx0fVxuXHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXdlYnBhY2tcIiwgZGF0YVdlYnBhY2tQcmVmaXggKyBrZXkpO1xuXHRcdHNjcmlwdC5zcmMgPSB1cmw7XG5cdH1cblx0aW5Qcm9ncmVzc1t1cmxdID0gW2RvbmVdO1xuXHR2YXIgb25TY3JpcHRDb21wbGV0ZSA9IChwcmV2LCBldmVudCkgPT4ge1xuXHRcdC8vIGF2b2lkIG1lbSBsZWFrcyBpbiBJRS5cblx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBudWxsO1xuXHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblx0XHR2YXIgZG9uZUZucyA9IGluUHJvZ3Jlc3NbdXJsXTtcblx0XHRkZWxldGUgaW5Qcm9ncmVzc1t1cmxdO1xuXHRcdHNjcmlwdC5wYXJlbnROb2RlICYmIHNjcmlwdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG5cdFx0ZG9uZUZucyAmJiBkb25lRm5zLmZvckVhY2goKGZuKSA9PiAoZm4oZXZlbnQpKSk7XG5cdFx0aWYocHJldikgcmV0dXJuIHByZXYoZXZlbnQpO1xuXHR9O1xuXHR2YXIgdGltZW91dCA9IHNldFRpbWVvdXQob25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHVuZGVmaW5lZCwgeyB0eXBlOiAndGltZW91dCcsIHRhcmdldDogc2NyaXB0IH0pLCAxMjAwMDApO1xuXHRzY3JpcHQub25lcnJvciA9IG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCBzY3JpcHQub25lcnJvcik7XG5cdHNjcmlwdC5vbmxvYWQgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9ubG9hZCk7XG5cdG5lZWRBdHRhY2ggJiYgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xufTsiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiYnVuZGxlXCI6IDBcbn07XG5cbl9fd2VicGFja19yZXF1aXJlX18uZi5qID0gKGNodW5rSWQsIHByb21pc2VzKSA9PiB7XG5cdFx0Ly8gSlNPTlAgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXHRcdHZhciBpbnN0YWxsZWRDaHVua0RhdGEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSA/IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA6IHVuZGVmaW5lZDtcblx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIHsgLy8gMCBtZWFucyBcImFscmVhZHkgaW5zdGFsbGVkXCIuXG5cblx0XHRcdC8vIGEgUHJvbWlzZSBtZWFucyBcImN1cnJlbnRseSBsb2FkaW5nXCIuXG5cdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcblx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYodHJ1ZSkgeyAvLyBhbGwgY2h1bmtzIGhhdmUgSlNcblx0XHRcdFx0XHQvLyBzZXR1cCBQcm9taXNlIGluIGNodW5rIGNhY2hlXG5cdFx0XHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiAoaW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gW3Jlc29sdmUsIHJlamVjdF0pKTtcblx0XHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSA9IHByb21pc2UpO1xuXG5cdFx0XHRcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuXHRcdFx0XHRcdHZhciB1cmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLnUoY2h1bmtJZCk7XG5cdFx0XHRcdFx0Ly8gY3JlYXRlIGVycm9yIGJlZm9yZSBzdGFjayB1bndvdW5kIHRvIGdldCB1c2VmdWwgc3RhY2t0cmFjZSBsYXRlclxuXHRcdFx0XHRcdHZhciBlcnJvciA9IG5ldyBFcnJvcigpO1xuXHRcdFx0XHRcdHZhciBsb2FkaW5nRW5kZWQgPSAoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpKSB7XG5cdFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcblx0XHRcdFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhICE9PSAwKSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuXHRcdFx0XHRcdFx0XHRcdHZhciBlcnJvclR5cGUgPSBldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnID8gJ21pc3NpbmcnIDogZXZlbnQudHlwZSk7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIHJlYWxTcmMgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnNyYztcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5tZXNzYWdlID0gJ0xvYWRpbmcgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC5cXG4oJyArIGVycm9yVHlwZSArICc6ICcgKyByZWFsU3JjICsgJyknO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLm5hbWUgPSAnQ2h1bmtMb2FkRXJyb3InO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLnR5cGUgPSBlcnJvclR5cGU7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG5cdFx0XHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhWzFdKGVycm9yKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5sKHVybCwgbG9hZGluZ0VuZGVkLCBcImNodW5rLVwiICsgY2h1bmtJZCwgY2h1bmtJZCk7XG5cdFx0XHRcdH0gZWxzZSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHRcdFx0fVxuXHRcdH1cbn07XG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmt0b2RvX2lzdF9vbmVcIl0gPSBzZWxmW1wid2VicGFja0NodW5rdG9kb19pc3Rfb25lXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi4vc3R5bGVzL3N0eWxlcy5jc3MnXHJcbmltcG9ydCBET01NYW5hZ2VyIGZyb20gJy4vZG9tX21hbmFnZXIuanMnXHJcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdC5qcydcclxuaW1wb3J0IFByb2plY3RNYW5hZ2VyIGZyb20gJy4vcHJvamVjdF9tYW5hZ2VyJ1xyXG5pbXBvcnQgVGFzayBmcm9tICcuL3Rhc2snXHJcbmltcG9ydCBUYXNrTWFuYWdlciBmcm9tICcuL3Rhc2tfbWFuYWdlcidcclxuXHJcbi8vIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdwcm9qZWN0cycpXHJcbmNvbnN0IGRvbU1hbmFnZXIgPSBuZXcgRE9NTWFuYWdlcigpXHJcbmNvbnN0IHByb2plY3RNYW5hZ2VyID0gbmV3IFByb2plY3RNYW5hZ2VyKClcclxuXHJcbndpbmRvdy5sb2NhdGlvbi5oYXNoID0nJ1xyXG4vL0NyZWF0ZSBQcm9qZWN0IGxpc3QgY29udGFpbmVyXHJcbmNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxucHJvamVjdExpc3QuY2xhc3NOYW1lID0gJ2ZsZXggZmxleC1jb2wgZ2FwLTInXHJcblxyXG5cclxuZnVuY3Rpb24gZGlzcGxheU5ld1Byb2plY3QocHJvamVjdCl7XHJcbiAgICBcclxuICAgIC8vRGlzcGxheSBEZWZhdWx0IFByb2plY3RcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvbU1hbmFnZXIuY3JlYXRlUHJvamVjdENvbnRhaW5lcihwcm9qZWN0Lm5hbWUpXHJcbiAgICAvLyBBcHBlbmQgdG8gbGlzdFxyXG4gICAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQoY29udGFpbmVyKVxyXG4gICAgXHJcbiAgICAvLyBhZGRFdmVudExpc3RlbmVyVG9Qcm9qZWN0KClcclxufVxyXG5mdW5jdGlvbiBkaXNwbGF5UHJvamVjdENyZWRlbnRpYWxzKHByb2plY3Qpe1xyXG4gICAgY29uc3QgcHJvamVjdEhlYWRlciA9IGRvbU1hbmFnZXIuY3JlYXRlUHJvamVjdEhlYWRlcihwcm9qZWN0KVxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RIZWFkZXIpXHJcbiAgICAvL1Byb2plY3QgZGVzY3JpcHRpb24gYW5kIG5ldyB0YXNrIGJ0blxyXG4gICAgY29uc3QgZGVzY05CdG5Db250YWluZXIgPSBkb21NYW5hZ2VyLmNyZWF0ZUNvbnRhaW5lcigpXHJcbiAgICBkZXNjTkJ0bkNvbnRhaW5lci5jbGFzc05hbWUgPSAnZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHctZnVsbCdcclxuICAgIC8vREVTQ1JJUFRJT05cclxuICAgIGNvbnN0IHByb2plY3REZXNjcmlwdGlvbiA9IGRvbU1hbmFnZXIuY3JlYXRlUHJvamVjdERlc2NyaXB0aW9uKHByb2plY3QuZ2V0RGVzY3JpcHRpb24oKSlcclxuICAgIHByb2plY3REZXNjcmlwdGlvbi5pZCA9ICdwcm9qZWN0LWRlc2NyaXB0aW9uJ1xyXG4gICAgLy9EaXNwbGF5IGRlc2NyaXB0aW9uXHJcbiAgICBkZXNjTkJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0RGVzY3JpcHRpb24pXHJcbiAgICBcclxuICAgIC8vICBOZXcgdGFzayBidXR0b25cclxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSAnTmV3IFRhc2snXHJcbiAgICBidXR0b24uY2xhc3NOYW1lID0gJ2JnLXNsYXRlLTMwMCB0ZXh0LWJsdWUtNzAwIHB5LTIgcHgtNCByb3VuZGVkLW1kIGhvdmVyOmJnLXNsYXRlLTEwMCdcclxuICAgIGJ1dHRvbi5pZCA9ICduZXctdGFzay1idG4nXHJcbiAgICBcclxuICAgIC8vRGlzcGxheSBidG5cclxuICAgIGRlc2NOQnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbilcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjTkJ0bkNvbnRhaW5lcilcclxuICAgIFxyXG59XHJcbi8vRGlzcGxheSBtb3JlIGFuPW91dCB0aGUgcHJvamVjdFxyXG5mdW5jdGlvbiBkaXNwbGF5VGFza3NDb250YWluZXIoKXtcclxuICAgIC8vVGFza3MgY29udGFpbmVyXHJcbiAgICBjb25zdCB0YXNrc0NvbnRhaW5lciA9IGRvbU1hbmFnZXIuY3JlYXRlQ29udGFpbmVyKClcclxuICAgIHRhc2tzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3ctZnVsbCcsICdiZy1ibHVlLTYwMCcsICdncmlkJywgJ2dyaWQtMicsICdnYXAtNCcpXHJcbiAgICB0YXNrc0NvbnRhaW5lci5pZCA9ICd0YXNrLWNvbnRhaW5lcidcclxuICAgIFxyXG4gICAgLy9ObyB0YXNrcyB0byBkaXNwbGF5XHJcbiAgICBjb25zdCBwYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgIHBhci5jbGFzc05hbWUgPSAndGV4dC1zbGF0ZS0yMDAgdGV4dC1jZW50ZXIgdGV4dC0zeGwgZm9udC1tZWRpdW0nXHJcbiAgICBwYXIuaWQgPSAnbm8tdGFza3MnXHJcbiAgICBwYXIudGV4dENvbnRlbnQgPSAnTm8gVGFza3MgTGlzdGVkIEhlcmUnXHJcbiAgICB0YXNrc0NvbnRhaW5lci5hcHBlbmRDaGlsZChwYXIpXHJcbiAgICAgXHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGFza3NDb250YWluZXIpXHJcbiAgICB9XHJcbmZ1bmN0aW9uIGRpc3BsYXlDdXJyZW50UHJvamVjdCAocHJvamVjdCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQtY29udGFpbmVyICNwcm9qZWN0LW5hbWUnKS50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZVxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtZGVzY3JpcHRpb24gcCcpLnRleHRDb250ZW50ID0gcHJvamVjdC5kZXNjcmlwdGlvblxyXG59XHJcblxyXG4vL0dldCBjdXJyZW50dGx5IGRpc3BsYXlpbmcgcHJvamVjdCBmcm9tIGxvY2Fsc3RvcmFnZVxyXG5mdW5jdGlvbiBnZXRDdXJyZW50UHJvamVjdCgpe1xyXG4gICAgY29uc3QgcHJvamVjdHMgPSBwcm9qZWN0TWFuYWdlci5hY2Nlc3NMb2NhbFN0b3JhZ2UoKVxyXG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSB3aW5kb3cubG9jYXRpb24uaGFzaC5zdWJzdHJpbmcoMSkucmVwbGFjZUFsbCgnLScsICcgJylcclxuICAgIGlmKHByb2plY3ROYW1lKVxyXG4gICAgICAgIHJldHVybiBwcm9qZWN0cy5maW5kKHByb2plY3QgPT4gcHJvamVjdC5uYW1lID09PSBwcm9qZWN0TmFtZSlcclxuICAgIGVsc2UgXHJcbiAgICAgICAgcmV0dXJuIHByb2plY3RzLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0Lm5hbWUgPT09ICdUb2RheScpXHJcbn1cclxuLy9TdG9yZSBwcm9qZWN0IGluIGxvY2FsIHN0b3JhZ2VcclxuZnVuY3Rpb24gc2F2ZVByb2plY3QgKHByb2plY3QpIHtcclxuICAgIHByb2plY3RNYW5hZ2VyLmFkZFRvUHJvamVjdExpc3QocHJvamVjdC50b0pTT04oKSlcclxuICAgIHByb2plY3RNYW5hZ2VyLnVwZGF0ZUxvY2FsU3RvcmFnZSgpXHJcbiAgICBcclxufVxyXG4vLyBDcmVhdGUgYW5kIGRpc3BsYXkgaGVhZGVyXHJcbmNvbnN0IGhlYWRlciA9IGRvbU1hbmFnZXIuY3JlYXRlSGVhZGVyKClcclxuICAgIGNvbnN0IGxvZ28gPSBkb21NYW5hZ2VyLmNyZWF0ZUxvZ28oJ1BsYW5zZW4nKVxyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGxvZ28pXHJcbiAgICBkb2N1bWVudC5ib2R5LnByZXBlbmQoaGVhZGVyKVxyXG5cclxuICAgIC8vc2lkZWJhclxyXG5jb25zdCBzaWRlYmFyID0gZG9tTWFuYWdlci5jcmVhdGVTaWRlYmFyKClcclxuZG9tTWFuYWdlci5yZW5kZXIoc2lkZWJhcilcclxuc2lkZWJhci5pZCA9ICdtYWluLXNpZGUtYmFyJ1xyXG5cclxuLy9Db250ZW50IGNvbnRhaW5lclxyXG5jb25zdCBjb250YWluZXIgPSBkb21NYW5hZ2VyLmNyZWF0ZUNvbnRhaW5lcigpXHJcbmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdiZy1ibHVlLTcwMCcsICdmbGV4JywnZmxleC1jb2wnLCAnaXRlbXMtc3RhcnQnLCAnanVzdGlmeS1zdGFydCcsICdnYXAtMicpXHJcbiAgICBjb250YWluZXIuaWQgPSAnY29udGVudC1jb250YWluZXInXHJcbiAgICBkb21NYW5hZ2VyLnJlbmRlcihjb250YWluZXIpXHJcbiAgICBcclxuICAgIC8vRm9vdGVyXHJcbmNvbnN0IGZvb3RlciA9IGRvbU1hbmFnZXIuY3JlYXRlRm9vdGVyKClcclxuc2lkZWJhci5hcHBlbmRDaGlsZChmb290ZXIpXHJcblxyXG4vL1VzZXIgcHJvZmlsZVxyXG5jb25zdCBwcm9maWxlID0gZG9tTWFuYWdlci5jcmVhdGVVc2VyUHJvZmlsZSgnVGhlIEFyY2hpdGVjaCcpXHJcbmhlYWRlci5hcHBlbmRDaGlsZChwcm9maWxlKVxyXG5oZWFkZXIuY2xhc3NMaXN0LmFkZCgnZmxleCcsICdmbGV4LXJvdycsICdqdXN0aWZ5LWJldHdlZW4nLCAnaXRlbXMtY2VudGVyJylcclxuXHJcbi8vSW1wb3J0IHByb2ZpbGUgcGljXHJcbiAgICBpbXBvcnQoJy4uL2ltYWdlcy9wcm9maWxlLXBpYy5wbmcnKS50aGVuKCh7ZGVmYXVsdDpwaWN9KSA9PntcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvZmlsZS1waWN0dXJlJykuc3JjID0gcGljXHJcbiAgICB9KS5jYXRjaCgoZXJyb3IpPT5jb25zb2xlLmVycm9yKGBFcnJvciBvY3V1cmVkIHdoaWxlIGltcG9ydGluZyBwcm9maWxlIHBpYzogJHtlcnJvcn1gKSlcclxuXHJcbiAgICAvL1Byb2plY3RzIGhlYWRlclxyXG4gICAgY29uc3QgcHJvamVjdHNIZWFkZXIgPSBkb21NYW5hZ2VyLmNyZWF0ZUNvbnRhaW5lcigpXHJcbiAgICBwcm9qZWN0c0hlYWRlci5jbGFzc05hbWUgPSAnZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGJnLWJsdWUtNjAwIHB4LTQgcHktMidcclxuICAgIHByb2plY3RzSGVhZGVyLmlkID0gJ3Byb2plY3RzLWhlYWRlcidcclxuXHJcbiAgICAvL0hlYWRpbmdcclxuICAgIGNvbnN0IGhlYWRpbmcgPSBkb21NYW5hZ2VyLmNyZWF0ZUhlYWRpbmcoJ015IFByb2plY3RzJylcclxuICAgIGhlYWRpbmcuY2xhc3NMaXN0LmFkZCgnZm9udC1tZWRpdW0nLCAndy1mdWxsJylcclxuICAgIHByb2plY3RzSGVhZGVyLmFwcGVuZENoaWxkKGhlYWRpbmcpXHJcbiAgICBcclxuICAgIC8vIE5ldyBwcm9qZWN0IEFkZCBidXR0b25cclxuICAgIGNvbnN0IGFkZEJ0biA9IGRvbU1hbmFnZXIuY3JlYXRlQWRkQnV0dG9uKClcclxuICAgIGFkZEJ0bi5pZCA9ICduZXctcHJvamVjdC1idG4nXHJcbiAgICBwcm9qZWN0c0hlYWRlci5hcHBlbmRDaGlsZChhZGRCdG4pXHJcbiAgICBcclxuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQocHJvamVjdHNIZWFkZXIpIFxyXG5cclxuLy9DcmVhdGUgZGVmYXVsdCBQcm9qZWN0XHJcbmNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gbmV3IFByb2plY3QoJ1RvZGF5JylcclxuICAgIGRlZmF1bHRQcm9qZWN0LnNldERlc2NyaXB0aW9uKCdUb2RheVxcJ3MgQWN0aXZpdGllcycpXHJcbiAgICBwcm9qZWN0TWFuYWdlci5hZGRUb1Byb2plY3RMaXN0KGRlZmF1bHRQcm9qZWN0LnRvSlNPTigpKSAvL0FkZCB0byBwcm9qZWN0c1xyXG4gICAgZGlzcGxheU5ld1Byb2plY3QoZGVmYXVsdFByb2plY3QpXHJcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHByb2plY3RMaXN0KVxyXG5cclxuICAgIC8vRGlzcGxheSBkZWZhdWx0IHByb2plY3QgZGV0YWlsc1xyXG4gICAgZGlzcGxheVByb2plY3RDcmVkZW50aWFscyhkZWZhdWx0UHJvamVjdClcclxuICAgIGRpc3BsYXlUYXNrc0NvbnRhaW5lcigpXHJcblxyXG4gICAgXHJcbi8vQ3JlYXRlIG5ldyBQcm9qZWN0XHJcbi8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoZSkgPT57XHJcbiAgICBcclxuICAgIC8vQWNjZXNzIGFuZCBkaXNwbGF5IHByb2plY3RzIGZyb20gbG9jYWxzdG9yYWdlXHJcbiAgICBjb25zdCBwcm9qZWN0cyA9IHByb2plY3RNYW5hZ2VyLmFjY2Vzc0xvY2FsU3RvcmFnZSgpXHJcbiAgICBpZihBcnJheS5pc0FycmF5KHByb2plY3RzKSl7XHJcbiAgICAgICAgcHJvamVjdExpc3QuaW5uZXJIVE1MID0gJydcclxuICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT57XHJcbiAgICAgICAgICAgIGRpc3BsYXlOZXdQcm9qZWN0KHByb2plY3QpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgICAgcHJvamVjdE1hbmFnZXIudXBkYXRlTG9jYWxTdG9yYWdlKClcclxuICAgIH1cclxuXHJcbiAgICAvL0NyZWF0ZSBuZXcgUHJvamVjdFxyXG4gICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+e1xyXG4gICAgICAgIC8vcHJvamVjdCBtYW5hZ2VyIGNyZWF0ZSBuZXcgcHJvamVjdFxyXG4gICAgICAgIGRvbU1hbmFnZXIuZGlzcGxheUZvcm0oJyNwcm9qZWN0LWZvcm0nKVxyXG4gICAgICAgIC8vQ2xvc2UgZm9ybSBvbiBDQU5DRUxMXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hpZGUtcHJvamVjdC1mb3JtJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcclxuICAgICAgICAgICAgZG9tTWFuYWdlci5oaWRlRm9ybSgnI3Byb2plY3QtZm9ybScpXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbiAgICAvL0FkZCBldmVudCBsaXN0ZW5lciB0byBmb3JtXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtI3Byb2plY3QtZm9ybScpLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT57XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBkb21NYW5hZ2VyLmdldEZvcm1EYXRhKCcjcHJvamVjdC1mb3JtJykvL0dldCBkYXRhXHJcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KGRhdGFbMF0pLy9DcmVhdGUgbmV3IFByb2plY3RcclxuICAgICAgICBwcm9qZWN0LnNldERlc2NyaXB0aW9uKGRhdGFbMV0pXHJcbiAgICAgICAgc2F2ZVByb2plY3QocHJvamVjdCkgLy9BZGQgdG8gcHJvamVjdCBsaXN0IGFuZCB1cGRhdGUgbG9jYWxTdG9yYWdlXHJcbiAgICAgICAgZGlzcGxheU5ld1Byb2plY3QocHJvamVjdCkvL0Rpc3BsYXkgUHJvamVjdCBjb250YWluZXJcclxuICAgICAgICBkb21NYW5hZ2VyLmhpZGVGb3JtKCcjcHJvamVjdC1mb3JtJykgLy9oaWRlIHByb2plY3QgZm9ybVxyXG4gICAgfSlcclxuXHJcbiAgICAvL05ld1Rhc2tcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctdGFzay1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xyXG4gICAgICAgIGRvbU1hbmFnZXIuZGlzcGxheUZvcm0oJyN0YXNrLWZvcm0nKVxyXG4gICAgICAgIC8vSGlkZSBmb3JtIG9uIGJ0biBjbGlja1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNoaWRlLXRhc2stZm9ybScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XHJcbiAgICAgICAgICAgIGRvbU1hbmFnZXIuaGlkZUZvcm0oJyN0YXNrLWZvcm0nKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy9DcmVhdGUgdGFza1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0jdGFzay1mb3JtJykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+e1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICAgLy9nZXQgZGF0YVxyXG4gICAgICAgICAgICBjb25zdCBpbnB1dCA9IGRvbU1hbmFnZXIuZ2V0Rm9ybURhdGEoJyN0YXNrLWZvcm0nKVxyXG5cclxuICAgICAgICAgICAgLy9Jbml0aWFsaXplIGRhdGEgb2JqZWN0XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogaW5wdXRbMF0sXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogaW5wdXRbMV0sXHJcbiAgICAgICAgICAgICAgICBkdWVEYXRlOiBpbnB1dFsyXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgLy9HZXQgY3VycmVudCBwcm9qZWN0XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gZ2V0Q3VycmVudFByb2plY3QoKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICAgICAgICBkb21NYW5hZ2VyLmhpZGVGb3JtKCcjdGFzay1mb3JtJylcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxuICAgIC8vIGFkZEV2ZW50TGlzdGVuZXJUb1Byb2plY3QoKS8vQWRkIGV2ZW50IGxpc3RlbmVyIHRvIHByb2plY3QgZXZlcnkgdGltZSBwYWdlIGlzIGxvYWRlZFxyXG59KVxyXG4vL0Rpc3BsYXkgQ3VycmVudCBwcm9qZWN0XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgKCkgPT57XHJcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IGdldEN1cnJlbnRQcm9qZWN0KClcclxuICAgIGRpc3BsYXlDdXJyZW50UHJvamVjdChjdXJyZW50UHJvamVjdClcclxufSlcclxud2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdoYXNoY2hhbmdlJykpXHJcbi8vIGNvbnNvbGUubG9nKGdldEN1cnJlbnRQcm9qZWN0KCkpXHJcblxyXG5cclxuXHJcbi8qKl9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXHJcbiAqT3BlbiBQcm9qZWN0IHRvIHZpZXcgcHJvamVjdCBkZXRhaWxzIFxyXG4gKiBcclxuICogV2hlbiBQcm9qZWN0IGlzIGNsaWNrZWQsIHRoZSBEb20gaXMgcG9wdWxhdGVkIHdpdGggcHJvamVjdCBkZWF0YWlsc1xyXG4gKiAqLyAgICBcclxuXHJcbiAgIFxyXG4gICAgXHJcblxyXG4gICAgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9