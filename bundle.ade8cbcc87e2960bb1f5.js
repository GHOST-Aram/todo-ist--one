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
___CSS_LOADER_EXPORT___.push([module.id, "/*\r\n! tailwindcss v3.2.7 | MIT License | https://tailwindcss.com\r\n*/\r\n\r\n/*\r\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\r\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\r\n*/\r\n\r\n*,\r\n::before,\r\n::after {\r\n  box-sizing: border-box;\r\n  /* 1 */\r\n  border-width: 0;\r\n  /* 2 */\r\n  border-style: solid;\r\n  /* 2 */\r\n  border-color: #e5e7eb;\r\n  /* 2 */\r\n}\r\n\r\n::before,\r\n::after {\r\n  --tw-content: '';\r\n}\r\n\r\n/*\r\n1. Use a consistent sensible line-height in all browsers.\r\n2. Prevent adjustments of font size after orientation changes in iOS.\r\n3. Use a more readable tab size.\r\n4. Use the user's configured `sans` font-family by default.\r\n5. Use the user's configured `sans` font-feature-settings by default.\r\n*/\r\n\r\nhtml {\r\n  line-height: 1.5;\r\n  /* 1 */\r\n  -webkit-text-size-adjust: 100%;\r\n  /* 2 */\r\n  -moz-tab-size: 4;\r\n  /* 3 */\r\n  -o-tab-size: 4;\r\n     tab-size: 4;\r\n  /* 3 */\r\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\r\n  /* 4 */\r\n  font-feature-settings: normal;\r\n  /* 5 */\r\n}\r\n\r\n/*\r\n1. Remove the margin in all browsers.\r\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\r\n*/\r\n\r\nbody {\r\n  margin: 0;\r\n  /* 1 */\r\n  line-height: inherit;\r\n  /* 2 */\r\n}\r\n\r\n/*\r\n1. Add the correct height in Firefox.\r\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\r\n3. Ensure horizontal rules are visible by default.\r\n*/\r\n\r\nhr {\r\n  height: 0;\r\n  /* 1 */\r\n  color: inherit;\r\n  /* 2 */\r\n  border-top-width: 1px;\r\n  /* 3 */\r\n}\r\n\r\n/*\r\nAdd the correct text decoration in Chrome, Edge, and Safari.\r\n*/\r\n\r\nabbr:where([title]) {\r\n  -webkit-text-decoration: underline dotted;\r\n          text-decoration: underline dotted;\r\n}\r\n\r\n/*\r\nRemove the default font size and weight for headings.\r\n*/\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  font-size: inherit;\r\n  font-weight: inherit;\r\n}\r\n\r\n/*\r\nReset links to optimize for opt-in styling instead of opt-out.\r\n*/\r\n\r\na {\r\n  color: inherit;\r\n  text-decoration: inherit;\r\n}\r\n\r\n/*\r\nAdd the correct font weight in Edge and Safari.\r\n*/\r\n\r\nb,\r\nstrong {\r\n  font-weight: bolder;\r\n}\r\n\r\n/*\r\n1. Use the user's configured `mono` font family by default.\r\n2. Correct the odd `em` font sizing in all browsers.\r\n*/\r\n\r\ncode,\r\nkbd,\r\nsamp,\r\npre {\r\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\r\n  /* 1 */\r\n  font-size: 1em;\r\n  /* 2 */\r\n}\r\n\r\n/*\r\nAdd the correct font size in all browsers.\r\n*/\r\n\r\nsmall {\r\n  font-size: 80%;\r\n}\r\n\r\n/*\r\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\r\n*/\r\n\r\nsub,\r\nsup {\r\n  font-size: 75%;\r\n  line-height: 0;\r\n  position: relative;\r\n  vertical-align: baseline;\r\n}\r\n\r\nsub {\r\n  bottom: -0.25em;\r\n}\r\n\r\nsup {\r\n  top: -0.5em;\r\n}\r\n\r\n/*\r\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\r\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\r\n3. Remove gaps between table borders by default.\r\n*/\r\n\r\ntable {\r\n  text-indent: 0;\r\n  /* 1 */\r\n  border-color: inherit;\r\n  /* 2 */\r\n  border-collapse: collapse;\r\n  /* 3 */\r\n}\r\n\r\n/*\r\n1. Change the font styles in all browsers.\r\n2. Remove the margin in Firefox and Safari.\r\n3. Remove default padding in all browsers.\r\n*/\r\n\r\nbutton,\r\ninput,\r\noptgroup,\r\nselect,\r\ntextarea {\r\n  font-family: inherit;\r\n  /* 1 */\r\n  font-size: 100%;\r\n  /* 1 */\r\n  font-weight: inherit;\r\n  /* 1 */\r\n  line-height: inherit;\r\n  /* 1 */\r\n  color: inherit;\r\n  /* 1 */\r\n  margin: 0;\r\n  /* 2 */\r\n  padding: 0;\r\n  /* 3 */\r\n}\r\n\r\n/*\r\nRemove the inheritance of text transform in Edge and Firefox.\r\n*/\r\n\r\nbutton,\r\nselect {\r\n  text-transform: none;\r\n}\r\n\r\n/*\r\n1. Correct the inability to style clickable types in iOS and Safari.\r\n2. Remove default button styles.\r\n*/\r\n\r\nbutton,\r\n[type='button'],\r\n[type='reset'],\r\n[type='submit'] {\r\n  -webkit-appearance: button;\r\n  /* 1 */\r\n  background-color: transparent;\r\n  /* 2 */\r\n  background-image: none;\r\n  /* 2 */\r\n}\r\n\r\n/*\r\nUse the modern Firefox focus style for all focusable elements.\r\n*/\r\n\r\n:-moz-focusring {\r\n  outline: auto;\r\n}\r\n\r\n/*\r\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\r\n*/\r\n\r\n:-moz-ui-invalid {\r\n  box-shadow: none;\r\n}\r\n\r\n/*\r\nAdd the correct vertical alignment in Chrome and Firefox.\r\n*/\r\n\r\nprogress {\r\n  vertical-align: baseline;\r\n}\r\n\r\n/*\r\nCorrect the cursor style of increment and decrement buttons in Safari.\r\n*/\r\n\r\n::-webkit-inner-spin-button,\r\n::-webkit-outer-spin-button {\r\n  height: auto;\r\n}\r\n\r\n/*\r\n1. Correct the odd appearance in Chrome and Safari.\r\n2. Correct the outline style in Safari.\r\n*/\r\n\r\n[type='search'] {\r\n  -webkit-appearance: textfield;\r\n  /* 1 */\r\n  outline-offset: -2px;\r\n  /* 2 */\r\n}\r\n\r\n/*\r\nRemove the inner padding in Chrome and Safari on macOS.\r\n*/\r\n\r\n::-webkit-search-decoration {\r\n  -webkit-appearance: none;\r\n}\r\n\r\n/*\r\n1. Correct the inability to style clickable types in iOS and Safari.\r\n2. Change font properties to `inherit` in Safari.\r\n*/\r\n\r\n::-webkit-file-upload-button {\r\n  -webkit-appearance: button;\r\n  /* 1 */\r\n  font: inherit;\r\n  /* 2 */\r\n}\r\n\r\n/*\r\nAdd the correct display in Chrome and Safari.\r\n*/\r\n\r\nsummary {\r\n  display: list-item;\r\n}\r\n\r\n/*\r\nRemoves the default spacing and border for appropriate elements.\r\n*/\r\n\r\nblockquote,\r\ndl,\r\ndd,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\nhr,\r\nfigure,\r\np,\r\npre {\r\n  margin: 0;\r\n}\r\n\r\nfieldset {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nlegend {\r\n  padding: 0;\r\n}\r\n\r\nol,\r\nul,\r\nmenu {\r\n  list-style: none;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n/*\r\nPrevent resizing textareas horizontally by default.\r\n*/\r\n\r\ntextarea {\r\n  resize: vertical;\r\n}\r\n\r\n/*\r\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\r\n2. Set the default placeholder color to the user's configured gray 400 color.\r\n*/\r\n\r\ninput::-moz-placeholder, textarea::-moz-placeholder {\r\n  opacity: 1;\r\n  /* 1 */\r\n  color: #9ca3af;\r\n  /* 2 */\r\n}\r\n\r\ninput::placeholder,\r\ntextarea::placeholder {\r\n  opacity: 1;\r\n  /* 1 */\r\n  color: #9ca3af;\r\n  /* 2 */\r\n}\r\n\r\n/*\r\nSet the default cursor for buttons.\r\n*/\r\n\r\nbutton,\r\n[role=\"button\"] {\r\n  cursor: pointer;\r\n}\r\n\r\n/*\r\nMake sure disabled buttons don't get the pointer cursor.\r\n*/\r\n\r\n:disabled {\r\n  cursor: default;\r\n}\r\n\r\n/*\r\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\r\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\r\n   This can trigger a poorly considered lint error in some tools but is included by design.\r\n*/\r\n\r\nimg,\r\nsvg,\r\nvideo,\r\ncanvas,\r\naudio,\r\niframe,\r\nembed,\r\nobject {\r\n  display: block;\r\n  /* 1 */\r\n  vertical-align: middle;\r\n  /* 2 */\r\n}\r\n\r\n/*\r\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\r\n*/\r\n\r\nimg,\r\nvideo {\r\n  max-width: 100%;\r\n  height: auto;\r\n}\r\n\r\n/* Make elements with the HTML hidden attribute stay hidden by default */\r\n\r\n[hidden] {\r\n  display: none;\r\n}\r\n\r\n*, ::before, ::after {\r\n  --tw-border-spacing-x: 0;\r\n  --tw-border-spacing-y: 0;\r\n  --tw-translate-x: 0;\r\n  --tw-translate-y: 0;\r\n  --tw-rotate: 0;\r\n  --tw-skew-x: 0;\r\n  --tw-skew-y: 0;\r\n  --tw-scale-x: 1;\r\n  --tw-scale-y: 1;\r\n  --tw-pan-x:  ;\r\n  --tw-pan-y:  ;\r\n  --tw-pinch-zoom:  ;\r\n  --tw-scroll-snap-strictness: proximity;\r\n  --tw-ordinal:  ;\r\n  --tw-slashed-zero:  ;\r\n  --tw-numeric-figure:  ;\r\n  --tw-numeric-spacing:  ;\r\n  --tw-numeric-fraction:  ;\r\n  --tw-ring-inset:  ;\r\n  --tw-ring-offset-width: 0px;\r\n  --tw-ring-offset-color: #fff;\r\n  --tw-ring-color: rgb(59 130 246 / 0.5);\r\n  --tw-ring-offset-shadow: 0 0 #0000;\r\n  --tw-ring-shadow: 0 0 #0000;\r\n  --tw-shadow: 0 0 #0000;\r\n  --tw-shadow-colored: 0 0 #0000;\r\n  --tw-blur:  ;\r\n  --tw-brightness:  ;\r\n  --tw-contrast:  ;\r\n  --tw-grayscale:  ;\r\n  --tw-hue-rotate:  ;\r\n  --tw-invert:  ;\r\n  --tw-saturate:  ;\r\n  --tw-sepia:  ;\r\n  --tw-drop-shadow:  ;\r\n  --tw-backdrop-blur:  ;\r\n  --tw-backdrop-brightness:  ;\r\n  --tw-backdrop-contrast:  ;\r\n  --tw-backdrop-grayscale:  ;\r\n  --tw-backdrop-hue-rotate:  ;\r\n  --tw-backdrop-invert:  ;\r\n  --tw-backdrop-opacity:  ;\r\n  --tw-backdrop-saturate:  ;\r\n  --tw-backdrop-sepia:  ;\r\n}\r\n\r\n::backdrop {\r\n  --tw-border-spacing-x: 0;\r\n  --tw-border-spacing-y: 0;\r\n  --tw-translate-x: 0;\r\n  --tw-translate-y: 0;\r\n  --tw-rotate: 0;\r\n  --tw-skew-x: 0;\r\n  --tw-skew-y: 0;\r\n  --tw-scale-x: 1;\r\n  --tw-scale-y: 1;\r\n  --tw-pan-x:  ;\r\n  --tw-pan-y:  ;\r\n  --tw-pinch-zoom:  ;\r\n  --tw-scroll-snap-strictness: proximity;\r\n  --tw-ordinal:  ;\r\n  --tw-slashed-zero:  ;\r\n  --tw-numeric-figure:  ;\r\n  --tw-numeric-spacing:  ;\r\n  --tw-numeric-fraction:  ;\r\n  --tw-ring-inset:  ;\r\n  --tw-ring-offset-width: 0px;\r\n  --tw-ring-offset-color: #fff;\r\n  --tw-ring-color: rgb(59 130 246 / 0.5);\r\n  --tw-ring-offset-shadow: 0 0 #0000;\r\n  --tw-ring-shadow: 0 0 #0000;\r\n  --tw-shadow: 0 0 #0000;\r\n  --tw-shadow-colored: 0 0 #0000;\r\n  --tw-blur:  ;\r\n  --tw-brightness:  ;\r\n  --tw-contrast:  ;\r\n  --tw-grayscale:  ;\r\n  --tw-hue-rotate:  ;\r\n  --tw-invert:  ;\r\n  --tw-saturate:  ;\r\n  --tw-sepia:  ;\r\n  --tw-drop-shadow:  ;\r\n  --tw-backdrop-blur:  ;\r\n  --tw-backdrop-brightness:  ;\r\n  --tw-backdrop-contrast:  ;\r\n  --tw-backdrop-grayscale:  ;\r\n  --tw-backdrop-hue-rotate:  ;\r\n  --tw-backdrop-invert:  ;\r\n  --tw-backdrop-opacity:  ;\r\n  --tw-backdrop-saturate:  ;\r\n  --tw-backdrop-sepia:  ;\r\n}\r\n\r\n.container {\r\n  width: 100%;\r\n}\r\n\r\n@media (min-width: 640px) {\r\n  .container {\r\n    max-width: 640px;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .container {\r\n    max-width: 768px;\r\n  }\r\n}\r\n\r\n@media (min-width: 1024px) {\r\n  .container {\r\n    max-width: 1024px;\r\n  }\r\n}\r\n\r\n@media (min-width: 1280px) {\r\n  .container {\r\n    max-width: 1280px;\r\n  }\r\n}\r\n\r\n@media (min-width: 1536px) {\r\n  .container {\r\n    max-width: 1536px;\r\n  }\r\n}\r\n\r\n.absolute {\r\n  position: absolute;\r\n}\r\n\r\n.m-auto {\r\n  margin: auto;\r\n}\r\n\r\n.mx-4 {\r\n  margin-left: 1rem;\r\n  margin-right: 1rem;\r\n}\r\n\r\n.flex {\r\n  display: flex;\r\n}\r\n\r\n.grid {\r\n  display: grid;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n.w-full {\r\n  width: 100%;\r\n}\r\n\r\n.flex-row {\r\n  flex-direction: row;\r\n}\r\n\r\n.flex-col {\r\n  flex-direction: column;\r\n}\r\n\r\n.items-start {\r\n  align-items: flex-start;\r\n}\r\n\r\n.items-center {\r\n  align-items: center;\r\n}\r\n\r\n.items-stretch {\r\n  align-items: stretch;\r\n}\r\n\r\n.justify-start {\r\n  justify-content: flex-start;\r\n}\r\n\r\n.justify-end {\r\n  justify-content: flex-end;\r\n}\r\n\r\n.justify-between {\r\n  justify-content: space-between;\r\n}\r\n\r\n.gap-2 {\r\n  gap: 0.5rem;\r\n}\r\n\r\n.gap-4 {\r\n  gap: 1rem;\r\n}\r\n\r\n.gap-8 {\r\n  gap: 2rem;\r\n}\r\n\r\n.rounded-full {\r\n  border-radius: 9999px;\r\n}\r\n\r\n.rounded-md {\r\n  border-radius: 0.375rem;\r\n}\r\n\r\n.border-b-2 {\r\n  border-bottom-width: 2px;\r\n}\r\n\r\n.border-t-2 {\r\n  border-top-width: 2px;\r\n}\r\n\r\n.border-solid {\r\n  border-style: solid;\r\n}\r\n\r\n.border-blue-700 {\r\n  --tw-border-opacity: 1;\r\n  border-color: rgb(29 78 216 / var(--tw-border-opacity));\r\n}\r\n\r\n.border-white {\r\n  --tw-border-opacity: 1;\r\n  border-color: rgb(255 255 255 / var(--tw-border-opacity));\r\n}\r\n\r\n.bg-blue-600 {\r\n  --tw-bg-opacity: 1;\r\n  background-color: rgb(37 99 235 / var(--tw-bg-opacity));\r\n}\r\n\r\n.bg-blue-700 {\r\n  --tw-bg-opacity: 1;\r\n  background-color: rgb(29 78 216 / var(--tw-bg-opacity));\r\n}\r\n\r\n.bg-red-500 {\r\n  --tw-bg-opacity: 1;\r\n  background-color: rgb(239 68 68 / var(--tw-bg-opacity));\r\n}\r\n\r\n.bg-slate-300 {\r\n  --tw-bg-opacity: 1;\r\n  background-color: rgb(203 213 225 / var(--tw-bg-opacity));\r\n}\r\n\r\n.bg-slate-500 {\r\n  --tw-bg-opacity: 1;\r\n  background-color: rgb(100 116 139 / var(--tw-bg-opacity));\r\n}\r\n\r\n.bg-transparent {\r\n  background-color: transparent;\r\n}\r\n\r\n.bg-yellow-500 {\r\n  --tw-bg-opacity: 1;\r\n  background-color: rgb(234 179 8 / var(--tw-bg-opacity));\r\n}\r\n\r\n.p-4 {\r\n  padding: 1rem;\r\n}\r\n\r\n.px-4 {\r\n  padding-left: 1rem;\r\n  padding-right: 1rem;\r\n}\r\n\r\n.px-8 {\r\n  padding-left: 2rem;\r\n  padding-right: 2rem;\r\n}\r\n\r\n.py-2 {\r\n  padding-top: 0.5rem;\r\n  padding-bottom: 0.5rem;\r\n}\r\n\r\n.py-4 {\r\n  padding-top: 1rem;\r\n  padding-bottom: 1rem;\r\n}\r\n\r\n.py-8 {\r\n  padding-top: 2rem;\r\n  padding-bottom: 2rem;\r\n}\r\n\r\n.pl-4 {\r\n  padding-left: 1rem;\r\n}\r\n\r\n.pl-8 {\r\n  padding-left: 2rem;\r\n}\r\n\r\n.pt-16 {\r\n  padding-top: 4rem;\r\n}\r\n\r\n.text-center {\r\n  text-align: center;\r\n}\r\n\r\n.text-2xl {\r\n  font-size: 1.5rem;\r\n  line-height: 2rem;\r\n}\r\n\r\n.text-3xl {\r\n  font-size: 1.875rem;\r\n  line-height: 2.25rem;\r\n}\r\n\r\n.text-sm {\r\n  font-size: 0.875rem;\r\n  line-height: 1.25rem;\r\n}\r\n\r\n.text-xl {\r\n  font-size: 1.25rem;\r\n  line-height: 1.75rem;\r\n}\r\n\r\n.font-bold {\r\n  font-weight: 700;\r\n}\r\n\r\n.font-medium {\r\n  font-weight: 500;\r\n}\r\n\r\n.text-blue-700 {\r\n  --tw-text-opacity: 1;\r\n  color: rgb(29 78 216 / var(--tw-text-opacity));\r\n}\r\n\r\n.text-slate-200 {\r\n  --tw-text-opacity: 1;\r\n  color: rgb(226 232 240 / var(--tw-text-opacity));\r\n}\r\n\r\n.text-slate-500 {\r\n  --tw-text-opacity: 1;\r\n  color: rgb(100 116 139 / var(--tw-text-opacity));\r\n}\r\n\r\n.text-white {\r\n  --tw-text-opacity: 1;\r\n  color: rgb(255 255 255 / var(--tw-text-opacity));\r\n}\r\n\r\n.filter {\r\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\r\n}\r\n\r\n.transition-all {\r\n  transition-property: all;\r\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\r\n  transition-duration: 150ms;\r\n}\r\n\r\nbody {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  background-clip: border-box;\r\n  height: 100vh;\r\n  /* padding-top: 5.49rem;\r\n    padding-left: 25vw; */\r\n}\r\n\r\naside {\r\n  width: 20vw;\r\n  position: fixed;\r\n  top: 7.35rem;\r\n  right: 1rem;\r\n  left: 2.5rem;\r\n  bottom: 1rem;\r\n  overflow: scroll;\r\n}\r\n\r\n#content-container {\r\n  position: fixed;\r\n  top: 7.35rem;\r\n  left: 25vw;\r\n  right: 2rem;\r\n  height: 79.6vh;\r\n}\r\n\r\nfooter{\r\n  bottom: 1rem;\r\n}\r\n\r\nfooter,#projects-header {\r\n  position: fixed;\r\n  left: 2.5rem;\r\n  width: 20vw;\r\n  z-index: 100;\r\n}\r\n\r\nform{\r\n  width: 30vw;\r\n  left: calc(25vw - 1rem);\r\n  top: 7.35rem;\r\n}\r\n\r\nheader {\r\n  position: fixed;\r\n  top: 1.5rem;\r\n  right: 1rem;\r\n  left: 1.5rem;\r\n}\r\n\r\n#new-project-btn{\r\n  padding-block: .5rem;\r\n  padding-inline: .8rem;\r\n  border-radius: 30px;\r\n}\r\n\r\n#profile {\r\n  position: absolute;\r\n  right: 0;\r\n}\r\n\r\n#profile-picture {\r\n  width: 45px;\r\n}\r\n\r\n#projects-header{\r\n  top: 7.35rem;\r\n}\r\n\r\n#task-container{\r\n  overflow: scroll;\r\n}\r\n\r\n#task-form {\r\n  left: calc(40vw);\r\n  top: 16.8rem;\r\n}\r\n\r\n.hover\\:bg-blue-600:hover {\r\n  --tw-bg-opacity: 1;\r\n  background-color: rgb(37 99 235 / var(--tw-bg-opacity));\r\n}\r\n\r\n.hover\\:bg-blue-700:hover {\r\n  --tw-bg-opacity: 1;\r\n  background-color: rgb(29 78 216 / var(--tw-bg-opacity));\r\n}\r\n\r\n.hover\\:bg-red-700:hover {\r\n  --tw-bg-opacity: 1;\r\n  background-color: rgb(185 28 28 / var(--tw-bg-opacity));\r\n}\r\n\r\n.hover\\:bg-slate-100:hover {\r\n  --tw-bg-opacity: 1;\r\n  background-color: rgb(241 245 249 / var(--tw-bg-opacity));\r\n}\r\n\r\n.hover\\:bg-yellow-700:hover {\r\n  --tw-bg-opacity: 1;\r\n  background-color: rgb(161 98 7 / var(--tw-bg-opacity));\r\n}\r\n\r\n.focus\\:outline-none:focus {\r\n  outline: 2px solid transparent;\r\n  outline-offset: 2px;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"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","sourcesContent":["/*\r\n! tailwindcss v3.2.7 | MIT License | https://tailwindcss.com\r\n*/\r\n\r\n/*\r\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\r\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\r\n*/\r\n\r\n*,\r\n::before,\r\n::after {\r\n  box-sizing: border-box;\r\n  /* 1 */\r\n  border-width: 0;\r\n  /* 2 */\r\n  border-style: solid;\r\n  /* 2 */\r\n  border-color: #e5e7eb;\r\n  /* 2 */\r\n}\r\n\r\n::before,\r\n::after {\r\n  --tw-content: '';\r\n}\r\n\r\n/*\r\n1. Use a consistent sensible line-height in all browsers.\r\n2. Prevent adjustments of font size after orientation changes in iOS.\r\n3. Use a more readable tab size.\r\n4. Use the user's configured `sans` font-family by default.\r\n5. Use the user's configured `sans` font-feature-settings by default.\r\n*/\r\n\r\nhtml {\r\n  line-height: 1.5;\r\n  /* 1 */\r\n  -webkit-text-size-adjust: 100%;\r\n  /* 2 */\r\n  -moz-tab-size: 4;\r\n  /* 3 */\r\n  -o-tab-size: 4;\r\n     tab-size: 4;\r\n  /* 3 */\r\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\r\n  /* 4 */\r\n  font-feature-settings: normal;\r\n  /* 5 */\r\n}\r\n\r\n/*\r\n1. Remove the margin in all browsers.\r\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\r\n*/\r\n\r\nbody {\r\n  margin: 0;\r\n  /* 1 */\r\n  line-height: inherit;\r\n  /* 2 */\r\n}\r\n\r\n/*\r\n1. Add the correct height in Firefox.\r\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\r\n3. Ensure horizontal rules are visible by default.\r\n*/\r\n\r\nhr {\r\n  height: 0;\r\n  /* 1 */\r\n  color: inherit;\r\n  /* 2 */\r\n  border-top-width: 1px;\r\n  /* 3 */\r\n}\r\n\r\n/*\r\nAdd the correct text decoration in Chrome, Edge, and Safari.\r\n*/\r\n\r\nabbr:where([title]) {\r\n  -webkit-text-decoration: underline dotted;\r\n          text-decoration: underline dotted;\r\n}\r\n\r\n/*\r\nRemove the default font size and weight for headings.\r\n*/\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  font-size: inherit;\r\n  font-weight: inherit;\r\n}\r\n\r\n/*\r\nReset links to optimize for opt-in styling instead of opt-out.\r\n*/\r\n\r\na {\r\n  color: inherit;\r\n  text-decoration: inherit;\r\n}\r\n\r\n/*\r\nAdd the correct font weight in Edge and Safari.\r\n*/\r\n\r\nb,\r\nstrong {\r\n  font-weight: bolder;\r\n}\r\n\r\n/*\r\n1. Use the user's configured `mono` font family by default.\r\n2. Correct the odd `em` font sizing in all browsers.\r\n*/\r\n\r\ncode,\r\nkbd,\r\nsamp,\r\npre {\r\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\r\n  /* 1 */\r\n  font-size: 1em;\r\n  /* 2 */\r\n}\r\n\r\n/*\r\nAdd the correct font size in all browsers.\r\n*/\r\n\r\nsmall {\r\n  font-size: 80%;\r\n}\r\n\r\n/*\r\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\r\n*/\r\n\r\nsub,\r\nsup {\r\n  font-size: 75%;\r\n  line-height: 0;\r\n  position: relative;\r\n  vertical-align: baseline;\r\n}\r\n\r\nsub {\r\n  bottom: -0.25em;\r\n}\r\n\r\nsup {\r\n  top: -0.5em;\r\n}\r\n\r\n/*\r\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\r\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\r\n3. Remove gaps between table borders by default.\r\n*/\r\n\r\ntable {\r\n  text-indent: 0;\r\n  /* 1 */\r\n  border-color: inherit;\r\n  /* 2 */\r\n  border-collapse: collapse;\r\n  /* 3 */\r\n}\r\n\r\n/*\r\n1. Change the font styles in all browsers.\r\n2. Remove the margin in Firefox and Safari.\r\n3. Remove default padding in all browsers.\r\n*/\r\n\r\nbutton,\r\ninput,\r\noptgroup,\r\nselect,\r\ntextarea {\r\n  font-family: inherit;\r\n  /* 1 */\r\n  font-size: 100%;\r\n  /* 1 */\r\n  font-weight: inherit;\r\n  /* 1 */\r\n  line-height: inherit;\r\n  /* 1 */\r\n  color: inherit;\r\n  /* 1 */\r\n  margin: 0;\r\n  /* 2 */\r\n  padding: 0;\r\n  /* 3 */\r\n}\r\n\r\n/*\r\nRemove the inheritance of text transform in Edge and Firefox.\r\n*/\r\n\r\nbutton,\r\nselect {\r\n  text-transform: none;\r\n}\r\n\r\n/*\r\n1. Correct the inability to style clickable types in iOS and Safari.\r\n2. Remove default button styles.\r\n*/\r\n\r\nbutton,\r\n[type='button'],\r\n[type='reset'],\r\n[type='submit'] {\r\n  -webkit-appearance: button;\r\n  /* 1 */\r\n  background-color: transparent;\r\n  /* 2 */\r\n  background-image: none;\r\n  /* 2 */\r\n}\r\n\r\n/*\r\nUse the modern Firefox focus style for all focusable elements.\r\n*/\r\n\r\n:-moz-focusring {\r\n  outline: auto;\r\n}\r\n\r\n/*\r\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\r\n*/\r\n\r\n:-moz-ui-invalid {\r\n  box-shadow: none;\r\n}\r\n\r\n/*\r\nAdd the correct vertical alignment in Chrome and Firefox.\r\n*/\r\n\r\nprogress {\r\n  vertical-align: baseline;\r\n}\r\n\r\n/*\r\nCorrect the cursor style of increment and decrement buttons in Safari.\r\n*/\r\n\r\n::-webkit-inner-spin-button,\r\n::-webkit-outer-spin-button {\r\n  height: auto;\r\n}\r\n\r\n/*\r\n1. Correct the odd appearance in Chrome and Safari.\r\n2. Correct the outline style in Safari.\r\n*/\r\n\r\n[type='search'] {\r\n  -webkit-appearance: textfield;\r\n  /* 1 */\r\n  outline-offset: -2px;\r\n  /* 2 */\r\n}\r\n\r\n/*\r\nRemove the inner padding in Chrome and Safari on macOS.\r\n*/\r\n\r\n::-webkit-search-decoration {\r\n  -webkit-appearance: none;\r\n}\r\n\r\n/*\r\n1. Correct the inability to style clickable types in iOS and Safari.\r\n2. Change font properties to `inherit` in Safari.\r\n*/\r\n\r\n::-webkit-file-upload-button {\r\n  -webkit-appearance: button;\r\n  /* 1 */\r\n  font: inherit;\r\n  /* 2 */\r\n}\r\n\r\n/*\r\nAdd the correct display in Chrome and Safari.\r\n*/\r\n\r\nsummary {\r\n  display: list-item;\r\n}\r\n\r\n/*\r\nRemoves the default spacing and border for appropriate elements.\r\n*/\r\n\r\nblockquote,\r\ndl,\r\ndd,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\nhr,\r\nfigure,\r\np,\r\npre {\r\n  margin: 0;\r\n}\r\n\r\nfieldset {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nlegend {\r\n  padding: 0;\r\n}\r\n\r\nol,\r\nul,\r\nmenu {\r\n  list-style: none;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n/*\r\nPrevent resizing textareas horizontally by default.\r\n*/\r\n\r\ntextarea {\r\n  resize: vertical;\r\n}\r\n\r\n/*\r\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\r\n2. Set the default placeholder color to the user's configured gray 400 color.\r\n*/\r\n\r\ninput::-moz-placeholder, textarea::-moz-placeholder {\r\n  opacity: 1;\r\n  /* 1 */\r\n  color: #9ca3af;\r\n  /* 2 */\r\n}\r\n\r\ninput::placeholder,\r\ntextarea::placeholder {\r\n  opacity: 1;\r\n  /* 1 */\r\n  color: #9ca3af;\r\n  /* 2 */\r\n}\r\n\r\n/*\r\nSet the default cursor for buttons.\r\n*/\r\n\r\nbutton,\r\n[role=\"button\"] {\r\n  cursor: pointer;\r\n}\r\n\r\n/*\r\nMake sure disabled buttons don't get the pointer cursor.\r\n*/\r\n\r\n:disabled {\r\n  cursor: default;\r\n}\r\n\r\n/*\r\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\r\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\r\n   This can trigger a poorly considered lint error in some tools but is included by design.\r\n*/\r\n\r\nimg,\r\nsvg,\r\nvideo,\r\ncanvas,\r\naudio,\r\niframe,\r\nembed,\r\nobject {\r\n  display: block;\r\n  /* 1 */\r\n  vertical-align: middle;\r\n  /* 2 */\r\n}\r\n\r\n/*\r\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\r\n*/\r\n\r\nimg,\r\nvideo {\r\n  max-width: 100%;\r\n  height: auto;\r\n}\r\n\r\n/* Make elements with the HTML hidden attribute stay hidden by default */\r\n\r\n[hidden] {\r\n  display: none;\r\n}\r\n\r\n*, ::before, ::after {\r\n  --tw-border-spacing-x: 0;\r\n  --tw-border-spacing-y: 0;\r\n  --tw-translate-x: 0;\r\n  --tw-translate-y: 0;\r\n  --tw-rotate: 0;\r\n  --tw-skew-x: 0;\r\n  --tw-skew-y: 0;\r\n  --tw-scale-x: 1;\r\n  --tw-scale-y: 1;\r\n  --tw-pan-x:  ;\r\n  --tw-pan-y:  ;\r\n  --tw-pinch-zoom:  ;\r\n  --tw-scroll-snap-strictness: proximity;\r\n  --tw-ordinal:  ;\r\n  --tw-slashed-zero:  ;\r\n  --tw-numeric-figure:  ;\r\n  --tw-numeric-spacing:  ;\r\n  --tw-numeric-fraction:  ;\r\n  --tw-ring-inset:  ;\r\n  --tw-ring-offset-width: 0px;\r\n  --tw-ring-offset-color: #fff;\r\n  --tw-ring-color: rgb(59 130 246 / 0.5);\r\n  --tw-ring-offset-shadow: 0 0 #0000;\r\n  --tw-ring-shadow: 0 0 #0000;\r\n  --tw-shadow: 0 0 #0000;\r\n  --tw-shadow-colored: 0 0 #0000;\r\n  --tw-blur:  ;\r\n  --tw-brightness:  ;\r\n  --tw-contrast:  ;\r\n  --tw-grayscale:  ;\r\n  --tw-hue-rotate:  ;\r\n  --tw-invert:  ;\r\n  --tw-saturate:  ;\r\n  --tw-sepia:  ;\r\n  --tw-drop-shadow:  ;\r\n  --tw-backdrop-blur:  ;\r\n  --tw-backdrop-brightness:  ;\r\n  --tw-backdrop-contrast:  ;\r\n  --tw-backdrop-grayscale:  ;\r\n  --tw-backdrop-hue-rotate:  ;\r\n  --tw-backdrop-invert:  ;\r\n  --tw-backdrop-opacity:  ;\r\n  --tw-backdrop-saturate:  ;\r\n  --tw-backdrop-sepia:  ;\r\n}\r\n\r\n::backdrop {\r\n  --tw-border-spacing-x: 0;\r\n  --tw-border-spacing-y: 0;\r\n  --tw-translate-x: 0;\r\n  --tw-translate-y: 0;\r\n  --tw-rotate: 0;\r\n  --tw-skew-x: 0;\r\n  --tw-skew-y: 0;\r\n  --tw-scale-x: 1;\r\n  --tw-scale-y: 1;\r\n  --tw-pan-x:  ;\r\n  --tw-pan-y:  ;\r\n  --tw-pinch-zoom:  ;\r\n  --tw-scroll-snap-strictness: proximity;\r\n  --tw-ordinal:  ;\r\n  --tw-slashed-zero:  ;\r\n  --tw-numeric-figure:  ;\r\n  --tw-numeric-spacing:  ;\r\n  --tw-numeric-fraction:  ;\r\n  --tw-ring-inset:  ;\r\n  --tw-ring-offset-width: 0px;\r\n  --tw-ring-offset-color: #fff;\r\n  --tw-ring-color: rgb(59 130 246 / 0.5);\r\n  --tw-ring-offset-shadow: 0 0 #0000;\r\n  --tw-ring-shadow: 0 0 #0000;\r\n  --tw-shadow: 0 0 #0000;\r\n  --tw-shadow-colored: 0 0 #0000;\r\n  --tw-blur:  ;\r\n  --tw-brightness:  ;\r\n  --tw-contrast:  ;\r\n  --tw-grayscale:  ;\r\n  --tw-hue-rotate:  ;\r\n  --tw-invert:  ;\r\n  --tw-saturate:  ;\r\n  --tw-sepia:  ;\r\n  --tw-drop-shadow:  ;\r\n  --tw-backdrop-blur:  ;\r\n  --tw-backdrop-brightness:  ;\r\n  --tw-backdrop-contrast:  ;\r\n  --tw-backdrop-grayscale:  ;\r\n  --tw-backdrop-hue-rotate:  ;\r\n  --tw-backdrop-invert:  ;\r\n  --tw-backdrop-opacity:  ;\r\n  --tw-backdrop-saturate:  ;\r\n  --tw-backdrop-sepia:  ;\r\n}\r\n\r\n.container {\r\n  width: 100%;\r\n}\r\n\r\n@media (min-width: 640px) {\r\n  .container {\r\n    max-width: 640px;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .container {\r\n    max-width: 768px;\r\n  }\r\n}\r\n\r\n@media (min-width: 1024px) {\r\n  .container {\r\n    max-width: 1024px;\r\n  }\r\n}\r\n\r\n@media (min-width: 1280px) {\r\n  .container {\r\n    max-width: 1280px;\r\n  }\r\n}\r\n\r\n@media (min-width: 1536px) {\r\n  .container {\r\n    max-width: 1536px;\r\n  }\r\n}\r\n\r\n.absolute {\r\n  position: absolute;\r\n}\r\n\r\n.m-auto {\r\n  margin: auto;\r\n}\r\n\r\n.mx-4 {\r\n  margin-left: 1rem;\r\n  margin-right: 1rem;\r\n}\r\n\r\n.flex {\r\n  display: flex;\r\n}\r\n\r\n.grid {\r\n  display: grid;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n.w-full {\r\n  width: 100%;\r\n}\r\n\r\n.flex-row {\r\n  flex-direction: row;\r\n}\r\n\r\n.flex-col {\r\n  flex-direction: column;\r\n}\r\n\r\n.items-start {\r\n  align-items: flex-start;\r\n}\r\n\r\n.items-center {\r\n  align-items: center;\r\n}\r\n\r\n.items-stretch {\r\n  align-items: stretch;\r\n}\r\n\r\n.justify-start {\r\n  justify-content: flex-start;\r\n}\r\n\r\n.justify-end {\r\n  justify-content: flex-end;\r\n}\r\n\r\n.justify-between {\r\n  justify-content: space-between;\r\n}\r\n\r\n.gap-2 {\r\n  gap: 0.5rem;\r\n}\r\n\r\n.gap-4 {\r\n  gap: 1rem;\r\n}\r\n\r\n.gap-8 {\r\n  gap: 2rem;\r\n}\r\n\r\n.rounded-full {\r\n  border-radius: 9999px;\r\n}\r\n\r\n.rounded-md {\r\n  border-radius: 0.375rem;\r\n}\r\n\r\n.border-b-2 {\r\n  border-bottom-width: 2px;\r\n}\r\n\r\n.border-t-2 {\r\n  border-top-width: 2px;\r\n}\r\n\r\n.border-solid {\r\n  border-style: solid;\r\n}\r\n\r\n.border-blue-700 {\r\n  --tw-border-opacity: 1;\r\n  border-color: rgb(29 78 216 / var(--tw-border-opacity));\r\n}\r\n\r\n.border-white {\r\n  --tw-border-opacity: 1;\r\n  border-color: rgb(255 255 255 / var(--tw-border-opacity));\r\n}\r\n\r\n.bg-blue-600 {\r\n  --tw-bg-opacity: 1;\r\n  background-color: rgb(37 99 235 / var(--tw-bg-opacity));\r\n}\r\n\r\n.bg-blue-700 {\r\n  --tw-bg-opacity: 1;\r\n  background-color: rgb(29 78 216 / var(--tw-bg-opacity));\r\n}\r\n\r\n.bg-red-500 {\r\n  --tw-bg-opacity: 1;\r\n  background-color: rgb(239 68 68 / var(--tw-bg-opacity));\r\n}\r\n\r\n.bg-slate-300 {\r\n  --tw-bg-opacity: 1;\r\n  background-color: rgb(203 213 225 / var(--tw-bg-opacity));\r\n}\r\n\r\n.bg-slate-500 {\r\n  --tw-bg-opacity: 1;\r\n  background-color: rgb(100 116 139 / var(--tw-bg-opacity));\r\n}\r\n\r\n.bg-transparent {\r\n  background-color: transparent;\r\n}\r\n\r\n.bg-yellow-500 {\r\n  --tw-bg-opacity: 1;\r\n  background-color: rgb(234 179 8 / var(--tw-bg-opacity));\r\n}\r\n\r\n.p-4 {\r\n  padding: 1rem;\r\n}\r\n\r\n.px-4 {\r\n  padding-left: 1rem;\r\n  padding-right: 1rem;\r\n}\r\n\r\n.px-8 {\r\n  padding-left: 2rem;\r\n  padding-right: 2rem;\r\n}\r\n\r\n.py-2 {\r\n  padding-top: 0.5rem;\r\n  padding-bottom: 0.5rem;\r\n}\r\n\r\n.py-4 {\r\n  padding-top: 1rem;\r\n  padding-bottom: 1rem;\r\n}\r\n\r\n.py-8 {\r\n  padding-top: 2rem;\r\n  padding-bottom: 2rem;\r\n}\r\n\r\n.pl-4 {\r\n  padding-left: 1rem;\r\n}\r\n\r\n.pl-8 {\r\n  padding-left: 2rem;\r\n}\r\n\r\n.pt-16 {\r\n  padding-top: 4rem;\r\n}\r\n\r\n.text-center {\r\n  text-align: center;\r\n}\r\n\r\n.text-2xl {\r\n  font-size: 1.5rem;\r\n  line-height: 2rem;\r\n}\r\n\r\n.text-3xl {\r\n  font-size: 1.875rem;\r\n  line-height: 2.25rem;\r\n}\r\n\r\n.text-sm {\r\n  font-size: 0.875rem;\r\n  line-height: 1.25rem;\r\n}\r\n\r\n.text-xl {\r\n  font-size: 1.25rem;\r\n  line-height: 1.75rem;\r\n}\r\n\r\n.font-bold {\r\n  font-weight: 700;\r\n}\r\n\r\n.font-medium {\r\n  font-weight: 500;\r\n}\r\n\r\n.text-blue-700 {\r\n  --tw-text-opacity: 1;\r\n  color: rgb(29 78 216 / var(--tw-text-opacity));\r\n}\r\n\r\n.text-slate-200 {\r\n  --tw-text-opacity: 1;\r\n  color: rgb(226 232 240 / var(--tw-text-opacity));\r\n}\r\n\r\n.text-slate-500 {\r\n  --tw-text-opacity: 1;\r\n  color: rgb(100 116 139 / var(--tw-text-opacity));\r\n}\r\n\r\n.text-white {\r\n  --tw-text-opacity: 1;\r\n  color: rgb(255 255 255 / var(--tw-text-opacity));\r\n}\r\n\r\n.filter {\r\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\r\n}\r\n\r\n.transition-all {\r\n  transition-property: all;\r\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\r\n  transition-duration: 150ms;\r\n}\r\n\r\nbody {\r\n  background-image: url('../images/todo-bg.jpg');\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  background-clip: border-box;\r\n  height: 100vh;\r\n  /* padding-top: 5.49rem;\r\n    padding-left: 25vw; */\r\n}\r\n\r\naside {\r\n  width: 20vw;\r\n  position: fixed;\r\n  top: 7.35rem;\r\n  right: 1rem;\r\n  left: 2.5rem;\r\n  bottom: 1rem;\r\n  overflow: scroll;\r\n}\r\n\r\n#content-container {\r\n  position: fixed;\r\n  top: 7.35rem;\r\n  left: 25vw;\r\n  right: 2rem;\r\n  height: 79.6vh;\r\n}\r\n\r\nfooter{\r\n  bottom: 1rem;\r\n}\r\n\r\nfooter,#projects-header {\r\n  position: fixed;\r\n  left: 2.5rem;\r\n  width: 20vw;\r\n  z-index: 100;\r\n}\r\n\r\nform{\r\n  width: 30vw;\r\n  left: calc(25vw - 1rem);\r\n  top: 7.35rem;\r\n}\r\n\r\nheader {\r\n  position: fixed;\r\n  top: 1.5rem;\r\n  right: 1rem;\r\n  left: 1.5rem;\r\n}\r\n\r\n#new-project-btn{\r\n  padding-block: .5rem;\r\n  padding-inline: .8rem;\r\n  border-radius: 30px;\r\n}\r\n\r\n#profile {\r\n  position: absolute;\r\n  right: 0;\r\n}\r\n\r\n#profile-picture {\r\n  width: 45px;\r\n}\r\n\r\n#projects-header{\r\n  top: 7.35rem;\r\n}\r\n\r\n#task-container{\r\n  overflow: scroll;\r\n}\r\n\r\n#task-form {\r\n  left: calc(40vw);\r\n  top: 16.8rem;\r\n}\r\n\r\n.hover\\:bg-blue-600:hover {\r\n  --tw-bg-opacity: 1;\r\n  background-color: rgb(37 99 235 / var(--tw-bg-opacity));\r\n}\r\n\r\n.hover\\:bg-blue-700:hover {\r\n  --tw-bg-opacity: 1;\r\n  background-color: rgb(29 78 216 / var(--tw-bg-opacity));\r\n}\r\n\r\n.hover\\:bg-red-700:hover {\r\n  --tw-bg-opacity: 1;\r\n  background-color: rgb(185 28 28 / var(--tw-bg-opacity));\r\n}\r\n\r\n.hover\\:bg-slate-100:hover {\r\n  --tw-bg-opacity: 1;\r\n  background-color: rgb(241 245 249 / var(--tw-bg-opacity));\r\n}\r\n\r\n.hover\\:bg-yellow-700:hover {\r\n  --tw-bg-opacity: 1;\r\n  background-color: rgb(161 98 7 / var(--tw-bg-opacity));\r\n}\r\n\r\n.focus\\:outline-none:focus {\r\n  outline: 2px solid transparent;\r\n  outline-offset: 2px;\r\n}\r\n"],"sourceRoot":""}]);
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
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/scripts/project.js");


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
    const projCont = document.createElement('div')
      projCont.id = `${projectName.toLowerCase().replaceAll(' ', '-')}-container`
      projCont.className = 'w-full bg-blue-600 border-t-2 border-solid border-white hover:bg-blue-700 transition-all'

      //Name
      const projName = document.createElement('h1')
        projName.id = `${projectName.toLowerCase().replaceAll(' ', '-')}`
        projName.className = 'py-2 text-slate-200 text-xl px-4'
        projName.textContent = projectName
      
      //Append name
      projCont.appendChild(projName)

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
    const projectTitle = this.createHeading(project.getName())
    projectTitle.classList.add('font-bold')
    container.appendChild(projectTitle)

    return container
  }
  //Side bar
  createSidebar () {
     const sidebar = document.createElement('aside')
     sidebar.className = 'p-4 bg-blue-700 rounded-md pt-16 flex flex-col gap-2'

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
      data.push(element.value)
    })
    return data
  } 
  hideForm() {
    document.querySelector('form').classList.add('hidden')
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


class Project extends _task_manager__WEBPACK_IMPORTED_MODULE_0__["default"] {

    //Project open
    #projectOpen = false
    #complete = false
    #description = ''
    #name =''
    
    constructor(){
        super()
    }
    //close project
    close(){
        this.#projectOpen = false
    }
    //return value of description
    getDescription(){
        return this.#description
    }
    //get name
    getName(){
        return this.#name
    }
    //is complete
    isComplete(){
        return this.#complete
    }
    //Check if project is open
    isOpen(){
        return this.#projectOpen
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
    //Open project
    open(){
        this.#projectOpen = true
    }
    //initialize descripion
    setDescription(description){
        this.#description = description
    }

    // Set name
    setName(name){
        this.#name = name
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
    #projects = []
    #completedProjects = []
    constructor () {

    }
    //Add to list
   
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
    edit(title,description,dueDate){
        this.title = title
        this.#description = description
        this.#dueDate = dueDate
        
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







const project = new _project_js__WEBPACK_IMPORTED_MODULE_2__["default"]()
const domManager = new _dom_manager_js__WEBPACK_IMPORTED_MODULE_1__["default"]()
const projectManager = new _project_manager__WEBPACK_IMPORTED_MODULE_3__["default"]()

function displayProjectCredentials(project){
    const projectHeader = domManager.createProjectHeader(project)
        container.appendChild(projectHeader)


        //Project description and new task btn
        const descNBtnContainer = domManager.createContainer()
        descNBtnContainer.className = 'flex flex-row justify-between items-center w-full'
        //DESCRIPTION
        const projectDescription = domManager.createProjectDescription(project.getDescription())
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
    const defaultProject = new _project_js__WEBPACK_IMPORTED_MODULE_2__["default"]()
        defaultProject.setDescription('Today\'s Activities')
        defaultProject.setName('Today')
        projectManager.addToProjectList(defaultProject)

        //Default Project Container
        const defaultProjectContainer = domManager.createProjectContainer(defaultProject.getName())
        sidebar.appendChild(defaultProjectContainer)

    //Display default project
        displayProjectCredentials(defaultProject)
        displayTasksContainer()
        
       


    
//Create new Project

addBtn.addEventListener('click', (e) =>{
    //project manager create new project
    domManager.displayForm('#project-form')
    //Add event listener to form
    document.querySelector('form#project-form').addEventListener('submit', (event) =>{
        event.preventDefault()
        //Get data
        const data = domManager.getFormData('#project-form')
        //Create new Project
        project.setName(data[0])
        project.setDescription(data[1])
        
        //Project container
        const newProjecContainer = domManager.createProjectContainer(project.getName())
            sidebar.appendChild(newProjecContainer)

        //Add to project lists
            projectManager.addToProjectList(project)
        //hide project form on submit
            domManager.hideForm()

            
    })
})
//______________________________________________________________________________________________________________________
// CREAT New tasks TASKS
/**
 * Display task details form
 * Get tasks details from the form
 * Create an instance on Task Object
 * Add task to project task list
 * close task form on submit
*/
//Display form
document.querySelector('#new-task-btn').addEventListener('click', () =>{
    domManager.displayForm('#task-form')
})
document.querySelector('form#task-form').addEventListener('submit', (e) =>{
    e.preventDefault()
    //get data
    const data = domManager.getFormData('#task-form')
    
    // Create new task
    const task = new _task__WEBPACK_IMPORTED_MODULE_4__["default"](data[0])
    task.setDescription([data[1]])
    task.setDueDate(data[2])

    //Add  task to project task list
    project.addTask(task)
    
    //closeForm
    domManager.hideForm()   
    console.log(project.getTasks())
})
    
    
/**
 * Universally hide forms 
 */
document.querySelectorAll('button[type=button]').forEach(
    button =>{
        button.addEventListener('click', () =>{
            domManager.hideForm()
        })

    }
)

    
    


    
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFZLFdBQVcsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sT0FBTyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxPQUFPLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLE1BQU0sTUFBTSxpQkFBaUIsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sT0FBTyxZQUFZLFdBQVcsVUFBVSxNQUFNLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxPQUFPLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sTUFBTSxLQUFLLFVBQVUsT0FBTyxRQUFRLE1BQU0sWUFBWSxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sTUFBTSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sYUFBYSxNQUFNLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFh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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDdkNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDcERlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FD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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2Q0FBSTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1pc3QtLW9uZS8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90b2RvLWlzdC0tb25lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWlzdC0tb25lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWlzdC0tb25lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1pc3QtLW9uZS8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzcz9lNDViIiwid2VicGFjazovL3RvZG8taXN0LS1vbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1pc3QtLW9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1pc3QtLW9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWlzdC0tb25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8taXN0LS1vbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWlzdC0tb25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1pc3QtLW9uZS8uL3NyYy9zY3JpcHRzL2RvbV9tYW5hZ2VyLmpzIiwid2VicGFjazovL3RvZG8taXN0LS1vbmUvLi9zcmMvc2NyaXB0cy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8taXN0LS1vbmUvLi9zcmMvc2NyaXB0cy9wcm9qZWN0X21hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1pc3QtLW9uZS8uL3NyYy9zY3JpcHRzL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1pc3QtLW9uZS8uL3NyYy9zY3JpcHRzL3Rhc2tfbWFuYWdlci5qcyIsIndlYnBhY2s6Ly90b2RvLWlzdC0tb25lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8taXN0LS1vbmUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1pc3QtLW9uZS93ZWJwYWNrL3J1bnRpbWUvY3JlYXRlIGZha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWlzdC0tb25lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWlzdC0tb25lL3dlYnBhY2svcnVudGltZS9lbnN1cmUgY2h1bmsiLCJ3ZWJwYWNrOi8vdG9kby1pc3QtLW9uZS93ZWJwYWNrL3J1bnRpbWUvZ2V0IGphdmFzY3JpcHQgY2h1bmsgZmlsZW5hbWUiLCJ3ZWJwYWNrOi8vdG9kby1pc3QtLW9uZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8taXN0LS1vbmUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWlzdC0tb25lL3dlYnBhY2svcnVudGltZS9sb2FkIHNjcmlwdCIsIndlYnBhY2s6Ly90b2RvLWlzdC0tb25lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1pc3QtLW9uZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWlzdC0tb25lL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8taXN0LS1vbmUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8taXN0LS1vbmUvLi9zcmMvc2NyaXB0cy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL3RvZG8tYmcuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLypcXHJcXG4hIHRhaWx3aW5kY3NzIHYzLjIuNyB8IE1JVCBMaWNlbnNlIHwgaHR0cHM6Ly90YWlsd2luZGNzcy5jb21cXHJcXG4qL1xcclxcblxcclxcbi8qXFxyXFxuMS4gUHJldmVudCBwYWRkaW5nIGFuZCBib3JkZXIgZnJvbSBhZmZlY3RpbmcgZWxlbWVudCB3aWR0aC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvNClcXHJcXG4yLiBBbGxvdyBhZGRpbmcgYSBib3JkZXIgdG8gYW4gZWxlbWVudCBieSBqdXN0IGFkZGluZyBhIGJvcmRlci13aWR0aC4gKGh0dHBzOi8vZ2l0aHViLmNvbS90YWlsd2luZGNzcy90YWlsd2luZGNzcy9wdWxsLzExNilcXHJcXG4qL1xcclxcblxcclxcbiosXFxyXFxuOjpiZWZvcmUsXFxyXFxuOjphZnRlciB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgLyogMSAqL1xcclxcbiAgYm9yZGVyLXdpZHRoOiAwO1xcclxcbiAgLyogMiAqL1xcclxcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG4gIC8qIDIgKi9cXHJcXG4gIGJvcmRlci1jb2xvcjogI2U1ZTdlYjtcXHJcXG4gIC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuOjpiZWZvcmUsXFxyXFxuOjphZnRlciB7XFxyXFxuICAtLXR3LWNvbnRlbnQ6ICcnO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbjEuIFVzZSBhIGNvbnNpc3RlbnQgc2Vuc2libGUgbGluZS1oZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcclxcbjIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcclxcbjMuIFVzZSBhIG1vcmUgcmVhZGFibGUgdGFiIHNpemUuXFxyXFxuNC4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBgc2Fuc2AgZm9udC1mYW1pbHkgYnkgZGVmYXVsdC5cXHJcXG41LiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIGBzYW5zYCBmb250LWZlYXR1cmUtc2V0dGluZ3MgYnkgZGVmYXVsdC5cXHJcXG4qL1xcclxcblxcclxcbmh0bWwge1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXHJcXG4gIC8qIDEgKi9cXHJcXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXHJcXG4gIC8qIDIgKi9cXHJcXG4gIC1tb3otdGFiLXNpemU6IDQ7XFxyXFxuICAvKiAzICovXFxyXFxuICAtby10YWItc2l6ZTogNDtcXHJcXG4gICAgIHRhYi1zaXplOiA0O1xcclxcbiAgLyogMyAqL1xcclxcbiAgZm9udC1mYW1pbHk6IHVpLXNhbnMtc2VyaWYsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEFyaWFsLCBcXFwiTm90byBTYW5zXFxcIiwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCIsIFxcXCJOb3RvIENvbG9yIEVtb2ppXFxcIjtcXHJcXG4gIC8qIDQgKi9cXHJcXG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogbm9ybWFsO1xcclxcbiAgLyogNSAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbjEuIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cXHJcXG4yLiBJbmhlcml0IGxpbmUtaGVpZ2h0IGZyb20gYGh0bWxgIHNvIHVzZXJzIGNhbiBzZXQgdGhlbSBhcyBhIGNsYXNzIGRpcmVjdGx5IG9uIHRoZSBgaHRtbGAgZWxlbWVudC5cXHJcXG4qL1xcclxcblxcclxcbmJvZHkge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgLyogMSAqL1xcclxcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxyXFxuICAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuMS4gQWRkIHRoZSBjb3JyZWN0IGhlaWdodCBpbiBGaXJlZm94LlxcclxcbjIuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIG9mIGJvcmRlciBjb2xvciBpbiBGaXJlZm94LiAoaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTkwNjU1KVxcclxcbjMuIEVuc3VyZSBob3Jpem9udGFsIHJ1bGVzIGFyZSB2aXNpYmxlIGJ5IGRlZmF1bHQuXFxyXFxuKi9cXHJcXG5cXHJcXG5ociB7XFxyXFxuICBoZWlnaHQ6IDA7XFxyXFxuICAvKiAxICovXFxyXFxuICBjb2xvcjogaW5oZXJpdDtcXHJcXG4gIC8qIDIgKi9cXHJcXG4gIGJvcmRlci10b3Atd2lkdGg6IDFweDtcXHJcXG4gIC8qIDMgKi9cXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5BZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXHJcXG4qL1xcclxcblxcclxcbmFiYnI6d2hlcmUoW3RpdGxlXSkge1xcclxcbiAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XFxyXFxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5SZW1vdmUgdGhlIGRlZmF1bHQgZm9udCBzaXplIGFuZCB3ZWlnaHQgZm9yIGhlYWRpbmdzLlxcclxcbiovXFxyXFxuXFxyXFxuaDEsXFxyXFxuaDIsXFxyXFxuaDMsXFxyXFxuaDQsXFxyXFxuaDUsXFxyXFxuaDYge1xcclxcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcclxcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuUmVzZXQgbGlua3MgdG8gb3B0aW1pemUgZm9yIG9wdC1pbiBzdHlsaW5nIGluc3RlYWQgb2Ygb3B0LW91dC5cXHJcXG4qL1xcclxcblxcclxcbmEge1xcclxcbiAgY29sb3I6IGluaGVyaXQ7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIEVkZ2UgYW5kIFNhZmFyaS5cXHJcXG4qL1xcclxcblxcclxcbmIsXFxyXFxuc3Ryb25nIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuMS4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBgbW9ub2AgZm9udCBmYW1pbHkgYnkgZGVmYXVsdC5cXHJcXG4yLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuKi9cXHJcXG5cXHJcXG5jb2RlLFxcclxcbmtiZCxcXHJcXG5zYW1wLFxcclxcbnByZSB7XFxyXFxuICBmb250LWZhbWlseTogdWktbW9ub3NwYWNlLCBTRk1vbm8tUmVndWxhciwgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsIFxcXCJMaWJlcmF0aW9uIE1vbm9cXFwiLCBcXFwiQ291cmllciBOZXdcXFwiLCBtb25vc3BhY2U7XFxyXFxuICAvKiAxICovXFxyXFxuICBmb250LXNpemU6IDFlbTtcXHJcXG4gIC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5BZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXHJcXG4qL1xcclxcblxcclxcbnNtYWxsIHtcXHJcXG4gIGZvbnQtc2l6ZTogODAlO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcblByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuKi9cXHJcXG5cXHJcXG5zdWIsXFxyXFxuc3VwIHtcXHJcXG4gIGZvbnQtc2l6ZTogNzUlO1xcclxcbiAgbGluZS1oZWlnaHQ6IDA7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxyXFxufVxcclxcblxcclxcbnN1YiB7XFxyXFxuICBib3R0b206IC0wLjI1ZW07XFxyXFxufVxcclxcblxcclxcbnN1cCB7XFxyXFxuICB0b3A6IC0wLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4xLiBSZW1vdmUgdGV4dCBpbmRlbnRhdGlvbiBmcm9tIHRhYmxlIGNvbnRlbnRzIGluIENocm9tZSBhbmQgU2FmYXJpLiAoaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTk5MDg4LCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MjAxMjk3KVxcclxcbjIuIENvcnJlY3QgdGFibGUgYm9yZGVyIGNvbG9yIGluaGVyaXRhbmNlIGluIGFsbCBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTkzNTcyOSwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE5NTAxNilcXHJcXG4zLiBSZW1vdmUgZ2FwcyBiZXR3ZWVuIHRhYmxlIGJvcmRlcnMgYnkgZGVmYXVsdC5cXHJcXG4qL1xcclxcblxcclxcbnRhYmxlIHtcXHJcXG4gIHRleHQtaW5kZW50OiAwO1xcclxcbiAgLyogMSAqL1xcclxcbiAgYm9yZGVyLWNvbG9yOiBpbmhlcml0O1xcclxcbiAgLyogMiAqL1xcclxcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXHJcXG4gIC8qIDMgKi9cXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4xLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXHJcXG4yLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxyXFxuMy4gUmVtb3ZlIGRlZmF1bHQgcGFkZGluZyBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuKi9cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxuaW5wdXQsXFxyXFxub3B0Z3JvdXAsXFxyXFxuc2VsZWN0LFxcclxcbnRleHRhcmVhIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcbiAgLyogMSAqL1xcclxcbiAgZm9udC1zaXplOiAxMDAlO1xcclxcbiAgLyogMSAqL1xcclxcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XFxyXFxuICAvKiAxICovXFxyXFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcXHJcXG4gIC8qIDEgKi9cXHJcXG4gIGNvbG9yOiBpbmhlcml0O1xcclxcbiAgLyogMSAqL1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgLyogMiAqL1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIC8qIDMgKi9cXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5SZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UgYW5kIEZpcmVmb3guXFxyXFxuKi9cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxuc2VsZWN0IHtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbjEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxyXFxuMi4gUmVtb3ZlIGRlZmF1bHQgYnV0dG9uIHN0eWxlcy5cXHJcXG4qL1xcclxcblxcclxcbmJ1dHRvbixcXHJcXG5bdHlwZT0nYnV0dG9uJ10sXFxyXFxuW3R5cGU9J3Jlc2V0J10sXFxyXFxuW3R5cGU9J3N1Ym1pdCddIHtcXHJcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcclxcbiAgLyogMSAqL1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAvKiAyICovXFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xcclxcbiAgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcblVzZSB0aGUgbW9kZXJuIEZpcmVmb3ggZm9jdXMgc3R5bGUgZm9yIGFsbCBmb2N1c2FibGUgZWxlbWVudHMuXFxyXFxuKi9cXHJcXG5cXHJcXG46LW1vei1mb2N1c3Jpbmcge1xcclxcbiAgb3V0bGluZTogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5SZW1vdmUgdGhlIGFkZGl0aW9uYWwgYDppbnZhbGlkYCBzdHlsZXMgaW4gRmlyZWZveC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL2dlY2tvLWRldi9ibG9iLzJmOWVhY2Q5ZDNkOTk1YzkzN2I0MjUxYTU1NTdkOTVkNDk0YzliZTEvbGF5b3V0L3N0eWxlL3Jlcy9mb3Jtcy5jc3MjTDcyOC1MNzM3KVxcclxcbiovXFxyXFxuXFxyXFxuOi1tb3otdWktaW52YWxpZCB7XFxyXFxuICBib3gtc2hhZG93OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbkFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lIGFuZCBGaXJlZm94LlxcclxcbiovXFxyXFxuXFxyXFxucHJvZ3Jlc3Mge1xcclxcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbkNvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIFNhZmFyaS5cXHJcXG4qL1xcclxcblxcclxcbjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXHJcXG46Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbjEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcclxcbjIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcclxcbiovXFxyXFxuXFxyXFxuW3R5cGU9J3NlYXJjaCddIHtcXHJcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xcclxcbiAgLyogMSAqL1xcclxcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7XFxyXFxuICAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcclxcbiovXFxyXFxuXFxyXFxuOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXHJcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4xLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcclxcbjIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXHJcXG4qL1xcclxcblxcclxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcclxcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxyXFxuICAvKiAxICovXFxyXFxuICBmb250OiBpbmhlcml0O1xcclxcbiAgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbkFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIENocm9tZSBhbmQgU2FmYXJpLlxcclxcbiovXFxyXFxuXFxyXFxuc3VtbWFyeSB7XFxyXFxuICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuUmVtb3ZlcyB0aGUgZGVmYXVsdCBzcGFjaW5nIGFuZCBib3JkZXIgZm9yIGFwcHJvcHJpYXRlIGVsZW1lbnRzLlxcclxcbiovXFxyXFxuXFxyXFxuYmxvY2txdW90ZSxcXHJcXG5kbCxcXHJcXG5kZCxcXHJcXG5oMSxcXHJcXG5oMixcXHJcXG5oMyxcXHJcXG5oNCxcXHJcXG5oNSxcXHJcXG5oNixcXHJcXG5ocixcXHJcXG5maWd1cmUsXFxyXFxucCxcXHJcXG5wcmUge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5maWVsZHNldCB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5sZWdlbmQge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxub2wsXFxyXFxudWwsXFxyXFxubWVudSB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5QcmV2ZW50IHJlc2l6aW5nIHRleHRhcmVhcyBob3Jpem9udGFsbHkgYnkgZGVmYXVsdC5cXHJcXG4qL1xcclxcblxcclxcbnRleHRhcmVhIHtcXHJcXG4gIHJlc2l6ZTogdmVydGljYWw7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuMS4gUmVzZXQgdGhlIGRlZmF1bHQgcGxhY2Vob2xkZXIgb3BhY2l0eSBpbiBGaXJlZm94LiAoaHR0cHM6Ly9naXRodWIuY29tL3RhaWx3aW5kbGFicy90YWlsd2luZGNzcy9pc3N1ZXMvMzMwMClcXHJcXG4yLiBTZXQgdGhlIGRlZmF1bHQgcGxhY2Vob2xkZXIgY29sb3IgdG8gdGhlIHVzZXIncyBjb25maWd1cmVkIGdyYXkgNDAwIGNvbG9yLlxcclxcbiovXFxyXFxuXFxyXFxuaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIsIHRleHRhcmVhOjotbW96LXBsYWNlaG9sZGVyIHtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxuICAvKiAxICovXFxyXFxuICBjb2xvcjogIzljYTNhZjtcXHJcXG4gIC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQ6OnBsYWNlaG9sZGVyLFxcclxcbnRleHRhcmVhOjpwbGFjZWhvbGRlciB7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbiAgLyogMSAqL1xcclxcbiAgY29sb3I6ICM5Y2EzYWY7XFxyXFxuICAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuU2V0IHRoZSBkZWZhdWx0IGN1cnNvciBmb3IgYnV0dG9ucy5cXHJcXG4qL1xcclxcblxcclxcbmJ1dHRvbixcXHJcXG5bcm9sZT1cXFwiYnV0dG9uXFxcIl0ge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbk1ha2Ugc3VyZSBkaXNhYmxlZCBidXR0b25zIGRvbid0IGdldCB0aGUgcG9pbnRlciBjdXJzb3IuXFxyXFxuKi9cXHJcXG5cXHJcXG46ZGlzYWJsZWQge1xcclxcbiAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbjEuIE1ha2UgcmVwbGFjZWQgZWxlbWVudHMgYGRpc3BsYXk6IGJsb2NrYCBieSBkZWZhdWx0LiAoaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy8xNClcXHJcXG4yLiBBZGQgYHZlcnRpY2FsLWFsaWduOiBtaWRkbGVgIHRvIGFsaWduIHJlcGxhY2VkIGVsZW1lbnRzIG1vcmUgc2Vuc2libHkgYnkgZGVmYXVsdC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9qZW5zaW1tb25zL2Nzc3JlbWVkeS9pc3N1ZXMvMTQjaXNzdWVjb21tZW50LTYzNDkzNDIxMClcXHJcXG4gICBUaGlzIGNhbiB0cmlnZ2VyIGEgcG9vcmx5IGNvbnNpZGVyZWQgbGludCBlcnJvciBpbiBzb21lIHRvb2xzIGJ1dCBpcyBpbmNsdWRlZCBieSBkZXNpZ24uXFxyXFxuKi9cXHJcXG5cXHJcXG5pbWcsXFxyXFxuc3ZnLFxcclxcbnZpZGVvLFxcclxcbmNhbnZhcyxcXHJcXG5hdWRpbyxcXHJcXG5pZnJhbWUsXFxyXFxuZW1iZWQsXFxyXFxub2JqZWN0IHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgLyogMSAqL1xcclxcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG4gIC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5Db25zdHJhaW4gaW1hZ2VzIGFuZCB2aWRlb3MgdG8gdGhlIHBhcmVudCB3aWR0aCBhbmQgcHJlc2VydmUgdGhlaXIgaW50cmluc2ljIGFzcGVjdCByYXRpby4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvMTQpXFxyXFxuKi9cXHJcXG5cXHJcXG5pbWcsXFxyXFxudmlkZW8ge1xcclxcbiAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNYWtlIGVsZW1lbnRzIHdpdGggdGhlIEhUTUwgaGlkZGVuIGF0dHJpYnV0ZSBzdGF5IGhpZGRlbiBieSBkZWZhdWx0ICovXFxyXFxuXFxyXFxuW2hpZGRlbl0ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuKiwgOjpiZWZvcmUsIDo6YWZ0ZXIge1xcclxcbiAgLS10dy1ib3JkZXItc3BhY2luZy14OiAwO1xcclxcbiAgLS10dy1ib3JkZXItc3BhY2luZy15OiAwO1xcclxcbiAgLS10dy10cmFuc2xhdGUteDogMDtcXHJcXG4gIC0tdHctdHJhbnNsYXRlLXk6IDA7XFxyXFxuICAtLXR3LXJvdGF0ZTogMDtcXHJcXG4gIC0tdHctc2tldy14OiAwO1xcclxcbiAgLS10dy1za2V3LXk6IDA7XFxyXFxuICAtLXR3LXNjYWxlLXg6IDE7XFxyXFxuICAtLXR3LXNjYWxlLXk6IDE7XFxyXFxuICAtLXR3LXBhbi14OiAgO1xcclxcbiAgLS10dy1wYW4teTogIDtcXHJcXG4gIC0tdHctcGluY2gtem9vbTogIDtcXHJcXG4gIC0tdHctc2Nyb2xsLXNuYXAtc3RyaWN0bmVzczogcHJveGltaXR5O1xcclxcbiAgLS10dy1vcmRpbmFsOiAgO1xcclxcbiAgLS10dy1zbGFzaGVkLXplcm86ICA7XFxyXFxuICAtLXR3LW51bWVyaWMtZmlndXJlOiAgO1xcclxcbiAgLS10dy1udW1lcmljLXNwYWNpbmc6ICA7XFxyXFxuICAtLXR3LW51bWVyaWMtZnJhY3Rpb246ICA7XFxyXFxuICAtLXR3LXJpbmctaW5zZXQ6ICA7XFxyXFxuICAtLXR3LXJpbmctb2Zmc2V0LXdpZHRoOiAwcHg7XFxyXFxuICAtLXR3LXJpbmctb2Zmc2V0LWNvbG9yOiAjZmZmO1xcclxcbiAgLS10dy1yaW5nLWNvbG9yOiByZ2IoNTkgMTMwIDI0NiAvIDAuNSk7XFxyXFxuICAtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdzogMCAwICMwMDAwO1xcclxcbiAgLS10dy1yaW5nLXNoYWRvdzogMCAwICMwMDAwO1xcclxcbiAgLS10dy1zaGFkb3c6IDAgMCAjMDAwMDtcXHJcXG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IDAgMCAjMDAwMDtcXHJcXG4gIC0tdHctYmx1cjogIDtcXHJcXG4gIC0tdHctYnJpZ2h0bmVzczogIDtcXHJcXG4gIC0tdHctY29udHJhc3Q6ICA7XFxyXFxuICAtLXR3LWdyYXlzY2FsZTogIDtcXHJcXG4gIC0tdHctaHVlLXJvdGF0ZTogIDtcXHJcXG4gIC0tdHctaW52ZXJ0OiAgO1xcclxcbiAgLS10dy1zYXR1cmF0ZTogIDtcXHJcXG4gIC0tdHctc2VwaWE6ICA7XFxyXFxuICAtLXR3LWRyb3Atc2hhZG93OiAgO1xcclxcbiAgLS10dy1iYWNrZHJvcC1ibHVyOiAgO1xcclxcbiAgLS10dy1iYWNrZHJvcC1icmlnaHRuZXNzOiAgO1xcclxcbiAgLS10dy1iYWNrZHJvcC1jb250cmFzdDogIDtcXHJcXG4gIC0tdHctYmFja2Ryb3AtZ3JheXNjYWxlOiAgO1xcclxcbiAgLS10dy1iYWNrZHJvcC1odWUtcm90YXRlOiAgO1xcclxcbiAgLS10dy1iYWNrZHJvcC1pbnZlcnQ6ICA7XFxyXFxuICAtLXR3LWJhY2tkcm9wLW9wYWNpdHk6ICA7XFxyXFxuICAtLXR3LWJhY2tkcm9wLXNhdHVyYXRlOiAgO1xcclxcbiAgLS10dy1iYWNrZHJvcC1zZXBpYTogIDtcXHJcXG59XFxyXFxuXFxyXFxuOjpiYWNrZHJvcCB7XFxyXFxuICAtLXR3LWJvcmRlci1zcGFjaW5nLXg6IDA7XFxyXFxuICAtLXR3LWJvcmRlci1zcGFjaW5nLXk6IDA7XFxyXFxuICAtLXR3LXRyYW5zbGF0ZS14OiAwO1xcclxcbiAgLS10dy10cmFuc2xhdGUteTogMDtcXHJcXG4gIC0tdHctcm90YXRlOiAwO1xcclxcbiAgLS10dy1za2V3LXg6IDA7XFxyXFxuICAtLXR3LXNrZXcteTogMDtcXHJcXG4gIC0tdHctc2NhbGUteDogMTtcXHJcXG4gIC0tdHctc2NhbGUteTogMTtcXHJcXG4gIC0tdHctcGFuLXg6ICA7XFxyXFxuICAtLXR3LXBhbi15OiAgO1xcclxcbiAgLS10dy1waW5jaC16b29tOiAgO1xcclxcbiAgLS10dy1zY3JvbGwtc25hcC1zdHJpY3RuZXNzOiBwcm94aW1pdHk7XFxyXFxuICAtLXR3LW9yZGluYWw6ICA7XFxyXFxuICAtLXR3LXNsYXNoZWQtemVybzogIDtcXHJcXG4gIC0tdHctbnVtZXJpYy1maWd1cmU6ICA7XFxyXFxuICAtLXR3LW51bWVyaWMtc3BhY2luZzogIDtcXHJcXG4gIC0tdHctbnVtZXJpYy1mcmFjdGlvbjogIDtcXHJcXG4gIC0tdHctcmluZy1pbnNldDogIDtcXHJcXG4gIC0tdHctcmluZy1vZmZzZXQtd2lkdGg6IDBweDtcXHJcXG4gIC0tdHctcmluZy1vZmZzZXQtY29sb3I6ICNmZmY7XFxyXFxuICAtLXR3LXJpbmctY29sb3I6IHJnYig1OSAxMzAgMjQ2IC8gMC41KTtcXHJcXG4gIC0tdHctcmluZy1vZmZzZXQtc2hhZG93OiAwIDAgIzAwMDA7XFxyXFxuICAtLXR3LXJpbmctc2hhZG93OiAwIDAgIzAwMDA7XFxyXFxuICAtLXR3LXNoYWRvdzogMCAwICMwMDAwO1xcclxcbiAgLS10dy1zaGFkb3ctY29sb3JlZDogMCAwICMwMDAwO1xcclxcbiAgLS10dy1ibHVyOiAgO1xcclxcbiAgLS10dy1icmlnaHRuZXNzOiAgO1xcclxcbiAgLS10dy1jb250cmFzdDogIDtcXHJcXG4gIC0tdHctZ3JheXNjYWxlOiAgO1xcclxcbiAgLS10dy1odWUtcm90YXRlOiAgO1xcclxcbiAgLS10dy1pbnZlcnQ6ICA7XFxyXFxuICAtLXR3LXNhdHVyYXRlOiAgO1xcclxcbiAgLS10dy1zZXBpYTogIDtcXHJcXG4gIC0tdHctZHJvcC1zaGFkb3c6ICA7XFxyXFxuICAtLXR3LWJhY2tkcm9wLWJsdXI6ICA7XFxyXFxuICAtLXR3LWJhY2tkcm9wLWJyaWdodG5lc3M6ICA7XFxyXFxuICAtLXR3LWJhY2tkcm9wLWNvbnRyYXN0OiAgO1xcclxcbiAgLS10dy1iYWNrZHJvcC1ncmF5c2NhbGU6ICA7XFxyXFxuICAtLXR3LWJhY2tkcm9wLWh1ZS1yb3RhdGU6ICA7XFxyXFxuICAtLXR3LWJhY2tkcm9wLWludmVydDogIDtcXHJcXG4gIC0tdHctYmFja2Ryb3Atb3BhY2l0eTogIDtcXHJcXG4gIC0tdHctYmFja2Ryb3Atc2F0dXJhdGU6ICA7XFxyXFxuICAtLXR3LWJhY2tkcm9wLXNlcGlhOiAgO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogNjQwcHgpIHtcXHJcXG4gIC5jb250YWluZXIge1xcclxcbiAgICBtYXgtd2lkdGg6IDY0MHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXHJcXG4gIC5jb250YWluZXIge1xcclxcbiAgICBtYXgtd2lkdGg6IDc2OHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XFxyXFxuICAuY29udGFpbmVyIHtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMDI0cHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiAxMjgwcHgpIHtcXHJcXG4gIC5jb250YWluZXIge1xcclxcbiAgICBtYXgtd2lkdGg6IDEyODBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDE1MzZweCkge1xcclxcbiAgLmNvbnRhaW5lciB7XFxyXFxuICAgIG1heC13aWR0aDogMTUzNnB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uYWJzb2x1dGUge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ubS1hdXRvIHtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLm14LTQge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5mbGV4IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5ncmlkIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxufVxcclxcblxcclxcbi5oaWRkZW4ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnctZnVsbCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmZsZXgtcm93IHtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxufVxcclxcblxcclxcbi5mbGV4LWNvbCB7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbXMtc3RhcnQge1xcclxcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbi5pdGVtcy1jZW50ZXIge1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW1zLXN0cmV0Y2gge1xcclxcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxyXFxufVxcclxcblxcclxcbi5qdXN0aWZ5LXN0YXJ0IHtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuLmp1c3RpZnktZW5kIHtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxufVxcclxcblxcclxcbi5qdXN0aWZ5LWJldHdlZW4ge1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FwLTIge1xcclxcbiAgZ2FwOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5nYXAtNCB7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5nYXAtOCB7XFxyXFxuICBnYXA6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5yb3VuZGVkLWZ1bGwge1xcclxcbiAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucm91bmRlZC1tZCB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmJvcmRlci1iLTIge1xcclxcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYm9yZGVyLXQtMiB7XFxyXFxuICBib3JkZXItdG9wLXdpZHRoOiAycHg7XFxyXFxufVxcclxcblxcclxcbi5ib3JkZXItc29saWQge1xcclxcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG59XFxyXFxuXFxyXFxuLmJvcmRlci1ibHVlLTcwMCB7XFxyXFxuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xcclxcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMjkgNzggMjE2IC8gdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJvcmRlci13aGl0ZSB7XFxyXFxuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xcclxcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMjU1IDI1NSAyNTUgLyB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xcclxcbn1cXHJcXG5cXHJcXG4uYmctYmx1ZS02MDAge1xcclxcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM3IDk5IDIzNSAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJnLWJsdWUtNzAwIHtcXHJcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyOSA3OCAyMTYgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxyXFxufVxcclxcblxcclxcbi5iZy1yZWQtNTAwIHtcXHJcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzkgNjggNjggLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxyXFxufVxcclxcblxcclxcbi5iZy1zbGF0ZS0zMDAge1xcclxcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMyAyMTMgMjI1IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcclxcbn1cXHJcXG5cXHJcXG4uYmctc2xhdGUtNTAwIHtcXHJcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDAgMTE2IDEzOSAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJnLXRyYW5zcGFyZW50IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uYmcteWVsbG93LTUwMCB7XFxyXFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM0IDE3OSA4IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcclxcbn1cXHJcXG5cXHJcXG4ucC00IHtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5weC00IHtcXHJcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5weC04IHtcXHJcXG4gIHBhZGRpbmctbGVmdDogMnJlbTtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5weS0yIHtcXHJcXG4gIHBhZGRpbmctdG9wOiAwLjVyZW07XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHktNCB7XFxyXFxuICBwYWRkaW5nLXRvcDogMXJlbTtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHktOCB7XFxyXFxuICBwYWRkaW5nLXRvcDogMnJlbTtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucGwtNCB7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5wbC04IHtcXHJcXG4gIHBhZGRpbmctbGVmdDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnB0LTE2IHtcXHJcXG4gIHBhZGRpbmctdG9wOiA0cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dC1jZW50ZXIge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dC0yeGwge1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHQtM3hsIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS44NzVyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMi4yNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHQtc20ge1xcclxcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dC14bCB7XFxyXFxuICBmb250LXNpemU6IDEuMjVyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMS43NXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvbnQtYm9sZCB7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9udC1tZWRpdW0ge1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHQtYmx1ZS03MDAge1xcclxcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxyXFxuICBjb2xvcjogcmdiKDI5IDc4IDIxNiAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dC1zbGF0ZS0yMDAge1xcclxcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxyXFxuICBjb2xvcjogcmdiKDIyNiAyMzIgMjQwIC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxyXFxufVxcclxcblxcclxcbi50ZXh0LXNsYXRlLTUwMCB7XFxyXFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXHJcXG4gIGNvbG9yOiByZ2IoMTAwIDExNiAxMzkgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHQtd2hpdGUge1xcclxcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxyXFxuICBjb2xvcjogcmdiKDI1NSAyNTUgMjU1IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxyXFxufVxcclxcblxcclxcbi5maWx0ZXIge1xcclxcbiAgZmlsdGVyOiB2YXIoLS10dy1ibHVyKSB2YXIoLS10dy1icmlnaHRuZXNzKSB2YXIoLS10dy1jb250cmFzdCkgdmFyKC0tdHctZ3JheXNjYWxlKSB2YXIoLS10dy1odWUtcm90YXRlKSB2YXIoLS10dy1pbnZlcnQpIHZhcigtLXR3LXNhdHVyYXRlKSB2YXIoLS10dy1zZXBpYSkgdmFyKC0tdHctZHJvcC1zaGFkb3cpO1xcclxcbn1cXHJcXG5cXHJcXG4udHJhbnNpdGlvbi1hbGwge1xcclxcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYWxsO1xcclxcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XFxyXFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxNTBtcztcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNsaXA6IGJvcmRlci1ib3g7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgLyogcGFkZGluZy10b3A6IDUuNDlyZW07XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMjV2dzsgKi9cXHJcXG59XFxyXFxuXFxyXFxuYXNpZGUge1xcclxcbiAgd2lkdGg6IDIwdnc7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDcuMzVyZW07XFxyXFxuICByaWdodDogMXJlbTtcXHJcXG4gIGxlZnQ6IDIuNXJlbTtcXHJcXG4gIGJvdHRvbTogMXJlbTtcXHJcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50LWNvbnRhaW5lciB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDcuMzVyZW07XFxyXFxuICBsZWZ0OiAyNXZ3O1xcclxcbiAgcmlnaHQ6IDJyZW07XFxyXFxuICBoZWlnaHQ6IDc5LjZ2aDtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVye1xcclxcbiAgYm90dG9tOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIsI3Byb2plY3RzLWhlYWRlciB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBsZWZ0OiAyLjVyZW07XFxyXFxuICB3aWR0aDogMjB2dztcXHJcXG4gIHotaW5kZXg6IDEwMDtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybXtcXHJcXG4gIHdpZHRoOiAzMHZ3O1xcclxcbiAgbGVmdDogY2FsYygyNXZ3IC0gMXJlbSk7XFxyXFxuICB0b3A6IDcuMzVyZW07XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDEuNXJlbTtcXHJcXG4gIHJpZ2h0OiAxcmVtO1xcclxcbiAgbGVmdDogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3LXByb2plY3QtYnRue1xcclxcbiAgcGFkZGluZy1ibG9jazogLjVyZW07XFxyXFxuICBwYWRkaW5nLWlubGluZTogLjhyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvZmlsZSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICByaWdodDogMDtcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2ZpbGUtcGljdHVyZSB7XFxyXFxuICB3aWR0aDogNDVweDtcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2plY3RzLWhlYWRlcntcXHJcXG4gIHRvcDogNy4zNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2stY29udGFpbmVye1xcclxcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2stZm9ybSB7XFxyXFxuICBsZWZ0OiBjYWxjKDQwdncpO1xcclxcbiAgdG9wOiAxNi44cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaG92ZXJcXFxcOmJnLWJsdWUtNjAwOmhvdmVyIHtcXHJcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzNyA5OSAyMzUgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxyXFxufVxcclxcblxcclxcbi5ob3ZlclxcXFw6YmctYmx1ZS03MDA6aG92ZXIge1xcclxcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI5IDc4IDIxNiAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvdmVyXFxcXDpiZy1yZWQtNzAwOmhvdmVyIHtcXHJcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxODUgMjggMjggLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxyXFxufVxcclxcblxcclxcbi5ob3ZlclxcXFw6Ymctc2xhdGUtMTAwOmhvdmVyIHtcXHJcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDEgMjQ1IDI0OSAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvdmVyXFxcXDpiZy15ZWxsb3ctNzAwOmhvdmVyIHtcXHJcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjEgOTggNyAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvY3VzXFxcXDpvdXRsaW5lLW5vbmU6Zm9jdXMge1xcclxcbiAgb3V0bGluZTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgb3V0bGluZS1vZmZzZXQ6IDJweDtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztDQUVDOztBQUVEOzs7Q0FHQzs7QUFFRDs7O0VBR0Usc0JBQXNCO0VBQ3RCLE1BQU07RUFDTixlQUFlO0VBQ2YsTUFBTTtFQUNOLG1CQUFtQjtFQUNuQixNQUFNO0VBQ04scUJBQXFCO0VBQ3JCLE1BQU07QUFDUjs7QUFFQTs7RUFFRSxnQkFBZ0I7QUFDbEI7O0FBRUE7Ozs7OztDQU1DOztBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLE1BQU07RUFDTiw4QkFBOEI7RUFDOUIsTUFBTTtFQUNOLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sY0FBYztLQUNYLFdBQVc7RUFDZCxNQUFNO0VBQ04sNE5BQTROO0VBQzVOLE1BQU07RUFDTiw2QkFBNkI7RUFDN0IsTUFBTTtBQUNSOztBQUVBOzs7Q0FHQzs7QUFFRDtFQUNFLFNBQVM7RUFDVCxNQUFNO0VBQ04sb0JBQW9CO0VBQ3BCLE1BQU07QUFDUjs7QUFFQTs7OztDQUlDOztBQUVEO0VBQ0UsU0FBUztFQUNULE1BQU07RUFDTixjQUFjO0VBQ2QsTUFBTTtFQUNOLHFCQUFxQjtFQUNyQixNQUFNO0FBQ1I7O0FBRUE7O0NBRUM7O0FBRUQ7RUFDRSx5Q0FBeUM7VUFDakMsaUNBQWlDO0FBQzNDOztBQUVBOztDQUVDOztBQUVEOzs7Ozs7RUFNRSxrQkFBa0I7RUFDbEIsb0JBQW9CO0FBQ3RCOztBQUVBOztDQUVDOztBQUVEO0VBQ0UsY0FBYztFQUNkLHdCQUF3QjtBQUMxQjs7QUFFQTs7Q0FFQzs7QUFFRDs7RUFFRSxtQkFBbUI7QUFDckI7O0FBRUE7OztDQUdDOztBQUVEOzs7O0VBSUUsK0dBQStHO0VBQy9HLE1BQU07RUFDTixjQUFjO0VBQ2QsTUFBTTtBQUNSOztBQUVBOztDQUVDOztBQUVEO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7Q0FFQzs7QUFF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Q2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsdURBQXVEO0FBQ3pEOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVEQUF1RDtBQUN6RDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix1REFBdUQ7QUFDekQ7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIseURBQXlEO0FBQzNEOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNEQUFzRDtBQUN4RDs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLypcXHJcXG4hIHRhaWx3aW5kY3NzIHYzLjIuNyB8IE1JVCBMaWNlbnNlIHwgaHR0cHM6Ly90YWlsd2luZGNzcy5jb21cXHJcXG4qL1xcclxcblxcclxcbi8qXFxyXFxuMS4gUHJldmVudCBwYWRkaW5nIGFuZCBib3JkZXIgZnJvbSBhZmZlY3RpbmcgZWxlbWVudCB3aWR0aC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvNClcXHJcXG4yLiBBbGxvdyBhZGRpbmcgYSBib3JkZXIgdG8gYW4gZWxlbWVudCBieSBqdXN0IGFkZGluZyBhIGJvcmRlci13aWR0aC4gKGh0dHBzOi8vZ2l0aHViLmNvbS90YWlsd2luZGNzcy90YWlsd2luZGNzcy9wdWxsLzExNilcXHJcXG4qL1xcclxcblxcclxcbiosXFxyXFxuOjpiZWZvcmUsXFxyXFxuOjphZnRlciB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgLyogMSAqL1xcclxcbiAgYm9yZGVyLXdpZHRoOiAwO1xcclxcbiAgLyogMiAqL1xcclxcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG4gIC8qIDIgKi9cXHJcXG4gIGJvcmRlci1jb2xvcjogI2U1ZTdlYjtcXHJcXG4gIC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuOjpiZWZvcmUsXFxyXFxuOjphZnRlciB7XFxyXFxuICAtLXR3LWNvbnRlbnQ6ICcnO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbjEuIFVzZSBhIGNvbnNpc3RlbnQgc2Vuc2libGUgbGluZS1oZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcclxcbjIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcclxcbjMuIFVzZSBhIG1vcmUgcmVhZGFibGUgdGFiIHNpemUuXFxyXFxuNC4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBgc2Fuc2AgZm9udC1mYW1pbHkgYnkgZGVmYXVsdC5cXHJcXG41LiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIGBzYW5zYCBmb250LWZlYXR1cmUtc2V0dGluZ3MgYnkgZGVmYXVsdC5cXHJcXG4qL1xcclxcblxcclxcbmh0bWwge1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXHJcXG4gIC8qIDEgKi9cXHJcXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXHJcXG4gIC8qIDIgKi9cXHJcXG4gIC1tb3otdGFiLXNpemU6IDQ7XFxyXFxuICAvKiAzICovXFxyXFxuICAtby10YWItc2l6ZTogNDtcXHJcXG4gICAgIHRhYi1zaXplOiA0O1xcclxcbiAgLyogMyAqL1xcclxcbiAgZm9udC1mYW1pbHk6IHVpLXNhbnMtc2VyaWYsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEFyaWFsLCBcXFwiTm90byBTYW5zXFxcIiwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCIsIFxcXCJOb3RvIENvbG9yIEVtb2ppXFxcIjtcXHJcXG4gIC8qIDQgKi9cXHJcXG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogbm9ybWFsO1xcclxcbiAgLyogNSAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbjEuIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cXHJcXG4yLiBJbmhlcml0IGxpbmUtaGVpZ2h0IGZyb20gYGh0bWxgIHNvIHVzZXJzIGNhbiBzZXQgdGhlbSBhcyBhIGNsYXNzIGRpcmVjdGx5IG9uIHRoZSBgaHRtbGAgZWxlbWVudC5cXHJcXG4qL1xcclxcblxcclxcbmJvZHkge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgLyogMSAqL1xcclxcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxyXFxuICAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuMS4gQWRkIHRoZSBjb3JyZWN0IGhlaWdodCBpbiBGaXJlZm94LlxcclxcbjIuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIG9mIGJvcmRlciBjb2xvciBpbiBGaXJlZm94LiAoaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTkwNjU1KVxcclxcbjMuIEVuc3VyZSBob3Jpem9udGFsIHJ1bGVzIGFyZSB2aXNpYmxlIGJ5IGRlZmF1bHQuXFxyXFxuKi9cXHJcXG5cXHJcXG5ociB7XFxyXFxuICBoZWlnaHQ6IDA7XFxyXFxuICAvKiAxICovXFxyXFxuICBjb2xvcjogaW5oZXJpdDtcXHJcXG4gIC8qIDIgKi9cXHJcXG4gIGJvcmRlci10b3Atd2lkdGg6IDFweDtcXHJcXG4gIC8qIDMgKi9cXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5BZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXHJcXG4qL1xcclxcblxcclxcbmFiYnI6d2hlcmUoW3RpdGxlXSkge1xcclxcbiAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XFxyXFxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5SZW1vdmUgdGhlIGRlZmF1bHQgZm9udCBzaXplIGFuZCB3ZWlnaHQgZm9yIGhlYWRpbmdzLlxcclxcbiovXFxyXFxuXFxyXFxuaDEsXFxyXFxuaDIsXFxyXFxuaDMsXFxyXFxuaDQsXFxyXFxuaDUsXFxyXFxuaDYge1xcclxcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcclxcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuUmVzZXQgbGlua3MgdG8gb3B0aW1pemUgZm9yIG9wdC1pbiBzdHlsaW5nIGluc3RlYWQgb2Ygb3B0LW91dC5cXHJcXG4qL1xcclxcblxcclxcbmEge1xcclxcbiAgY29sb3I6IGluaGVyaXQ7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIEVkZ2UgYW5kIFNhZmFyaS5cXHJcXG4qL1xcclxcblxcclxcbmIsXFxyXFxuc3Ryb25nIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuMS4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBgbW9ub2AgZm9udCBmYW1pbHkgYnkgZGVmYXVsdC5cXHJcXG4yLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuKi9cXHJcXG5cXHJcXG5jb2RlLFxcclxcbmtiZCxcXHJcXG5zYW1wLFxcclxcbnByZSB7XFxyXFxuICBmb250LWZhbWlseTogdWktbW9ub3NwYWNlLCBTRk1vbm8tUmVndWxhciwgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsIFxcXCJMaWJlcmF0aW9uIE1vbm9cXFwiLCBcXFwiQ291cmllciBOZXdcXFwiLCBtb25vc3BhY2U7XFxyXFxuICAvKiAxICovXFxyXFxuICBmb250LXNpemU6IDFlbTtcXHJcXG4gIC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5BZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXHJcXG4qL1xcclxcblxcclxcbnNtYWxsIHtcXHJcXG4gIGZvbnQtc2l6ZTogODAlO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcblByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuKi9cXHJcXG5cXHJcXG5zdWIsXFxyXFxuc3VwIHtcXHJcXG4gIGZvbnQtc2l6ZTogNzUlO1xcclxcbiAgbGluZS1oZWlnaHQ6IDA7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxyXFxufVxcclxcblxcclxcbnN1YiB7XFxyXFxuICBib3R0b206IC0wLjI1ZW07XFxyXFxufVxcclxcblxcclxcbnN1cCB7XFxyXFxuICB0b3A6IC0wLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4xLiBSZW1vdmUgdGV4dCBpbmRlbnRhdGlvbiBmcm9tIHRhYmxlIGNvbnRlbnRzIGluIENocm9tZSBhbmQgU2FmYXJpLiAoaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTk5MDg4LCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MjAxMjk3KVxcclxcbjIuIENvcnJlY3QgdGFibGUgYm9yZGVyIGNvbG9yIGluaGVyaXRhbmNlIGluIGFsbCBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTkzNTcyOSwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE5NTAxNilcXHJcXG4zLiBSZW1vdmUgZ2FwcyBiZXR3ZWVuIHRhYmxlIGJvcmRlcnMgYnkgZGVmYXVsdC5cXHJcXG4qL1xcclxcblxcclxcbnRhYmxlIHtcXHJcXG4gIHRleHQtaW5kZW50OiAwO1xcclxcbiAgLyogMSAqL1xcclxcbiAgYm9yZGVyLWNvbG9yOiBpbmhlcml0O1xcclxcbiAgLyogMiAqL1xcclxcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXHJcXG4gIC8qIDMgKi9cXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4xLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXHJcXG4yLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxyXFxuMy4gUmVtb3ZlIGRlZmF1bHQgcGFkZGluZyBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuKi9cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxuaW5wdXQsXFxyXFxub3B0Z3JvdXAsXFxyXFxuc2VsZWN0LFxcclxcbnRleHRhcmVhIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcbiAgLyogMSAqL1xcclxcbiAgZm9udC1zaXplOiAxMDAlO1xcclxcbiAgLyogMSAqL1xcclxcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XFxyXFxuICAvKiAxICovXFxyXFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcXHJcXG4gIC8qIDEgKi9cXHJcXG4gIGNvbG9yOiBpbmhlcml0O1xcclxcbiAgLyogMSAqL1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgLyogMiAqL1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIC8qIDMgKi9cXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5SZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UgYW5kIEZpcmVmb3guXFxyXFxuKi9cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxuc2VsZWN0IHtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbjEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxyXFxuMi4gUmVtb3ZlIGRlZmF1bHQgYnV0dG9uIHN0eWxlcy5cXHJcXG4qL1xcclxcblxcclxcbmJ1dHRvbixcXHJcXG5bdHlwZT0nYnV0dG9uJ10sXFxyXFxuW3R5cGU9J3Jlc2V0J10sXFxyXFxuW3R5cGU9J3N1Ym1pdCddIHtcXHJcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcclxcbiAgLyogMSAqL1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAvKiAyICovXFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xcclxcbiAgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcblVzZSB0aGUgbW9kZXJuIEZpcmVmb3ggZm9jdXMgc3R5bGUgZm9yIGFsbCBmb2N1c2FibGUgZWxlbWVudHMuXFxyXFxuKi9cXHJcXG5cXHJcXG46LW1vei1mb2N1c3Jpbmcge1xcclxcbiAgb3V0bGluZTogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5SZW1vdmUgdGhlIGFkZGl0aW9uYWwgYDppbnZhbGlkYCBzdHlsZXMgaW4gRmlyZWZveC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL2dlY2tvLWRldi9ibG9iLzJmOWVhY2Q5ZDNkOTk1YzkzN2I0MjUxYTU1NTdkOTVkNDk0YzliZTEvbGF5b3V0L3N0eWxlL3Jlcy9mb3Jtcy5jc3MjTDcyOC1MNzM3KVxcclxcbiovXFxyXFxuXFxyXFxuOi1tb3otdWktaW52YWxpZCB7XFxyXFxuICBib3gtc2hhZG93OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbkFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lIGFuZCBGaXJlZm94LlxcclxcbiovXFxyXFxuXFxyXFxucHJvZ3Jlc3Mge1xcclxcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbkNvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIFNhZmFyaS5cXHJcXG4qL1xcclxcblxcclxcbjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXHJcXG46Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbjEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcclxcbjIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcclxcbiovXFxyXFxuXFxyXFxuW3R5cGU9J3NlYXJjaCddIHtcXHJcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xcclxcbiAgLyogMSAqL1xcclxcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7XFxyXFxuICAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcclxcbiovXFxyXFxuXFxyXFxuOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXHJcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4xLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcclxcbjIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXHJcXG4qL1xcclxcblxcclxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcclxcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxyXFxuICAvKiAxICovXFxyXFxuICBmb250OiBpbmhlcml0O1xcclxcbiAgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbkFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIENocm9tZSBhbmQgU2FmYXJpLlxcclxcbiovXFxyXFxuXFxyXFxuc3VtbWFyeSB7XFxyXFxuICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuUmVtb3ZlcyB0aGUgZGVmYXVsdCBzcGFjaW5nIGFuZCBib3JkZXIgZm9yIGFwcHJvcHJpYXRlIGVsZW1lbnRzLlxcclxcbiovXFxyXFxuXFxyXFxuYmxvY2txdW90ZSxcXHJcXG5kbCxcXHJcXG5kZCxcXHJcXG5oMSxcXHJcXG5oMixcXHJcXG5oMyxcXHJcXG5oNCxcXHJcXG5oNSxcXHJcXG5oNixcXHJcXG5ocixcXHJcXG5maWd1cmUsXFxyXFxucCxcXHJcXG5wcmUge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5maWVsZHNldCB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5sZWdlbmQge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxub2wsXFxyXFxudWwsXFxyXFxubWVudSB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5QcmV2ZW50IHJlc2l6aW5nIHRleHRhcmVhcyBob3Jpem9udGFsbHkgYnkgZGVmYXVsdC5cXHJcXG4qL1xcclxcblxcclxcbnRleHRhcmVhIHtcXHJcXG4gIHJlc2l6ZTogdmVydGljYWw7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuMS4gUmVzZXQgdGhlIGRlZmF1bHQgcGxhY2Vob2xkZXIgb3BhY2l0eSBpbiBGaXJlZm94LiAoaHR0cHM6Ly9naXRodWIuY29tL3RhaWx3aW5kbGFicy90YWlsd2luZGNzcy9pc3N1ZXMvMzMwMClcXHJcXG4yLiBTZXQgdGhlIGRlZmF1bHQgcGxhY2Vob2xkZXIgY29sb3IgdG8gdGhlIHVzZXIncyBjb25maWd1cmVkIGdyYXkgNDAwIGNvbG9yLlxcclxcbiovXFxyXFxuXFxyXFxuaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIsIHRleHRhcmVhOjotbW96LXBsYWNlaG9sZGVyIHtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxuICAvKiAxICovXFxyXFxuICBjb2xvcjogIzljYTNhZjtcXHJcXG4gIC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQ6OnBsYWNlaG9sZGVyLFxcclxcbnRleHRhcmVhOjpwbGFjZWhvbGRlciB7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbiAgLyogMSAqL1xcclxcbiAgY29sb3I6ICM5Y2EzYWY7XFxyXFxuICAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuU2V0IHRoZSBkZWZhdWx0IGN1cnNvciBmb3IgYnV0dG9ucy5cXHJcXG4qL1xcclxcblxcclxcbmJ1dHRvbixcXHJcXG5bcm9sZT1cXFwiYnV0dG9uXFxcIl0ge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbk1ha2Ugc3VyZSBkaXNhYmxlZCBidXR0b25zIGRvbid0IGdldCB0aGUgcG9pbnRlciBjdXJzb3IuXFxyXFxuKi9cXHJcXG5cXHJcXG46ZGlzYWJsZWQge1xcclxcbiAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbjEuIE1ha2UgcmVwbGFjZWQgZWxlbWVudHMgYGRpc3BsYXk6IGJsb2NrYCBieSBkZWZhdWx0LiAoaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy8xNClcXHJcXG4yLiBBZGQgYHZlcnRpY2FsLWFsaWduOiBtaWRkbGVgIHRvIGFsaWduIHJlcGxhY2VkIGVsZW1lbnRzIG1vcmUgc2Vuc2libHkgYnkgZGVmYXVsdC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9qZW5zaW1tb25zL2Nzc3JlbWVkeS9pc3N1ZXMvMTQjaXNzdWVjb21tZW50LTYzNDkzNDIxMClcXHJcXG4gICBUaGlzIGNhbiB0cmlnZ2VyIGEgcG9vcmx5IGNvbnNpZGVyZWQgbGludCBlcnJvciBpbiBzb21lIHRvb2xzIGJ1dCBpcyBpbmNsdWRlZCBieSBkZXNpZ24uXFxyXFxuKi9cXHJcXG5cXHJcXG5pbWcsXFxyXFxuc3ZnLFxcclxcbnZpZGVvLFxcclxcbmNhbnZhcyxcXHJcXG5hdWRpbyxcXHJcXG5pZnJhbWUsXFxyXFxuZW1iZWQsXFxyXFxub2JqZWN0IHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgLyogMSAqL1xcclxcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG4gIC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5Db25zdHJhaW4gaW1hZ2VzIGFuZCB2aWRlb3MgdG8gdGhlIHBhcmVudCB3aWR0aCBhbmQgcHJlc2VydmUgdGhlaXIgaW50cmluc2ljIGFzcGVjdCByYXRpby4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvMTQpXFxyXFxuKi9cXHJcXG5cXHJcXG5pbWcsXFxyXFxudmlkZW8ge1xcclxcbiAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNYWtlIGVsZW1lbnRzIHdpdGggdGhlIEhUTUwgaGlkZGVuIGF0dHJpYnV0ZSBzdGF5IGhpZGRlbiBieSBkZWZhdWx0ICovXFxyXFxuXFxyXFxuW2hpZGRlbl0ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuKiwgOjpiZWZvcmUsIDo6YWZ0ZXIge1xcclxcbiAgLS10dy1ib3JkZXItc3BhY2luZy14OiAwO1xcclxcbiAgLS10dy1ib3JkZXItc3BhY2luZy15OiAwO1xcclxcbiAgLS10dy10cmFuc2xhdGUteDogMDtcXHJcXG4gIC0tdHctdHJhbnNsYXRlLXk6IDA7XFxyXFxuICAtLXR3LXJvdGF0ZTogMDtcXHJcXG4gIC0tdHctc2tldy14OiAwO1xcclxcbiAgLS10dy1za2V3LXk6IDA7XFxyXFxuICAtLXR3LXNjYWxlLXg6IDE7XFxyXFxuICAtLXR3LXNjYWxlLXk6IDE7XFxyXFxuICAtLXR3LXBhbi14OiAgO1xcclxcbiAgLS10dy1wYW4teTogIDtcXHJcXG4gIC0tdHctcGluY2gtem9vbTogIDtcXHJcXG4gIC0tdHctc2Nyb2xsLXNuYXAtc3RyaWN0bmVzczogcHJveGltaXR5O1xcclxcbiAgLS10dy1vcmRpbmFsOiAgO1xcclxcbiAgLS10dy1zbGFzaGVkLXplcm86ICA7XFxyXFxuICAtLXR3LW51bWVyaWMtZmlndXJlOiAgO1xcclxcbiAgLS10dy1udW1lcmljLXNwYWNpbmc6ICA7XFxyXFxuICAtLXR3LW51bWVyaWMtZnJhY3Rpb246ICA7XFxyXFxuICAtLXR3LXJpbmctaW5zZXQ6ICA7XFxyXFxuICAtLXR3LXJpbmctb2Zmc2V0LXdpZHRoOiAwcHg7XFxyXFxuICAtLXR3LXJpbmctb2Zmc2V0LWNvbG9yOiAjZmZmO1xcclxcbiAgLS10dy1yaW5nLWNvbG9yOiByZ2IoNTkgMTMwIDI0NiAvIDAuNSk7XFxyXFxuICAtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdzogMCAwICMwMDAwO1xcclxcbiAgLS10dy1yaW5nLXNoYWRvdzogMCAwICMwMDAwO1xcclxcbiAgLS10dy1zaGFkb3c6IDAgMCAjMDAwMDtcXHJcXG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IDAgMCAjMDAwMDtcXHJcXG4gIC0tdHctYmx1cjogIDtcXHJcXG4gIC0tdHctYnJpZ2h0bmVzczogIDtcXHJcXG4gIC0tdHctY29udHJhc3Q6ICA7XFxyXFxuICAtLXR3LWdyYXlzY2FsZTogIDtcXHJcXG4gIC0tdHctaHVlLXJvdGF0ZTogIDtcXHJcXG4gIC0tdHctaW52ZXJ0OiAgO1xcclxcbiAgLS10dy1zYXR1cmF0ZTogIDtcXHJcXG4gIC0tdHctc2VwaWE6ICA7XFxyXFxuICAtLXR3LWRyb3Atc2hhZG93OiAgO1xcclxcbiAgLS10dy1iYWNrZHJvcC1ibHVyOiAgO1xcclxcbiAgLS10dy1iYWNrZHJvcC1icmlnaHRuZXNzOiAgO1xcclxcbiAgLS10dy1iYWNrZHJvcC1jb250cmFzdDogIDtcXHJcXG4gIC0tdHctYmFja2Ryb3AtZ3JheXNjYWxlOiAgO1xcclxcbiAgLS10dy1iYWNrZHJvcC1odWUtcm90YXRlOiAgO1xcclxcbiAgLS10dy1iYWNrZHJvcC1pbnZlcnQ6ICA7XFxyXFxuICAtLXR3LWJhY2tkcm9wLW9wYWNpdHk6ICA7XFxyXFxuICAtLXR3LWJhY2tkcm9wLXNhdHVyYXRlOiAgO1xcclxcbiAgLS10dy1iYWNrZHJvcC1zZXBpYTogIDtcXHJcXG59XFxyXFxuXFxyXFxuOjpiYWNrZHJvcCB7XFxyXFxuICAtLXR3LWJvcmRlci1zcGFjaW5nLXg6IDA7XFxyXFxuICAtLXR3LWJvcmRlci1zcGFjaW5nLXk6IDA7XFxyXFxuICAtLXR3LXRyYW5zbGF0ZS14OiAwO1xcclxcbiAgLS10dy10cmFuc2xhdGUteTogMDtcXHJcXG4gIC0tdHctcm90YXRlOiAwO1xcclxcbiAgLS10dy1za2V3LXg6IDA7XFxyXFxuICAtLXR3LXNrZXcteTogMDtcXHJcXG4gIC0tdHctc2NhbGUteDogMTtcXHJcXG4gIC0tdHctc2NhbGUteTogMTtcXHJcXG4gIC0tdHctcGFuLXg6ICA7XFxyXFxuICAtLXR3LXBhbi15OiAgO1xcclxcbiAgLS10dy1waW5jaC16b29tOiAgO1xcclxcbiAgLS10dy1zY3JvbGwtc25hcC1zdHJpY3RuZXNzOiBwcm94aW1pdHk7XFxyXFxuICAtLXR3LW9yZGluYWw6ICA7XFxyXFxuICAtLXR3LXNsYXNoZWQtemVybzogIDtcXHJcXG4gIC0tdHctbnVtZXJpYy1maWd1cmU6ICA7XFxyXFxuICAtLXR3LW51bWVyaWMtc3BhY2luZzogIDtcXHJcXG4gIC0tdHctbnVtZXJpYy1mcmFjdGlvbjogIDtcXHJcXG4gIC0tdHctcmluZy1pbnNldDogIDtcXHJcXG4gIC0tdHctcmluZy1vZmZzZXQtd2lkdGg6IDBweDtcXHJcXG4gIC0tdHctcmluZy1vZmZzZXQtY29sb3I6ICNmZmY7XFxyXFxuICAtLXR3LXJpbmctY29sb3I6IHJnYig1OSAxMzAgMjQ2IC8gMC41KTtcXHJcXG4gIC0tdHctcmluZy1vZmZzZXQtc2hhZG93OiAwIDAgIzAwMDA7XFxyXFxuICAtLXR3LXJpbmctc2hhZG93OiAwIDAgIzAwMDA7XFxyXFxuICAtLXR3LXNoYWRvdzogMCAwICMwMDAwO1xcclxcbiAgLS10dy1zaGFkb3ctY29sb3JlZDogMCAwICMwMDAwO1xcclxcbiAgLS10dy1ibHVyOiAgO1xcclxcbiAgLS10dy1icmlnaHRuZXNzOiAgO1xcclxcbiAgLS10dy1jb250cmFzdDogIDtcXHJcXG4gIC0tdHctZ3JheXNjYWxlOiAgO1xcclxcbiAgLS10dy1odWUtcm90YXRlOiAgO1xcclxcbiAgLS10dy1pbnZlcnQ6ICA7XFxyXFxuICAtLXR3LXNhdHVyYXRlOiAgO1xcclxcbiAgLS10dy1zZXBpYTogIDtcXHJcXG4gIC0tdHctZHJvcC1zaGFkb3c6ICA7XFxyXFxuICAtLXR3LWJhY2tkcm9wLWJsdXI6ICA7XFxyXFxuICAtLXR3LWJhY2tkcm9wLWJyaWdodG5lc3M6ICA7XFxyXFxuICAtLXR3LWJhY2tkcm9wLWNvbnRyYXN0OiAgO1xcclxcbiAgLS10dy1iYWNrZHJvcC1ncmF5c2NhbGU6ICA7XFxyXFxuICAtLXR3LWJhY2tkcm9wLWh1ZS1yb3RhdGU6ICA7XFxyXFxuICAtLXR3LWJhY2tkcm9wLWludmVydDogIDtcXHJcXG4gIC0tdHctYmFja2Ryb3Atb3BhY2l0eTogIDtcXHJcXG4gIC0tdHctYmFja2Ryb3Atc2F0dXJhdGU6ICA7XFxyXFxuICAtLXR3LWJhY2tkcm9wLXNlcGlhOiAgO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogNjQwcHgpIHtcXHJcXG4gIC5jb250YWluZXIge1xcclxcbiAgICBtYXgtd2lkdGg6IDY0MHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXHJcXG4gIC5jb250YWluZXIge1xcclxcbiAgICBtYXgtd2lkdGg6IDc2OHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XFxyXFxuICAuY29udGFpbmVyIHtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMDI0cHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiAxMjgwcHgpIHtcXHJcXG4gIC5jb250YWluZXIge1xcclxcbiAgICBtYXgtd2lkdGg6IDEyODBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDE1MzZweCkge1xcclxcbiAgLmNvbnRhaW5lciB7XFxyXFxuICAgIG1heC13aWR0aDogMTUzNnB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uYWJzb2x1dGUge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ubS1hdXRvIHtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLm14LTQge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5mbGV4IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5ncmlkIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxufVxcclxcblxcclxcbi5oaWRkZW4ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnctZnVsbCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmZsZXgtcm93IHtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxufVxcclxcblxcclxcbi5mbGV4LWNvbCB7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbXMtc3RhcnQge1xcclxcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbi5pdGVtcy1jZW50ZXIge1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW1zLXN0cmV0Y2gge1xcclxcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxyXFxufVxcclxcblxcclxcbi5qdXN0aWZ5LXN0YXJ0IHtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuLmp1c3RpZnktZW5kIHtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxufVxcclxcblxcclxcbi5qdXN0aWZ5LWJldHdlZW4ge1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FwLTIge1xcclxcbiAgZ2FwOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5nYXAtNCB7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5nYXAtOCB7XFxyXFxuICBnYXA6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5yb3VuZGVkLWZ1bGwge1xcclxcbiAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucm91bmRlZC1tZCB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmJvcmRlci1iLTIge1xcclxcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYm9yZGVyLXQtMiB7XFxyXFxuICBib3JkZXItdG9wLXdpZHRoOiAycHg7XFxyXFxufVxcclxcblxcclxcbi5ib3JkZXItc29saWQge1xcclxcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG59XFxyXFxuXFxyXFxuLmJvcmRlci1ibHVlLTcwMCB7XFxyXFxuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xcclxcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMjkgNzggMjE2IC8gdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJvcmRlci13aGl0ZSB7XFxyXFxuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xcclxcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMjU1IDI1NSAyNTUgLyB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xcclxcbn1cXHJcXG5cXHJcXG4uYmctYmx1ZS02MDAge1xcclxcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM3IDk5IDIzNSAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJnLWJsdWUtNzAwIHtcXHJcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyOSA3OCAyMTYgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxyXFxufVxcclxcblxcclxcbi5iZy1yZWQtNTAwIHtcXHJcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzkgNjggNjggLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxyXFxufVxcclxcblxcclxcbi5iZy1zbGF0ZS0zMDAge1xcclxcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMyAyMTMgMjI1IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcclxcbn1cXHJcXG5cXHJcXG4uYmctc2xhdGUtNTAwIHtcXHJcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDAgMTE2IDEzOSAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJnLXRyYW5zcGFyZW50IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uYmcteWVsbG93LTUwMCB7XFxyXFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM0IDE3OSA4IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcclxcbn1cXHJcXG5cXHJcXG4ucC00IHtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5weC00IHtcXHJcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5weC04IHtcXHJcXG4gIHBhZGRpbmctbGVmdDogMnJlbTtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5weS0yIHtcXHJcXG4gIHBhZGRpbmctdG9wOiAwLjVyZW07XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHktNCB7XFxyXFxuICBwYWRkaW5nLXRvcDogMXJlbTtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHktOCB7XFxyXFxuICBwYWRkaW5nLXRvcDogMnJlbTtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucGwtNCB7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5wbC04IHtcXHJcXG4gIHBhZGRpbmctbGVmdDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnB0LTE2IHtcXHJcXG4gIHBhZGRpbmctdG9wOiA0cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dC1jZW50ZXIge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dC0yeGwge1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHQtM3hsIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS44NzVyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMi4yNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHQtc20ge1xcclxcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dC14bCB7XFxyXFxuICBmb250LXNpemU6IDEuMjVyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMS43NXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvbnQtYm9sZCB7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9udC1tZWRpdW0ge1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHQtYmx1ZS03MDAge1xcclxcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxyXFxuICBjb2xvcjogcmdiKDI5IDc4IDIxNiAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dC1zbGF0ZS0yMDAge1xcclxcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxyXFxuICBjb2xvcjogcmdiKDIyNiAyMzIgMjQwIC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxyXFxufVxcclxcblxcclxcbi50ZXh0LXNsYXRlLTUwMCB7XFxyXFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXHJcXG4gIGNvbG9yOiByZ2IoMTAwIDExNiAxMzkgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHQtd2hpdGUge1xcclxcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxyXFxuICBjb2xvcjogcmdiKDI1NSAyNTUgMjU1IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxyXFxufVxcclxcblxcclxcbi5maWx0ZXIge1xcclxcbiAgZmlsdGVyOiB2YXIoLS10dy1ibHVyKSB2YXIoLS10dy1icmlnaHRuZXNzKSB2YXIoLS10dy1jb250cmFzdCkgdmFyKC0tdHctZ3JheXNjYWxlKSB2YXIoLS10dy1odWUtcm90YXRlKSB2YXIoLS10dy1pbnZlcnQpIHZhcigtLXR3LXNhdHVyYXRlKSB2YXIoLS10dy1zZXBpYSkgdmFyKC0tdHctZHJvcC1zaGFkb3cpO1xcclxcbn1cXHJcXG5cXHJcXG4udHJhbnNpdGlvbi1hbGwge1xcclxcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYWxsO1xcclxcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XFxyXFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxNTBtcztcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy90b2RvLWJnLmpwZycpO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNsaXA6IGJvcmRlci1ib3g7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgLyogcGFkZGluZy10b3A6IDUuNDlyZW07XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMjV2dzsgKi9cXHJcXG59XFxyXFxuXFxyXFxuYXNpZGUge1xcclxcbiAgd2lkdGg6IDIwdnc7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDcuMzVyZW07XFxyXFxuICByaWdodDogMXJlbTtcXHJcXG4gIGxlZnQ6IDIuNXJlbTtcXHJcXG4gIGJvdHRvbTogMXJlbTtcXHJcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50LWNvbnRhaW5lciB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDcuMzVyZW07XFxyXFxuICBsZWZ0OiAyNXZ3O1xcclxcbiAgcmlnaHQ6IDJyZW07XFxyXFxuICBoZWlnaHQ6IDc5LjZ2aDtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVye1xcclxcbiAgYm90dG9tOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIsI3Byb2plY3RzLWhlYWRlciB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBsZWZ0OiAyLjVyZW07XFxyXFxuICB3aWR0aDogMjB2dztcXHJcXG4gIHotaW5kZXg6IDEwMDtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybXtcXHJcXG4gIHdpZHRoOiAzMHZ3O1xcclxcbiAgbGVmdDogY2FsYygyNXZ3IC0gMXJlbSk7XFxyXFxuICB0b3A6IDcuMzVyZW07XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDEuNXJlbTtcXHJcXG4gIHJpZ2h0OiAxcmVtO1xcclxcbiAgbGVmdDogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3LXByb2plY3QtYnRue1xcclxcbiAgcGFkZGluZy1ibG9jazogLjVyZW07XFxyXFxuICBwYWRkaW5nLWlubGluZTogLjhyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvZmlsZSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICByaWdodDogMDtcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2ZpbGUtcGljdHVyZSB7XFxyXFxuICB3aWR0aDogNDVweDtcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2plY3RzLWhlYWRlcntcXHJcXG4gIHRvcDogNy4zNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2stY29udGFpbmVye1xcclxcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2stZm9ybSB7XFxyXFxuICBsZWZ0OiBjYWxjKDQwdncpO1xcclxcbiAgdG9wOiAxNi44cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaG92ZXJcXFxcOmJnLWJsdWUtNjAwOmhvdmVyIHtcXHJcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzNyA5OSAyMzUgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxyXFxufVxcclxcblxcclxcbi5ob3ZlclxcXFw6YmctYmx1ZS03MDA6aG92ZXIge1xcclxcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI5IDc4IDIxNiAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvdmVyXFxcXDpiZy1yZWQtNzAwOmhvdmVyIHtcXHJcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxODUgMjggMjggLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxyXFxufVxcclxcblxcclxcbi5ob3ZlclxcXFw6Ymctc2xhdGUtMTAwOmhvdmVyIHtcXHJcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDEgMjQ1IDI0OSAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvdmVyXFxcXDpiZy15ZWxsb3ctNzAwOmhvdmVyIHtcXHJcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjEgOTggNyAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvY3VzXFxcXDpvdXRsaW5lLW5vbmU6Zm9jdXMge1xcclxcbiAgb3V0bGluZTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgb3V0bGluZS1vZmZzZXQ6IDJweDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdFwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBET01NYW5hZ2VyIHtcclxuXHJcbiAgY29uc3RydWN0b3IgKCkge1xyXG5cclxuICB9XHJcbiAgLy9BZGQgSWNvblxyXG4gIGNyZWF0ZUFkZEJ1dHRvbiAoKSB7XHJcblxyXG4gICAgLy9CdXR0b25cclxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICBidXR0b24uY2xhc3NOYW1lID0gJ2JnLWJsdWUtNjAwIHJvdW5kZWQtZnVsbCBob3ZlcjpiZy1ibHVlLTcwMCB0cmFuc2l0aW9uLWFsbCdcclxuXHJcbiAgICAvL0ljb25cclxuICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJylcclxuICAgIGljb24uY2xhc3NOYW1lID0gJ3RleHQteGwgdGV4dC1zbGF0ZS0yMDAgZmEtc29saWQgZmEtcGx1cyBmb250LW1lZGl1bSdcclxuXHJcbiAgICBidXR0b24uYXBwZW5kQ2hpbGQoaWNvbilcclxuXHJcbiAgICByZXR1cm4gYnV0dG9uXHJcbiAgfVxyXG4gIC8vRGl2IENvbnRhaW5lclxyXG4gIGNyZWF0ZUNvbnRhaW5lciAoKSB7XHJcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgZGl2LmNsYXNzTmFtZSA9ICdwLTQnXHJcblxyXG4gICAgcmV0dXJuIGRpdlxyXG4gIH1cclxuICAvL0Zvb3RlclxyXG4gIGNyZWF0ZUZvb3RlciAoKSB7XHJcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKVxyXG4gICAgICBmb290ZXIuY2xhc3NOYW1lID0gJ2JvcmRlci10LTIgYm9yZGVyLXNvbGlkIGJvcmRlci13aGl0ZSBiZy1ibHVlLTcwMCdcclxuXHJcbiAgLy9QYXJhZ3JhcGhcclxuICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICBwLmNsYXNzTmFtZSA9ICd0ZXh0LXNtIHRleHQtc2xhdGUtNTAwIHRleHQtY2VudGVyIHB5LTQnXHJcbiAgICBwLmlubmVySFRNTCA9IGBDb3B5cmlnaHQgJmNvcHk7ICR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfWBcclxuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChwKVxyXG5cclxuICAgIHJldHVybiBmb290ZXJcclxuICB9XHJcbiAgLy9QYWdlIGhlYWRlclxyXG4gIGNyZWF0ZUhlYWRlciAoKSB7XHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKVxyXG4gICAgaGVhZGVyLmNsYXNzTmFtZSA9ICdwLTQgYmctYmx1ZS03MDAgbS1hdXRvIG14LTQgcm91bmRlZC10b3Agcm91bmRlZC1tZCdcclxuICAgIHJldHVybiBoZWFkZXJcclxuICB9XHJcbiAgLy9IZWFkaW5nIGVsZW1lbnRcclxuICBjcmVhdGVIZWFkaW5nICh0ZXh0KSB7XHJcbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxyXG4gICAgaGVhZGluZy5jbGFzc05hbWUgPSAndGV4dC14bCB0ZXh0LXNsYXRlLTIwMCdcclxuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSB0ZXh0XHJcblxyXG4gICAgcmV0dXJuIGhlYWRpbmdcclxuICB9XHJcbiAgLy9Ib3Jpem9udGFsIGxpbmVcclxuICBjcmVhdGVIb3Jpem9udGFsTGluZSAoKSB7XHJcbiAgICBjb25zdCBsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKVxyXG4gICAgbGluZS5zdHlsZS5oZWlnaHQgPSAnMXhwJ1xyXG4gICAgbGluZS5jbGFzc05hbWUgPSAnYmctc2xhdGUtNTAwIHctZnVsbCdcclxuXHJcbiAgICByZXR1cm4gbGluZVxyXG4gIH1cclxuICAvL0J1c2luZXNzIG5hbWVcclxuICBjcmVhdGVMb2dvICh0ZXh0KSB7XHJcbiAgICBjb25zdCBsb2dvID0gdGhpcy5jcmVhdGVIZWFkaW5nKHRleHQpXHJcbiAgICBsb2dvLmNsYXNzTGlzdC5yZW1vdmUoJ3RleHQteGwnKVxyXG4gICAgbG9nby5jbGFzc0xpc3QuYWRkKCd0ZXh0LTJ4bCcsJ2ZvbnQtYm9sZCcsJ3RleHQtY2VudGVyJylcclxuXHJcbiAgICByZXR1cm4gbG9nb1xyXG4gIH1cclxuICAvL1Byb2plY3QgY29udGFpbmVyXHJcbiAgLy91c2VkIGZvciBkaXNsYXkgaW4gdGhlIHNpZGUgYmFyXHJcbiAgY3JlYXRlUHJvamVjdENvbnRhaW5lciAocHJvamVjdE5hbWUpIHtcclxuICAgIGNvbnN0IHByb2pDb250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgcHJvakNvbnQuaWQgPSBgJHtwcm9qZWN0TmFtZS50b0xvd2VyQ2FzZSgpLnJlcGxhY2VBbGwoJyAnLCAnLScpfS1jb250YWluZXJgXHJcbiAgICAgIHByb2pDb250LmNsYXNzTmFtZSA9ICd3LWZ1bGwgYmctYmx1ZS02MDAgYm9yZGVyLXQtMiBib3JkZXItc29saWQgYm9yZGVyLXdoaXRlIGhvdmVyOmJnLWJsdWUtNzAwIHRyYW5zaXRpb24tYWxsJ1xyXG5cclxuICAgICAgLy9OYW1lXHJcbiAgICAgIGNvbnN0IHByb2pOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxyXG4gICAgICAgIHByb2pOYW1lLmlkID0gYCR7cHJvamVjdE5hbWUudG9Mb3dlckNhc2UoKS5yZXBsYWNlQWxsKCcgJywgJy0nKX1gXHJcbiAgICAgICAgcHJvak5hbWUuY2xhc3NOYW1lID0gJ3B5LTIgdGV4dC1zbGF0ZS0yMDAgdGV4dC14bCBweC00J1xyXG4gICAgICAgIHByb2pOYW1lLnRleHRDb250ZW50ID0gcHJvamVjdE5hbWVcclxuICAgICAgXHJcbiAgICAgIC8vQXBwZW5kIG5hbWVcclxuICAgICAgcHJvakNvbnQuYXBwZW5kQ2hpbGQocHJvak5hbWUpXHJcblxyXG4gICAgICByZXR1cm4gcHJvakNvbnRcclxuICB9XHJcbiAgLy9EZXNjcmlwdGlvbiBjb250YWluZXJcclxuICBjcmVhdGVQcm9qZWN0RGVzY3JpcHRpb24gKGRlc2NyaXB0aW9uKSB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmNyZWF0ZUNvbnRhaW5lcigpXHJcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYmctYmx1ZS02MDAnLCdweC04JywgJ3B5LTQnKVxyXG5cclxuICAgIC8vUGFyYWdyYXBoXHJcbiAgICBjb25zdCBwYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgIHBhci5jbGFzc05hbWUgPSAndGV4dC1zbGF0ZS0yMDAgdGV4dC1tZCdcclxuICAgIHBhci50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uXHJcblxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHBhcilcclxuXHJcbiAgICByZXR1cm4gY29udGFpbmVyXHJcbiAgfVxyXG4gIC8vUHJvamVjdCBoZWFkZXJcclxuICAvL2Rpc3BsYXkgaW4gdGhlIG1haW4gYm9keSBcclxuICAvL1BlaW9kIGlzIGFuIG9iamVjdCB3aXRoIHBlcmlvZC5zdGFydCBhbmQgcGVyaW9kLmVuZFxyXG4gIGNyZWF0ZVByb2plY3RIZWFkZXIgKHByb2plY3Qpe1xyXG4gICAgLy9NYWluIGNvbnRhaW5lclxyXG4gICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5jcmVhdGVDb250YWluZXIoKVxyXG4gICAgY29udGFpbmVyLmNsYXNzTmFtZSA9ICdmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBiZy1ibHVlLTYwMCBpdGVtcy1jZW50ZXIgdy1mdWxsIHB5LTQgcGwtOCdcclxuICAgIC8vQWRkIE5hbWVcclxuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IHRoaXMuY3JlYXRlSGVhZGluZyhwcm9qZWN0LmdldE5hbWUoKSlcclxuICAgIHByb2plY3RUaXRsZS5jbGFzc0xpc3QuYWRkKCdmb250LWJvbGQnKVxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSlcclxuXHJcbiAgICByZXR1cm4gY29udGFpbmVyXHJcbiAgfVxyXG4gIC8vU2lkZSBiYXJcclxuICBjcmVhdGVTaWRlYmFyICgpIHtcclxuICAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXNpZGUnKVxyXG4gICAgIHNpZGViYXIuY2xhc3NOYW1lID0gJ3AtNCBiZy1ibHVlLTcwMCByb3VuZGVkLW1kIHB0LTE2IGZsZXggZmxleC1jb2wgZ2FwLTInXHJcblxyXG4gICAgIHJldHVybiBzaWRlYmFyXHJcbiAgfVxyXG4gIC8vVXNlciBwcm9maWxlXHJcbiAgY3JlYXRlVXNlclByb2ZpbGUgKHVzZXJOYW1lKSB7XHJcbiAgICAvL1Byb2ZpbGUgY29udGFpbmVyXHJcbiAgICBjb25zdCBwcm9maWxlID0gdGhpcy5jcmVhdGVDb250YWluZXIoKVxyXG4gICAgcHJvZmlsZS5jbGFzc0xpc3QuYWRkKCdmbGV4JywgJ2ZsZXgtcm93JywgJ2p1c3RpZnktZW5kJywgJ2l0ZW1zLWNlbnRlcicsICdnYXAtNCcpXHJcbiAgICBwcm9maWxlLmlkID0gJ3Byb2ZpbGUnXHJcblxyXG4gICAgLy9waWN0dXJlIGltYWdlXHJcbiAgICBjb25zdCBwaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxyXG4gICAgcGljLmlkID0gJ3Byb2ZpbGUtcGljdHVyZSdcclxuICAgIHBpYy5jbGFzc05hbWUgPSAncm91bmRlZC1mdWxsJ1xyXG4gICAgcHJvZmlsZS5hcHBlbmRDaGlsZChwaWMpXHJcblxyXG4gICAgLy91c2VyIG5hbWVcclxuICAgIGNvbnN0IG5hbWUgPSB0aGlzLmNyZWF0ZUhlYWRpbmcodXNlck5hbWUpXHJcbiAgICBwcm9maWxlLnByZXBlbmQobmFtZSlcclxuXHJcbiAgICByZXR1cm4gcHJvZmlsZVxyXG4gIH1cclxuICBkaXNwbGF5Rm9ybSAoaGFzaEZvcm1JZCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihoYXNoRm9ybUlkKS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKVxyXG4gIH1cclxuICBnZXRGb3JtRGF0YSAoaGFzaEZvcm1JZCkge1xyXG4gICAgY29uc3QgZGF0YSA9IFtdXHJcbiAgICAvL0dldCBub2RlIGxpc3RcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYCR7aGFzaEZvcm1JZH0gaW5wdXRgKS5mb3JFYWNoKGVsZW1lbnQgPT57XHJcbiAgICAgIC8vZ2V0IGlucHV0IHZhbHVlcyBhbmQgYWRkIHRvIGRhdGEgYXJyYXlcclxuICAgICAgZGF0YS5wdXNoKGVsZW1lbnQudmFsdWUpXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIGRhdGFcclxuICB9IFxyXG4gIGhpZGVGb3JtKCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXHJcbiAgfVxyXG4gIC8vQXBwZW5kIHRvIERPTVxyXG4gIHJlbmRlciAoY29udGVudCkge1xyXG4gICAgICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKVxyXG4gICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnQpXHJcbiAgICB9XHJcbiAgICBcclxufSIsImltcG9ydCBUYXNrTWFuYWdlciBmcm9tIFwiLi90YXNrX21hbmFnZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3QgZXh0ZW5kcyBUYXNrTWFuYWdlciB7XHJcblxyXG4gICAgLy9Qcm9qZWN0IG9wZW5cclxuICAgICNwcm9qZWN0T3BlbiA9IGZhbHNlXHJcbiAgICAjY29tcGxldGUgPSBmYWxzZVxyXG4gICAgI2Rlc2NyaXB0aW9uID0gJydcclxuICAgICNuYW1lID0nJ1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKClcclxuICAgIH1cclxuICAgIC8vY2xvc2UgcHJvamVjdFxyXG4gICAgY2xvc2UoKXtcclxuICAgICAgICB0aGlzLiNwcm9qZWN0T3BlbiA9IGZhbHNlXHJcbiAgICB9XHJcbiAgICAvL3JldHVybiB2YWx1ZSBvZiBkZXNjcmlwdGlvblxyXG4gICAgZ2V0RGVzY3JpcHRpb24oKXtcclxuICAgICAgICByZXR1cm4gdGhpcy4jZGVzY3JpcHRpb25cclxuICAgIH1cclxuICAgIC8vZ2V0IG5hbWVcclxuICAgIGdldE5hbWUoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy4jbmFtZVxyXG4gICAgfVxyXG4gICAgLy9pcyBjb21wbGV0ZVxyXG4gICAgaXNDb21wbGV0ZSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLiNjb21wbGV0ZVxyXG4gICAgfVxyXG4gICAgLy9DaGVjayBpZiBwcm9qZWN0IGlzIG9wZW5cclxuICAgIGlzT3Blbigpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLiNwcm9qZWN0T3BlblxyXG4gICAgfVxyXG4gICAgLy9NYXJrIGFzIGNvbXBsZXRlXHJcbiAgICBtYXJrQXNDb21wbGV0ZSgpe1xyXG4gICAgICAgIHRoaXMuI2NvbXBsZXRlID0gdHJ1ZVxyXG4gICAgfVxyXG4gICAgLy9NYXJrIGFzIGluY29tcGxldGVcclxuICAgIG1hcmtBc0luY29tcGxldGUoKXtcclxuICAgICAgICBpZih0aGlzLiNjb21wbGV0ZSlcclxuICAgICAgICAgICAgdGhpcy4jY29tcGxldGUgPSBmYWxzZVxyXG4gICAgfVxyXG4gICAgLy9PcGVuIHByb2plY3RcclxuICAgIG9wZW4oKXtcclxuICAgICAgICB0aGlzLiNwcm9qZWN0T3BlbiA9IHRydWVcclxuICAgIH1cclxuICAgIC8vaW5pdGlhbGl6ZSBkZXNjcmlwaW9uXHJcbiAgICBzZXREZXNjcmlwdGlvbihkZXNjcmlwdGlvbil7XHJcbiAgICAgICAgdGhpcy4jZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldCBuYW1lXHJcbiAgICBzZXROYW1lKG5hbWUpe1xyXG4gICAgICAgIHRoaXMuI25hbWUgPSBuYW1lXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4iLCJcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdE1hbmFnZXIge1xyXG4gICAgIC8qXHJcbiAgICBQcm9qZWN0IG1hbmFnZXIgY2xhc3MgcGVyZm9ybXMgb3BlcmF0aW9ucyBvbiBQcm9qZWN0c1xyXG4gICAgKi9cclxuICAgICNwcm9qZWN0cyA9IFtdXHJcbiAgICAjY29tcGxldGVkUHJvamVjdHMgPSBbXVxyXG4gICAgY29uc3RydWN0b3IgKCkge1xyXG5cclxuICAgIH1cclxuICAgIC8vQWRkIHRvIGxpc3RcclxuICAgXHJcbiAgICAvL1VwZGF0ZSBjb21wbGV0ZWQgcHJvamVjdHNcclxuICAgIGFkZFRvQ29tcGxldGVkKHByb2plY3Qpe1xyXG4gICAgICAgIHRoaXMuI2NvbXBsZXRlZFByb2plY3RzLnB1c2gocHJvamVjdClcclxuICAgICAgICB0aGlzLnJlbW92ZVByb2plY3QocHJvamVjdClcclxuICAgIH1cclxuICAgIGFkZFRvUHJvamVjdExpc3QgKG5ld1Byb2plY3QpIHtcclxuICAgICAgICB0aGlzLiNwcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpXHJcbiAgICB9XHJcbiAgIFxyXG4gICAgLy9HZXQgbGlzdCBvZiBjb21wbGV0ZWQgcHJvamVjdHNcclxuICAgIGdldENvbXBsZXRlZCgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLiNjb21wbGV0ZWRQcm9qZWN0c1xyXG4gICAgfVxyXG4gICAgLy9nZXQgcHJvamVjdHNcclxuICAgIGdldFByb2plY3RzKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuI3Byb2plY3RzXHJcbiAgICB9XHJcbiAgICAvL3JlbW92ZSBwcm9qZWN0IGZyb20gbGlzdFxyXG4gICAgcmVtb3ZlUHJvamVjdChwcm9qZWN0KXtcclxuICAgICAgICB0aGlzLiNwcm9qZWN0cyA9IHRoaXMuI3Byb2plY3RzLmZpbHRlcihlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgaWYoZWxlbWVudCA9PT0gcHJvamVjdClcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sge1xyXG4gICAgLypcclxuICAgICAgICBUYXNrIGNsYXNzIGNyZWF0ZSBUYXNrIG9iamVjdHNcclxuICAgICovXHJcblxyXG4gICAgLy9UYXNrLmRlc2NyaXB0aW9uXHJcbiAgICAjZGVzY3JpcHRpb25cclxuXHJcbiAgICAvL1Rhc2suZHVlZGF0ZVxyXG4gICAgI2R1ZURhdGVcclxuICAgICNjb21wbGV0ZSA9IGZhbHNlXHJcblxyXG4gICAgLy9UYXNrLnByaW9yaXR5XHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSl7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlXHJcbiAgICB9XHJcbiAgICAvL0VkaXQgdGFzayBwcm9wZXJ0aWVzXHJcbiAgICBlZGl0KHRpdGxlLGRlc2NyaXB0aW9uLGR1ZURhdGUpe1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZVxyXG4gICAgICAgIHRoaXMuI2Rlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25cclxuICAgICAgICB0aGlzLiNkdWVEYXRlID0gZHVlRGF0ZVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgLy9yZXR1cm4gdmFsdWUgb2YgZGVzY3JpcHRpb25cclxuICAgIGdldERlc2NyaXB0aW9uKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuI2Rlc2NyaXB0aW9uXHJcbiAgICB9XHJcbiAgICAvL3JldHVybiBkdWUgZGF0ZVxyXG4gICAgZ2V0RHVlRGF0ZSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLiNkdWVEYXRlXHJcbiAgICB9XHJcbiAgICAvL0NoZWNrIGlmIGNvbXBsZXRlXHJcbiAgICBpc0NvbXBsZXRlKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuI2NvbXBsZXRlXHJcbiAgICB9XHJcbiAgICAvL01hcmsgYXMgY29tcGxldGVcclxuICAgIG1hcmtBc0NvbXBsZXRlKCl7XHJcbiAgICAgICAgdGhpcy4jY29tcGxldGUgPSB0cnVlXHJcbiAgICB9XHJcbiAgICAvL01hcmsgYXMgaW5jb21wbGV0ZVxyXG4gICAgbWFya0FzSW5jb21wbGV0ZSgpe1xyXG4gICAgICAgIGlmKHRoaXMuI2NvbXBsZXRlKVxyXG4gICAgICAgICAgICB0aGlzLiNjb21wbGV0ZSA9IGZhbHNlXHJcbiAgICB9XHJcbiAgICAvL2luaXRpYWxpemUgZGVzY3JpcGlvblxyXG4gICAgc2V0RGVzY3JpcHRpb24oZGVzY3JpcHRpb24pe1xyXG4gICAgICAgIHRoaXMuI2Rlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25cclxuICAgIH1cclxuICAgIC8vc2V0IGR1ZSBkYXRlXHJcbiAgICBzZXREdWVEYXRlKGR1ZURhdGUpe1xyXG4gICAgICAgIHRoaXMuI2R1ZURhdGUgPSBkdWVEYXRlXHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrTWFuYWdlciB7XHJcbiAgICAvKlxyXG4gICAgVGFzayBtYW5hZ2VyIGNsYXNzIHBlcmZvcm1zIG9wZXJhdGlvbnMgd2l0aCBhbmQgb24gVGFzayBvYmplY3RzXHJcbiAgICBVc2VkIHRvZ2V0aGVyIHdpdGggVGFzayBjbGFzc1xyXG4gICAgKi9cclxuICAgICN0YXNrTGlzdCA9IFtdXHJcbiAgICAjY29tcGxldGVkVGFza3MgPSBbXVxyXG4gICAgY29uc3RydWN0b3IgKCkge1xyXG5cclxuICAgIH1cclxuICAgIC8vQWRkIHRvIGxpc3RcclxuICAgIGFkZFRhc2sodGFzayl7XHJcbiAgICAgICAgdGhpcy4jdGFza0xpc3QucHVzaCh0YXNrKVxyXG4gICAgfVxyXG4gICAgLy9VcGRhdGUgY29tcGxldGVkIHRhc2tzXHJcbiAgICBhZGRUb0NvbXBsZXRlZCh0YXNrKXtcclxuICAgICAgICB0aGlzLiNjb21wbGV0ZWRUYXNrcy5wdXNoKHRhc2spXHJcbiAgICAgICAgdGhpcy5yZW1vdmVUYXNrKHRhc2spXHJcbiAgICB9XHJcbiAgICAvL0dldCBsaXN0IG9mIGNvbXBsZXRlZCB0YXNrc1xyXG4gICAgZ2V0Q29tcGxldGVkKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuI2NvbXBsZXRlZFRhc2tzXHJcbiAgICB9XHJcbiAgICAvL2dldCB0YXNrc1xyXG4gICAgZ2V0VGFza3MoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy4jdGFza0xpc3RcclxuICAgIH1cclxuICAgIC8vcmVtb3ZlIHRhc2sgZnJvbSBsaXN0XHJcbiAgICByZW1vdmVUYXNrKFRhc2spe1xyXG4gICAgICAgIHRoaXMuI3Rhc2tMaXN0ID0gdGhpcy4jdGFza0xpc3QuZmlsdGVyKHRhc2sgPT4ge1xyXG4gICAgICAgICAgICBpZih0YXNrID09PSBUYXNrKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsInZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiA/IChvYmopID0+IChPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKSkgOiAob2JqKSA9PiAob2JqLl9fcHJvdG9fXyk7XG52YXIgbGVhZlByb3RvdHlwZXM7XG4vLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3Rcbi8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuLy8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4vLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3Rcbi8vIG1vZGUgJiAxNjogcmV0dXJuIHZhbHVlIHdoZW4gaXQncyBQcm9taXNlLWxpa2Vcbi8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbl9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG5cdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IHRoaXModmFsdWUpO1xuXHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuXHRpZih0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlKSB7XG5cdFx0aWYoKG1vZGUgJiA0KSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG5cdFx0aWYoKG1vZGUgJiAxNikgJiYgdHlwZW9mIHZhbHVlLnRoZW4gPT09ICdmdW5jdGlvbicpIHJldHVybiB2YWx1ZTtcblx0fVxuXHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuXHR2YXIgZGVmID0ge307XG5cdGxlYWZQcm90b3R5cGVzID0gbGVhZlByb3RvdHlwZXMgfHwgW251bGwsIGdldFByb3RvKHt9KSwgZ2V0UHJvdG8oW10pLCBnZXRQcm90byhnZXRQcm90byldO1xuXHRmb3IodmFyIGN1cnJlbnQgPSBtb2RlICYgMiAmJiB2YWx1ZTsgdHlwZW9mIGN1cnJlbnQgPT0gJ29iamVjdCcgJiYgIX5sZWFmUHJvdG90eXBlcy5pbmRleE9mKGN1cnJlbnQpOyBjdXJyZW50ID0gZ2V0UHJvdG8oY3VycmVudCkpIHtcblx0XHRPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhjdXJyZW50KS5mb3JFYWNoKChrZXkpID0+IChkZWZba2V5XSA9ICgpID0+ICh2YWx1ZVtrZXldKSkpO1xuXHR9XG5cdGRlZlsnZGVmYXVsdCddID0gKCkgPT4gKHZhbHVlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBkZWYpO1xuXHRyZXR1cm4gbnM7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZiA9IHt9O1xuLy8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuLy8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSAoY2h1bmtJZCkgPT4ge1xuXHRyZXR1cm4gUHJvbWlzZS5hbGwoT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5mKS5yZWR1Y2UoKHByb21pc2VzLCBrZXkpID0+IHtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmZba2V5XShjaHVua0lkLCBwcm9taXNlcyk7XG5cdFx0cmV0dXJuIHByb21pc2VzO1xuXHR9LCBbXSkpO1xufTsiLCIvLyBUaGlzIGZ1bmN0aW9uIGFsbG93IHRvIHJlZmVyZW5jZSBhc3luYyBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18udSA9IChjaHVua0lkKSA9PiB7XG5cdC8vIHJldHVybiB1cmwgZm9yIGZpbGVuYW1lcyBiYXNlZCBvbiB0ZW1wbGF0ZVxuXHRyZXR1cm4gXCJcIiArIGNodW5rSWQgKyBcIi5cIiArIFwiOGM1NWY4MGI4YzA3YzIwMjYxMDhcIiArIFwiLmpzXCI7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsInZhciBpblByb2dyZXNzID0ge307XG52YXIgZGF0YVdlYnBhY2tQcmVmaXggPSBcInRvZG8taXN0LS1vbmU6XCI7XG4vLyBsb2FkU2NyaXB0IGZ1bmN0aW9uIHRvIGxvYWQgYSBzY3JpcHQgdmlhIHNjcmlwdCB0YWdcbl9fd2VicGFja19yZXF1aXJlX18ubCA9ICh1cmwsIGRvbmUsIGtleSwgY2h1bmtJZCkgPT4ge1xuXHRpZihpblByb2dyZXNzW3VybF0pIHsgaW5Qcm9ncmVzc1t1cmxdLnB1c2goZG9uZSk7IHJldHVybjsgfVxuXHR2YXIgc2NyaXB0LCBuZWVkQXR0YWNoO1xuXHRpZihrZXkgIT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHNjcmlwdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBzID0gc2NyaXB0c1tpXTtcblx0XHRcdGlmKHMuZ2V0QXR0cmlidXRlKFwic3JjXCIpID09IHVybCB8fCBzLmdldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiKSA9PSBkYXRhV2VicGFja1ByZWZpeCArIGtleSkgeyBzY3JpcHQgPSBzOyBicmVhazsgfVxuXHRcdH1cblx0fVxuXHRpZighc2NyaXB0KSB7XG5cdFx0bmVlZEF0dGFjaCA9IHRydWU7XG5cdFx0c2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5cblx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG5cdFx0c2NyaXB0LnRpbWVvdXQgPSAxMjA7XG5cdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcblx0XHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKTtcblx0XHR9XG5cdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiLCBkYXRhV2VicGFja1ByZWZpeCArIGtleSk7XG5cdFx0c2NyaXB0LnNyYyA9IHVybDtcblx0fVxuXHRpblByb2dyZXNzW3VybF0gPSBbZG9uZV07XG5cdHZhciBvblNjcmlwdENvbXBsZXRlID0gKHByZXYsIGV2ZW50KSA9PiB7XG5cdFx0Ly8gYXZvaWQgbWVtIGxlYWtzIGluIElFLlxuXHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXHRcdHZhciBkb25lRm5zID0gaW5Qcm9ncmVzc1t1cmxdO1xuXHRcdGRlbGV0ZSBpblByb2dyZXNzW3VybF07XG5cdFx0c2NyaXB0LnBhcmVudE5vZGUgJiYgc2NyaXB0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcblx0XHRkb25lRm5zICYmIGRvbmVGbnMuZm9yRWFjaCgoZm4pID0+IChmbihldmVudCkpKTtcblx0XHRpZihwcmV2KSByZXR1cm4gcHJldihldmVudCk7XG5cdH07XG5cdHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgdW5kZWZpbmVkLCB7IHR5cGU6ICd0aW1lb3V0JywgdGFyZ2V0OiBzY3JpcHQgfSksIDEyMDAwMCk7XG5cdHNjcmlwdC5vbmVycm9yID0gb25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHNjcmlwdC5vbmVycm9yKTtcblx0c2NyaXB0Lm9ubG9hZCA9IG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCBzY3JpcHQub25sb2FkKTtcblx0bmVlZEF0dGFjaCAmJiBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG59OyIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJidW5kbGVcIjogMFxufTtcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5mLmogPSAoY2h1bmtJZCwgcHJvbWlzZXMpID0+IHtcblx0XHQvLyBKU09OUCBjaHVuayBsb2FkaW5nIGZvciBqYXZhc2NyaXB0XG5cdFx0dmFyIGluc3RhbGxlZENodW5rRGF0YSA9IF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpID8gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdIDogdW5kZWZpbmVkO1xuXHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSAhPT0gMCkgeyAvLyAwIG1lYW5zIFwiYWxyZWFkeSBpbnN0YWxsZWRcIi5cblxuXHRcdFx0Ly8gYSBQcm9taXNlIG1lYW5zIFwiY3VycmVudGx5IGxvYWRpbmdcIi5cblx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuXHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZih0cnVlKSB7IC8vIGFsbCBjaHVua3MgaGF2ZSBKU1xuXHRcdFx0XHRcdC8vIHNldHVwIFByb21pc2UgaW4gY2h1bmsgY2FjaGVcblx0XHRcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IChpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSBbcmVzb2x2ZSwgcmVqZWN0XSkpO1xuXHRcdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdID0gcHJvbWlzZSk7XG5cblx0XHRcdFx0XHQvLyBzdGFydCBjaHVuayBsb2FkaW5nXG5cdFx0XHRcdFx0dmFyIHVybCA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIF9fd2VicGFja19yZXF1aXJlX18udShjaHVua0lkKTtcblx0XHRcdFx0XHQvLyBjcmVhdGUgZXJyb3IgYmVmb3JlIHN0YWNrIHVud291bmQgdG8gZ2V0IHVzZWZ1bCBzdGFja3RyYWNlIGxhdGVyXG5cdFx0XHRcdFx0dmFyIGVycm9yID0gbmV3IEVycm9yKCk7XG5cdFx0XHRcdFx0dmFyIGxvYWRpbmdFbmRlZCA9IChldmVudCkgPT4ge1xuXHRcdFx0XHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkpIHtcblx0XHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuXHRcdFx0XHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcblx0XHRcdFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIGVycm9yVHlwZSA9IGV2ZW50ICYmIChldmVudC50eXBlID09PSAnbG9hZCcgPyAnbWlzc2luZycgOiBldmVudC50eXBlKTtcblx0XHRcdFx0XHRcdFx0XHR2YXIgcmVhbFNyYyA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuc3JjO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLm1lc3NhZ2UgPSAnTG9hZGluZyBjaHVuayAnICsgY2h1bmtJZCArICcgZmFpbGVkLlxcbignICsgZXJyb3JUeXBlICsgJzogJyArIHJlYWxTcmMgKyAnKSc7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IubmFtZSA9ICdDaHVua0xvYWRFcnJvcic7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IudHlwZSA9IGVycm9yVHlwZTtcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5yZXF1ZXN0ID0gcmVhbFNyYztcblx0XHRcdFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGFbMV0oZXJyb3IpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmwodXJsLCBsb2FkaW5nRW5kZWQsIFwiY2h1bmstXCIgKyBjaHVua0lkLCBjaHVua0lkKTtcblx0XHRcdFx0fSBlbHNlIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdFx0XHR9XG5cdFx0fVxufTtcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblxufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua3RvZG9faXN0X29uZVwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmt0b2RvX2lzdF9vbmVcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuLi9zdHlsZXMvc3R5bGVzLmNzcydcclxuaW1wb3J0IERPTU1hbmFnZXIgZnJvbSAnLi9kb21fbWFuYWdlci5qcydcclxuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0LmpzJ1xyXG5pbXBvcnQgUHJvamVjdE1hbmFnZXIgZnJvbSAnLi9wcm9qZWN0X21hbmFnZXInXHJcbmltcG9ydCBUYXNrIGZyb20gJy4vdGFzaydcclxuaW1wb3J0IFRhc2tNYW5hZ2VyIGZyb20gJy4vdGFza19tYW5hZ2VyJ1xyXG5cclxuY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KClcclxuY29uc3QgZG9tTWFuYWdlciA9IG5ldyBET01NYW5hZ2VyKClcclxuY29uc3QgcHJvamVjdE1hbmFnZXIgPSBuZXcgUHJvamVjdE1hbmFnZXIoKVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheVByb2plY3RDcmVkZW50aWFscyhwcm9qZWN0KXtcclxuICAgIGNvbnN0IHByb2plY3RIZWFkZXIgPSBkb21NYW5hZ2VyLmNyZWF0ZVByb2plY3RIZWFkZXIocHJvamVjdClcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEhlYWRlcilcclxuXHJcblxyXG4gICAgICAgIC8vUHJvamVjdCBkZXNjcmlwdGlvbiBhbmQgbmV3IHRhc2sgYnRuXHJcbiAgICAgICAgY29uc3QgZGVzY05CdG5Db250YWluZXIgPSBkb21NYW5hZ2VyLmNyZWF0ZUNvbnRhaW5lcigpXHJcbiAgICAgICAgZGVzY05CdG5Db250YWluZXIuY2xhc3NOYW1lID0gJ2ZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciB3LWZ1bGwnXHJcbiAgICAgICAgLy9ERVNDUklQVElPTlxyXG4gICAgICAgIGNvbnN0IHByb2plY3REZXNjcmlwdGlvbiA9IGRvbU1hbmFnZXIuY3JlYXRlUHJvamVjdERlc2NyaXB0aW9uKHByb2plY3QuZ2V0RGVzY3JpcHRpb24oKSlcclxuICAgICAgICAvL0Rpc3BsYXkgZGVzY3JpcHRpb25cclxuICAgICAgICBkZXNjTkJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0RGVzY3JpcHRpb24pXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gIE5ldyB0YXNrIGJ1dHRvblxyXG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ05ldyBUYXNrJ1xyXG4gICAgICAgIGJ1dHRvbi5jbGFzc05hbWUgPSAnYmctc2xhdGUtMzAwIHRleHQtYmx1ZS03MDAgcHktMiBweC00IHJvdW5kZWQtbWQgaG92ZXI6Ymctc2xhdGUtMTAwJ1xyXG4gICAgICAgIGJ1dHRvbi5pZCA9ICduZXctdGFzay1idG4nXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9EaXNwbGF5IGJ0blxyXG4gICAgICAgIGRlc2NOQnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbilcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY05CdG5Db250YWluZXIpXHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5VGFza3NDb250YWluZXIoKXtcclxuICAgICAvL1Rhc2tzIGNvbnRhaW5lclxyXG4gICAgIGNvbnN0IHRhc2tzQ29udGFpbmVyID0gZG9tTWFuYWdlci5jcmVhdGVDb250YWluZXIoKVxyXG4gICAgIHRhc2tzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3ctZnVsbCcsICdiZy1ibHVlLTYwMCcsICdncmlkJywgJ2dyaWQtMicsICdnYXAtNCcpXHJcbiAgICAgdGFza3NDb250YWluZXIuaWQgPSAndGFzay1jb250YWluZXInXHJcblxyXG4gICAgIC8vTm8gdGFza3MgdG8gZGlzcGxheVxyXG4gICAgIGNvbnN0IHBhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgIHBhci5jbGFzc05hbWUgPSAndGV4dC1zbGF0ZS0yMDAgdGV4dC1jZW50ZXIgdGV4dC0zeGwgZm9udC1tZWRpdW0nXHJcbiAgICAgcGFyLmlkID0gJ25vLXRhc2tzJ1xyXG4gICAgIHBhci50ZXh0Q29udGVudCA9ICdObyBUYXNrcyBMaXN0ZWQgSGVyZSdcclxuICAgICB0YXNrc0NvbnRhaW5lci5hcHBlbmRDaGlsZChwYXIpXHJcblxyXG4gICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrc0NvbnRhaW5lcilcclxufVxyXG4vLyBDcmVhdGUgYW5kIGRpc3BsYXkgaGVhZGVyXHJcbmNvbnN0IGhlYWRlciA9IGRvbU1hbmFnZXIuY3JlYXRlSGVhZGVyKClcclxuICAgIGNvbnN0IGxvZ28gPSBkb21NYW5hZ2VyLmNyZWF0ZUxvZ28oJ1BsYW5zZW4nKVxyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGxvZ28pXHJcbiAgICBkb2N1bWVudC5ib2R5LnByZXBlbmQoaGVhZGVyKVxyXG5cclxuLy9zaWRlYmFyXHJcbmNvbnN0IHNpZGViYXIgPSBkb21NYW5hZ2VyLmNyZWF0ZVNpZGViYXIoKVxyXG4gICAgZG9tTWFuYWdlci5yZW5kZXIoc2lkZWJhcilcclxuICAgIHNpZGViYXIuaWQgPSAnbWFpbi1zaWRlLWJhcidcclxuXHJcbi8vQ29udGVudCBjb250YWluZXJcclxuY29uc3QgY29udGFpbmVyID0gZG9tTWFuYWdlci5jcmVhdGVDb250YWluZXIoKVxyXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2JnLWJsdWUtNzAwJywgJ2ZsZXgnLCdmbGV4LWNvbCcsICdpdGVtcy1zdGFydCcsICdqdXN0aWZ5LXN0YXJ0JywgJ2dhcC0yJylcclxuICAgIGNvbnRhaW5lci5pZCA9ICdjb250ZW50LWNvbnRhaW5lcidcclxuICAgIGRvbU1hbmFnZXIucmVuZGVyKGNvbnRhaW5lcilcclxuXHJcbi8vRm9vdGVyXHJcbmNvbnN0IGZvb3RlciA9IGRvbU1hbmFnZXIuY3JlYXRlRm9vdGVyKClcclxuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoZm9vdGVyKVxyXG5cclxuLy9Vc2VyIHByb2ZpbGVcclxuY29uc3QgcHJvZmlsZSA9IGRvbU1hbmFnZXIuY3JlYXRlVXNlclByb2ZpbGUoJ1RoZSBBcmNoaXRlY2gnKVxyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHByb2ZpbGUpXHJcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnZmxleCcsICdmbGV4LXJvdycsICdqdXN0aWZ5LWJldHdlZW4nLCAnaXRlbXMtY2VudGVyJylcclxuXHJcbiAgICAvL0ltcG9ydCBwcm9maWxlIHBpY1xyXG4gICAgaW1wb3J0KCcuLi9pbWFnZXMvcHJvZmlsZS1waWMucG5nJykudGhlbigoe2RlZmF1bHQ6cGljfSkgPT57XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2ZpbGUtcGljdHVyZScpLnNyYyA9IHBpY1xyXG4gICAgfSkuY2F0Y2goKGVycm9yKT0+Y29uc29sZS5lcnJvcihgRXJyb3Igb2N1dXJlZCB3aGlsZSBpbXBvcnRpbmcgcHJvZmlsZSBwaWM6ICR7ZXJyb3J9YCkpXHJcblxyXG4vL1Byb2plY3RzIGhlYWRlclxyXG5jb25zdCBwcm9qZWN0c0hlYWRlciA9IGRvbU1hbmFnZXIuY3JlYXRlQ29udGFpbmVyKClcclxuICAgIHByb2plY3RzSGVhZGVyLmNsYXNzTmFtZSA9ICdmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gYmctYmx1ZS02MDAgcHgtNCBweS0yJ1xyXG4gICAgcHJvamVjdHNIZWFkZXIuaWQgPSAncHJvamVjdHMtaGVhZGVyJ1xyXG5cclxuICAgIC8vSGVhZGluZ1xyXG4gICAgY29uc3QgaGVhZGluZyA9IGRvbU1hbmFnZXIuY3JlYXRlSGVhZGluZygnTXkgUHJvamVjdHMnKVxyXG4gICAgaGVhZGluZy5jbGFzc0xpc3QuYWRkKCdmb250LW1lZGl1bScsICd3LWZ1bGwnKVxyXG4gICAgcHJvamVjdHNIZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGluZylcclxuICAgIFxyXG4gICAgLy8gTmV3IHByb2plY3QgQWRkIGJ1dHRvblxyXG4gICAgY29uc3QgYWRkQnRuID0gZG9tTWFuYWdlci5jcmVhdGVBZGRCdXR0b24oKVxyXG4gICAgYWRkQnRuLmlkID0gJ25ldy1wcm9qZWN0LWJ0bidcclxuICAgIHByb2plY3RzSGVhZGVyLmFwcGVuZENoaWxkKGFkZEJ0bilcclxuICAgIFxyXG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChwcm9qZWN0c0hlYWRlcikgXHJcblxyXG4gICAgLy9DcmVhdGUgZGVmYXVsdCBQcm9qZWN0XHJcbiAgICBjb25zdCBkZWZhdWx0UHJvamVjdCA9IG5ldyBQcm9qZWN0KClcclxuICAgICAgICBkZWZhdWx0UHJvamVjdC5zZXREZXNjcmlwdGlvbignVG9kYXlcXCdzIEFjdGl2aXRpZXMnKVxyXG4gICAgICAgIGRlZmF1bHRQcm9qZWN0LnNldE5hbWUoJ1RvZGF5JylcclxuICAgICAgICBwcm9qZWN0TWFuYWdlci5hZGRUb1Byb2plY3RMaXN0KGRlZmF1bHRQcm9qZWN0KVxyXG5cclxuICAgICAgICAvL0RlZmF1bHQgUHJvamVjdCBDb250YWluZXJcclxuICAgICAgICBjb25zdCBkZWZhdWx0UHJvamVjdENvbnRhaW5lciA9IGRvbU1hbmFnZXIuY3JlYXRlUHJvamVjdENvbnRhaW5lcihkZWZhdWx0UHJvamVjdC5nZXROYW1lKCkpXHJcbiAgICAgICAgc2lkZWJhci5hcHBlbmRDaGlsZChkZWZhdWx0UHJvamVjdENvbnRhaW5lcilcclxuXHJcbiAgICAvL0Rpc3BsYXkgZGVmYXVsdCBwcm9qZWN0XHJcbiAgICAgICAgZGlzcGxheVByb2plY3RDcmVkZW50aWFscyhkZWZhdWx0UHJvamVjdClcclxuICAgICAgICBkaXNwbGF5VGFza3NDb250YWluZXIoKVxyXG4gICAgICAgIFxyXG4gICAgICAgXHJcblxyXG5cclxuICAgIFxyXG4vL0NyZWF0ZSBuZXcgUHJvamVjdFxyXG5cclxuYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+e1xyXG4gICAgLy9wcm9qZWN0IG1hbmFnZXIgY3JlYXRlIG5ldyBwcm9qZWN0XHJcbiAgICBkb21NYW5hZ2VyLmRpc3BsYXlGb3JtKCcjcHJvamVjdC1mb3JtJylcclxuICAgIC8vQWRkIGV2ZW50IGxpc3RlbmVyIHRvIGZvcm1cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0jcHJvamVjdC1mb3JtJykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PntcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgLy9HZXQgZGF0YVxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBkb21NYW5hZ2VyLmdldEZvcm1EYXRhKCcjcHJvamVjdC1mb3JtJylcclxuICAgICAgICAvL0NyZWF0ZSBuZXcgUHJvamVjdFxyXG4gICAgICAgIHByb2plY3Quc2V0TmFtZShkYXRhWzBdKVxyXG4gICAgICAgIHByb2plY3Quc2V0RGVzY3JpcHRpb24oZGF0YVsxXSlcclxuICAgICAgICBcclxuICAgICAgICAvL1Byb2plY3QgY29udGFpbmVyXHJcbiAgICAgICAgY29uc3QgbmV3UHJvamVjQ29udGFpbmVyID0gZG9tTWFuYWdlci5jcmVhdGVQcm9qZWN0Q29udGFpbmVyKHByb2plY3QuZ2V0TmFtZSgpKVxyXG4gICAgICAgICAgICBzaWRlYmFyLmFwcGVuZENoaWxkKG5ld1Byb2plY0NvbnRhaW5lcilcclxuXHJcbiAgICAgICAgLy9BZGQgdG8gcHJvamVjdCBsaXN0c1xyXG4gICAgICAgICAgICBwcm9qZWN0TWFuYWdlci5hZGRUb1Byb2plY3RMaXN0KHByb2plY3QpXHJcbiAgICAgICAgLy9oaWRlIHByb2plY3QgZm9ybSBvbiBzdWJtaXRcclxuICAgICAgICAgICAgZG9tTWFuYWdlci5oaWRlRm9ybSgpXHJcblxyXG4gICAgICAgICAgICBcclxuICAgIH0pXHJcbn0pXHJcbi8vX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xyXG4vLyBDUkVBVCBOZXcgdGFza3MgVEFTS1NcclxuLyoqXHJcbiAqIERpc3BsYXkgdGFzayBkZXRhaWxzIGZvcm1cclxuICogR2V0IHRhc2tzIGRldGFpbHMgZnJvbSB0aGUgZm9ybVxyXG4gKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb24gVGFzayBPYmplY3RcclxuICogQWRkIHRhc2sgdG8gcHJvamVjdCB0YXNrIGxpc3RcclxuICogY2xvc2UgdGFzayBmb3JtIG9uIHN1Ym1pdFxyXG4qL1xyXG4vL0Rpc3BsYXkgZm9ybVxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXRhc2stYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcclxuICAgIGRvbU1hbmFnZXIuZGlzcGxheUZvcm0oJyN0YXNrLWZvcm0nKVxyXG59KVxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtI3Rhc2stZm9ybScpLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PntcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgLy9nZXQgZGF0YVxyXG4gICAgY29uc3QgZGF0YSA9IGRvbU1hbmFnZXIuZ2V0Rm9ybURhdGEoJyN0YXNrLWZvcm0nKVxyXG4gICAgXHJcbiAgICAvLyBDcmVhdGUgbmV3IHRhc2tcclxuICAgIGNvbnN0IHRhc2sgPSBuZXcgVGFzayhkYXRhWzBdKVxyXG4gICAgdGFzay5zZXREZXNjcmlwdGlvbihbZGF0YVsxXV0pXHJcbiAgICB0YXNrLnNldER1ZURhdGUoZGF0YVsyXSlcclxuXHJcbiAgICAvL0FkZCAgdGFzayB0byBwcm9qZWN0IHRhc2sgbGlzdFxyXG4gICAgcHJvamVjdC5hZGRUYXNrKHRhc2spXHJcbiAgICBcclxuICAgIC8vY2xvc2VGb3JtXHJcbiAgICBkb21NYW5hZ2VyLmhpZGVGb3JtKCkgICBcclxuICAgIGNvbnNvbGUubG9nKHByb2plY3QuZ2V0VGFza3MoKSlcclxufSlcclxuICAgIFxyXG4gICAgXHJcbi8qKlxyXG4gKiBVbml2ZXJzYWxseSBoaWRlIGZvcm1zIFxyXG4gKi9cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uW3R5cGU9YnV0dG9uXScpLmZvckVhY2goXHJcbiAgICBidXR0b24gPT57XHJcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XHJcbiAgICAgICAgICAgIGRvbU1hbmFnZXIuaGlkZUZvcm0oKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG4pXHJcblxyXG4gICAgXHJcbiAgICBcclxuXHJcblxyXG4gICAgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9