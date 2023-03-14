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
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'console'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/styles.css */ "./src/styles/styles.css");
/* harmony import */ var _dom_manager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom_manager.js */ "./src/scripts/dom_manager.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project.js */ "./src/scripts/project.js");
/* harmony import */ var _project_manager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project_manager */ "./src/scripts/project_manager.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./task */ "./src/scripts/task.js");
/* harmony import */ var _task_manager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./task_manager */ "./src/scripts/task_manager.js");








// localStorage.removeItem('projects')
const domManager = new _dom_manager_js__WEBPACK_IMPORTED_MODULE_2__["default"]()
const projectManager = new _project_manager__WEBPACK_IMPORTED_MODULE_4__["default"]()

window.location.hash =''
//Create Project list container
const projectList = document.createElement('div')
projectList.className = 'flex flex-col gap-2'


function controlProjectDisplay () {
    window.addEventListener('hashchange', () =>{
        const projectName = window.location.hash.substring(1).replaceAll('-', ' ')
        const currentProject = getCurrentProject(projectName)
        displayCurrentProject(currentProject)
        console.log(currentProject)
    })
}
function getCurrentProject(projectName){
    const projects = projectManager.accessLocalStorage()
    return projects.find(project => project.name === projectName)
}
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
const defaultProject = new _project_js__WEBPACK_IMPORTED_MODULE_3__["default"]('Today')
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
        const project = new _project_js__WEBPACK_IMPORTED_MODULE_3__["default"](data[0])//Create new Project
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
                title: 'input[0]',
                description: 'input[1]',
                dueDate: 'input[2]',
            }
            console.log(data)
            //closeForm
            domManager.hideForm('#task-form')
        })
    })
    // addEventListenerToProject()//Add event listener to project every time page is loaded
})
controlProjectDisplay()
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFdBQVcsWUFBWSxXQUFXLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sTUFBTSxNQUFNLE1BQU0sVUFBVSxNQUFNLE9BQU8sTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sT0FBTyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxNQUFNLE1BQU0saUJBQWlCLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLE9BQU8sWUFBWSxXQUFXLFVBQVUsTUFBTSxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sT0FBTyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sTUFBTSxNQUFNLFVBQVUsT0FBTyxNQUFNLE1BQU0sS0FBSyxVQUFVLE9BQU8sUUFBUSxNQUFNLFlBQVksVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLE1BQU0sTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLGFBQWEsTUFBTSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM5Q2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDNURlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksOExBQW1DLFFBQVEsWUFBWTtBQUMzRDtBQUNBLEtBQUssNkVBQTZFLE1BQU07QUFDeEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsbURBQU87QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG1EQUFPO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8taXN0LS1vbmUvLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1pc3QtLW9uZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1pc3QtLW9uZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby1pc3QtLW9uZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8taXN0LS1vbmUvLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3M/ZTQ1YiIsIndlYnBhY2s6Ly90b2RvLWlzdC0tb25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8taXN0LS1vbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8taXN0LS1vbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1pc3QtLW9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWlzdC0tb25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1pc3QtLW9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8taXN0LS1vbmUvLi9zcmMvc2NyaXB0cy9kb21fbWFuYWdlci5qcyIsIndlYnBhY2s6Ly90b2RvLWlzdC0tb25lLy4vc3JjL3NjcmlwdHMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWlzdC0tb25lLy4vc3JjL3NjcmlwdHMvcHJvamVjdF9tYW5hZ2VyLmpzIiwid2VicGFjazovL3RvZG8taXN0LS1vbmUvLi9zcmMvc2NyaXB0cy90YXNrLmpzIiwid2VicGFjazovL3RvZG8taXN0LS1vbmUvLi9zcmMvc2NyaXB0cy90YXNrX21hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1pc3QtLW9uZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWlzdC0tb25lL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8taXN0LS1vbmUvd2VicGFjay9ydW50aW1lL2NyZWF0ZSBmYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1pc3QtLW9uZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1pc3QtLW9uZS93ZWJwYWNrL3J1bnRpbWUvZW5zdXJlIGNodW5rIiwid2VicGFjazovL3RvZG8taXN0LS1vbmUvd2VicGFjay9ydW50aW1lL2dldCBqYXZhc2NyaXB0IGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovL3RvZG8taXN0LS1vbmUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWlzdC0tb25lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1pc3QtLW9uZS93ZWJwYWNrL3J1bnRpbWUvbG9hZCBzY3JpcHQiLCJ3ZWJwYWNrOi8vdG9kby1pc3QtLW9uZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8taXN0LS1vbmUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1pc3QtLW9uZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvLWlzdC0tb25lL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWlzdC0tb25lLy4vc3JjL3NjcmlwdHMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy90b2RvLWJnLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qXFxyXFxuISB0YWlsd2luZGNzcyB2My4yLjcgfCBNSVQgTGljZW5zZSB8IGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tXFxyXFxuKi9cXHJcXG5cXHJcXG4vKlxcclxcbjEuIFByZXZlbnQgcGFkZGluZyBhbmQgYm9yZGVyIGZyb20gYWZmZWN0aW5nIGVsZW1lbnQgd2lkdGguIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzQpXFxyXFxuMi4gQWxsb3cgYWRkaW5nIGEgYm9yZGVyIHRvIGFuIGVsZW1lbnQgYnkganVzdCBhZGRpbmcgYSBib3JkZXItd2lkdGguIChodHRwczovL2dpdGh1Yi5jb20vdGFpbHdpbmRjc3MvdGFpbHdpbmRjc3MvcHVsbC8xMTYpXFxyXFxuKi9cXHJcXG5cXHJcXG4qLFxcclxcbjo6YmVmb3JlLFxcclxcbjo6YWZ0ZXIge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIC8qIDEgKi9cXHJcXG4gIGJvcmRlci13aWR0aDogMDtcXHJcXG4gIC8qIDIgKi9cXHJcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuICAvKiAyICovXFxyXFxuICBib3JkZXItY29sb3I6ICNlNWU3ZWI7XFxyXFxuICAvKiAyICovXFxyXFxufVxcclxcblxcclxcbjo6YmVmb3JlLFxcclxcbjo6YWZ0ZXIge1xcclxcbiAgLS10dy1jb250ZW50OiAnJztcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4xLiBVc2UgYSBjb25zaXN0ZW50IHNlbnNpYmxlIGxpbmUtaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXHJcXG4yLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cXHJcXG4zLiBVc2UgYSBtb3JlIHJlYWRhYmxlIHRhYiBzaXplLlxcclxcbjQuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgYHNhbnNgIGZvbnQtZmFtaWx5IGJ5IGRlZmF1bHQuXFxyXFxuNS4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBgc2Fuc2AgZm9udC1mZWF0dXJlLXNldHRpbmdzIGJ5IGRlZmF1bHQuXFxyXFxuKi9cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxyXFxuICAvKiAxICovXFxyXFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxyXFxuICAvKiAyICovXFxyXFxuICAtbW96LXRhYi1zaXplOiA0O1xcclxcbiAgLyogMyAqL1xcclxcbiAgLW8tdGFiLXNpemU6IDQ7XFxyXFxuICAgICB0YWItc2l6ZTogNDtcXHJcXG4gIC8qIDMgKi9cXHJcXG4gIGZvbnQtZmFtaWx5OiB1aS1zYW5zLXNlcmlmLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBBcmlhbCwgXFxcIk5vdG8gU2Fuc1xcXCIsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiLCBcXFwiTm90byBDb2xvciBFbW9qaVxcXCI7XFxyXFxuICAvKiA0ICovXFxyXFxuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IG5vcm1hbDtcXHJcXG4gIC8qIDUgKi9cXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4xLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuMi4gSW5oZXJpdCBsaW5lLWhlaWdodCBmcm9tIGBodG1sYCBzbyB1c2VycyBjYW4gc2V0IHRoZW0gYXMgYSBjbGFzcyBkaXJlY3RseSBvbiB0aGUgYGh0bWxgIGVsZW1lbnQuXFxyXFxuKi9cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIC8qIDEgKi9cXHJcXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xcclxcbiAgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbjEuIEFkZCB0aGUgY29ycmVjdCBoZWlnaHQgaW4gRmlyZWZveC5cXHJcXG4yLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBvZiBib3JkZXIgY29sb3IgaW4gRmlyZWZveC4gKGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTE5MDY1NSlcXHJcXG4zLiBFbnN1cmUgaG9yaXpvbnRhbCBydWxlcyBhcmUgdmlzaWJsZSBieSBkZWZhdWx0LlxcclxcbiovXFxyXFxuXFxyXFxuaHIge1xcclxcbiAgaGVpZ2h0OiAwO1xcclxcbiAgLyogMSAqL1xcclxcbiAgY29sb3I6IGluaGVyaXQ7XFxyXFxuICAvKiAyICovXFxyXFxuICBib3JkZXItdG9wLXdpZHRoOiAxcHg7XFxyXFxuICAvKiAzICovXFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxyXFxuKi9cXHJcXG5cXHJcXG5hYmJyOndoZXJlKFt0aXRsZV0pIHtcXHJcXG4gIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcclxcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuUmVtb3ZlIHRoZSBkZWZhdWx0IGZvbnQgc2l6ZSBhbmQgd2VpZ2h0IGZvciBoZWFkaW5ncy5cXHJcXG4qL1xcclxcblxcclxcbmgxLFxcclxcbmgyLFxcclxcbmgzLFxcclxcbmg0LFxcclxcbmg1LFxcclxcbmg2IHtcXHJcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcblJlc2V0IGxpbmtzIHRvIG9wdGltaXplIGZvciBvcHQtaW4gc3R5bGluZyBpbnN0ZWFkIG9mIG9wdC1vdXQuXFxyXFxuKi9cXHJcXG5cXHJcXG5hIHtcXHJcXG4gIGNvbG9yOiBpbmhlcml0O1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbkFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBFZGdlIGFuZCBTYWZhcmkuXFxyXFxuKi9cXHJcXG5cXHJcXG5iLFxcclxcbnN0cm9uZyB7XFxyXFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbjEuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgYG1vbm9gIGZvbnQgZmFtaWx5IGJ5IGRlZmF1bHQuXFxyXFxuMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiovXFxyXFxuXFxyXFxuY29kZSxcXHJcXG5rYmQsXFxyXFxuc2FtcCxcXHJcXG5wcmUge1xcclxcbiAgZm9udC1mYW1pbHk6IHVpLW1vbm9zcGFjZSwgU0ZNb25vLVJlZ3VsYXIsIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCBcXFwiTGliZXJhdGlvbiBNb25vXFxcIiwgXFxcIkNvdXJpZXIgTmV3XFxcIiwgbW9ub3NwYWNlO1xcclxcbiAgLyogMSAqL1xcclxcbiAgZm9udC1zaXplOiAxZW07XFxyXFxuICAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuKi9cXHJcXG5cXHJcXG5zbWFsbCB7XFxyXFxuICBmb250LXNpemU6IDgwJTtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5QcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiovXFxyXFxuXFxyXFxuc3ViLFxcclxcbnN1cCB7XFxyXFxuICBmb250LXNpemU6IDc1JTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG5zdWIge1xcclxcbiAgYm90dG9tOiAtMC4yNWVtO1xcclxcbn1cXHJcXG5cXHJcXG5zdXAge1xcclxcbiAgdG9wOiAtMC41ZW07XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuMS4gUmVtb3ZlIHRleHQgaW5kZW50YXRpb24gZnJvbSB0YWJsZSBjb250ZW50cyBpbiBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTk5OTA4OCwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTIwMTI5NylcXHJcXG4yLiBDb3JyZWN0IHRhYmxlIGJvcmRlciBjb2xvciBpbmhlcml0YW5jZSBpbiBhbGwgQ2hyb21lIGFuZCBTYWZhcmkuIChodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD05MzU3MjksIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTUwMTYpXFxyXFxuMy4gUmVtb3ZlIGdhcHMgYmV0d2VlbiB0YWJsZSBib3JkZXJzIGJ5IGRlZmF1bHQuXFxyXFxuKi9cXHJcXG5cXHJcXG50YWJsZSB7XFxyXFxuICB0ZXh0LWluZGVudDogMDtcXHJcXG4gIC8qIDEgKi9cXHJcXG4gIGJvcmRlci1jb2xvcjogaW5oZXJpdDtcXHJcXG4gIC8qIDIgKi9cXHJcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxyXFxuICAvKiAzICovXFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcclxcbjMuIFJlbW92ZSBkZWZhdWx0IHBhZGRpbmcgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiovXFxyXFxuXFxyXFxuYnV0dG9uLFxcclxcbmlucHV0LFxcclxcbm9wdGdyb3VwLFxcclxcbnNlbGVjdCxcXHJcXG50ZXh0YXJlYSB7XFxyXFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXHJcXG4gIC8qIDEgKi9cXHJcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXHJcXG4gIC8qIDEgKi9cXHJcXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xcclxcbiAgLyogMSAqL1xcclxcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxyXFxuICAvKiAxICovXFxyXFxuICBjb2xvcjogaW5oZXJpdDtcXHJcXG4gIC8qIDEgKi9cXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIC8qIDIgKi9cXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICAvKiAzICovXFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlIGFuZCBGaXJlZm94LlxcclxcbiovXFxyXFxuXFxyXFxuYnV0dG9uLFxcclxcbnNlbGVjdCB7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4xLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcclxcbjIuIFJlbW92ZSBkZWZhdWx0IGJ1dHRvbiBzdHlsZXMuXFxyXFxuKi9cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxuW3R5cGU9J2J1dHRvbiddLFxcclxcblt0eXBlPSdyZXNldCddLFxcclxcblt0eXBlPSdzdWJtaXQnXSB7XFxyXFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXHJcXG4gIC8qIDEgKi9cXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgLyogMiAqL1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcXHJcXG4gIC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5Vc2UgdGhlIG1vZGVybiBGaXJlZm94IGZvY3VzIHN0eWxlIGZvciBhbGwgZm9jdXNhYmxlIGVsZW1lbnRzLlxcclxcbiovXFxyXFxuXFxyXFxuOi1tb3otZm9jdXNyaW5nIHtcXHJcXG4gIG91dGxpbmU6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuUmVtb3ZlIHRoZSBhZGRpdGlvbmFsIGA6aW52YWxpZGAgc3R5bGVzIGluIEZpcmVmb3guIChodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9nZWNrby1kZXYvYmxvYi8yZjllYWNkOWQzZDk5NWM5MzdiNDI1MWE1NTU3ZDk1ZDQ5NGM5YmUxL2xheW91dC9zdHlsZS9yZXMvZm9ybXMuY3NzI0w3MjgtTDczNylcXHJcXG4qL1xcclxcblxcclxcbjotbW96LXVpLWludmFsaWQge1xcclxcbiAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5BZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSBhbmQgRmlyZWZveC5cXHJcXG4qL1xcclxcblxcclxcbnByb2dyZXNzIHtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5Db3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBTYWZhcmkuXFxyXFxuKi9cXHJcXG5cXHJcXG46Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxyXFxuOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4xLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXHJcXG4yLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXHJcXG4qL1xcclxcblxcclxcblt0eXBlPSdzZWFyY2gnXSB7XFxyXFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcXHJcXG4gIC8qIDEgKi9cXHJcXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4O1xcclxcbiAgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcblJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXHJcXG4qL1xcclxcblxcclxcbjo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxyXFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXHJcXG4yLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxyXFxuKi9cXHJcXG5cXHJcXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXHJcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcclxcbiAgLyogMSAqL1xcclxcbiAgZm9udDogaW5oZXJpdDtcXHJcXG4gIC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5BZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXHJcXG4qL1xcclxcblxcclxcbnN1bW1hcnkge1xcclxcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcblJlbW92ZXMgdGhlIGRlZmF1bHQgc3BhY2luZyBhbmQgYm9yZGVyIGZvciBhcHByb3ByaWF0ZSBlbGVtZW50cy5cXHJcXG4qL1xcclxcblxcclxcbmJsb2NrcXVvdGUsXFxyXFxuZGwsXFxyXFxuZGQsXFxyXFxuaDEsXFxyXFxuaDIsXFxyXFxuaDMsXFxyXFxuaDQsXFxyXFxuaDUsXFxyXFxuaDYsXFxyXFxuaHIsXFxyXFxuZmlndXJlLFxcclxcbnAsXFxyXFxucHJlIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuZmllbGRzZXQge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxubGVnZW5kIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbm9sLFxcclxcbnVsLFxcclxcbm1lbnUge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuUHJldmVudCByZXNpemluZyB0ZXh0YXJlYXMgaG9yaXpvbnRhbGx5IGJ5IGRlZmF1bHQuXFxyXFxuKi9cXHJcXG5cXHJcXG50ZXh0YXJlYSB7XFxyXFxuICByZXNpemU6IHZlcnRpY2FsO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbjEuIFJlc2V0IHRoZSBkZWZhdWx0IHBsYWNlaG9sZGVyIG9wYWNpdHkgaW4gRmlyZWZveC4gKGh0dHBzOi8vZ2l0aHViLmNvbS90YWlsd2luZGxhYnMvdGFpbHdpbmRjc3MvaXNzdWVzLzMzMDApXFxyXFxuMi4gU2V0IHRoZSBkZWZhdWx0IHBsYWNlaG9sZGVyIGNvbG9yIHRvIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBncmF5IDQwMCBjb2xvci5cXHJcXG4qL1xcclxcblxcclxcbmlucHV0OjotbW96LXBsYWNlaG9sZGVyLCB0ZXh0YXJlYTo6LW1vei1wbGFjZWhvbGRlciB7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbiAgLyogMSAqL1xcclxcbiAgY29sb3I6ICM5Y2EzYWY7XFxyXFxuICAvKiAyICovXFxyXFxufVxcclxcblxcclxcbmlucHV0OjpwbGFjZWhvbGRlcixcXHJcXG50ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG4gIC8qIDEgKi9cXHJcXG4gIGNvbG9yOiAjOWNhM2FmO1xcclxcbiAgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcblNldCB0aGUgZGVmYXVsdCBjdXJzb3IgZm9yIGJ1dHRvbnMuXFxyXFxuKi9cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxuW3JvbGU9XFxcImJ1dHRvblxcXCJdIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5NYWtlIHN1cmUgZGlzYWJsZWQgYnV0dG9ucyBkb24ndCBnZXQgdGhlIHBvaW50ZXIgY3Vyc29yLlxcclxcbiovXFxyXFxuXFxyXFxuOmRpc2FibGVkIHtcXHJcXG4gIGN1cnNvcjogZGVmYXVsdDtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4xLiBNYWtlIHJlcGxhY2VkIGVsZW1lbnRzIGBkaXNwbGF5OiBibG9ja2AgYnkgZGVmYXVsdC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvMTQpXFxyXFxuMi4gQWRkIGB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlYCB0byBhbGlnbiByZXBsYWNlZCBlbGVtZW50cyBtb3JlIHNlbnNpYmx5IGJ5IGRlZmF1bHQuIChodHRwczovL2dpdGh1Yi5jb20vamVuc2ltbW9ucy9jc3NyZW1lZHkvaXNzdWVzLzE0I2lzc3VlY29tbWVudC02MzQ5MzQyMTApXFxyXFxuICAgVGhpcyBjYW4gdHJpZ2dlciBhIHBvb3JseSBjb25zaWRlcmVkIGxpbnQgZXJyb3IgaW4gc29tZSB0b29scyBidXQgaXMgaW5jbHVkZWQgYnkgZGVzaWduLlxcclxcbiovXFxyXFxuXFxyXFxuaW1nLFxcclxcbnN2ZyxcXHJcXG52aWRlbyxcXHJcXG5jYW52YXMsXFxyXFxuYXVkaW8sXFxyXFxuaWZyYW1lLFxcclxcbmVtYmVkLFxcclxcbm9iamVjdCB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIC8qIDEgKi9cXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuICAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuQ29uc3RyYWluIGltYWdlcyBhbmQgdmlkZW9zIHRvIHRoZSBwYXJlbnQgd2lkdGggYW5kIHByZXNlcnZlIHRoZWlyIGludHJpbnNpYyBhc3BlY3QgcmF0aW8uIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0KVxcclxcbiovXFxyXFxuXFxyXFxuaW1nLFxcclxcbnZpZGVvIHtcXHJcXG4gIG1heC13aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLyogTWFrZSBlbGVtZW50cyB3aXRoIHRoZSBIVE1MIGhpZGRlbiBhdHRyaWJ1dGUgc3RheSBoaWRkZW4gYnkgZGVmYXVsdCAqL1xcclxcblxcclxcbltoaWRkZW5dIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiosIDo6YmVmb3JlLCA6OmFmdGVyIHtcXHJcXG4gIC0tdHctYm9yZGVyLXNwYWNpbmcteDogMDtcXHJcXG4gIC0tdHctYm9yZGVyLXNwYWNpbmcteTogMDtcXHJcXG4gIC0tdHctdHJhbnNsYXRlLXg6IDA7XFxyXFxuICAtLXR3LXRyYW5zbGF0ZS15OiAwO1xcclxcbiAgLS10dy1yb3RhdGU6IDA7XFxyXFxuICAtLXR3LXNrZXcteDogMDtcXHJcXG4gIC0tdHctc2tldy15OiAwO1xcclxcbiAgLS10dy1zY2FsZS14OiAxO1xcclxcbiAgLS10dy1zY2FsZS15OiAxO1xcclxcbiAgLS10dy1wYW4teDogIDtcXHJcXG4gIC0tdHctcGFuLXk6ICA7XFxyXFxuICAtLXR3LXBpbmNoLXpvb206ICA7XFxyXFxuICAtLXR3LXNjcm9sbC1zbmFwLXN0cmljdG5lc3M6IHByb3hpbWl0eTtcXHJcXG4gIC0tdHctb3JkaW5hbDogIDtcXHJcXG4gIC0tdHctc2xhc2hlZC16ZXJvOiAgO1xcclxcbiAgLS10dy1udW1lcmljLWZpZ3VyZTogIDtcXHJcXG4gIC0tdHctbnVtZXJpYy1zcGFjaW5nOiAgO1xcclxcbiAgLS10dy1udW1lcmljLWZyYWN0aW9uOiAgO1xcclxcbiAgLS10dy1yaW5nLWluc2V0OiAgO1xcclxcbiAgLS10dy1yaW5nLW9mZnNldC13aWR0aDogMHB4O1xcclxcbiAgLS10dy1yaW5nLW9mZnNldC1jb2xvcjogI2ZmZjtcXHJcXG4gIC0tdHctcmluZy1jb2xvcjogcmdiKDU5IDEzMCAyNDYgLyAwLjUpO1xcclxcbiAgLS10dy1yaW5nLW9mZnNldC1zaGFkb3c6IDAgMCAjMDAwMDtcXHJcXG4gIC0tdHctcmluZy1zaGFkb3c6IDAgMCAjMDAwMDtcXHJcXG4gIC0tdHctc2hhZG93OiAwIDAgIzAwMDA7XFxyXFxuICAtLXR3LXNoYWRvdy1jb2xvcmVkOiAwIDAgIzAwMDA7XFxyXFxuICAtLXR3LWJsdXI6ICA7XFxyXFxuICAtLXR3LWJyaWdodG5lc3M6ICA7XFxyXFxuICAtLXR3LWNvbnRyYXN0OiAgO1xcclxcbiAgLS10dy1ncmF5c2NhbGU6ICA7XFxyXFxuICAtLXR3LWh1ZS1yb3RhdGU6ICA7XFxyXFxuICAtLXR3LWludmVydDogIDtcXHJcXG4gIC0tdHctc2F0dXJhdGU6ICA7XFxyXFxuICAtLXR3LXNlcGlhOiAgO1xcclxcbiAgLS10dy1kcm9wLXNoYWRvdzogIDtcXHJcXG4gIC0tdHctYmFja2Ryb3AtYmx1cjogIDtcXHJcXG4gIC0tdHctYmFja2Ryb3AtYnJpZ2h0bmVzczogIDtcXHJcXG4gIC0tdHctYmFja2Ryb3AtY29udHJhc3Q6ICA7XFxyXFxuICAtLXR3LWJhY2tkcm9wLWdyYXlzY2FsZTogIDtcXHJcXG4gIC0tdHctYmFja2Ryb3AtaHVlLXJvdGF0ZTogIDtcXHJcXG4gIC0tdHctYmFja2Ryb3AtaW52ZXJ0OiAgO1xcclxcbiAgLS10dy1iYWNrZHJvcC1vcGFjaXR5OiAgO1xcclxcbiAgLS10dy1iYWNrZHJvcC1zYXR1cmF0ZTogIDtcXHJcXG4gIC0tdHctYmFja2Ryb3Atc2VwaWE6ICA7XFxyXFxufVxcclxcblxcclxcbjo6YmFja2Ryb3Age1xcclxcbiAgLS10dy1ib3JkZXItc3BhY2luZy14OiAwO1xcclxcbiAgLS10dy1ib3JkZXItc3BhY2luZy15OiAwO1xcclxcbiAgLS10dy10cmFuc2xhdGUteDogMDtcXHJcXG4gIC0tdHctdHJhbnNsYXRlLXk6IDA7XFxyXFxuICAtLXR3LXJvdGF0ZTogMDtcXHJcXG4gIC0tdHctc2tldy14OiAwO1xcclxcbiAgLS10dy1za2V3LXk6IDA7XFxyXFxuICAtLXR3LXNjYWxlLXg6IDE7XFxyXFxuICAtLXR3LXNjYWxlLXk6IDE7XFxyXFxuICAtLXR3LXBhbi14OiAgO1xcclxcbiAgLS10dy1wYW4teTogIDtcXHJcXG4gIC0tdHctcGluY2gtem9vbTogIDtcXHJcXG4gIC0tdHctc2Nyb2xsLXNuYXAtc3RyaWN0bmVzczogcHJveGltaXR5O1xcclxcbiAgLS10dy1vcmRpbmFsOiAgO1xcclxcbiAgLS10dy1zbGFzaGVkLXplcm86ICA7XFxyXFxuICAtLXR3LW51bWVyaWMtZmlndXJlOiAgO1xcclxcbiAgLS10dy1udW1lcmljLXNwYWNpbmc6ICA7XFxyXFxuICAtLXR3LW51bWVyaWMtZnJhY3Rpb246ICA7XFxyXFxuICAtLXR3LXJpbmctaW5zZXQ6ICA7XFxyXFxuICAtLXR3LXJpbmctb2Zmc2V0LXdpZHRoOiAwcHg7XFxyXFxuICAtLXR3LXJpbmctb2Zmc2V0LWNvbG9yOiAjZmZmO1xcclxcbiAgLS10dy1yaW5nLWNvbG9yOiByZ2IoNTkgMTMwIDI0NiAvIDAuNSk7XFxyXFxuICAtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdzogMCAwICMwMDAwO1xcclxcbiAgLS10dy1yaW5nLXNoYWRvdzogMCAwICMwMDAwO1xcclxcbiAgLS10dy1zaGFkb3c6IDAgMCAjMDAwMDtcXHJcXG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IDAgMCAjMDAwMDtcXHJcXG4gIC0tdHctYmx1cjogIDtcXHJcXG4gIC0tdHctYnJpZ2h0bmVzczogIDtcXHJcXG4gIC0tdHctY29udHJhc3Q6ICA7XFxyXFxuICAtLXR3LWdyYXlzY2FsZTogIDtcXHJcXG4gIC0tdHctaHVlLXJvdGF0ZTogIDtcXHJcXG4gIC0tdHctaW52ZXJ0OiAgO1xcclxcbiAgLS10dy1zYXR1cmF0ZTogIDtcXHJcXG4gIC0tdHctc2VwaWE6ICA7XFxyXFxuICAtLXR3LWRyb3Atc2hhZG93OiAgO1xcclxcbiAgLS10dy1iYWNrZHJvcC1ibHVyOiAgO1xcclxcbiAgLS10dy1iYWNrZHJvcC1icmlnaHRuZXNzOiAgO1xcclxcbiAgLS10dy1iYWNrZHJvcC1jb250cmFzdDogIDtcXHJcXG4gIC0tdHctYmFja2Ryb3AtZ3JheXNjYWxlOiAgO1xcclxcbiAgLS10dy1iYWNrZHJvcC1odWUtcm90YXRlOiAgO1xcclxcbiAgLS10dy1iYWNrZHJvcC1pbnZlcnQ6ICA7XFxyXFxuICAtLXR3LWJhY2tkcm9wLW9wYWNpdHk6ICA7XFxyXFxuICAtLXR3LWJhY2tkcm9wLXNhdHVyYXRlOiAgO1xcclxcbiAgLS10dy1iYWNrZHJvcC1zZXBpYTogIDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDY0MHB4KSB7XFxyXFxuICAuY29udGFpbmVyIHtcXHJcXG4gICAgbWF4LXdpZHRoOiA2NDBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxyXFxuICAuY29udGFpbmVyIHtcXHJcXG4gICAgbWF4LXdpZHRoOiA3NjhweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xcclxcbiAgLmNvbnRhaW5lciB7XFxyXFxuICAgIG1heC13aWR0aDogMTAyNHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogMTI4MHB4KSB7XFxyXFxuICAuY29udGFpbmVyIHtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMjgwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiAxNTM2cHgpIHtcXHJcXG4gIC5jb250YWluZXIge1xcclxcbiAgICBtYXgtd2lkdGg6IDE1MzZweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmFic29sdXRlIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLm0tYXV0byB7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5teC00IHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZmxleCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JpZCB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZGVuIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi53LWZ1bGwge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5mbGV4LXJvdyB7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbn1cXHJcXG5cXHJcXG4uZmxleC1jb2wge1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW1zLXN0YXJ0IHtcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbXMtY2VudGVyIHtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5pdGVtcy1zdHJldGNoIHtcXHJcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcclxcbn1cXHJcXG5cXHJcXG4uanVzdGlmeS1zdGFydCB7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbi5qdXN0aWZ5LWVuZCB7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uanVzdGlmeS1iZXR3ZWVuIHtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmdhcC0yIHtcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FwLTQge1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FwLTgge1xcclxcbiAgZ2FwOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucm91bmRlZC1mdWxsIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJvdW5kZWQtbWQge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XFxyXFxufVxcclxcblxcclxcbi5ib3JkZXItYi0yIHtcXHJcXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJvcmRlci10LTIge1xcclxcbiAgYm9yZGVyLXRvcC13aWR0aDogMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYm9yZGVyLXNvbGlkIHtcXHJcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxufVxcclxcblxcclxcbi5ib3JkZXItYmx1ZS03MDAge1xcclxcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcXHJcXG4gIGJvcmRlci1jb2xvcjogcmdiKDI5IDc4IDIxNiAvIHZhcigtLXR3LWJvcmRlci1vcGFjaXR5KSk7XFxyXFxufVxcclxcblxcclxcbi5ib3JkZXItd2hpdGUge1xcclxcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcXHJcXG4gIGJvcmRlci1jb2xvcjogcmdiKDI1NSAyNTUgMjU1IC8gdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJnLWJsdWUtNjAwIHtcXHJcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzNyA5OSAyMzUgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxyXFxufVxcclxcblxcclxcbi5iZy1ibHVlLTcwMCB7XFxyXFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjkgNzggMjE2IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcclxcbn1cXHJcXG5cXHJcXG4uYmctcmVkLTUwMCB7XFxyXFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM5IDY4IDY4IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcclxcbn1cXHJcXG5cXHJcXG4uYmctc2xhdGUtMzAwIHtcXHJcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDMgMjEzIDIyNSAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJnLXNsYXRlLTUwMCB7XFxyXFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAwIDExNiAxMzkgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxyXFxufVxcclxcblxcclxcbi5iZy10cmFuc3BhcmVudCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLmJnLXllbGxvdy01MDAge1xcclxcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNCAxNzkgOCAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXHJcXG59XFxyXFxuXFxyXFxuLnAtNCB7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHgtNCB7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHgtOCB7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHktMTYge1xcclxcbiAgcGFkZGluZy10b3A6IDRyZW07XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnB5LTIge1xcclxcbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5weS00IHtcXHJcXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5weS04IHtcXHJcXG4gIHBhZGRpbmctdG9wOiAycmVtO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5wbC00IHtcXHJcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnBsLTgge1xcclxcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dC1jZW50ZXIge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dC0yeGwge1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHQtM3hsIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS44NzVyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMi4yNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHQtc20ge1xcclxcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dC14bCB7XFxyXFxuICBmb250LXNpemU6IDEuMjVyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMS43NXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvbnQtYm9sZCB7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9udC1tZWRpdW0ge1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHQtYmx1ZS03MDAge1xcclxcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxyXFxuICBjb2xvcjogcmdiKDI5IDc4IDIxNiAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dC1zbGF0ZS0yMDAge1xcclxcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxyXFxuICBjb2xvcjogcmdiKDIyNiAyMzIgMjQwIC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxyXFxufVxcclxcblxcclxcbi50ZXh0LXNsYXRlLTUwMCB7XFxyXFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXHJcXG4gIGNvbG9yOiByZ2IoMTAwIDExNiAxMzkgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHQtd2hpdGUge1xcclxcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxyXFxuICBjb2xvcjogcmdiKDI1NSAyNTUgMjU1IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxyXFxufVxcclxcblxcclxcbi5maWx0ZXIge1xcclxcbiAgZmlsdGVyOiB2YXIoLS10dy1ibHVyKSB2YXIoLS10dy1icmlnaHRuZXNzKSB2YXIoLS10dy1jb250cmFzdCkgdmFyKC0tdHctZ3JheXNjYWxlKSB2YXIoLS10dy1odWUtcm90YXRlKSB2YXIoLS10dy1pbnZlcnQpIHZhcigtLXR3LXNhdHVyYXRlKSB2YXIoLS10dy1zZXBpYSkgdmFyKC0tdHctZHJvcC1zaGFkb3cpO1xcclxcbn1cXHJcXG5cXHJcXG4udHJhbnNpdGlvbi1hbGwge1xcclxcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYWxsO1xcclxcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XFxyXFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxNTBtcztcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNsaXA6IGJvcmRlci1ib3g7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgLyogcGFkZGluZy10b3A6IDUuNDlyZW07XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMjV2dzsgKi9cXHJcXG59XFxyXFxuXFxyXFxuYXNpZGUge1xcclxcbiAgd2lkdGg6IDIwdnc7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDcuMzVyZW07XFxyXFxuICByaWdodDogMXJlbTtcXHJcXG4gIGxlZnQ6IDIuNXJlbTtcXHJcXG4gIGJvdHRvbTogMXJlbTtcXHJcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50LWNvbnRhaW5lciB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDcuMzVyZW07XFxyXFxuICBsZWZ0OiAyNXZ3O1xcclxcbiAgcmlnaHQ6IDJyZW07XFxyXFxuICBoZWlnaHQ6IDc5LjZ2aDtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVye1xcclxcbiAgYm90dG9tOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIsI3Byb2plY3RzLWhlYWRlciB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBsZWZ0OiAyLjVyZW07XFxyXFxuICB3aWR0aDogMjB2dztcXHJcXG4gIHotaW5kZXg6IDEwMDtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybXtcXHJcXG4gIHdpZHRoOiAzMHZ3O1xcclxcbiAgbGVmdDogY2FsYygyNXZ3IC0gMXJlbSk7XFxyXFxuICB0b3A6IDcuMzVyZW07XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDEuNXJlbTtcXHJcXG4gIHJpZ2h0OiAxcmVtO1xcclxcbiAgbGVmdDogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3LXByb2plY3QtYnRue1xcclxcbiAgcGFkZGluZy1ibG9jazogLjVyZW07XFxyXFxuICBwYWRkaW5nLWlubGluZTogLjhyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvZmlsZSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICByaWdodDogMDtcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2ZpbGUtcGljdHVyZSB7XFxyXFxuICB3aWR0aDogNDVweDtcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2plY3RzLWhlYWRlcntcXHJcXG4gIHRvcDogNy4zNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2stY29udGFpbmVye1xcclxcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2stZm9ybSB7XFxyXFxuICBsZWZ0OiBjYWxjKDQwdncpO1xcclxcbiAgdG9wOiAxNi44cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaG92ZXJcXFxcOmJnLWJsdWUtNjAwOmhvdmVyIHtcXHJcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzNyA5OSAyMzUgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxyXFxufVxcclxcblxcclxcbi5ob3ZlclxcXFw6YmctYmx1ZS03MDA6aG92ZXIge1xcclxcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI5IDc4IDIxNiAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvdmVyXFxcXDpiZy1yZWQtNzAwOmhvdmVyIHtcXHJcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxODUgMjggMjggLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxyXFxufVxcclxcblxcclxcbi5ob3ZlclxcXFw6Ymctc2xhdGUtMTAwOmhvdmVyIHtcXHJcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDEgMjQ1IDI0OSAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvdmVyXFxcXDpiZy15ZWxsb3ctNzAwOmhvdmVyIHtcXHJcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjEgOTggNyAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvY3VzXFxcXDpvdXRsaW5lLW5vbmU6Zm9jdXMge1xcclxcbiAgb3V0bGluZTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgb3V0bGluZS1vZmZzZXQ6IDJweDtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztDQUVDOztBQUVEOzs7Q0FHQzs7QUFFRDs7O0VBR0Usc0JBQXNCO0VBQ3RCLE1BQU07RUFDTixlQUFlO0VBQ2YsTUFBTTtFQUNOLG1CQUFtQjtFQUNuQixNQUFNO0VBQ04scUJBQXFCO0VBQ3JCLE1BQU07QUFDUjs7QUFFQTs7RUFFRSxnQkFBZ0I7QUFDbEI7O0FBRUE7Ozs7OztDQU1DOztBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLE1BQU07RUFDTiw4QkFBOEI7RUFDOUIsTUFBTTtFQUNOLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sY0FBYztLQUNYLFdBQVc7RUFDZCxNQUFNO0VBQ04sNE5BQTROO0VBQzVOLE1BQU07RUFDTiw2QkFBNkI7RUFDN0IsTUFBTTtBQUNSOztBQUVBOzs7Q0FHQzs7QUFFRDtFQUNFLFNBQVM7RUFDVCxNQUFNO0VBQ04sb0JBQW9CO0VBQ3BCLE1BQU07QUFDUjs7QUFFQTs7OztDQUlDOztBQUVEO0VBQ0UsU0FBUztFQUNULE1BQU07RUFDTixjQUFjO0VBQ2QsTUFBTTtFQUNOLHFCQUFxQjtFQUNyQixNQUFNO0FBQ1I7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XFxyXFxuISB0YWlsd2luZGNzcyB2My4yLjcgfCBNSVQgTGljZW5zZSB8IGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tXFxyXFxuKi9cXHJcXG5cXHJcXG4vKlxcclxcbjEuIFByZXZlbnQgcGFkZGluZyBhbmQgYm9yZGVyIGZyb20gYWZmZWN0aW5nIGVsZW1lbnQgd2lkdGguIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzQpXFxyXFxuMi4gQWxsb3cgYWRkaW5nIGEgYm9yZGVyIHRvIGFuIGVsZW1lbnQgYnkganVzdCBhZGRpbmcgYSBib3JkZXItd2lkdGguIChodHRwczovL2dpdGh1Yi5jb20vdGFpbHdpbmRjc3MvdGFpbHdpbmRjc3MvcHVsbC8xMTYpXFxyXFxuKi9cXHJcXG5cXHJcXG4qLFxcclxcbjo6YmVmb3JlLFxcclxcbjo6YWZ0ZXIge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIC8qIDEgKi9cXHJcXG4gIGJvcmRlci13aWR0aDogMDtcXHJcXG4gIC8qIDIgKi9cXHJcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuICAvKiAyICovXFxyXFxuICBib3JkZXItY29sb3I6ICNlNWU3ZWI7XFxyXFxuICAvKiAyICovXFxyXFxufVxcclxcblxcclxcbjo6YmVmb3JlLFxcclxcbjo6YWZ0ZXIge1xcclxcbiAgLS10dy1jb250ZW50OiAnJztcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4xLiBVc2UgYSBjb25zaXN0ZW50IHNlbnNpYmxlIGxpbmUtaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXHJcXG4yLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cXHJcXG4zLiBVc2UgYSBtb3JlIHJlYWRhYmxlIHRhYiBzaXplLlxcclxcbjQuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgYHNhbnNgIGZvbnQtZmFtaWx5IGJ5IGRlZmF1bHQuXFxyXFxuNS4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBgc2Fuc2AgZm9udC1mZWF0dXJlLXNldHRpbmdzIGJ5IGRlZmF1bHQuXFxyXFxuKi9cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxyXFxuICAvKiAxICovXFxyXFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxyXFxuICAvKiAyICovXFxyXFxuICAtbW96LXRhYi1zaXplOiA0O1xcclxcbiAgLyogMyAqL1xcclxcbiAgLW8tdGFiLXNpemU6IDQ7XFxyXFxuICAgICB0YWItc2l6ZTogNDtcXHJcXG4gIC8qIDMgKi9cXHJcXG4gIGZvbnQtZmFtaWx5OiB1aS1zYW5zLXNlcmlmLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBBcmlhbCwgXFxcIk5vdG8gU2Fuc1xcXCIsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiLCBcXFwiTm90byBDb2xvciBFbW9qaVxcXCI7XFxyXFxuICAvKiA0ICovXFxyXFxuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IG5vcm1hbDtcXHJcXG4gIC8qIDUgKi9cXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4xLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuMi4gSW5oZXJpdCBsaW5lLWhlaWdodCBmcm9tIGBodG1sYCBzbyB1c2VycyBjYW4gc2V0IHRoZW0gYXMgYSBjbGFzcyBkaXJlY3RseSBvbiB0aGUgYGh0bWxgIGVsZW1lbnQuXFxyXFxuKi9cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIC8qIDEgKi9cXHJcXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xcclxcbiAgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbjEuIEFkZCB0aGUgY29ycmVjdCBoZWlnaHQgaW4gRmlyZWZveC5cXHJcXG4yLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBvZiBib3JkZXIgY29sb3IgaW4gRmlyZWZveC4gKGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTE5MDY1NSlcXHJcXG4zLiBFbnN1cmUgaG9yaXpvbnRhbCBydWxlcyBhcmUgdmlzaWJsZSBieSBkZWZhdWx0LlxcclxcbiovXFxyXFxuXFxyXFxuaHIge1xcclxcbiAgaGVpZ2h0OiAwO1xcclxcbiAgLyogMSAqL1xcclxcbiAgY29sb3I6IGluaGVyaXQ7XFxyXFxuICAvKiAyICovXFxyXFxuICBib3JkZXItdG9wLXdpZHRoOiAxcHg7XFxyXFxuICAvKiAzICovXFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxyXFxuKi9cXHJcXG5cXHJcXG5hYmJyOndoZXJlKFt0aXRsZV0pIHtcXHJcXG4gIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcclxcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuUmVtb3ZlIHRoZSBkZWZhdWx0IGZvbnQgc2l6ZSBhbmQgd2VpZ2h0IGZvciBoZWFkaW5ncy5cXHJcXG4qL1xcclxcblxcclxcbmgxLFxcclxcbmgyLFxcclxcbmgzLFxcclxcbmg0LFxcclxcbmg1LFxcclxcbmg2IHtcXHJcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcblJlc2V0IGxpbmtzIHRvIG9wdGltaXplIGZvciBvcHQtaW4gc3R5bGluZyBpbnN0ZWFkIG9mIG9wdC1vdXQuXFxyXFxuKi9cXHJcXG5cXHJcXG5hIHtcXHJcXG4gIGNvbG9yOiBpbmhlcml0O1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbkFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBFZGdlIGFuZCBTYWZhcmkuXFxyXFxuKi9cXHJcXG5cXHJcXG5iLFxcclxcbnN0cm9uZyB7XFxyXFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbjEuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgYG1vbm9gIGZvbnQgZmFtaWx5IGJ5IGRlZmF1bHQuXFxyXFxuMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiovXFxyXFxuXFxyXFxuY29kZSxcXHJcXG5rYmQsXFxyXFxuc2FtcCxcXHJcXG5wcmUge1xcclxcbiAgZm9udC1mYW1pbHk6IHVpLW1vbm9zcGFjZSwgU0ZNb25vLVJlZ3VsYXIsIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCBcXFwiTGliZXJhdGlvbiBNb25vXFxcIiwgXFxcIkNvdXJpZXIgTmV3XFxcIiwgbW9ub3NwYWNlO1xcclxcbiAgLyogMSAqL1xcclxcbiAgZm9udC1zaXplOiAxZW07XFxyXFxuICAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuKi9cXHJcXG5cXHJcXG5zbWFsbCB7XFxyXFxuICBmb250LXNpemU6IDgwJTtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5QcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiovXFxyXFxuXFxyXFxuc3ViLFxcclxcbnN1cCB7XFxyXFxuICBmb250LXNpemU6IDc1JTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG5zdWIge1xcclxcbiAgYm90dG9tOiAtMC4yNWVtO1xcclxcbn1cXHJcXG5cXHJcXG5zdXAge1xcclxcbiAgdG9wOiAtMC41ZW07XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuMS4gUmVtb3ZlIHRleHQgaW5kZW50YXRpb24gZnJvbSB0YWJsZSBjb250ZW50cyBpbiBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTk5OTA4OCwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTIwMTI5NylcXHJcXG4yLiBDb3JyZWN0IHRhYmxlIGJvcmRlciBjb2xvciBpbmhlcml0YW5jZSBpbiBhbGwgQ2hyb21lIGFuZCBTYWZhcmkuIChodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD05MzU3MjksIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTUwMTYpXFxyXFxuMy4gUmVtb3ZlIGdhcHMgYmV0d2VlbiB0YWJsZSBib3JkZXJzIGJ5IGRlZmF1bHQuXFxyXFxuKi9cXHJcXG5cXHJcXG50YWJsZSB7XFxyXFxuICB0ZXh0LWluZGVudDogMDtcXHJcXG4gIC8qIDEgKi9cXHJcXG4gIGJvcmRlci1jb2xvcjogaW5oZXJpdDtcXHJcXG4gIC8qIDIgKi9cXHJcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxyXFxuICAvKiAzICovXFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcclxcbjMuIFJlbW92ZSBkZWZhdWx0IHBhZGRpbmcgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiovXFxyXFxuXFxyXFxuYnV0dG9uLFxcclxcbmlucHV0LFxcclxcbm9wdGdyb3VwLFxcclxcbnNlbGVjdCxcXHJcXG50ZXh0YXJlYSB7XFxyXFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXHJcXG4gIC8qIDEgKi9cXHJcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXHJcXG4gIC8qIDEgKi9cXHJcXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xcclxcbiAgLyogMSAqL1xcclxcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxyXFxuICAvKiAxICovXFxyXFxuICBjb2xvcjogaW5oZXJpdDtcXHJcXG4gIC8qIDEgKi9cXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIC8qIDIgKi9cXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICAvKiAzICovXFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlIGFuZCBGaXJlZm94LlxcclxcbiovXFxyXFxuXFxyXFxuYnV0dG9uLFxcclxcbnNlbGVjdCB7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4xLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcclxcbjIuIFJlbW92ZSBkZWZhdWx0IGJ1dHRvbiBzdHlsZXMuXFxyXFxuKi9cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxuW3R5cGU9J2J1dHRvbiddLFxcclxcblt0eXBlPSdyZXNldCddLFxcclxcblt0eXBlPSdzdWJtaXQnXSB7XFxyXFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXHJcXG4gIC8qIDEgKi9cXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgLyogMiAqL1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcXHJcXG4gIC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5Vc2UgdGhlIG1vZGVybiBGaXJlZm94IGZvY3VzIHN0eWxlIGZvciBhbGwgZm9jdXNhYmxlIGVsZW1lbnRzLlxcclxcbiovXFxyXFxuXFxyXFxuOi1tb3otZm9jdXNyaW5nIHtcXHJcXG4gIG91dGxpbmU6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuUmVtb3ZlIHRoZSBhZGRpdGlvbmFsIGA6aW52YWxpZGAgc3R5bGVzIGluIEZpcmVmb3guIChodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9nZWNrby1kZXYvYmxvYi8yZjllYWNkOWQzZDk5NWM5MzdiNDI1MWE1NTU3ZDk1ZDQ5NGM5YmUxL2xheW91dC9zdHlsZS9yZXMvZm9ybXMuY3NzI0w3MjgtTDczNylcXHJcXG4qL1xcclxcblxcclxcbjotbW96LXVpLWludmFsaWQge1xcclxcbiAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5BZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSBhbmQgRmlyZWZveC5cXHJcXG4qL1xcclxcblxcclxcbnByb2dyZXNzIHtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5Db3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBTYWZhcmkuXFxyXFxuKi9cXHJcXG5cXHJcXG46Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxyXFxuOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4xLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXHJcXG4yLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXHJcXG4qL1xcclxcblxcclxcblt0eXBlPSdzZWFyY2gnXSB7XFxyXFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcXHJcXG4gIC8qIDEgKi9cXHJcXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4O1xcclxcbiAgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcblJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXHJcXG4qL1xcclxcblxcclxcbjo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxyXFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXHJcXG4yLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxyXFxuKi9cXHJcXG5cXHJcXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXHJcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcclxcbiAgLyogMSAqL1xcclxcbiAgZm9udDogaW5oZXJpdDtcXHJcXG4gIC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5BZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXHJcXG4qL1xcclxcblxcclxcbnN1bW1hcnkge1xcclxcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcblJlbW92ZXMgdGhlIGRlZmF1bHQgc3BhY2luZyBhbmQgYm9yZGVyIGZvciBhcHByb3ByaWF0ZSBlbGVtZW50cy5cXHJcXG4qL1xcclxcblxcclxcbmJsb2NrcXVvdGUsXFxyXFxuZGwsXFxyXFxuZGQsXFxyXFxuaDEsXFxyXFxuaDIsXFxyXFxuaDMsXFxyXFxuaDQsXFxyXFxuaDUsXFxyXFxuaDYsXFxyXFxuaHIsXFxyXFxuZmlndXJlLFxcclxcbnAsXFxyXFxucHJlIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuZmllbGRzZXQge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxubGVnZW5kIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbm9sLFxcclxcbnVsLFxcclxcbm1lbnUge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuUHJldmVudCByZXNpemluZyB0ZXh0YXJlYXMgaG9yaXpvbnRhbGx5IGJ5IGRlZmF1bHQuXFxyXFxuKi9cXHJcXG5cXHJcXG50ZXh0YXJlYSB7XFxyXFxuICByZXNpemU6IHZlcnRpY2FsO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbjEuIFJlc2V0IHRoZSBkZWZhdWx0IHBsYWNlaG9sZGVyIG9wYWNpdHkgaW4gRmlyZWZveC4gKGh0dHBzOi8vZ2l0aHViLmNvbS90YWlsd2luZGxhYnMvdGFpbHdpbmRjc3MvaXNzdWVzLzMzMDApXFxyXFxuMi4gU2V0IHRoZSBkZWZhdWx0IHBsYWNlaG9sZGVyIGNvbG9yIHRvIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBncmF5IDQwMCBjb2xvci5cXHJcXG4qL1xcclxcblxcclxcbmlucHV0OjotbW96LXBsYWNlaG9sZGVyLCB0ZXh0YXJlYTo6LW1vei1wbGFjZWhvbGRlciB7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbiAgLyogMSAqL1xcclxcbiAgY29sb3I6ICM5Y2EzYWY7XFxyXFxuICAvKiAyICovXFxyXFxufVxcclxcblxcclxcbmlucHV0OjpwbGFjZWhvbGRlcixcXHJcXG50ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG4gIC8qIDEgKi9cXHJcXG4gIGNvbG9yOiAjOWNhM2FmO1xcclxcbiAgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcblNldCB0aGUgZGVmYXVsdCBjdXJzb3IgZm9yIGJ1dHRvbnMuXFxyXFxuKi9cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxuW3JvbGU9XFxcImJ1dHRvblxcXCJdIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5NYWtlIHN1cmUgZGlzYWJsZWQgYnV0dG9ucyBkb24ndCBnZXQgdGhlIHBvaW50ZXIgY3Vyc29yLlxcclxcbiovXFxyXFxuXFxyXFxuOmRpc2FibGVkIHtcXHJcXG4gIGN1cnNvcjogZGVmYXVsdDtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4xLiBNYWtlIHJlcGxhY2VkIGVsZW1lbnRzIGBkaXNwbGF5OiBibG9ja2AgYnkgZGVmYXVsdC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvMTQpXFxyXFxuMi4gQWRkIGB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlYCB0byBhbGlnbiByZXBsYWNlZCBlbGVtZW50cyBtb3JlIHNlbnNpYmx5IGJ5IGRlZmF1bHQuIChodHRwczovL2dpdGh1Yi5jb20vamVuc2ltbW9ucy9jc3NyZW1lZHkvaXNzdWVzLzE0I2lzc3VlY29tbWVudC02MzQ5MzQyMTApXFxyXFxuICAgVGhpcyBjYW4gdHJpZ2dlciBhIHBvb3JseSBjb25zaWRlcmVkIGxpbnQgZXJyb3IgaW4gc29tZSB0b29scyBidXQgaXMgaW5jbHVkZWQgYnkgZGVzaWduLlxcclxcbiovXFxyXFxuXFxyXFxuaW1nLFxcclxcbnN2ZyxcXHJcXG52aWRlbyxcXHJcXG5jYW52YXMsXFxyXFxuYXVkaW8sXFxyXFxuaWZyYW1lLFxcclxcbmVtYmVkLFxcclxcbm9iamVjdCB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIC8qIDEgKi9cXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuICAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuQ29uc3RyYWluIGltYWdlcyBhbmQgdmlkZW9zIHRvIHRoZSBwYXJlbnQgd2lkdGggYW5kIHByZXNlcnZlIHRoZWlyIGludHJpbnNpYyBhc3BlY3QgcmF0aW8uIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0KVxcclxcbiovXFxyXFxuXFxyXFxuaW1nLFxcclxcbnZpZGVvIHtcXHJcXG4gIG1heC13aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLyogTWFrZSBlbGVtZW50cyB3aXRoIHRoZSBIVE1MIGhpZGRlbiBhdHRyaWJ1dGUgc3RheSBoaWRkZW4gYnkgZGVmYXVsdCAqL1xcclxcblxcclxcbltoaWRkZW5dIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiosIDo6YmVmb3JlLCA6OmFmdGVyIHtcXHJcXG4gIC0tdHctYm9yZGVyLXNwYWNpbmcteDogMDtcXHJcXG4gIC0tdHctYm9yZGVyLXNwYWNpbmcteTogMDtcXHJcXG4gIC0tdHctdHJhbnNsYXRlLXg6IDA7XFxyXFxuICAtLXR3LXRyYW5zbGF0ZS15OiAwO1xcclxcbiAgLS10dy1yb3RhdGU6IDA7XFxyXFxuICAtLXR3LXNrZXcteDogMDtcXHJcXG4gIC0tdHctc2tldy15OiAwO1xcclxcbiAgLS10dy1zY2FsZS14OiAxO1xcclxcbiAgLS10dy1zY2FsZS15OiAxO1xcclxcbiAgLS10dy1wYW4teDogIDtcXHJcXG4gIC0tdHctcGFuLXk6ICA7XFxyXFxuICAtLXR3LXBpbmNoLXpvb206ICA7XFxyXFxuICAtLXR3LXNjcm9sbC1zbmFwLXN0cmljdG5lc3M6IHByb3hpbWl0eTtcXHJcXG4gIC0tdHctb3JkaW5hbDogIDtcXHJcXG4gIC0tdHctc2xhc2hlZC16ZXJvOiAgO1xcclxcbiAgLS10dy1udW1lcmljLWZpZ3VyZTogIDtcXHJcXG4gIC0tdHctbnVtZXJpYy1zcGFjaW5nOiAgO1xcclxcbiAgLS10dy1udW1lcmljLWZyYWN0aW9uOiAgO1xcclxcbiAgLS10dy1yaW5nLWluc2V0OiAgO1xcclxcbiAgLS10dy1yaW5nLW9mZnNldC13aWR0aDogMHB4O1xcclxcbiAgLS10dy1yaW5nLW9mZnNldC1jb2xvcjogI2ZmZjtcXHJcXG4gIC0tdHctcmluZy1jb2xvcjogcmdiKDU5IDEzMCAyNDYgLyAwLjUpO1xcclxcbiAgLS10dy1yaW5nLW9mZnNldC1zaGFkb3c6IDAgMCAjMDAwMDtcXHJcXG4gIC0tdHctcmluZy1zaGFkb3c6IDAgMCAjMDAwMDtcXHJcXG4gIC0tdHctc2hhZG93OiAwIDAgIzAwMDA7XFxyXFxuICAtLXR3LXNoYWRvdy1jb2xvcmVkOiAwIDAgIzAwMDA7XFxyXFxuICAtLXR3LWJsdXI6ICA7XFxyXFxuICAtLXR3LWJyaWdodG5lc3M6ICA7XFxyXFxuICAtLXR3LWNvbnRyYXN0OiAgO1xcclxcbiAgLS10dy1ncmF5c2NhbGU6ICA7XFxyXFxuICAtLXR3LWh1ZS1yb3RhdGU6ICA7XFxyXFxuICAtLXR3LWludmVydDogIDtcXHJcXG4gIC0tdHctc2F0dXJhdGU6ICA7XFxyXFxuICAtLXR3LXNlcGlhOiAgO1xcclxcbiAgLS10dy1kcm9wLXNoYWRvdzogIDtcXHJcXG4gIC0tdHctYmFja2Ryb3AtYmx1cjogIDtcXHJcXG4gIC0tdHctYmFja2Ryb3AtYnJpZ2h0bmVzczogIDtcXHJcXG4gIC0tdHctYmFja2Ryb3AtY29udHJhc3Q6ICA7XFxyXFxuICAtLXR3LWJhY2tkcm9wLWdyYXlzY2FsZTogIDtcXHJcXG4gIC0tdHctYmFja2Ryb3AtaHVlLXJvdGF0ZTogIDtcXHJcXG4gIC0tdHctYmFja2Ryb3AtaW52ZXJ0OiAgO1xcclxcbiAgLS10dy1iYWNrZHJvcC1vcGFjaXR5OiAgO1xcclxcbiAgLS10dy1iYWNrZHJvcC1zYXR1cmF0ZTogIDtcXHJcXG4gIC0tdHctYmFja2Ryb3Atc2VwaWE6ICA7XFxyXFxufVxcclxcblxcclxcbjo6YmFja2Ryb3Age1xcclxcbiAgLS10dy1ib3JkZXItc3BhY2luZy14OiAwO1xcclxcbiAgLS10dy1ib3JkZXItc3BhY2luZy15OiAwO1xcclxcbiAgLS10dy10cmFuc2xhdGUteDogMDtcXHJcXG4gIC0tdHctdHJhbnNsYXRlLXk6IDA7XFxyXFxuICAtLXR3LXJvdGF0ZTogMDtcXHJcXG4gIC0tdHctc2tldy14OiAwO1xcclxcbiAgLS10dy1za2V3LXk6IDA7XFxyXFxuICAtLXR3LXNjYWxlLXg6IDE7XFxyXFxuICAtLXR3LXNjYWxlLXk6IDE7XFxyXFxuICAtLXR3LXBhbi14OiAgO1xcclxcbiAgLS10dy1wYW4teTogIDtcXHJcXG4gIC0tdHctcGluY2gtem9vbTogIDtcXHJcXG4gIC0tdHctc2Nyb2xsLXNuYXAtc3RyaWN0bmVzczogcHJveGltaXR5O1xcclxcbiAgLS10dy1vcmRpbmFsOiAgO1xcclxcbiAgLS10dy1zbGFzaGVkLXplcm86ICA7XFxyXFxuICAtLXR3LW51bWVyaWMtZmlndXJlOiAgO1xcclxcbiAgLS10dy1udW1lcmljLXNwYWNpbmc6ICA7XFxyXFxuICAtLXR3LW51bWVyaWMtZnJhY3Rpb246ICA7XFxyXFxuICAtLXR3LXJpbmctaW5zZXQ6ICA7XFxyXFxuICAtLXR3LXJpbmctb2Zmc2V0LXdpZHRoOiAwcHg7XFxyXFxuICAtLXR3LXJpbmctb2Zmc2V0LWNvbG9yOiAjZmZmO1xcclxcbiAgLS10dy1yaW5nLWNvbG9yOiByZ2IoNTkgMTMwIDI0NiAvIDAuNSk7XFxyXFxuICAtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdzogMCAwICMwMDAwO1xcclxcbiAgLS10dy1yaW5nLXNoYWRvdzogMCAwICMwMDAwO1xcclxcbiAgLS10dy1zaGFkb3c6IDAgMCAjMDAwMDtcXHJcXG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IDAgMCAjMDAwMDtcXHJcXG4gIC0tdHctYmx1cjogIDtcXHJcXG4gIC0tdHctYnJpZ2h0bmVzczogIDtcXHJcXG4gIC0tdHctY29udHJhc3Q6ICA7XFxyXFxuICAtLXR3LWdyYXlzY2FsZTogIDtcXHJcXG4gIC0tdHctaHVlLXJvdGF0ZTogIDtcXHJcXG4gIC0tdHctaW52ZXJ0OiAgO1xcclxcbiAgLS10dy1zYXR1cmF0ZTogIDtcXHJcXG4gIC0tdHctc2VwaWE6ICA7XFxyXFxuICAtLXR3LWRyb3Atc2hhZG93OiAgO1xcclxcbiAgLS10dy1iYWNrZHJvcC1ibHVyOiAgO1xcclxcbiAgLS10dy1iYWNrZHJvcC1icmlnaHRuZXNzOiAgO1xcclxcbiAgLS10dy1iYWNrZHJvcC1jb250cmFzdDogIDtcXHJcXG4gIC0tdHctYmFja2Ryb3AtZ3JheXNjYWxlOiAgO1xcclxcbiAgLS10dy1iYWNrZHJvcC1odWUtcm90YXRlOiAgO1xcclxcbiAgLS10dy1iYWNrZHJvcC1pbnZlcnQ6ICA7XFxyXFxuICAtLXR3LWJhY2tkcm9wLW9wYWNpdHk6ICA7XFxyXFxuICAtLXR3LWJhY2tkcm9wLXNhdHVyYXRlOiAgO1xcclxcbiAgLS10dy1iYWNrZHJvcC1zZXBpYTogIDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDY0MHB4KSB7XFxyXFxuICAuY29udGFpbmVyIHtcXHJcXG4gICAgbWF4LXdpZHRoOiA2NDBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxyXFxuICAuY29udGFpbmVyIHtcXHJcXG4gICAgbWF4LXdpZHRoOiA3NjhweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xcclxcbiAgLmNvbnRhaW5lciB7XFxyXFxuICAgIG1heC13aWR0aDogMTAyNHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogMTI4MHB4KSB7XFxyXFxuICAuY29udGFpbmVyIHtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMjgwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiAxNTM2cHgpIHtcXHJcXG4gIC5jb250YWluZXIge1xcclxcbiAgICBtYXgtd2lkdGg6IDE1MzZweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmFic29sdXRlIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLm0tYXV0byB7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5teC00IHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZmxleCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JpZCB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZGVuIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi53LWZ1bGwge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5mbGV4LXJvdyB7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbn1cXHJcXG5cXHJcXG4uZmxleC1jb2wge1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW1zLXN0YXJ0IHtcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbXMtY2VudGVyIHtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5pdGVtcy1zdHJldGNoIHtcXHJcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcclxcbn1cXHJcXG5cXHJcXG4uanVzdGlmeS1zdGFydCB7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbi5qdXN0aWZ5LWVuZCB7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uanVzdGlmeS1iZXR3ZWVuIHtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmdhcC0yIHtcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FwLTQge1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FwLTgge1xcclxcbiAgZ2FwOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucm91bmRlZC1mdWxsIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJvdW5kZWQtbWQge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XFxyXFxufVxcclxcblxcclxcbi5ib3JkZXItYi0yIHtcXHJcXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJvcmRlci10LTIge1xcclxcbiAgYm9yZGVyLXRvcC13aWR0aDogMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYm9yZGVyLXNvbGlkIHtcXHJcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxufVxcclxcblxcclxcbi5ib3JkZXItYmx1ZS03MDAge1xcclxcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcXHJcXG4gIGJvcmRlci1jb2xvcjogcmdiKDI5IDc4IDIxNiAvIHZhcigtLXR3LWJvcmRlci1vcGFjaXR5KSk7XFxyXFxufVxcclxcblxcclxcbi5ib3JkZXItd2hpdGUge1xcclxcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcXHJcXG4gIGJvcmRlci1jb2xvcjogcmdiKDI1NSAyNTUgMjU1IC8gdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJnLWJsdWUtNjAwIHtcXHJcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzNyA5OSAyMzUgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxyXFxufVxcclxcblxcclxcbi5iZy1ibHVlLTcwMCB7XFxyXFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjkgNzggMjE2IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcclxcbn1cXHJcXG5cXHJcXG4uYmctcmVkLTUwMCB7XFxyXFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM5IDY4IDY4IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcclxcbn1cXHJcXG5cXHJcXG4uYmctc2xhdGUtMzAwIHtcXHJcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDMgMjEzIDIyNSAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJnLXNsYXRlLTUwMCB7XFxyXFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAwIDExNiAxMzkgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxyXFxufVxcclxcblxcclxcbi5iZy10cmFuc3BhcmVudCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLmJnLXllbGxvdy01MDAge1xcclxcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNCAxNzkgOCAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXHJcXG59XFxyXFxuXFxyXFxuLnAtNCB7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHgtNCB7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHgtOCB7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHktMTYge1xcclxcbiAgcGFkZGluZy10b3A6IDRyZW07XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnB5LTIge1xcclxcbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5weS00IHtcXHJcXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5weS04IHtcXHJcXG4gIHBhZGRpbmctdG9wOiAycmVtO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5wbC00IHtcXHJcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnBsLTgge1xcclxcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dC1jZW50ZXIge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dC0yeGwge1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHQtM3hsIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS44NzVyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMi4yNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHQtc20ge1xcclxcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dC14bCB7XFxyXFxuICBmb250LXNpemU6IDEuMjVyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMS43NXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvbnQtYm9sZCB7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9udC1tZWRpdW0ge1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHQtYmx1ZS03MDAge1xcclxcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxyXFxuICBjb2xvcjogcmdiKDI5IDc4IDIxNiAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dC1zbGF0ZS0yMDAge1xcclxcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxyXFxuICBjb2xvcjogcmdiKDIyNiAyMzIgMjQwIC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxyXFxufVxcclxcblxcclxcbi50ZXh0LXNsYXRlLTUwMCB7XFxyXFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXHJcXG4gIGNvbG9yOiByZ2IoMTAwIDExNiAxMzkgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHQtd2hpdGUge1xcclxcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxyXFxuICBjb2xvcjogcmdiKDI1NSAyNTUgMjU1IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxyXFxufVxcclxcblxcclxcbi5maWx0ZXIge1xcclxcbiAgZmlsdGVyOiB2YXIoLS10dy1ibHVyKSB2YXIoLS10dy1icmlnaHRuZXNzKSB2YXIoLS10dy1jb250cmFzdCkgdmFyKC0tdHctZ3JheXNjYWxlKSB2YXIoLS10dy1odWUtcm90YXRlKSB2YXIoLS10dy1pbnZlcnQpIHZhcigtLXR3LXNhdHVyYXRlKSB2YXIoLS10dy1zZXBpYSkgdmFyKC0tdHctZHJvcC1zaGFkb3cpO1xcclxcbn1cXHJcXG5cXHJcXG4udHJhbnNpdGlvbi1hbGwge1xcclxcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYWxsO1xcclxcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XFxyXFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxNTBtcztcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy90b2RvLWJnLmpwZycpO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNsaXA6IGJvcmRlci1ib3g7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgLyogcGFkZGluZy10b3A6IDUuNDlyZW07XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMjV2dzsgKi9cXHJcXG59XFxyXFxuXFxyXFxuYXNpZGUge1xcclxcbiAgd2lkdGg6IDIwdnc7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDcuMzVyZW07XFxyXFxuICByaWdodDogMXJlbTtcXHJcXG4gIGxlZnQ6IDIuNXJlbTtcXHJcXG4gIGJvdHRvbTogMXJlbTtcXHJcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50LWNvbnRhaW5lciB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDcuMzVyZW07XFxyXFxuICBsZWZ0OiAyNXZ3O1xcclxcbiAgcmlnaHQ6IDJyZW07XFxyXFxuICBoZWlnaHQ6IDc5LjZ2aDtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVye1xcclxcbiAgYm90dG9tOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIsI3Byb2plY3RzLWhlYWRlciB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBsZWZ0OiAyLjVyZW07XFxyXFxuICB3aWR0aDogMjB2dztcXHJcXG4gIHotaW5kZXg6IDEwMDtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybXtcXHJcXG4gIHdpZHRoOiAzMHZ3O1xcclxcbiAgbGVmdDogY2FsYygyNXZ3IC0gMXJlbSk7XFxyXFxuICB0b3A6IDcuMzVyZW07XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDEuNXJlbTtcXHJcXG4gIHJpZ2h0OiAxcmVtO1xcclxcbiAgbGVmdDogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3LXByb2plY3QtYnRue1xcclxcbiAgcGFkZGluZy1ibG9jazogLjVyZW07XFxyXFxuICBwYWRkaW5nLWlubGluZTogLjhyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvZmlsZSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICByaWdodDogMDtcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2ZpbGUtcGljdHVyZSB7XFxyXFxuICB3aWR0aDogNDVweDtcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2plY3RzLWhlYWRlcntcXHJcXG4gIHRvcDogNy4zNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2stY29udGFpbmVye1xcclxcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2stZm9ybSB7XFxyXFxuICBsZWZ0OiBjYWxjKDQwdncpO1xcclxcbiAgdG9wOiAxNi44cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaG92ZXJcXFxcOmJnLWJsdWUtNjAwOmhvdmVyIHtcXHJcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzNyA5OSAyMzUgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxyXFxufVxcclxcblxcclxcbi5ob3ZlclxcXFw6YmctYmx1ZS03MDA6aG92ZXIge1xcclxcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI5IDc4IDIxNiAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvdmVyXFxcXDpiZy1yZWQtNzAwOmhvdmVyIHtcXHJcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxODUgMjggMjggLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxyXFxufVxcclxcblxcclxcbi5ob3ZlclxcXFw6Ymctc2xhdGUtMTAwOmhvdmVyIHtcXHJcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDEgMjQ1IDI0OSAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvdmVyXFxcXDpiZy15ZWxsb3ctNzAwOmhvdmVyIHtcXHJcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjEgOTggNyAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvY3VzXFxcXDpvdXRsaW5lLW5vbmU6Zm9jdXMge1xcclxcbiAgb3V0bGluZTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgb3V0bGluZS1vZmZzZXQ6IDJweDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERPTU1hbmFnZXIge1xyXG5cclxuICBjb25zdHJ1Y3RvciAoKSB7XHJcblxyXG4gIH1cclxuICAvL0FkZCBJY29uXHJcbiAgY3JlYXRlQWRkQnV0dG9uICgpIHtcclxuXHJcbiAgICAvL0J1dHRvblxyXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgIGJ1dHRvbi5jbGFzc05hbWUgPSAnYmctYmx1ZS02MDAgcm91bmRlZC1mdWxsIGhvdmVyOmJnLWJsdWUtNzAwIHRyYW5zaXRpb24tYWxsJ1xyXG5cclxuICAgIC8vSWNvblxyXG4gICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKVxyXG4gICAgaWNvbi5jbGFzc05hbWUgPSAndGV4dC14bCB0ZXh0LXNsYXRlLTIwMCBmYS1zb2xpZCBmYS1wbHVzIGZvbnQtbWVkaXVtJ1xyXG5cclxuICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChpY29uKVxyXG5cclxuICAgIHJldHVybiBidXR0b25cclxuICB9XHJcbiAgLy9EaXYgQ29udGFpbmVyXHJcbiAgY3JlYXRlQ29udGFpbmVyICgpIHtcclxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBkaXYuY2xhc3NOYW1lID0gJ3AtNCdcclxuXHJcbiAgICByZXR1cm4gZGl2XHJcbiAgfVxyXG4gIC8vRm9vdGVyXHJcbiAgY3JlYXRlRm9vdGVyICgpIHtcclxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpXHJcbiAgICAgIGZvb3Rlci5jbGFzc05hbWUgPSAnYm9yZGVyLXQtMiBib3JkZXItc29saWQgYm9yZGVyLXdoaXRlIGJnLWJsdWUtNzAwJ1xyXG5cclxuICAvL1BhcmFncmFwaFxyXG4gIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgIHAuY2xhc3NOYW1lID0gJ3RleHQtc20gdGV4dC1zbGF0ZS01MDAgdGV4dC1jZW50ZXIgcHktNCdcclxuICAgIHAuaW5uZXJIVE1MID0gYENvcHlyaWdodCAmY29weTsgJHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9YFxyXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKHApXHJcblxyXG4gICAgcmV0dXJuIGZvb3RlclxyXG4gIH1cclxuICAvL1BhZ2UgaGVhZGVyXHJcbiAgY3JlYXRlSGVhZGVyICgpIHtcclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpXHJcbiAgICBoZWFkZXIuY2xhc3NOYW1lID0gJ3AtNCBiZy1ibHVlLTcwMCBtLWF1dG8gbXgtNCByb3VuZGVkLXRvcCByb3VuZGVkLW1kJ1xyXG4gICAgcmV0dXJuIGhlYWRlclxyXG4gIH1cclxuICAvL0hlYWRpbmcgZWxlbWVudFxyXG4gIGNyZWF0ZUhlYWRpbmcgKHRleHQpIHtcclxuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXHJcbiAgICBoZWFkaW5nLmNsYXNzTmFtZSA9ICd0ZXh0LXhsIHRleHQtc2xhdGUtMjAwJ1xyXG4gICAgaGVhZGluZy50ZXh0Q29udGVudCA9IHRleHRcclxuXHJcbiAgICByZXR1cm4gaGVhZGluZ1xyXG4gIH1cclxuICAvL0hvcml6b250YWwgbGluZVxyXG4gIGNyZWF0ZUhvcml6b250YWxMaW5lICgpIHtcclxuICAgIGNvbnN0IGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdocicpXHJcbiAgICBsaW5lLnN0eWxlLmhlaWdodCA9ICcxeHAnXHJcbiAgICBsaW5lLmNsYXNzTmFtZSA9ICdiZy1zbGF0ZS01MDAgdy1mdWxsJ1xyXG5cclxuICAgIHJldHVybiBsaW5lXHJcbiAgfVxyXG4gIC8vQnVzaW5lc3MgbmFtZVxyXG4gIGNyZWF0ZUxvZ28gKHRleHQpIHtcclxuICAgIGNvbnN0IGxvZ28gPSB0aGlzLmNyZWF0ZUhlYWRpbmcodGV4dClcclxuICAgIGxvZ28uY2xhc3NMaXN0LnJlbW92ZSgndGV4dC14bCcpXHJcbiAgICBsb2dvLmNsYXNzTGlzdC5hZGQoJ3RleHQtMnhsJywnZm9udC1ib2xkJywndGV4dC1jZW50ZXInKVxyXG5cclxuICAgIHJldHVybiBsb2dvXHJcbiAgfVxyXG4gIC8vUHJvamVjdCBjb250YWluZXJcclxuICAvL3VzZWQgZm9yIGRpc2xheSBpbiB0aGUgc2lkZSBiYXJcclxuICBjcmVhdGVQcm9qZWN0Q29udGFpbmVyIChwcm9qZWN0TmFtZSkge1xyXG4gICAgY29uc3QgaGFzaExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcclxuICAgIGhhc2hMaW5rLmhyZWYgPSBgIyR7cHJvamVjdE5hbWUucmVwbGFjZUFsbCgnICcsJy0nKX1gXHJcbiAgICBjb25zdCBwcm9qQ29udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgIHByb2pDb250LmlkID0gYCR7cHJvamVjdE5hbWUudG9Mb3dlckNhc2UoKS5yZXBsYWNlQWxsKCcgJywgJy0nKX0tY29udGFpbmVyYFxyXG4gICAgICBwcm9qQ29udC5jbGFzc05hbWUgPSAndy1mdWxsIGJnLWJsdWUtNjAwIGJvcmRlci10LTIgYm9yZGVyLXNvbGlkIGJvcmRlci13aGl0ZSBob3ZlcjpiZy1ibHVlLTcwMCB0cmFuc2l0aW9uLWFsbCdcclxuXHJcbiAgICAgIC8vTmFtZVxyXG4gICAgICBjb25zdCBwcm9qTmFtZSA9IHRoaXMuY3JlYXRlSGVhZGluZyhwcm9qZWN0TmFtZSlcclxuICAgICAgICBwcm9qTmFtZS5pZCA9IGAke3Byb2plY3ROYW1lLnRvTG93ZXJDYXNlKCkucmVwbGFjZUFsbCgnICcsICctJyl9YFxyXG4gICAgICAgIHByb2pOYW1lLmNsYXNzTmFtZSA9ICdwcm9qZWN0IHB5LTIgdGV4dC1zbGF0ZS0yMDAgdGV4dC14bCBweC00J1xyXG4gICAgICBcclxuICAgICAgLy9BcHBlbmQgbmFtZVxyXG4gICAgICBoYXNoTGluay5hcHBlbmRDaGlsZChwcm9qTmFtZSlcclxuICAgICAgcHJvakNvbnQuYXBwZW5kQ2hpbGQoaGFzaExpbmspXHJcblxyXG4gICAgICByZXR1cm4gcHJvakNvbnRcclxuICB9XHJcbiAgLy9EZXNjcmlwdGlvbiBjb250YWluZXJcclxuICBjcmVhdGVQcm9qZWN0RGVzY3JpcHRpb24gKGRlc2NyaXB0aW9uKSB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmNyZWF0ZUNvbnRhaW5lcigpXHJcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYmctYmx1ZS02MDAnLCdweC04JywgJ3B5LTQnKVxyXG5cclxuICAgIC8vUGFyYWdyYXBoXHJcbiAgICBjb25zdCBwYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgIHBhci5jbGFzc05hbWUgPSAndGV4dC1zbGF0ZS0yMDAgdGV4dC1tZCdcclxuICAgIHBhci50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uXHJcblxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHBhcilcclxuXHJcbiAgICByZXR1cm4gY29udGFpbmVyXHJcbiAgfVxyXG4gIC8vUHJvamVjdCBoZWFkZXJcclxuICAvL2Rpc3BsYXkgaW4gdGhlIG1haW4gYm9keSBcclxuICAvL1BlaW9kIGlzIGFuIG9iamVjdCB3aXRoIHBlcmlvZC5zdGFydCBhbmQgcGVyaW9kLmVuZFxyXG4gIGNyZWF0ZVByb2plY3RIZWFkZXIgKHByb2plY3Qpe1xyXG4gICAgLy9NYWluIGNvbnRhaW5lclxyXG4gICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5jcmVhdGVDb250YWluZXIoKVxyXG4gICAgY29udGFpbmVyLmNsYXNzTmFtZSA9ICdmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBiZy1ibHVlLTYwMCBpdGVtcy1jZW50ZXIgdy1mdWxsIHB5LTQgcGwtOCdcclxuICAgIC8vQWRkIE5hbWVcclxuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IHRoaXMuY3JlYXRlSGVhZGluZyhwcm9qZWN0Lm5hbWUpXHJcbiAgICBwcm9qZWN0VGl0bGUuY2xhc3NMaXN0LmFkZCgnZm9udC1ib2xkJylcclxuICAgIHByb2plY3RUaXRsZS5pZCA9ICdwcm9qZWN0LW5hbWUnXHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKVxyXG5cclxuICAgIHJldHVybiBjb250YWluZXJcclxuICB9XHJcbiAgLy9TaWRlIGJhclxyXG4gIGNyZWF0ZVNpZGViYXIgKCkge1xyXG4gICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhc2lkZScpXHJcbiAgICAgc2lkZWJhci5jbGFzc05hbWUgPSAncHgtNCBiZy1ibHVlLTcwMCByb3VuZGVkLW1kIHB5LTE2J1xyXG5cclxuICAgICByZXR1cm4gc2lkZWJhclxyXG4gIH1cclxuICAvL1VzZXIgcHJvZmlsZVxyXG4gIGNyZWF0ZVVzZXJQcm9maWxlICh1c2VyTmFtZSkge1xyXG4gICAgLy9Qcm9maWxlIGNvbnRhaW5lclxyXG4gICAgY29uc3QgcHJvZmlsZSA9IHRoaXMuY3JlYXRlQ29udGFpbmVyKClcclxuICAgIHByb2ZpbGUuY2xhc3NMaXN0LmFkZCgnZmxleCcsICdmbGV4LXJvdycsICdqdXN0aWZ5LWVuZCcsICdpdGVtcy1jZW50ZXInLCAnZ2FwLTQnKVxyXG4gICAgcHJvZmlsZS5pZCA9ICdwcm9maWxlJ1xyXG5cclxuICAgIC8vcGljdHVyZSBpbWFnZVxyXG4gICAgY29uc3QgcGljID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcclxuICAgIHBpYy5pZCA9ICdwcm9maWxlLXBpY3R1cmUnXHJcbiAgICBwaWMuY2xhc3NOYW1lID0gJ3JvdW5kZWQtZnVsbCdcclxuICAgIHByb2ZpbGUuYXBwZW5kQ2hpbGQocGljKVxyXG5cclxuICAgIC8vdXNlciBuYW1lXHJcbiAgICBjb25zdCBuYW1lID0gdGhpcy5jcmVhdGVIZWFkaW5nKHVzZXJOYW1lKVxyXG4gICAgcHJvZmlsZS5wcmVwZW5kKG5hbWUpXHJcblxyXG4gICAgcmV0dXJuIHByb2ZpbGVcclxuICB9XHJcbiAgZGlzcGxheUZvcm0gKGhhc2hGb3JtSWQpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaGFzaEZvcm1JZCkuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJylcclxuICB9XHJcbiAgZ2V0Rm9ybURhdGEgKGhhc2hGb3JtSWQpIHtcclxuICAgIGNvbnN0IGRhdGEgPSBbXVxyXG4gICAgLy9HZXQgbm9kZSBsaXN0XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAke2hhc2hGb3JtSWR9IGlucHV0YCkuZm9yRWFjaChlbGVtZW50ID0+e1xyXG4gICAgICAvL2dldCBpbnB1dCB2YWx1ZXMgYW5kIGFkZCB0byBkYXRhIGFycmF5XHJcbiAgICAgIGRhdGEucHVzaChlbGVtZW50LnZhbHVlLnRyaW0oKSlcclxuICAgIH0pXHJcbiAgICByZXR1cm4gZGF0YVxyXG4gIH0gXHJcbiAgaGlkZUZvcm0oaGFzaEZvcm1JZCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihoYXNoRm9ybUlkKS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxyXG4gIH1cclxuICAvL0FwcGVuZCB0byBET01cclxuICByZW5kZXIgKGNvbnRlbnQpIHtcclxuICAgICAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JylcclxuICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50KVxyXG4gICAgfVxyXG4gICAgXHJcbn0iLCJpbXBvcnQgVGFza01hbmFnZXIgZnJvbSBcIi4vdGFza19tYW5hZ2VyXCI7XHJcbmltcG9ydCBUYXNrIGZyb20gXCIuL3Rhc2tcIjtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCBleHRlbmRzIFRhc2tNYW5hZ2VyIHtcclxuXHJcbiAgICAvL1Byb2plY3Qgb3BlblxyXG4gICAgI2NvbXBsZXRlID0gZmFsc2VcclxuICAgICNkZXNjcmlwdGlvbiA9ICcnXHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUpe1xyXG4gICAgICAgIHN1cGVyKClcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lXHJcbiAgICB9XHJcbiAgICBjcmVhdGVOZXdUYXNrIChkYXRhKSB7XHJcbiAgICAgICAgY29uc3QgdGFzayA9IG5ldyBUYXNrKGRhdGEudGl0bGUpLy9pbnN0YW5jaWF0ZSB0YXNrXHJcbiAgICAgICAgdGFzay5zZXREZXNjcmlwdGlvbihkYXRhLmRlc2NyaXB0aW9uKVxyXG4gICAgICAgIHRhc2suc2V0RHVlRGF0ZShkYXRhLmR1ZURhdGUpXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHRhc2sudG9KU09OKClcclxuICAgIH1cclxuICAgIC8vcmV0dXJuIHZhbHVlIG9mIGRlc2NyaXB0aW9uXHJcbiAgICBnZXREZXNjcmlwdGlvbigpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLiNkZXNjcmlwdGlvblxyXG4gICAgfVxyXG4gICAgLy9pcyBjb21wbGV0ZVxyXG4gICAgaXNDb21wbGV0ZSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLiNjb21wbGV0ZVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvL01hcmsgYXMgY29tcGxldGVcclxuICAgIG1hcmtBc0NvbXBsZXRlKCl7XHJcbiAgICAgICAgdGhpcy4jY29tcGxldGUgPSB0cnVlXHJcbiAgICB9XHJcbiAgICAvL01hcmsgYXMgaW5jb21wbGV0ZVxyXG4gICAgbWFya0FzSW5jb21wbGV0ZSgpe1xyXG4gICAgICAgIGlmKHRoaXMuI2NvbXBsZXRlKVxyXG4gICAgICAgICAgICB0aGlzLiNjb21wbGV0ZSA9IGZhbHNlXHJcbiAgICB9XHJcbiAgIFxyXG4gICAgLy9pbml0aWFsaXplIGRlc2NyaXBpb25cclxuICAgIHNldERlc2NyaXB0aW9uKGRlc2NyaXB0aW9uKXtcclxuICAgICAgICB0aGlzLiNkZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uXHJcbiAgICB9XHJcbiAgICB0b0pTT04gKCl7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgXCJuYW1lXCI6IHRoaXMubmFtZSxcclxuICAgICAgICAgICAgXCJjb21wbGV0ZVwiOiB0aGlzLmlzQ29tcGxldGUoKSxcclxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiB0aGlzLmdldERlc2NyaXB0aW9uKCksXHJcbiAgICAgICAgICAgIFwidGFza3NcIjogdGhpcy5nZXRUYXNrcygpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuIiwiXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3RNYW5hZ2VyIHtcclxuICAgICAvKlxyXG4gICAgUHJvamVjdCBtYW5hZ2VyIGNsYXNzIHBlcmZvcm1zIG9wZXJhdGlvbnMgb24gUHJvamVjdHNcclxuICAgICovXHJcbiAgICNjb21wbGV0ZWRQcm9qZWN0cyA9IFtdXHJcbiAgICNwcm9qZWN0cyA9IFtdXHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcblxyXG4gICAgfVxyXG4gICAgLy9BZGQgdG8gbGlzdFxyXG4gICAgYWNjZXNzTG9jYWxTdG9yYWdlICgpIHtcclxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSlcclxuICAgIH1cclxuICAgIC8vVXBkYXRlIGNvbXBsZXRlZCBwcm9qZWN0c1xyXG4gICAgYWRkVG9Db21wbGV0ZWQocHJvamVjdCl7XHJcbiAgICAgICAgdGhpcy4jY29tcGxldGVkUHJvamVjdHMucHVzaChwcm9qZWN0KVxyXG4gICAgICAgIHRoaXMucmVtb3ZlUHJvamVjdChwcm9qZWN0KVxyXG4gICAgfVxyXG4gICAgYWRkVG9Qcm9qZWN0TGlzdCAobmV3UHJvamVjdCkge1xyXG4gICAgICAgIHRoaXMuI3Byb2plY3RzLnB1c2gobmV3UHJvamVjdClcclxuICAgIH1cclxuICAgXHJcbiAgICAvL0dldCBsaXN0IG9mIGNvbXBsZXRlZCBwcm9qZWN0c1xyXG4gICAgZ2V0Q29tcGxldGVkKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuI2NvbXBsZXRlZFByb2plY3RzXHJcbiAgICB9XHJcbiAgICAvL2dldCBwcm9qZWN0c1xyXG4gICAgZ2V0UHJvamVjdHMoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy4jcHJvamVjdHNcclxuICAgIH1cclxuXHJcbiAgICAvL3JlbW92ZSBwcm9qZWN0IGZyb20gbGlzdFxyXG4gICAgcmVtb3ZlUHJvamVjdChwcm9qZWN0KXtcclxuICAgICAgICB0aGlzLiNwcm9qZWN0cyA9IHRoaXMuI3Byb2plY3RzLmZpbHRlcihlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgaWYoZWxlbWVudCA9PT0gcHJvamVjdClcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoKXtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeSh0aGlzLiNwcm9qZWN0cykpXHJcbiAgICB9XHJcblxyXG5cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcclxuICAgIC8qXHJcbiAgICAgICAgVGFzayBjbGFzcyBjcmVhdGUgVGFzayBvYmplY3RzXHJcbiAgICAqL1xyXG5cclxuICAgIC8vVGFzay5kZXNjcmlwdGlvblxyXG4gICAgI2Rlc2NyaXB0aW9uXHJcblxyXG4gICAgLy9UYXNrLmR1ZWRhdGVcclxuICAgICNkdWVEYXRlXHJcbiAgICAjY29tcGxldGUgPSBmYWxzZVxyXG5cclxuICAgIC8vVGFzay5wcmlvcml0eVxyXG4gICAgY29uc3RydWN0b3IodGl0bGUpe1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZVxyXG4gICAgfVxyXG4gICAgLy9FZGl0IHRhc2sgcHJvcGVydGllc1xyXG4gICAgZWRpdChkYXRhKXtcclxuICAgICAgICB0aGlzLnRpdGxlID0gZGF0YS50aXRsZVxyXG4gICAgICAgIHRoaXMuI2Rlc2NyaXB0aW9uID0gdGhpcy5zZXREZXNjcmlwdGlvbihkYXRhLmRlc2NyaXB0aW9uKVxyXG4gICAgICAgIHRoaXMuI2R1ZURhdGUgPSB0aGlzLnNldER1ZURhdGUoZGF0YS5kdWVEYXRlKVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgLy9yZXR1cm4gdmFsdWUgb2YgZGVzY3JpcHRpb25cclxuICAgIGdldERlc2NyaXB0aW9uKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuI2Rlc2NyaXB0aW9uXHJcbiAgICB9XHJcbiAgICAvL3JldHVybiBkdWUgZGF0ZVxyXG4gICAgZ2V0RHVlRGF0ZSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLiNkdWVEYXRlXHJcbiAgICB9XHJcbiAgICAvL0NoZWNrIGlmIGNvbXBsZXRlXHJcbiAgICBpc0NvbXBsZXRlKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuI2NvbXBsZXRlXHJcbiAgICB9XHJcbiAgICAvL01hcmsgYXMgY29tcGxldGVcclxuICAgIG1hcmtBc0NvbXBsZXRlKCl7XHJcbiAgICAgICAgdGhpcy4jY29tcGxldGUgPSB0cnVlXHJcbiAgICB9XHJcbiAgICAvL01hcmsgYXMgaW5jb21wbGV0ZVxyXG4gICAgbWFya0FzSW5jb21wbGV0ZSgpe1xyXG4gICAgICAgIGlmKHRoaXMuI2NvbXBsZXRlKVxyXG4gICAgICAgICAgICB0aGlzLiNjb21wbGV0ZSA9IGZhbHNlXHJcbiAgICB9XHJcbiAgICAvL2luaXRpYWxpemUgZGVzY3JpcGlvblxyXG4gICAgc2V0RGVzY3JpcHRpb24oZGVzY3JpcHRpb24pe1xyXG4gICAgICAgIHRoaXMuI2Rlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25cclxuICAgIH1cclxuICAgIC8vc2V0IGR1ZSBkYXRlXHJcbiAgICBzZXREdWVEYXRlKGR1ZURhdGUpe1xyXG4gICAgICAgIHRoaXMuI2R1ZURhdGUgPSBkdWVEYXRlXHJcbiAgICB9XHJcbiAgICB0b0pTT04gKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIFwidGl0bGVcIjogdGhpcy50aXRsZSxcclxuICAgICAgICAgICAgXCJjb21wbGV0ZVwiOiB0aGlzLmlzQ29tcGxldGUoKSxcclxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiB0aGlzLmdldERlc2NyaXB0aW9uKCksXHJcbiAgICAgICAgICAgIFwiZHVlRGF0ZVwiOiB0aGlzLmdldER1ZURhdGUoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2tNYW5hZ2VyIHtcclxuICAgIC8qXHJcbiAgICBUYXNrIG1hbmFnZXIgY2xhc3MgcGVyZm9ybXMgb3BlcmF0aW9ucyB3aXRoIGFuZCBvbiBUYXNrIG9iamVjdHNcclxuICAgIFVzZWQgdG9nZXRoZXIgd2l0aCBUYXNrIGNsYXNzXHJcbiAgICAqL1xyXG4gICAgI3Rhc2tMaXN0ID0gW11cclxuICAgICNjb21wbGV0ZWRUYXNrcyA9IFtdXHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcblxyXG4gICAgfVxyXG4gICAgLy9BZGQgdG8gbGlzdFxyXG4gICAgYWRkVGFzayh0YXNrKXtcclxuICAgICAgICB0aGlzLiN0YXNrTGlzdC5wdXNoKHRhc2spXHJcbiAgICB9XHJcbiAgICAvL1VwZGF0ZSBjb21wbGV0ZWQgdGFza3NcclxuICAgIGFkZFRvQ29tcGxldGVkKHRhc2spe1xyXG4gICAgICAgIHRoaXMuI2NvbXBsZXRlZFRhc2tzLnB1c2godGFzaylcclxuICAgICAgICB0aGlzLnJlbW92ZVRhc2sodGFzaylcclxuICAgIH1cclxuICAgIC8vR2V0IGxpc3Qgb2YgY29tcGxldGVkIHRhc2tzXHJcbiAgICBnZXRDb21wbGV0ZWQoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy4jY29tcGxldGVkVGFza3NcclxuICAgIH1cclxuICAgIC8vZ2V0IHRhc2tzXHJcbiAgICBnZXRUYXNrcygpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLiN0YXNrTGlzdFxyXG4gICAgfVxyXG4gICAgLy9yZW1vdmUgdGFzayBmcm9tIGxpc3RcclxuICAgIHJlbW92ZVRhc2soVGFzayl7XHJcbiAgICAgICAgdGhpcy4jdGFza0xpc3QgPSB0aGlzLiN0YXNrTGlzdC5maWx0ZXIodGFzayA9PiB7XHJcbiAgICAgICAgICAgIGlmKHRhc2sgPT09IFRhc2spXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwidmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mID8gKG9iaikgPT4gKE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmopKSA6IChvYmopID0+IChvYmouX19wcm90b19fKTtcbnZhciBsZWFmUHJvdG90eXBlcztcbi8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuLy8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4vLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbi8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuLy8gbW9kZSAmIDE2OiByZXR1cm4gdmFsdWUgd2hlbiBpdCdzIFByb21pc2UtbGlrZVxuLy8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuX193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcblx0aWYobW9kZSAmIDEpIHZhbHVlID0gdGhpcyh2YWx1ZSk7XG5cdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG5cdGlmKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUpIHtcblx0XHRpZigobW9kZSAmIDQpICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcblx0XHRpZigobW9kZSAmIDE2KSAmJiB0eXBlb2YgdmFsdWUudGhlbiA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuIHZhbHVlO1xuXHR9XG5cdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG5cdHZhciBkZWYgPSB7fTtcblx0bGVhZlByb3RvdHlwZXMgPSBsZWFmUHJvdG90eXBlcyB8fCBbbnVsbCwgZ2V0UHJvdG8oe30pLCBnZXRQcm90byhbXSksIGdldFByb3RvKGdldFByb3RvKV07XG5cdGZvcih2YXIgY3VycmVudCA9IG1vZGUgJiAyICYmIHZhbHVlOyB0eXBlb2YgY3VycmVudCA9PSAnb2JqZWN0JyAmJiAhfmxlYWZQcm90b3R5cGVzLmluZGV4T2YoY3VycmVudCk7IGN1cnJlbnQgPSBnZXRQcm90byhjdXJyZW50KSkge1xuXHRcdE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGN1cnJlbnQpLmZvckVhY2goKGtleSkgPT4gKGRlZltrZXldID0gKCkgPT4gKHZhbHVlW2tleV0pKSk7XG5cdH1cblx0ZGVmWydkZWZhdWx0J10gPSAoKSA9PiAodmFsdWUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGRlZik7XG5cdHJldHVybiBucztcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5mID0ge307XG4vLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4vLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18uZSA9IChjaHVua0lkKSA9PiB7XG5cdHJldHVybiBQcm9taXNlLmFsbChPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmYpLnJlZHVjZSgocHJvbWlzZXMsIGtleSkgPT4ge1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18uZltrZXldKGNodW5rSWQsIHByb21pc2VzKTtcblx0XHRyZXR1cm4gcHJvbWlzZXM7XG5cdH0sIFtdKSk7XG59OyIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFzeW5jIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy51ID0gKGNodW5rSWQpID0+IHtcblx0Ly8gcmV0dXJuIHVybCBmb3IgZmlsZW5hbWVzIGJhc2VkIG9uIHRlbXBsYXRlXG5cdHJldHVybiBcIlwiICsgY2h1bmtJZCArIFwiLlwiICsgXCI4YzU1ZjgwYjhjMDdjMjAyNjEwOFwiICsgXCIuanNcIjtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwidmFyIGluUHJvZ3Jlc3MgPSB7fTtcbnZhciBkYXRhV2VicGFja1ByZWZpeCA9IFwidG9kby1pc3QtLW9uZTpcIjtcbi8vIGxvYWRTY3JpcHQgZnVuY3Rpb24gdG8gbG9hZCBhIHNjcmlwdCB2aWEgc2NyaXB0IHRhZ1xuX193ZWJwYWNrX3JlcXVpcmVfXy5sID0gKHVybCwgZG9uZSwga2V5LCBjaHVua0lkKSA9PiB7XG5cdGlmKGluUHJvZ3Jlc3NbdXJsXSkgeyBpblByb2dyZXNzW3VybF0ucHVzaChkb25lKTsgcmV0dXJuOyB9XG5cdHZhciBzY3JpcHQsIG5lZWRBdHRhY2g7XG5cdGlmKGtleSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc2NyaXB0cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIHMgPSBzY3JpcHRzW2ldO1xuXHRcdFx0aWYocy5nZXRBdHRyaWJ1dGUoXCJzcmNcIikgPT0gdXJsIHx8IHMuZ2V0QXR0cmlidXRlKFwiZGF0YS13ZWJwYWNrXCIpID09IGRhdGFXZWJwYWNrUHJlZml4ICsga2V5KSB7IHNjcmlwdCA9IHM7IGJyZWFrOyB9XG5cdFx0fVxuXHR9XG5cdGlmKCFzY3JpcHQpIHtcblx0XHRuZWVkQXR0YWNoID0gdHJ1ZTtcblx0XHRzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblxuXHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04Jztcblx0XHRzY3JpcHQudGltZW91dCA9IDEyMDtcblx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5uYykge1xuXHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuXHRcdH1cblx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwiZGF0YS13ZWJwYWNrXCIsIGRhdGFXZWJwYWNrUHJlZml4ICsga2V5KTtcblx0XHRzY3JpcHQuc3JjID0gdXJsO1xuXHR9XG5cdGluUHJvZ3Jlc3NbdXJsXSA9IFtkb25lXTtcblx0dmFyIG9uU2NyaXB0Q29tcGxldGUgPSAocHJldiwgZXZlbnQpID0+IHtcblx0XHQvLyBhdm9pZCBtZW0gbGVha3MgaW4gSUUuXG5cdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbDtcblx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG5cdFx0dmFyIGRvbmVGbnMgPSBpblByb2dyZXNzW3VybF07XG5cdFx0ZGVsZXRlIGluUHJvZ3Jlc3NbdXJsXTtcblx0XHRzY3JpcHQucGFyZW50Tm9kZSAmJiBzY3JpcHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzY3JpcHQpO1xuXHRcdGRvbmVGbnMgJiYgZG9uZUZucy5mb3JFYWNoKChmbikgPT4gKGZuKGV2ZW50KSkpO1xuXHRcdGlmKHByZXYpIHJldHVybiBwcmV2KGV2ZW50KTtcblx0fTtcblx0dmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCB1bmRlZmluZWQsIHsgdHlwZTogJ3RpbWVvdXQnLCB0YXJnZXQ6IHNjcmlwdCB9KSwgMTIwMDAwKTtcblx0c2NyaXB0Lm9uZXJyb3IgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9uZXJyb3IpO1xuXHRzY3JpcHQub25sb2FkID0gb25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHNjcmlwdC5vbmxvYWQpO1xuXHRuZWVkQXR0YWNoICYmIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbn07IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImJ1bmRsZVwiOiAwXG59O1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmYuaiA9IChjaHVua0lkLCBwcm9taXNlcykgPT4ge1xuXHRcdC8vIEpTT05QIGNodW5rIGxvYWRpbmcgZm9yIGphdmFzY3JpcHRcblx0XHR2YXIgaW5zdGFsbGVkQ2h1bmtEYXRhID0gX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgPyBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gOiB1bmRlZmluZWQ7XG5cdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhICE9PSAwKSB7IC8vIDAgbWVhbnMgXCJhbHJlYWR5IGluc3RhbGxlZFwiLlxuXG5cdFx0XHQvLyBhIFByb21pc2UgbWVhbnMgXCJjdXJyZW50bHkgbG9hZGluZ1wiLlxuXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG5cdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmKHRydWUpIHsgLy8gYWxsIGNodW5rcyBoYXZlIEpTXG5cdFx0XHRcdFx0Ly8gc2V0dXAgUHJvbWlzZSBpbiBjaHVuayBjYWNoZVxuXHRcdFx0XHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4gKGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IFtyZXNvbHZlLCByZWplY3RdKSk7XG5cdFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0gPSBwcm9taXNlKTtcblxuXHRcdFx0XHRcdC8vIHN0YXJ0IGNodW5rIGxvYWRpbmdcblx0XHRcdFx0XHR2YXIgdXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgX193ZWJwYWNrX3JlcXVpcmVfXy51KGNodW5rSWQpO1xuXHRcdFx0XHRcdC8vIGNyZWF0ZSBlcnJvciBiZWZvcmUgc3RhY2sgdW53b3VuZCB0byBnZXQgdXNlZnVsIHN0YWNrdHJhY2UgbGF0ZXJcblx0XHRcdFx0XHR2YXIgZXJyb3IgPSBuZXcgRXJyb3IoKTtcblx0XHRcdFx0XHR2YXIgbG9hZGluZ0VuZGVkID0gKGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSkge1xuXHRcdFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG5cdFx0XHRcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSAhPT0gMCkgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gdW5kZWZpbmVkO1xuXHRcdFx0XHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcblx0XHRcdFx0XHRcdFx0XHR2YXIgZXJyb3JUeXBlID0gZXZlbnQgJiYgKGV2ZW50LnR5cGUgPT09ICdsb2FkJyA/ICdtaXNzaW5nJyA6IGV2ZW50LnR5cGUpO1xuXHRcdFx0XHRcdFx0XHRcdHZhciByZWFsU3JjID0gZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5zcmM7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IubWVzc2FnZSA9ICdMb2FkaW5nIGNodW5rICcgKyBjaHVua0lkICsgJyBmYWlsZWQuXFxuKCcgKyBlcnJvclR5cGUgKyAnOiAnICsgcmVhbFNyYyArICcpJztcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5uYW1lID0gJ0NodW5rTG9hZEVycm9yJztcblx0XHRcdFx0XHRcdFx0XHRlcnJvci50eXBlID0gZXJyb3JUeXBlO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLnJlcXVlc3QgPSByZWFsU3JjO1xuXHRcdFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rRGF0YVsxXShlcnJvcik7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubCh1cmwsIGxvYWRpbmdFbmRlZCwgXCJjaHVuay1cIiArIGNodW5rSWQsIGNodW5rSWQpO1xuXHRcdFx0XHR9IGVsc2UgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0XHRcdH1cblx0XHR9XG59O1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rdG9kb19pc3Rfb25lXCJdID0gc2VsZltcIndlYnBhY2tDaHVua3RvZG9faXN0X29uZVwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBDb25zb2xlIH0gZnJvbSAnY29uc29sZSdcclxuaW1wb3J0ICcuLi9zdHlsZXMvc3R5bGVzLmNzcydcclxuaW1wb3J0IERPTU1hbmFnZXIgZnJvbSAnLi9kb21fbWFuYWdlci5qcydcclxuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0LmpzJ1xyXG5pbXBvcnQgUHJvamVjdE1hbmFnZXIgZnJvbSAnLi9wcm9qZWN0X21hbmFnZXInXHJcbmltcG9ydCBUYXNrIGZyb20gJy4vdGFzaydcclxuaW1wb3J0IFRhc2tNYW5hZ2VyIGZyb20gJy4vdGFza19tYW5hZ2VyJ1xyXG5cclxuLy8gbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Byb2plY3RzJylcclxuY29uc3QgZG9tTWFuYWdlciA9IG5ldyBET01NYW5hZ2VyKClcclxuY29uc3QgcHJvamVjdE1hbmFnZXIgPSBuZXcgUHJvamVjdE1hbmFnZXIoKVxyXG5cclxud2luZG93LmxvY2F0aW9uLmhhc2ggPScnXHJcbi8vQ3JlYXRlIFByb2plY3QgbGlzdCBjb250YWluZXJcclxuY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG5wcm9qZWN0TGlzdC5jbGFzc05hbWUgPSAnZmxleCBmbGV4LWNvbCBnYXAtMidcclxuXHJcblxyXG5mdW5jdGlvbiBjb250cm9sUHJvamVjdERpc3BsYXkgKCkge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCAoKSA9PntcclxuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnN1YnN0cmluZygxKS5yZXBsYWNlQWxsKCctJywgJyAnKVxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gZ2V0Q3VycmVudFByb2plY3QocHJvamVjdE5hbWUpXHJcbiAgICAgICAgZGlzcGxheUN1cnJlbnRQcm9qZWN0KGN1cnJlbnRQcm9qZWN0KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRQcm9qZWN0KVxyXG4gICAgfSlcclxufVxyXG5mdW5jdGlvbiBnZXRDdXJyZW50UHJvamVjdChwcm9qZWN0TmFtZSl7XHJcbiAgICBjb25zdCBwcm9qZWN0cyA9IHByb2plY3RNYW5hZ2VyLmFjY2Vzc0xvY2FsU3RvcmFnZSgpXHJcbiAgICByZXR1cm4gcHJvamVjdHMuZmluZChwcm9qZWN0ID0+IHByb2plY3QubmFtZSA9PT0gcHJvamVjdE5hbWUpXHJcbn1cclxuZnVuY3Rpb24gZGlzcGxheU5ld1Byb2plY3QocHJvamVjdCl7XHJcbiAgICBcclxuICAgIC8vRGlzcGxheSBEZWZhdWx0IFByb2plY3RcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvbU1hbmFnZXIuY3JlYXRlUHJvamVjdENvbnRhaW5lcihwcm9qZWN0Lm5hbWUpXHJcbiAgICAvLyBBcHBlbmQgdG8gbGlzdFxyXG4gICAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQoY29udGFpbmVyKVxyXG4gICAgXHJcbiAgICAvLyBhZGRFdmVudExpc3RlbmVyVG9Qcm9qZWN0KClcclxufVxyXG5mdW5jdGlvbiBkaXNwbGF5UHJvamVjdENyZWRlbnRpYWxzKHByb2plY3Qpe1xyXG4gICAgY29uc3QgcHJvamVjdEhlYWRlciA9IGRvbU1hbmFnZXIuY3JlYXRlUHJvamVjdEhlYWRlcihwcm9qZWN0KVxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RIZWFkZXIpXHJcbiAgICAgICAgLy9Qcm9qZWN0IGRlc2NyaXB0aW9uIGFuZCBuZXcgdGFzayBidG5cclxuICAgICAgICBjb25zdCBkZXNjTkJ0bkNvbnRhaW5lciA9IGRvbU1hbmFnZXIuY3JlYXRlQ29udGFpbmVyKClcclxuICAgICAgICBkZXNjTkJ0bkNvbnRhaW5lci5jbGFzc05hbWUgPSAnZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHctZnVsbCdcclxuICAgICAgICAvL0RFU0NSSVBUSU9OXHJcbiAgICAgICAgY29uc3QgcHJvamVjdERlc2NyaXB0aW9uID0gZG9tTWFuYWdlci5jcmVhdGVQcm9qZWN0RGVzY3JpcHRpb24ocHJvamVjdC5nZXREZXNjcmlwdGlvbigpKVxyXG4gICAgICAgIHByb2plY3REZXNjcmlwdGlvbi5pZCA9ICdwcm9qZWN0LWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIC8vRGlzcGxheSBkZXNjcmlwdGlvblxyXG4gICAgICAgIGRlc2NOQnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3REZXNjcmlwdGlvbilcclxuICAgICAgICBcclxuICAgICAgICAvLyAgTmV3IHRhc2sgYnV0dG9uXHJcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSAnTmV3IFRhc2snXHJcbiAgICAgICAgYnV0dG9uLmNsYXNzTmFtZSA9ICdiZy1zbGF0ZS0zMDAgdGV4dC1ibHVlLTcwMCBweS0yIHB4LTQgcm91bmRlZC1tZCBob3ZlcjpiZy1zbGF0ZS0xMDAnXHJcbiAgICAgICAgYnV0dG9uLmlkID0gJ25ldy10YXNrLWJ0bidcclxuICAgICAgICBcclxuICAgICAgICAvL0Rpc3BsYXkgYnRuXHJcbiAgICAgICAgZGVzY05CdG5Db250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKVxyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjTkJ0bkNvbnRhaW5lcilcclxuXHJcbiAgICB9XHJcbi8vRGlzcGxheSBtb3JlIGFuPW91dCB0aGUgcHJvamVjdFxyXG5mdW5jdGlvbiBkaXNwbGF5VGFza3NDb250YWluZXIoKXtcclxuICAgIC8vVGFza3MgY29udGFpbmVyXHJcbiAgICBjb25zdCB0YXNrc0NvbnRhaW5lciA9IGRvbU1hbmFnZXIuY3JlYXRlQ29udGFpbmVyKClcclxuICAgIHRhc2tzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3ctZnVsbCcsICdiZy1ibHVlLTYwMCcsICdncmlkJywgJ2dyaWQtMicsICdnYXAtNCcpXHJcbiAgICB0YXNrc0NvbnRhaW5lci5pZCA9ICd0YXNrLWNvbnRhaW5lcidcclxuICAgIFxyXG4gICAgLy9ObyB0YXNrcyB0byBkaXNwbGF5XHJcbiAgICBjb25zdCBwYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgIHBhci5jbGFzc05hbWUgPSAndGV4dC1zbGF0ZS0yMDAgdGV4dC1jZW50ZXIgdGV4dC0zeGwgZm9udC1tZWRpdW0nXHJcbiAgICBwYXIuaWQgPSAnbm8tdGFza3MnXHJcbiAgICAgcGFyLnRleHRDb250ZW50ID0gJ05vIFRhc2tzIExpc3RlZCBIZXJlJ1xyXG4gICAgIHRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKHBhcilcclxuICAgICBcclxuICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGFza3NDb250YWluZXIpXHJcbiAgICB9XHJcbmZ1bmN0aW9uIGRpc3BsYXlDdXJyZW50UHJvamVjdCAocHJvamVjdCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQtY29udGFpbmVyICNwcm9qZWN0LW5hbWUnKS50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZVxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtZGVzY3JpcHRpb24gcCcpLnRleHRDb250ZW50ID0gcHJvamVjdC5kZXNjcmlwdGlvblxyXG59XHJcbmZ1bmN0aW9uIHNhdmVQcm9qZWN0IChwcm9qZWN0KSB7XHJcbiAgICBwcm9qZWN0TWFuYWdlci5hZGRUb1Byb2plY3RMaXN0KHByb2plY3QudG9KU09OKCkpXHJcbiAgICBwcm9qZWN0TWFuYWdlci51cGRhdGVMb2NhbFN0b3JhZ2UoKVxyXG5cclxufVxyXG4vLyBDcmVhdGUgYW5kIGRpc3BsYXkgaGVhZGVyXHJcbmNvbnN0IGhlYWRlciA9IGRvbU1hbmFnZXIuY3JlYXRlSGVhZGVyKClcclxuICAgIGNvbnN0IGxvZ28gPSBkb21NYW5hZ2VyLmNyZWF0ZUxvZ28oJ1BsYW5zZW4nKVxyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGxvZ28pXHJcbiAgICBkb2N1bWVudC5ib2R5LnByZXBlbmQoaGVhZGVyKVxyXG5cclxuICAgIC8vc2lkZWJhclxyXG5jb25zdCBzaWRlYmFyID0gZG9tTWFuYWdlci5jcmVhdGVTaWRlYmFyKClcclxuZG9tTWFuYWdlci5yZW5kZXIoc2lkZWJhcilcclxuc2lkZWJhci5pZCA9ICdtYWluLXNpZGUtYmFyJ1xyXG5cclxuLy9Db250ZW50IGNvbnRhaW5lclxyXG5jb25zdCBjb250YWluZXIgPSBkb21NYW5hZ2VyLmNyZWF0ZUNvbnRhaW5lcigpXHJcbmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdiZy1ibHVlLTcwMCcsICdmbGV4JywnZmxleC1jb2wnLCAnaXRlbXMtc3RhcnQnLCAnanVzdGlmeS1zdGFydCcsICdnYXAtMicpXHJcbiAgICBjb250YWluZXIuaWQgPSAnY29udGVudC1jb250YWluZXInXHJcbiAgICBkb21NYW5hZ2VyLnJlbmRlcihjb250YWluZXIpXHJcbiAgICBcclxuICAgIC8vRm9vdGVyXHJcbmNvbnN0IGZvb3RlciA9IGRvbU1hbmFnZXIuY3JlYXRlRm9vdGVyKClcclxuc2lkZWJhci5hcHBlbmRDaGlsZChmb290ZXIpXHJcblxyXG4vL1VzZXIgcHJvZmlsZVxyXG5jb25zdCBwcm9maWxlID0gZG9tTWFuYWdlci5jcmVhdGVVc2VyUHJvZmlsZSgnVGhlIEFyY2hpdGVjaCcpXHJcbmhlYWRlci5hcHBlbmRDaGlsZChwcm9maWxlKVxyXG5oZWFkZXIuY2xhc3NMaXN0LmFkZCgnZmxleCcsICdmbGV4LXJvdycsICdqdXN0aWZ5LWJldHdlZW4nLCAnaXRlbXMtY2VudGVyJylcclxuXHJcbi8vSW1wb3J0IHByb2ZpbGUgcGljXHJcbiAgICBpbXBvcnQoJy4uL2ltYWdlcy9wcm9maWxlLXBpYy5wbmcnKS50aGVuKCh7ZGVmYXVsdDpwaWN9KSA9PntcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvZmlsZS1waWN0dXJlJykuc3JjID0gcGljXHJcbiAgICB9KS5jYXRjaCgoZXJyb3IpPT5jb25zb2xlLmVycm9yKGBFcnJvciBvY3V1cmVkIHdoaWxlIGltcG9ydGluZyBwcm9maWxlIHBpYzogJHtlcnJvcn1gKSlcclxuXHJcbiAgICAvL1Byb2plY3RzIGhlYWRlclxyXG4gICAgY29uc3QgcHJvamVjdHNIZWFkZXIgPSBkb21NYW5hZ2VyLmNyZWF0ZUNvbnRhaW5lcigpXHJcbiAgICBwcm9qZWN0c0hlYWRlci5jbGFzc05hbWUgPSAnZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGJnLWJsdWUtNjAwIHB4LTQgcHktMidcclxuICAgIHByb2plY3RzSGVhZGVyLmlkID0gJ3Byb2plY3RzLWhlYWRlcidcclxuXHJcbiAgICAvL0hlYWRpbmdcclxuICAgIGNvbnN0IGhlYWRpbmcgPSBkb21NYW5hZ2VyLmNyZWF0ZUhlYWRpbmcoJ015IFByb2plY3RzJylcclxuICAgIGhlYWRpbmcuY2xhc3NMaXN0LmFkZCgnZm9udC1tZWRpdW0nLCAndy1mdWxsJylcclxuICAgIHByb2plY3RzSGVhZGVyLmFwcGVuZENoaWxkKGhlYWRpbmcpXHJcbiAgICBcclxuICAgIC8vIE5ldyBwcm9qZWN0IEFkZCBidXR0b25cclxuICAgIGNvbnN0IGFkZEJ0biA9IGRvbU1hbmFnZXIuY3JlYXRlQWRkQnV0dG9uKClcclxuICAgIGFkZEJ0bi5pZCA9ICduZXctcHJvamVjdC1idG4nXHJcbiAgICBwcm9qZWN0c0hlYWRlci5hcHBlbmRDaGlsZChhZGRCdG4pXHJcbiAgICBcclxuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQocHJvamVjdHNIZWFkZXIpIFxyXG5cclxuLy9DcmVhdGUgZGVmYXVsdCBQcm9qZWN0XHJcbmNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gbmV3IFByb2plY3QoJ1RvZGF5JylcclxuICAgIGRlZmF1bHRQcm9qZWN0LnNldERlc2NyaXB0aW9uKCdUb2RheVxcJ3MgQWN0aXZpdGllcycpXHJcbiAgICBwcm9qZWN0TWFuYWdlci5hZGRUb1Byb2plY3RMaXN0KGRlZmF1bHRQcm9qZWN0LnRvSlNPTigpKSAvL0FkZCB0byBwcm9qZWN0c1xyXG4gICAgZGlzcGxheU5ld1Byb2plY3QoZGVmYXVsdFByb2plY3QpXHJcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHByb2plY3RMaXN0KVxyXG5cclxuICAgIC8vRGlzcGxheSBkZWZhdWx0IHByb2plY3QgZGV0YWlsc1xyXG4gICAgZGlzcGxheVByb2plY3RDcmVkZW50aWFscyhkZWZhdWx0UHJvamVjdClcclxuICAgIGRpc3BsYXlUYXNrc0NvbnRhaW5lcigpXHJcblxyXG4gICAgXHJcbi8vQ3JlYXRlIG5ldyBQcm9qZWN0XHJcbi8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoZSkgPT57XHJcbiAgICBcclxuICAgIC8vQWNjZXNzIGFuZCBkaXNwbGF5IHByb2plY3RzIGZyb20gbG9jYWxzdG9yYWdlXHJcbiAgICBjb25zdCBwcm9qZWN0cyA9IHByb2plY3RNYW5hZ2VyLmFjY2Vzc0xvY2FsU3RvcmFnZSgpXHJcbiAgICBpZihBcnJheS5pc0FycmF5KHByb2plY3RzKSl7XHJcbiAgICAgICAgcHJvamVjdExpc3QuaW5uZXJIVE1MID0gJydcclxuICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT57XHJcbiAgICAgICAgICAgIGRpc3BsYXlOZXdQcm9qZWN0KHByb2plY3QpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgICAgcHJvamVjdE1hbmFnZXIudXBkYXRlTG9jYWxTdG9yYWdlKClcclxuICAgIH1cclxuXHJcbiAgICAvL0NyZWF0ZSBuZXcgUHJvamVjdFxyXG4gICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+e1xyXG4gICAgICAgIC8vcHJvamVjdCBtYW5hZ2VyIGNyZWF0ZSBuZXcgcHJvamVjdFxyXG4gICAgICAgIGRvbU1hbmFnZXIuZGlzcGxheUZvcm0oJyNwcm9qZWN0LWZvcm0nKVxyXG4gICAgICAgIC8vQ2xvc2UgZm9ybSBvbiBDQU5DRUxMXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hpZGUtcHJvamVjdC1mb3JtJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcclxuICAgICAgICAgICAgZG9tTWFuYWdlci5oaWRlRm9ybSgnI3Byb2plY3QtZm9ybScpXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbiAgICAvL0FkZCBldmVudCBsaXN0ZW5lciB0byBmb3JtXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtI3Byb2plY3QtZm9ybScpLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT57XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBkb21NYW5hZ2VyLmdldEZvcm1EYXRhKCcjcHJvamVjdC1mb3JtJykvL0dldCBkYXRhXHJcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KGRhdGFbMF0pLy9DcmVhdGUgbmV3IFByb2plY3RcclxuICAgICAgICBwcm9qZWN0LnNldERlc2NyaXB0aW9uKGRhdGFbMV0pXHJcbiAgICAgICAgc2F2ZVByb2plY3QocHJvamVjdCkgLy9BZGQgdG8gcHJvamVjdCBsaXN0IGFuZCB1cGRhdGUgbG9jYWxTdG9yYWdlXHJcbiAgICAgICAgZGlzcGxheU5ld1Byb2plY3QocHJvamVjdCkvL0Rpc3BsYXkgUHJvamVjdCBjb250YWluZXJcclxuICAgICAgICBkb21NYW5hZ2VyLmhpZGVGb3JtKCcjcHJvamVjdC1mb3JtJykgLy9oaWRlIHByb2plY3QgZm9ybVxyXG4gICAgfSlcclxuXHJcbiAgICAvL05ld1Rhc2tcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctdGFzay1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xyXG4gICAgICAgIGRvbU1hbmFnZXIuZGlzcGxheUZvcm0oJyN0YXNrLWZvcm0nKVxyXG4gICAgICAgIC8vSGlkZSBmb3JtIG9uIGJ0biBjbGlja1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNoaWRlLXRhc2stZm9ybScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XHJcbiAgICAgICAgICAgIGRvbU1hbmFnZXIuaGlkZUZvcm0oJyN0YXNrLWZvcm0nKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy9DcmVhdGUgdGFza1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0jdGFzay1mb3JtJykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+e1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICAgLy9nZXQgZGF0YVxyXG4gICAgICAgICAgICBjb25zdCBpbnB1dCA9IGRvbU1hbmFnZXIuZ2V0Rm9ybURhdGEoJyN0YXNrLWZvcm0nKVxyXG5cclxuICAgICAgICAgICAgLy9Jbml0aWFsaXplIGRhdGEgb2JqZWN0XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ2lucHV0WzBdJyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnaW5wdXRbMV0nLFxyXG4gICAgICAgICAgICAgICAgZHVlRGF0ZTogJ2lucHV0WzJdJyxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICAgICAgICAvL2Nsb3NlRm9ybVxyXG4gICAgICAgICAgICBkb21NYW5hZ2VyLmhpZGVGb3JtKCcjdGFzay1mb3JtJylcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxuICAgIC8vIGFkZEV2ZW50TGlzdGVuZXJUb1Byb2plY3QoKS8vQWRkIGV2ZW50IGxpc3RlbmVyIHRvIHByb2plY3QgZXZlcnkgdGltZSBwYWdlIGlzIGxvYWRlZFxyXG59KVxyXG5jb250cm9sUHJvamVjdERpc3BsYXkoKVxyXG53aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2hhc2hjaGFuZ2UnKSlcclxuLy8gY29uc29sZS5sb2coZ2V0Q3VycmVudFByb2plY3QoKSlcclxuXHJcblxyXG5cclxuLyoqX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cclxuICpPcGVuIFByb2plY3QgdG8gdmlldyBwcm9qZWN0IGRldGFpbHMgXHJcbiAqIFxyXG4gKiBXaGVuIFByb2plY3QgaXMgY2xpY2tlZCwgdGhlIERvbSBpcyBwb3B1bGF0ZWQgd2l0aCBwcm9qZWN0IGRlYXRhaWxzXHJcbiAqICovICAgIFxyXG5cclxuICAgXHJcbiAgICBcclxuXHJcbiAgICAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=