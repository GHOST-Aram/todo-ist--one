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
    const projectTitle = this.createHeading(project.name)
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


class Project extends _task_manager__WEBPACK_IMPORTED_MODULE_0__["default"] {

    //Project open
    #projectOpen = false
    #complete = false
    #description = ''
    constructor(name){
        super()
        this.name = name
    }
    //close project
    close(){
        this.#projectOpen = false
    }
    //return value of description
    getDescription(){
        return this.#description
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
    const defaultProject = new _project_js__WEBPACK_IMPORTED_MODULE_2__["default"]('Today')
        defaultProject.setDescription('Today\'s Activities')
        projectManager.addToProjectList(defaultProject)

        //Default Project Container
        const defaultProjectContainer = domManager.createProjectContainer(defaultProject.name)
        sidebar.appendChild(defaultProjectContainer)

    //Display default project
        displayProjectCredentials(defaultProject)
        displayTasksContainer()
        
       


    
//Create new Project
window.addEventListener('load', (e) =>{
    addBtn.addEventListener('click', (e) =>{
        //project manager create new project
        domManager.displayForm('#project-form')
        //Close form on click
        document.querySelector('#hide-project-form').addEventListener('click', () =>{
            domManager.hideForm('#project-form')
        })
        //Add event listener to form
        document.querySelector('form#project-form').addEventListener('submit', (event) =>{
            event.preventDefault()
            //Get data
            const data = domManager.getFormData('#project-form')
            //Create new Project
            const project = new _project_js__WEBPACK_IMPORTED_MODULE_2__["default"](data[0])
                project.setDescription(data[1])
            
            //Project container
            const newProjecContainer = domManager.createProjectContainer(project.name)
                sidebar.appendChild(newProjecContainer)

            //Add to project lists
                projectManager.addToProjectList(project)
            //hide project form
                domManager.hideForm('#project-form')
            })
        })
        //Close form

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
                const data = domManager.getFormData('#task-form')
    
                //New task
                const task = new _task__WEBPACK_IMPORTED_MODULE_4__["default"](data[0])
                task.setDescription([data[1]])
                task.setDueDate(data[2])
    
                //Add to task list
                const taskManager = new _task_manager__WEBPACK_IMPORTED_MODULE_5__["default"]()
                taskManager.addTask(task)
    
                //closeForm
                domManager.hideForm('#task-form')
            })
        })
        
    })
    console.log(project.getTasks())

   
    

    
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFZLFdBQVcsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sT0FBTyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxPQUFPLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLE1BQU0sTUFBTSxpQkFBaUIsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sT0FBTyxZQUFZLFdBQVcsVUFBVSxNQUFNLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxPQUFPLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sTUFBTSxLQUFLLFVBQVUsT0FBTyxRQUFRLE1BQU0sWUFBWSxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sTUFBTSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sYUFBYSxNQUFNLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFh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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDdkNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDcERlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Q7V0FDdEQsc0NBQXNDLGlFQUFpRTtXQUN2RztXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7Ozs7O1dDUkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NKQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHVCQUF1Qiw0QkFBNEI7V0FDbkQ7V0FDQTtXQUNBO1dBQ0EsaUJBQWlCLG9CQUFvQjtXQUNyQztXQUNBLG1HQUFtRyxZQUFZO1dBQy9HO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxtRUFBbUUsaUNBQWlDO1dBQ3BHO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ3hDQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQzs7V0FFakM7V0FDQTtXQUNBO1dBQ0EsS0FBSztXQUNMLGVBQWU7V0FDZjtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU07V0FDTjtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7V0NyRkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTZCO0FBQ1k7QUFDUDtBQUNZO0FBQ3JCO0FBQ2U7QUFDeEM7QUFDQSx1QkFBdUIsdURBQVU7QUFDakMsMkJBQTJCLHdEQUFjO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDhMQUFtQyxRQUFRLFlBQVk7QUFDM0Q7QUFDQSxLQUFLLDZFQUE2RSxNQUFNO0FBQ3hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLG1EQUFPO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLG1EQUFPO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLDZDQUFJO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLHFEQUFXO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8taXN0LS1vbmUvLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1pc3QtLW9uZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1pc3QtLW9uZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby1pc3QtLW9uZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8taXN0LS1vbmUvLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3M/ZTQ1YiIsIndlYnBhY2s6Ly90b2RvLWlzdC0tb25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8taXN0LS1vbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8taXN0LS1vbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1pc3QtLW9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWlzdC0tb25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1pc3QtLW9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8taXN0LS1vbmUvLi9zcmMvc2NyaXB0cy9kb21fbWFuYWdlci5qcyIsIndlYnBhY2s6Ly90b2RvLWlzdC0tb25lLy4vc3JjL3NjcmlwdHMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWlzdC0tb25lLy4vc3JjL3NjcmlwdHMvcHJvamVjdF9tYW5hZ2VyLmpzIiwid2VicGFjazovL3RvZG8taXN0LS1vbmUvLi9zcmMvc2NyaXB0cy90YXNrLmpzIiwid2VicGFjazovL3RvZG8taXN0LS1vbmUvLi9zcmMvc2NyaXB0cy90YXNrX21hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1pc3QtLW9uZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWlzdC0tb25lL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8taXN0LS1vbmUvd2VicGFjay9ydW50aW1lL2NyZWF0ZSBmYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1pc3QtLW9uZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1pc3QtLW9uZS93ZWJwYWNrL3J1bnRpbWUvZW5zdXJlIGNodW5rIiwid2VicGFjazovL3RvZG8taXN0LS1vbmUvd2VicGFjay9ydW50aW1lL2dldCBqYXZhc2NyaXB0IGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovL3RvZG8taXN0LS1vbmUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWlzdC0tb25lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1pc3QtLW9uZS93ZWJwYWNrL3J1bnRpbWUvbG9hZCBzY3JpcHQiLCJ3ZWJwYWNrOi8vdG9kby1pc3QtLW9uZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8taXN0LS1vbmUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1pc3QtLW9uZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvLWlzdC0tb25lL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWlzdC0tb25lLy4vc3JjL3NjcmlwdHMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy90b2RvLWJnLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qXFxyXFxuISB0YWlsd2luZGNzcyB2My4yLjcgfCBNSVQgTGljZW5zZSB8IGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tXFxyXFxuKi9cXHJcXG5cXHJcXG4vKlxcclxcbjEuIFByZXZlbnQgcGFkZGluZyBhbmQgYm9yZGVyIGZyb20gYWZmZWN0aW5nIGVsZW1lbnQgd2lkdGguIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzQpXFxyXFxuMi4gQWxsb3cgYWRkaW5nIGEgYm9yZGVyIHRvIGFuIGVsZW1lbnQgYnkganVzdCBhZGRpbmcgYSBib3JkZXItd2lkdGguIChodHRwczovL2dpdGh1Yi5jb20vdGFpbHdpbmRjc3MvdGFpbHdpbmRjc3MvcHVsbC8xMTYpXFxyXFxuKi9cXHJcXG5cXHJcXG4qLFxcclxcbjo6YmVmb3JlLFxcclxcbjo6YWZ0ZXIge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIC8qIDEgKi9cXHJcXG4gIGJvcmRlci13aWR0aDogMDtcXHJcXG4gIC8qIDIgKi9cXHJcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuICAvKiAyICovXFxyXFxuICBib3JkZXItY29sb3I6ICNlNWU3ZWI7XFxyXFxuICAvKiAyICovXFxyXFxufVxcclxcblxcclxcbjo6YmVmb3JlLFxcclxcbjo6YWZ0ZXIge1xcclxcbiAgLS10dy1jb250ZW50OiAnJztcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4xLiBVc2UgYSBjb25zaXN0ZW50IHNlbnNpYmxlIGxpbmUtaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXHJcXG4yLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cXHJcXG4zLiBVc2UgYSBtb3JlIHJlYWRhYmxlIHRhYiBzaXplLlxcclxcbjQuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgYHNhbnNgIGZvbnQtZmFtaWx5IGJ5IGRlZmF1bHQuXFxyXFxuNS4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBgc2Fuc2AgZm9udC1mZWF0dXJlLXNldHRpbmdzIGJ5IGRlZmF1bHQuXFxyXFxuKi9cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxyXFxuICAvKiAxICovXFxyXFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxyXFxuICAvKiAyICovXFxyXFxuICAtbW96LXRhYi1zaXplOiA0O1xcclxcbiAgLyogMyAqL1xcclxcbiAgLW8tdGFiLXNpemU6IDQ7XFxyXFxuICAgICB0YWItc2l6ZTogNDtcXHJcXG4gIC8qIDMgKi9cXHJcXG4gIGZvbnQtZmFtaWx5OiB1aS1zYW5zLXNlcmlmLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBBcmlhbCwgXFxcIk5vdG8gU2Fuc1xcXCIsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiLCBcXFwiTm90byBDb2xvciBFbW9qaVxcXCI7XFxyXFxuICAvKiA0ICovXFxyXFxuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IG5vcm1hbDtcXHJcXG4gIC8qIDUgKi9cXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4xLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuMi4gSW5oZXJpdCBsaW5lLWhlaWdodCBmcm9tIGBodG1sYCBzbyB1c2VycyBjYW4gc2V0IHRoZW0gYXMgYSBjbGFzcyBkaXJlY3RseSBvbiB0aGUgYGh0bWxgIGVsZW1lbnQuXFxyXFxuKi9cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIC8qIDEgKi9cXHJcXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xcclxcbiAgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbjEuIEFkZCB0aGUgY29ycmVjdCBoZWlnaHQgaW4gRmlyZWZveC5cXHJcXG4yLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBvZiBib3JkZXIgY29sb3IgaW4gRmlyZWZveC4gKGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTE5MDY1NSlcXHJcXG4zLiBFbnN1cmUgaG9yaXpvbnRhbCBydWxlcyBhcmUgdmlzaWJsZSBieSBkZWZhdWx0LlxcclxcbiovXFxyXFxuXFxyXFxuaHIge1xcclxcbiAgaGVpZ2h0OiAwO1xcclxcbiAgLyogMSAqL1xcclxcbiAgY29sb3I6IGluaGVyaXQ7XFxyXFxuICAvKiAyICovXFxyXFxuICBib3JkZXItdG9wLXdpZHRoOiAxcHg7XFxyXFxuICAvKiAzICovXFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxyXFxuKi9cXHJcXG5cXHJcXG5hYmJyOndoZXJlKFt0aXRsZV0pIHtcXHJcXG4gIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcclxcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuUmVtb3ZlIHRoZSBkZWZhdWx0IGZvbnQgc2l6ZSBhbmQgd2VpZ2h0IGZvciBoZWFkaW5ncy5cXHJcXG4qL1xcclxcblxcclxcbmgxLFxcclxcbmgyLFxcclxcbmgzLFxcclxcbmg0LFxcclxcbmg1LFxcclxcbmg2IHtcXHJcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcblJlc2V0IGxpbmtzIHRvIG9wdGltaXplIGZvciBvcHQtaW4gc3R5bGluZyBpbnN0ZWFkIG9mIG9wdC1vdXQuXFxyXFxuKi9cXHJcXG5cXHJcXG5hIHtcXHJcXG4gIGNvbG9yOiBpbmhlcml0O1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbkFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBFZGdlIGFuZCBTYWZhcmkuXFxyXFxuKi9cXHJcXG5cXHJcXG5iLFxcclxcbnN0cm9uZyB7XFxyXFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbjEuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgYG1vbm9gIGZvbnQgZmFtaWx5IGJ5IGRlZmF1bHQuXFxyXFxuMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiovXFxyXFxuXFxyXFxuY29kZSxcXHJcXG5rYmQsXFxyXFxuc2FtcCxcXHJcXG5wcmUge1xcclxcbiAgZm9udC1mYW1pbHk6IHVpLW1vbm9zcGFjZSwgU0ZNb25vLVJlZ3VsYXIsIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCBcXFwiTGliZXJhdGlvbiBNb25vXFxcIiwgXFxcIkNvdXJpZXIgTmV3XFxcIiwgbW9ub3NwYWNlO1xcclxcbiAgLyogMSAqL1xcclxcbiAgZm9udC1zaXplOiAxZW07XFxyXFxuICAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuKi9cXHJcXG5cXHJcXG5zbWFsbCB7XFxyXFxuICBmb250LXNpemU6IDgwJTtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5QcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiovXFxyXFxuXFxyXFxuc3ViLFxcclxcbnN1cCB7XFxyXFxuICBmb250LXNpemU6IDc1JTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG5zdWIge1xcclxcbiAgYm90dG9tOiAtMC4yNWVtO1xcclxcbn1cXHJcXG5cXHJcXG5zdXAge1xcclxcbiAgdG9wOiAtMC41ZW07XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuMS4gUmVtb3ZlIHRleHQgaW5kZW50YXRpb24gZnJvbSB0YWJsZSBjb250ZW50cyBpbiBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTk5OTA4OCwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTIwMTI5NylcXHJcXG4yLiBDb3JyZWN0IHRhYmxlIGJvcmRlciBjb2xvciBpbmhlcml0YW5jZSBpbiBhbGwgQ2hyb21lIGFuZCBTYWZhcmkuIChodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD05MzU3MjksIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTUwMTYpXFxyXFxuMy4gUmVtb3ZlIGdhcHMgYmV0d2VlbiB0YWJsZSBib3JkZXJzIGJ5IGRlZmF1bHQuXFxyXFxuKi9cXHJcXG5cXHJcXG50YWJsZSB7XFxyXFxuICB0ZXh0LWluZGVudDogMDtcXHJcXG4gIC8qIDEgKi9cXHJcXG4gIGJvcmRlci1jb2xvcjogaW5oZXJpdDtcXHJcXG4gIC8qIDIgKi9cXHJcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxyXFxuICAvKiAzICovXFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcclxcbjMuIFJlbW92ZSBkZWZhdWx0IHBhZGRpbmcgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiovXFxyXFxuXFxyXFxuYnV0dG9uLFxcclxcbmlucHV0LFxcclxcbm9wdGdyb3VwLFxcclxcbnNlbGVjdCxcXHJcXG50ZXh0YXJlYSB7XFxyXFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXHJcXG4gIC8qIDEgKi9cXHJcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXHJcXG4gIC8qIDEgKi9cXHJcXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xcclxcbiAgLyogMSAqL1xcclxcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxyXFxuICAvKiAxICovXFxyXFxuICBjb2xvcjogaW5oZXJpdDtcXHJcXG4gIC8qIDEgKi9cXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIC8qIDIgKi9cXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICAvKiAzICovXFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlIGFuZCBGaXJlZm94LlxcclxcbiovXFxyXFxuXFxyXFxuYnV0dG9uLFxcclxcbnNlbGVjdCB7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4xLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcclxcbjIuIFJlbW92ZSBkZWZhdWx0IGJ1dHRvbiBzdHlsZXMuXFxyXFxuKi9cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxuW3R5cGU9J2J1dHRvbiddLFxcclxcblt0eXBlPSdyZXNldCddLFxcclxcblt0eXBlPSdzdWJtaXQnXSB7XFxyXFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXHJcXG4gIC8qIDEgKi9cXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgLyogMiAqL1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcXHJcXG4gIC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5Vc2UgdGhlIG1vZGVybiBGaXJlZm94IGZvY3VzIHN0eWxlIGZvciBhbGwgZm9jdXNhYmxlIGVsZW1lbnRzLlxcclxcbiovXFxyXFxuXFxyXFxuOi1tb3otZm9jdXNyaW5nIHtcXHJcXG4gIG91dGxpbmU6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuUmVtb3ZlIHRoZSBhZGRpdGlvbmFsIGA6aW52YWxpZGAgc3R5bGVzIGluIEZpcmVmb3guIChodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9nZWNrby1kZXYvYmxvYi8yZjllYWNkOWQzZDk5NWM5MzdiNDI1MWE1NTU3ZDk1ZDQ5NGM5YmUxL2xheW91dC9zdHlsZS9yZXMvZm9ybXMuY3NzI0w3MjgtTDczNylcXHJcXG4qL1xcclxcblxcclxcbjotbW96LXVpLWludmFsaWQge1xcclxcbiAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5BZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSBhbmQgRmlyZWZveC5cXHJcXG4qL1xcclxcblxcclxcbnByb2dyZXNzIHtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5Db3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBTYWZhcmkuXFxyXFxuKi9cXHJcXG5cXHJcXG46Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxyXFxuOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4xLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXHJcXG4yLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXHJcXG4qL1xcclxcblxcclxcblt0eXBlPSdzZWFyY2gnXSB7XFxyXFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcXHJcXG4gIC8qIDEgKi9cXHJcXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4O1xcclxcbiAgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcblJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXHJcXG4qL1xcclxcblxcclxcbjo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxyXFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXHJcXG4yLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxyXFxuKi9cXHJcXG5cXHJcXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXHJcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcclxcbiAgLyogMSAqL1xcclxcbiAgZm9udDogaW5oZXJpdDtcXHJcXG4gIC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5BZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXHJcXG4qL1xcclxcblxcclxcbnN1bW1hcnkge1xcclxcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcblJlbW92ZXMgdGhlIGRlZmF1bHQgc3BhY2luZyBhbmQgYm9yZGVyIGZvciBhcHByb3ByaWF0ZSBlbGVtZW50cy5cXHJcXG4qL1xcclxcblxcclxcbmJsb2NrcXVvdGUsXFxyXFxuZGwsXFxyXFxuZGQsXFxyXFxuaDEsXFxyXFxuaDIsXFxyXFxuaDMsXFxyXFxuaDQsXFxyXFxuaDUsXFxyXFxuaDYsXFxyXFxuaHIsXFxyXFxuZmlndXJlLFxcclxcbnAsXFxyXFxucHJlIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuZmllbGRzZXQge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxubGVnZW5kIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbm9sLFxcclxcbnVsLFxcclxcbm1lbnUge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuUHJldmVudCByZXNpemluZyB0ZXh0YXJlYXMgaG9yaXpvbnRhbGx5IGJ5IGRlZmF1bHQuXFxyXFxuKi9cXHJcXG5cXHJcXG50ZXh0YXJlYSB7XFxyXFxuICByZXNpemU6IHZlcnRpY2FsO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbjEuIFJlc2V0IHRoZSBkZWZhdWx0IHBsYWNlaG9sZGVyIG9wYWNpdHkgaW4gRmlyZWZveC4gKGh0dHBzOi8vZ2l0aHViLmNvbS90YWlsd2luZGxhYnMvdGFpbHdpbmRjc3MvaXNzdWVzLzMzMDApXFxyXFxuMi4gU2V0IHRoZSBkZWZhdWx0IHBsYWNlaG9sZGVyIGNvbG9yIHRvIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBncmF5IDQwMCBjb2xvci5cXHJcXG4qL1xcclxcblxcclxcbmlucHV0OjotbW96LXBsYWNlaG9sZGVyLCB0ZXh0YXJlYTo6LW1vei1wbGFjZWhvbGRlciB7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbiAgLyogMSAqL1xcclxcbiAgY29sb3I6ICM5Y2EzYWY7XFxyXFxuICAvKiAyICovXFxyXFxufVxcclxcblxcclxcbmlucHV0OjpwbGFjZWhvbGRlcixcXHJcXG50ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG4gIC8qIDEgKi9cXHJcXG4gIGNvbG9yOiAjOWNhM2FmO1xcclxcbiAgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcblNldCB0aGUgZGVmYXVsdCBjdXJzb3IgZm9yIGJ1dHRvbnMuXFxyXFxuKi9cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxuW3JvbGU9XFxcImJ1dHRvblxcXCJdIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5NYWtlIHN1cmUgZGlzYWJsZWQgYnV0dG9ucyBkb24ndCBnZXQgdGhlIHBvaW50ZXIgY3Vyc29yLlxcclxcbiovXFxyXFxuXFxyXFxuOmRpc2FibGVkIHtcXHJcXG4gIGN1cnNvcjogZGVmYXVsdDtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4xLiBNYWtlIHJlcGxhY2VkIGVsZW1lbnRzIGBkaXNwbGF5OiBibG9ja2AgYnkgZGVmYXVsdC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvMTQpXFxyXFxuMi4gQWRkIGB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlYCB0byBhbGlnbiByZXBsYWNlZCBlbGVtZW50cyBtb3JlIHNlbnNpYmx5IGJ5IGRlZmF1bHQuIChodHRwczovL2dpdGh1Yi5jb20vamVuc2ltbW9ucy9jc3NyZW1lZHkvaXNzdWVzLzE0I2lzc3VlY29tbWVudC02MzQ5MzQyMTApXFxyXFxuICAgVGhpcyBjYW4gdHJpZ2dlciBhIHBvb3JseSBjb25zaWRlcmVkIGxpbnQgZXJyb3IgaW4gc29tZSB0b29scyBidXQgaXMgaW5jbHVkZWQgYnkgZGVzaWduLlxcclxcbiovXFxyXFxuXFxyXFxuaW1nLFxcclxcbnN2ZyxcXHJcXG52aWRlbyxcXHJcXG5jYW52YXMsXFxyXFxuYXVkaW8sXFxyXFxuaWZyYW1lLFxcclxcbmVtYmVkLFxcclxcbm9iamVjdCB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIC8qIDEgKi9cXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuICAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuQ29uc3RyYWluIGltYWdlcyBhbmQgdmlkZW9zIHRvIHRoZSBwYXJlbnQgd2lkdGggYW5kIHByZXNlcnZlIHRoZWlyIGludHJpbnNpYyBhc3BlY3QgcmF0aW8uIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0KVxcclxcbiovXFxyXFxuXFxyXFxuaW1nLFxcclxcbnZpZGVvIHtcXHJcXG4gIG1heC13aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLyogTWFrZSBlbGVtZW50cyB3aXRoIHRoZSBIVE1MIGhpZGRlbiBhdHRyaWJ1dGUgc3RheSBoaWRkZW4gYnkgZGVmYXVsdCAqL1xcclxcblxcclxcbltoaWRkZW5dIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiosIDo6YmVmb3JlLCA6OmFmdGVyIHtcXHJcXG4gIC0tdHctYm9yZGVyLXNwYWNpbmcteDogMDtcXHJcXG4gIC0tdHctYm9yZGVyLXNwYWNpbmcteTogMDtcXHJcXG4gIC0tdHctdHJhbnNsYXRlLXg6IDA7XFxyXFxuICAtLXR3LXRyYW5zbGF0ZS15OiAwO1xcclxcbiAgLS10dy1yb3RhdGU6IDA7XFxyXFxuICAtLXR3LXNrZXcteDogMDtcXHJcXG4gIC0tdHctc2tldy15OiAwO1xcclxcbiAgLS10dy1zY2FsZS14OiAxO1xcclxcbiAgLS10dy1zY2FsZS15OiAxO1xcclxcbiAgLS10dy1wYW4teDogIDtcXHJcXG4gIC0tdHctcGFuLXk6ICA7XFxyXFxuICAtLXR3LXBpbmNoLXpvb206ICA7XFxyXFxuICAtLXR3LXNjcm9sbC1zbmFwLXN0cmljdG5lc3M6IHByb3hpbWl0eTtcXHJcXG4gIC0tdHctb3JkaW5hbDogIDtcXHJcXG4gIC0tdHctc2xhc2hlZC16ZXJvOiAgO1xcclxcbiAgLS10dy1udW1lcmljLWZpZ3VyZTogIDtcXHJcXG4gIC0tdHctbnVtZXJpYy1zcGFjaW5nOiAgO1xcclxcbiAgLS10dy1udW1lcmljLWZyYWN0aW9uOiAgO1xcclxcbiAgLS10dy1yaW5nLWluc2V0OiAgO1xcclxcbiAgLS10dy1yaW5nLW9mZnNldC13aWR0aDogMHB4O1xcclxcbiAgLS10dy1yaW5nLW9mZnNldC1jb2xvcjogI2ZmZjtcXHJcXG4gIC0tdHctcmluZy1jb2xvcjogcmdiKDU5IDEzMCAyNDYgLyAwLjUpO1xcclxcbiAgLS10dy1yaW5nLW9mZnNldC1zaGFkb3c6IDAgMCAjMDAwMDtcXHJcXG4gIC0tdHctcmluZy1zaGFkb3c6IDAgMCAjMDAwMDtcXHJcXG4gIC0tdHctc2hhZG93OiAwIDAgIzAwMDA7XFxyXFxuICAtLXR3LXNoYWRvdy1jb2xvcmVkOiAwIDAgIzAwMDA7XFxyXFxuICAtLXR3LWJsdXI6ICA7XFxyXFxuICAtLXR3LWJyaWdodG5lc3M6ICA7XFxyXFxuICAtLXR3LWNvbnRyYXN0OiAgO1xcclxcbiAgLS10dy1ncmF5c2NhbGU6ICA7XFxyXFxuICAtLXR3LWh1ZS1yb3RhdGU6ICA7XFxyXFxuICAtLXR3LWludmVydDogIDtcXHJcXG4gIC0tdHctc2F0dXJhdGU6ICA7XFxyXFxuICAtLXR3LXNlcGlhOiAgO1xcclxcbiAgLS10dy1kcm9wLXNoYWRvdzogIDtcXHJcXG4gIC0tdHctYmFja2Ryb3AtYmx1cjogIDtcXHJcXG4gIC0tdHctYmFja2Ryb3AtYnJpZ2h0bmVzczogIDtcXHJcXG4gIC0tdHctYmFja2Ryb3AtY29udHJhc3Q6ICA7XFxyXFxuICAtLXR3LWJhY2tkcm9wLWdyYXlzY2FsZTogIDtcXHJcXG4gIC0tdHctYmFja2Ryb3AtaHVlLXJvdGF0ZTogIDtcXHJcXG4gIC0tdHctYmFja2Ryb3AtaW52ZXJ0OiAgO1xcclxcbiAgLS10dy1iYWNrZHJvcC1vcGFjaXR5OiAgO1xcclxcbiAgLS10dy1iYWNrZHJvcC1zYXR1cmF0ZTogIDtcXHJcXG4gIC0tdHctYmFja2Ryb3Atc2VwaWE6ICA7XFxyXFxufVxcclxcblxcclxcbjo6YmFja2Ryb3Age1xcclxcbiAgLS10dy1ib3JkZXItc3BhY2luZy14OiAwO1xcclxcbiAgLS10dy1ib3JkZXItc3BhY2luZy15OiAwO1xcclxcbiAgLS10dy10cmFuc2xhdGUteDogMDtcXHJcXG4gIC0tdHctdHJhbnNsYXRlLXk6IDA7XFxyXFxuICAtLXR3LXJvdGF0ZTogMDtcXHJcXG4gIC0tdHctc2tldy14OiAwO1xcclxcbiAgLS10dy1za2V3LXk6IDA7XFxyXFxuICAtLXR3LXNjYWxlLXg6IDE7XFxyXFxuICAtLXR3LXNjYWxlLXk6IDE7XFxyXFxuICAtLXR3LXBhbi14OiAgO1xcclxcbiAgLS10dy1wYW4teTogIDtcXHJcXG4gIC0tdHctcGluY2gtem9vbTogIDtcXHJcXG4gIC0tdHctc2Nyb2xsLXNuYXAtc3RyaWN0bmVzczogcHJveGltaXR5O1xcclxcbiAgLS10dy1vcmRpbmFsOiAgO1xcclxcbiAgLS10dy1zbGFzaGVkLXplcm86ICA7XFxyXFxuICAtLXR3LW51bWVyaWMtZmlndXJlOiAgO1xcclxcbiAgLS10dy1udW1lcmljLXNwYWNpbmc6ICA7XFxyXFxuICAtLXR3LW51bWVyaWMtZnJhY3Rpb246ICA7XFxyXFxuICAtLXR3LXJpbmctaW5zZXQ6ICA7XFxyXFxuICAtLXR3LXJpbmctb2Zmc2V0LXdpZHRoOiAwcHg7XFxyXFxuICAtLXR3LXJpbmctb2Zmc2V0LWNvbG9yOiAjZmZmO1xcclxcbiAgLS10dy1yaW5nLWNvbG9yOiByZ2IoNTkgMTMwIDI0NiAvIDAuNSk7XFxyXFxuICAtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdzogMCAwICMwMDAwO1xcclxcbiAgLS10dy1yaW5nLXNoYWRvdzogMCAwICMwMDAwO1xcclxcbiAgLS10dy1zaGFkb3c6IDAgMCAjMDAwMDtcXHJcXG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IDAgMCAjMDAwMDtcXHJcXG4gIC0tdHctYmx1cjogIDtcXHJcXG4gIC0tdHctYnJpZ2h0bmVzczogIDtcXHJcXG4gIC0tdHctY29udHJhc3Q6ICA7XFxyXFxuICAtLXR3LWdyYXlzY2FsZTogIDtcXHJcXG4gIC0tdHctaHVlLXJvdGF0ZTogIDtcXHJcXG4gIC0tdHctaW52ZXJ0OiAgO1xcclxcbiAgLS10dy1zYXR1cmF0ZTogIDtcXHJcXG4gIC0tdHctc2VwaWE6ICA7XFxyXFxuICAtLXR3LWRyb3Atc2hhZG93OiAgO1xcclxcbiAgLS10dy1iYWNrZHJvcC1ibHVyOiAgO1xcclxcbiAgLS10dy1iYWNrZHJvcC1icmlnaHRuZXNzOiAgO1xcclxcbiAgLS10dy1iYWNrZHJvcC1jb250cmFzdDogIDtcXHJcXG4gIC0tdHctYmFja2Ryb3AtZ3JheXNjYWxlOiAgO1xcclxcbiAgLS10dy1iYWNrZHJvcC1odWUtcm90YXRlOiAgO1xcclxcbiAgLS10dy1iYWNrZHJvcC1pbnZlcnQ6ICA7XFxyXFxuICAtLXR3LWJhY2tkcm9wLW9wYWNpdHk6ICA7XFxyXFxuICAtLXR3LWJhY2tkcm9wLXNhdHVyYXRlOiAgO1xcclxcbiAgLS10dy1iYWNrZHJvcC1zZXBpYTogIDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDY0MHB4KSB7XFxyXFxuICAuY29udGFpbmVyIHtcXHJcXG4gICAgbWF4LXdpZHRoOiA2NDBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxyXFxuICAuY29udGFpbmVyIHtcXHJcXG4gICAgbWF4LXdpZHRoOiA3NjhweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xcclxcbiAgLmNvbnRhaW5lciB7XFxyXFxuICAgIG1heC13aWR0aDogMTAyNHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogMTI4MHB4KSB7XFxyXFxuICAuY29udGFpbmVyIHtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMjgwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiAxNTM2cHgpIHtcXHJcXG4gIC5jb250YWluZXIge1xcclxcbiAgICBtYXgtd2lkdGg6IDE1MzZweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmFic29sdXRlIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLm0tYXV0byB7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5teC00IHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZmxleCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JpZCB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZGVuIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi53LWZ1bGwge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5mbGV4LXJvdyB7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbn1cXHJcXG5cXHJcXG4uZmxleC1jb2wge1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW1zLXN0YXJ0IHtcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbXMtY2VudGVyIHtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5pdGVtcy1zdHJldGNoIHtcXHJcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcclxcbn1cXHJcXG5cXHJcXG4uanVzdGlmeS1zdGFydCB7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbi5qdXN0aWZ5LWVuZCB7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uanVzdGlmeS1iZXR3ZWVuIHtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmdhcC0yIHtcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FwLTQge1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FwLTgge1xcclxcbiAgZ2FwOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucm91bmRlZC1mdWxsIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJvdW5kZWQtbWQge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XFxyXFxufVxcclxcblxcclxcbi5ib3JkZXItYi0yIHtcXHJcXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJvcmRlci10LTIge1xcclxcbiAgYm9yZGVyLXRvcC13aWR0aDogMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYm9yZGVyLXNvbGlkIHtcXHJcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxufVxcclxcblxcclxcbi5ib3JkZXItYmx1ZS03MDAge1xcclxcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcXHJcXG4gIGJvcmRlci1jb2xvcjogcmdiKDI5IDc4IDIxNiAvIHZhcigtLXR3LWJvcmRlci1vcGFjaXR5KSk7XFxyXFxufVxcclxcblxcclxcbi5ib3JkZXItd2hpdGUge1xcclxcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcXHJcXG4gIGJvcmRlci1jb2xvcjogcmdiKDI1NSAyNTUgMjU1IC8gdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJnLWJsdWUtNjAwIHtcXHJcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzNyA5OSAyMzUgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxyXFxufVxcclxcblxcclxcbi5iZy1ibHVlLTcwMCB7XFxyXFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjkgNzggMjE2IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcclxcbn1cXHJcXG5cXHJcXG4uYmctcmVkLTUwMCB7XFxyXFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM5IDY4IDY4IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcclxcbn1cXHJcXG5cXHJcXG4uYmctc2xhdGUtMzAwIHtcXHJcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDMgMjEzIDIyNSAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJnLXNsYXRlLTUwMCB7XFxyXFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAwIDExNiAxMzkgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxyXFxufVxcclxcblxcclxcbi5iZy10cmFuc3BhcmVudCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLmJnLXllbGxvdy01MDAge1xcclxcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNCAxNzkgOCAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXHJcXG59XFxyXFxuXFxyXFxuLnAtNCB7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHgtNCB7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHgtOCB7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHktMiB7XFxyXFxuICBwYWRkaW5nLXRvcDogMC41cmVtO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnB5LTQge1xcclxcbiAgcGFkZGluZy10b3A6IDFyZW07XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnB5LTgge1xcclxcbiAgcGFkZGluZy10b3A6IDJyZW07XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnBsLTQge1xcclxcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucGwtOCB7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5wdC0xNiB7XFxyXFxuICBwYWRkaW5nLXRvcDogNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHQtY2VudGVyIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHQtMnhsIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi50ZXh0LTN4bCB7XFxyXFxuICBmb250LXNpemU6IDEuODc1cmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDIuMjVyZW07XFxyXFxufVxcclxcblxcclxcbi50ZXh0LXNtIHtcXHJcXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMS4yNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHQteGwge1xcclxcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XFxyXFxufVxcclxcblxcclxcbi5mb250LWJvbGQge1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvbnQtbWVkaXVtIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcblxcclxcbi50ZXh0LWJsdWUtNzAwIHtcXHJcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcclxcbiAgY29sb3I6IHJnYigyOSA3OCAyMTYgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHQtc2xhdGUtMjAwIHtcXHJcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcclxcbiAgY29sb3I6IHJnYigyMjYgMjMyIDI0MCAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dC1zbGF0ZS01MDAge1xcclxcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxyXFxuICBjb2xvcjogcmdiKDEwMCAxMTYgMTM5IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxyXFxufVxcclxcblxcclxcbi50ZXh0LXdoaXRlIHtcXHJcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcclxcbiAgY29sb3I6IHJnYigyNTUgMjU1IDI1NSAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcclxcbn1cXHJcXG5cXHJcXG4uZmlsdGVyIHtcXHJcXG4gIGZpbHRlcjogdmFyKC0tdHctYmx1cikgdmFyKC0tdHctYnJpZ2h0bmVzcykgdmFyKC0tdHctY29udHJhc3QpIHZhcigtLXR3LWdyYXlzY2FsZSkgdmFyKC0tdHctaHVlLXJvdGF0ZSkgdmFyKC0tdHctaW52ZXJ0KSB2YXIoLS10dy1zYXR1cmF0ZSkgdmFyKC0tdHctc2VwaWEpIHZhcigtLXR3LWRyb3Atc2hhZG93KTtcXHJcXG59XFxyXFxuXFxyXFxuLnRyYW5zaXRpb24tYWxsIHtcXHJcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGFsbDtcXHJcXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xcclxcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTUwbXM7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgYmFja2dyb3VuZC1jbGlwOiBib3JkZXItYm94O1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIC8qIHBhZGRpbmctdG9wOiA1LjQ5cmVtO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDI1dnc7ICovXFxyXFxufVxcclxcblxcclxcbmFzaWRlIHtcXHJcXG4gIHdpZHRoOiAyMHZ3O1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiA3LjM1cmVtO1xcclxcbiAgcmlnaHQ6IDFyZW07XFxyXFxuICBsZWZ0OiAyLjVyZW07XFxyXFxuICBib3R0b206IDFyZW07XFxyXFxuICBvdmVyZmxvdzogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudC1jb250YWluZXIge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiA3LjM1cmVtO1xcclxcbiAgbGVmdDogMjV2dztcXHJcXG4gIHJpZ2h0OiAycmVtO1xcclxcbiAgaGVpZ2h0OiA3OS42dmg7XFxyXFxufVxcclxcblxcclxcbmZvb3RlcntcXHJcXG4gIGJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyLCNwcm9qZWN0cy1oZWFkZXIge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgbGVmdDogMi41cmVtO1xcclxcbiAgd2lkdGg6IDIwdnc7XFxyXFxuICB6LWluZGV4OiAxMDA7XFxyXFxufVxcclxcblxcclxcbmZvcm17XFxyXFxuICB3aWR0aDogMzB2dztcXHJcXG4gIGxlZnQ6IGNhbGMoMjV2dyAtIDFyZW0pO1xcclxcbiAgdG9wOiA3LjM1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAxLjVyZW07XFxyXFxuICByaWdodDogMXJlbTtcXHJcXG4gIGxlZnQ6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI25ldy1wcm9qZWN0LWJ0bntcXHJcXG4gIHBhZGRpbmctYmxvY2s6IC41cmVtO1xcclxcbiAgcGFkZGluZy1pbmxpbmU6IC44cmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2ZpbGUge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxufVxcclxcblxcclxcbiNwcm9maWxlLXBpY3R1cmUge1xcclxcbiAgd2lkdGg6IDQ1cHg7XFxyXFxufVxcclxcblxcclxcbiNwcm9qZWN0cy1oZWFkZXJ7XFxyXFxuICB0b3A6IDcuMzVyZW07XFxyXFxufVxcclxcblxcclxcbiN0YXNrLWNvbnRhaW5lcntcXHJcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxyXFxufVxcclxcblxcclxcbiN0YXNrLWZvcm0ge1xcclxcbiAgbGVmdDogY2FsYyg0MHZ3KTtcXHJcXG4gIHRvcDogMTYuOHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvdmVyXFxcXDpiZy1ibHVlLTYwMDpob3ZlciB7XFxyXFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzcgOTkgMjM1IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcclxcbn1cXHJcXG5cXHJcXG4uaG92ZXJcXFxcOmJnLWJsdWUtNzAwOmhvdmVyIHtcXHJcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyOSA3OCAyMTYgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxyXFxufVxcclxcblxcclxcbi5ob3ZlclxcXFw6YmctcmVkLTcwMDpob3ZlciB7XFxyXFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTg1IDI4IDI4IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcclxcbn1cXHJcXG5cXHJcXG4uaG92ZXJcXFxcOmJnLXNsYXRlLTEwMDpob3ZlciB7XFxyXFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQxIDI0NSAyNDkgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxyXFxufVxcclxcblxcclxcbi5ob3ZlclxcXFw6YmcteWVsbG93LTcwMDpob3ZlciB7XFxyXFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTYxIDk4IDcgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxyXFxufVxcclxcblxcclxcbi5mb2N1c1xcXFw6b3V0bGluZS1ub25lOmZvY3VzIHtcXHJcXG4gIG91dGxpbmU6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gIG91dGxpbmUtb2Zmc2V0OiAycHg7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzc1wi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QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVEQUF1RDtBQUN6RDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix1REFBdUQ7QUFDekQ7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsdURBQXVEO0FBQ3pEOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlEQUF5RDtBQUMzRDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixzREFBc0Q7QUFDeEQ7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qXFxyXFxuISB0YWlsd2luZGNzcyB2My4yLjcgfCBNSVQgTGljZW5zZSB8IGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tXFxyXFxuKi9cXHJcXG5cXHJcXG4vKlxcclxcbjEuIFByZXZlbnQgcGFkZGluZyBhbmQgYm9yZGVyIGZyb20gYWZmZWN0aW5nIGVsZW1lbnQgd2lkdGguIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzQpXFxyXFxuMi4gQWxsb3cgYWRkaW5nIGEgYm9yZGVyIHRvIGFuIGVsZW1lbnQgYnkganVzdCBhZGRpbmcgYSBib3JkZXItd2lkdGguIChodHRwczovL2dpdGh1Yi5jb20vdGFpbHdpbmRjc3MvdGFpbHdpbmRjc3MvcHVsbC8xMTYpXFxyXFxuKi9cXHJcXG5cXHJcXG4qLFxcclxcbjo6YmVmb3JlLFxcclxcbjo6YWZ0ZXIge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIC8qIDEgKi9cXHJcXG4gIGJvcmRlci13aWR0aDogMDtcXHJcXG4gIC8qIDIgKi9cXHJcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuICAvKiAyICovXFxyXFxuICBib3JkZXItY29sb3I6ICNlNWU3ZWI7XFxyXFxuICAvKiAyICovXFxyXFxufVxcclxcblxcclxcbjo6YmVmb3JlLFxcclxcbjo6YWZ0ZXIge1xcclxcbiAgLS10dy1jb250ZW50OiAnJztcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4xLiBVc2UgYSBjb25zaXN0ZW50IHNlbnNpYmxlIGxpbmUtaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXHJcXG4yLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cXHJcXG4zLiBVc2UgYSBtb3JlIHJlYWRhYmxlIHRhYiBzaXplLlxcclxcbjQuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgYHNhbnNgIGZvbnQtZmFtaWx5IGJ5IGRlZmF1bHQuXFxyXFxuNS4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBgc2Fuc2AgZm9udC1mZWF0dXJlLXNldHRpbmdzIGJ5IGRlZmF1bHQuXFxyXFxuKi9cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxyXFxuICAvKiAxICovXFxyXFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxyXFxuICAvKiAyICovXFxyXFxuICAtbW96LXRhYi1zaXplOiA0O1xcclxcbiAgLyogMyAqL1xcclxcbiAgLW8tdGFiLXNpemU6IDQ7XFxyXFxuICAgICB0YWItc2l6ZTogNDtcXHJcXG4gIC8qIDMgKi9cXHJcXG4gIGZvbnQtZmFtaWx5OiB1aS1zYW5zLXNlcmlmLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBBcmlhbCwgXFxcIk5vdG8gU2Fuc1xcXCIsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiLCBcXFwiTm90byBDb2xvciBFbW9qaVxcXCI7XFxyXFxuICAvKiA0ICovXFxyXFxuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IG5vcm1hbDtcXHJcXG4gIC8qIDUgKi9cXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4xLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuMi4gSW5oZXJpdCBsaW5lLWhlaWdodCBmcm9tIGBodG1sYCBzbyB1c2VycyBjYW4gc2V0IHRoZW0gYXMgYSBjbGFzcyBkaXJlY3RseSBvbiB0aGUgYGh0bWxgIGVsZW1lbnQuXFxyXFxuKi9cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIC8qIDEgKi9cXHJcXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xcclxcbiAgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbjEuIEFkZCB0aGUgY29ycmVjdCBoZWlnaHQgaW4gRmlyZWZveC5cXHJcXG4yLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBvZiBib3JkZXIgY29sb3IgaW4gRmlyZWZveC4gKGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTE5MDY1NSlcXHJcXG4zLiBFbnN1cmUgaG9yaXpvbnRhbCBydWxlcyBhcmUgdmlzaWJsZSBieSBkZWZhdWx0LlxcclxcbiovXFxyXFxuXFxyXFxuaHIge1xcclxcbiAgaGVpZ2h0OiAwO1xcclxcbiAgLyogMSAqL1xcclxcbiAgY29sb3I6IGluaGVyaXQ7XFxyXFxuICAvKiAyICovXFxyXFxuICBib3JkZXItdG9wLXdpZHRoOiAxcHg7XFxyXFxuICAvKiAzICovXFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxyXFxuKi9cXHJcXG5cXHJcXG5hYmJyOndoZXJlKFt0aXRsZV0pIHtcXHJcXG4gIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcclxcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuUmVtb3ZlIHRoZSBkZWZhdWx0IGZvbnQgc2l6ZSBhbmQgd2VpZ2h0IGZvciBoZWFkaW5ncy5cXHJcXG4qL1xcclxcblxcclxcbmgxLFxcclxcbmgyLFxcclxcbmgzLFxcclxcbmg0LFxcclxcbmg1LFxcclxcbmg2IHtcXHJcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcblJlc2V0IGxpbmtzIHRvIG9wdGltaXplIGZvciBvcHQtaW4gc3R5bGluZyBpbnN0ZWFkIG9mIG9wdC1vdXQuXFxyXFxuKi9cXHJcXG5cXHJcXG5hIHtcXHJcXG4gIGNvbG9yOiBpbmhlcml0O1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbkFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBFZGdlIGFuZCBTYWZhcmkuXFxyXFxuKi9cXHJcXG5cXHJcXG5iLFxcclxcbnN0cm9uZyB7XFxyXFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbjEuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgYG1vbm9gIGZvbnQgZmFtaWx5IGJ5IGRlZmF1bHQuXFxyXFxuMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiovXFxyXFxuXFxyXFxuY29kZSxcXHJcXG5rYmQsXFxyXFxuc2FtcCxcXHJcXG5wcmUge1xcclxcbiAgZm9udC1mYW1pbHk6IHVpLW1vbm9zcGFjZSwgU0ZNb25vLVJlZ3VsYXIsIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCBcXFwiTGliZXJhdGlvbiBNb25vXFxcIiwgXFxcIkNvdXJpZXIgTmV3XFxcIiwgbW9ub3NwYWNlO1xcclxcbiAgLyogMSAqL1xcclxcbiAgZm9udC1zaXplOiAxZW07XFxyXFxuICAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuKi9cXHJcXG5cXHJcXG5zbWFsbCB7XFxyXFxuICBmb250LXNpemU6IDgwJTtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5QcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiovXFxyXFxuXFxyXFxuc3ViLFxcclxcbnN1cCB7XFxyXFxuICBmb250LXNpemU6IDc1JTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG5zdWIge1xcclxcbiAgYm90dG9tOiAtMC4yNWVtO1xcclxcbn1cXHJcXG5cXHJcXG5zdXAge1xcclxcbiAgdG9wOiAtMC41ZW07XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuMS4gUmVtb3ZlIHRleHQgaW5kZW50YXRpb24gZnJvbSB0YWJsZSBjb250ZW50cyBpbiBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTk5OTA4OCwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTIwMTI5NylcXHJcXG4yLiBDb3JyZWN0IHRhYmxlIGJvcmRlciBjb2xvciBpbmhlcml0YW5jZSBpbiBhbGwgQ2hyb21lIGFuZCBTYWZhcmkuIChodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD05MzU3MjksIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTUwMTYpXFxyXFxuMy4gUmVtb3ZlIGdhcHMgYmV0d2VlbiB0YWJsZSBib3JkZXJzIGJ5IGRlZmF1bHQuXFxyXFxuKi9cXHJcXG5cXHJcXG50YWJsZSB7XFxyXFxuICB0ZXh0LWluZGVudDogMDtcXHJcXG4gIC8qIDEgKi9cXHJcXG4gIGJvcmRlci1jb2xvcjogaW5oZXJpdDtcXHJcXG4gIC8qIDIgKi9cXHJcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxyXFxuICAvKiAzICovXFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcclxcbjMuIFJlbW92ZSBkZWZhdWx0IHBhZGRpbmcgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiovXFxyXFxuXFxyXFxuYnV0dG9uLFxcclxcbmlucHV0LFxcclxcbm9wdGdyb3VwLFxcclxcbnNlbGVjdCxcXHJcXG50ZXh0YXJlYSB7XFxyXFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXHJcXG4gIC8qIDEgKi9cXHJcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXHJcXG4gIC8qIDEgKi9cXHJcXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xcclxcbiAgLyogMSAqL1xcclxcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxyXFxuICAvKiAxICovXFxyXFxuICBjb2xvcjogaW5oZXJpdDtcXHJcXG4gIC8qIDEgKi9cXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIC8qIDIgKi9cXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICAvKiAzICovXFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlIGFuZCBGaXJlZm94LlxcclxcbiovXFxyXFxuXFxyXFxuYnV0dG9uLFxcclxcbnNlbGVjdCB7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4xLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcclxcbjIuIFJlbW92ZSBkZWZhdWx0IGJ1dHRvbiBzdHlsZXMuXFxyXFxuKi9cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxuW3R5cGU9J2J1dHRvbiddLFxcclxcblt0eXBlPSdyZXNldCddLFxcclxcblt0eXBlPSdzdWJtaXQnXSB7XFxyXFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXHJcXG4gIC8qIDEgKi9cXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgLyogMiAqL1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcXHJcXG4gIC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5Vc2UgdGhlIG1vZGVybiBGaXJlZm94IGZvY3VzIHN0eWxlIGZvciBhbGwgZm9jdXNhYmxlIGVsZW1lbnRzLlxcclxcbiovXFxyXFxuXFxyXFxuOi1tb3otZm9jdXNyaW5nIHtcXHJcXG4gIG91dGxpbmU6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuUmVtb3ZlIHRoZSBhZGRpdGlvbmFsIGA6aW52YWxpZGAgc3R5bGVzIGluIEZpcmVmb3guIChodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9nZWNrby1kZXYvYmxvYi8yZjllYWNkOWQzZDk5NWM5MzdiNDI1MWE1NTU3ZDk1ZDQ5NGM5YmUxL2xheW91dC9zdHlsZS9yZXMvZm9ybXMuY3NzI0w3MjgtTDczNylcXHJcXG4qL1xcclxcblxcclxcbjotbW96LXVpLWludmFsaWQge1xcclxcbiAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5BZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSBhbmQgRmlyZWZveC5cXHJcXG4qL1xcclxcblxcclxcbnByb2dyZXNzIHtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5Db3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBTYWZhcmkuXFxyXFxuKi9cXHJcXG5cXHJcXG46Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxyXFxuOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4xLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXHJcXG4yLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXHJcXG4qL1xcclxcblxcclxcblt0eXBlPSdzZWFyY2gnXSB7XFxyXFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcXHJcXG4gIC8qIDEgKi9cXHJcXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4O1xcclxcbiAgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcblJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXHJcXG4qL1xcclxcblxcclxcbjo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxyXFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXHJcXG4yLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxyXFxuKi9cXHJcXG5cXHJcXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXHJcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcclxcbiAgLyogMSAqL1xcclxcbiAgZm9udDogaW5oZXJpdDtcXHJcXG4gIC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5BZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXHJcXG4qL1xcclxcblxcclxcbnN1bW1hcnkge1xcclxcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcblJlbW92ZXMgdGhlIGRlZmF1bHQgc3BhY2luZyBhbmQgYm9yZGVyIGZvciBhcHByb3ByaWF0ZSBlbGVtZW50cy5cXHJcXG4qL1xcclxcblxcclxcbmJsb2NrcXVvdGUsXFxyXFxuZGwsXFxyXFxuZGQsXFxyXFxuaDEsXFxyXFxuaDIsXFxyXFxuaDMsXFxyXFxuaDQsXFxyXFxuaDUsXFxyXFxuaDYsXFxyXFxuaHIsXFxyXFxuZmlndXJlLFxcclxcbnAsXFxyXFxucHJlIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuZmllbGRzZXQge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxubGVnZW5kIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbm9sLFxcclxcbnVsLFxcclxcbm1lbnUge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuUHJldmVudCByZXNpemluZyB0ZXh0YXJlYXMgaG9yaXpvbnRhbGx5IGJ5IGRlZmF1bHQuXFxyXFxuKi9cXHJcXG5cXHJcXG50ZXh0YXJlYSB7XFxyXFxuICByZXNpemU6IHZlcnRpY2FsO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbjEuIFJlc2V0IHRoZSBkZWZhdWx0IHBsYWNlaG9sZGVyIG9wYWNpdHkgaW4gRmlyZWZveC4gKGh0dHBzOi8vZ2l0aHViLmNvbS90YWlsd2luZGxhYnMvdGFpbHdpbmRjc3MvaXNzdWVzLzMzMDApXFxyXFxuMi4gU2V0IHRoZSBkZWZhdWx0IHBsYWNlaG9sZGVyIGNvbG9yIHRvIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBncmF5IDQwMCBjb2xvci5cXHJcXG4qL1xcclxcblxcclxcbmlucHV0OjotbW96LXBsYWNlaG9sZGVyLCB0ZXh0YXJlYTo6LW1vei1wbGFjZWhvbGRlciB7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbiAgLyogMSAqL1xcclxcbiAgY29sb3I6ICM5Y2EzYWY7XFxyXFxuICAvKiAyICovXFxyXFxufVxcclxcblxcclxcbmlucHV0OjpwbGFjZWhvbGRlcixcXHJcXG50ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG4gIC8qIDEgKi9cXHJcXG4gIGNvbG9yOiAjOWNhM2FmO1xcclxcbiAgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcblNldCB0aGUgZGVmYXVsdCBjdXJzb3IgZm9yIGJ1dHRvbnMuXFxyXFxuKi9cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxuW3JvbGU9XFxcImJ1dHRvblxcXCJdIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5NYWtlIHN1cmUgZGlzYWJsZWQgYnV0dG9ucyBkb24ndCBnZXQgdGhlIHBvaW50ZXIgY3Vyc29yLlxcclxcbiovXFxyXFxuXFxyXFxuOmRpc2FibGVkIHtcXHJcXG4gIGN1cnNvcjogZGVmYXVsdDtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4xLiBNYWtlIHJlcGxhY2VkIGVsZW1lbnRzIGBkaXNwbGF5OiBibG9ja2AgYnkgZGVmYXVsdC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvMTQpXFxyXFxuMi4gQWRkIGB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlYCB0byBhbGlnbiByZXBsYWNlZCBlbGVtZW50cyBtb3JlIHNlbnNpYmx5IGJ5IGRlZmF1bHQuIChodHRwczovL2dpdGh1Yi5jb20vamVuc2ltbW9ucy9jc3NyZW1lZHkvaXNzdWVzLzE0I2lzc3VlY29tbWVudC02MzQ5MzQyMTApXFxyXFxuICAgVGhpcyBjYW4gdHJpZ2dlciBhIHBvb3JseSBjb25zaWRlcmVkIGxpbnQgZXJyb3IgaW4gc29tZSB0b29scyBidXQgaXMgaW5jbHVkZWQgYnkgZGVzaWduLlxcclxcbiovXFxyXFxuXFxyXFxuaW1nLFxcclxcbnN2ZyxcXHJcXG52aWRlbyxcXHJcXG5jYW52YXMsXFxyXFxuYXVkaW8sXFxyXFxuaWZyYW1lLFxcclxcbmVtYmVkLFxcclxcbm9iamVjdCB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIC8qIDEgKi9cXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuICAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuQ29uc3RyYWluIGltYWdlcyBhbmQgdmlkZW9zIHRvIHRoZSBwYXJlbnQgd2lkdGggYW5kIHByZXNlcnZlIHRoZWlyIGludHJpbnNpYyBhc3BlY3QgcmF0aW8uIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0KVxcclxcbiovXFxyXFxuXFxyXFxuaW1nLFxcclxcbnZpZGVvIHtcXHJcXG4gIG1heC13aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLyogTWFrZSBlbGVtZW50cyB3aXRoIHRoZSBIVE1MIGhpZGRlbiBhdHRyaWJ1dGUgc3RheSBoaWRkZW4gYnkgZGVmYXVsdCAqL1xcclxcblxcclxcbltoaWRkZW5dIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiosIDo6YmVmb3JlLCA6OmFmdGVyIHtcXHJcXG4gIC0tdHctYm9yZGVyLXNwYWNpbmcteDogMDtcXHJcXG4gIC0tdHctYm9yZGVyLXNwYWNpbmcteTogMDtcXHJcXG4gIC0tdHctdHJhbnNsYXRlLXg6IDA7XFxyXFxuICAtLXR3LXRyYW5zbGF0ZS15OiAwO1xcclxcbiAgLS10dy1yb3RhdGU6IDA7XFxyXFxuICAtLXR3LXNrZXcteDogMDtcXHJcXG4gIC0tdHctc2tldy15OiAwO1xcclxcbiAgLS10dy1zY2FsZS14OiAxO1xcclxcbiAgLS10dy1zY2FsZS15OiAxO1xcclxcbiAgLS10dy1wYW4teDogIDtcXHJcXG4gIC0tdHctcGFuLXk6ICA7XFxyXFxuICAtLXR3LXBpbmNoLXpvb206ICA7XFxyXFxuICAtLXR3LXNjcm9sbC1zbmFwLXN0cmljdG5lc3M6IHByb3hpbWl0eTtcXHJcXG4gIC0tdHctb3JkaW5hbDogIDtcXHJcXG4gIC0tdHctc2xhc2hlZC16ZXJvOiAgO1xcclxcbiAgLS10dy1udW1lcmljLWZpZ3VyZTogIDtcXHJcXG4gIC0tdHctbnVtZXJpYy1zcGFjaW5nOiAgO1xcclxcbiAgLS10dy1udW1lcmljLWZyYWN0aW9uOiAgO1xcclxcbiAgLS10dy1yaW5nLWluc2V0OiAgO1xcclxcbiAgLS10dy1yaW5nLW9mZnNldC13aWR0aDogMHB4O1xcclxcbiAgLS10dy1yaW5nLW9mZnNldC1jb2xvcjogI2ZmZjtcXHJcXG4gIC0tdHctcmluZy1jb2xvcjogcmdiKDU5IDEzMCAyNDYgLyAwLjUpO1xcclxcbiAgLS10dy1yaW5nLW9mZnNldC1zaGFkb3c6IDAgMCAjMDAwMDtcXHJcXG4gIC0tdHctcmluZy1zaGFkb3c6IDAgMCAjMDAwMDtcXHJcXG4gIC0tdHctc2hhZG93OiAwIDAgIzAwMDA7XFxyXFxuICAtLXR3LXNoYWRvdy1jb2xvcmVkOiAwIDAgIzAwMDA7XFxyXFxuICAtLXR3LWJsdXI6ICA7XFxyXFxuICAtLXR3LWJyaWdodG5lc3M6ICA7XFxyXFxuICAtLXR3LWNvbnRyYXN0OiAgO1xcclxcbiAgLS10dy1ncmF5c2NhbGU6ICA7XFxyXFxuICAtLXR3LWh1ZS1yb3RhdGU6ICA7XFxyXFxuICAtLXR3LWludmVydDogIDtcXHJcXG4gIC0tdHctc2F0dXJhdGU6ICA7XFxyXFxuICAtLXR3LXNlcGlhOiAgO1xcclxcbiAgLS10dy1kcm9wLXNoYWRvdzogIDtcXHJcXG4gIC0tdHctYmFja2Ryb3AtYmx1cjogIDtcXHJcXG4gIC0tdHctYmFja2Ryb3AtYnJpZ2h0bmVzczogIDtcXHJcXG4gIC0tdHctYmFja2Ryb3AtY29udHJhc3Q6ICA7XFxyXFxuICAtLXR3LWJhY2tkcm9wLWdyYXlzY2FsZTogIDtcXHJcXG4gIC0tdHctYmFja2Ryb3AtaHVlLXJvdGF0ZTogIDtcXHJcXG4gIC0tdHctYmFja2Ryb3AtaW52ZXJ0OiAgO1xcclxcbiAgLS10dy1iYWNrZHJvcC1vcGFjaXR5OiAgO1xcclxcbiAgLS10dy1iYWNrZHJvcC1zYXR1cmF0ZTogIDtcXHJcXG4gIC0tdHctYmFja2Ryb3Atc2VwaWE6ICA7XFxyXFxufVxcclxcblxcclxcbjo6YmFja2Ryb3Age1xcclxcbiAgLS10dy1ib3JkZXItc3BhY2luZy14OiAwO1xcclxcbiAgLS10dy1ib3JkZXItc3BhY2luZy15OiAwO1xcclxcbiAgLS10dy10cmFuc2xhdGUteDogMDtcXHJcXG4gIC0tdHctdHJhbnNsYXRlLXk6IDA7XFxyXFxuICAtLXR3LXJvdGF0ZTogMDtcXHJcXG4gIC0tdHctc2tldy14OiAwO1xcclxcbiAgLS10dy1za2V3LXk6IDA7XFxyXFxuICAtLXR3LXNjYWxlLXg6IDE7XFxyXFxuICAtLXR3LXNjYWxlLXk6IDE7XFxyXFxuICAtLXR3LXBhbi14OiAgO1xcclxcbiAgLS10dy1wYW4teTogIDtcXHJcXG4gIC0tdHctcGluY2gtem9vbTogIDtcXHJcXG4gIC0tdHctc2Nyb2xsLXNuYXAtc3RyaWN0bmVzczogcHJveGltaXR5O1xcclxcbiAgLS10dy1vcmRpbmFsOiAgO1xcclxcbiAgLS10dy1zbGFzaGVkLXplcm86ICA7XFxyXFxuICAtLXR3LW51bWVyaWMtZmlndXJlOiAgO1xcclxcbiAgLS10dy1udW1lcmljLXNwYWNpbmc6ICA7XFxyXFxuICAtLXR3LW51bWVyaWMtZnJhY3Rpb246ICA7XFxyXFxuICAtLXR3LXJpbmctaW5zZXQ6ICA7XFxyXFxuICAtLXR3LXJpbmctb2Zmc2V0LXdpZHRoOiAwcHg7XFxyXFxuICAtLXR3LXJpbmctb2Zmc2V0LWNvbG9yOiAjZmZmO1xcclxcbiAgLS10dy1yaW5nLWNvbG9yOiByZ2IoNTkgMTMwIDI0NiAvIDAuNSk7XFxyXFxuICAtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdzogMCAwICMwMDAwO1xcclxcbiAgLS10dy1yaW5nLXNoYWRvdzogMCAwICMwMDAwO1xcclxcbiAgLS10dy1zaGFkb3c6IDAgMCAjMDAwMDtcXHJcXG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IDAgMCAjMDAwMDtcXHJcXG4gIC0tdHctYmx1cjogIDtcXHJcXG4gIC0tdHctYnJpZ2h0bmVzczogIDtcXHJcXG4gIC0tdHctY29udHJhc3Q6ICA7XFxyXFxuICAtLXR3LWdyYXlzY2FsZTogIDtcXHJcXG4gIC0tdHctaHVlLXJvdGF0ZTogIDtcXHJcXG4gIC0tdHctaW52ZXJ0OiAgO1xcclxcbiAgLS10dy1zYXR1cmF0ZTogIDtcXHJcXG4gIC0tdHctc2VwaWE6ICA7XFxyXFxuICAtLXR3LWRyb3Atc2hhZG93OiAgO1xcclxcbiAgLS10dy1iYWNrZHJvcC1ibHVyOiAgO1xcclxcbiAgLS10dy1iYWNrZHJvcC1icmlnaHRuZXNzOiAgO1xcclxcbiAgLS10dy1iYWNrZHJvcC1jb250cmFzdDogIDtcXHJcXG4gIC0tdHctYmFja2Ryb3AtZ3JheXNjYWxlOiAgO1xcclxcbiAgLS10dy1iYWNrZHJvcC1odWUtcm90YXRlOiAgO1xcclxcbiAgLS10dy1iYWNrZHJvcC1pbnZlcnQ6ICA7XFxyXFxuICAtLXR3LWJhY2tkcm9wLW9wYWNpdHk6ICA7XFxyXFxuICAtLXR3LWJhY2tkcm9wLXNhdHVyYXRlOiAgO1xcclxcbiAgLS10dy1iYWNrZHJvcC1zZXBpYTogIDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDY0MHB4KSB7XFxyXFxuICAuY29udGFpbmVyIHtcXHJcXG4gICAgbWF4LXdpZHRoOiA2NDBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxyXFxuICAuY29udGFpbmVyIHtcXHJcXG4gICAgbWF4LXdpZHRoOiA3NjhweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xcclxcbiAgLmNvbnRhaW5lciB7XFxyXFxuICAgIG1heC13aWR0aDogMTAyNHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogMTI4MHB4KSB7XFxyXFxuICAuY29udGFpbmVyIHtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMjgwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiAxNTM2cHgpIHtcXHJcXG4gIC5jb250YWluZXIge1xcclxcbiAgICBtYXgtd2lkdGg6IDE1MzZweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmFic29sdXRlIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLm0tYXV0byB7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5teC00IHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZmxleCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JpZCB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZGVuIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi53LWZ1bGwge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5mbGV4LXJvdyB7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbn1cXHJcXG5cXHJcXG4uZmxleC1jb2wge1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW1zLXN0YXJ0IHtcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbXMtY2VudGVyIHtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5pdGVtcy1zdHJldGNoIHtcXHJcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcclxcbn1cXHJcXG5cXHJcXG4uanVzdGlmeS1zdGFydCB7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbi5qdXN0aWZ5LWVuZCB7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uanVzdGlmeS1iZXR3ZWVuIHtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmdhcC0yIHtcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FwLTQge1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FwLTgge1xcclxcbiAgZ2FwOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucm91bmRlZC1mdWxsIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJvdW5kZWQtbWQge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XFxyXFxufVxcclxcblxcclxcbi5ib3JkZXItYi0yIHtcXHJcXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJvcmRlci10LTIge1xcclxcbiAgYm9yZGVyLXRvcC13aWR0aDogMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYm9yZGVyLXNvbGlkIHtcXHJcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxufVxcclxcblxcclxcbi5ib3JkZXItYmx1ZS03MDAge1xcclxcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcXHJcXG4gIGJvcmRlci1jb2xvcjogcmdiKDI5IDc4IDIxNiAvIHZhcigtLXR3LWJvcmRlci1vcGFjaXR5KSk7XFxyXFxufVxcclxcblxcclxcbi5ib3JkZXItd2hpdGUge1xcclxcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcXHJcXG4gIGJvcmRlci1jb2xvcjogcmdiKDI1NSAyNTUgMjU1IC8gdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJnLWJsdWUtNjAwIHtcXHJcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzNyA5OSAyMzUgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxyXFxufVxcclxcblxcclxcbi5iZy1ibHVlLTcwMCB7XFxyXFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjkgNzggMjE2IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcclxcbn1cXHJcXG5cXHJcXG4uYmctcmVkLTUwMCB7XFxyXFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM5IDY4IDY4IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcclxcbn1cXHJcXG5cXHJcXG4uYmctc2xhdGUtMzAwIHtcXHJcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDMgMjEzIDIyNSAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJnLXNsYXRlLTUwMCB7XFxyXFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAwIDExNiAxMzkgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxyXFxufVxcclxcblxcclxcbi5iZy10cmFuc3BhcmVudCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLmJnLXllbGxvdy01MDAge1xcclxcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNCAxNzkgOCAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXHJcXG59XFxyXFxuXFxyXFxuLnAtNCB7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHgtNCB7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHgtOCB7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHktMiB7XFxyXFxuICBwYWRkaW5nLXRvcDogMC41cmVtO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnB5LTQge1xcclxcbiAgcGFkZGluZy10b3A6IDFyZW07XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnB5LTgge1xcclxcbiAgcGFkZGluZy10b3A6IDJyZW07XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnBsLTQge1xcclxcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucGwtOCB7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5wdC0xNiB7XFxyXFxuICBwYWRkaW5nLXRvcDogNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHQtY2VudGVyIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHQtMnhsIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi50ZXh0LTN4bCB7XFxyXFxuICBmb250LXNpemU6IDEuODc1cmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDIuMjVyZW07XFxyXFxufVxcclxcblxcclxcbi50ZXh0LXNtIHtcXHJcXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMS4yNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHQteGwge1xcclxcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XFxyXFxufVxcclxcblxcclxcbi5mb250LWJvbGQge1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvbnQtbWVkaXVtIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcblxcclxcbi50ZXh0LWJsdWUtNzAwIHtcXHJcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcclxcbiAgY29sb3I6IHJnYigyOSA3OCAyMTYgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHQtc2xhdGUtMjAwIHtcXHJcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcclxcbiAgY29sb3I6IHJnYigyMjYgMjMyIDI0MCAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dC1zbGF0ZS01MDAge1xcclxcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxyXFxuICBjb2xvcjogcmdiKDEwMCAxMTYgMTM5IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxyXFxufVxcclxcblxcclxcbi50ZXh0LXdoaXRlIHtcXHJcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcclxcbiAgY29sb3I6IHJnYigyNTUgMjU1IDI1NSAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcclxcbn1cXHJcXG5cXHJcXG4uZmlsdGVyIHtcXHJcXG4gIGZpbHRlcjogdmFyKC0tdHctYmx1cikgdmFyKC0tdHctYnJpZ2h0bmVzcykgdmFyKC0tdHctY29udHJhc3QpIHZhcigtLXR3LWdyYXlzY2FsZSkgdmFyKC0tdHctaHVlLXJvdGF0ZSkgdmFyKC0tdHctaW52ZXJ0KSB2YXIoLS10dy1zYXR1cmF0ZSkgdmFyKC0tdHctc2VwaWEpIHZhcigtLXR3LWRyb3Atc2hhZG93KTtcXHJcXG59XFxyXFxuXFxyXFxuLnRyYW5zaXRpb24tYWxsIHtcXHJcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGFsbDtcXHJcXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xcclxcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTUwbXM7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWFnZXMvdG9kby1iZy5qcGcnKTtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgYmFja2dyb3VuZC1jbGlwOiBib3JkZXItYm94O1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIC8qIHBhZGRpbmctdG9wOiA1LjQ5cmVtO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDI1dnc7ICovXFxyXFxufVxcclxcblxcclxcbmFzaWRlIHtcXHJcXG4gIHdpZHRoOiAyMHZ3O1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiA3LjM1cmVtO1xcclxcbiAgcmlnaHQ6IDFyZW07XFxyXFxuICBsZWZ0OiAyLjVyZW07XFxyXFxuICBib3R0b206IDFyZW07XFxyXFxuICBvdmVyZmxvdzogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudC1jb250YWluZXIge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiA3LjM1cmVtO1xcclxcbiAgbGVmdDogMjV2dztcXHJcXG4gIHJpZ2h0OiAycmVtO1xcclxcbiAgaGVpZ2h0OiA3OS42dmg7XFxyXFxufVxcclxcblxcclxcbmZvb3RlcntcXHJcXG4gIGJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyLCNwcm9qZWN0cy1oZWFkZXIge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgbGVmdDogMi41cmVtO1xcclxcbiAgd2lkdGg6IDIwdnc7XFxyXFxuICB6LWluZGV4OiAxMDA7XFxyXFxufVxcclxcblxcclxcbmZvcm17XFxyXFxuICB3aWR0aDogMzB2dztcXHJcXG4gIGxlZnQ6IGNhbGMoMjV2dyAtIDFyZW0pO1xcclxcbiAgdG9wOiA3LjM1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAxLjVyZW07XFxyXFxuICByaWdodDogMXJlbTtcXHJcXG4gIGxlZnQ6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI25ldy1wcm9qZWN0LWJ0bntcXHJcXG4gIHBhZGRpbmctYmxvY2s6IC41cmVtO1xcclxcbiAgcGFkZGluZy1pbmxpbmU6IC44cmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2ZpbGUge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxufVxcclxcblxcclxcbiNwcm9maWxlLXBpY3R1cmUge1xcclxcbiAgd2lkdGg6IDQ1cHg7XFxyXFxufVxcclxcblxcclxcbiNwcm9qZWN0cy1oZWFkZXJ7XFxyXFxuICB0b3A6IDcuMzVyZW07XFxyXFxufVxcclxcblxcclxcbiN0YXNrLWNvbnRhaW5lcntcXHJcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxyXFxufVxcclxcblxcclxcbiN0YXNrLWZvcm0ge1xcclxcbiAgbGVmdDogY2FsYyg0MHZ3KTtcXHJcXG4gIHRvcDogMTYuOHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvdmVyXFxcXDpiZy1ibHVlLTYwMDpob3ZlciB7XFxyXFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzcgOTkgMjM1IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcclxcbn1cXHJcXG5cXHJcXG4uaG92ZXJcXFxcOmJnLWJsdWUtNzAwOmhvdmVyIHtcXHJcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyOSA3OCAyMTYgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxyXFxufVxcclxcblxcclxcbi5ob3ZlclxcXFw6YmctcmVkLTcwMDpob3ZlciB7XFxyXFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTg1IDI4IDI4IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcclxcbn1cXHJcXG5cXHJcXG4uaG92ZXJcXFxcOmJnLXNsYXRlLTEwMDpob3ZlciB7XFxyXFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQxIDI0NSAyNDkgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxyXFxufVxcclxcblxcclxcbi5ob3ZlclxcXFw6YmcteWVsbG93LTcwMDpob3ZlciB7XFxyXFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTYxIDk4IDcgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxyXFxufVxcclxcblxcclxcbi5mb2N1c1xcXFw6b3V0bGluZS1ub25lOmZvY3VzIHtcXHJcXG4gIG91dGxpbmU6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gIG91dGxpbmUtb2Zmc2V0OiAycHg7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRE9NTWFuYWdlciB7XHJcblxyXG4gIGNvbnN0cnVjdG9yICgpIHtcclxuXHJcbiAgfVxyXG4gIC8vQWRkIEljb25cclxuICBjcmVhdGVBZGRCdXR0b24gKCkge1xyXG5cclxuICAgIC8vQnV0dG9uXHJcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgYnV0dG9uLmNsYXNzTmFtZSA9ICdiZy1ibHVlLTYwMCByb3VuZGVkLWZ1bGwgaG92ZXI6YmctYmx1ZS03MDAgdHJhbnNpdGlvbi1hbGwnXHJcblxyXG4gICAgLy9JY29uXHJcbiAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpXHJcbiAgICBpY29uLmNsYXNzTmFtZSA9ICd0ZXh0LXhsIHRleHQtc2xhdGUtMjAwIGZhLXNvbGlkIGZhLXBsdXMgZm9udC1tZWRpdW0nXHJcblxyXG4gICAgYnV0dG9uLmFwcGVuZENoaWxkKGljb24pXHJcblxyXG4gICAgcmV0dXJuIGJ1dHRvblxyXG4gIH1cclxuICAvL0RpdiBDb250YWluZXJcclxuICBjcmVhdGVDb250YWluZXIgKCkge1xyXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGRpdi5jbGFzc05hbWUgPSAncC00J1xyXG5cclxuICAgIHJldHVybiBkaXZcclxuICB9XHJcbiAgLy9Gb290ZXJcclxuICBjcmVhdGVGb290ZXIgKCkge1xyXG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJylcclxuICAgICAgZm9vdGVyLmNsYXNzTmFtZSA9ICdib3JkZXItdC0yIGJvcmRlci1zb2xpZCBib3JkZXItd2hpdGUgYmctYmx1ZS03MDAnXHJcblxyXG4gIC8vUGFyYWdyYXBoXHJcbiAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgcC5jbGFzc05hbWUgPSAndGV4dC1zbSB0ZXh0LXNsYXRlLTUwMCB0ZXh0LWNlbnRlciBweS00J1xyXG4gICAgcC5pbm5lckhUTUwgPSBgQ29weXJpZ2h0ICZjb3B5OyAke25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX1gXHJcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQocClcclxuXHJcbiAgICByZXR1cm4gZm9vdGVyXHJcbiAgfVxyXG4gIC8vUGFnZSBoZWFkZXJcclxuICBjcmVhdGVIZWFkZXIgKCkge1xyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJylcclxuICAgIGhlYWRlci5jbGFzc05hbWUgPSAncC00IGJnLWJsdWUtNzAwIG0tYXV0byBteC00IHJvdW5kZWQtdG9wIHJvdW5kZWQtbWQnXHJcbiAgICByZXR1cm4gaGVhZGVyXHJcbiAgfVxyXG4gIC8vSGVhZGluZyBlbGVtZW50XHJcbiAgY3JlYXRlSGVhZGluZyAodGV4dCkge1xyXG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcclxuICAgIGhlYWRpbmcuY2xhc3NOYW1lID0gJ3RleHQteGwgdGV4dC1zbGF0ZS0yMDAnXHJcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gdGV4dFxyXG5cclxuICAgIHJldHVybiBoZWFkaW5nXHJcbiAgfVxyXG4gIC8vSG9yaXpvbnRhbCBsaW5lXHJcbiAgY3JlYXRlSG9yaXpvbnRhbExpbmUgKCkge1xyXG4gICAgY29uc3QgbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJylcclxuICAgIGxpbmUuc3R5bGUuaGVpZ2h0ID0gJzF4cCdcclxuICAgIGxpbmUuY2xhc3NOYW1lID0gJ2JnLXNsYXRlLTUwMCB3LWZ1bGwnXHJcblxyXG4gICAgcmV0dXJuIGxpbmVcclxuICB9XHJcbiAgLy9CdXNpbmVzcyBuYW1lXHJcbiAgY3JlYXRlTG9nbyAodGV4dCkge1xyXG4gICAgY29uc3QgbG9nbyA9IHRoaXMuY3JlYXRlSGVhZGluZyh0ZXh0KVxyXG4gICAgbG9nby5jbGFzc0xpc3QucmVtb3ZlKCd0ZXh0LXhsJylcclxuICAgIGxvZ28uY2xhc3NMaXN0LmFkZCgndGV4dC0yeGwnLCdmb250LWJvbGQnLCd0ZXh0LWNlbnRlcicpXHJcblxyXG4gICAgcmV0dXJuIGxvZ29cclxuICB9XHJcbiAgLy9Qcm9qZWN0IGNvbnRhaW5lclxyXG4gIC8vdXNlZCBmb3IgZGlzbGF5IGluIHRoZSBzaWRlIGJhclxyXG4gIGNyZWF0ZVByb2plY3RDb250YWluZXIgKHByb2plY3ROYW1lKSB7XHJcbiAgICBjb25zdCBwcm9qQ29udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgIHByb2pDb250LmlkID0gYCR7cHJvamVjdE5hbWUudG9Mb3dlckNhc2UoKS5yZXBsYWNlQWxsKCcgJywgJy0nKX0tY29udGFpbmVyYFxyXG4gICAgICBwcm9qQ29udC5jbGFzc05hbWUgPSAndy1mdWxsIGJnLWJsdWUtNjAwIGJvcmRlci10LTIgYm9yZGVyLXNvbGlkIGJvcmRlci13aGl0ZSBob3ZlcjpiZy1ibHVlLTcwMCB0cmFuc2l0aW9uLWFsbCdcclxuXHJcbiAgICAgIC8vTmFtZVxyXG4gICAgICBjb25zdCBwcm9qTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcclxuICAgICAgICBwcm9qTmFtZS5pZCA9IGAke3Byb2plY3ROYW1lLnRvTG93ZXJDYXNlKCkucmVwbGFjZUFsbCgnICcsICctJyl9YFxyXG4gICAgICAgIHByb2pOYW1lLmNsYXNzTmFtZSA9ICdweS0yIHRleHQtc2xhdGUtMjAwIHRleHQteGwgcHgtNCdcclxuICAgICAgICBwcm9qTmFtZS50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lXHJcbiAgICAgIFxyXG4gICAgICAvL0FwcGVuZCBuYW1lXHJcbiAgICAgIHByb2pDb250LmFwcGVuZENoaWxkKHByb2pOYW1lKVxyXG5cclxuICAgICAgcmV0dXJuIHByb2pDb250XHJcbiAgfVxyXG4gIC8vRGVzY3JpcHRpb24gY29udGFpbmVyXHJcbiAgY3JlYXRlUHJvamVjdERlc2NyaXB0aW9uIChkZXNjcmlwdGlvbikge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5jcmVhdGVDb250YWluZXIoKVxyXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2JnLWJsdWUtNjAwJywncHgtOCcsICdweS00JylcclxuXHJcbiAgICAvL1BhcmFncmFwaFxyXG4gICAgY29uc3QgcGFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICBwYXIuY2xhc3NOYW1lID0gJ3RleHQtc2xhdGUtMjAwIHRleHQtbWQnXHJcbiAgICBwYXIudGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvblxyXG5cclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwYXIpXHJcblxyXG4gICAgcmV0dXJuIGNvbnRhaW5lclxyXG4gIH1cclxuICAvL1Byb2plY3QgaGVhZGVyXHJcbiAgLy9kaXNwbGF5IGluIHRoZSBtYWluIGJvZHkgXHJcbiAgLy9QZWlvZCBpcyBhbiBvYmplY3Qgd2l0aCBwZXJpb2Quc3RhcnQgYW5kIHBlcmlvZC5lbmRcclxuICBjcmVhdGVQcm9qZWN0SGVhZGVyIChwcm9qZWN0KXtcclxuICAgIC8vTWFpbiBjb250YWluZXJcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuY3JlYXRlQ29udGFpbmVyKClcclxuICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSAnZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gYmctYmx1ZS02MDAgaXRlbXMtY2VudGVyIHctZnVsbCBweS00IHBsLTgnXHJcbiAgICAvL0FkZCBOYW1lXHJcbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSB0aGlzLmNyZWF0ZUhlYWRpbmcocHJvamVjdC5uYW1lKVxyXG4gICAgcHJvamVjdFRpdGxlLmNsYXNzTGlzdC5hZGQoJ2ZvbnQtYm9sZCcpXHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKVxyXG5cclxuICAgIHJldHVybiBjb250YWluZXJcclxuICB9XHJcbiAgLy9TaWRlIGJhclxyXG4gIGNyZWF0ZVNpZGViYXIgKCkge1xyXG4gICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhc2lkZScpXHJcbiAgICAgc2lkZWJhci5jbGFzc05hbWUgPSAncC00IGJnLWJsdWUtNzAwIHJvdW5kZWQtbWQgcHQtMTYgZmxleCBmbGV4LWNvbCBnYXAtMidcclxuXHJcbiAgICAgcmV0dXJuIHNpZGViYXJcclxuICB9XHJcbiAgLy9Vc2VyIHByb2ZpbGVcclxuICBjcmVhdGVVc2VyUHJvZmlsZSAodXNlck5hbWUpIHtcclxuICAgIC8vUHJvZmlsZSBjb250YWluZXJcclxuICAgIGNvbnN0IHByb2ZpbGUgPSB0aGlzLmNyZWF0ZUNvbnRhaW5lcigpXHJcbiAgICBwcm9maWxlLmNsYXNzTGlzdC5hZGQoJ2ZsZXgnLCAnZmxleC1yb3cnLCAnanVzdGlmeS1lbmQnLCAnaXRlbXMtY2VudGVyJywgJ2dhcC00JylcclxuICAgIHByb2ZpbGUuaWQgPSAncHJvZmlsZSdcclxuXHJcbiAgICAvL3BpY3R1cmUgaW1hZ2VcclxuICAgIGNvbnN0IHBpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbiAgICBwaWMuaWQgPSAncHJvZmlsZS1waWN0dXJlJ1xyXG4gICAgcGljLmNsYXNzTmFtZSA9ICdyb3VuZGVkLWZ1bGwnXHJcbiAgICBwcm9maWxlLmFwcGVuZENoaWxkKHBpYylcclxuXHJcbiAgICAvL3VzZXIgbmFtZVxyXG4gICAgY29uc3QgbmFtZSA9IHRoaXMuY3JlYXRlSGVhZGluZyh1c2VyTmFtZSlcclxuICAgIHByb2ZpbGUucHJlcGVuZChuYW1lKVxyXG5cclxuICAgIHJldHVybiBwcm9maWxlXHJcbiAgfVxyXG4gIGRpc3BsYXlGb3JtIChoYXNoRm9ybUlkKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGhhc2hGb3JtSWQpLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpXHJcbiAgfVxyXG4gIGdldEZvcm1EYXRhIChoYXNoRm9ybUlkKSB7XHJcbiAgICBjb25zdCBkYXRhID0gW11cclxuICAgIC8vR2V0IG5vZGUgbGlzdFxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgJHtoYXNoRm9ybUlkfSBpbnB1dGApLmZvckVhY2goZWxlbWVudCA9PntcclxuICAgICAgLy9nZXQgaW5wdXQgdmFsdWVzIGFuZCBhZGQgdG8gZGF0YSBhcnJheVxyXG4gICAgICBkYXRhLnB1c2goZWxlbWVudC52YWx1ZSlcclxuICAgIH0pXHJcbiAgICByZXR1cm4gZGF0YVxyXG4gIH0gXHJcbiAgaGlkZUZvcm0oaGFzaEZvcm1JZCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihoYXNoRm9ybUlkKS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxyXG4gIH1cclxuICAvL0FwcGVuZCB0byBET01cclxuICByZW5kZXIgKGNvbnRlbnQpIHtcclxuICAgICAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JylcclxuICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50KVxyXG4gICAgfVxyXG4gICAgXHJcbn0iLCJpbXBvcnQgVGFza01hbmFnZXIgZnJvbSBcIi4vdGFza19tYW5hZ2VyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IGV4dGVuZHMgVGFza01hbmFnZXIge1xyXG5cclxuICAgIC8vUHJvamVjdCBvcGVuXHJcbiAgICAjcHJvamVjdE9wZW4gPSBmYWxzZVxyXG4gICAgI2NvbXBsZXRlID0gZmFsc2VcclxuICAgICNkZXNjcmlwdGlvbiA9ICcnXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lKXtcclxuICAgICAgICBzdXBlcigpXHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZVxyXG4gICAgfVxyXG4gICAgLy9jbG9zZSBwcm9qZWN0XHJcbiAgICBjbG9zZSgpe1xyXG4gICAgICAgIHRoaXMuI3Byb2plY3RPcGVuID0gZmFsc2VcclxuICAgIH1cclxuICAgIC8vcmV0dXJuIHZhbHVlIG9mIGRlc2NyaXB0aW9uXHJcbiAgICBnZXREZXNjcmlwdGlvbigpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLiNkZXNjcmlwdGlvblxyXG4gICAgfVxyXG4gICAgLy9pcyBjb21wbGV0ZVxyXG4gICAgaXNDb21wbGV0ZSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLiNjb21wbGV0ZVxyXG4gICAgfVxyXG4gICAgLy9DaGVjayBpZiBwcm9qZWN0IGlzIG9wZW5cclxuICAgIGlzT3Blbigpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLiNwcm9qZWN0T3BlblxyXG4gICAgfVxyXG4gICAgLy9NYXJrIGFzIGNvbXBsZXRlXHJcbiAgICBtYXJrQXNDb21wbGV0ZSgpe1xyXG4gICAgICAgIHRoaXMuI2NvbXBsZXRlID0gdHJ1ZVxyXG4gICAgfVxyXG4gICAgLy9NYXJrIGFzIGluY29tcGxldGVcclxuICAgIG1hcmtBc0luY29tcGxldGUoKXtcclxuICAgICAgICBpZih0aGlzLiNjb21wbGV0ZSlcclxuICAgICAgICAgICAgdGhpcy4jY29tcGxldGUgPSBmYWxzZVxyXG4gICAgfVxyXG4gICAgLy9PcGVuIHByb2plY3RcclxuICAgIG9wZW4oKXtcclxuICAgICAgICB0aGlzLiNwcm9qZWN0T3BlbiA9IHRydWVcclxuICAgIH1cclxuICAgIC8vaW5pdGlhbGl6ZSBkZXNjcmlwaW9uXHJcbiAgICBzZXREZXNjcmlwdGlvbihkZXNjcmlwdGlvbil7XHJcbiAgICAgICAgdGhpcy4jZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcbiIsIlxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0TWFuYWdlciB7XHJcbiAgICAgLypcclxuICAgIFByb2plY3QgbWFuYWdlciBjbGFzcyBwZXJmb3JtcyBvcGVyYXRpb25zIG9uIFByb2plY3RzXHJcbiAgICAqL1xyXG4gICAgI3Byb2plY3RzID0gW11cclxuICAgICNjb21wbGV0ZWRQcm9qZWN0cyA9IFtdXHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcblxyXG4gICAgfVxyXG4gICAgLy9BZGQgdG8gbGlzdFxyXG4gICBcclxuICAgIC8vVXBkYXRlIGNvbXBsZXRlZCBwcm9qZWN0c1xyXG4gICAgYWRkVG9Db21wbGV0ZWQocHJvamVjdCl7XHJcbiAgICAgICAgdGhpcy4jY29tcGxldGVkUHJvamVjdHMucHVzaChwcm9qZWN0KVxyXG4gICAgICAgIHRoaXMucmVtb3ZlUHJvamVjdChwcm9qZWN0KVxyXG4gICAgfVxyXG4gICAgYWRkVG9Qcm9qZWN0TGlzdCAobmV3UHJvamVjdCkge1xyXG4gICAgICAgIHRoaXMuI3Byb2plY3RzLnB1c2gobmV3UHJvamVjdClcclxuICAgIH1cclxuICAgXHJcbiAgICAvL0dldCBsaXN0IG9mIGNvbXBsZXRlZCBwcm9qZWN0c1xyXG4gICAgZ2V0Q29tcGxldGVkKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuI2NvbXBsZXRlZFByb2plY3RzXHJcbiAgICB9XHJcbiAgICAvL2dldCBwcm9qZWN0c1xyXG4gICAgZ2V0UHJvamVjdHMoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy4jcHJvamVjdHNcclxuICAgIH1cclxuICAgIC8vcmVtb3ZlIHByb2plY3QgZnJvbSBsaXN0XHJcbiAgICByZW1vdmVQcm9qZWN0KHByb2plY3Qpe1xyXG4gICAgICAgIHRoaXMuI3Byb2plY3RzID0gdGhpcy4jcHJvamVjdHMuZmlsdGVyKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBpZihlbGVtZW50ID09PSBwcm9qZWN0KVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XHJcbiAgICAvKlxyXG4gICAgICAgIFRhc2sgY2xhc3MgY3JlYXRlIFRhc2sgb2JqZWN0c1xyXG4gICAgKi9cclxuXHJcbiAgICAvL1Rhc2suZGVzY3JpcHRpb25cclxuICAgICNkZXNjcmlwdGlvblxyXG5cclxuICAgIC8vVGFzay5kdWVkYXRlXHJcbiAgICAjZHVlRGF0ZVxyXG4gICAgI2NvbXBsZXRlID0gZmFsc2VcclxuXHJcbiAgICAvL1Rhc2sucHJpb3JpdHlcclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlKXtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGVcclxuICAgIH1cclxuICAgIC8vRWRpdCB0YXNrIHByb3BlcnRpZXNcclxuICAgIGVkaXQodGl0bGUsZGVzY3JpcHRpb24sZHVlRGF0ZSl7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlXHJcbiAgICAgICAgdGhpcy4jZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxyXG4gICAgICAgIHRoaXMuI2R1ZURhdGUgPSBkdWVEYXRlXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICAvL3JldHVybiB2YWx1ZSBvZiBkZXNjcmlwdGlvblxyXG4gICAgZ2V0RGVzY3JpcHRpb24oKXtcclxuICAgICAgICByZXR1cm4gdGhpcy4jZGVzY3JpcHRpb25cclxuICAgIH1cclxuICAgIC8vcmV0dXJuIGR1ZSBkYXRlXHJcbiAgICBnZXREdWVEYXRlKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuI2R1ZURhdGVcclxuICAgIH1cclxuICAgIC8vQ2hlY2sgaWYgY29tcGxldGVcclxuICAgIGlzQ29tcGxldGUoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy4jY29tcGxldGVcclxuICAgIH1cclxuICAgIC8vTWFyayBhcyBjb21wbGV0ZVxyXG4gICAgbWFya0FzQ29tcGxldGUoKXtcclxuICAgICAgICB0aGlzLiNjb21wbGV0ZSA9IHRydWVcclxuICAgIH1cclxuICAgIC8vTWFyayBhcyBpbmNvbXBsZXRlXHJcbiAgICBtYXJrQXNJbmNvbXBsZXRlKCl7XHJcbiAgICAgICAgaWYodGhpcy4jY29tcGxldGUpXHJcbiAgICAgICAgICAgIHRoaXMuI2NvbXBsZXRlID0gZmFsc2VcclxuICAgIH1cclxuICAgIC8vaW5pdGlhbGl6ZSBkZXNjcmlwaW9uXHJcbiAgICBzZXREZXNjcmlwdGlvbihkZXNjcmlwdGlvbil7XHJcbiAgICAgICAgdGhpcy4jZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxyXG4gICAgfVxyXG4gICAgLy9zZXQgZHVlIGRhdGVcclxuICAgIHNldER1ZURhdGUoZHVlRGF0ZSl7XHJcbiAgICAgICAgdGhpcy4jZHVlRGF0ZSA9IGR1ZURhdGVcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2tNYW5hZ2VyIHtcclxuICAgIC8qXHJcbiAgICBUYXNrIG1hbmFnZXIgY2xhc3MgcGVyZm9ybXMgb3BlcmF0aW9ucyB3aXRoIGFuZCBvbiBUYXNrIG9iamVjdHNcclxuICAgIFVzZWQgdG9nZXRoZXIgd2l0aCBUYXNrIGNsYXNzXHJcbiAgICAqL1xyXG4gICAgI3Rhc2tMaXN0ID0gW11cclxuICAgICNjb21wbGV0ZWRUYXNrcyA9IFtdXHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcblxyXG4gICAgfVxyXG4gICAgLy9BZGQgdG8gbGlzdFxyXG4gICAgYWRkVGFzayh0YXNrKXtcclxuICAgICAgICB0aGlzLiN0YXNrTGlzdC5wdXNoKHRhc2spXHJcbiAgICB9XHJcbiAgICAvL1VwZGF0ZSBjb21wbGV0ZWQgdGFza3NcclxuICAgIGFkZFRvQ29tcGxldGVkKHRhc2spe1xyXG4gICAgICAgIHRoaXMuI2NvbXBsZXRlZFRhc2tzLnB1c2godGFzaylcclxuICAgICAgICB0aGlzLnJlbW92ZVRhc2sodGFzaylcclxuICAgIH1cclxuICAgIC8vR2V0IGxpc3Qgb2YgY29tcGxldGVkIHRhc2tzXHJcbiAgICBnZXRDb21wbGV0ZWQoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy4jY29tcGxldGVkVGFza3NcclxuICAgIH1cclxuICAgIC8vZ2V0IHRhc2tzXHJcbiAgICBnZXRUYXNrcygpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLiN0YXNrTGlzdFxyXG4gICAgfVxyXG4gICAgLy9yZW1vdmUgdGFzayBmcm9tIGxpc3RcclxuICAgIHJlbW92ZVRhc2soVGFzayl7XHJcbiAgICAgICAgdGhpcy4jdGFza0xpc3QgPSB0aGlzLiN0YXNrTGlzdC5maWx0ZXIodGFzayA9PiB7XHJcbiAgICAgICAgICAgIGlmKHRhc2sgPT09IFRhc2spXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwidmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mID8gKG9iaikgPT4gKE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmopKSA6IChvYmopID0+IChvYmouX19wcm90b19fKTtcbnZhciBsZWFmUHJvdG90eXBlcztcbi8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuLy8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4vLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbi8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuLy8gbW9kZSAmIDE2OiByZXR1cm4gdmFsdWUgd2hlbiBpdCdzIFByb21pc2UtbGlrZVxuLy8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuX193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcblx0aWYobW9kZSAmIDEpIHZhbHVlID0gdGhpcyh2YWx1ZSk7XG5cdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG5cdGlmKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUpIHtcblx0XHRpZigobW9kZSAmIDQpICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcblx0XHRpZigobW9kZSAmIDE2KSAmJiB0eXBlb2YgdmFsdWUudGhlbiA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuIHZhbHVlO1xuXHR9XG5cdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG5cdHZhciBkZWYgPSB7fTtcblx0bGVhZlByb3RvdHlwZXMgPSBsZWFmUHJvdG90eXBlcyB8fCBbbnVsbCwgZ2V0UHJvdG8oe30pLCBnZXRQcm90byhbXSksIGdldFByb3RvKGdldFByb3RvKV07XG5cdGZvcih2YXIgY3VycmVudCA9IG1vZGUgJiAyICYmIHZhbHVlOyB0eXBlb2YgY3VycmVudCA9PSAnb2JqZWN0JyAmJiAhfmxlYWZQcm90b3R5cGVzLmluZGV4T2YoY3VycmVudCk7IGN1cnJlbnQgPSBnZXRQcm90byhjdXJyZW50KSkge1xuXHRcdE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGN1cnJlbnQpLmZvckVhY2goKGtleSkgPT4gKGRlZltrZXldID0gKCkgPT4gKHZhbHVlW2tleV0pKSk7XG5cdH1cblx0ZGVmWydkZWZhdWx0J10gPSAoKSA9PiAodmFsdWUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGRlZik7XG5cdHJldHVybiBucztcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5mID0ge307XG4vLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4vLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18uZSA9IChjaHVua0lkKSA9PiB7XG5cdHJldHVybiBQcm9taXNlLmFsbChPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmYpLnJlZHVjZSgocHJvbWlzZXMsIGtleSkgPT4ge1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18uZltrZXldKGNodW5rSWQsIHByb21pc2VzKTtcblx0XHRyZXR1cm4gcHJvbWlzZXM7XG5cdH0sIFtdKSk7XG59OyIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFzeW5jIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy51ID0gKGNodW5rSWQpID0+IHtcblx0Ly8gcmV0dXJuIHVybCBmb3IgZmlsZW5hbWVzIGJhc2VkIG9uIHRlbXBsYXRlXG5cdHJldHVybiBcIlwiICsgY2h1bmtJZCArIFwiLlwiICsgXCI4YzU1ZjgwYjhjMDdjMjAyNjEwOFwiICsgXCIuanNcIjtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwidmFyIGluUHJvZ3Jlc3MgPSB7fTtcbnZhciBkYXRhV2VicGFja1ByZWZpeCA9IFwidG9kby1pc3QtLW9uZTpcIjtcbi8vIGxvYWRTY3JpcHQgZnVuY3Rpb24gdG8gbG9hZCBhIHNjcmlwdCB2aWEgc2NyaXB0IHRhZ1xuX193ZWJwYWNrX3JlcXVpcmVfXy5sID0gKHVybCwgZG9uZSwga2V5LCBjaHVua0lkKSA9PiB7XG5cdGlmKGluUHJvZ3Jlc3NbdXJsXSkgeyBpblByb2dyZXNzW3VybF0ucHVzaChkb25lKTsgcmV0dXJuOyB9XG5cdHZhciBzY3JpcHQsIG5lZWRBdHRhY2g7XG5cdGlmKGtleSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc2NyaXB0cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIHMgPSBzY3JpcHRzW2ldO1xuXHRcdFx0aWYocy5nZXRBdHRyaWJ1dGUoXCJzcmNcIikgPT0gdXJsIHx8IHMuZ2V0QXR0cmlidXRlKFwiZGF0YS13ZWJwYWNrXCIpID09IGRhdGFXZWJwYWNrUHJlZml4ICsga2V5KSB7IHNjcmlwdCA9IHM7IGJyZWFrOyB9XG5cdFx0fVxuXHR9XG5cdGlmKCFzY3JpcHQpIHtcblx0XHRuZWVkQXR0YWNoID0gdHJ1ZTtcblx0XHRzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblxuXHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04Jztcblx0XHRzY3JpcHQudGltZW91dCA9IDEyMDtcblx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5uYykge1xuXHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuXHRcdH1cblx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwiZGF0YS13ZWJwYWNrXCIsIGRhdGFXZWJwYWNrUHJlZml4ICsga2V5KTtcblx0XHRzY3JpcHQuc3JjID0gdXJsO1xuXHR9XG5cdGluUHJvZ3Jlc3NbdXJsXSA9IFtkb25lXTtcblx0dmFyIG9uU2NyaXB0Q29tcGxldGUgPSAocHJldiwgZXZlbnQpID0+IHtcblx0XHQvLyBhdm9pZCBtZW0gbGVha3MgaW4gSUUuXG5cdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbDtcblx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG5cdFx0dmFyIGRvbmVGbnMgPSBpblByb2dyZXNzW3VybF07XG5cdFx0ZGVsZXRlIGluUHJvZ3Jlc3NbdXJsXTtcblx0XHRzY3JpcHQucGFyZW50Tm9kZSAmJiBzY3JpcHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzY3JpcHQpO1xuXHRcdGRvbmVGbnMgJiYgZG9uZUZucy5mb3JFYWNoKChmbikgPT4gKGZuKGV2ZW50KSkpO1xuXHRcdGlmKHByZXYpIHJldHVybiBwcmV2KGV2ZW50KTtcblx0fTtcblx0dmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCB1bmRlZmluZWQsIHsgdHlwZTogJ3RpbWVvdXQnLCB0YXJnZXQ6IHNjcmlwdCB9KSwgMTIwMDAwKTtcblx0c2NyaXB0Lm9uZXJyb3IgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9uZXJyb3IpO1xuXHRzY3JpcHQub25sb2FkID0gb25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHNjcmlwdC5vbmxvYWQpO1xuXHRuZWVkQXR0YWNoICYmIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbn07IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImJ1bmRsZVwiOiAwXG59O1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmYuaiA9IChjaHVua0lkLCBwcm9taXNlcykgPT4ge1xuXHRcdC8vIEpTT05QIGNodW5rIGxvYWRpbmcgZm9yIGphdmFzY3JpcHRcblx0XHR2YXIgaW5zdGFsbGVkQ2h1bmtEYXRhID0gX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgPyBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gOiB1bmRlZmluZWQ7XG5cdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhICE9PSAwKSB7IC8vIDAgbWVhbnMgXCJhbHJlYWR5IGluc3RhbGxlZFwiLlxuXG5cdFx0XHQvLyBhIFByb21pc2UgbWVhbnMgXCJjdXJyZW50bHkgbG9hZGluZ1wiLlxuXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG5cdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmKHRydWUpIHsgLy8gYWxsIGNodW5rcyBoYXZlIEpTXG5cdFx0XHRcdFx0Ly8gc2V0dXAgUHJvbWlzZSBpbiBjaHVuayBjYWNoZVxuXHRcdFx0XHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4gKGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IFtyZXNvbHZlLCByZWplY3RdKSk7XG5cdFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0gPSBwcm9taXNlKTtcblxuXHRcdFx0XHRcdC8vIHN0YXJ0IGNodW5rIGxvYWRpbmdcblx0XHRcdFx0XHR2YXIgdXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgX193ZWJwYWNrX3JlcXVpcmVfXy51KGNodW5rSWQpO1xuXHRcdFx0XHRcdC8vIGNyZWF0ZSBlcnJvciBiZWZvcmUgc3RhY2sgdW53b3VuZCB0byBnZXQgdXNlZnVsIHN0YWNrdHJhY2UgbGF0ZXJcblx0XHRcdFx0XHR2YXIgZXJyb3IgPSBuZXcgRXJyb3IoKTtcblx0XHRcdFx0XHR2YXIgbG9hZGluZ0VuZGVkID0gKGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSkge1xuXHRcdFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG5cdFx0XHRcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSAhPT0gMCkgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gdW5kZWZpbmVkO1xuXHRcdFx0XHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcblx0XHRcdFx0XHRcdFx0XHR2YXIgZXJyb3JUeXBlID0gZXZlbnQgJiYgKGV2ZW50LnR5cGUgPT09ICdsb2FkJyA/ICdtaXNzaW5nJyA6IGV2ZW50LnR5cGUpO1xuXHRcdFx0XHRcdFx0XHRcdHZhciByZWFsU3JjID0gZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5zcmM7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IubWVzc2FnZSA9ICdMb2FkaW5nIGNodW5rICcgKyBjaHVua0lkICsgJyBmYWlsZWQuXFxuKCcgKyBlcnJvclR5cGUgKyAnOiAnICsgcmVhbFNyYyArICcpJztcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5uYW1lID0gJ0NodW5rTG9hZEVycm9yJztcblx0XHRcdFx0XHRcdFx0XHRlcnJvci50eXBlID0gZXJyb3JUeXBlO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLnJlcXVlc3QgPSByZWFsU3JjO1xuXHRcdFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rRGF0YVsxXShlcnJvcik7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubCh1cmwsIGxvYWRpbmdFbmRlZCwgXCJjaHVuay1cIiArIGNodW5rSWQsIGNodW5rSWQpO1xuXHRcdFx0XHR9IGVsc2UgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0XHRcdH1cblx0XHR9XG59O1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rdG9kb19pc3Rfb25lXCJdID0gc2VsZltcIndlYnBhY2tDaHVua3RvZG9faXN0X29uZVwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4uL3N0eWxlcy9zdHlsZXMuY3NzJ1xyXG5pbXBvcnQgRE9NTWFuYWdlciBmcm9tICcuL2RvbV9tYW5hZ2VyLmpzJ1xyXG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QuanMnXHJcbmltcG9ydCBQcm9qZWN0TWFuYWdlciBmcm9tICcuL3Byb2plY3RfbWFuYWdlcidcclxuaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrJ1xyXG5pbXBvcnQgVGFza01hbmFnZXIgZnJvbSAnLi90YXNrX21hbmFnZXInXHJcblxyXG5jb25zdCBkb21NYW5hZ2VyID0gbmV3IERPTU1hbmFnZXIoKVxyXG5jb25zdCBwcm9qZWN0TWFuYWdlciA9IG5ldyBQcm9qZWN0TWFuYWdlcigpXHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5UHJvamVjdENyZWRlbnRpYWxzKHByb2plY3Qpe1xyXG4gICAgY29uc3QgcHJvamVjdEhlYWRlciA9IGRvbU1hbmFnZXIuY3JlYXRlUHJvamVjdEhlYWRlcihwcm9qZWN0KVxyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0SGVhZGVyKVxyXG5cclxuXHJcbiAgICAgICAgLy9Qcm9qZWN0IGRlc2NyaXB0aW9uIGFuZCBuZXcgdGFzayBidG5cclxuICAgICAgICBjb25zdCBkZXNjTkJ0bkNvbnRhaW5lciA9IGRvbU1hbmFnZXIuY3JlYXRlQ29udGFpbmVyKClcclxuICAgICAgICBkZXNjTkJ0bkNvbnRhaW5lci5jbGFzc05hbWUgPSAnZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHctZnVsbCdcclxuICAgICAgICAvL0RFU0NSSVBUSU9OXHJcbiAgICAgICAgY29uc3QgcHJvamVjdERlc2NyaXB0aW9uID0gZG9tTWFuYWdlci5jcmVhdGVQcm9qZWN0RGVzY3JpcHRpb24ocHJvamVjdC5nZXREZXNjcmlwdGlvbigpKVxyXG4gICAgICAgIC8vRGlzcGxheSBkZXNjcmlwdGlvblxyXG4gICAgICAgIGRlc2NOQnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3REZXNjcmlwdGlvbilcclxuICAgICAgICBcclxuICAgICAgICAvLyAgTmV3IHRhc2sgYnV0dG9uXHJcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSAnTmV3IFRhc2snXHJcbiAgICAgICAgYnV0dG9uLmNsYXNzTmFtZSA9ICdiZy1zbGF0ZS0zMDAgdGV4dC1ibHVlLTcwMCBweS0yIHB4LTQgcm91bmRlZC1tZCBob3ZlcjpiZy1zbGF0ZS0xMDAnXHJcbiAgICAgICAgYnV0dG9uLmlkID0gJ25ldy10YXNrLWJ0bidcclxuICAgICAgICBcclxuICAgICAgICAvL0Rpc3BsYXkgYnRuXHJcbiAgICAgICAgZGVzY05CdG5Db250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKVxyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjTkJ0bkNvbnRhaW5lcilcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlUYXNrc0NvbnRhaW5lcigpe1xyXG4gICAgIC8vVGFza3MgY29udGFpbmVyXHJcbiAgICAgY29uc3QgdGFza3NDb250YWluZXIgPSBkb21NYW5hZ2VyLmNyZWF0ZUNvbnRhaW5lcigpXHJcbiAgICAgdGFza3NDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndy1mdWxsJywgJ2JnLWJsdWUtNjAwJywgJ2dyaWQnLCAnZ3JpZC0yJywgJ2dhcC00JylcclxuICAgICB0YXNrc0NvbnRhaW5lci5pZCA9ICd0YXNrLWNvbnRhaW5lcidcclxuXHJcbiAgICAgLy9ObyB0YXNrcyB0byBkaXNwbGF5XHJcbiAgICAgY29uc3QgcGFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICAgcGFyLmNsYXNzTmFtZSA9ICd0ZXh0LXNsYXRlLTIwMCB0ZXh0LWNlbnRlciB0ZXh0LTN4bCBmb250LW1lZGl1bSdcclxuICAgICBwYXIuaWQgPSAnbm8tdGFza3MnXHJcbiAgICAgcGFyLnRleHRDb250ZW50ID0gJ05vIFRhc2tzIExpc3RlZCBIZXJlJ1xyXG4gICAgIHRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKHBhcilcclxuXHJcbiAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tzQ29udGFpbmVyKVxyXG59XHJcbi8vIENyZWF0ZSBhbmQgZGlzcGxheSBoZWFkZXJcclxuY29uc3QgaGVhZGVyID0gZG9tTWFuYWdlci5jcmVhdGVIZWFkZXIoKVxyXG4gICAgY29uc3QgbG9nbyA9IGRvbU1hbmFnZXIuY3JlYXRlTG9nbygnUGxhbnNlbicpXHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobG9nbylcclxuICAgIGRvY3VtZW50LmJvZHkucHJlcGVuZChoZWFkZXIpXHJcblxyXG4vL3NpZGViYXJcclxuY29uc3Qgc2lkZWJhciA9IGRvbU1hbmFnZXIuY3JlYXRlU2lkZWJhcigpXHJcbiAgICBkb21NYW5hZ2VyLnJlbmRlcihzaWRlYmFyKVxyXG4gICAgc2lkZWJhci5pZCA9ICdtYWluLXNpZGUtYmFyJ1xyXG5cclxuLy9Db250ZW50IGNvbnRhaW5lclxyXG5jb25zdCBjb250YWluZXIgPSBkb21NYW5hZ2VyLmNyZWF0ZUNvbnRhaW5lcigpXHJcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYmctYmx1ZS03MDAnLCAnZmxleCcsJ2ZsZXgtY29sJywgJ2l0ZW1zLXN0YXJ0JywgJ2p1c3RpZnktc3RhcnQnLCAnZ2FwLTInKVxyXG4gICAgY29udGFpbmVyLmlkID0gJ2NvbnRlbnQtY29udGFpbmVyJ1xyXG4gICAgZG9tTWFuYWdlci5yZW5kZXIoY29udGFpbmVyKVxyXG5cclxuLy9Gb290ZXJcclxuY29uc3QgZm9vdGVyID0gZG9tTWFuYWdlci5jcmVhdGVGb290ZXIoKVxyXG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChmb290ZXIpXHJcblxyXG4vL1VzZXIgcHJvZmlsZVxyXG5jb25zdCBwcm9maWxlID0gZG9tTWFuYWdlci5jcmVhdGVVc2VyUHJvZmlsZSgnVGhlIEFyY2hpdGVjaCcpXHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQocHJvZmlsZSlcclxuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdmbGV4JywgJ2ZsZXgtcm93JywgJ2p1c3RpZnktYmV0d2VlbicsICdpdGVtcy1jZW50ZXInKVxyXG5cclxuICAgIC8vSW1wb3J0IHByb2ZpbGUgcGljXHJcbiAgICBpbXBvcnQoJy4uL2ltYWdlcy9wcm9maWxlLXBpYy5wbmcnKS50aGVuKCh7ZGVmYXVsdDpwaWN9KSA9PntcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvZmlsZS1waWN0dXJlJykuc3JjID0gcGljXHJcbiAgICB9KS5jYXRjaCgoZXJyb3IpPT5jb25zb2xlLmVycm9yKGBFcnJvciBvY3V1cmVkIHdoaWxlIGltcG9ydGluZyBwcm9maWxlIHBpYzogJHtlcnJvcn1gKSlcclxuXHJcbi8vUHJvamVjdHMgaGVhZGVyXHJcbmNvbnN0IHByb2plY3RzSGVhZGVyID0gZG9tTWFuYWdlci5jcmVhdGVDb250YWluZXIoKVxyXG4gICAgcHJvamVjdHNIZWFkZXIuY2xhc3NOYW1lID0gJ2ZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBiZy1ibHVlLTYwMCBweC00IHB5LTInXHJcbiAgICBwcm9qZWN0c0hlYWRlci5pZCA9ICdwcm9qZWN0cy1oZWFkZXInXHJcblxyXG4gICAgLy9IZWFkaW5nXHJcbiAgICBjb25zdCBoZWFkaW5nID0gZG9tTWFuYWdlci5jcmVhdGVIZWFkaW5nKCdNeSBQcm9qZWN0cycpXHJcbiAgICBoZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ2ZvbnQtbWVkaXVtJywgJ3ctZnVsbCcpXHJcbiAgICBwcm9qZWN0c0hlYWRlci5hcHBlbmRDaGlsZChoZWFkaW5nKVxyXG4gICAgXHJcbiAgICAvLyBOZXcgcHJvamVjdCBBZGQgYnV0dG9uXHJcbiAgICBjb25zdCBhZGRCdG4gPSBkb21NYW5hZ2VyLmNyZWF0ZUFkZEJ1dHRvbigpXHJcbiAgICBhZGRCdG4uaWQgPSAnbmV3LXByb2plY3QtYnRuJ1xyXG4gICAgcHJvamVjdHNIZWFkZXIuYXBwZW5kQ2hpbGQoYWRkQnRuKVxyXG4gICAgXHJcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHByb2plY3RzSGVhZGVyKSBcclxuXHJcbiAgICAvL0NyZWF0ZSBkZWZhdWx0IFByb2plY3RcclxuICAgIGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gbmV3IFByb2plY3QoJ1RvZGF5JylcclxuICAgICAgICBkZWZhdWx0UHJvamVjdC5zZXREZXNjcmlwdGlvbignVG9kYXlcXCdzIEFjdGl2aXRpZXMnKVxyXG4gICAgICAgIHByb2plY3RNYW5hZ2VyLmFkZFRvUHJvamVjdExpc3QoZGVmYXVsdFByb2plY3QpXHJcblxyXG4gICAgICAgIC8vRGVmYXVsdCBQcm9qZWN0IENvbnRhaW5lclxyXG4gICAgICAgIGNvbnN0IGRlZmF1bHRQcm9qZWN0Q29udGFpbmVyID0gZG9tTWFuYWdlci5jcmVhdGVQcm9qZWN0Q29udGFpbmVyKGRlZmF1bHRQcm9qZWN0Lm5hbWUpXHJcbiAgICAgICAgc2lkZWJhci5hcHBlbmRDaGlsZChkZWZhdWx0UHJvamVjdENvbnRhaW5lcilcclxuXHJcbiAgICAvL0Rpc3BsYXkgZGVmYXVsdCBwcm9qZWN0XHJcbiAgICAgICAgZGlzcGxheVByb2plY3RDcmVkZW50aWFscyhkZWZhdWx0UHJvamVjdClcclxuICAgICAgICBkaXNwbGF5VGFza3NDb250YWluZXIoKVxyXG4gICAgICAgIFxyXG4gICAgICAgXHJcblxyXG5cclxuICAgIFxyXG4vL0NyZWF0ZSBuZXcgUHJvamVjdFxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIChlKSA9PntcclxuICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PntcclxuICAgICAgICAvL3Byb2plY3QgbWFuYWdlciBjcmVhdGUgbmV3IHByb2plY3RcclxuICAgICAgICBkb21NYW5hZ2VyLmRpc3BsYXlGb3JtKCcjcHJvamVjdC1mb3JtJylcclxuICAgICAgICAvL0Nsb3NlIGZvcm0gb24gY2xpY2tcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGlkZS1wcm9qZWN0LWZvcm0nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xyXG4gICAgICAgICAgICBkb21NYW5hZ2VyLmhpZGVGb3JtKCcjcHJvamVjdC1mb3JtJylcclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vQWRkIGV2ZW50IGxpc3RlbmVyIHRvIGZvcm1cclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtI3Byb2plY3QtZm9ybScpLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT57XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICAgLy9HZXQgZGF0YVxyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gZG9tTWFuYWdlci5nZXRGb3JtRGF0YSgnI3Byb2plY3QtZm9ybScpXHJcbiAgICAgICAgICAgIC8vQ3JlYXRlIG5ldyBQcm9qZWN0XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdChkYXRhWzBdKVxyXG4gICAgICAgICAgICAgICAgcHJvamVjdC5zZXREZXNjcmlwdGlvbihkYXRhWzFdKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy9Qcm9qZWN0IGNvbnRhaW5lclxyXG4gICAgICAgICAgICBjb25zdCBuZXdQcm9qZWNDb250YWluZXIgPSBkb21NYW5hZ2VyLmNyZWF0ZVByb2plY3RDb250YWluZXIocHJvamVjdC5uYW1lKVxyXG4gICAgICAgICAgICAgICAgc2lkZWJhci5hcHBlbmRDaGlsZChuZXdQcm9qZWNDb250YWluZXIpXHJcblxyXG4gICAgICAgICAgICAvL0FkZCB0byBwcm9qZWN0IGxpc3RzXHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0TWFuYWdlci5hZGRUb1Byb2plY3RMaXN0KHByb2plY3QpXHJcbiAgICAgICAgICAgIC8vaGlkZSBwcm9qZWN0IGZvcm1cclxuICAgICAgICAgICAgICAgIGRvbU1hbmFnZXIuaGlkZUZvcm0oJyNwcm9qZWN0LWZvcm0nKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy9DbG9zZSBmb3JtXHJcblxyXG4gICAgICAgIC8vTmV3VGFza1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctdGFzay1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xyXG4gICAgICAgICAgICBkb21NYW5hZ2VyLmRpc3BsYXlGb3JtKCcjdGFzay1mb3JtJylcclxuICAgICAgICAgICAgLy9IaWRlIGZvcm0gb24gYnRuIGNsaWNrXHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNoaWRlLXRhc2stZm9ybScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XHJcbiAgICAgICAgICAgICAgICBkb21NYW5hZ2VyLmhpZGVGb3JtKCcjdGFzay1mb3JtJylcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLy9DcmVhdGUgdGFza1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtI3Rhc2stZm9ybScpLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PntcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICAgICAgLy9nZXQgZGF0YVxyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGRvbU1hbmFnZXIuZ2V0Rm9ybURhdGEoJyN0YXNrLWZvcm0nKVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAvL05ldyB0YXNrXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrID0gbmV3IFRhc2soZGF0YVswXSlcclxuICAgICAgICAgICAgICAgIHRhc2suc2V0RGVzY3JpcHRpb24oW2RhdGFbMV1dKVxyXG4gICAgICAgICAgICAgICAgdGFzay5zZXREdWVEYXRlKGRhdGFbMl0pXHJcbiAgICBcclxuICAgICAgICAgICAgICAgIC8vQWRkIHRvIHRhc2sgbGlzdFxyXG4gICAgICAgICAgICAgICAgY29uc3QgdGFza01hbmFnZXIgPSBuZXcgVGFza01hbmFnZXIoKVxyXG4gICAgICAgICAgICAgICAgdGFza01hbmFnZXIuYWRkVGFzayh0YXNrKVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAvL2Nsb3NlRm9ybVxyXG4gICAgICAgICAgICAgICAgZG9tTWFuYWdlci5oaWRlRm9ybSgnI3Rhc2stZm9ybScpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgIH0pXHJcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0LmdldFRhc2tzKCkpXHJcblxyXG4gICBcclxuICAgIFxyXG5cclxuICAgICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==