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
___CSS_LOADER_EXPORT___.push([module.id, "/*\n! tailwindcss v3.2.7 | MIT License | https://tailwindcss.com\n*/\n\n/*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box;\n  /* 1 */\n  border-width: 0;\n  /* 2 */\n  border-style: solid;\n  /* 2 */\n  border-color: #e5e7eb;\n  /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n5. Use the user's configured `sans` font-feature-settings by default.\n*/\n\nhtml {\n  line-height: 1.5;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n  -moz-tab-size: 4;\n  /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4;\n  /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  /* 4 */\n  font-feature-settings: normal;\n  /* 5 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0;\n  /* 1 */\n  line-height: inherit;\n  /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  border-top-width: 1px;\n  /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0;\n  /* 1 */\n  border-color: inherit;\n  /* 2 */\n  border-collapse: collapse;\n  /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  font-weight: inherit;\n  /* 1 */\n  line-height: inherit;\n  /* 1 */\n  color: inherit;\n  /* 1 */\n  margin: 0;\n  /* 2 */\n  padding: 0;\n  /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button;\n  /* 1 */\n  background-color: transparent;\n  /* 2 */\n  background-image: none;\n  /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1;\n  /* 1 */\n  color: #9ca3af;\n  /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  /* 1 */\n  color: #9ca3af;\n  /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block;\n  /* 1 */\n  vertical-align: middle;\n  /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n.container {\n  width: 100%;\n}\n\n@media (min-width: 640px) {\n  .container {\n    max-width: 640px;\n  }\n}\n\n@media (min-width: 768px) {\n  .container {\n    max-width: 768px;\n  }\n}\n\n@media (min-width: 1024px) {\n  .container {\n    max-width: 1024px;\n  }\n}\n\n@media (min-width: 1280px) {\n  .container {\n    max-width: 1280px;\n  }\n}\n\n@media (min-width: 1536px) {\n  .container {\n    max-width: 1536px;\n  }\n}\n\n.absolute {\n  position: absolute;\n}\n\n.m-auto {\n  margin: auto;\n}\n\n.mx-4 {\n  margin-left: 1rem;\n  margin-right: 1rem;\n}\n\n.mt-4 {\n  margin-top: 1rem;\n}\n\n.flex {\n  display: flex;\n}\n\n.grid {\n  display: grid;\n}\n\n.hidden {\n  display: none;\n}\n\n.w-full {\n  width: 100%;\n}\n\n.flex-row {\n  flex-direction: row;\n}\n\n.flex-col {\n  flex-direction: column;\n}\n\n.items-start {\n  align-items: flex-start;\n}\n\n.items-center {\n  align-items: center;\n}\n\n.items-stretch {\n  align-items: stretch;\n}\n\n.justify-start {\n  justify-content: flex-start;\n}\n\n.justify-end {\n  justify-content: flex-end;\n}\n\n.justify-between {\n  justify-content: space-between;\n}\n\n.gap-2 {\n  gap: 0.5rem;\n}\n\n.gap-4 {\n  gap: 1rem;\n}\n\n.gap-8 {\n  gap: 2rem;\n}\n\n.overflow-hidden {\n  overflow: hidden;\n}\n\n.rounded-full {\n  border-radius: 9999px;\n}\n\n.rounded-md {\n  border-radius: 0.375rem;\n}\n\n.rounded-t-md {\n  border-top-left-radius: 0.375rem;\n  border-top-right-radius: 0.375rem;\n}\n\n.border-b-2 {\n  border-bottom-width: 2px;\n}\n\n.border-t-2 {\n  border-top-width: 2px;\n}\n\n.border-solid {\n  border-style: solid;\n}\n\n.border-blue-700 {\n  --tw-border-opacity: 1;\n  border-color: rgb(29 78 216 / var(--tw-border-opacity));\n}\n\n.border-white {\n  --tw-border-opacity: 1;\n  border-color: rgb(255 255 255 / var(--tw-border-opacity));\n}\n\n.bg-blue-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(37 99 235 / var(--tw-bg-opacity));\n}\n\n.bg-blue-700 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(29 78 216 / var(--tw-bg-opacity));\n}\n\n.bg-green-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(34 197 94 / var(--tw-bg-opacity));\n}\n\n.bg-red-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(239 68 68 / var(--tw-bg-opacity));\n}\n\n.bg-slate-200 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(226 232 240 / var(--tw-bg-opacity));\n}\n\n.bg-slate-300 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(203 213 225 / var(--tw-bg-opacity));\n}\n\n.bg-slate-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(100 116 139 / var(--tw-bg-opacity));\n}\n\n.bg-transparent {\n  background-color: transparent;\n}\n\n.bg-yellow-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(234 179 8 / var(--tw-bg-opacity));\n}\n\n.p-4 {\n  padding: 1rem;\n}\n\n.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n\n.px-8 {\n  padding-left: 2rem;\n  padding-right: 2rem;\n}\n\n.py-16 {\n  padding-top: 4rem;\n  padding-bottom: 4rem;\n}\n\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n\n.py-4 {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n\n.py-8 {\n  padding-top: 2rem;\n  padding-bottom: 2rem;\n}\n\n.pb-2 {\n  padding-bottom: 0.5rem;\n}\n\n.pl-4 {\n  padding-left: 1rem;\n}\n\n.pl-8 {\n  padding-left: 2rem;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.text-2xl {\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\n\n.text-3xl {\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n}\n\n.text-lg {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n\n.text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n\n.font-bold {\n  font-weight: 700;\n}\n\n.font-medium {\n  font-weight: 500;\n}\n\n.text-blue-700 {\n  --tw-text-opacity: 1;\n  color: rgb(29 78 216 / var(--tw-text-opacity));\n}\n\n.text-slate-200 {\n  --tw-text-opacity: 1;\n  color: rgb(226 232 240 / var(--tw-text-opacity));\n}\n\n.text-slate-500 {\n  --tw-text-opacity: 1;\n  color: rgb(100 116 139 / var(--tw-text-opacity));\n}\n\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n\n.filter {\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n\n.transition-all {\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n\nbody {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-clip: border-box;\n  height: 100vh;\n  /* padding-top: 5.49rem;\n    padding-left: 25vw; */\n}\n\naside {\n  width: 20vw;\n  position: fixed;\n  top: 7.35rem;\n  right: 1rem;\n  left: 2.5rem;\n  bottom: 1rem;\n  overflow: scroll;\n}\n\n#content-container {\n  position: fixed;\n  top: 7.35rem;\n  left: 25vw;\n  right: 2rem;\n  height: 79.6vh;\n  overflow: scroll;\n}\n\nfooter{\n  bottom: 1rem;\n}\n\nfooter,#projects-header {\n  position: fixed;\n  left: 2.5rem;\n  width: 20vw;\n  z-index: 100;\n}\n\nform{\n  width: 30vw;\n  left: calc(25vw - 1rem);\n  top: 7.35rem;\n}\n\nheader {\n  position: fixed;\n  top: 1.5rem;\n  right: 1rem;\n  left: 1.5rem;\n}\n\n#new-project-btn{\n  padding-block: .5rem;\n  padding-inline: .8rem;\n  border-radius: 30px;\n}\n\n#profile {\n  position: absolute;\n  right: 0;\n}\n\n#profile-picture {\n  width: 45px;\n}\n\n#projects-header{\n  top: 7.35rem;\n}\n\n#tasks-container{\n  /* overflow: scroll; */\n  display: grid;\n  grid-template-columns: repeat( 2, 1fr);\n}\n\n#edit-task-form,\n#task-form {\n  left: calc(40vw);\n  top: 16.8rem;\n}\n\n.hover\\:bg-blue-600:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(37 99 235 / var(--tw-bg-opacity));\n}\n\n.hover\\:bg-blue-700:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(29 78 216 / var(--tw-bg-opacity));\n}\n\n.hover\\:bg-red-700:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(185 28 28 / var(--tw-bg-opacity));\n}\n\n.hover\\:bg-slate-100:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(241 245 249 / var(--tw-bg-opacity));\n}\n\n.hover\\:bg-yellow-700:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(161 98 7 / var(--tw-bg-opacity));\n}\n\n.focus\\:outline-none:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"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","sourcesContent":["/*\n! tailwindcss v3.2.7 | MIT License | https://tailwindcss.com\n*/\n\n/*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box;\n  /* 1 */\n  border-width: 0;\n  /* 2 */\n  border-style: solid;\n  /* 2 */\n  border-color: #e5e7eb;\n  /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n5. Use the user's configured `sans` font-feature-settings by default.\n*/\n\nhtml {\n  line-height: 1.5;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n  -moz-tab-size: 4;\n  /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4;\n  /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  /* 4 */\n  font-feature-settings: normal;\n  /* 5 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0;\n  /* 1 */\n  line-height: inherit;\n  /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  border-top-width: 1px;\n  /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0;\n  /* 1 */\n  border-color: inherit;\n  /* 2 */\n  border-collapse: collapse;\n  /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  font-weight: inherit;\n  /* 1 */\n  line-height: inherit;\n  /* 1 */\n  color: inherit;\n  /* 1 */\n  margin: 0;\n  /* 2 */\n  padding: 0;\n  /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button;\n  /* 1 */\n  background-color: transparent;\n  /* 2 */\n  background-image: none;\n  /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1;\n  /* 1 */\n  color: #9ca3af;\n  /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  /* 1 */\n  color: #9ca3af;\n  /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block;\n  /* 1 */\n  vertical-align: middle;\n  /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n.container {\n  width: 100%;\n}\n\n@media (min-width: 640px) {\n  .container {\n    max-width: 640px;\n  }\n}\n\n@media (min-width: 768px) {\n  .container {\n    max-width: 768px;\n  }\n}\n\n@media (min-width: 1024px) {\n  .container {\n    max-width: 1024px;\n  }\n}\n\n@media (min-width: 1280px) {\n  .container {\n    max-width: 1280px;\n  }\n}\n\n@media (min-width: 1536px) {\n  .container {\n    max-width: 1536px;\n  }\n}\n\n.absolute {\n  position: absolute;\n}\n\n.m-auto {\n  margin: auto;\n}\n\n.mx-4 {\n  margin-left: 1rem;\n  margin-right: 1rem;\n}\n\n.mt-4 {\n  margin-top: 1rem;\n}\n\n.flex {\n  display: flex;\n}\n\n.grid {\n  display: grid;\n}\n\n.hidden {\n  display: none;\n}\n\n.w-full {\n  width: 100%;\n}\n\n.flex-row {\n  flex-direction: row;\n}\n\n.flex-col {\n  flex-direction: column;\n}\n\n.items-start {\n  align-items: flex-start;\n}\n\n.items-center {\n  align-items: center;\n}\n\n.items-stretch {\n  align-items: stretch;\n}\n\n.justify-start {\n  justify-content: flex-start;\n}\n\n.justify-end {\n  justify-content: flex-end;\n}\n\n.justify-between {\n  justify-content: space-between;\n}\n\n.gap-2 {\n  gap: 0.5rem;\n}\n\n.gap-4 {\n  gap: 1rem;\n}\n\n.gap-8 {\n  gap: 2rem;\n}\n\n.overflow-hidden {\n  overflow: hidden;\n}\n\n.rounded-full {\n  border-radius: 9999px;\n}\n\n.rounded-md {\n  border-radius: 0.375rem;\n}\n\n.rounded-t-md {\n  border-top-left-radius: 0.375rem;\n  border-top-right-radius: 0.375rem;\n}\n\n.border-b-2 {\n  border-bottom-width: 2px;\n}\n\n.border-t-2 {\n  border-top-width: 2px;\n}\n\n.border-solid {\n  border-style: solid;\n}\n\n.border-blue-700 {\n  --tw-border-opacity: 1;\n  border-color: rgb(29 78 216 / var(--tw-border-opacity));\n}\n\n.border-white {\n  --tw-border-opacity: 1;\n  border-color: rgb(255 255 255 / var(--tw-border-opacity));\n}\n\n.bg-blue-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(37 99 235 / var(--tw-bg-opacity));\n}\n\n.bg-blue-700 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(29 78 216 / var(--tw-bg-opacity));\n}\n\n.bg-green-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(34 197 94 / var(--tw-bg-opacity));\n}\n\n.bg-red-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(239 68 68 / var(--tw-bg-opacity));\n}\n\n.bg-slate-200 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(226 232 240 / var(--tw-bg-opacity));\n}\n\n.bg-slate-300 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(203 213 225 / var(--tw-bg-opacity));\n}\n\n.bg-slate-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(100 116 139 / var(--tw-bg-opacity));\n}\n\n.bg-transparent {\n  background-color: transparent;\n}\n\n.bg-yellow-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(234 179 8 / var(--tw-bg-opacity));\n}\n\n.p-4 {\n  padding: 1rem;\n}\n\n.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n\n.px-8 {\n  padding-left: 2rem;\n  padding-right: 2rem;\n}\n\n.py-16 {\n  padding-top: 4rem;\n  padding-bottom: 4rem;\n}\n\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n\n.py-4 {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n\n.py-8 {\n  padding-top: 2rem;\n  padding-bottom: 2rem;\n}\n\n.pb-2 {\n  padding-bottom: 0.5rem;\n}\n\n.pl-4 {\n  padding-left: 1rem;\n}\n\n.pl-8 {\n  padding-left: 2rem;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.text-2xl {\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\n\n.text-3xl {\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n}\n\n.text-lg {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n\n.text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n\n.font-bold {\n  font-weight: 700;\n}\n\n.font-medium {\n  font-weight: 500;\n}\n\n.text-blue-700 {\n  --tw-text-opacity: 1;\n  color: rgb(29 78 216 / var(--tw-text-opacity));\n}\n\n.text-slate-200 {\n  --tw-text-opacity: 1;\n  color: rgb(226 232 240 / var(--tw-text-opacity));\n}\n\n.text-slate-500 {\n  --tw-text-opacity: 1;\n  color: rgb(100 116 139 / var(--tw-text-opacity));\n}\n\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n\n.filter {\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n\n.transition-all {\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n\nbody {\n  background-image: url('../images/todo-bg.jpg');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-clip: border-box;\n  height: 100vh;\n  /* padding-top: 5.49rem;\n    padding-left: 25vw; */\n}\n\naside {\n  width: 20vw;\n  position: fixed;\n  top: 7.35rem;\n  right: 1rem;\n  left: 2.5rem;\n  bottom: 1rem;\n  overflow: scroll;\n}\n\n#content-container {\n  position: fixed;\n  top: 7.35rem;\n  left: 25vw;\n  right: 2rem;\n  height: 79.6vh;\n  overflow: scroll;\n}\n\nfooter{\n  bottom: 1rem;\n}\n\nfooter,#projects-header {\n  position: fixed;\n  left: 2.5rem;\n  width: 20vw;\n  z-index: 100;\n}\n\nform{\n  width: 30vw;\n  left: calc(25vw - 1rem);\n  top: 7.35rem;\n}\n\nheader {\n  position: fixed;\n  top: 1.5rem;\n  right: 1rem;\n  left: 1.5rem;\n}\n\n#new-project-btn{\n  padding-block: .5rem;\n  padding-inline: .8rem;\n  border-radius: 30px;\n}\n\n#profile {\n  position: absolute;\n  right: 0;\n}\n\n#profile-picture {\n  width: 45px;\n}\n\n#projects-header{\n  top: 7.35rem;\n}\n\n#tasks-container{\n  /* overflow: scroll; */\n  display: grid;\n  grid-template-columns: repeat( 2, 1fr);\n}\n\n#edit-task-form,\n#task-form {\n  left: calc(40vw);\n  top: 16.8rem;\n}\n\n.hover\\:bg-blue-600:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(37 99 235 / var(--tw-bg-opacity));\n}\n\n.hover\\:bg-blue-700:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(29 78 216 / var(--tw-bg-opacity));\n}\n\n.hover\\:bg-red-700:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(185 28 28 / var(--tw-bg-opacity));\n}\n\n.hover\\:bg-slate-100:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(241 245 249 / var(--tw-bg-opacity));\n}\n\n.hover\\:bg-yellow-700:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(161 98 7 / var(--tw-bg-opacity));\n}\n\n.focus\\:outline-none:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/date-fns/esm/_lib/assign/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/assign/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ assign)
/* harmony export */ });
function assign(target, object) {
  if (target == null) {
    throw new TypeError('assign requires that input parameter not be null or undefined');
  }

  for (var property in object) {
    if (Object.prototype.hasOwnProperty.call(object, property)) {
      ;
      target[property] = object[property];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/cloneObject/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/cloneObject/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ cloneObject)
/* harmony export */ });
/* harmony import */ var _assign_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assign/index.js */ "./node_modules/date-fns/esm/_lib/assign/index.js");

function cloneObject(object) {
  return (0,_assign_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, object);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultLocale/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../locale/en-US/index.js */ "./node_modules/date-fns/esm/locale/en-US/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDefaultOptions": () => (/* binding */ getDefaultOptions),
/* harmony export */   "setDefaultOptions": () => (/* binding */ setDefaultOptions)
/* harmony export */ });
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/roundingMethods/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/roundingMethods/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRoundingMethod": () => (/* binding */ getRoundingMethod)
/* harmony export */ });
var roundingMap = {
  ceil: Math.ceil,
  round: Math.round,
  floor: Math.floor,
  trunc: function trunc(value) {
    return value < 0 ? Math.ceil(value) : Math.floor(value);
  } // Math.trunc is not supported by IE

};
var defaultRoundingMethod = 'trunc';
function getRoundingMethod(method) {
  return method ? roundingMap[method] : roundingMap[defaultRoundingMethod];
}

/***/ }),

/***/ "./node_modules/date-fns/esm/compareAsc/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/compareAsc/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ compareAsc)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name compareAsc
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * @param {Date|Number} dateLeft - the first date to compare
 * @param {Date|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * const result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */

function compareAsc(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var diff = dateLeft.getTime() - dateRight.getTime();

  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1; // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInCalendarMonths/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInCalendarMonths/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInCalendarMonths)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name differenceInCalendarMonths
 * @category Month Helpers
 * @summary Get the number of calendar months between the given dates.
 *
 * @description
 * Get the number of calendar months between the given dates.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar months
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many calendar months are between 31 January 2014 and 1 September 2014?
 * const result = differenceInCalendarMonths(
 *   new Date(2014, 8, 1),
 *   new Date(2014, 0, 31)
 * )
 * //=> 8
 */

function differenceInCalendarMonths(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var yearDiff = dateLeft.getFullYear() - dateRight.getFullYear();
  var monthDiff = dateLeft.getMonth() - dateRight.getMonth();
  return yearDiff * 12 + monthDiff;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInMilliseconds/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInMilliseconds/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInMilliseconds)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name differenceInMilliseconds
 * @category Millisecond Helpers
 * @summary Get the number of milliseconds between the given dates.
 *
 * @description
 * Get the number of milliseconds between the given dates.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of milliseconds
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many milliseconds are between
 * // 2 July 2014 12:30:20.600 and 2 July 2014 12:30:21.700?
 * const result = differenceInMilliseconds(
 *   new Date(2014, 6, 2, 12, 30, 21, 700),
 *   new Date(2014, 6, 2, 12, 30, 20, 600)
 * )
 * //=> 1100
 */

function differenceInMilliseconds(dateLeft, dateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  return (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dateLeft).getTime() - (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dateRight).getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInMonths/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInMonths/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInMonths)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _differenceInCalendarMonths_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../differenceInCalendarMonths/index.js */ "./node_modules/date-fns/esm/differenceInCalendarMonths/index.js");
/* harmony import */ var _compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../compareAsc/index.js */ "./node_modules/date-fns/esm/compareAsc/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _isLastDayOfMonth_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../isLastDayOfMonth/index.js */ "./node_modules/date-fns/esm/isLastDayOfMonth/index.js");





/**
 * @name differenceInMonths
 * @category Month Helpers
 * @summary Get the number of full months between the given dates.
 *
 * @description
 * Get the number of full months between the given dates using trunc as a default rounding method.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of full months
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many full months are between 31 January 2014 and 1 September 2014?
 * const result = differenceInMonths(new Date(2014, 8, 1), new Date(2014, 0, 31))
 * //=> 7
 */

function differenceInMonths(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var sign = (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dateLeft, dateRight);
  var difference = Math.abs((0,_differenceInCalendarMonths_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dateLeft, dateRight));
  var result; // Check for the difference of less than month

  if (difference < 1) {
    result = 0;
  } else {
    if (dateLeft.getMonth() === 1 && dateLeft.getDate() > 27) {
      // This will check if the date is end of Feb and assign a higher end of month date
      // to compare it with Jan
      dateLeft.setDate(30);
    }

    dateLeft.setMonth(dateLeft.getMonth() - sign * difference); // Math.abs(diff in full months - diff in calendar months) === 1 if last calendar month is not full
    // If so, result must be decreased by 1 in absolute value

    var isLastMonthNotFull = (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dateLeft, dateRight) === -sign; // Check for cases of one full calendar month

    if ((0,_isLastDayOfMonth_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft)) && difference === 1 && (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDateLeft, dateRight) === 1) {
      isLastMonthNotFull = false;
    }

    result = sign * (difference - Number(isLastMonthNotFull));
  } // Prevent negative zero


  return result === 0 ? 0 : result;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInSeconds/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInSeconds/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInSeconds)
/* harmony export */ });
/* harmony import */ var _differenceInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../differenceInMilliseconds/index.js */ "./node_modules/date-fns/esm/differenceInMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_roundingMethods_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/roundingMethods/index.js */ "./node_modules/date-fns/esm/_lib/roundingMethods/index.js");



/**
 * @name differenceInSeconds
 * @category Second Helpers
 * @summary Get the number of seconds between the given dates.
 *
 * @description
 * Get the number of seconds between the given dates.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @param {Object} [options] - an object with options.
 * @param {String} [options.roundingMethod='trunc'] - a rounding method (`ceil`, `floor`, `round` or `trunc`)
 * @returns {Number} the number of seconds
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many seconds are between
 * // 2 July 2014 12:30:07.999 and 2 July 2014 12:30:20.000?
 * const result = differenceInSeconds(
 *   new Date(2014, 6, 2, 12, 30, 20, 0),
 *   new Date(2014, 6, 2, 12, 30, 7, 999)
 * )
 * //=> 12
 */

function differenceInSeconds(dateLeft, dateRight, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var diff = (0,_differenceInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dateLeft, dateRight) / 1000;
  return (0,_lib_roundingMethods_index_js__WEBPACK_IMPORTED_MODULE_2__.getRoundingMethod)(options === null || options === void 0 ? void 0 : options.roundingMethod)(diff);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/endOfDay/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/endOfDay/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ endOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name endOfDay
 * @category Day Helpers
 * @summary Return the end of a day for the given date.
 *
 * @description
 * Return the end of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of a day for 2 September 2014 11:55:00:
 * const result = endOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 23:59:59.999
 */

function endOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(23, 59, 59, 999);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/endOfMonth/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/endOfMonth/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ endOfMonth)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name endOfMonth
 * @category Month Helpers
 * @summary Return the end of a month for the given date.
 *
 * @description
 * Return the end of a month for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of a month for 2 September 2014 11:55:00:
 * const result = endOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 23:59:59.999
 */

function endOfMonth(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var month = date.getMonth();
  date.setFullYear(date.getFullYear(), month + 1, 0);
  date.setHours(23, 59, 59, 999);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/formatDistance/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/formatDistance/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ formatDistance)
/* harmony export */ });
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");
/* harmony import */ var _compareAsc_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../compareAsc/index.js */ "./node_modules/date-fns/esm/compareAsc/index.js");
/* harmony import */ var _differenceInMonths_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../differenceInMonths/index.js */ "./node_modules/date-fns/esm/differenceInMonths/index.js");
/* harmony import */ var _differenceInSeconds_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../differenceInSeconds/index.js */ "./node_modules/date-fns/esm/differenceInSeconds/index.js");
/* harmony import */ var _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/defaultLocale/index.js */ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_cloneObject_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_lib/cloneObject/index.js */ "./node_modules/date-fns/esm/_lib/cloneObject/index.js");
/* harmony import */ var _lib_assign_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_lib/assign/index.js */ "./node_modules/date-fns/esm/_lib/assign/index.js");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");










var MINUTES_IN_DAY = 1440;
var MINUTES_IN_ALMOST_TWO_DAYS = 2520;
var MINUTES_IN_MONTH = 43200;
var MINUTES_IN_TWO_MONTHS = 86400;
/**
 * @name formatDistance
 * @category Common Helpers
 * @summary Return the distance between the given dates in words.
 *
 * @description
 * Return the distance between the given dates in words.
 *
 * | Distance between dates                                            | Result              |
 * |-------------------------------------------------------------------|---------------------|
 * | 0 ... 30 secs                                                     | less than a minute  |
 * | 30 secs ... 1 min 30 secs                                         | 1 minute            |
 * | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |
 * | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |
 * | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |
 * | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |
 * | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |
 * | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |
 * | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |
 * | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |
 * | 1 yr ... 1 yr 3 months                                            | about 1 year        |
 * | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |
 * | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |
 * | N yrs ... N yrs 3 months                                          | about N years       |
 * | N yrs 3 months ... N yrs 9 months                                 | over N years        |
 * | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |
 *
 * With `options.includeSeconds == true`:
 * | Distance between dates | Result               |
 * |------------------------|----------------------|
 * | 0 secs ... 5 secs      | less than 5 seconds  |
 * | 5 secs ... 10 secs     | less than 10 seconds |
 * | 10 secs ... 20 secs    | less than 20 seconds |
 * | 20 secs ... 40 secs    | half a minute        |
 * | 40 secs ... 60 secs    | less than a minute   |
 * | 60 secs ... 90 secs    | 1 minute             |
 *
 * @param {Date|Number} date - the date
 * @param {Date|Number} baseDate - the date to compare with
 * @param {Object} [options] - an object with options.
 * @param {Boolean} [options.includeSeconds=false] - distances less than a minute are more detailed
 * @param {Boolean} [options.addSuffix=false] - result indicates if the second date is earlier or later than the first
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @returns {String} the distance in words
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `baseDate` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `formatDistance` property
 *
 * @example
 * // What is the distance between 2 July 2014 and 1 January 2015?
 * const result = formatDistance(new Date(2014, 6, 2), new Date(2015, 0, 1))
 * //=> '6 months'
 *
 * @example
 * // What is the distance between 1 January 2015 00:00:15
 * // and 1 January 2015 00:00:00, including seconds?
 * const result = formatDistance(
 *   new Date(2015, 0, 1, 0, 0, 15),
 *   new Date(2015, 0, 1, 0, 0, 0),
 *   { includeSeconds: true }
 * )
 * //=> 'less than 20 seconds'
 *
 * @example
 * // What is the distance from 1 January 2016
 * // to 1 January 2015, with a suffix?
 * const result = formatDistance(new Date(2015, 0, 1), new Date(2016, 0, 1), {
 *   addSuffix: true
 * })
 * //=> 'about 1 year ago'
 *
 * @example
 * // What is the distance between 1 August 2016 and 1 January 2015 in Esperanto?
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = formatDistance(new Date(2016, 7, 1), new Date(2015, 0, 1), {
 *   locale: eoLocale
 * })
 * //=> 'pli ol 1 jaro'
 */

function formatDistance(dirtyDate, dirtyBaseDate, options) {
  var _ref, _options$locale;

  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var locale = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions.locale) !== null && _ref !== void 0 ? _ref : _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__["default"];

  if (!locale.formatDistance) {
    throw new RangeError('locale must contain formatDistance property');
  }

  var comparison = (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate, dirtyBaseDate);

  if (isNaN(comparison)) {
    throw new RangeError('Invalid time value');
  }

  var localizeOptions = (0,_lib_assign_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_lib_cloneObject_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(options), {
    addSuffix: Boolean(options === null || options === void 0 ? void 0 : options.addSuffix),
    comparison: comparison
  });
  var dateLeft;
  var dateRight;

  if (comparison > 0) {
    dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(dirtyBaseDate);
    dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(dirtyDate);
  } else {
    dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(dirtyDate);
    dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(dirtyBaseDate);
  }

  var seconds = (0,_differenceInSeconds_index_js__WEBPACK_IMPORTED_MODULE_7__["default"])(dateRight, dateLeft);
  var offsetInSeconds = ((0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_8__["default"])(dateRight) - (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_8__["default"])(dateLeft)) / 1000;
  var minutes = Math.round((seconds - offsetInSeconds) / 60);
  var months; // 0 up to 2 mins

  if (minutes < 2) {
    if (options !== null && options !== void 0 && options.includeSeconds) {
      if (seconds < 5) {
        return locale.formatDistance('lessThanXSeconds', 5, localizeOptions);
      } else if (seconds < 10) {
        return locale.formatDistance('lessThanXSeconds', 10, localizeOptions);
      } else if (seconds < 20) {
        return locale.formatDistance('lessThanXSeconds', 20, localizeOptions);
      } else if (seconds < 40) {
        return locale.formatDistance('halfAMinute', 0, localizeOptions);
      } else if (seconds < 60) {
        return locale.formatDistance('lessThanXMinutes', 1, localizeOptions);
      } else {
        return locale.formatDistance('xMinutes', 1, localizeOptions);
      }
    } else {
      if (minutes === 0) {
        return locale.formatDistance('lessThanXMinutes', 1, localizeOptions);
      } else {
        return locale.formatDistance('xMinutes', minutes, localizeOptions);
      }
    } // 2 mins up to 0.75 hrs

  } else if (minutes < 45) {
    return locale.formatDistance('xMinutes', minutes, localizeOptions); // 0.75 hrs up to 1.5 hrs
  } else if (minutes < 90) {
    return locale.formatDistance('aboutXHours', 1, localizeOptions); // 1.5 hrs up to 24 hrs
  } else if (minutes < MINUTES_IN_DAY) {
    var hours = Math.round(minutes / 60);
    return locale.formatDistance('aboutXHours', hours, localizeOptions); // 1 day up to 1.75 days
  } else if (minutes < MINUTES_IN_ALMOST_TWO_DAYS) {
    return locale.formatDistance('xDays', 1, localizeOptions); // 1.75 days up to 30 days
  } else if (minutes < MINUTES_IN_MONTH) {
    var days = Math.round(minutes / MINUTES_IN_DAY);
    return locale.formatDistance('xDays', days, localizeOptions); // 1 month up to 2 months
  } else if (minutes < MINUTES_IN_TWO_MONTHS) {
    months = Math.round(minutes / MINUTES_IN_MONTH);
    return locale.formatDistance('aboutXMonths', months, localizeOptions);
  }

  months = (0,_differenceInMonths_index_js__WEBPACK_IMPORTED_MODULE_9__["default"])(dateRight, dateLeft); // 2 months up to 12 months

  if (months < 12) {
    var nearestMonth = Math.round(minutes / MINUTES_IN_MONTH);
    return locale.formatDistance('xMonths', nearestMonth, localizeOptions); // 1 year up to max Date
  } else {
    var monthsSinceStartOfYear = months % 12;
    var years = Math.floor(months / 12); // N years up to 1 years 3 months

    if (monthsSinceStartOfYear < 3) {
      return locale.formatDistance('aboutXYears', years, localizeOptions); // N years 3 months up to N years 9 months
    } else if (monthsSinceStartOfYear < 9) {
      return locale.formatDistance('overXYears', years, localizeOptions); // N years 9 months up to N year 12 months
    } else {
      return locale.formatDistance('almostXYears', years + 1, localizeOptions);
    }
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/formatDistanceToNow/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/formatDistanceToNow/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ formatDistanceToNow)
/* harmony export */ });
/* harmony import */ var _formatDistance_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../formatDistance/index.js */ "./node_modules/date-fns/esm/formatDistance/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name formatDistanceToNow
 * @category Common Helpers
 * @summary Return the distance between the given date and now in words.
 * @pure false
 *
 * @description
 * Return the distance between the given date and now in words.
 *
 * | Distance to now                                                   | Result              |
 * |-------------------------------------------------------------------|---------------------|
 * | 0 ... 30 secs                                                     | less than a minute  |
 * | 30 secs ... 1 min 30 secs                                         | 1 minute            |
 * | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |
 * | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |
 * | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |
 * | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |
 * | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |
 * | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |
 * | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |
 * | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |
 * | 1 yr ... 1 yr 3 months                                            | about 1 year        |
 * | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |
 * | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |
 * | N yrs ... N yrs 3 months                                          | about N years       |
 * | N yrs 3 months ... N yrs 9 months                                 | over N years        |
 * | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |
 *
 * With `options.includeSeconds == true`:
 * | Distance to now     | Result               |
 * |---------------------|----------------------|
 * | 0 secs ... 5 secs   | less than 5 seconds  |
 * | 5 secs ... 10 secs  | less than 10 seconds |
 * | 10 secs ... 20 secs | less than 20 seconds |
 * | 20 secs ... 40 secs | half a minute        |
 * | 40 secs ... 60 secs | less than a minute   |
 * | 60 secs ... 90 secs | 1 minute             |
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the given date
 * @param {Object} [options] - the object with options
 * @param {Boolean} [options.includeSeconds=false] - distances less than a minute are more detailed
 * @param {Boolean} [options.addSuffix=false] - result specifies if now is earlier or later than the passed date
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @returns {String} the distance in words
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `formatDistance` property
 *
 * @example
 * // If today is 1 January 2015, what is the distance to 2 July 2014?
 * const result = formatDistanceToNow(
 *   new Date(2014, 6, 2)
 * )
 * //=> '6 months'
 *
 * @example
 * // If now is 1 January 2015 00:00:00,
 * // what is the distance to 1 January 2015 00:00:15, including seconds?
 * const result = formatDistanceToNow(
 *   new Date(2015, 0, 1, 0, 0, 15),
 *   {includeSeconds: true}
 * )
 * //=> 'less than 20 seconds'
 *
 * @example
 * // If today is 1 January 2015,
 * // what is the distance to 1 January 2016, with a suffix?
 * const result = formatDistanceToNow(
 *   new Date(2016, 0, 1),
 *   {addSuffix: true}
 * )
 * //=> 'in about 1 year'
 *
 * @example
 * // If today is 1 January 2015,
 * // what is the distance to 1 August 2016 in Esperanto?
 * const eoLocale = require('date-fns/locale/eo')
 * const result = formatDistanceToNow(
 *   new Date(2016, 7, 1),
 *   {locale: eoLocale}
 * )
 * //=> 'pli ol 1 jaro'
 */
function formatDistanceToNow(dirtyDate, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now(), options);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isLastDayOfMonth/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/esm/isLastDayOfMonth/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isLastDayOfMonth)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _endOfDay_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../endOfDay/index.js */ "./node_modules/date-fns/esm/endOfDay/index.js");
/* harmony import */ var _endOfMonth_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../endOfMonth/index.js */ "./node_modules/date-fns/esm/endOfMonth/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




/**
 * @name isLastDayOfMonth
 * @category Month Helpers
 * @summary Is the given date the last day of a month?
 *
 * @description
 * Is the given date the last day of a month?
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is the last day of a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Is 28 February 2014 the last day of a month?
 * const result = isLastDayOfMonth(new Date(2014, 1, 28))
 * //=> true
 */

function isLastDayOfMonth(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  return (0,_endOfDay_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date).getTime() === (0,_endOfMonth_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date).getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // TODO: Remove String()
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
function buildLocalizeFn(args) {
  return function (dirtyIndex, options) {
    var context = options !== null && options !== void 0 && options.context ? String(options.context) : 'standalone';
    var valuesArray;

    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options !== null && options !== void 0 && options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;

      var _width = options !== null && options !== void 0 && options.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }

    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex; // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!

    return valuesArray[index];
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }

  return undefined;
}

function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }

  return undefined;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};

var formatDistance = function formatDistance(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];

  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace('{{count}}', count.toString());
  }

  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }

  return result;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDistance);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js");

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatLong);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};

var formatRelative = function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatRelative);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js");

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
}; // Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.

var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};

var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  var rem100 = number % 100;

  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';

      case 2:
        return number + 'nd';

      case 3:
        return number + 'rd';
    }
  }

  return number + 'th';
};

var localize = {
  ordinalNumber: ordinalNumber,
  era: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function argumentCallback(quarter) {
      return quarter - 1;
    }
  }),
  month: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localize);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js");
/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js");


var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function valueCallback(value) {
      return parseInt(value, 10);
    }
  }),
  era: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function valueCallback(index) {
      return index + 1;
    }
  }),
  month: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (match);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js");
/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js");
/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js");
/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js");
/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js");






/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */
var locale = {
  code: 'en-US',
  formatDistance: _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  formatLong: _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  formatRelative: _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  localize: _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  options: {
    weekStartsOn: 0
    /* Sunday */
    ,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || _typeof(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/formatDistanceToNow/index.js");


class DOMManager {

  constructor () {

  }
  closeForm(id){
    document.querySelector(id).classList.add('hidden')
    this.resetForm(id)
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
  createProjectHeader (projectName){
    //Main container
    const container = this.createContainer()
    container.className = 'flex flex-row justify-between bg-blue-600 items-center w-full py-4 pl-8'
    //Add Name
    const projectTitle = this.createHeading(projectName)
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
  //Child node of tasksContainer
  //Node contains information of one task only
  createTaskDiv (task) {
    const taskDiv = document.createElement('div')
    taskDiv.classList.add('bg-slate-200', 'rounded-md', 'task', 'pb-2', 'overflow-hidden')
    //title
    const taskName = document.createElement('p')
    taskName.textContent = `${task.title}`
    taskName.className = 'font-bold bg-blue-700 py-2 px-4 text-slate-200 rounded-t-md'
    taskDiv.appendChild(taskName)
    
    //Dscription
    const description = document.createElement('p')
    try {
      description.textContent = `${task.getDescription()}`
    } catch (error) {
        console.error(`Error occured while Formating date for ${task}`)
    }
    description.className = 'px-4'
    taskDiv.appendChild(description)
    
    //Duedate
    const dueDate = document.createElement('p')
    const date = task.getDueDate().replaceAll('-',', ')
    dueDate.innerHTML = `<strong>Due in :</strong> ${(0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(new Date(date))}`
    dueDate.className = 'px-4'
    taskDiv.appendChild(dueDate)


    return taskDiv
  }
  createTaskManagementBtns (task) {
        //Task managment buttons
        const btnsDiv = document.createElement('div')
        btnsDiv.className = 'flex flex-row justify-between px-4 w-full items-center mt-4'
        //Mark as complete
        const markAsCompleteBtn =  document.createElement('button')
            markAsCompleteBtn.id = `${task.id}-complete`
            markAsCompleteBtn.className = 'task-complete-btn rounded-md py-2 px-8'
            //Check icon
            const checkIcon = document.createElement('i')
              checkIcon.className = 'text-bold text-slate-200 text-lg fa-solid fa-check'

            markAsCompleteBtn.appendChild(checkIcon)

            //cHECK IF TASK COMPLETE
            if(task.isComplete()){
              markAsCompleteBtn.classList.add('bg-green-500')
            } else {
              markAsCompleteBtn.classList.add('bg-slate-500')
            }
        btnsDiv.appendChild(markAsCompleteBtn)
    
        //Edit btn
        const editBtn =  document.createElement('button')
            editBtn.id = `${task.id}-edit`
            editBtn.className = 'task-edit-btn bg-yellow-500 rounded-md py-2 px-8'
            //Check icon
            const editIcon = document.createElement('i')
            editIcon.className = 'text-bold text-slate-200 text-lg fa-solid fa-pen'
        
            editBtn.appendChild(editIcon)
        btnsDiv.appendChild(editBtn)
    
        //delete btn
        const deleteBtn =  document.createElement('button')
            deleteBtn.id = `${task.id}-delete`
            deleteBtn.className = 'task-delete-btn bg-red-500 rounded-md py-2 px-8'
            //Check icon
            const deleteIcon = document.createElement('i')
            deleteIcon.className = 'text-bold text-slate-200 text-lg fa-solid fa-trash'
        
            deleteBtn.appendChild(deleteIcon)
        btnsDiv.appendChild(deleteBtn)

        return btnsDiv
  }
  //Parent cintainer to all taskContainer nodes 
  createTasksContainer () {
    //Tasks container
    const tasksContainer = this.createContainer()
    tasksContainer.classList.add('w-full', 'bg-blue-600', 'grid', 'grid-2', 'gap-4')
    tasksContainer.id = 'tasks-container'
  
    return tasksContainer
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
  
  //Append to DOM
  render (content) {
      const contentContainer = document.querySelector('#content')
      contentContainer.appendChild(content)
    }
  resetForm(id){
    document.querySelectorAll(`${id} input`).forEach(
      inputElement => inputElement.value = ''
    )
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
/* harmony import */ var _task_manager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task_manager.js */ "./src/scripts/task_manager.js");

class Project extends _task_manager_js__WEBPACK_IMPORTED_MODULE_0__["default"] {

    //Project open
    #description = ''
    constructor(name){
        super()
        this.name = name
        this.complete = false
    }
    addTask(task){
        this.getTasks().push(task)
    }
    //return value of description
    getDescription(){
        return this.#description
    }
    //is complete
    isComplete(){
        return this.complete
    }
    
    //Mark as complete
    markAsComplete(){
        this.complete = true
    }
    //remove task from list
    removeTask(task){
        const tasks = this.taskList.filter(element => {
            if(element.id === task.id)
                return false
            else
                return true
        })
        return tasks
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
            "tasks": this.getTasks().map(task =>task = task.toJSON()),
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
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/scripts/project.js");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.js */ "./src/scripts/task.js");



class ProjectManager {
     /*
    Project manager class performs operations on Projects
    */
   #completedProjects = []
   #projects = []
   constructor () {
        this.#projects = this.getProjects()
        this.#setLocalStorage(this.#projects)
    }
    //Add to list
    #accessLocalStorage () {
        const projectData = localStorage.getItem('projectsData')
        if(projectData){
            return JSON.parse(projectData)
        }
        else return []
    }
    addTask(project, task){
        //Find unmodified project
        this.#projects.forEach(element =>{
            if(element.name === project.name)
                 //Modify project by adding task to task list
                element.addTask(task)
            })
            //Set local starage to array with the modifed project
            this.#setLocalStorage(this.#projects)
    }
    //Update completed projects
    addToCompleted(project){
            this.#completedProjects.push(project)
            this.removeProject(project)
    }
    //Add new project to projects list and save to local storage
    addToProjectList (newProject) {
        this.#updateLocalStorage(newProject)

    }
    //Filter project 
    #filterProjects(project){
        return this.#projects.filter(element => element.name !== project.name)
    }
    //Get list of completed projects
    getCompleted(){
        return this.#completedProjects
    }
    //get projects
    getProjects(){
        const projects = []//Initialize to empty
        //Get project data from localstorage
        try {
            const projectData = this.#accessLocalStorage() 
            if(Array.isArray(projectData)){
                //Create projects for every piece of data
                projectData.forEach(data => 
                    {
                        //Create project
                        const project = new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"](data.name)
                        project.setDescription(data.description)
                        //Create tasks for project
                        if(data.tasks){
                            data.tasks.forEach(taskData => {
                                const task = new _task_js__WEBPACK_IMPORTED_MODULE_1__["default"](taskData.title)
                                task.setDescription(taskData.description)
                                task.setDueDate(taskData.dueDate)
                                task.complete = taskData.complete
                                //Add task to project
                                project.addTask(task)
                            })
                        }
                        //Add to project list
                        projects.push(project)
                        
                    })
            }
            
        } catch (error) {
            console.error(`Something went wrong While getting projects from local Storage ${error}`)
        }
        finally{
            return projects
        }
    }
    
    //Mark project task as complete
    markTaskAsComplete(currentProject, completedTask) {
        this.#projects.forEach(project =>{
            //Find current project in list
            if (project.name === currentProject.name){
                //Get project tasks
                project.getTasks().forEach(task =>{
                    //Find completed task from tasks
                    if(task.id === completedTask.id){
                        //Mark this tas as complete
                        task.markAsComplete()
                    }
                    
                })
                //Reasign value to modified project
            }
        })
        //Update localStorage
        this.#setLocalStorage(this.#projects)
    }
    //remove project from list
    removeProject(project){
        //Filter out project
        this.#projects = this.#filterProjects(project)
        //Update local storage
        this.#updateLocalStorage()
        
        return this.#projects
    }
    // Remove task from project task likst
    removeTask(project, task){
        const projects = this.getProjects()
        console.log('Untouched projects ', projects)
        // Search for the targe project in the list
        projects.forEach(element =>{
            //If found
            if(element.name = project.name){
                //filter tasks list
                console.log("Project to be modified " , element)
                const newList = element.removeTask(task)
                console.log("NEW lIST " , newList)

                //Assign tasks to filtered list
                element.tasks = newList
                console.log('After removing task from project')
            }
            element.tasks
        })
        //set local storage
        console.log('Projects to be stored after task remove ', projects)
        this.#setLocalStorage(projects)
    }
    #setLocalStorage(projects){
        try {
            const  serializedProjects = projects.map(project => project.toJSON())//Convert to JSON format
            localStorage.setItem('projectsData', JSON.stringify(serializedProjects))
        } catch (error) {
            console.error(error)
        } finally{
            localStorage.setItem('projectsData', JSON.stringify(projects))
            
        }
    }
    #updateLocalStorage(project){
        const projects = this.getProjects()
        try {
            if(!projects.find(item => item.name === project.name))
                projects.push(project)//Add new project
            else if((projects.find(item => item.name === project.name) && project.name.trim() !== 'Today'))
                alert(`Project named ${project.name} already exists`)            
        } catch (error) {
            console.error(error)
        }
        finally{
            this.#setLocalStorage(projects)//put projects back to localstorage
        }
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
    #description = ''

    //Task.duedate
    #dueDate = null

    //Task.priority
    constructor(title){
        this.title = title
        this.id = this.generateId()
        this.complete = false

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
    //Genrate id
    generateId(){
        return this.title.replaceAll(' ', '-').toLowerCase()
    }
    //Check if complete
    isComplete(){
        return this.complete
    }
    //Mark as complete
    markAsComplete(){
        this.complete = true
    }
    //Mark as incomplete
    markAsIncomplete(){
        if(this.complete)
            this.complete = false
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
    taskList = []
    #completedTasks = []
    constructor () {

    }
    //Add to list
    addTask(task){
        this.taskList.push(task)
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
        return this.taskList
    }
    //remove task from list
    removeTask(task){
        const tasks = this.taskList.filter(element => {
            if(element.id === task.id)
                return false
            else
                return true
        })
        return tasks
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
/* harmony import */ var _project_manager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project_manager.js */ "./src/scripts/project_manager.js");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./task.js */ "./src/scripts/task.js");






// localStorage.clear()
const domManager = new _dom_manager_js__WEBPACK_IMPORTED_MODULE_1__["default"]()
const projectManager = new _project_manager_js__WEBPACK_IMPORTED_MODULE_3__["default"]()
let projects = projectManager.getProjects()//Get projects

window.location.hash =''
//Create Project list container
const projectList = document.createElement('div')
projectList.className = 'flex flex-col gap-2'

function activateFormCloseBtns() {
    document.querySelectorAll('.hide-form').forEach(btn =>{
      btn.addEventListener('click', (e) =>{
          document.querySelectorAll('form').forEach(form =>
              form.classList.add('hidden'))
      })
    }) 
  }
//MARK TASK AS COMPLETE
function activateMarkAsCompleteBtn(task){
    const btn = document.querySelector(`#${task.id}-complete`)
    btn.addEventListener('click', 
    (e) => {
        //Mrk complete
        projectManager.markTaskAsComplete(getCurrentProject(), task)
        //Remove old bg-color
        btn.classList.remove('bg-slate-500')
        //Add new bg-color
        btn.classList.add('bg-green-500')
    })
} 

function activateEditBtns(task) {
    //Get button
    const btn = document.querySelector(`#${task.id}-edit`)
    //Add event listener
    btn.addEventListener('click', (e) =>{

        //Populate form with data
        document.querySelector('#task-title-edit').value = task.title //Title
        
        // /Description
        document.querySelector('#task-description-edit').value = task.getDescription()
        
        //Due date
        document.querySelector('#duedate-edit').value = task.getDueDate() 
        
        //Display Form
        domManager.displayForm('#edit-task-form')
        //Submit and change task
        
        editTask(task)
        //Set id back to task form
    })

}

//CTREATE NEW TASK
function createNewTask (input) {
    // Create new task
    const task = new _task_js__WEBPACK_IMPORTED_MODULE_4__["default"](input[0])
    task.setDescription(input[1])
    task.setDueDate(input[2])
    return task    
}
function displayCurrentProject () {
    const currentProject = getCurrentProject()
    document.querySelector('#content-container #project-name').textContent = currentProject.name
    document.querySelector('#project-description p').textContent = currentProject.getDescription()
    displayTasks(currentProject.getTasks())
}
//dISPLAY ON SIDEBAR
function displayNewProject(project){
    
    //Create project contsiner
    const container = domManager.createProjectContainer(project.name)
    // Append to list
    projectList.appendChild(container)
    
}

//Display new Task
function displayNewTask(task){
    const taskDiv = domManager.createTaskDiv(task)
    //Btns
    const btns = domManager.createTaskManagementBtns(task)

    //Append buttons to task div
    taskDiv.appendChild(btns)

    // append taskdiv to task container
    tasksContainer.appendChild(taskDiv)

    //Activate Mark as complete buttons
    activateMarkAsCompleteBtn(task)

    //Activate edit button
    activateEditBtns(task)
    return taskDiv
}
//cREATE AND APPEND TO DOM FRAMEWORK FOR DISPLAYING PROJECTS 
function displayProjectCredentials(){
    const projectHeader = domManager.createProjectHeader('')
    container.appendChild(projectHeader)
    //Project description and new task btn
    const descNBtnContainer = domManager.createContainer()
    descNBtnContainer.className = 'flex flex-row justify-between items-center w-full'
    //DESCRIPTION
    const projectDescription = domManager.createProjectDescription('')
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


// Zreate container for a single task
// Div contains task informatiion


//Get currenttly displaying project from localstorage
//Dispaly project tasks tasks
function displayTasks(tasks) {
    tasksContainer.innerHTML = ''
    if(tasks && tasks.length > 0){
        tasks.forEach(task =>{
            displayNewTask(task)
        })
    }else{
        //No tasks to display
        const par = document.createElement('p')
        par.className = 'text-slate-200 text-center text-3xl font-medium'
        par.id = 'no-tasks'
        par.textContent = 'No Tasks to Display'
        tasksContainer.appendChild(par)
    }
} 

//Edit task on submit 
function editTask (oldTask) {
    let currentProject = getCurrentProject()
    const form = document.querySelector('#edit-task-form')
    //Add submit event to task-edit form
    form.addEventListener('submit', (e) =>{
        //Get data
        const data = domManager.getFormData('#edit-task-form')
        //Create task
        const newTask = createNewTask(data)
        //remove old task from list
        projectManager.removeTask(currentProject, oldTask)
        //Add new task
        projectManager.addTask(currentProject, newTask)
        //Display new task
        displayNewTask(newTask)
        //Restore form heading
        //close form
        domManager.closeForm('#edit-task-form')
        //Restore id
    })

}
//Searchfor current displaying project projects
function getCurrentProject(){

    const projectName = window.location.hash.substring(1).replaceAll('-', ' ')
    if(projectName)
        return projects.find(project => project.name === projectName)
    else 
        return projects.find(project => project.name === 'Today')
}

function renderProjects(projects){
    projectList.innerHTML = ''
    projects.forEach(project => displayNewProject(project))
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
    sidebar.appendChild(projectList)//Container for listing projects

// DEFAULT PROJECT
//Create default Project and add to PromjectManager.Projects
const defaultProject = new _project_js__WEBPACK_IMPORTED_MODULE_2__["default"]('Today')
    defaultProject.setDescription('Today\'s Activities')
    projectManager.addToProjectList(defaultProject) //Add to projects
   
    
    //Display default project details
    displayProjectCredentials()
    
    // Tasks container
    const tasksContainer = domManager.createTasksContainer()
    container.appendChild(tasksContainer)
    
    
//PAGE ONLOAD
// ___________________________________________________________________
window.addEventListener('load', (e) =>{
    //Display Project List
    renderProjects(projects)

    //Dispatch click event on form close btns
    activateFormCloseBtns()
    
    //DISPLAY PROJECT CREATION FORM
    addBtn.addEventListener('click', (e) =>{
        domManager.displayForm('#project-form')
    })
    
    //SUBMIT NEW PROJECT
    document.querySelector('form#project-form').addEventListener('submit', (event) =>{
        event.preventDefault()
        const data = domManager.getFormData('#project-form')//Get data
        const project = new _project_js__WEBPACK_IMPORTED_MODULE_2__["default"](data[0])//Create new Project
        project.setDescription(data[1])
        projectManager.addToProjectList(project)//Add to project list
        displayNewProject(project)
        projects = projectManager.getProjects()
        //Rerender all projects
        
        })

    //NewTask
    document.querySelector('#new-task-btn').addEventListener('click', () =>{
        //Display Form
        domManager.displayForm('#task-form')
    })
   
   
    //CREATE TASK and submit new task
    document.querySelector('#task-form').addEventListener('submit', (e) =>{
        e.preventDefault()
        //Get input
        //get data
        const input = domManager.getFormData('#task-form')
        //Create task and retunr value
        const task = createNewTask(input)
        //Get current project and add task to project tasklist
        const  currentProject = getCurrentProject()
        //Add task to current project tasks
        projectManager.addTask(currentProject, task)
        //Display new task task

        if(currentProject.getTasks().length === 0){
            tasksContainer.innerHTML = ''
            displayNewTask(task)
        } else {
            displayNewTask(task)
        }
        //Close form after adding new task
        document.querySelector('#task-form').classList.add('hidden')
        })
    //Display Current project
    window.addEventListener('hashchange', () =>{
        displayCurrentProject()
    })
    window.dispatchEvent(new Event('hashchange'))

})

/**_____________________________________________________________________________________________________
 *Open Project to view project details 
 * 
 * When Project is clicked, the Dom is populated with project deatails
 * */    

    

    
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLE1BQU0sTUFBTSxZQUFZLE9BQU8sT0FBTyxNQUFNLFFBQVEsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sT0FBTyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxPQUFPLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLE1BQU0sTUFBTSxpQkFBaUIsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sT0FBTyxZQUFZLFdBQVcsVUFBVSxNQUFNLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxPQUFPLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sTUFBTSxLQUFLLFVBQVUsT0FBTyxRQUFRLE1BQU0sWUFBWSxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sTUFBTSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sYUFBYSxNQUFNLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxLQUFLLE9BQU8sT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxNQUFNLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZ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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsY0FBYztBQUNyRCxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3BLZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2xFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3RDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhMQUFtQyxRQUFRLFlBQVk7QUFDdkQ7QUFDQSxDQUFDLDZFQUE2RSxNQUFNOztBQUVwRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJCQUEyQixtREFBTztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG1EQUFPO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUEsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWlzdC0tb25lLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvZG8taXN0LS1vbmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8taXN0LS1vbmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8taXN0LS1vbmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWlzdC0tb25lLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Fzc2lnbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWlzdC0tb25lLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Nsb25lT2JqZWN0L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8taXN0LS1vbmUvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZGVmYXVsdExvY2FsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWlzdC0tb25lLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8taXN0LS1vbmUvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWlzdC0tb25lLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWlzdC0tb25lLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JvdW5kaW5nTWV0aG9kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWlzdC0tb25lLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9jb21wYXJlQXNjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8taXN0LS1vbmUvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2RpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8taXN0LS1vbmUvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2RpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWlzdC0tb25lLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9kaWZmZXJlbmNlSW5Nb250aHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1pc3QtLW9uZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZGlmZmVyZW5jZUluU2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWlzdC0tb25lLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9lbmRPZkRheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWlzdC0tb25lLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9lbmRPZk1vbnRoL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8taXN0LS1vbmUvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8taXN0LS1vbmUvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2Zvcm1hdERpc3RhbmNlVG9Ob3cvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1pc3QtLW9uZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNMYXN0RGF5T2ZNb250aC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWlzdC0tb25lLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZEZvcm1hdExvbmdGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWlzdC0tb25lLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1pc3QtLW9uZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRNYXRjaEZuL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8taXN0LS1vbmUvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1pc3QtLW9uZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1pc3QtLW9uZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0TG9uZy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWlzdC0tb25lLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRSZWxhdGl2ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWlzdC0tb25lLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9sb2NhbGl6ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWlzdC0tb25lLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9tYXRjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWlzdC0tb25lLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1pc3QtLW9uZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8taXN0LS1vbmUvLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3M/ZTQ1YiIsIndlYnBhY2s6Ly90b2RvLWlzdC0tb25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8taXN0LS1vbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8taXN0LS1vbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1pc3QtLW9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWlzdC0tb25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1pc3QtLW9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8taXN0LS1vbmUvLi9zcmMvc2NyaXB0cy9kb21fbWFuYWdlci5qcyIsIndlYnBhY2s6Ly90b2RvLWlzdC0tb25lLy4vc3JjL3NjcmlwdHMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWlzdC0tb25lLy4vc3JjL3NjcmlwdHMvcHJvamVjdF9tYW5hZ2VyLmpzIiwid2VicGFjazovL3RvZG8taXN0LS1vbmUvLi9zcmMvc2NyaXB0cy90YXNrLmpzIiwid2VicGFjazovL3RvZG8taXN0LS1vbmUvLi9zcmMvc2NyaXB0cy90YXNrX21hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1pc3QtLW9uZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWlzdC0tb25lL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8taXN0LS1vbmUvd2VicGFjay9ydW50aW1lL2NyZWF0ZSBmYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1pc3QtLW9uZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1pc3QtLW9uZS93ZWJwYWNrL3J1bnRpbWUvZW5zdXJlIGNodW5rIiwid2VicGFjazovL3RvZG8taXN0LS1vbmUvd2VicGFjay9ydW50aW1lL2dldCBqYXZhc2NyaXB0IGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovL3RvZG8taXN0LS1vbmUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWlzdC0tb25lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1pc3QtLW9uZS93ZWJwYWNrL3J1bnRpbWUvbG9hZCBzY3JpcHQiLCJ3ZWJwYWNrOi8vdG9kby1pc3QtLW9uZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8taXN0LS1vbmUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1pc3QtLW9uZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvLWlzdC0tb25lL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWlzdC0tb25lLy4vc3JjL3NjcmlwdHMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy90b2RvLWJnLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qXFxuISB0YWlsd2luZGNzcyB2My4yLjcgfCBNSVQgTGljZW5zZSB8IGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tXFxuKi9cXG5cXG4vKlxcbjEuIFByZXZlbnQgcGFkZGluZyBhbmQgYm9yZGVyIGZyb20gYWZmZWN0aW5nIGVsZW1lbnQgd2lkdGguIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzQpXFxuMi4gQWxsb3cgYWRkaW5nIGEgYm9yZGVyIHRvIGFuIGVsZW1lbnQgYnkganVzdCBhZGRpbmcgYSBib3JkZXItd2lkdGguIChodHRwczovL2dpdGh1Yi5jb20vdGFpbHdpbmRjc3MvdGFpbHdpbmRjc3MvcHVsbC8xMTYpXFxuKi9cXG5cXG4qLFxcbjo6YmVmb3JlLFxcbjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC8qIDEgKi9cXG4gIGJvcmRlci13aWR0aDogMDtcXG4gIC8qIDIgKi9cXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAvKiAyICovXFxuICBib3JkZXItY29sb3I6ICNlNWU3ZWI7XFxuICAvKiAyICovXFxufVxcblxcbjo6YmVmb3JlLFxcbjo6YWZ0ZXIge1xcbiAgLS10dy1jb250ZW50OiAnJztcXG59XFxuXFxuLypcXG4xLiBVc2UgYSBjb25zaXN0ZW50IHNlbnNpYmxlIGxpbmUtaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4yLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cXG4zLiBVc2UgYSBtb3JlIHJlYWRhYmxlIHRhYiBzaXplLlxcbjQuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgYHNhbnNgIGZvbnQtZmFtaWx5IGJ5IGRlZmF1bHQuXFxuNS4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBgc2Fuc2AgZm9udC1mZWF0dXJlLXNldHRpbmdzIGJ5IGRlZmF1bHQuXFxuKi9cXG5cXG5odG1sIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICAvKiAxICovXFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxuICAvKiAyICovXFxuICAtbW96LXRhYi1zaXplOiA0O1xcbiAgLyogMyAqL1xcbiAgLW8tdGFiLXNpemU6IDQ7XFxuICAgICB0YWItc2l6ZTogNDtcXG4gIC8qIDMgKi9cXG4gIGZvbnQtZmFtaWx5OiB1aS1zYW5zLXNlcmlmLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBBcmlhbCwgXFxcIk5vdG8gU2Fuc1xcXCIsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiLCBcXFwiTm90byBDb2xvciBFbW9qaVxcXCI7XFxuICAvKiA0ICovXFxuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IG5vcm1hbDtcXG4gIC8qIDUgKi9cXG59XFxuXFxuLypcXG4xLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxuMi4gSW5oZXJpdCBsaW5lLWhlaWdodCBmcm9tIGBodG1sYCBzbyB1c2VycyBjYW4gc2V0IHRoZW0gYXMgYSBjbGFzcyBkaXJlY3RseSBvbiB0aGUgYGh0bWxgIGVsZW1lbnQuXFxuKi9cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xcbiAgLyogMiAqL1xcbn1cXG5cXG4vKlxcbjEuIEFkZCB0aGUgY29ycmVjdCBoZWlnaHQgaW4gRmlyZWZveC5cXG4yLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBvZiBib3JkZXIgY29sb3IgaW4gRmlyZWZveC4gKGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTE5MDY1NSlcXG4zLiBFbnN1cmUgaG9yaXpvbnRhbCBydWxlcyBhcmUgdmlzaWJsZSBieSBkZWZhdWx0LlxcbiovXFxuXFxuaHIge1xcbiAgaGVpZ2h0OiAwO1xcbiAgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICAvKiAyICovXFxuICBib3JkZXItdG9wLXdpZHRoOiAxcHg7XFxuICAvKiAzICovXFxufVxcblxcbi8qXFxuQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuKi9cXG5cXG5hYmJyOndoZXJlKFt0aXRsZV0pIHtcXG4gIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XFxufVxcblxcbi8qXFxuUmVtb3ZlIHRoZSBkZWZhdWx0IGZvbnQgc2l6ZSBhbmQgd2VpZ2h0IGZvciBoZWFkaW5ncy5cXG4qL1xcblxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2IHtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xcbn1cXG5cXG4vKlxcblJlc2V0IGxpbmtzIHRvIG9wdGltaXplIGZvciBvcHQtaW4gc3R5bGluZyBpbnN0ZWFkIG9mIG9wdC1vdXQuXFxuKi9cXG5cXG5hIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xcbn1cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBFZGdlIGFuZCBTYWZhcmkuXFxuKi9cXG5cXG5iLFxcbnN0cm9uZyB7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKlxcbjEuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgYG1vbm9gIGZvbnQgZmFtaWx5IGJ5IGRlZmF1bHQuXFxuMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuY29kZSxcXG5rYmQsXFxuc2FtcCxcXG5wcmUge1xcbiAgZm9udC1mYW1pbHk6IHVpLW1vbm9zcGFjZSwgU0ZNb25vLVJlZ3VsYXIsIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCBcXFwiTGliZXJhdGlvbiBNb25vXFxcIiwgXFxcIkNvdXJpZXIgTmV3XFxcIiwgbW9ub3NwYWNlO1xcbiAgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07XFxuICAvKiAyICovXFxufVxcblxcbi8qXFxuQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5zbWFsbCB7XFxuICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLypcXG5QcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuc3ViLFxcbnN1cCB7XFxuICBmb250LXNpemU6IDc1JTtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5zdWIge1xcbiAgYm90dG9tOiAtMC4yNWVtO1xcbn1cXG5cXG5zdXAge1xcbiAgdG9wOiAtMC41ZW07XFxufVxcblxcbi8qXFxuMS4gUmVtb3ZlIHRleHQgaW5kZW50YXRpb24gZnJvbSB0YWJsZSBjb250ZW50cyBpbiBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTk5OTA4OCwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTIwMTI5NylcXG4yLiBDb3JyZWN0IHRhYmxlIGJvcmRlciBjb2xvciBpbmhlcml0YW5jZSBpbiBhbGwgQ2hyb21lIGFuZCBTYWZhcmkuIChodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD05MzU3MjksIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTUwMTYpXFxuMy4gUmVtb3ZlIGdhcHMgYmV0d2VlbiB0YWJsZSBib3JkZXJzIGJ5IGRlZmF1bHQuXFxuKi9cXG5cXG50YWJsZSB7XFxuICB0ZXh0LWluZGVudDogMDtcXG4gIC8qIDEgKi9cXG4gIGJvcmRlci1jb2xvcjogaW5oZXJpdDtcXG4gIC8qIDIgKi9cXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICAvKiAzICovXFxufVxcblxcbi8qXFxuMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxuMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcbjMuIFJlbW92ZSBkZWZhdWx0IHBhZGRpbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIC8qIDEgKi9cXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xcbiAgLyogMSAqL1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxuICAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIC8qIDEgKi9cXG4gIG1hcmdpbjogMDtcXG4gIC8qIDIgKi9cXG4gIHBhZGRpbmc6IDA7XFxuICAvKiAzICovXFxufVxcblxcbi8qXFxuUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlIGFuZCBGaXJlZm94LlxcbiovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLypcXG4xLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbjIuIFJlbW92ZSBkZWZhdWx0IGJ1dHRvbiBzdHlsZXMuXFxuKi9cXG5cXG5idXR0b24sXFxuW3R5cGU9J2J1dHRvbiddLFxcblt0eXBlPSdyZXNldCddLFxcblt0eXBlPSdzdWJtaXQnXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG4gIC8qIDEgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgLyogMiAqL1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcXG4gIC8qIDIgKi9cXG59XFxuXFxuLypcXG5Vc2UgdGhlIG1vZGVybiBGaXJlZm94IGZvY3VzIHN0eWxlIGZvciBhbGwgZm9jdXNhYmxlIGVsZW1lbnRzLlxcbiovXFxuXFxuOi1tb3otZm9jdXNyaW5nIHtcXG4gIG91dGxpbmU6IGF1dG87XFxufVxcblxcbi8qXFxuUmVtb3ZlIHRoZSBhZGRpdGlvbmFsIGA6aW52YWxpZGAgc3R5bGVzIGluIEZpcmVmb3guIChodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9nZWNrby1kZXYvYmxvYi8yZjllYWNkOWQzZDk5NWM5MzdiNDI1MWE1NTU3ZDk1ZDQ5NGM5YmUxL2xheW91dC9zdHlsZS9yZXMvZm9ybXMuY3NzI0w3MjgtTDczNylcXG4qL1xcblxcbjotbW96LXVpLWludmFsaWQge1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSBhbmQgRmlyZWZveC5cXG4qL1xcblxcbnByb2dyZXNzIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLypcXG5Db3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBTYWZhcmkuXFxuKi9cXG5cXG46Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLypcXG4xLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4yLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4qL1xcblxcblt0eXBlPSdzZWFyY2gnXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcXG4gIC8qIDEgKi9cXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4O1xcbiAgLyogMiAqL1xcbn1cXG5cXG4vKlxcblJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXG4qL1xcblxcbjo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi8qXFxuMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4yLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxuKi9cXG5cXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbiAgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIC8qIDIgKi9cXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4qL1xcblxcbnN1bW1hcnkge1xcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cXG4vKlxcblJlbW92ZXMgdGhlIGRlZmF1bHQgc3BhY2luZyBhbmQgYm9yZGVyIGZvciBhcHByb3ByaWF0ZSBlbGVtZW50cy5cXG4qL1xcblxcbmJsb2NrcXVvdGUsXFxuZGwsXFxuZGQsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxuaHIsXFxuZmlndXJlLFxcbnAsXFxucHJlIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuZmllbGRzZXQge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxubGVnZW5kIHtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbm9sLFxcbnVsLFxcbm1lbnUge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qXFxuUHJldmVudCByZXNpemluZyB0ZXh0YXJlYXMgaG9yaXpvbnRhbGx5IGJ5IGRlZmF1bHQuXFxuKi9cXG5cXG50ZXh0YXJlYSB7XFxuICByZXNpemU6IHZlcnRpY2FsO1xcbn1cXG5cXG4vKlxcbjEuIFJlc2V0IHRoZSBkZWZhdWx0IHBsYWNlaG9sZGVyIG9wYWNpdHkgaW4gRmlyZWZveC4gKGh0dHBzOi8vZ2l0aHViLmNvbS90YWlsd2luZGxhYnMvdGFpbHdpbmRjc3MvaXNzdWVzLzMzMDApXFxuMi4gU2V0IHRoZSBkZWZhdWx0IHBsYWNlaG9sZGVyIGNvbG9yIHRvIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBncmF5IDQwMCBjb2xvci5cXG4qL1xcblxcbmlucHV0OjotbW96LXBsYWNlaG9sZGVyLCB0ZXh0YXJlYTo6LW1vei1wbGFjZWhvbGRlciB7XFxuICBvcGFjaXR5OiAxO1xcbiAgLyogMSAqL1xcbiAgY29sb3I6ICM5Y2EzYWY7XFxuICAvKiAyICovXFxufVxcblxcbmlucHV0OjpwbGFjZWhvbGRlcixcXG50ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xcbiAgb3BhY2l0eTogMTtcXG4gIC8qIDEgKi9cXG4gIGNvbG9yOiAjOWNhM2FmO1xcbiAgLyogMiAqL1xcbn1cXG5cXG4vKlxcblNldCB0aGUgZGVmYXVsdCBjdXJzb3IgZm9yIGJ1dHRvbnMuXFxuKi9cXG5cXG5idXR0b24sXFxuW3JvbGU9XFxcImJ1dHRvblxcXCJdIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLypcXG5NYWtlIHN1cmUgZGlzYWJsZWQgYnV0dG9ucyBkb24ndCBnZXQgdGhlIHBvaW50ZXIgY3Vyc29yLlxcbiovXFxuXFxuOmRpc2FibGVkIHtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuLypcXG4xLiBNYWtlIHJlcGxhY2VkIGVsZW1lbnRzIGBkaXNwbGF5OiBibG9ja2AgYnkgZGVmYXVsdC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvMTQpXFxuMi4gQWRkIGB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlYCB0byBhbGlnbiByZXBsYWNlZCBlbGVtZW50cyBtb3JlIHNlbnNpYmx5IGJ5IGRlZmF1bHQuIChodHRwczovL2dpdGh1Yi5jb20vamVuc2ltbW9ucy9jc3NyZW1lZHkvaXNzdWVzLzE0I2lzc3VlY29tbWVudC02MzQ5MzQyMTApXFxuICAgVGhpcyBjYW4gdHJpZ2dlciBhIHBvb3JseSBjb25zaWRlcmVkIGxpbnQgZXJyb3IgaW4gc29tZSB0b29scyBidXQgaXMgaW5jbHVkZWQgYnkgZGVzaWduLlxcbiovXFxuXFxuaW1nLFxcbnN2ZyxcXG52aWRlbyxcXG5jYW52YXMsXFxuYXVkaW8sXFxuaWZyYW1lLFxcbmVtYmVkLFxcbm9iamVjdCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIC8qIDEgKi9cXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAvKiAyICovXFxufVxcblxcbi8qXFxuQ29uc3RyYWluIGltYWdlcyBhbmQgdmlkZW9zIHRvIHRoZSBwYXJlbnQgd2lkdGggYW5kIHByZXNlcnZlIHRoZWlyIGludHJpbnNpYyBhc3BlY3QgcmF0aW8uIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0KVxcbiovXFxuXFxuaW1nLFxcbnZpZGVvIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyogTWFrZSBlbGVtZW50cyB3aXRoIHRoZSBIVE1MIGhpZGRlbiBhdHRyaWJ1dGUgc3RheSBoaWRkZW4gYnkgZGVmYXVsdCAqL1xcblxcbltoaWRkZW5dIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiosIDo6YmVmb3JlLCA6OmFmdGVyIHtcXG4gIC0tdHctYm9yZGVyLXNwYWNpbmcteDogMDtcXG4gIC0tdHctYm9yZGVyLXNwYWNpbmcteTogMDtcXG4gIC0tdHctdHJhbnNsYXRlLXg6IDA7XFxuICAtLXR3LXRyYW5zbGF0ZS15OiAwO1xcbiAgLS10dy1yb3RhdGU6IDA7XFxuICAtLXR3LXNrZXcteDogMDtcXG4gIC0tdHctc2tldy15OiAwO1xcbiAgLS10dy1zY2FsZS14OiAxO1xcbiAgLS10dy1zY2FsZS15OiAxO1xcbiAgLS10dy1wYW4teDogIDtcXG4gIC0tdHctcGFuLXk6ICA7XFxuICAtLXR3LXBpbmNoLXpvb206ICA7XFxuICAtLXR3LXNjcm9sbC1zbmFwLXN0cmljdG5lc3M6IHByb3hpbWl0eTtcXG4gIC0tdHctb3JkaW5hbDogIDtcXG4gIC0tdHctc2xhc2hlZC16ZXJvOiAgO1xcbiAgLS10dy1udW1lcmljLWZpZ3VyZTogIDtcXG4gIC0tdHctbnVtZXJpYy1zcGFjaW5nOiAgO1xcbiAgLS10dy1udW1lcmljLWZyYWN0aW9uOiAgO1xcbiAgLS10dy1yaW5nLWluc2V0OiAgO1xcbiAgLS10dy1yaW5nLW9mZnNldC13aWR0aDogMHB4O1xcbiAgLS10dy1yaW5nLW9mZnNldC1jb2xvcjogI2ZmZjtcXG4gIC0tdHctcmluZy1jb2xvcjogcmdiKDU5IDEzMCAyNDYgLyAwLjUpO1xcbiAgLS10dy1yaW5nLW9mZnNldC1zaGFkb3c6IDAgMCAjMDAwMDtcXG4gIC0tdHctcmluZy1zaGFkb3c6IDAgMCAjMDAwMDtcXG4gIC0tdHctc2hhZG93OiAwIDAgIzAwMDA7XFxuICAtLXR3LXNoYWRvdy1jb2xvcmVkOiAwIDAgIzAwMDA7XFxuICAtLXR3LWJsdXI6ICA7XFxuICAtLXR3LWJyaWdodG5lc3M6ICA7XFxuICAtLXR3LWNvbnRyYXN0OiAgO1xcbiAgLS10dy1ncmF5c2NhbGU6ICA7XFxuICAtLXR3LWh1ZS1yb3RhdGU6ICA7XFxuICAtLXR3LWludmVydDogIDtcXG4gIC0tdHctc2F0dXJhdGU6ICA7XFxuICAtLXR3LXNlcGlhOiAgO1xcbiAgLS10dy1kcm9wLXNoYWRvdzogIDtcXG4gIC0tdHctYmFja2Ryb3AtYmx1cjogIDtcXG4gIC0tdHctYmFja2Ryb3AtYnJpZ2h0bmVzczogIDtcXG4gIC0tdHctYmFja2Ryb3AtY29udHJhc3Q6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWdyYXlzY2FsZTogIDtcXG4gIC0tdHctYmFja2Ryb3AtaHVlLXJvdGF0ZTogIDtcXG4gIC0tdHctYmFja2Ryb3AtaW52ZXJ0OiAgO1xcbiAgLS10dy1iYWNrZHJvcC1vcGFjaXR5OiAgO1xcbiAgLS10dy1iYWNrZHJvcC1zYXR1cmF0ZTogIDtcXG4gIC0tdHctYmFja2Ryb3Atc2VwaWE6ICA7XFxufVxcblxcbjo6YmFja2Ryb3Age1xcbiAgLS10dy1ib3JkZXItc3BhY2luZy14OiAwO1xcbiAgLS10dy1ib3JkZXItc3BhY2luZy15OiAwO1xcbiAgLS10dy10cmFuc2xhdGUteDogMDtcXG4gIC0tdHctdHJhbnNsYXRlLXk6IDA7XFxuICAtLXR3LXJvdGF0ZTogMDtcXG4gIC0tdHctc2tldy14OiAwO1xcbiAgLS10dy1za2V3LXk6IDA7XFxuICAtLXR3LXNjYWxlLXg6IDE7XFxuICAtLXR3LXNjYWxlLXk6IDE7XFxuICAtLXR3LXBhbi14OiAgO1xcbiAgLS10dy1wYW4teTogIDtcXG4gIC0tdHctcGluY2gtem9vbTogIDtcXG4gIC0tdHctc2Nyb2xsLXNuYXAtc3RyaWN0bmVzczogcHJveGltaXR5O1xcbiAgLS10dy1vcmRpbmFsOiAgO1xcbiAgLS10dy1zbGFzaGVkLXplcm86ICA7XFxuICAtLXR3LW51bWVyaWMtZmlndXJlOiAgO1xcbiAgLS10dy1udW1lcmljLXNwYWNpbmc6ICA7XFxuICAtLXR3LW51bWVyaWMtZnJhY3Rpb246ICA7XFxuICAtLXR3LXJpbmctaW5zZXQ6ICA7XFxuICAtLXR3LXJpbmctb2Zmc2V0LXdpZHRoOiAwcHg7XFxuICAtLXR3LXJpbmctb2Zmc2V0LWNvbG9yOiAjZmZmO1xcbiAgLS10dy1yaW5nLWNvbG9yOiByZ2IoNTkgMTMwIDI0NiAvIDAuNSk7XFxuICAtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdzogMCAwICMwMDAwO1xcbiAgLS10dy1yaW5nLXNoYWRvdzogMCAwICMwMDAwO1xcbiAgLS10dy1zaGFkb3c6IDAgMCAjMDAwMDtcXG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IDAgMCAjMDAwMDtcXG4gIC0tdHctYmx1cjogIDtcXG4gIC0tdHctYnJpZ2h0bmVzczogIDtcXG4gIC0tdHctY29udHJhc3Q6ICA7XFxuICAtLXR3LWdyYXlzY2FsZTogIDtcXG4gIC0tdHctaHVlLXJvdGF0ZTogIDtcXG4gIC0tdHctaW52ZXJ0OiAgO1xcbiAgLS10dy1zYXR1cmF0ZTogIDtcXG4gIC0tdHctc2VwaWE6ICA7XFxuICAtLXR3LWRyb3Atc2hhZG93OiAgO1xcbiAgLS10dy1iYWNrZHJvcC1ibHVyOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1icmlnaHRuZXNzOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1jb250cmFzdDogIDtcXG4gIC0tdHctYmFja2Ryb3AtZ3JheXNjYWxlOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1odWUtcm90YXRlOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1pbnZlcnQ6ICA7XFxuICAtLXR3LWJhY2tkcm9wLW9wYWNpdHk6ICA7XFxuICAtLXR3LWJhY2tkcm9wLXNhdHVyYXRlOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1zZXBpYTogIDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDY0MHB4KSB7XFxuICAuY29udGFpbmVyIHtcXG4gICAgbWF4LXdpZHRoOiA2NDBweDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAuY29udGFpbmVyIHtcXG4gICAgbWF4LXdpZHRoOiA3NjhweDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xcbiAgLmNvbnRhaW5lciB7XFxuICAgIG1heC13aWR0aDogMTAyNHB4O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogMTI4MHB4KSB7XFxuICAuY29udGFpbmVyIHtcXG4gICAgbWF4LXdpZHRoOiAxMjgwcHg7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiAxNTM2cHgpIHtcXG4gIC5jb250YWluZXIge1xcbiAgICBtYXgtd2lkdGg6IDE1MzZweDtcXG4gIH1cXG59XFxuXFxuLmFic29sdXRlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLm0tYXV0byB7XFxuICBtYXJnaW46IGF1dG87XFxufVxcblxcbi5teC00IHtcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4ubXQtNCB7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG5cXG4uZmxleCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZ3JpZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi53LWZ1bGwge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5mbGV4LXJvdyB7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG4uZmxleC1jb2wge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLml0ZW1zLXN0YXJ0IHtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4uaXRlbXMtY2VudGVyIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5pdGVtcy1zdHJldGNoIHtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbn1cXG5cXG4uanVzdGlmeS1zdGFydCB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5qdXN0aWZ5LWVuZCB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4uanVzdGlmeS1iZXR3ZWVuIHtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmdhcC0yIHtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG4uZ2FwLTQge1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uZ2FwLTgge1xcbiAgZ2FwOiAycmVtO1xcbn1cXG5cXG4ub3ZlcmZsb3ctaGlkZGVuIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5yb3VuZGVkLWZ1bGwge1xcbiAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xcbn1cXG5cXG4ucm91bmRlZC1tZCB7XFxuICBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcXG59XFxuXFxuLnJvdW5kZWQtdC1tZCB7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjM3NXJlbTtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwLjM3NXJlbTtcXG59XFxuXFxuLmJvcmRlci1iLTIge1xcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMnB4O1xcbn1cXG5cXG4uYm9yZGVyLXQtMiB7XFxuICBib3JkZXItdG9wLXdpZHRoOiAycHg7XFxufVxcblxcbi5ib3JkZXItc29saWQge1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG59XFxuXFxuLmJvcmRlci1ibHVlLTcwMCB7XFxuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMjkgNzggMjE2IC8gdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcXG59XFxuXFxuLmJvcmRlci13aGl0ZSB7XFxuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMjU1IDI1NSAyNTUgLyB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xcbn1cXG5cXG4uYmctYmx1ZS02MDAge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM3IDk5IDIzNSAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuXFxuLmJnLWJsdWUtNzAwIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyOSA3OCAyMTYgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcblxcbi5iZy1ncmVlbi01MDAge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM0IDE5NyA5NCAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuXFxuLmJnLXJlZC01MDAge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOSA2OCA2OCAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuXFxuLmJnLXNsYXRlLTIwMCB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI2IDIzMiAyNDAgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcblxcbi5iZy1zbGF0ZS0zMDAge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMyAyMTMgMjI1IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG5cXG4uYmctc2xhdGUtNTAwIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDAgMTE2IDEzOSAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuXFxuLmJnLXRyYW5zcGFyZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uYmcteWVsbG93LTUwMCB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM0IDE3OSA4IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG5cXG4ucC00IHtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5weC00IHtcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxufVxcblxcbi5weC04IHtcXG4gIHBhZGRpbmctbGVmdDogMnJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDJyZW07XFxufVxcblxcbi5weS0xNiB7XFxuICBwYWRkaW5nLXRvcDogNHJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiA0cmVtO1xcbn1cXG5cXG4ucHktMiB7XFxuICBwYWRkaW5nLXRvcDogMC41cmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcXG59XFxuXFxuLnB5LTQge1xcbiAgcGFkZGluZy10b3A6IDFyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLnB5LTgge1xcbiAgcGFkZGluZy10b3A6IDJyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcXG59XFxuXFxuLnBiLTIge1xcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcXG59XFxuXFxuLnBsLTQge1xcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbn1cXG5cXG4ucGwtOCB7XFxuICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxufVxcblxcbi50ZXh0LWNlbnRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50ZXh0LTJ4bCB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xcbn1cXG5cXG4udGV4dC0zeGwge1xcbiAgZm9udC1zaXplOiAxLjg3NXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAyLjI1cmVtO1xcbn1cXG5cXG4udGV4dC1sZyB7XFxuICBmb250LXNpemU6IDEuMTI1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XFxufVxcblxcbi50ZXh0LXNtIHtcXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XFxuICBsaW5lLWhlaWdodDogMS4yNXJlbTtcXG59XFxuXFxuLnRleHQteGwge1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XFxufVxcblxcbi5mb250LWJvbGQge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLmZvbnQtbWVkaXVtIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi50ZXh0LWJsdWUtNzAwIHtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcbiAgY29sb3I6IHJnYigyOSA3OCAyMTYgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuXFxuLnRleHQtc2xhdGUtMjAwIHtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcbiAgY29sb3I6IHJnYigyMjYgMjMyIDI0MCAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXG5cXG4udGV4dC1zbGF0ZS01MDAge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiKDEwMCAxMTYgMTM5IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcblxcbi50ZXh0LXdoaXRlIHtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcbiAgY29sb3I6IHJnYigyNTUgMjU1IDI1NSAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXG5cXG4uZmlsdGVyIHtcXG4gIGZpbHRlcjogdmFyKC0tdHctYmx1cikgdmFyKC0tdHctYnJpZ2h0bmVzcykgdmFyKC0tdHctY29udHJhc3QpIHZhcigtLXR3LWdyYXlzY2FsZSkgdmFyKC0tdHctaHVlLXJvdGF0ZSkgdmFyKC0tdHctaW52ZXJ0KSB2YXIoLS10dy1zYXR1cmF0ZSkgdmFyKC0tdHctc2VwaWEpIHZhcigtLXR3LWRyb3Atc2hhZG93KTtcXG59XFxuXFxuLnRyYW5zaXRpb24tYWxsIHtcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGFsbDtcXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTUwbXM7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1jbGlwOiBib3JkZXItYm94O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIC8qIHBhZGRpbmctdG9wOiA1LjQ5cmVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDI1dnc7ICovXFxufVxcblxcbmFzaWRlIHtcXG4gIHdpZHRoOiAyMHZ3O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiA3LjM1cmVtO1xcbiAgcmlnaHQ6IDFyZW07XFxuICBsZWZ0OiAyLjVyZW07XFxuICBib3R0b206IDFyZW07XFxuICBvdmVyZmxvdzogc2Nyb2xsO1xcbn1cXG5cXG4jY29udGVudC1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiA3LjM1cmVtO1xcbiAgbGVmdDogMjV2dztcXG4gIHJpZ2h0OiAycmVtO1xcbiAgaGVpZ2h0OiA3OS42dmg7XFxuICBvdmVyZmxvdzogc2Nyb2xsO1xcbn1cXG5cXG5mb290ZXJ7XFxuICBib3R0b206IDFyZW07XFxufVxcblxcbmZvb3RlciwjcHJvamVjdHMtaGVhZGVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDIuNXJlbTtcXG4gIHdpZHRoOiAyMHZ3O1xcbiAgei1pbmRleDogMTAwO1xcbn1cXG5cXG5mb3Jte1xcbiAgd2lkdGg6IDMwdnc7XFxuICBsZWZ0OiBjYWxjKDI1dncgLSAxcmVtKTtcXG4gIHRvcDogNy4zNXJlbTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMS41cmVtO1xcbiAgcmlnaHQ6IDFyZW07XFxuICBsZWZ0OiAxLjVyZW07XFxufVxcblxcbiNuZXctcHJvamVjdC1idG57XFxuICBwYWRkaW5nLWJsb2NrOiAuNXJlbTtcXG4gIHBhZGRpbmctaW5saW5lOiAuOHJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxufVxcblxcbiNwcm9maWxlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwO1xcbn1cXG5cXG4jcHJvZmlsZS1waWN0dXJlIHtcXG4gIHdpZHRoOiA0NXB4O1xcbn1cXG5cXG4jcHJvamVjdHMtaGVhZGVye1xcbiAgdG9wOiA3LjM1cmVtO1xcbn1cXG5cXG4jdGFza3MtY29udGFpbmVye1xcbiAgLyogb3ZlcmZsb3c6IHNjcm9sbDsgKi9cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCggMiwgMWZyKTtcXG59XFxuXFxuI2VkaXQtdGFzay1mb3JtLFxcbiN0YXNrLWZvcm0ge1xcbiAgbGVmdDogY2FsYyg0MHZ3KTtcXG4gIHRvcDogMTYuOHJlbTtcXG59XFxuXFxuLmhvdmVyXFxcXDpiZy1ibHVlLTYwMDpob3ZlciB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzcgOTkgMjM1IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG5cXG4uaG92ZXJcXFxcOmJnLWJsdWUtNzAwOmhvdmVyIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyOSA3OCAyMTYgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcblxcbi5ob3ZlclxcXFw6YmctcmVkLTcwMDpob3ZlciB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTg1IDI4IDI4IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG5cXG4uaG92ZXJcXFxcOmJnLXNsYXRlLTEwMDpob3ZlciB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQxIDI0NSAyNDkgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcblxcbi5ob3ZlclxcXFw6YmcteWVsbG93LTcwMDpob3ZlciB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTYxIDk4IDcgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcblxcbi5mb2N1c1xcXFw6b3V0bGluZS1ub25lOmZvY3VzIHtcXG4gIG91dGxpbmU6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIG91dGxpbmUtb2Zmc2V0OiAycHg7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Q0FFQzs7QUFFRDs7O0NBR0M7O0FBRUQ7OztFQUdFLHNCQUFzQjtFQUN0QixNQUFNO0VBQ04sZUFBZTtFQUNmLE1BQU07RUFDTixtQkFBbUI7RUFDbkIsTUFBTTtFQUNOLHFCQUFxQjtFQUNyQixNQUFNO0FBQ1I7O0FBRUE7O0VBRUUsZ0JBQWdCO0FBQ2xCOztBQUVBOzs7Ozs7Q0FNQzs7QUFFRDtFQUNFLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sOEJBQThCO0VBQzlCLE1BQU07RUFDTixnQkFBZ0I7RUFDaEIsTUFBTTtFQUNOLGNBQWM7S0FDWCxXQUFXO0VBQ2QsTUFBTTtFQUNOLDROQUE0TjtFQUM1TixNQUFNO0VBQ04sNkJBQTZCO0VBQzdCLE1BQU07QUFDUjs7QUFFQTs7O0NBR0M7O0FBRUQ7RUFDRSxTQUFTO0VBQ1QsTUFBTTtFQUNOLG9CQUFvQjtFQUNwQixNQUFNO0FBQ1I7O0FBRUE7Ozs7Q0FJQzs7QUFFRDtFQUNFLFNBQVM7RUFDVCxNQUFNO0VBQ04sY0FBYztFQUNkLE1BQU07RUFDTixxQkFBcUI7RUFDckIsTUFBTTtBQUNSOztBQUVBOztDQUVDOztBQUVEO0VBQ0UseUNBQXlDO1VBQ2pDLGlDQUFpQztB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OztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVEQUF1RDtBQUN6RDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix1REFBdUQ7QUFDekQ7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIseURBQXlEO0FBQzNEOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNEQUFzRDtBQUN4RDs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLypcXG4hIHRhaWx3aW5kY3NzIHYzLjIuNyB8IE1JVCBMaWNlbnNlIHwgaHR0cHM6Ly90YWlsd2luZGNzcy5jb21cXG4qL1xcblxcbi8qXFxuMS4gUHJldmVudCBwYWRkaW5nIGFuZCBib3JkZXIgZnJvbSBhZmZlY3RpbmcgZWxlbWVudCB3aWR0aC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvNClcXG4yLiBBbGxvdyBhZGRpbmcgYSBib3JkZXIgdG8gYW4gZWxlbWVudCBieSBqdXN0IGFkZGluZyBhIGJvcmRlci13aWR0aC4gKGh0dHBzOi8vZ2l0aHViLmNvbS90YWlsd2luZGNzcy90YWlsd2luZGNzcy9wdWxsLzExNilcXG4qL1xcblxcbiosXFxuOjpiZWZvcmUsXFxuOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLyogMSAqL1xcbiAgYm9yZGVyLXdpZHRoOiAwO1xcbiAgLyogMiAqL1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIC8qIDIgKi9cXG4gIGJvcmRlci1jb2xvcjogI2U1ZTdlYjtcXG4gIC8qIDIgKi9cXG59XFxuXFxuOjpiZWZvcmUsXFxuOjphZnRlciB7XFxuICAtLXR3LWNvbnRlbnQ6ICcnO1xcbn1cXG5cXG4vKlxcbjEuIFVzZSBhIGNvbnNpc3RlbnQgc2Vuc2libGUgbGluZS1oZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbjIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbjMuIFVzZSBhIG1vcmUgcmVhZGFibGUgdGFiIHNpemUuXFxuNC4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBgc2Fuc2AgZm9udC1mYW1pbHkgYnkgZGVmYXVsdC5cXG41LiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIGBzYW5zYCBmb250LWZlYXR1cmUtc2V0dGluZ3MgYnkgZGVmYXVsdC5cXG4qL1xcblxcbmh0bWwge1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIC8qIDEgKi9cXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXG4gIC8qIDIgKi9cXG4gIC1tb3otdGFiLXNpemU6IDQ7XFxuICAvKiAzICovXFxuICAtby10YWItc2l6ZTogNDtcXG4gICAgIHRhYi1zaXplOiA0O1xcbiAgLyogMyAqL1xcbiAgZm9udC1mYW1pbHk6IHVpLXNhbnMtc2VyaWYsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEFyaWFsLCBcXFwiTm90byBTYW5zXFxcIiwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCIsIFxcXCJOb3RvIENvbG9yIEVtb2ppXFxcIjtcXG4gIC8qIDQgKi9cXG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogbm9ybWFsO1xcbiAgLyogNSAqL1xcbn1cXG5cXG4vKlxcbjEuIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cXG4yLiBJbmhlcml0IGxpbmUtaGVpZ2h0IGZyb20gYGh0bWxgIHNvIHVzZXJzIGNhbiBzZXQgdGhlbSBhcyBhIGNsYXNzIGRpcmVjdGx5IG9uIHRoZSBgaHRtbGAgZWxlbWVudC5cXG4qL1xcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgLyogMSAqL1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxuICAvKiAyICovXFxufVxcblxcbi8qXFxuMS4gQWRkIHRoZSBjb3JyZWN0IGhlaWdodCBpbiBGaXJlZm94LlxcbjIuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIG9mIGJvcmRlciBjb2xvciBpbiBGaXJlZm94LiAoaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTkwNjU1KVxcbjMuIEVuc3VyZSBob3Jpem9udGFsIHJ1bGVzIGFyZSB2aXNpYmxlIGJ5IGRlZmF1bHQuXFxuKi9cXG5cXG5ociB7XFxuICBoZWlnaHQ6IDA7XFxuICAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIC8qIDIgKi9cXG4gIGJvcmRlci10b3Atd2lkdGg6IDFweDtcXG4gIC8qIDMgKi9cXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4qL1xcblxcbmFiYnI6d2hlcmUoW3RpdGxlXSkge1xcbiAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XFxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcXG59XFxuXFxuLypcXG5SZW1vdmUgdGhlIGRlZmF1bHQgZm9udCBzaXplIGFuZCB3ZWlnaHQgZm9yIGhlYWRpbmdzLlxcbiovXFxuXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYge1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XFxufVxcblxcbi8qXFxuUmVzZXQgbGlua3MgdG8gb3B0aW1pemUgZm9yIG9wdC1pbiBzdHlsaW5nIGluc3RlYWQgb2Ygb3B0LW91dC5cXG4qL1xcblxcbmEge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XFxufVxcblxcbi8qXFxuQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIEVkZ2UgYW5kIFNhZmFyaS5cXG4qL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qXFxuMS4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBgbW9ub2AgZm9udCBmYW1pbHkgYnkgZGVmYXVsdC5cXG4yLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5jb2RlLFxcbmtiZCxcXG5zYW1wLFxcbnByZSB7XFxuICBmb250LWZhbWlseTogdWktbW9ub3NwYWNlLCBTRk1vbm8tUmVndWxhciwgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsIFxcXCJMaWJlcmF0aW9uIE1vbm9cXFwiLCBcXFwiQ291cmllciBOZXdcXFwiLCBtb25vc3BhY2U7XFxuICAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTtcXG4gIC8qIDIgKi9cXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbnNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKlxcblByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG4gIGZvbnQtc2l6ZTogNzUlO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1YiB7XFxuICBib3R0b206IC0wLjI1ZW07XFxufVxcblxcbnN1cCB7XFxuICB0b3A6IC0wLjVlbTtcXG59XFxuXFxuLypcXG4xLiBSZW1vdmUgdGV4dCBpbmRlbnRhdGlvbiBmcm9tIHRhYmxlIGNvbnRlbnRzIGluIENocm9tZSBhbmQgU2FmYXJpLiAoaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTk5MDg4LCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MjAxMjk3KVxcbjIuIENvcnJlY3QgdGFibGUgYm9yZGVyIGNvbG9yIGluaGVyaXRhbmNlIGluIGFsbCBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTkzNTcyOSwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE5NTAxNilcXG4zLiBSZW1vdmUgZ2FwcyBiZXR3ZWVuIHRhYmxlIGJvcmRlcnMgYnkgZGVmYXVsdC5cXG4qL1xcblxcbnRhYmxlIHtcXG4gIHRleHQtaW5kZW50OiAwO1xcbiAgLyogMSAqL1xcbiAgYm9yZGVyLWNvbG9yOiBpbmhlcml0O1xcbiAgLyogMiAqL1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIC8qIDMgKi9cXG59XFxuXFxuLypcXG4xLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4yLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuMy4gUmVtb3ZlIGRlZmF1bHQgcGFkZGluZyBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgLyogMSAqL1xcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XFxuICAvKiAxICovXFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcXG4gIC8qIDEgKi9cXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgLyogMSAqL1xcbiAgbWFyZ2luOiAwO1xcbiAgLyogMiAqL1xcbiAgcGFkZGluZzogMDtcXG4gIC8qIDMgKi9cXG59XFxuXFxuLypcXG5SZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UgYW5kIEZpcmVmb3guXFxuKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHtcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKlxcbjEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuMi4gUmVtb3ZlIGRlZmF1bHQgYnV0dG9uIHN0eWxlcy5cXG4qL1xcblxcbmJ1dHRvbixcXG5bdHlwZT0nYnV0dG9uJ10sXFxuW3R5cGU9J3Jlc2V0J10sXFxuW3R5cGU9J3N1Ym1pdCddIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbiAgLyogMSAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAvKiAyICovXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xcbiAgLyogMiAqL1xcbn1cXG5cXG4vKlxcblVzZSB0aGUgbW9kZXJuIEZpcmVmb3ggZm9jdXMgc3R5bGUgZm9yIGFsbCBmb2N1c2FibGUgZWxlbWVudHMuXFxuKi9cXG5cXG46LW1vei1mb2N1c3Jpbmcge1xcbiAgb3V0bGluZTogYXV0bztcXG59XFxuXFxuLypcXG5SZW1vdmUgdGhlIGFkZGl0aW9uYWwgYDppbnZhbGlkYCBzdHlsZXMgaW4gRmlyZWZveC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL2dlY2tvLWRldi9ibG9iLzJmOWVhY2Q5ZDNkOTk1YzkzN2I0MjUxYTU1NTdkOTVkNDk0YzliZTEvbGF5b3V0L3N0eWxlL3Jlcy9mb3Jtcy5jc3MjTDcyOC1MNzM3KVxcbiovXFxuXFxuOi1tb3otdWktaW52YWxpZCB7XFxuICBib3gtc2hhZG93OiBub25lO1xcbn1cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lIGFuZCBGaXJlZm94LlxcbiovXFxuXFxucHJvZ3Jlc3Mge1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKlxcbkNvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIFNhZmFyaS5cXG4qL1xcblxcbjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG46Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKlxcbjEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcbjIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiovXFxuXFxuW3R5cGU9J3NlYXJjaCddIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xcbiAgLyogMSAqL1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7XFxuICAvKiAyICovXFxufVxcblxcbi8qXFxuUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiovXFxuXFxuOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLypcXG4xLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbjIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXG4qL1xcblxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxuICAvKiAxICovXFxuICBmb250OiBpbmhlcml0O1xcbiAgLyogMiAqL1xcbn1cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiovXFxuXFxuc3VtbWFyeSB7XFxuICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxufVxcblxcbi8qXFxuUmVtb3ZlcyB0aGUgZGVmYXVsdCBzcGFjaW5nIGFuZCBib3JkZXIgZm9yIGFwcHJvcHJpYXRlIGVsZW1lbnRzLlxcbiovXFxuXFxuYmxvY2txdW90ZSxcXG5kbCxcXG5kZCxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5ocixcXG5maWd1cmUsXFxucCxcXG5wcmUge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5maWVsZHNldCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5sZWdlbmQge1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxub2wsXFxudWwsXFxubWVudSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLypcXG5QcmV2ZW50IHJlc2l6aW5nIHRleHRhcmVhcyBob3Jpem9udGFsbHkgYnkgZGVmYXVsdC5cXG4qL1xcblxcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogdmVydGljYWw7XFxufVxcblxcbi8qXFxuMS4gUmVzZXQgdGhlIGRlZmF1bHQgcGxhY2Vob2xkZXIgb3BhY2l0eSBpbiBGaXJlZm94LiAoaHR0cHM6Ly9naXRodWIuY29tL3RhaWx3aW5kbGFicy90YWlsd2luZGNzcy9pc3N1ZXMvMzMwMClcXG4yLiBTZXQgdGhlIGRlZmF1bHQgcGxhY2Vob2xkZXIgY29sb3IgdG8gdGhlIHVzZXIncyBjb25maWd1cmVkIGdyYXkgNDAwIGNvbG9yLlxcbiovXFxuXFxuaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIsIHRleHRhcmVhOjotbW96LXBsYWNlaG9sZGVyIHtcXG4gIG9wYWNpdHk6IDE7XFxuICAvKiAxICovXFxuICBjb2xvcjogIzljYTNhZjtcXG4gIC8qIDIgKi9cXG59XFxuXFxuaW5wdXQ6OnBsYWNlaG9sZGVyLFxcbnRleHRhcmVhOjpwbGFjZWhvbGRlciB7XFxuICBvcGFjaXR5OiAxO1xcbiAgLyogMSAqL1xcbiAgY29sb3I6ICM5Y2EzYWY7XFxuICAvKiAyICovXFxufVxcblxcbi8qXFxuU2V0IHRoZSBkZWZhdWx0IGN1cnNvciBmb3IgYnV0dG9ucy5cXG4qL1xcblxcbmJ1dHRvbixcXG5bcm9sZT1cXFwiYnV0dG9uXFxcIl0ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKlxcbk1ha2Ugc3VyZSBkaXNhYmxlZCBidXR0b25zIGRvbid0IGdldCB0aGUgcG9pbnRlciBjdXJzb3IuXFxuKi9cXG5cXG46ZGlzYWJsZWQge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4vKlxcbjEuIE1ha2UgcmVwbGFjZWQgZWxlbWVudHMgYGRpc3BsYXk6IGJsb2NrYCBieSBkZWZhdWx0LiAoaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy8xNClcXG4yLiBBZGQgYHZlcnRpY2FsLWFsaWduOiBtaWRkbGVgIHRvIGFsaWduIHJlcGxhY2VkIGVsZW1lbnRzIG1vcmUgc2Vuc2libHkgYnkgZGVmYXVsdC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9qZW5zaW1tb25zL2Nzc3JlbWVkeS9pc3N1ZXMvMTQjaXNzdWVjb21tZW50LTYzNDkzNDIxMClcXG4gICBUaGlzIGNhbiB0cmlnZ2VyIGEgcG9vcmx5IGNvbnNpZGVyZWQgbGludCBlcnJvciBpbiBzb21lIHRvb2xzIGJ1dCBpcyBpbmNsdWRlZCBieSBkZXNpZ24uXFxuKi9cXG5cXG5pbWcsXFxuc3ZnLFxcbnZpZGVvLFxcbmNhbnZhcyxcXG5hdWRpbyxcXG5pZnJhbWUsXFxuZW1iZWQsXFxub2JqZWN0IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgLyogMSAqL1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIC8qIDIgKi9cXG59XFxuXFxuLypcXG5Db25zdHJhaW4gaW1hZ2VzIGFuZCB2aWRlb3MgdG8gdGhlIHBhcmVudCB3aWR0aCBhbmQgcHJlc2VydmUgdGhlaXIgaW50cmluc2ljIGFzcGVjdCByYXRpby4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvMTQpXFxuKi9cXG5cXG5pbWcsXFxudmlkZW8ge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKiBNYWtlIGVsZW1lbnRzIHdpdGggdGhlIEhUTUwgaGlkZGVuIGF0dHJpYnV0ZSBzdGF5IGhpZGRlbiBieSBkZWZhdWx0ICovXFxuXFxuW2hpZGRlbl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuKiwgOjpiZWZvcmUsIDo6YWZ0ZXIge1xcbiAgLS10dy1ib3JkZXItc3BhY2luZy14OiAwO1xcbiAgLS10dy1ib3JkZXItc3BhY2luZy15OiAwO1xcbiAgLS10dy10cmFuc2xhdGUteDogMDtcXG4gIC0tdHctdHJhbnNsYXRlLXk6IDA7XFxuICAtLXR3LXJvdGF0ZTogMDtcXG4gIC0tdHctc2tldy14OiAwO1xcbiAgLS10dy1za2V3LXk6IDA7XFxuICAtLXR3LXNjYWxlLXg6IDE7XFxuICAtLXR3LXNjYWxlLXk6IDE7XFxuICAtLXR3LXBhbi14OiAgO1xcbiAgLS10dy1wYW4teTogIDtcXG4gIC0tdHctcGluY2gtem9vbTogIDtcXG4gIC0tdHctc2Nyb2xsLXNuYXAtc3RyaWN0bmVzczogcHJveGltaXR5O1xcbiAgLS10dy1vcmRpbmFsOiAgO1xcbiAgLS10dy1zbGFzaGVkLXplcm86ICA7XFxuICAtLXR3LW51bWVyaWMtZmlndXJlOiAgO1xcbiAgLS10dy1udW1lcmljLXNwYWNpbmc6ICA7XFxuICAtLXR3LW51bWVyaWMtZnJhY3Rpb246ICA7XFxuICAtLXR3LXJpbmctaW5zZXQ6ICA7XFxuICAtLXR3LXJpbmctb2Zmc2V0LXdpZHRoOiAwcHg7XFxuICAtLXR3LXJpbmctb2Zmc2V0LWNvbG9yOiAjZmZmO1xcbiAgLS10dy1yaW5nLWNvbG9yOiByZ2IoNTkgMTMwIDI0NiAvIDAuNSk7XFxuICAtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdzogMCAwICMwMDAwO1xcbiAgLS10dy1yaW5nLXNoYWRvdzogMCAwICMwMDAwO1xcbiAgLS10dy1zaGFkb3c6IDAgMCAjMDAwMDtcXG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IDAgMCAjMDAwMDtcXG4gIC0tdHctYmx1cjogIDtcXG4gIC0tdHctYnJpZ2h0bmVzczogIDtcXG4gIC0tdHctY29udHJhc3Q6ICA7XFxuICAtLXR3LWdyYXlzY2FsZTogIDtcXG4gIC0tdHctaHVlLXJvdGF0ZTogIDtcXG4gIC0tdHctaW52ZXJ0OiAgO1xcbiAgLS10dy1zYXR1cmF0ZTogIDtcXG4gIC0tdHctc2VwaWE6ICA7XFxuICAtLXR3LWRyb3Atc2hhZG93OiAgO1xcbiAgLS10dy1iYWNrZHJvcC1ibHVyOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1icmlnaHRuZXNzOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1jb250cmFzdDogIDtcXG4gIC0tdHctYmFja2Ryb3AtZ3JheXNjYWxlOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1odWUtcm90YXRlOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1pbnZlcnQ6ICA7XFxuICAtLXR3LWJhY2tkcm9wLW9wYWNpdHk6ICA7XFxuICAtLXR3LWJhY2tkcm9wLXNhdHVyYXRlOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1zZXBpYTogIDtcXG59XFxuXFxuOjpiYWNrZHJvcCB7XFxuICAtLXR3LWJvcmRlci1zcGFjaW5nLXg6IDA7XFxuICAtLXR3LWJvcmRlci1zcGFjaW5nLXk6IDA7XFxuICAtLXR3LXRyYW5zbGF0ZS14OiAwO1xcbiAgLS10dy10cmFuc2xhdGUteTogMDtcXG4gIC0tdHctcm90YXRlOiAwO1xcbiAgLS10dy1za2V3LXg6IDA7XFxuICAtLXR3LXNrZXcteTogMDtcXG4gIC0tdHctc2NhbGUteDogMTtcXG4gIC0tdHctc2NhbGUteTogMTtcXG4gIC0tdHctcGFuLXg6ICA7XFxuICAtLXR3LXBhbi15OiAgO1xcbiAgLS10dy1waW5jaC16b29tOiAgO1xcbiAgLS10dy1zY3JvbGwtc25hcC1zdHJpY3RuZXNzOiBwcm94aW1pdHk7XFxuICAtLXR3LW9yZGluYWw6ICA7XFxuICAtLXR3LXNsYXNoZWQtemVybzogIDtcXG4gIC0tdHctbnVtZXJpYy1maWd1cmU6ICA7XFxuICAtLXR3LW51bWVyaWMtc3BhY2luZzogIDtcXG4gIC0tdHctbnVtZXJpYy1mcmFjdGlvbjogIDtcXG4gIC0tdHctcmluZy1pbnNldDogIDtcXG4gIC0tdHctcmluZy1vZmZzZXQtd2lkdGg6IDBweDtcXG4gIC0tdHctcmluZy1vZmZzZXQtY29sb3I6ICNmZmY7XFxuICAtLXR3LXJpbmctY29sb3I6IHJnYig1OSAxMzAgMjQ2IC8gMC41KTtcXG4gIC0tdHctcmluZy1vZmZzZXQtc2hhZG93OiAwIDAgIzAwMDA7XFxuICAtLXR3LXJpbmctc2hhZG93OiAwIDAgIzAwMDA7XFxuICAtLXR3LXNoYWRvdzogMCAwICMwMDAwO1xcbiAgLS10dy1zaGFkb3ctY29sb3JlZDogMCAwICMwMDAwO1xcbiAgLS10dy1ibHVyOiAgO1xcbiAgLS10dy1icmlnaHRuZXNzOiAgO1xcbiAgLS10dy1jb250cmFzdDogIDtcXG4gIC0tdHctZ3JheXNjYWxlOiAgO1xcbiAgLS10dy1odWUtcm90YXRlOiAgO1xcbiAgLS10dy1pbnZlcnQ6ICA7XFxuICAtLXR3LXNhdHVyYXRlOiAgO1xcbiAgLS10dy1zZXBpYTogIDtcXG4gIC0tdHctZHJvcC1zaGFkb3c6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWJsdXI6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWJyaWdodG5lc3M6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWNvbnRyYXN0OiAgO1xcbiAgLS10dy1iYWNrZHJvcC1ncmF5c2NhbGU6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWh1ZS1yb3RhdGU6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWludmVydDogIDtcXG4gIC0tdHctYmFja2Ryb3Atb3BhY2l0eTogIDtcXG4gIC0tdHctYmFja2Ryb3Atc2F0dXJhdGU6ICA7XFxuICAtLXR3LWJhY2tkcm9wLXNlcGlhOiAgO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNjQwcHgpIHtcXG4gIC5jb250YWluZXIge1xcbiAgICBtYXgtd2lkdGg6IDY0MHB4O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5jb250YWluZXIge1xcbiAgICBtYXgtd2lkdGg6IDc2OHB4O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XFxuICAuY29udGFpbmVyIHtcXG4gICAgbWF4LXdpZHRoOiAxMDI0cHg7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiAxMjgwcHgpIHtcXG4gIC5jb250YWluZXIge1xcbiAgICBtYXgtd2lkdGg6IDEyODBweDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDE1MzZweCkge1xcbiAgLmNvbnRhaW5lciB7XFxuICAgIG1heC13aWR0aDogMTUzNnB4O1xcbiAgfVxcbn1cXG5cXG4uYWJzb2x1dGUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4ubS1hdXRvIHtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLm14LTQge1xcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcblxcbi5tdC00IHtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxufVxcblxcbi5mbGV4IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5ncmlkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnctZnVsbCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmZsZXgtcm93IHtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbi5mbGV4LWNvbCB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uaXRlbXMtc3RhcnQge1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5pdGVtcy1jZW50ZXIge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLml0ZW1zLXN0cmV0Y2gge1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxufVxcblxcbi5qdXN0aWZ5LXN0YXJ0IHtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG59XFxuXFxuLmp1c3RpZnktZW5kIHtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbi5qdXN0aWZ5LWJldHdlZW4ge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uZ2FwLTIge1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi5nYXAtNCB7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5nYXAtOCB7XFxuICBnYXA6IDJyZW07XFxufVxcblxcbi5vdmVyZmxvdy1oaWRkZW4ge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLnJvdW5kZWQtZnVsbCB7XFxuICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XFxufVxcblxcbi5yb3VuZGVkLW1kIHtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xcbn1cXG5cXG4ucm91bmRlZC10LW1kIHtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuMzc1cmVtO1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuMzc1cmVtO1xcbn1cXG5cXG4uYm9yZGVyLWItMiB7XFxuICBib3JkZXItYm90dG9tLXdpZHRoOiAycHg7XFxufVxcblxcbi5ib3JkZXItdC0yIHtcXG4gIGJvcmRlci10b3Atd2lkdGg6IDJweDtcXG59XFxuXFxuLmJvcmRlci1zb2xpZCB7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbn1cXG5cXG4uYm9yZGVyLWJsdWUtNzAwIHtcXG4gIC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XFxuICBib3JkZXItY29sb3I6IHJnYigyOSA3OCAyMTYgLyB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xcbn1cXG5cXG4uYm9yZGVyLXdoaXRlIHtcXG4gIC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XFxuICBib3JkZXItY29sb3I6IHJnYigyNTUgMjU1IDI1NSAvIHZhcigtLXR3LWJvcmRlci1vcGFjaXR5KSk7XFxufVxcblxcbi5iZy1ibHVlLTYwMCB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzcgOTkgMjM1IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG5cXG4uYmctYmx1ZS03MDAge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI5IDc4IDIxNiAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuXFxuLmJnLWdyZWVuLTUwMCB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzQgMTk3IDk0IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG5cXG4uYmctcmVkLTUwMCB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM5IDY4IDY4IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG5cXG4uYmctc2xhdGUtMjAwIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjYgMjMyIDI0MCAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuXFxuLmJnLXNsYXRlLTMwMCB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAzIDIxMyAyMjUgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcblxcbi5iZy1zbGF0ZS01MDAge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwMCAxMTYgMTM5IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG5cXG4uYmctdHJhbnNwYXJlbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5iZy15ZWxsb3ctNTAwIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzQgMTc5IDggLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcblxcbi5wLTQge1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLnB4LTQge1xcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcXG59XFxuXFxuLnB4LTgge1xcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xcbiAgcGFkZGluZy1yaWdodDogMnJlbTtcXG59XFxuXFxuLnB5LTE2IHtcXG4gIHBhZGRpbmctdG9wOiA0cmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDRyZW07XFxufVxcblxcbi5weS0yIHtcXG4gIHBhZGRpbmctdG9wOiAwLjVyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG4ucHktNCB7XFxuICBwYWRkaW5nLXRvcDogMXJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4ucHktOCB7XFxuICBwYWRkaW5nLXRvcDogMnJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAycmVtO1xcbn1cXG5cXG4ucGItMiB7XFxuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG4ucGwtNCB7XFxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxufVxcblxcbi5wbC04IHtcXG4gIHBhZGRpbmctbGVmdDogMnJlbTtcXG59XFxuXFxuLnRleHQtY2VudGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnRleHQtMnhsIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDJyZW07XFxufVxcblxcbi50ZXh0LTN4bCB7XFxuICBmb250LXNpemU6IDEuODc1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDIuMjVyZW07XFxufVxcblxcbi50ZXh0LWxnIHtcXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XFxuICBsaW5lLWhlaWdodDogMS43NXJlbTtcXG59XFxuXFxuLnRleHQtc20ge1xcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xcbn1cXG5cXG4udGV4dC14bCB7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBsaW5lLWhlaWdodDogMS43NXJlbTtcXG59XFxuXFxuLmZvbnQtYm9sZCB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uZm9udC1tZWRpdW0ge1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLnRleHQtYmx1ZS03MDAge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiKDI5IDc4IDIxNiAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXG5cXG4udGV4dC1zbGF0ZS0yMDAge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiKDIyNiAyMzIgMjQwIC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcblxcbi50ZXh0LXNsYXRlLTUwMCB7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiByZ2IoMTAwIDExNiAxMzkgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuXFxuLnRleHQtd2hpdGUge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiKDI1NSAyNTUgMjU1IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcblxcbi5maWx0ZXIge1xcbiAgZmlsdGVyOiB2YXIoLS10dy1ibHVyKSB2YXIoLS10dy1icmlnaHRuZXNzKSB2YXIoLS10dy1jb250cmFzdCkgdmFyKC0tdHctZ3JheXNjYWxlKSB2YXIoLS10dy1odWUtcm90YXRlKSB2YXIoLS10dy1pbnZlcnQpIHZhcigtLXR3LXNhdHVyYXRlKSB2YXIoLS10dy1zZXBpYSkgdmFyKC0tdHctZHJvcC1zaGFkb3cpO1xcbn1cXG5cXG4udHJhbnNpdGlvbi1hbGwge1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYWxsO1xcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxNTBtcztcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy90b2RvLWJnLmpwZycpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLWNsaXA6IGJvcmRlci1ib3g7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgLyogcGFkZGluZy10b3A6IDUuNDlyZW07XFxuICAgIHBhZGRpbmctbGVmdDogMjV2dzsgKi9cXG59XFxuXFxuYXNpZGUge1xcbiAgd2lkdGg6IDIwdnc7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDcuMzVyZW07XFxuICByaWdodDogMXJlbTtcXG4gIGxlZnQ6IDIuNXJlbTtcXG4gIGJvdHRvbTogMXJlbTtcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxufVxcblxcbiNjb250ZW50LWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDcuMzVyZW07XFxuICBsZWZ0OiAyNXZ3O1xcbiAgcmlnaHQ6IDJyZW07XFxuICBoZWlnaHQ6IDc5LjZ2aDtcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxufVxcblxcbmZvb3RlcntcXG4gIGJvdHRvbTogMXJlbTtcXG59XFxuXFxuZm9vdGVyLCNwcm9qZWN0cy1oZWFkZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgbGVmdDogMi41cmVtO1xcbiAgd2lkdGg6IDIwdnc7XFxuICB6LWluZGV4OiAxMDA7XFxufVxcblxcbmZvcm17XFxuICB3aWR0aDogMzB2dztcXG4gIGxlZnQ6IGNhbGMoMjV2dyAtIDFyZW0pO1xcbiAgdG9wOiA3LjM1cmVtO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAxLjVyZW07XFxuICByaWdodDogMXJlbTtcXG4gIGxlZnQ6IDEuNXJlbTtcXG59XFxuXFxuI25ldy1wcm9qZWN0LWJ0bntcXG4gIHBhZGRpbmctYmxvY2s6IC41cmVtO1xcbiAgcGFkZGluZy1pbmxpbmU6IC44cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXG59XFxuXFxuI3Byb2ZpbGUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxufVxcblxcbiNwcm9maWxlLXBpY3R1cmUge1xcbiAgd2lkdGg6IDQ1cHg7XFxufVxcblxcbiNwcm9qZWN0cy1oZWFkZXJ7XFxuICB0b3A6IDcuMzVyZW07XFxufVxcblxcbiN0YXNrcy1jb250YWluZXJ7XFxuICAvKiBvdmVyZmxvdzogc2Nyb2xsOyAqL1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KCAyLCAxZnIpO1xcbn1cXG5cXG4jZWRpdC10YXNrLWZvcm0sXFxuI3Rhc2stZm9ybSB7XFxuICBsZWZ0OiBjYWxjKDQwdncpO1xcbiAgdG9wOiAxNi44cmVtO1xcbn1cXG5cXG4uaG92ZXJcXFxcOmJnLWJsdWUtNjAwOmhvdmVyIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzNyA5OSAyMzUgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcblxcbi5ob3ZlclxcXFw6YmctYmx1ZS03MDA6aG92ZXIge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI5IDc4IDIxNiAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuXFxuLmhvdmVyXFxcXDpiZy1yZWQtNzAwOmhvdmVyIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxODUgMjggMjggLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcblxcbi5ob3ZlclxcXFw6Ymctc2xhdGUtMTAwOmhvdmVyIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDEgMjQ1IDI0OSAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuXFxuLmhvdmVyXFxcXDpiZy15ZWxsb3ctNzAwOmhvdmVyIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjEgOTggNyAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuXFxuLmZvY3VzXFxcXDpvdXRsaW5lLW5vbmU6Zm9jdXMge1xcbiAgb3V0bGluZTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgb3V0bGluZS1vZmZzZXQ6IDJweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgb2JqZWN0KSB7XG4gIGlmICh0YXJnZXQgPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2Fzc2lnbiByZXF1aXJlcyB0aGF0IGlucHV0IHBhcmFtZXRlciBub3QgYmUgbnVsbCBvciB1bmRlZmluZWQnKTtcbiAgfVxuXG4gIGZvciAodmFyIHByb3BlcnR5IGluIG9iamVjdCkge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSkpIHtcbiAgICAgIDtcbiAgICAgIHRhcmdldFtwcm9wZXJ0eV0gPSBvYmplY3RbcHJvcGVydHldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59IiwiaW1wb3J0IGFzc2lnbiBmcm9tIFwiLi4vYXNzaWduL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjbG9uZU9iamVjdChvYmplY3QpIHtcbiAgcmV0dXJuIGFzc2lnbih7fSwgb2JqZWN0KTtcbn0iLCJpbXBvcnQgZGVmYXVsdExvY2FsZSBmcm9tIFwiLi4vLi4vbG9jYWxlL2VuLVVTL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBkZWZhdWx0TG9jYWxlOyIsInZhciBkZWZhdWx0T3B0aW9ucyA9IHt9O1xuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRPcHRpb25zKCkge1xuICByZXR1cm4gZGVmYXVsdE9wdGlvbnM7XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0RGVmYXVsdE9wdGlvbnMobmV3T3B0aW9ucykge1xuICBkZWZhdWx0T3B0aW9ucyA9IG5ld09wdGlvbnM7XG59IiwiLyoqXG4gKiBHb29nbGUgQ2hyb21lIGFzIG9mIDY3LjAuMzM5Ni44NyBpbnRyb2R1Y2VkIHRpbWV6b25lcyB3aXRoIG9mZnNldCB0aGF0IGluY2x1ZGVzIHNlY29uZHMuXG4gKiBUaGV5IHVzdWFsbHkgYXBwZWFyIGZvciBkYXRlcyB0aGF0IGRlbm90ZSB0aW1lIGJlZm9yZSB0aGUgdGltZXpvbmVzIHdlcmUgaW50cm9kdWNlZFxuICogKGUuZy4gZm9yICdFdXJvcGUvUHJhZ3VlJyB0aW1lem9uZSB0aGUgb2Zmc2V0IGlzIEdNVCswMDo1Nzo0NCBiZWZvcmUgMSBPY3RvYmVyIDE4OTFcbiAqIGFuZCBHTVQrMDE6MDA6MDAgYWZ0ZXIgdGhhdCBkYXRlKVxuICpcbiAqIERhdGUjZ2V0VGltZXpvbmVPZmZzZXQgcmV0dXJucyB0aGUgb2Zmc2V0IGluIG1pbnV0ZXMgYW5kIHdvdWxkIHJldHVybiA1NyBmb3IgdGhlIGV4YW1wbGUgYWJvdmUsXG4gKiB3aGljaCB3b3VsZCBsZWFkIHRvIGluY29ycmVjdCBjYWxjdWxhdGlvbnMuXG4gKlxuICogVGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSB0aW1lem9uZSBvZmZzZXQgaW4gbWlsbGlzZWNvbmRzIHRoYXQgdGFrZXMgc2Vjb25kcyBpbiBhY2NvdW50LlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKGRhdGUpIHtcbiAgdmFyIHV0Y0RhdGUgPSBuZXcgRGF0ZShEYXRlLlVUQyhkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgZGF0ZS5nZXREYXRlKCksIGRhdGUuZ2V0SG91cnMoKSwgZGF0ZS5nZXRNaW51dGVzKCksIGRhdGUuZ2V0U2Vjb25kcygpLCBkYXRlLmdldE1pbGxpc2Vjb25kcygpKSk7XG4gIHV0Y0RhdGUuc2V0VVRDRnVsbFllYXIoZGF0ZS5nZXRGdWxsWWVhcigpKTtcbiAgcmV0dXJuIGRhdGUuZ2V0VGltZSgpIC0gdXRjRGF0ZS5nZXRUaW1lKCk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwidmFyIHJvdW5kaW5nTWFwID0ge1xuICBjZWlsOiBNYXRoLmNlaWwsXG4gIHJvdW5kOiBNYXRoLnJvdW5kLFxuICBmbG9vcjogTWF0aC5mbG9vcixcbiAgdHJ1bmM6IGZ1bmN0aW9uIHRydW5jKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlIDwgMCA/IE1hdGguY2VpbCh2YWx1ZSkgOiBNYXRoLmZsb29yKHZhbHVlKTtcbiAgfSAvLyBNYXRoLnRydW5jIGlzIG5vdCBzdXBwb3J0ZWQgYnkgSUVcblxufTtcbnZhciBkZWZhdWx0Um91bmRpbmdNZXRob2QgPSAndHJ1bmMnO1xuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdW5kaW5nTWV0aG9kKG1ldGhvZCkge1xuICByZXR1cm4gbWV0aG9kID8gcm91bmRpbmdNYXBbbWV0aG9kXSA6IHJvdW5kaW5nTWFwW2RlZmF1bHRSb3VuZGluZ01ldGhvZF07XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBjb21wYXJlQXNjXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbXBhcmUgdGhlIHR3byBkYXRlcyBhbmQgcmV0dXJuIC0xLCAwIG9yIDEuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb21wYXJlIHRoZSB0d28gZGF0ZXMgYW5kIHJldHVybiAxIGlmIHRoZSBmaXJzdCBkYXRlIGlzIGFmdGVyIHRoZSBzZWNvbmQsXG4gKiAtMSBpZiB0aGUgZmlyc3QgZGF0ZSBpcyBiZWZvcmUgdGhlIHNlY29uZCBvciAwIGlmIGRhdGVzIGFyZSBlcXVhbC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNvbXBhcmVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjb21wYXJlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgcmVzdWx0IG9mIHRoZSBjb21wYXJpc29uXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbXBhcmUgMTEgRmVicnVhcnkgMTk4NyBhbmQgMTAgSnVseSAxOTg5OlxuICogY29uc3QgcmVzdWx0ID0gY29tcGFyZUFzYyhuZXcgRGF0ZSgxOTg3LCAxLCAxMSksIG5ldyBEYXRlKDE5ODksIDYsIDEwKSlcbiAqIC8vPT4gLTFcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU29ydCB0aGUgYXJyYXkgb2YgZGF0ZXM6XG4gKiBjb25zdCByZXN1bHQgPSBbXG4gKiAgIG5ldyBEYXRlKDE5OTUsIDYsIDIpLFxuICogICBuZXcgRGF0ZSgxOTg3LCAxLCAxMSksXG4gKiAgIG5ldyBEYXRlKDE5ODksIDYsIDEwKVxuICogXS5zb3J0KGNvbXBhcmVBc2MpXG4gKiAvLz0+IFtcbiAqIC8vICAgV2VkIEZlYiAxMSAxOTg3IDAwOjAwOjAwLFxuICogLy8gICBNb24gSnVsIDEwIDE5ODkgMDA6MDA6MDAsXG4gKiAvLyAgIFN1biBKdWwgMDIgMTk5NSAwMDowMDowMFxuICogLy8gXVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXBhcmVBc2MoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdCA9IHRvRGF0ZShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodCA9IHRvRGF0ZShkaXJ0eURhdGVSaWdodCk7XG4gIHZhciBkaWZmID0gZGF0ZUxlZnQuZ2V0VGltZSgpIC0gZGF0ZVJpZ2h0LmdldFRpbWUoKTtcblxuICBpZiAoZGlmZiA8IDApIHtcbiAgICByZXR1cm4gLTE7XG4gIH0gZWxzZSBpZiAoZGlmZiA+IDApIHtcbiAgICByZXR1cm4gMTsgLy8gUmV0dXJuIDAgaWYgZGlmZiBpcyAwOyByZXR1cm4gTmFOIGlmIGRpZmYgaXMgTmFOXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGRpZmY7XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzXG4gKiBAY2F0ZWdvcnkgTW9udGggSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgbW9udGhzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgbW9udGhzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBlYXJsaWVyIGRhdGVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgbW9udGhzXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IGNhbGVuZGFyIG1vbnRocyBhcmUgYmV0d2VlbiAzMSBKYW51YXJ5IDIwMTQgYW5kIDEgU2VwdGVtYmVyIDIwMTQ/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRocyhcbiAqICAgbmV3IERhdGUoMjAxNCwgOCwgMSksXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDAsIDMxKVxuICogKVxuICogLy89PiA4XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdCA9IHRvRGF0ZShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodCA9IHRvRGF0ZShkaXJ0eURhdGVSaWdodCk7XG4gIHZhciB5ZWFyRGlmZiA9IGRhdGVMZWZ0LmdldEZ1bGxZZWFyKCkgLSBkYXRlUmlnaHQuZ2V0RnVsbFllYXIoKTtcbiAgdmFyIG1vbnRoRGlmZiA9IGRhdGVMZWZ0LmdldE1vbnRoKCkgLSBkYXRlUmlnaHQuZ2V0TW9udGgoKTtcbiAgcmV0dXJuIHllYXJEaWZmICogMTIgKyBtb250aERpZmY7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5NaWxsaXNlY29uZHNcbiAqIEBjYXRlZ29yeSBNaWxsaXNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIGVhcmxpZXIgZGF0ZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHNcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgbWlsbGlzZWNvbmRzIGFyZSBiZXR3ZWVuXG4gKiAvLyAyIEp1bHkgMjAxNCAxMjozMDoyMC42MDAgYW5kIDIgSnVseSAyMDE0IDEyOjMwOjIxLjcwMD9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcyhcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgMiwgMTIsIDMwLCAyMSwgNzAwKSxcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgMiwgMTIsIDMwLCAyMCwgNjAwKVxuICogKVxuICogLy89PiAxMTAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHJldHVybiB0b0RhdGUoZGF0ZUxlZnQpLmdldFRpbWUoKSAtIHRvRGF0ZShkYXRlUmlnaHQpLmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBkaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRocyBmcm9tIFwiLi4vZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMvaW5kZXguanNcIjtcbmltcG9ydCBjb21wYXJlQXNjIGZyb20gXCIuLi9jb21wYXJlQXNjL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IGlzTGFzdERheU9mTW9udGggZnJvbSBcIi4uL2lzTGFzdERheU9mTW9udGgvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZGlmZmVyZW5jZUluTW9udGhzXG4gKiBAY2F0ZWdvcnkgTW9udGggSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgZnVsbCBtb250aHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBmdWxsIG1vbnRocyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcyB1c2luZyB0cnVuYyBhcyBhIGRlZmF1bHQgcm91bmRpbmcgbWV0aG9kLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBlYXJsaWVyIGRhdGVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBudW1iZXIgb2YgZnVsbCBtb250aHNcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgZnVsbCBtb250aHMgYXJlIGJldHdlZW4gMzEgSmFudWFyeSAyMDE0IGFuZCAxIFNlcHRlbWJlciAyMDE0P1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluTW9udGhzKG5ldyBEYXRlKDIwMTQsIDgsIDEpLCBuZXcgRGF0ZSgyMDE0LCAwLCAzMSkpXG4gKiAvLz0+IDdcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaWZmZXJlbmNlSW5Nb250aHMoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdCA9IHRvRGF0ZShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodCA9IHRvRGF0ZShkaXJ0eURhdGVSaWdodCk7XG4gIHZhciBzaWduID0gY29tcGFyZUFzYyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KTtcbiAgdmFyIGRpZmZlcmVuY2UgPSBNYXRoLmFicyhkaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRocyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSk7XG4gIHZhciByZXN1bHQ7IC8vIENoZWNrIGZvciB0aGUgZGlmZmVyZW5jZSBvZiBsZXNzIHRoYW4gbW9udGhcblxuICBpZiAoZGlmZmVyZW5jZSA8IDEpIHtcbiAgICByZXN1bHQgPSAwO1xuICB9IGVsc2Uge1xuICAgIGlmIChkYXRlTGVmdC5nZXRNb250aCgpID09PSAxICYmIGRhdGVMZWZ0LmdldERhdGUoKSA+IDI3KSB7XG4gICAgICAvLyBUaGlzIHdpbGwgY2hlY2sgaWYgdGhlIGRhdGUgaXMgZW5kIG9mIEZlYiBhbmQgYXNzaWduIGEgaGlnaGVyIGVuZCBvZiBtb250aCBkYXRlXG4gICAgICAvLyB0byBjb21wYXJlIGl0IHdpdGggSmFuXG4gICAgICBkYXRlTGVmdC5zZXREYXRlKDMwKTtcbiAgICB9XG5cbiAgICBkYXRlTGVmdC5zZXRNb250aChkYXRlTGVmdC5nZXRNb250aCgpIC0gc2lnbiAqIGRpZmZlcmVuY2UpOyAvLyBNYXRoLmFicyhkaWZmIGluIGZ1bGwgbW9udGhzIC0gZGlmZiBpbiBjYWxlbmRhciBtb250aHMpID09PSAxIGlmIGxhc3QgY2FsZW5kYXIgbW9udGggaXMgbm90IGZ1bGxcbiAgICAvLyBJZiBzbywgcmVzdWx0IG11c3QgYmUgZGVjcmVhc2VkIGJ5IDEgaW4gYWJzb2x1dGUgdmFsdWVcblxuICAgIHZhciBpc0xhc3RNb250aE5vdEZ1bGwgPSBjb21wYXJlQXNjKGRhdGVMZWZ0LCBkYXRlUmlnaHQpID09PSAtc2lnbjsgLy8gQ2hlY2sgZm9yIGNhc2VzIG9mIG9uZSBmdWxsIGNhbGVuZGFyIG1vbnRoXG5cbiAgICBpZiAoaXNMYXN0RGF5T2ZNb250aCh0b0RhdGUoZGlydHlEYXRlTGVmdCkpICYmIGRpZmZlcmVuY2UgPT09IDEgJiYgY29tcGFyZUFzYyhkaXJ0eURhdGVMZWZ0LCBkYXRlUmlnaHQpID09PSAxKSB7XG4gICAgICBpc0xhc3RNb250aE5vdEZ1bGwgPSBmYWxzZTtcbiAgICB9XG5cbiAgICByZXN1bHQgPSBzaWduICogKGRpZmZlcmVuY2UgLSBOdW1iZXIoaXNMYXN0TW9udGhOb3RGdWxsKSk7XG4gIH0gLy8gUHJldmVudCBuZWdhdGl2ZSB6ZXJvXG5cblxuICByZXR1cm4gcmVzdWx0ID09PSAwID8gMCA6IHJlc3VsdDtcbn0iLCJpbXBvcnQgZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9kaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXRSb3VuZGluZ01ldGhvZCB9IGZyb20gXCIuLi9fbGliL3JvdW5kaW5nTWV0aG9kcy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5TZWNvbmRzXG4gKiBAY2F0ZWdvcnkgU2Vjb25kIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIHNlY29uZHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBzZWNvbmRzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBlYXJsaWVyIGRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLnJvdW5kaW5nTWV0aG9kPSd0cnVuYyddIC0gYSByb3VuZGluZyBtZXRob2QgKGBjZWlsYCwgYGZsb29yYCwgYHJvdW5kYCBvciBgdHJ1bmNgKVxuICogQHJldHVybnMge051bWJlcn0gdGhlIG51bWJlciBvZiBzZWNvbmRzXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IHNlY29uZHMgYXJlIGJldHdlZW5cbiAqIC8vIDIgSnVseSAyMDE0IDEyOjMwOjA3Ljk5OSBhbmQgMiBKdWx5IDIwMTQgMTI6MzA6MjAuMDAwP1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluU2Vjb25kcyhcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgMiwgMTIsIDMwLCAyMCwgMCksXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIsIDEyLCAzMCwgNywgOTk5KVxuICogKVxuICogLy89PiAxMlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpZmZlcmVuY2VJblNlY29uZHMoZGF0ZUxlZnQsIGRhdGVSaWdodCwgb3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRpZmYgPSBkaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMoZGF0ZUxlZnQsIGRhdGVSaWdodCkgLyAxMDAwO1xuICByZXR1cm4gZ2V0Um91bmRpbmdNZXRob2Qob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnJvdW5kaW5nTWV0aG9kKShkaWZmKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGVuZE9mRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgZW5kIG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZW5kIG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIGVuZCBvZiBhIGRheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBlbmQgb2YgYSBkYXkgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBlbmRPZkRheShuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDAyIDIwMTQgMjM6NTk6NTkuOTk5XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZW5kT2ZEYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICBkYXRlLnNldEhvdXJzKDIzLCA1OSwgNTksIDk5OSk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZW5kT2ZNb250aFxuICogQGNhdGVnb3J5IE1vbnRoIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgZW5kIG9mIGEgbW9udGggZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBlbmQgb2YgYSBtb250aCBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBlbmQgb2YgYSBtb250aFxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBlbmQgb2YgYSBtb250aCBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IGVuZE9mTW9udGgobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAzMCAyMDE0IDIzOjU5OjU5Ljk5OVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVuZE9mTW9udGgoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgbW9udGggPSBkYXRlLmdldE1vbnRoKCk7XG4gIGRhdGUuc2V0RnVsbFllYXIoZGF0ZS5nZXRGdWxsWWVhcigpLCBtb250aCArIDEsIDApO1xuICBkYXRlLnNldEhvdXJzKDIzLCA1OSwgNTksIDk5OSk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbmltcG9ydCBjb21wYXJlQXNjIGZyb20gXCIuLi9jb21wYXJlQXNjL2luZGV4LmpzXCI7XG5pbXBvcnQgZGlmZmVyZW5jZUluTW9udGhzIGZyb20gXCIuLi9kaWZmZXJlbmNlSW5Nb250aHMvaW5kZXguanNcIjtcbmltcG9ydCBkaWZmZXJlbmNlSW5TZWNvbmRzIGZyb20gXCIuLi9kaWZmZXJlbmNlSW5TZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgZGVmYXVsdExvY2FsZSBmcm9tIFwiLi4vX2xpYi9kZWZhdWx0TG9jYWxlL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBjbG9uZU9iamVjdCBmcm9tIFwiLi4vX2xpYi9jbG9uZU9iamVjdC9pbmRleC5qc1wiO1xuaW1wb3J0IGFzc2lnbiBmcm9tIFwiLi4vX2xpYi9hc3NpZ24vaW5kZXguanNcIjtcbmltcG9ydCBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlOVVRFU19JTl9EQVkgPSAxNDQwO1xudmFyIE1JTlVURVNfSU5fQUxNT1NUX1RXT19EQVlTID0gMjUyMDtcbnZhciBNSU5VVEVTX0lOX01PTlRIID0gNDMyMDA7XG52YXIgTUlOVVRFU19JTl9UV09fTU9OVEhTID0gODY0MDA7XG4vKipcbiAqIEBuYW1lIGZvcm1hdERpc3RhbmNlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMgaW4gd29yZHMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzIGluIHdvcmRzLlxuICpcbiAqIHwgRGlzdGFuY2UgYmV0d2VlbiBkYXRlcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSZXN1bHQgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgMCAuLi4gMzAgc2VjcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBsZXNzIHRoYW4gYSBtaW51dGUgIHxcbiAqIHwgMzAgc2VjcyAuLi4gMSBtaW4gMzAgc2VjcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAxIG1pbnV0ZSAgICAgICAgICAgIHxcbiAqIHwgMSBtaW4gMzAgc2VjcyAuLi4gNDQgbWlucyAzMCBzZWNzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBbMi4uNDRdIG1pbnV0ZXMgICAgIHxcbiAqIHwgNDQgbWlucyAuLi4gMzAgc2VjcyAuLi4gODkgbWlucyAzMCBzZWNzICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYm91dCAxIGhvdXIgICAgICAgIHxcbiAqIHwgODkgbWlucyAzMCBzZWNzIC4uLiAyMyBocnMgNTkgbWlucyAzMCBzZWNzICAgICAgICAgICAgICAgICAgICAgICAgfCBhYm91dCBbMi4uMjRdIGhvdXJzIHxcbiAqIHwgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAuLi4gNDEgaHJzIDU5IG1pbnMgMzAgc2VjcyAgICAgICAgICAgICAgICAgfCAxIGRheSAgICAgICAgICAgICAgIHxcbiAqIHwgNDEgaHJzIDU5IG1pbnMgMzAgc2VjcyAuLi4gMjkgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzICAgICAgICAgfCBbMi4uMzBdIGRheXMgICAgICAgIHxcbiAqIHwgMjkgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzIC4uLiA0NCBkYXlzIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgfCBhYm91dCAxIG1vbnRoICAgICAgIHxcbiAqIHwgNDQgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzIC4uLiA1OSBkYXlzIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgfCBhYm91dCAyIG1vbnRocyAgICAgIHxcbiAqIHwgNTkgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzIC4uLiAxIHlyICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBbMi4uMTJdIG1vbnRocyAgICAgIHxcbiAqIHwgMSB5ciAuLi4gMSB5ciAzIG1vbnRocyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYm91dCAxIHllYXIgICAgICAgIHxcbiAqIHwgMSB5ciAzIG1vbnRocyAuLi4gMSB5ciA5IG1vbnRoIHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBvdmVyIDEgeWVhciAgICAgICAgIHxcbiAqIHwgMSB5ciA5IG1vbnRocyAuLi4gMiB5cnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhbG1vc3QgMiB5ZWFycyAgICAgIHxcbiAqIHwgTiB5cnMgLi4uIE4geXJzIDMgbW9udGhzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYm91dCBOIHllYXJzICAgICAgIHxcbiAqIHwgTiB5cnMgMyBtb250aHMgLi4uIE4geXJzIDkgbW9udGhzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBvdmVyIE4geWVhcnMgICAgICAgIHxcbiAqIHwgTiB5cnMgOSBtb250aHMgLi4uIE4rMSB5cnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhbG1vc3QgTisxIHllYXJzICAgIHxcbiAqXG4gKiBXaXRoIGBvcHRpb25zLmluY2x1ZGVTZWNvbmRzID09IHRydWVgOlxuICogfCBEaXN0YW5jZSBiZXR3ZWVuIGRhdGVzIHwgUmVzdWx0ICAgICAgICAgICAgICAgfFxuICogfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAwIHNlY3MgLi4uIDUgc2VjcyAgICAgIHwgbGVzcyB0aGFuIDUgc2Vjb25kcyAgfFxuICogfCA1IHNlY3MgLi4uIDEwIHNlY3MgICAgIHwgbGVzcyB0aGFuIDEwIHNlY29uZHMgfFxuICogfCAxMCBzZWNzIC4uLiAyMCBzZWNzICAgIHwgbGVzcyB0aGFuIDIwIHNlY29uZHMgfFxuICogfCAyMCBzZWNzIC4uLiA0MCBzZWNzICAgIHwgaGFsZiBhIG1pbnV0ZSAgICAgICAgfFxuICogfCA0MCBzZWNzIC4uLiA2MCBzZWNzICAgIHwgbGVzcyB0aGFuIGEgbWludXRlICAgfFxuICogfCA2MCBzZWNzIC4uLiA5MCBzZWNzICAgIHwgMSBtaW51dGUgICAgICAgICAgICAgfFxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYmFzZURhdGUgLSB0aGUgZGF0ZSB0byBjb21wYXJlIHdpdGhcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5pbmNsdWRlU2Vjb25kcz1mYWxzZV0gLSBkaXN0YW5jZXMgbGVzcyB0aGFuIGEgbWludXRlIGFyZSBtb3JlIGRldGFpbGVkXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmFkZFN1ZmZpeD1mYWxzZV0gLSByZXN1bHQgaW5kaWNhdGVzIGlmIHRoZSBzZWNvbmQgZGF0ZSBpcyBlYXJsaWVyIG9yIGxhdGVyIHRoYW4gdGhlIGZpcnN0XG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEByZXR1cm5zIHtTdHJpbmd9IHRoZSBkaXN0YW5jZSBpbiB3b3Jkc1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYGRhdGVgIG11c3Qgbm90IGJlIEludmFsaWQgRGF0ZVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYGJhc2VEYXRlYCBtdXN0IG5vdCBiZSBJbnZhbGlkIERhdGVcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBmb3JtYXREaXN0YW5jZWAgcHJvcGVydHlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hhdCBpcyB0aGUgZGlzdGFuY2UgYmV0d2VlbiAyIEp1bHkgMjAxNCBhbmQgMSBKYW51YXJ5IDIwMTU/XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXREaXN0YW5jZShuZXcgRGF0ZSgyMDE0LCA2LCAyKSwgbmV3IERhdGUoMjAxNSwgMCwgMSkpXG4gKiAvLz0+ICc2IG1vbnRocydcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hhdCBpcyB0aGUgZGlzdGFuY2UgYmV0d2VlbiAxIEphbnVhcnkgMjAxNSAwMDowMDoxNVxuICogLy8gYW5kIDEgSmFudWFyeSAyMDE1IDAwOjAwOjAwLCBpbmNsdWRpbmcgc2Vjb25kcz9cbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlKFxuICogICBuZXcgRGF0ZSgyMDE1LCAwLCAxLCAwLCAwLCAxNSksXG4gKiAgIG5ldyBEYXRlKDIwMTUsIDAsIDEsIDAsIDAsIDApLFxuICogICB7IGluY2x1ZGVTZWNvbmRzOiB0cnVlIH1cbiAqIClcbiAqIC8vPT4gJ2xlc3MgdGhhbiAyMCBzZWNvbmRzJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGF0IGlzIHRoZSBkaXN0YW5jZSBmcm9tIDEgSmFudWFyeSAyMDE2XG4gKiAvLyB0byAxIEphbnVhcnkgMjAxNSwgd2l0aCBhIHN1ZmZpeD9cbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlKG5ldyBEYXRlKDIwMTUsIDAsIDEpLCBuZXcgRGF0ZSgyMDE2LCAwLCAxKSwge1xuICogICBhZGRTdWZmaXg6IHRydWVcbiAqIH0pXG4gKiAvLz0+ICdhYm91dCAxIHllYXIgYWdvJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGF0IGlzIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIDEgQXVndXN0IDIwMTYgYW5kIDEgSmFudWFyeSAyMDE1IGluIEVzcGVyYW50bz9cbiAqIGltcG9ydCB7IGVvTG9jYWxlIH0gZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL2VvJ1xuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2UobmV3IERhdGUoMjAxNiwgNywgMSksIG5ldyBEYXRlKDIwMTUsIDAsIDEpLCB7XG4gKiAgIGxvY2FsZTogZW9Mb2NhbGVcbiAqIH0pXG4gKiAvLz0+ICdwbGkgb2wgMSBqYXJvJ1xuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdERpc3RhbmNlKGRpcnR5RGF0ZSwgZGlydHlCYXNlRGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX29wdGlvbnMkbG9jYWxlO1xuXG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgbG9jYWxlID0gKF9yZWYgPSAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmxvY2FsZSkgIT09IG51bGwgJiYgX29wdGlvbnMkbG9jYWxlICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRsb2NhbGUgOiBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiBkZWZhdWx0TG9jYWxlO1xuXG4gIGlmICghbG9jYWxlLmZvcm1hdERpc3RhbmNlKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2xvY2FsZSBtdXN0IGNvbnRhaW4gZm9ybWF0RGlzdGFuY2UgcHJvcGVydHknKTtcbiAgfVxuXG4gIHZhciBjb21wYXJpc29uID0gY29tcGFyZUFzYyhkaXJ0eURhdGUsIGRpcnR5QmFzZURhdGUpO1xuXG4gIGlmIChpc05hTihjb21wYXJpc29uKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHRpbWUgdmFsdWUnKTtcbiAgfVxuXG4gIHZhciBsb2NhbGl6ZU9wdGlvbnMgPSBhc3NpZ24oY2xvbmVPYmplY3Qob3B0aW9ucyksIHtcbiAgICBhZGRTdWZmaXg6IEJvb2xlYW4ob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmFkZFN1ZmZpeCksXG4gICAgY29tcGFyaXNvbjogY29tcGFyaXNvblxuICB9KTtcbiAgdmFyIGRhdGVMZWZ0O1xuICB2YXIgZGF0ZVJpZ2h0O1xuXG4gIGlmIChjb21wYXJpc29uID4gMCkge1xuICAgIGRhdGVMZWZ0ID0gdG9EYXRlKGRpcnR5QmFzZURhdGUpO1xuICAgIGRhdGVSaWdodCA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB9IGVsc2Uge1xuICAgIGRhdGVMZWZ0ID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gICAgZGF0ZVJpZ2h0ID0gdG9EYXRlKGRpcnR5QmFzZURhdGUpO1xuICB9XG5cbiAgdmFyIHNlY29uZHMgPSBkaWZmZXJlbmNlSW5TZWNvbmRzKGRhdGVSaWdodCwgZGF0ZUxlZnQpO1xuICB2YXIgb2Zmc2V0SW5TZWNvbmRzID0gKGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZVJpZ2h0KSAtIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZUxlZnQpKSAvIDEwMDA7XG4gIHZhciBtaW51dGVzID0gTWF0aC5yb3VuZCgoc2Vjb25kcyAtIG9mZnNldEluU2Vjb25kcykgLyA2MCk7XG4gIHZhciBtb250aHM7IC8vIDAgdXAgdG8gMiBtaW5zXG5cbiAgaWYgKG1pbnV0ZXMgPCAyKSB7XG4gICAgaWYgKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuaW5jbHVkZVNlY29uZHMpIHtcbiAgICAgIGlmIChzZWNvbmRzIDwgNSkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdsZXNzVGhhblhTZWNvbmRzJywgNSwgbG9jYWxpemVPcHRpb25zKTtcbiAgICAgIH0gZWxzZSBpZiAoc2Vjb25kcyA8IDEwKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2xlc3NUaGFuWFNlY29uZHMnLCAxMCwgbG9jYWxpemVPcHRpb25zKTtcbiAgICAgIH0gZWxzZSBpZiAoc2Vjb25kcyA8IDIwKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2xlc3NUaGFuWFNlY29uZHMnLCAyMCwgbG9jYWxpemVPcHRpb25zKTtcbiAgICAgIH0gZWxzZSBpZiAoc2Vjb25kcyA8IDQwKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2hhbGZBTWludXRlJywgMCwgbG9jYWxpemVPcHRpb25zKTtcbiAgICAgIH0gZWxzZSBpZiAoc2Vjb25kcyA8IDYwKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2xlc3NUaGFuWE1pbnV0ZXMnLCAxLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgneE1pbnV0ZXMnLCAxLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAobWludXRlcyA9PT0gMCkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdsZXNzVGhhblhNaW51dGVzJywgMSwgbG9jYWxpemVPcHRpb25zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ3hNaW51dGVzJywgbWludXRlcywgbG9jYWxpemVPcHRpb25zKTtcbiAgICAgIH1cbiAgICB9IC8vIDIgbWlucyB1cCB0byAwLjc1IGhyc1xuXG4gIH0gZWxzZSBpZiAobWludXRlcyA8IDQ1KSB7XG4gICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgneE1pbnV0ZXMnLCBtaW51dGVzLCBsb2NhbGl6ZU9wdGlvbnMpOyAvLyAwLjc1IGhycyB1cCB0byAxLjUgaHJzXG4gIH0gZWxzZSBpZiAobWludXRlcyA8IDkwKSB7XG4gICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnYWJvdXRYSG91cnMnLCAxLCBsb2NhbGl6ZU9wdGlvbnMpOyAvLyAxLjUgaHJzIHVwIHRvIDI0IGhyc1xuICB9IGVsc2UgaWYgKG1pbnV0ZXMgPCBNSU5VVEVTX0lOX0RBWSkge1xuICAgIHZhciBob3VycyA9IE1hdGgucm91bmQobWludXRlcyAvIDYwKTtcbiAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdhYm91dFhIb3VycycsIGhvdXJzLCBsb2NhbGl6ZU9wdGlvbnMpOyAvLyAxIGRheSB1cCB0byAxLjc1IGRheXNcbiAgfSBlbHNlIGlmIChtaW51dGVzIDwgTUlOVVRFU19JTl9BTE1PU1RfVFdPX0RBWVMpIHtcbiAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCd4RGF5cycsIDEsIGxvY2FsaXplT3B0aW9ucyk7IC8vIDEuNzUgZGF5cyB1cCB0byAzMCBkYXlzXG4gIH0gZWxzZSBpZiAobWludXRlcyA8IE1JTlVURVNfSU5fTU9OVEgpIHtcbiAgICB2YXIgZGF5cyA9IE1hdGgucm91bmQobWludXRlcyAvIE1JTlVURVNfSU5fREFZKTtcbiAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCd4RGF5cycsIGRheXMsIGxvY2FsaXplT3B0aW9ucyk7IC8vIDEgbW9udGggdXAgdG8gMiBtb250aHNcbiAgfSBlbHNlIGlmIChtaW51dGVzIDwgTUlOVVRFU19JTl9UV09fTU9OVEhTKSB7XG4gICAgbW9udGhzID0gTWF0aC5yb3VuZChtaW51dGVzIC8gTUlOVVRFU19JTl9NT05USCk7XG4gICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnYWJvdXRYTW9udGhzJywgbW9udGhzLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICB9XG5cbiAgbW9udGhzID0gZGlmZmVyZW5jZUluTW9udGhzKGRhdGVSaWdodCwgZGF0ZUxlZnQpOyAvLyAyIG1vbnRocyB1cCB0byAxMiBtb250aHNcblxuICBpZiAobW9udGhzIDwgMTIpIHtcbiAgICB2YXIgbmVhcmVzdE1vbnRoID0gTWF0aC5yb3VuZChtaW51dGVzIC8gTUlOVVRFU19JTl9NT05USCk7XG4gICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgneE1vbnRocycsIG5lYXJlc3RNb250aCwgbG9jYWxpemVPcHRpb25zKTsgLy8gMSB5ZWFyIHVwIHRvIG1heCBEYXRlXG4gIH0gZWxzZSB7XG4gICAgdmFyIG1vbnRoc1NpbmNlU3RhcnRPZlllYXIgPSBtb250aHMgJSAxMjtcbiAgICB2YXIgeWVhcnMgPSBNYXRoLmZsb29yKG1vbnRocyAvIDEyKTsgLy8gTiB5ZWFycyB1cCB0byAxIHllYXJzIDMgbW9udGhzXG5cbiAgICBpZiAobW9udGhzU2luY2VTdGFydE9mWWVhciA8IDMpIHtcbiAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2Fib3V0WFllYXJzJywgeWVhcnMsIGxvY2FsaXplT3B0aW9ucyk7IC8vIE4geWVhcnMgMyBtb250aHMgdXAgdG8gTiB5ZWFycyA5IG1vbnRoc1xuICAgIH0gZWxzZSBpZiAobW9udGhzU2luY2VTdGFydE9mWWVhciA8IDkpIHtcbiAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ292ZXJYWWVhcnMnLCB5ZWFycywgbG9jYWxpemVPcHRpb25zKTsgLy8gTiB5ZWFycyA5IG1vbnRocyB1cCB0byBOIHllYXIgMTIgbW9udGhzXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2FsbW9zdFhZZWFycycsIHllYXJzICsgMSwgbG9jYWxpemVPcHRpb25zKTtcbiAgICB9XG4gIH1cbn0iLCJpbXBvcnQgZGlzdGFuY2VJbldvcmRzIGZyb20gXCIuLi9mb3JtYXREaXN0YW5jZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcblxuLyoqXG4gKiBAbmFtZSBmb3JtYXREaXN0YW5jZVRvTm93XG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZSBhbmQgbm93IGluIHdvcmRzLlxuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZSBhbmQgbm93IGluIHdvcmRzLlxuICpcbiAqIHwgRGlzdGFuY2UgdG8gbm93ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSZXN1bHQgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgMCAuLi4gMzAgc2VjcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBsZXNzIHRoYW4gYSBtaW51dGUgIHxcbiAqIHwgMzAgc2VjcyAuLi4gMSBtaW4gMzAgc2VjcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAxIG1pbnV0ZSAgICAgICAgICAgIHxcbiAqIHwgMSBtaW4gMzAgc2VjcyAuLi4gNDQgbWlucyAzMCBzZWNzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBbMi4uNDRdIG1pbnV0ZXMgICAgIHxcbiAqIHwgNDQgbWlucyAuLi4gMzAgc2VjcyAuLi4gODkgbWlucyAzMCBzZWNzICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYm91dCAxIGhvdXIgICAgICAgIHxcbiAqIHwgODkgbWlucyAzMCBzZWNzIC4uLiAyMyBocnMgNTkgbWlucyAzMCBzZWNzICAgICAgICAgICAgICAgICAgICAgICAgfCBhYm91dCBbMi4uMjRdIGhvdXJzIHxcbiAqIHwgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAuLi4gNDEgaHJzIDU5IG1pbnMgMzAgc2VjcyAgICAgICAgICAgICAgICAgfCAxIGRheSAgICAgICAgICAgICAgIHxcbiAqIHwgNDEgaHJzIDU5IG1pbnMgMzAgc2VjcyAuLi4gMjkgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzICAgICAgICAgfCBbMi4uMzBdIGRheXMgICAgICAgIHxcbiAqIHwgMjkgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzIC4uLiA0NCBkYXlzIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgfCBhYm91dCAxIG1vbnRoICAgICAgIHxcbiAqIHwgNDQgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzIC4uLiA1OSBkYXlzIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgfCBhYm91dCAyIG1vbnRocyAgICAgIHxcbiAqIHwgNTkgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzIC4uLiAxIHlyICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBbMi4uMTJdIG1vbnRocyAgICAgIHxcbiAqIHwgMSB5ciAuLi4gMSB5ciAzIG1vbnRocyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYm91dCAxIHllYXIgICAgICAgIHxcbiAqIHwgMSB5ciAzIG1vbnRocyAuLi4gMSB5ciA5IG1vbnRoIHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBvdmVyIDEgeWVhciAgICAgICAgIHxcbiAqIHwgMSB5ciA5IG1vbnRocyAuLi4gMiB5cnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhbG1vc3QgMiB5ZWFycyAgICAgIHxcbiAqIHwgTiB5cnMgLi4uIE4geXJzIDMgbW9udGhzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYm91dCBOIHllYXJzICAgICAgIHxcbiAqIHwgTiB5cnMgMyBtb250aHMgLi4uIE4geXJzIDkgbW9udGhzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBvdmVyIE4geWVhcnMgICAgICAgIHxcbiAqIHwgTiB5cnMgOSBtb250aHMgLi4uIE4rMSB5cnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhbG1vc3QgTisxIHllYXJzICAgIHxcbiAqXG4gKiBXaXRoIGBvcHRpb25zLmluY2x1ZGVTZWNvbmRzID09IHRydWVgOlxuICogfCBEaXN0YW5jZSB0byBub3cgICAgIHwgUmVzdWx0ICAgICAgICAgICAgICAgfFxuICogfC0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAwIHNlY3MgLi4uIDUgc2VjcyAgIHwgbGVzcyB0aGFuIDUgc2Vjb25kcyAgfFxuICogfCA1IHNlY3MgLi4uIDEwIHNlY3MgIHwgbGVzcyB0aGFuIDEwIHNlY29uZHMgfFxuICogfCAxMCBzZWNzIC4uLiAyMCBzZWNzIHwgbGVzcyB0aGFuIDIwIHNlY29uZHMgfFxuICogfCAyMCBzZWNzIC4uLiA0MCBzZWNzIHwgaGFsZiBhIG1pbnV0ZSAgICAgICAgfFxuICogfCA0MCBzZWNzIC4uLiA2MCBzZWNzIHwgbGVzcyB0aGFuIGEgbWludXRlICAgfFxuICogfCA2MCBzZWNzIC4uLiA5MCBzZWNzIHwgMSBtaW51dGUgICAgICAgICAgICAgfFxuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCBpbiB0aGUgRlAgc3VibW9kdWxlIGFzXG4gKiA+IGl0IHVzZXMgYERhdGUubm93KClgIGludGVybmFsbHkgaGVuY2UgaW1wdXJlIGFuZCBjYW4ndCBiZSBzYWZlbHkgY3VycmllZC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGdpdmVuIGRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSB0aGUgb2JqZWN0IHdpdGggb3B0aW9uc1xuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5pbmNsdWRlU2Vjb25kcz1mYWxzZV0gLSBkaXN0YW5jZXMgbGVzcyB0aGFuIGEgbWludXRlIGFyZSBtb3JlIGRldGFpbGVkXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmFkZFN1ZmZpeD1mYWxzZV0gLSByZXN1bHQgc3BlY2lmaWVzIGlmIG5vdyBpcyBlYXJsaWVyIG9yIGxhdGVyIHRoYW4gdGhlIHBhc3NlZCBkYXRlXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEByZXR1cm5zIHtTdHJpbmd9IHRoZSBkaXN0YW5jZSBpbiB3b3Jkc1xuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgZGF0ZWAgbXVzdCBub3QgYmUgSW52YWxpZCBEYXRlXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgZm9ybWF0RGlzdGFuY2VgIHByb3BlcnR5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDEgSmFudWFyeSAyMDE1LCB3aGF0IGlzIHRoZSBkaXN0YW5jZSB0byAyIEp1bHkgMjAxND9cbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlVG9Ob3coXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIpXG4gKiApXG4gKiAvLz0+ICc2IG1vbnRocydcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgbm93IGlzIDEgSmFudWFyeSAyMDE1IDAwOjAwOjAwLFxuICogLy8gd2hhdCBpcyB0aGUgZGlzdGFuY2UgdG8gMSBKYW51YXJ5IDIwMTUgMDA6MDA6MTUsIGluY2x1ZGluZyBzZWNvbmRzP1xuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2VUb05vdyhcbiAqICAgbmV3IERhdGUoMjAxNSwgMCwgMSwgMCwgMCwgMTUpLFxuICogICB7aW5jbHVkZVNlY29uZHM6IHRydWV9XG4gKiApXG4gKiAvLz0+ICdsZXNzIHRoYW4gMjAgc2Vjb25kcydcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgMSBKYW51YXJ5IDIwMTUsXG4gKiAvLyB3aGF0IGlzIHRoZSBkaXN0YW5jZSB0byAxIEphbnVhcnkgMjAxNiwgd2l0aCBhIHN1ZmZpeD9cbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlVG9Ob3coXG4gKiAgIG5ldyBEYXRlKDIwMTYsIDAsIDEpLFxuICogICB7YWRkU3VmZml4OiB0cnVlfVxuICogKVxuICogLy89PiAnaW4gYWJvdXQgMSB5ZWFyJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyAxIEphbnVhcnkgMjAxNSxcbiAqIC8vIHdoYXQgaXMgdGhlIGRpc3RhbmNlIHRvIDEgQXVndXN0IDIwMTYgaW4gRXNwZXJhbnRvP1xuICogY29uc3QgZW9Mb2NhbGUgPSByZXF1aXJlKCdkYXRlLWZucy9sb2NhbGUvZW8nKVxuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2VUb05vdyhcbiAqICAgbmV3IERhdGUoMjAxNiwgNywgMSksXG4gKiAgIHtsb2NhbGU6IGVvTG9jYWxlfVxuICogKVxuICogLy89PiAncGxpIG9sIDEgamFybydcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0RGlzdGFuY2VUb05vdyhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBkaXN0YW5jZUluV29yZHMoZGlydHlEYXRlLCBEYXRlLm5vdygpLCBvcHRpb25zKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBlbmRPZkRheSBmcm9tIFwiLi4vZW5kT2ZEYXkvaW5kZXguanNcIjtcbmltcG9ydCBlbmRPZk1vbnRoIGZyb20gXCIuLi9lbmRPZk1vbnRoL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc0xhc3REYXlPZk1vbnRoXG4gKiBAY2F0ZWdvcnkgTW9udGggSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdGhlIGxhc3QgZGF5IG9mIGEgbW9udGg/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSB0aGUgbGFzdCBkYXkgb2YgYSBtb250aD9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB0aGUgbGFzdCBkYXkgb2YgYSBtb250aFxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElzIDI4IEZlYnJ1YXJ5IDIwMTQgdGhlIGxhc3QgZGF5IG9mIGEgbW9udGg/XG4gKiBjb25zdCByZXN1bHQgPSBpc0xhc3REYXlPZk1vbnRoKG5ldyBEYXRlKDIwMTQsIDEsIDI4KSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzTGFzdERheU9mTW9udGgoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICByZXR1cm4gZW5kT2ZEYXkoZGF0ZSkuZ2V0VGltZSgpID09PSBlbmRPZk1vbnRoKGRhdGUpLmdldFRpbWUoKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZEZvcm1hdExvbmdGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgIC8vIFRPRE86IFJlbW92ZSBTdHJpbmcoKVxuICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICB2YXIgZm9ybWF0ID0gYXJncy5mb3JtYXRzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHNbYXJncy5kZWZhdWx0V2lkdGhdO1xuICAgIHJldHVybiBmb3JtYXQ7XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRMb2NhbGl6ZUZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChkaXJ0eUluZGV4LCBvcHRpb25zKSB7XG4gICAgdmFyIGNvbnRleHQgPSBvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmNvbnRleHQgPyBTdHJpbmcob3B0aW9ucy5jb250ZXh0KSA6ICdzdGFuZGFsb25lJztcbiAgICB2YXIgdmFsdWVzQXJyYXk7XG5cbiAgICBpZiAoY29udGV4dCA9PT0gJ2Zvcm1hdHRpbmcnICYmIGFyZ3MuZm9ybWF0dGluZ1ZhbHVlcykge1xuICAgICAgdmFyIGRlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdEZvcm1hdHRpbmdXaWR0aCB8fCBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICAgIHZhciB3aWR0aCA9IG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBkZWZhdWx0V2lkdGg7XG4gICAgICB2YWx1ZXNBcnJheSA9IGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1t3aWR0aF0gfHwgYXJncy5mb3JtYXR0aW5nVmFsdWVzW2RlZmF1bHRXaWR0aF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBfZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0V2lkdGg7XG5cbiAgICAgIHZhciBfd2lkdGggPSBvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG5cbiAgICAgIHZhbHVlc0FycmF5ID0gYXJncy52YWx1ZXNbX3dpZHRoXSB8fCBhcmdzLnZhbHVlc1tfZGVmYXVsdFdpZHRoXTtcbiAgICB9XG5cbiAgICB2YXIgaW5kZXggPSBhcmdzLmFyZ3VtZW50Q2FsbGJhY2sgPyBhcmdzLmFyZ3VtZW50Q2FsbGJhY2soZGlydHlJbmRleCkgOiBkaXJ0eUluZGV4OyAvLyBAdHMtaWdub3JlOiBGb3Igc29tZSByZWFzb24gVHlwZVNjcmlwdCBqdXN0IGRvbid0IHdhbnQgdG8gbWF0Y2ggaXQsIG5vIG1hdHRlciBob3cgaGFyZCB3ZSB0cnkuIEkgY2hhbGxlbmdlIHlvdSB0byB0cnkgdG8gcmVtb3ZlIGl0IVxuXG4gICAgcmV0dXJuIHZhbHVlc0FycmF5W2luZGV4XTtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE1hdGNoRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoO1xuICAgIHZhciBtYXRjaFBhdHRlcm4gPSB3aWR0aCAmJiBhcmdzLm1hdGNoUGF0dGVybnNbd2lkdGhdIHx8IGFyZ3MubWF0Y2hQYXR0ZXJuc1thcmdzLmRlZmF1bHRNYXRjaFdpZHRoXTtcbiAgICB2YXIgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2gobWF0Y2hQYXR0ZXJuKTtcblxuICAgIGlmICghbWF0Y2hSZXN1bHQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG4gICAgdmFyIHBhcnNlUGF0dGVybnMgPSB3aWR0aCAmJiBhcmdzLnBhcnNlUGF0dGVybnNbd2lkdGhdIHx8IGFyZ3MucGFyc2VQYXR0ZXJuc1thcmdzLmRlZmF1bHRQYXJzZVdpZHRoXTtcbiAgICB2YXIga2V5ID0gQXJyYXkuaXNBcnJheShwYXJzZVBhdHRlcm5zKSA/IGZpbmRJbmRleChwYXJzZVBhdHRlcm5zLCBmdW5jdGlvbiAocGF0dGVybikge1xuICAgICAgcmV0dXJuIHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKTtcbiAgICB9KSA6IGZpbmRLZXkocGFyc2VQYXR0ZXJucywgZnVuY3Rpb24gKHBhdHRlcm4pIHtcbiAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZyk7XG4gICAgfSk7XG4gICAgdmFyIHZhbHVlO1xuICAgIHZhbHVlID0gYXJncy52YWx1ZUNhbGxiYWNrID8gYXJncy52YWx1ZUNhbGxiYWNrKGtleSkgOiBrZXk7XG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2sgPyBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG4gICAgdmFyIHJlc3QgPSBzdHJpbmcuc2xpY2UobWF0Y2hlZFN0cmluZy5sZW5ndGgpO1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICByZXN0OiByZXN0XG4gICAgfTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZmluZEtleShvYmplY3QsIHByZWRpY2F0ZSkge1xuICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKG9iamVjdC5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIHByZWRpY2F0ZShvYmplY3Rba2V5XSkpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZmluZEluZGV4KGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgZm9yICh2YXIga2V5ID0gMDsga2V5IDwgYXJyYXkubGVuZ3RoOyBrZXkrKykge1xuICAgIGlmIChwcmVkaWNhdGUoYXJyYXlba2V5XSkpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE1hdGNoUGF0dGVybkZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIG1hdGNoUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MubWF0Y2hQYXR0ZXJuKTtcbiAgICBpZiAoIW1hdGNoUmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICB2YXIgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuICAgIHZhciBwYXJzZVJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLnBhcnNlUGF0dGVybik7XG4gICAgaWYgKCFwYXJzZVJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIHZhbHVlID0gYXJncy52YWx1ZUNhbGxiYWNrID8gYXJncy52YWx1ZUNhbGxiYWNrKHBhcnNlUmVzdWx0WzBdKSA6IHBhcnNlUmVzdWx0WzBdO1xuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuICAgIHZhciByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgcmVzdDogcmVzdFxuICAgIH07XG4gIH07XG59IiwidmFyIGZvcm1hdERpc3RhbmNlTG9jYWxlID0ge1xuICBsZXNzVGhhblhTZWNvbmRzOiB7XG4gICAgb25lOiAnbGVzcyB0aGFuIGEgc2Vjb25kJyxcbiAgICBvdGhlcjogJ2xlc3MgdGhhbiB7e2NvdW50fX0gc2Vjb25kcydcbiAgfSxcbiAgeFNlY29uZHM6IHtcbiAgICBvbmU6ICcxIHNlY29uZCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gc2Vjb25kcydcbiAgfSxcbiAgaGFsZkFNaW51dGU6ICdoYWxmIGEgbWludXRlJyxcbiAgbGVzc1RoYW5YTWludXRlczoge1xuICAgIG9uZTogJ2xlc3MgdGhhbiBhIG1pbnV0ZScsXG4gICAgb3RoZXI6ICdsZXNzIHRoYW4ge3tjb3VudH19IG1pbnV0ZXMnXG4gIH0sXG4gIHhNaW51dGVzOiB7XG4gICAgb25lOiAnMSBtaW51dGUnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1pbnV0ZXMnXG4gIH0sXG4gIGFib3V0WEhvdXJzOiB7XG4gICAgb25lOiAnYWJvdXQgMSBob3VyJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSBob3VycydcbiAgfSxcbiAgeEhvdXJzOiB7XG4gICAgb25lOiAnMSBob3VyJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBob3VycydcbiAgfSxcbiAgeERheXM6IHtcbiAgICBvbmU6ICcxIGRheScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gZGF5cydcbiAgfSxcbiAgYWJvdXRYV2Vla3M6IHtcbiAgICBvbmU6ICdhYm91dCAxIHdlZWsnLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IHdlZWtzJ1xuICB9LFxuICB4V2Vla3M6IHtcbiAgICBvbmU6ICcxIHdlZWsnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHdlZWtzJ1xuICB9LFxuICBhYm91dFhNb250aHM6IHtcbiAgICBvbmU6ICdhYm91dCAxIG1vbnRoJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSBtb250aHMnXG4gIH0sXG4gIHhNb250aHM6IHtcbiAgICBvbmU6ICcxIG1vbnRoJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtb250aHMnXG4gIH0sXG4gIGFib3V0WFllYXJzOiB7XG4gICAgb25lOiAnYWJvdXQgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgeFllYXJzOiB7XG4gICAgb25lOiAnMSB5ZWFyJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgb3ZlclhZZWFyczoge1xuICAgIG9uZTogJ292ZXIgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ292ZXIge3tjb3VudH19IHllYXJzJ1xuICB9LFxuICBhbG1vc3RYWWVhcnM6IHtcbiAgICBvbmU6ICdhbG1vc3QgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ2FsbW9zdCB7e2NvdW50fX0geWVhcnMnXG4gIH1cbn07XG5cbnZhciBmb3JtYXREaXN0YW5jZSA9IGZ1bmN0aW9uIGZvcm1hdERpc3RhbmNlKHRva2VuLCBjb3VudCwgb3B0aW9ucykge1xuICB2YXIgcmVzdWx0O1xuICB2YXIgdG9rZW5WYWx1ZSA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcblxuICBpZiAodHlwZW9mIHRva2VuVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZTtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub25lO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub3RoZXIucmVwbGFjZSgne3tjb3VudH19JywgY291bnQudG9TdHJpbmcoKSk7XG4gIH1cblxuICBpZiAob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5hZGRTdWZmaXgpIHtcbiAgICBpZiAob3B0aW9ucy5jb21wYXJpc29uICYmIG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcbiAgICAgIHJldHVybiAnaW4gJyArIHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlc3VsdCArICcgYWdvJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0RGlzdGFuY2U7IiwiaW1wb3J0IGJ1aWxkRm9ybWF0TG9uZ0ZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuL2luZGV4LmpzXCI7XG52YXIgZGF0ZUZvcm1hdHMgPSB7XG4gIGZ1bGw6ICdFRUVFLCBNTU1NIGRvLCB5JyxcbiAgbG9uZzogJ01NTU0gZG8sIHknLFxuICBtZWRpdW06ICdNTU0gZCwgeScsXG4gIHNob3J0OiAnTU0vZGQveXl5eSdcbn07XG52YXIgdGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6ICdoOm1tOnNzIGEgenp6eicsXG4gIGxvbmc6ICdoOm1tOnNzIGEgeicsXG4gIG1lZGl1bTogJ2g6bW06c3MgYScsXG4gIHNob3J0OiAnaDptbSBhJ1xufTtcbnZhciBkYXRlVGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6IFwie3tkYXRlfX0gJ2F0JyB7e3RpbWV9fVwiLFxuICBsb25nOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbWVkaXVtOiAne3tkYXRlfX0sIHt7dGltZX19JyxcbiAgc2hvcnQ6ICd7e2RhdGV9fSwge3t0aW1lfX0nXG59O1xudmFyIGZvcm1hdExvbmcgPSB7XG4gIGRhdGU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgdGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IHRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pLFxuICBkYXRlVGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVUaW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdExvbmc7IiwidmFyIGZvcm1hdFJlbGF0aXZlTG9jYWxlID0ge1xuICBsYXN0V2VlazogXCInbGFzdCcgZWVlZSAnYXQnIHBcIixcbiAgeWVzdGVyZGF5OiBcIid5ZXN0ZXJkYXkgYXQnIHBcIixcbiAgdG9kYXk6IFwiJ3RvZGF5IGF0JyBwXCIsXG4gIHRvbW9ycm93OiBcIid0b21vcnJvdyBhdCcgcFwiLFxuICBuZXh0V2VlazogXCJlZWVlICdhdCcgcFwiLFxuICBvdGhlcjogJ1AnXG59O1xuXG52YXIgZm9ybWF0UmVsYXRpdmUgPSBmdW5jdGlvbiBmb3JtYXRSZWxhdGl2ZSh0b2tlbiwgX2RhdGUsIF9iYXNlRGF0ZSwgX29wdGlvbnMpIHtcbiAgcmV0dXJuIGZvcm1hdFJlbGF0aXZlTG9jYWxlW3Rva2VuXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdFJlbGF0aXZlOyIsImltcG9ydCBidWlsZExvY2FsaXplRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzXCI7XG52YXIgZXJhVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnQicsICdBJ10sXG4gIGFiYnJldmlhdGVkOiBbJ0JDJywgJ0FEJ10sXG4gIHdpZGU6IFsnQmVmb3JlIENocmlzdCcsICdBbm5vIERvbWluaSddXG59O1xudmFyIHF1YXJ0ZXJWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWycxJywgJzInLCAnMycsICc0J10sXG4gIGFiYnJldmlhdGVkOiBbJ1ExJywgJ1EyJywgJ1EzJywgJ1E0J10sXG4gIHdpZGU6IFsnMXN0IHF1YXJ0ZXInLCAnMm5kIHF1YXJ0ZXInLCAnM3JkIHF1YXJ0ZXInLCAnNHRoIHF1YXJ0ZXInXVxufTsgLy8gTm90ZTogaW4gRW5nbGlzaCwgdGhlIG5hbWVzIG9mIGRheXMgb2YgdGhlIHdlZWsgYW5kIG1vbnRocyBhcmUgY2FwaXRhbGl6ZWQuXG4vLyBJZiB5b3UgYXJlIG1ha2luZyBhIG5ldyBsb2NhbGUgYmFzZWQgb24gdGhpcyBvbmUsIGNoZWNrIGlmIHRoZSBzYW1lIGlzIHRydWUgZm9yIHRoZSBsYW5ndWFnZSB5b3UncmUgd29ya2luZyBvbi5cbi8vIEdlbmVyYWxseSwgZm9ybWF0dGVkIGRhdGVzIHNob3VsZCBsb29rIGxpa2UgdGhleSBhcmUgaW4gdGhlIG1pZGRsZSBvZiBhIHNlbnRlbmNlLFxuLy8gZS5nLiBpbiBTcGFuaXNoIGxhbmd1YWdlIHRoZSB3ZWVrZGF5cyBhbmQgbW9udGhzIHNob3VsZCBiZSBpbiB0aGUgbG93ZXJjYXNlLlxuXG52YXIgbW9udGhWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydKJywgJ0YnLCAnTScsICdBJywgJ00nLCAnSicsICdKJywgJ0EnLCAnUycsICdPJywgJ04nLCAnRCddLFxuICBhYmJyZXZpYXRlZDogWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddLFxuICB3aWRlOiBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXVxufTtcbnZhciBkYXlWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydTJywgJ00nLCAnVCcsICdXJywgJ1QnLCAnRicsICdTJ10sXG4gIHNob3J0OiBbJ1N1JywgJ01vJywgJ1R1JywgJ1dlJywgJ1RoJywgJ0ZyJywgJ1NhJ10sXG4gIGFiYnJldmlhdGVkOiBbJ1N1bicsICdNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJywgJ1NhdCddLFxuICB3aWRlOiBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J11cbn07XG52YXIgZGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ2EnLFxuICAgIHBtOiAncCcsXG4gICAgbWlkbmlnaHQ6ICdtaScsXG4gICAgbm9vbjogJ24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnYS5tLicsXG4gICAgcG06ICdwLm0uJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH1cbn07XG52YXIgZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdhJyxcbiAgICBwbTogJ3AnLFxuICAgIG1pZG5pZ2h0OiAnbWknLFxuICAgIG5vb246ICduJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2EubS4nLFxuICAgIHBtOiAncC5tLicsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9XG59O1xuXG52YXIgb3JkaW5hbE51bWJlciA9IGZ1bmN0aW9uIG9yZGluYWxOdW1iZXIoZGlydHlOdW1iZXIsIF9vcHRpb25zKSB7XG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpOyAvLyBJZiBvcmRpbmFsIG51bWJlcnMgZGVwZW5kIG9uIGNvbnRleHQsIGZvciBleGFtcGxlLFxuICAvLyBpZiB0aGV5IGFyZSBkaWZmZXJlbnQgZm9yIGRpZmZlcmVudCBncmFtbWF0aWNhbCBnZW5kZXJzLFxuICAvLyB1c2UgYG9wdGlvbnMudW5pdGAuXG4gIC8vXG4gIC8vIGB1bml0YCBjYW4gYmUgJ3llYXInLCAncXVhcnRlcicsICdtb250aCcsICd3ZWVrJywgJ2RhdGUnLCAnZGF5T2ZZZWFyJyxcbiAgLy8gJ2RheScsICdob3VyJywgJ21pbnV0ZScsICdzZWNvbmQnLlxuXG4gIHZhciByZW0xMDAgPSBudW1iZXIgJSAxMDA7XG5cbiAgaWYgKHJlbTEwMCA+IDIwIHx8IHJlbTEwMCA8IDEwKSB7XG4gICAgc3dpdGNoIChyZW0xMDAgJSAxMCkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3N0JztcblxuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ25kJztcblxuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3JkJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVtYmVyICsgJ3RoJztcbn07XG5cbnZhciBsb2NhbGl6ZSA9IHtcbiAgb3JkaW5hbE51bWJlcjogb3JkaW5hbE51bWJlcixcbiAgZXJhOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZXJhVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBxdWFydGVyOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogcXVhcnRlclZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBhcmd1bWVudENhbGxiYWNrOiBmdW5jdGlvbiBhcmd1bWVudENhbGxiYWNrKHF1YXJ0ZXIpIHtcbiAgICAgIHJldHVybiBxdWFydGVyIC0gMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IG1vbnRoVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXk6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheVBlcmlvZDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBmb3JtYXR0aW5nVmFsdWVzOiBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRGb3JtYXR0aW5nV2lkdGg6ICd3aWRlJ1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IGxvY2FsaXplOyIsImltcG9ydCBidWlsZE1hdGNoRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaEZuL2luZGV4LmpzXCI7XG5pbXBvcnQgYnVpbGRNYXRjaFBhdHRlcm5GbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuL2luZGV4LmpzXCI7XG52YXIgbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9eKFxcZCspKHRofHN0fG5kfHJkKT8vaTtcbnZhciBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL1xcZCsvaTtcbnZhciBtYXRjaEVyYVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGJ8YSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGJcXC4/XFxzP2NcXC4/fGJcXC4/XFxzP2NcXC4/XFxzP2VcXC4/fGFcXC4/XFxzP2RcXC4/fGNcXC4/XFxzP2VcXC4/KS9pLFxuICB3aWRlOiAvXihiZWZvcmUgY2hyaXN0fGJlZm9yZSBjb21tb24gZXJhfGFubm8gZG9taW5pfGNvbW1vbiBlcmEpL2lcbn07XG52YXIgcGFyc2VFcmFQYXR0ZXJucyA9IHtcbiAgYW55OiBbL15iL2ksIC9eKGF8YykvaV1cbn07XG52YXIgbWF0Y2hRdWFydGVyUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bMTIzNF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9ecVsxMjM0XS9pLFxuICB3aWRlOiAvXlsxMjM0XSh0aHxzdHxuZHxyZCk/IHF1YXJ0ZXIvaVxufTtcbnZhciBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgYW55OiBbLzEvaSwgLzIvaSwgLzMvaSwgLzQvaV1cbn07XG52YXIgbWF0Y2hNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW2pmbWFzb25kXS9pLFxuICBhYmJyZXZpYXRlZDogL14oamFufGZlYnxtYXJ8YXByfG1heXxqdW58anVsfGF1Z3xzZXB8b2N0fG5vdnxkZWMpL2ksXG4gIHdpZGU6IC9eKGphbnVhcnl8ZmVicnVhcnl8bWFyY2h8YXByaWx8bWF5fGp1bmV8anVseXxhdWd1c3R8c2VwdGVtYmVyfG9jdG9iZXJ8bm92ZW1iZXJ8ZGVjZW1iZXIpL2lcbn07XG52YXIgcGFyc2VNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFsvXmovaSwgL15mL2ksIC9ebS9pLCAvXmEvaSwgL15tL2ksIC9eai9pLCAvXmovaSwgL15hL2ksIC9ecy9pLCAvXm8vaSwgL15uL2ksIC9eZC9pXSxcbiAgYW55OiBbL15qYS9pLCAvXmYvaSwgL15tYXIvaSwgL15hcC9pLCAvXm1heS9pLCAvXmp1bi9pLCAvXmp1bC9pLCAvXmF1L2ksIC9ecy9pLCAvXm8vaSwgL15uL2ksIC9eZC9pXVxufTtcbnZhciBtYXRjaERheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW3NtdHdmXS9pLFxuICBzaG9ydDogL14oc3V8bW98dHV8d2V8dGh8ZnJ8c2EpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihzdW58bW9ufHR1ZXx3ZWR8dGh1fGZyaXxzYXQpL2ksXG4gIHdpZGU6IC9eKHN1bmRheXxtb25kYXl8dHVlc2RheXx3ZWRuZXNkYXl8dGh1cnNkYXl8ZnJpZGF5fHNhdHVyZGF5KS9pXG59O1xudmFyIHBhcnNlRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9ecy9pLCAvXm0vaSwgL150L2ksIC9edy9pLCAvXnQvaSwgL15mL2ksIC9ecy9pXSxcbiAgYW55OiBbL15zdS9pLCAvXm0vaSwgL150dS9pLCAvXncvaSwgL150aC9pLCAvXmYvaSwgL15zYS9pXVxufTtcbnZhciBtYXRjaERheVBlcmlvZFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGF8cHxtaXxufChpbiB0aGV8YXQpIChtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0KSkvaSxcbiAgYW55OiAvXihbYXBdXFwuP1xccz9tXFwuP3xtaWRuaWdodHxub29ufChpbiB0aGV8YXQpIChtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0KSkvaVxufTtcbnZhciBwYXJzZURheVBlcmlvZFBhdHRlcm5zID0ge1xuICBhbnk6IHtcbiAgICBhbTogL15hL2ksXG4gICAgcG06IC9ecC9pLFxuICAgIG1pZG5pZ2h0OiAvXm1pL2ksXG4gICAgbm9vbjogL15uby9pLFxuICAgIG1vcm5pbmc6IC9tb3JuaW5nL2ksXG4gICAgYWZ0ZXJub29uOiAvYWZ0ZXJub29uL2ksXG4gICAgZXZlbmluZzogL2V2ZW5pbmcvaSxcbiAgICBuaWdodDogL25pZ2h0L2lcbiAgfVxufTtcbnZhciBtYXRjaCA9IHtcbiAgb3JkaW5hbE51bWJlcjogYnVpbGRNYXRjaFBhdHRlcm5Gbih7XG4gICAgbWF0Y2hQYXR0ZXJuOiBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHBhcnNlUGF0dGVybjogcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiB2YWx1ZUNhbGxiYWNrKHZhbHVlKSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgICB9XG4gIH0pLFxuICBlcmE6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBxdWFydGVyOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uIHZhbHVlQ2FsbGJhY2soaW5kZXgpIHtcbiAgICAgIHJldHVybiBpbmRleCArIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5OiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5UGVyaW9kOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICdhbnknLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgbWF0Y2g7IiwiaW1wb3J0IGZvcm1hdERpc3RhbmNlIGZyb20gXCIuL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXRMb25nIGZyb20gXCIuL19saWIvZm9ybWF0TG9uZy9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdFJlbGF0aXZlIGZyb20gXCIuL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanNcIjtcbmltcG9ydCBsb2NhbGl6ZSBmcm9tIFwiLi9fbGliL2xvY2FsaXplL2luZGV4LmpzXCI7XG5pbXBvcnQgbWF0Y2ggZnJvbSBcIi4vX2xpYi9tYXRjaC9pbmRleC5qc1wiO1xuXG4vKipcbiAqIEB0eXBlIHtMb2NhbGV9XG4gKiBAY2F0ZWdvcnkgTG9jYWxlc1xuICogQHN1bW1hcnkgRW5nbGlzaCBsb2NhbGUgKFVuaXRlZCBTdGF0ZXMpLlxuICogQGxhbmd1YWdlIEVuZ2xpc2hcbiAqIEBpc28tNjM5LTIgZW5nXG4gKiBAYXV0aG9yIFNhc2hhIEtvc3MgW0Brb3Nzbm9jb3JwXXtAbGluayBodHRwczovL2dpdGh1Yi5jb20va29zc25vY29ycH1cbiAqIEBhdXRob3IgTGVzaGEgS29zcyBbQGxlc2hha29zc117QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2xlc2hha29zc31cbiAqL1xudmFyIGxvY2FsZSA9IHtcbiAgY29kZTogJ2VuLVVTJyxcbiAgZm9ybWF0RGlzdGFuY2U6IGZvcm1hdERpc3RhbmNlLFxuICBmb3JtYXRMb25nOiBmb3JtYXRMb25nLFxuICBmb3JtYXRSZWxhdGl2ZTogZm9ybWF0UmVsYXRpdmUsXG4gIGxvY2FsaXplOiBsb2NhbGl6ZSxcbiAgbWF0Y2g6IG1hdGNoLFxuICBvcHRpb25zOiB7XG4gICAgd2Vla1N0YXJ0c09uOiAwXG4gICAgLyogU3VuZGF5ICovXG4gICAgLFxuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogMVxuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgbG9jYWxlOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKGFyZ3VtZW50KSA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgZm9ybWF0RGlzdGFuY2VUb05vdyB9IGZyb20gJ2RhdGUtZm5zJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBET01NYW5hZ2VyIHtcblxuICBjb25zdHJ1Y3RvciAoKSB7XG5cbiAgfVxuICBjbG9zZUZvcm0oaWQpe1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaWQpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgdGhpcy5yZXNldEZvcm0oaWQpXG4gIH1cbiAgLy9BZGQgSWNvblxuICBjcmVhdGVBZGRCdXR0b24gKCkge1xuXG4gICAgLy9CdXR0b25cbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGJ1dHRvbi5jbGFzc05hbWUgPSAnYmctYmx1ZS02MDAgcm91bmRlZC1mdWxsIGhvdmVyOmJnLWJsdWUtNzAwIHRyYW5zaXRpb24tYWxsJ1xuXG4gICAgLy9JY29uXG4gICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKVxuICAgIGljb24uY2xhc3NOYW1lID0gJ3RleHQteGwgdGV4dC1zbGF0ZS0yMDAgZmEtc29saWQgZmEtcGx1cyBmb250LW1lZGl1bSdcblxuICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChpY29uKVxuXG4gICAgcmV0dXJuIGJ1dHRvblxuICB9XG4gIC8vRGl2IENvbnRhaW5lclxuICBjcmVhdGVDb250YWluZXIgKCkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGl2LmNsYXNzTmFtZSA9ICdwLTQnXG5cbiAgICByZXR1cm4gZGl2XG4gIH1cbiAgLy9Gb290ZXJcbiAgY3JlYXRlRm9vdGVyICgpIHtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKVxuICAgICAgZm9vdGVyLmNsYXNzTmFtZSA9ICdib3JkZXItdC0yIGJvcmRlci1zb2xpZCBib3JkZXItd2hpdGUgYmctYmx1ZS03MDAnXG5cbiAgLy9QYXJhZ3JhcGhcbiAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHAuY2xhc3NOYW1lID0gJ3RleHQtc20gdGV4dC1zbGF0ZS01MDAgdGV4dC1jZW50ZXIgcHktNCdcbiAgICBwLmlubmVySFRNTCA9IGBDb3B5cmlnaHQgJmNvcHk7ICR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfWBcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQocClcblxuICAgIHJldHVybiBmb290ZXJcbiAgfVxuICAvL1BhZ2UgaGVhZGVyXG4gIGNyZWF0ZUhlYWRlciAoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJylcbiAgICBoZWFkZXIuY2xhc3NOYW1lID0gJ3AtNCBiZy1ibHVlLTcwMCBtLWF1dG8gbXgtNCByb3VuZGVkLXRvcCByb3VuZGVkLW1kJ1xuICAgIHJldHVybiBoZWFkZXJcbiAgfVxuICAvL0hlYWRpbmcgZWxlbWVudFxuICBjcmVhdGVIZWFkaW5nICh0ZXh0KSB7XG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbiAgICBoZWFkaW5nLmNsYXNzTmFtZSA9ICd0ZXh0LXhsIHRleHQtc2xhdGUtMjAwJ1xuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSB0ZXh0XG5cbiAgICByZXR1cm4gaGVhZGluZ1xuICB9XG4gIC8vSG9yaXpvbnRhbCBsaW5lXG4gIGNyZWF0ZUhvcml6b250YWxMaW5lICgpIHtcbiAgICBjb25zdCBsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKVxuICAgIGxpbmUuc3R5bGUuaGVpZ2h0ID0gJzF4cCdcbiAgICBsaW5lLmNsYXNzTmFtZSA9ICdiZy1zbGF0ZS01MDAgdy1mdWxsJ1xuXG4gICAgcmV0dXJuIGxpbmVcbiAgfVxuICAvL0J1c2luZXNzIG5hbWVcbiAgY3JlYXRlTG9nbyAodGV4dCkge1xuICAgIGNvbnN0IGxvZ28gPSB0aGlzLmNyZWF0ZUhlYWRpbmcodGV4dClcbiAgICBsb2dvLmNsYXNzTGlzdC5yZW1vdmUoJ3RleHQteGwnKVxuICAgIGxvZ28uY2xhc3NMaXN0LmFkZCgndGV4dC0yeGwnLCdmb250LWJvbGQnLCd0ZXh0LWNlbnRlcicpXG5cbiAgICByZXR1cm4gbG9nb1xuICB9XG4gIC8vUHJvamVjdCBjb250YWluZXJcbiAgLy91c2VkIGZvciBkaXNsYXkgaW4gdGhlIHNpZGUgYmFyXG4gIGNyZWF0ZVByb2plY3RDb250YWluZXIgKHByb2plY3ROYW1lKSB7XG4gICAgY29uc3QgaGFzaExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgICBoYXNoTGluay5ocmVmID0gYCMke3Byb2plY3ROYW1lLnJlcGxhY2VBbGwoJyAnLCctJyl9YFxuICAgIGNvbnN0IHByb2pDb250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIHByb2pDb250LmlkID0gYCR7cHJvamVjdE5hbWUudG9Mb3dlckNhc2UoKS5yZXBsYWNlQWxsKCcgJywgJy0nKX0tY29udGFpbmVyYFxuICAgICAgcHJvakNvbnQuY2xhc3NOYW1lID0gJ3ctZnVsbCBiZy1ibHVlLTYwMCBib3JkZXItdC0yIGJvcmRlci1zb2xpZCBib3JkZXItd2hpdGUgaG92ZXI6YmctYmx1ZS03MDAgdHJhbnNpdGlvbi1hbGwnXG5cbiAgICAgIC8vTmFtZVxuICAgICAgY29uc3QgcHJvak5hbWUgPSB0aGlzLmNyZWF0ZUhlYWRpbmcocHJvamVjdE5hbWUpXG4gICAgICAgIHByb2pOYW1lLmlkID0gYCR7cHJvamVjdE5hbWUudG9Mb3dlckNhc2UoKS5yZXBsYWNlQWxsKCcgJywgJy0nKX1gXG4gICAgICAgIHByb2pOYW1lLmNsYXNzTmFtZSA9ICdwcm9qZWN0IHB5LTIgdGV4dC1zbGF0ZS0yMDAgdGV4dC14bCBweC00J1xuICAgICAgXG4gICAgICAvL0FwcGVuZCBuYW1lXG4gICAgICBoYXNoTGluay5hcHBlbmRDaGlsZChwcm9qTmFtZSlcbiAgICAgIHByb2pDb250LmFwcGVuZENoaWxkKGhhc2hMaW5rKVxuXG4gICAgICByZXR1cm4gcHJvakNvbnRcbiAgfVxuICAvL0Rlc2NyaXB0aW9uIGNvbnRhaW5lclxuICBjcmVhdGVQcm9qZWN0RGVzY3JpcHRpb24gKGRlc2NyaXB0aW9uKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5jcmVhdGVDb250YWluZXIoKVxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdiZy1ibHVlLTYwMCcsJ3B4LTgnLCAncHktNCcpXG5cbiAgICAvL1BhcmFncmFwaFxuICAgIGNvbnN0IHBhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHBhci5jbGFzc05hbWUgPSAndGV4dC1zbGF0ZS0yMDAgdGV4dC1tZCdcbiAgICBwYXIudGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvblxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHBhcilcblxuICAgIHJldHVybiBjb250YWluZXJcbiAgfVxuICAvL1Byb2plY3QgaGVhZGVyXG4gIC8vZGlzcGxheSBpbiB0aGUgbWFpbiBib2R5IFxuICAvL1BlaW9kIGlzIGFuIG9iamVjdCB3aXRoIHBlcmlvZC5zdGFydCBhbmQgcGVyaW9kLmVuZFxuICBjcmVhdGVQcm9qZWN0SGVhZGVyIChwcm9qZWN0TmFtZSl7XG4gICAgLy9NYWluIGNvbnRhaW5lclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuY3JlYXRlQ29udGFpbmVyKClcbiAgICBjb250YWluZXIuY2xhc3NOYW1lID0gJ2ZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIGJnLWJsdWUtNjAwIGl0ZW1zLWNlbnRlciB3LWZ1bGwgcHktNCBwbC04J1xuICAgIC8vQWRkIE5hbWVcbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSB0aGlzLmNyZWF0ZUhlYWRpbmcocHJvamVjdE5hbWUpXG4gICAgcHJvamVjdFRpdGxlLmNsYXNzTGlzdC5hZGQoJ2ZvbnQtYm9sZCcpXG4gICAgcHJvamVjdFRpdGxlLmlkID0gJ3Byb2plY3QtbmFtZSdcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKVxuXG4gICAgcmV0dXJuIGNvbnRhaW5lclxuICB9XG4gIC8vU2lkZSBiYXJcbiAgY3JlYXRlU2lkZWJhciAoKSB7XG4gICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhc2lkZScpXG4gICAgIHNpZGViYXIuY2xhc3NOYW1lID0gJ3B4LTQgYmctYmx1ZS03MDAgcm91bmRlZC1tZCBweS0xNidcblxuICAgICByZXR1cm4gc2lkZWJhclxuICB9XG4gIC8vQ2hpbGQgbm9kZSBvZiB0YXNrc0NvbnRhaW5lclxuICAvL05vZGUgY29udGFpbnMgaW5mb3JtYXRpb24gb2Ygb25lIHRhc2sgb25seVxuICBjcmVhdGVUYXNrRGl2ICh0YXNrKSB7XG4gICAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKCdiZy1zbGF0ZS0yMDAnLCAncm91bmRlZC1tZCcsICd0YXNrJywgJ3BiLTInLCAnb3ZlcmZsb3ctaGlkZGVuJylcbiAgICAvL3RpdGxlXG4gICAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICB0YXNrTmFtZS50ZXh0Q29udGVudCA9IGAke3Rhc2sudGl0bGV9YFxuICAgIHRhc2tOYW1lLmNsYXNzTmFtZSA9ICdmb250LWJvbGQgYmctYmx1ZS03MDAgcHktMiBweC00IHRleHQtc2xhdGUtMjAwIHJvdW5kZWQtdC1tZCdcbiAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tOYW1lKVxuICAgIFxuICAgIC8vRHNjcmlwdGlvblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgdHJ5IHtcbiAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gYCR7dGFzay5nZXREZXNjcmlwdGlvbigpfWBcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciBvY2N1cmVkIHdoaWxlIEZvcm1hdGluZyBkYXRlIGZvciAke3Rhc2t9YClcbiAgICB9XG4gICAgZGVzY3JpcHRpb24uY2xhc3NOYW1lID0gJ3B4LTQnXG4gICAgdGFza0Rpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBcbiAgICAvL0R1ZWRhdGVcbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgY29uc3QgZGF0ZSA9IHRhc2suZ2V0RHVlRGF0ZSgpLnJlcGxhY2VBbGwoJy0nLCcsICcpXG4gICAgZHVlRGF0ZS5pbm5lckhUTUwgPSBgPHN0cm9uZz5EdWUgaW4gOjwvc3Ryb25nPiAke2Zvcm1hdERpc3RhbmNlVG9Ob3cobmV3IERhdGUoZGF0ZSkpfWBcbiAgICBkdWVEYXRlLmNsYXNzTmFtZSA9ICdweC00J1xuICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQoZHVlRGF0ZSlcblxuXG4gICAgcmV0dXJuIHRhc2tEaXZcbiAgfVxuICBjcmVhdGVUYXNrTWFuYWdlbWVudEJ0bnMgKHRhc2spIHtcbiAgICAgICAgLy9UYXNrIG1hbmFnbWVudCBidXR0b25zXG4gICAgICAgIGNvbnN0IGJ0bnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBidG5zRGl2LmNsYXNzTmFtZSA9ICdmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBweC00IHctZnVsbCBpdGVtcy1jZW50ZXIgbXQtNCdcbiAgICAgICAgLy9NYXJrIGFzIGNvbXBsZXRlXG4gICAgICAgIGNvbnN0IG1hcmtBc0NvbXBsZXRlQnRuID0gIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgICAgICBtYXJrQXNDb21wbGV0ZUJ0bi5pZCA9IGAke3Rhc2suaWR9LWNvbXBsZXRlYFxuICAgICAgICAgICAgbWFya0FzQ29tcGxldGVCdG4uY2xhc3NOYW1lID0gJ3Rhc2stY29tcGxldGUtYnRuIHJvdW5kZWQtbWQgcHktMiBweC04J1xuICAgICAgICAgICAgLy9DaGVjayBpY29uXG4gICAgICAgICAgICBjb25zdCBjaGVja0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJylcbiAgICAgICAgICAgICAgY2hlY2tJY29uLmNsYXNzTmFtZSA9ICd0ZXh0LWJvbGQgdGV4dC1zbGF0ZS0yMDAgdGV4dC1sZyBmYS1zb2xpZCBmYS1jaGVjaydcblxuICAgICAgICAgICAgbWFya0FzQ29tcGxldGVCdG4uYXBwZW5kQ2hpbGQoY2hlY2tJY29uKVxuXG4gICAgICAgICAgICAvL2NIRUNLIElGIFRBU0sgQ09NUExFVEVcbiAgICAgICAgICAgIGlmKHRhc2suaXNDb21wbGV0ZSgpKXtcbiAgICAgICAgICAgICAgbWFya0FzQ29tcGxldGVCdG4uY2xhc3NMaXN0LmFkZCgnYmctZ3JlZW4tNTAwJylcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG1hcmtBc0NvbXBsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2JnLXNsYXRlLTUwMCcpXG4gICAgICAgICAgICB9XG4gICAgICAgIGJ0bnNEaXYuYXBwZW5kQ2hpbGQobWFya0FzQ29tcGxldGVCdG4pXG4gICAgXG4gICAgICAgIC8vRWRpdCBidG5cbiAgICAgICAgY29uc3QgZWRpdEJ0biA9ICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICAgICAgZWRpdEJ0bi5pZCA9IGAke3Rhc2suaWR9LWVkaXRgXG4gICAgICAgICAgICBlZGl0QnRuLmNsYXNzTmFtZSA9ICd0YXNrLWVkaXQtYnRuIGJnLXllbGxvdy01MDAgcm91bmRlZC1tZCBweS0yIHB4LTgnXG4gICAgICAgICAgICAvL0NoZWNrIGljb25cbiAgICAgICAgICAgIGNvbnN0IGVkaXRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpXG4gICAgICAgICAgICBlZGl0SWNvbi5jbGFzc05hbWUgPSAndGV4dC1ib2xkIHRleHQtc2xhdGUtMjAwIHRleHQtbGcgZmEtc29saWQgZmEtcGVuJ1xuICAgICAgICBcbiAgICAgICAgICAgIGVkaXRCdG4uYXBwZW5kQ2hpbGQoZWRpdEljb24pXG4gICAgICAgIGJ0bnNEaXYuYXBwZW5kQ2hpbGQoZWRpdEJ0bilcbiAgICBcbiAgICAgICAgLy9kZWxldGUgYnRuXG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ0biA9ICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICAgICAgZGVsZXRlQnRuLmlkID0gYCR7dGFzay5pZH0tZGVsZXRlYFxuICAgICAgICAgICAgZGVsZXRlQnRuLmNsYXNzTmFtZSA9ICd0YXNrLWRlbGV0ZS1idG4gYmctcmVkLTUwMCByb3VuZGVkLW1kIHB5LTIgcHgtOCdcbiAgICAgICAgICAgIC8vQ2hlY2sgaWNvblxuICAgICAgICAgICAgY29uc3QgZGVsZXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKVxuICAgICAgICAgICAgZGVsZXRlSWNvbi5jbGFzc05hbWUgPSAndGV4dC1ib2xkIHRleHQtc2xhdGUtMjAwIHRleHQtbGcgZmEtc29saWQgZmEtdHJhc2gnXG4gICAgICAgIFxuICAgICAgICAgICAgZGVsZXRlQnRuLmFwcGVuZENoaWxkKGRlbGV0ZUljb24pXG4gICAgICAgIGJ0bnNEaXYuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKVxuXG4gICAgICAgIHJldHVybiBidG5zRGl2XG4gIH1cbiAgLy9QYXJlbnQgY2ludGFpbmVyIHRvIGFsbCB0YXNrQ29udGFpbmVyIG5vZGVzIFxuICBjcmVhdGVUYXNrc0NvbnRhaW5lciAoKSB7XG4gICAgLy9UYXNrcyBjb250YWluZXJcbiAgICBjb25zdCB0YXNrc0NvbnRhaW5lciA9IHRoaXMuY3JlYXRlQ29udGFpbmVyKClcbiAgICB0YXNrc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd3LWZ1bGwnLCAnYmctYmx1ZS02MDAnLCAnZ3JpZCcsICdncmlkLTInLCAnZ2FwLTQnKVxuICAgIHRhc2tzQ29udGFpbmVyLmlkID0gJ3Rhc2tzLWNvbnRhaW5lcidcbiAgXG4gICAgcmV0dXJuIHRhc2tzQ29udGFpbmVyXG4gICAgfVxuICAvL1VzZXIgcHJvZmlsZVxuICBjcmVhdGVVc2VyUHJvZmlsZSAodXNlck5hbWUpIHtcbiAgICAvL1Byb2ZpbGUgY29udGFpbmVyXG4gICAgY29uc3QgcHJvZmlsZSA9IHRoaXMuY3JlYXRlQ29udGFpbmVyKClcbiAgICBwcm9maWxlLmNsYXNzTGlzdC5hZGQoJ2ZsZXgnLCAnZmxleC1yb3cnLCAnanVzdGlmeS1lbmQnLCAnaXRlbXMtY2VudGVyJywgJ2dhcC00JylcbiAgICBwcm9maWxlLmlkID0gJ3Byb2ZpbGUnXG5cbiAgICAvL3BpY3R1cmUgaW1hZ2VcbiAgICBjb25zdCBwaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIHBpYy5pZCA9ICdwcm9maWxlLXBpY3R1cmUnXG4gICAgcGljLmNsYXNzTmFtZSA9ICdyb3VuZGVkLWZ1bGwnXG4gICAgcHJvZmlsZS5hcHBlbmRDaGlsZChwaWMpXG5cbiAgICAvL3VzZXIgbmFtZVxuICAgIGNvbnN0IG5hbWUgPSB0aGlzLmNyZWF0ZUhlYWRpbmcodXNlck5hbWUpXG4gICAgcHJvZmlsZS5wcmVwZW5kKG5hbWUpXG5cbiAgICByZXR1cm4gcHJvZmlsZVxuICB9XG4gIGRpc3BsYXlGb3JtIChoYXNoRm9ybUlkKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihoYXNoRm9ybUlkKS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKVxuICB9XG4gIGdldEZvcm1EYXRhIChoYXNoRm9ybUlkKSB7XG4gICAgY29uc3QgZGF0YSA9IFtdXG4gICAgLy9HZXQgbm9kZSBsaXN0XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgJHtoYXNoRm9ybUlkfSBpbnB1dGApLmZvckVhY2goZWxlbWVudCA9PntcbiAgICAgIC8vZ2V0IGlucHV0IHZhbHVlcyBhbmQgYWRkIHRvIGRhdGEgYXJyYXlcbiAgICAgIGRhdGEucHVzaChlbGVtZW50LnZhbHVlLnRyaW0oKSlcbiAgICB9KVxuICAgIHJldHVybiBkYXRhXG4gIH0gXG4gIFxuICAvL0FwcGVuZCB0byBET01cbiAgcmVuZGVyIChjb250ZW50KSB7XG4gICAgICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKVxuICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50KVxuICAgIH1cbiAgcmVzZXRGb3JtKGlkKXtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAke2lkfSBpbnB1dGApLmZvckVhY2goXG4gICAgICBpbnB1dEVsZW1lbnQgPT4gaW5wdXRFbGVtZW50LnZhbHVlID0gJydcbiAgICApXG4gIH1cbiAgICBcbn0iLCJpbXBvcnQgVGFza01hbmFnZXIgZnJvbSBcIi4vdGFza19tYW5hZ2VyLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IGV4dGVuZHMgVGFza01hbmFnZXIge1xuXG4gICAgLy9Qcm9qZWN0IG9wZW5cbiAgICAjZGVzY3JpcHRpb24gPSAnJ1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpe1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICAgICAgdGhpcy5jb21wbGV0ZSA9IGZhbHNlXG4gICAgfVxuICAgIGFkZFRhc2sodGFzayl7XG4gICAgICAgIHRoaXMuZ2V0VGFza3MoKS5wdXNoKHRhc2spXG4gICAgfVxuICAgIC8vcmV0dXJuIHZhbHVlIG9mIGRlc2NyaXB0aW9uXG4gICAgZ2V0RGVzY3JpcHRpb24oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2Rlc2NyaXB0aW9uXG4gICAgfVxuICAgIC8vaXMgY29tcGxldGVcbiAgICBpc0NvbXBsZXRlKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlXG4gICAgfVxuICAgIFxuICAgIC8vTWFyayBhcyBjb21wbGV0ZVxuICAgIG1hcmtBc0NvbXBsZXRlKCl7XG4gICAgICAgIHRoaXMuY29tcGxldGUgPSB0cnVlXG4gICAgfVxuICAgIC8vcmVtb3ZlIHRhc2sgZnJvbSBsaXN0XG4gICAgcmVtb3ZlVGFzayh0YXNrKXtcbiAgICAgICAgY29uc3QgdGFza3MgPSB0aGlzLnRhc2tMaXN0LmZpbHRlcihlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGlmKGVsZW1lbnQuaWQgPT09IHRhc2suaWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHRhc2tzXG4gICAgfVxuICAgXG4gICAgLy9pbml0aWFsaXplIGRlc2NyaXBpb25cbiAgICBzZXREZXNjcmlwdGlvbihkZXNjcmlwdGlvbil7XG4gICAgICAgIHRoaXMuI2Rlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25cbiAgICB9XG4gICAgdG9KU09OICgpe1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgXCJuYW1lXCI6IHRoaXMubmFtZSxcbiAgICAgICAgICAgIFwiY29tcGxldGVcIjogdGhpcy5pc0NvbXBsZXRlKCksXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IHRoaXMuZ2V0RGVzY3JpcHRpb24oKSxcbiAgICAgICAgICAgIFwidGFza3NcIjogdGhpcy5nZXRUYXNrcygpLm1hcCh0YXNrID0+dGFzayA9IHRhc2sudG9KU09OKCkpLFxuICAgICAgICB9XG4gICAgfVxuXG59XG5cbiIsIlxuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0LmpzJ1xuaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrLmpzJ1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdE1hbmFnZXIge1xuICAgICAvKlxuICAgIFByb2plY3QgbWFuYWdlciBjbGFzcyBwZXJmb3JtcyBvcGVyYXRpb25zIG9uIFByb2plY3RzXG4gICAgKi9cbiAgICNjb21wbGV0ZWRQcm9qZWN0cyA9IFtdXG4gICAjcHJvamVjdHMgPSBbXVxuICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLiNwcm9qZWN0cyA9IHRoaXMuZ2V0UHJvamVjdHMoKVxuICAgICAgICB0aGlzLiNzZXRMb2NhbFN0b3JhZ2UodGhpcy4jcHJvamVjdHMpXG4gICAgfVxuICAgIC8vQWRkIHRvIGxpc3RcbiAgICAjYWNjZXNzTG9jYWxTdG9yYWdlICgpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdERhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHNEYXRhJylcbiAgICAgICAgaWYocHJvamVjdERhdGEpe1xuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UocHJvamVjdERhdGEpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSByZXR1cm4gW11cbiAgICB9XG4gICAgYWRkVGFzayhwcm9qZWN0LCB0YXNrKXtcbiAgICAgICAgLy9GaW5kIHVubW9kaWZpZWQgcHJvamVjdFxuICAgICAgICB0aGlzLiNwcm9qZWN0cy5mb3JFYWNoKGVsZW1lbnQgPT57XG4gICAgICAgICAgICBpZihlbGVtZW50Lm5hbWUgPT09IHByb2plY3QubmFtZSlcbiAgICAgICAgICAgICAgICAgLy9Nb2RpZnkgcHJvamVjdCBieSBhZGRpbmcgdGFzayB0byB0YXNrIGxpc3RcbiAgICAgICAgICAgICAgICBlbGVtZW50LmFkZFRhc2sodGFzaylcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAvL1NldCBsb2NhbCBzdGFyYWdlIHRvIGFycmF5IHdpdGggdGhlIG1vZGlmZWQgcHJvamVjdFxuICAgICAgICAgICAgdGhpcy4jc2V0TG9jYWxTdG9yYWdlKHRoaXMuI3Byb2plY3RzKVxuICAgIH1cbiAgICAvL1VwZGF0ZSBjb21wbGV0ZWQgcHJvamVjdHNcbiAgICBhZGRUb0NvbXBsZXRlZChwcm9qZWN0KXtcbiAgICAgICAgICAgIHRoaXMuI2NvbXBsZXRlZFByb2plY3RzLnB1c2gocHJvamVjdClcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlUHJvamVjdChwcm9qZWN0KVxuICAgIH1cbiAgICAvL0FkZCBuZXcgcHJvamVjdCB0byBwcm9qZWN0cyBsaXN0IGFuZCBzYXZlIHRvIGxvY2FsIHN0b3JhZ2VcbiAgICBhZGRUb1Byb2plY3RMaXN0IChuZXdQcm9qZWN0KSB7XG4gICAgICAgIHRoaXMuI3VwZGF0ZUxvY2FsU3RvcmFnZShuZXdQcm9qZWN0KVxuXG4gICAgfVxuICAgIC8vRmlsdGVyIHByb2plY3QgXG4gICAgI2ZpbHRlclByb2plY3RzKHByb2plY3Qpe1xuICAgICAgICByZXR1cm4gdGhpcy4jcHJvamVjdHMuZmlsdGVyKGVsZW1lbnQgPT4gZWxlbWVudC5uYW1lICE9PSBwcm9qZWN0Lm5hbWUpXG4gICAgfVxuICAgIC8vR2V0IGxpc3Qgb2YgY29tcGxldGVkIHByb2plY3RzXG4gICAgZ2V0Q29tcGxldGVkKCl7XG4gICAgICAgIHJldHVybiB0aGlzLiNjb21wbGV0ZWRQcm9qZWN0c1xuICAgIH1cbiAgICAvL2dldCBwcm9qZWN0c1xuICAgIGdldFByb2plY3RzKCl7XG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gW10vL0luaXRpYWxpemUgdG8gZW1wdHlcbiAgICAgICAgLy9HZXQgcHJvamVjdCBkYXRhIGZyb20gbG9jYWxzdG9yYWdlXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0RGF0YSA9IHRoaXMuI2FjY2Vzc0xvY2FsU3RvcmFnZSgpIFxuICAgICAgICAgICAgaWYoQXJyYXkuaXNBcnJheShwcm9qZWN0RGF0YSkpe1xuICAgICAgICAgICAgICAgIC8vQ3JlYXRlIHByb2plY3RzIGZvciBldmVyeSBwaWVjZSBvZiBkYXRhXG4gICAgICAgICAgICAgICAgcHJvamVjdERhdGEuZm9yRWFjaChkYXRhID0+IFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL0NyZWF0ZSBwcm9qZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QoZGF0YS5uYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdC5zZXREZXNjcmlwdGlvbihkYXRhLmRlc2NyaXB0aW9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgLy9DcmVhdGUgdGFza3MgZm9yIHByb2plY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGRhdGEudGFza3Mpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEudGFza3MuZm9yRWFjaCh0YXNrRGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhc2sgPSBuZXcgVGFzayh0YXNrRGF0YS50aXRsZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5zZXREZXNjcmlwdGlvbih0YXNrRGF0YS5kZXNjcmlwdGlvbilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5zZXREdWVEYXRlKHRhc2tEYXRhLmR1ZURhdGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2suY29tcGxldGUgPSB0YXNrRGF0YS5jb21wbGV0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL0FkZCB0YXNrIHRvIHByb2plY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdC5hZGRUYXNrKHRhc2spXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vQWRkIHRvIHByb2plY3QgbGlzdFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdHMucHVzaChwcm9qZWN0KVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFNvbWV0aGluZyB3ZW50IHdyb25nIFdoaWxlIGdldHRpbmcgcHJvamVjdHMgZnJvbSBsb2NhbCBTdG9yYWdlICR7ZXJyb3J9YClcbiAgICAgICAgfVxuICAgICAgICBmaW5hbGx5e1xuICAgICAgICAgICAgcmV0dXJuIHByb2plY3RzXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLy9NYXJrIHByb2plY3QgdGFzayBhcyBjb21wbGV0ZVxuICAgIG1hcmtUYXNrQXNDb21wbGV0ZShjdXJyZW50UHJvamVjdCwgY29tcGxldGVkVGFzaykge1xuICAgICAgICB0aGlzLiNwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT57XG4gICAgICAgICAgICAvL0ZpbmQgY3VycmVudCBwcm9qZWN0IGluIGxpc3RcbiAgICAgICAgICAgIGlmIChwcm9qZWN0Lm5hbWUgPT09IGN1cnJlbnRQcm9qZWN0Lm5hbWUpe1xuICAgICAgICAgICAgICAgIC8vR2V0IHByb2plY3QgdGFza3NcbiAgICAgICAgICAgICAgICBwcm9qZWN0LmdldFRhc2tzKCkuZm9yRWFjaCh0YXNrID0+e1xuICAgICAgICAgICAgICAgICAgICAvL0ZpbmQgY29tcGxldGVkIHRhc2sgZnJvbSB0YXNrc1xuICAgICAgICAgICAgICAgICAgICBpZih0YXNrLmlkID09PSBjb21wbGV0ZWRUYXNrLmlkKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vTWFyayB0aGlzIHRhcyBhcyBjb21wbGV0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5tYXJrQXNDb21wbGV0ZSgpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAvL1JlYXNpZ24gdmFsdWUgdG8gbW9kaWZpZWQgcHJvamVjdFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAvL1VwZGF0ZSBsb2NhbFN0b3JhZ2VcbiAgICAgICAgdGhpcy4jc2V0TG9jYWxTdG9yYWdlKHRoaXMuI3Byb2plY3RzKVxuICAgIH1cbiAgICAvL3JlbW92ZSBwcm9qZWN0IGZyb20gbGlzdFxuICAgIHJlbW92ZVByb2plY3QocHJvamVjdCl7XG4gICAgICAgIC8vRmlsdGVyIG91dCBwcm9qZWN0XG4gICAgICAgIHRoaXMuI3Byb2plY3RzID0gdGhpcy4jZmlsdGVyUHJvamVjdHMocHJvamVjdClcbiAgICAgICAgLy9VcGRhdGUgbG9jYWwgc3RvcmFnZVxuICAgICAgICB0aGlzLiN1cGRhdGVMb2NhbFN0b3JhZ2UoKVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRoaXMuI3Byb2plY3RzXG4gICAgfVxuICAgIC8vIFJlbW92ZSB0YXNrIGZyb20gcHJvamVjdCB0YXNrIGxpa3N0XG4gICAgcmVtb3ZlVGFzayhwcm9qZWN0LCB0YXNrKXtcbiAgICAgICAgY29uc3QgcHJvamVjdHMgPSB0aGlzLmdldFByb2plY3RzKClcbiAgICAgICAgY29uc29sZS5sb2coJ1VudG91Y2hlZCBwcm9qZWN0cyAnLCBwcm9qZWN0cylcbiAgICAgICAgLy8gU2VhcmNoIGZvciB0aGUgdGFyZ2UgcHJvamVjdCBpbiB0aGUgbGlzdFxuICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKGVsZW1lbnQgPT57XG4gICAgICAgICAgICAvL0lmIGZvdW5kXG4gICAgICAgICAgICBpZihlbGVtZW50Lm5hbWUgPSBwcm9qZWN0Lm5hbWUpe1xuICAgICAgICAgICAgICAgIC8vZmlsdGVyIHRhc2tzIGxpc3RcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlByb2plY3QgdG8gYmUgbW9kaWZpZWQgXCIgLCBlbGVtZW50KVxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0xpc3QgPSBlbGVtZW50LnJlbW92ZVRhc2sodGFzaylcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5FVyBsSVNUIFwiICwgbmV3TGlzdClcblxuICAgICAgICAgICAgICAgIC8vQXNzaWduIHRhc2tzIHRvIGZpbHRlcmVkIGxpc3RcbiAgICAgICAgICAgICAgICBlbGVtZW50LnRhc2tzID0gbmV3TGlzdFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBZnRlciByZW1vdmluZyB0YXNrIGZyb20gcHJvamVjdCcpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbGVtZW50LnRhc2tzXG4gICAgICAgIH0pXG4gICAgICAgIC8vc2V0IGxvY2FsIHN0b3JhZ2VcbiAgICAgICAgY29uc29sZS5sb2coJ1Byb2plY3RzIHRvIGJlIHN0b3JlZCBhZnRlciB0YXNrIHJlbW92ZSAnLCBwcm9qZWN0cylcbiAgICAgICAgdGhpcy4jc2V0TG9jYWxTdG9yYWdlKHByb2plY3RzKVxuICAgIH1cbiAgICAjc2V0TG9jYWxTdG9yYWdlKHByb2plY3RzKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0ICBzZXJpYWxpemVkUHJvamVjdHMgPSBwcm9qZWN0cy5tYXAocHJvamVjdCA9PiBwcm9qZWN0LnRvSlNPTigpKS8vQ29udmVydCB0byBKU09OIGZvcm1hdFxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzRGF0YScsIEpTT04uc3RyaW5naWZ5KHNlcmlhbGl6ZWRQcm9qZWN0cykpXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxuICAgICAgICB9IGZpbmFsbHl7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHNEYXRhJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG4gICAgI3VwZGF0ZUxvY2FsU3RvcmFnZShwcm9qZWN0KXtcbiAgICAgICAgY29uc3QgcHJvamVjdHMgPSB0aGlzLmdldFByb2plY3RzKClcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmKCFwcm9qZWN0cy5maW5kKGl0ZW0gPT4gaXRlbS5uYW1lID09PSBwcm9qZWN0Lm5hbWUpKVxuICAgICAgICAgICAgICAgIHByb2plY3RzLnB1c2gocHJvamVjdCkvL0FkZCBuZXcgcHJvamVjdFxuICAgICAgICAgICAgZWxzZSBpZigocHJvamVjdHMuZmluZChpdGVtID0+IGl0ZW0ubmFtZSA9PT0gcHJvamVjdC5uYW1lKSAmJiBwcm9qZWN0Lm5hbWUudHJpbSgpICE9PSAnVG9kYXknKSlcbiAgICAgICAgICAgICAgICBhbGVydChgUHJvamVjdCBuYW1lZCAke3Byb2plY3QubmFtZX0gYWxyZWFkeSBleGlzdHNgKSAgICAgICAgICAgIFxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcbiAgICAgICAgfVxuICAgICAgICBmaW5hbGx5e1xuICAgICAgICAgICAgdGhpcy4jc2V0TG9jYWxTdG9yYWdlKHByb2plY3RzKS8vcHV0IHByb2plY3RzIGJhY2sgdG8gbG9jYWxzdG9yYWdlXG4gICAgICAgIH1cbiAgICB9ICBcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sge1xuICAgIC8qXG4gICAgICAgIFRhc2sgY2xhc3MgY3JlYXRlIFRhc2sgb2JqZWN0c1xuICAgICovXG5cbiAgICAvL1Rhc2suZGVzY3JpcHRpb25cbiAgICAjZGVzY3JpcHRpb24gPSAnJ1xuXG4gICAgLy9UYXNrLmR1ZWRhdGVcbiAgICAjZHVlRGF0ZSA9IG51bGxcblxuICAgIC8vVGFzay5wcmlvcml0eVxuICAgIGNvbnN0cnVjdG9yKHRpdGxlKXtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlXG4gICAgICAgIHRoaXMuaWQgPSB0aGlzLmdlbmVyYXRlSWQoKVxuICAgICAgICB0aGlzLmNvbXBsZXRlID0gZmFsc2VcblxuICAgIH1cbiAgICAvL0VkaXQgdGFzayBwcm9wZXJ0aWVzXG4gICAgZWRpdChkYXRhKXtcbiAgICAgICAgdGhpcy50aXRsZSA9IGRhdGEudGl0bGVcbiAgICAgICAgdGhpcy4jZGVzY3JpcHRpb24gPSB0aGlzLnNldERlc2NyaXB0aW9uKGRhdGEuZGVzY3JpcHRpb24pXG4gICAgICAgIHRoaXMuI2R1ZURhdGUgPSB0aGlzLnNldER1ZURhdGUoZGF0YS5kdWVEYXRlKVxuICAgICAgICBcbiAgICB9XG4gICAgLy9yZXR1cm4gdmFsdWUgb2YgZGVzY3JpcHRpb25cbiAgICBnZXREZXNjcmlwdGlvbigpe1xuICAgICAgICByZXR1cm4gdGhpcy4jZGVzY3JpcHRpb25cbiAgICB9XG4gICAgLy9yZXR1cm4gZHVlIGRhdGVcbiAgICBnZXREdWVEYXRlKCl7XG4gICAgICAgIHJldHVybiB0aGlzLiNkdWVEYXRlXG4gICAgfVxuICAgIC8vR2VucmF0ZSBpZFxuICAgIGdlbmVyYXRlSWQoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMudGl0bGUucmVwbGFjZUFsbCgnICcsICctJykudG9Mb3dlckNhc2UoKVxuICAgIH1cbiAgICAvL0NoZWNrIGlmIGNvbXBsZXRlXG4gICAgaXNDb21wbGV0ZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZVxuICAgIH1cbiAgICAvL01hcmsgYXMgY29tcGxldGVcbiAgICBtYXJrQXNDb21wbGV0ZSgpe1xuICAgICAgICB0aGlzLmNvbXBsZXRlID0gdHJ1ZVxuICAgIH1cbiAgICAvL01hcmsgYXMgaW5jb21wbGV0ZVxuICAgIG1hcmtBc0luY29tcGxldGUoKXtcbiAgICAgICAgaWYodGhpcy5jb21wbGV0ZSlcbiAgICAgICAgICAgIHRoaXMuY29tcGxldGUgPSBmYWxzZVxuICAgIH1cbiAgICAvL2luaXRpYWxpemUgZGVzY3JpcGlvblxuICAgIHNldERlc2NyaXB0aW9uKGRlc2NyaXB0aW9uKXtcbiAgICAgICAgdGhpcy4jZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxuICAgIH1cbiAgICAvL3NldCBkdWUgZGF0ZVxuICAgIHNldER1ZURhdGUoZHVlRGF0ZSl7XG4gICAgICAgIHRoaXMuI2R1ZURhdGUgPSBkdWVEYXRlXG4gICAgfVxuICAgIHRvSlNPTiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IHRoaXMudGl0bGUsXG4gICAgICAgICAgICBcImNvbXBsZXRlXCI6IHRoaXMuaXNDb21wbGV0ZSgpLFxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiB0aGlzLmdldERlc2NyaXB0aW9uKCksXG4gICAgICAgICAgICBcImR1ZURhdGVcIjogdGhpcy5nZXREdWVEYXRlKClcbiAgICAgICAgfVxuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrTWFuYWdlciB7XG4gICAgLypcbiAgICBUYXNrIG1hbmFnZXIgY2xhc3MgcGVyZm9ybXMgb3BlcmF0aW9ucyB3aXRoIGFuZCBvbiBUYXNrIG9iamVjdHNcbiAgICBVc2VkIHRvZ2V0aGVyIHdpdGggVGFzayBjbGFzc1xuICAgICovXG4gICAgdGFza0xpc3QgPSBbXVxuICAgICNjb21wbGV0ZWRUYXNrcyA9IFtdXG4gICAgY29uc3RydWN0b3IgKCkge1xuXG4gICAgfVxuICAgIC8vQWRkIHRvIGxpc3RcbiAgICBhZGRUYXNrKHRhc2spe1xuICAgICAgICB0aGlzLnRhc2tMaXN0LnB1c2godGFzaylcbiAgICB9XG4gICAgLy9VcGRhdGUgY29tcGxldGVkIHRhc2tzXG4gICAgYWRkVG9Db21wbGV0ZWQodGFzayl7XG4gICAgICAgIHRoaXMuI2NvbXBsZXRlZFRhc2tzLnB1c2godGFzaylcbiAgICAgICAgdGhpcy5yZW1vdmVUYXNrKHRhc2spXG4gICAgfVxuICAgIC8vR2V0IGxpc3Qgb2YgY29tcGxldGVkIHRhc2tzXG4gICAgZ2V0Q29tcGxldGVkKCl7XG4gICAgICAgIHJldHVybiB0aGlzLiNjb21wbGV0ZWRUYXNrc1xuICAgIH1cbiAgICAvL2dldCB0YXNrc1xuICAgIGdldFRhc2tzKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnRhc2tMaXN0XG4gICAgfVxuICAgIC8vcmVtb3ZlIHRhc2sgZnJvbSBsaXN0XG4gICAgcmVtb3ZlVGFzayh0YXNrKXtcbiAgICAgICAgY29uc3QgdGFza3MgPSB0aGlzLnRhc2tMaXN0LmZpbHRlcihlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGlmKGVsZW1lbnQuaWQgPT09IHRhc2suaWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHRhc2tzXG4gICAgfVxuICAgXG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwidmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mID8gKG9iaikgPT4gKE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmopKSA6IChvYmopID0+IChvYmouX19wcm90b19fKTtcbnZhciBsZWFmUHJvdG90eXBlcztcbi8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuLy8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4vLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbi8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuLy8gbW9kZSAmIDE2OiByZXR1cm4gdmFsdWUgd2hlbiBpdCdzIFByb21pc2UtbGlrZVxuLy8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuX193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcblx0aWYobW9kZSAmIDEpIHZhbHVlID0gdGhpcyh2YWx1ZSk7XG5cdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG5cdGlmKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUpIHtcblx0XHRpZigobW9kZSAmIDQpICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcblx0XHRpZigobW9kZSAmIDE2KSAmJiB0eXBlb2YgdmFsdWUudGhlbiA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuIHZhbHVlO1xuXHR9XG5cdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG5cdHZhciBkZWYgPSB7fTtcblx0bGVhZlByb3RvdHlwZXMgPSBsZWFmUHJvdG90eXBlcyB8fCBbbnVsbCwgZ2V0UHJvdG8oe30pLCBnZXRQcm90byhbXSksIGdldFByb3RvKGdldFByb3RvKV07XG5cdGZvcih2YXIgY3VycmVudCA9IG1vZGUgJiAyICYmIHZhbHVlOyB0eXBlb2YgY3VycmVudCA9PSAnb2JqZWN0JyAmJiAhfmxlYWZQcm90b3R5cGVzLmluZGV4T2YoY3VycmVudCk7IGN1cnJlbnQgPSBnZXRQcm90byhjdXJyZW50KSkge1xuXHRcdE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGN1cnJlbnQpLmZvckVhY2goKGtleSkgPT4gKGRlZltrZXldID0gKCkgPT4gKHZhbHVlW2tleV0pKSk7XG5cdH1cblx0ZGVmWydkZWZhdWx0J10gPSAoKSA9PiAodmFsdWUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGRlZik7XG5cdHJldHVybiBucztcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5mID0ge307XG4vLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4vLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18uZSA9IChjaHVua0lkKSA9PiB7XG5cdHJldHVybiBQcm9taXNlLmFsbChPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmYpLnJlZHVjZSgocHJvbWlzZXMsIGtleSkgPT4ge1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18uZltrZXldKGNodW5rSWQsIHByb21pc2VzKTtcblx0XHRyZXR1cm4gcHJvbWlzZXM7XG5cdH0sIFtdKSk7XG59OyIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFzeW5jIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy51ID0gKGNodW5rSWQpID0+IHtcblx0Ly8gcmV0dXJuIHVybCBmb3IgZmlsZW5hbWVzIGJhc2VkIG9uIHRlbXBsYXRlXG5cdHJldHVybiBcIlwiICsgY2h1bmtJZCArIFwiLlwiICsgXCI4YzU1ZjgwYjhjMDdjMjAyNjEwOFwiICsgXCIuanNcIjtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwidmFyIGluUHJvZ3Jlc3MgPSB7fTtcbnZhciBkYXRhV2VicGFja1ByZWZpeCA9IFwidG9kby1pc3QtLW9uZTpcIjtcbi8vIGxvYWRTY3JpcHQgZnVuY3Rpb24gdG8gbG9hZCBhIHNjcmlwdCB2aWEgc2NyaXB0IHRhZ1xuX193ZWJwYWNrX3JlcXVpcmVfXy5sID0gKHVybCwgZG9uZSwga2V5LCBjaHVua0lkKSA9PiB7XG5cdGlmKGluUHJvZ3Jlc3NbdXJsXSkgeyBpblByb2dyZXNzW3VybF0ucHVzaChkb25lKTsgcmV0dXJuOyB9XG5cdHZhciBzY3JpcHQsIG5lZWRBdHRhY2g7XG5cdGlmKGtleSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc2NyaXB0cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIHMgPSBzY3JpcHRzW2ldO1xuXHRcdFx0aWYocy5nZXRBdHRyaWJ1dGUoXCJzcmNcIikgPT0gdXJsIHx8IHMuZ2V0QXR0cmlidXRlKFwiZGF0YS13ZWJwYWNrXCIpID09IGRhdGFXZWJwYWNrUHJlZml4ICsga2V5KSB7IHNjcmlwdCA9IHM7IGJyZWFrOyB9XG5cdFx0fVxuXHR9XG5cdGlmKCFzY3JpcHQpIHtcblx0XHRuZWVkQXR0YWNoID0gdHJ1ZTtcblx0XHRzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblxuXHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04Jztcblx0XHRzY3JpcHQudGltZW91dCA9IDEyMDtcblx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5uYykge1xuXHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuXHRcdH1cblx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwiZGF0YS13ZWJwYWNrXCIsIGRhdGFXZWJwYWNrUHJlZml4ICsga2V5KTtcblx0XHRzY3JpcHQuc3JjID0gdXJsO1xuXHR9XG5cdGluUHJvZ3Jlc3NbdXJsXSA9IFtkb25lXTtcblx0dmFyIG9uU2NyaXB0Q29tcGxldGUgPSAocHJldiwgZXZlbnQpID0+IHtcblx0XHQvLyBhdm9pZCBtZW0gbGVha3MgaW4gSUUuXG5cdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbDtcblx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG5cdFx0dmFyIGRvbmVGbnMgPSBpblByb2dyZXNzW3VybF07XG5cdFx0ZGVsZXRlIGluUHJvZ3Jlc3NbdXJsXTtcblx0XHRzY3JpcHQucGFyZW50Tm9kZSAmJiBzY3JpcHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzY3JpcHQpO1xuXHRcdGRvbmVGbnMgJiYgZG9uZUZucy5mb3JFYWNoKChmbikgPT4gKGZuKGV2ZW50KSkpO1xuXHRcdGlmKHByZXYpIHJldHVybiBwcmV2KGV2ZW50KTtcblx0fTtcblx0dmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCB1bmRlZmluZWQsIHsgdHlwZTogJ3RpbWVvdXQnLCB0YXJnZXQ6IHNjcmlwdCB9KSwgMTIwMDAwKTtcblx0c2NyaXB0Lm9uZXJyb3IgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9uZXJyb3IpO1xuXHRzY3JpcHQub25sb2FkID0gb25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHNjcmlwdC5vbmxvYWQpO1xuXHRuZWVkQXR0YWNoICYmIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbn07IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImJ1bmRsZVwiOiAwXG59O1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmYuaiA9IChjaHVua0lkLCBwcm9taXNlcykgPT4ge1xuXHRcdC8vIEpTT05QIGNodW5rIGxvYWRpbmcgZm9yIGphdmFzY3JpcHRcblx0XHR2YXIgaW5zdGFsbGVkQ2h1bmtEYXRhID0gX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgPyBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gOiB1bmRlZmluZWQ7XG5cdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhICE9PSAwKSB7IC8vIDAgbWVhbnMgXCJhbHJlYWR5IGluc3RhbGxlZFwiLlxuXG5cdFx0XHQvLyBhIFByb21pc2UgbWVhbnMgXCJjdXJyZW50bHkgbG9hZGluZ1wiLlxuXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG5cdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmKHRydWUpIHsgLy8gYWxsIGNodW5rcyBoYXZlIEpTXG5cdFx0XHRcdFx0Ly8gc2V0dXAgUHJvbWlzZSBpbiBjaHVuayBjYWNoZVxuXHRcdFx0XHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4gKGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IFtyZXNvbHZlLCByZWplY3RdKSk7XG5cdFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0gPSBwcm9taXNlKTtcblxuXHRcdFx0XHRcdC8vIHN0YXJ0IGNodW5rIGxvYWRpbmdcblx0XHRcdFx0XHR2YXIgdXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgX193ZWJwYWNrX3JlcXVpcmVfXy51KGNodW5rSWQpO1xuXHRcdFx0XHRcdC8vIGNyZWF0ZSBlcnJvciBiZWZvcmUgc3RhY2sgdW53b3VuZCB0byBnZXQgdXNlZnVsIHN0YWNrdHJhY2UgbGF0ZXJcblx0XHRcdFx0XHR2YXIgZXJyb3IgPSBuZXcgRXJyb3IoKTtcblx0XHRcdFx0XHR2YXIgbG9hZGluZ0VuZGVkID0gKGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSkge1xuXHRcdFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG5cdFx0XHRcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSAhPT0gMCkgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gdW5kZWZpbmVkO1xuXHRcdFx0XHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcblx0XHRcdFx0XHRcdFx0XHR2YXIgZXJyb3JUeXBlID0gZXZlbnQgJiYgKGV2ZW50LnR5cGUgPT09ICdsb2FkJyA/ICdtaXNzaW5nJyA6IGV2ZW50LnR5cGUpO1xuXHRcdFx0XHRcdFx0XHRcdHZhciByZWFsU3JjID0gZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5zcmM7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IubWVzc2FnZSA9ICdMb2FkaW5nIGNodW5rICcgKyBjaHVua0lkICsgJyBmYWlsZWQuXFxuKCcgKyBlcnJvclR5cGUgKyAnOiAnICsgcmVhbFNyYyArICcpJztcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5uYW1lID0gJ0NodW5rTG9hZEVycm9yJztcblx0XHRcdFx0XHRcdFx0XHRlcnJvci50eXBlID0gZXJyb3JUeXBlO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLnJlcXVlc3QgPSByZWFsU3JjO1xuXHRcdFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rRGF0YVsxXShlcnJvcik7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubCh1cmwsIGxvYWRpbmdFbmRlZCwgXCJjaHVuay1cIiArIGNodW5rSWQsIGNodW5rSWQpO1xuXHRcdFx0XHR9IGVsc2UgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0XHRcdH1cblx0XHR9XG59O1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rdG9kb19pc3Rfb25lXCJdID0gc2VsZltcIndlYnBhY2tDaHVua3RvZG9faXN0X29uZVwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4uL3N0eWxlcy9zdHlsZXMuY3NzJ1xuaW1wb3J0IERPTU1hbmFnZXIgZnJvbSAnLi9kb21fbWFuYWdlci5qcydcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdC5qcydcbmltcG9ydCBQcm9qZWN0TWFuYWdlciBmcm9tICcuL3Byb2plY3RfbWFuYWdlci5qcydcbmltcG9ydCBUYXNrIGZyb20gJy4vdGFzay5qcydcblxuLy8gbG9jYWxTdG9yYWdlLmNsZWFyKClcbmNvbnN0IGRvbU1hbmFnZXIgPSBuZXcgRE9NTWFuYWdlcigpXG5jb25zdCBwcm9qZWN0TWFuYWdlciA9IG5ldyBQcm9qZWN0TWFuYWdlcigpXG5sZXQgcHJvamVjdHMgPSBwcm9qZWN0TWFuYWdlci5nZXRQcm9qZWN0cygpLy9HZXQgcHJvamVjdHNcblxud2luZG93LmxvY2F0aW9uLmhhc2ggPScnXG4vL0NyZWF0ZSBQcm9qZWN0IGxpc3QgY29udGFpbmVyXG5jb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5wcm9qZWN0TGlzdC5jbGFzc05hbWUgPSAnZmxleCBmbGV4LWNvbCBnYXAtMidcblxuZnVuY3Rpb24gYWN0aXZhdGVGb3JtQ2xvc2VCdG5zKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oaWRlLWZvcm0nKS5mb3JFYWNoKGJ0biA9PntcbiAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PntcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdmb3JtJykuZm9yRWFjaChmb3JtID0+XG4gICAgICAgICAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJykpXG4gICAgICB9KVxuICAgIH0pIFxuICB9XG4vL01BUksgVEFTSyBBUyBDT01QTEVURVxuZnVuY3Rpb24gYWN0aXZhdGVNYXJrQXNDb21wbGV0ZUJ0bih0YXNrKXtcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHt0YXNrLmlkfS1jb21wbGV0ZWApXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgXG4gICAgKGUpID0+IHtcbiAgICAgICAgLy9NcmsgY29tcGxldGVcbiAgICAgICAgcHJvamVjdE1hbmFnZXIubWFya1Rhc2tBc0NvbXBsZXRlKGdldEN1cnJlbnRQcm9qZWN0KCksIHRhc2spXG4gICAgICAgIC8vUmVtb3ZlIG9sZCBiZy1jb2xvclxuICAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZSgnYmctc2xhdGUtNTAwJylcbiAgICAgICAgLy9BZGQgbmV3IGJnLWNvbG9yXG4gICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdiZy1ncmVlbi01MDAnKVxuICAgIH0pXG59IFxuXG5mdW5jdGlvbiBhY3RpdmF0ZUVkaXRCdG5zKHRhc2spIHtcbiAgICAvL0dldCBidXR0b25cbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHt0YXNrLmlkfS1lZGl0YClcbiAgICAvL0FkZCBldmVudCBsaXN0ZW5lclxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PntcblxuICAgICAgICAvL1BvcHVsYXRlIGZvcm0gd2l0aCBkYXRhXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLXRpdGxlLWVkaXQnKS52YWx1ZSA9IHRhc2sudGl0bGUgLy9UaXRsZVxuICAgICAgICBcbiAgICAgICAgLy8gL0Rlc2NyaXB0aW9uXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWRlc2NyaXB0aW9uLWVkaXQnKS52YWx1ZSA9IHRhc2suZ2V0RGVzY3JpcHRpb24oKVxuICAgICAgICBcbiAgICAgICAgLy9EdWUgZGF0ZVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHVlZGF0ZS1lZGl0JykudmFsdWUgPSB0YXNrLmdldER1ZURhdGUoKSBcbiAgICAgICAgXG4gICAgICAgIC8vRGlzcGxheSBGb3JtXG4gICAgICAgIGRvbU1hbmFnZXIuZGlzcGxheUZvcm0oJyNlZGl0LXRhc2stZm9ybScpXG4gICAgICAgIC8vU3VibWl0IGFuZCBjaGFuZ2UgdGFza1xuICAgICAgICBcbiAgICAgICAgZWRpdFRhc2sodGFzaylcbiAgICAgICAgLy9TZXQgaWQgYmFjayB0byB0YXNrIGZvcm1cbiAgICB9KVxuXG59XG5cbi8vQ1RSRUFURSBORVcgVEFTS1xuZnVuY3Rpb24gY3JlYXRlTmV3VGFzayAoaW5wdXQpIHtcbiAgICAvLyBDcmVhdGUgbmV3IHRhc2tcbiAgICBjb25zdCB0YXNrID0gbmV3IFRhc2soaW5wdXRbMF0pXG4gICAgdGFzay5zZXREZXNjcmlwdGlvbihpbnB1dFsxXSlcbiAgICB0YXNrLnNldER1ZURhdGUoaW5wdXRbMl0pXG4gICAgcmV0dXJuIHRhc2sgICAgXG59XG5mdW5jdGlvbiBkaXNwbGF5Q3VycmVudFByb2plY3QgKCkge1xuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gZ2V0Q3VycmVudFByb2plY3QoKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50LWNvbnRhaW5lciAjcHJvamVjdC1uYW1lJykudGV4dENvbnRlbnQgPSBjdXJyZW50UHJvamVjdC5uYW1lXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtZGVzY3JpcHRpb24gcCcpLnRleHRDb250ZW50ID0gY3VycmVudFByb2plY3QuZ2V0RGVzY3JpcHRpb24oKVxuICAgIGRpc3BsYXlUYXNrcyhjdXJyZW50UHJvamVjdC5nZXRUYXNrcygpKVxufVxuLy9kSVNQTEFZIE9OIFNJREVCQVJcbmZ1bmN0aW9uIGRpc3BsYXlOZXdQcm9qZWN0KHByb2plY3Qpe1xuICAgIFxuICAgIC8vQ3JlYXRlIHByb2plY3QgY29udHNpbmVyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9tTWFuYWdlci5jcmVhdGVQcm9qZWN0Q29udGFpbmVyKHByb2plY3QubmFtZSlcbiAgICAvLyBBcHBlbmQgdG8gbGlzdFxuICAgIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKGNvbnRhaW5lcilcbiAgICBcbn1cblxuLy9EaXNwbGF5IG5ldyBUYXNrXG5mdW5jdGlvbiBkaXNwbGF5TmV3VGFzayh0YXNrKXtcbiAgICBjb25zdCB0YXNrRGl2ID0gZG9tTWFuYWdlci5jcmVhdGVUYXNrRGl2KHRhc2spXG4gICAgLy9CdG5zXG4gICAgY29uc3QgYnRucyA9IGRvbU1hbmFnZXIuY3JlYXRlVGFza01hbmFnZW1lbnRCdG5zKHRhc2spXG5cbiAgICAvL0FwcGVuZCBidXR0b25zIHRvIHRhc2sgZGl2XG4gICAgdGFza0Rpdi5hcHBlbmRDaGlsZChidG5zKVxuXG4gICAgLy8gYXBwZW5kIHRhc2tkaXYgdG8gdGFzayBjb250YWluZXJcbiAgICB0YXNrc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRGl2KVxuXG4gICAgLy9BY3RpdmF0ZSBNYXJrIGFzIGNvbXBsZXRlIGJ1dHRvbnNcbiAgICBhY3RpdmF0ZU1hcmtBc0NvbXBsZXRlQnRuKHRhc2spXG5cbiAgICAvL0FjdGl2YXRlIGVkaXQgYnV0dG9uXG4gICAgYWN0aXZhdGVFZGl0QnRucyh0YXNrKVxuICAgIHJldHVybiB0YXNrRGl2XG59XG4vL2NSRUFURSBBTkQgQVBQRU5EIFRPIERPTSBGUkFNRVdPUksgRk9SIERJU1BMQVlJTkcgUFJPSkVDVFMgXG5mdW5jdGlvbiBkaXNwbGF5UHJvamVjdENyZWRlbnRpYWxzKCl7XG4gICAgY29uc3QgcHJvamVjdEhlYWRlciA9IGRvbU1hbmFnZXIuY3JlYXRlUHJvamVjdEhlYWRlcignJylcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEhlYWRlcilcbiAgICAvL1Byb2plY3QgZGVzY3JpcHRpb24gYW5kIG5ldyB0YXNrIGJ0blxuICAgIGNvbnN0IGRlc2NOQnRuQ29udGFpbmVyID0gZG9tTWFuYWdlci5jcmVhdGVDb250YWluZXIoKVxuICAgIGRlc2NOQnRuQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgdy1mdWxsJ1xuICAgIC8vREVTQ1JJUFRJT05cbiAgICBjb25zdCBwcm9qZWN0RGVzY3JpcHRpb24gPSBkb21NYW5hZ2VyLmNyZWF0ZVByb2plY3REZXNjcmlwdGlvbignJylcbiAgICBwcm9qZWN0RGVzY3JpcHRpb24uaWQgPSAncHJvamVjdC1kZXNjcmlwdGlvbidcbiAgICAvL0Rpc3BsYXkgZGVzY3JpcHRpb25cbiAgICBkZXNjTkJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0RGVzY3JpcHRpb24pXG4gICAgXG4gICAgLy8gIE5ldyB0YXNrIGJ1dHRvblxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ05ldyBUYXNrJ1xuICAgIGJ1dHRvbi5jbGFzc05hbWUgPSAnYmctc2xhdGUtMzAwIHRleHQtYmx1ZS03MDAgcHktMiBweC00IHJvdW5kZWQtbWQgaG92ZXI6Ymctc2xhdGUtMTAwJ1xuICAgIGJ1dHRvbi5pZCA9ICduZXctdGFzay1idG4nXG4gICAgXG4gICAgLy9EaXNwbGF5IGJ0blxuICAgIGRlc2NOQnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbilcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY05CdG5Db250YWluZXIpICBcbn1cblxuXG4vLyBacmVhdGUgY29udGFpbmVyIGZvciBhIHNpbmdsZSB0YXNrXG4vLyBEaXYgY29udGFpbnMgdGFzayBpbmZvcm1hdGlpb25cblxuXG4vL0dldCBjdXJyZW50dGx5IGRpc3BsYXlpbmcgcHJvamVjdCBmcm9tIGxvY2Fsc3RvcmFnZVxuLy9EaXNwYWx5IHByb2plY3QgdGFza3MgdGFza3NcbmZ1bmN0aW9uIGRpc3BsYXlUYXNrcyh0YXNrcykge1xuICAgIHRhc2tzQ29udGFpbmVyLmlubmVySFRNTCA9ICcnXG4gICAgaWYodGFza3MgJiYgdGFza3MubGVuZ3RoID4gMCl7XG4gICAgICAgIHRhc2tzLmZvckVhY2godGFzayA9PntcbiAgICAgICAgICAgIGRpc3BsYXlOZXdUYXNrKHRhc2spXG4gICAgICAgIH0pXG4gICAgfWVsc2V7XG4gICAgICAgIC8vTm8gdGFza3MgdG8gZGlzcGxheVxuICAgICAgICBjb25zdCBwYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgcGFyLmNsYXNzTmFtZSA9ICd0ZXh0LXNsYXRlLTIwMCB0ZXh0LWNlbnRlciB0ZXh0LTN4bCBmb250LW1lZGl1bSdcbiAgICAgICAgcGFyLmlkID0gJ25vLXRhc2tzJ1xuICAgICAgICBwYXIudGV4dENvbnRlbnQgPSAnTm8gVGFza3MgdG8gRGlzcGxheSdcbiAgICAgICAgdGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQocGFyKVxuICAgIH1cbn0gXG5cbi8vRWRpdCB0YXNrIG9uIHN1Ym1pdCBcbmZ1bmN0aW9uIGVkaXRUYXNrIChvbGRUYXNrKSB7XG4gICAgbGV0IGN1cnJlbnRQcm9qZWN0ID0gZ2V0Q3VycmVudFByb2plY3QoKVxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC10YXNrLWZvcm0nKVxuICAgIC8vQWRkIHN1Ym1pdCBldmVudCB0byB0YXNrLWVkaXQgZm9ybVxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+e1xuICAgICAgICAvL0dldCBkYXRhXG4gICAgICAgIGNvbnN0IGRhdGEgPSBkb21NYW5hZ2VyLmdldEZvcm1EYXRhKCcjZWRpdC10YXNrLWZvcm0nKVxuICAgICAgICAvL0NyZWF0ZSB0YXNrXG4gICAgICAgIGNvbnN0IG5ld1Rhc2sgPSBjcmVhdGVOZXdUYXNrKGRhdGEpXG4gICAgICAgIC8vcmVtb3ZlIG9sZCB0YXNrIGZyb20gbGlzdFxuICAgICAgICBwcm9qZWN0TWFuYWdlci5yZW1vdmVUYXNrKGN1cnJlbnRQcm9qZWN0LCBvbGRUYXNrKVxuICAgICAgICAvL0FkZCBuZXcgdGFza1xuICAgICAgICBwcm9qZWN0TWFuYWdlci5hZGRUYXNrKGN1cnJlbnRQcm9qZWN0LCBuZXdUYXNrKVxuICAgICAgICAvL0Rpc3BsYXkgbmV3IHRhc2tcbiAgICAgICAgZGlzcGxheU5ld1Rhc2sobmV3VGFzaylcbiAgICAgICAgLy9SZXN0b3JlIGZvcm0gaGVhZGluZ1xuICAgICAgICAvL2Nsb3NlIGZvcm1cbiAgICAgICAgZG9tTWFuYWdlci5jbG9zZUZvcm0oJyNlZGl0LXRhc2stZm9ybScpXG4gICAgICAgIC8vUmVzdG9yZSBpZFxuICAgIH0pXG5cbn1cbi8vU2VhcmNoZm9yIGN1cnJlbnQgZGlzcGxheWluZyBwcm9qZWN0IHByb2plY3RzXG5mdW5jdGlvbiBnZXRDdXJyZW50UHJvamVjdCgpe1xuXG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSB3aW5kb3cubG9jYXRpb24uaGFzaC5zdWJzdHJpbmcoMSkucmVwbGFjZUFsbCgnLScsICcgJylcbiAgICBpZihwcm9qZWN0TmFtZSlcbiAgICAgICAgcmV0dXJuIHByb2plY3RzLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0Lm5hbWUgPT09IHByb2plY3ROYW1lKVxuICAgIGVsc2UgXG4gICAgICAgIHJldHVybiBwcm9qZWN0cy5maW5kKHByb2plY3QgPT4gcHJvamVjdC5uYW1lID09PSAnVG9kYXknKVxufVxuXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0cyhwcm9qZWN0cyl7XG4gICAgcHJvamVjdExpc3QuaW5uZXJIVE1MID0gJydcbiAgICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4gZGlzcGxheU5ld1Byb2plY3QocHJvamVjdCkpXG59XG5cbi8vIENyZWF0ZSBhbmQgZGlzcGxheSBoZWFkZXJcbmNvbnN0IGhlYWRlciA9IGRvbU1hbmFnZXIuY3JlYXRlSGVhZGVyKClcbmNvbnN0IGxvZ28gPSBkb21NYW5hZ2VyLmNyZWF0ZUxvZ28oJ1BsYW5zZW4nKVxuaGVhZGVyLmFwcGVuZENoaWxkKGxvZ28pXG5kb2N1bWVudC5ib2R5LnByZXBlbmQoaGVhZGVyKVxuXG4vL3NpZGViYXJcbmNvbnN0IHNpZGViYXIgPSBkb21NYW5hZ2VyLmNyZWF0ZVNpZGViYXIoKVxuZG9tTWFuYWdlci5yZW5kZXIoc2lkZWJhcilcbnNpZGViYXIuaWQgPSAnbWFpbi1zaWRlLWJhcidcblxuLy9Db250ZW50IGNvbnRhaW5lclxuY29uc3QgY29udGFpbmVyID0gZG9tTWFuYWdlci5jcmVhdGVDb250YWluZXIoKVxuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2JnLWJsdWUtNzAwJywgJ2ZsZXgnLCdmbGV4LWNvbCcsICdpdGVtcy1zdGFydCcsICdqdXN0aWZ5LXN0YXJ0JywgJ2dhcC0yJylcbmNvbnRhaW5lci5pZCA9ICdjb250ZW50LWNvbnRhaW5lcidcbmRvbU1hbmFnZXIucmVuZGVyKGNvbnRhaW5lcilcblxuLy9Gb290ZXJcbmNvbnN0IGZvb3RlciA9IGRvbU1hbmFnZXIuY3JlYXRlRm9vdGVyKClcbnNpZGViYXIuYXBwZW5kQ2hpbGQoZm9vdGVyKVxuXG4vL1VzZXIgcHJvZmlsZVxuY29uc3QgcHJvZmlsZSA9IGRvbU1hbmFnZXIuY3JlYXRlVXNlclByb2ZpbGUoJ1RoZSBBcmNoaXRlY2gnKVxuaGVhZGVyLmFwcGVuZENoaWxkKHByb2ZpbGUpXG5oZWFkZXIuY2xhc3NMaXN0LmFkZCgnZmxleCcsICdmbGV4LXJvdycsICdqdXN0aWZ5LWJldHdlZW4nLCAnaXRlbXMtY2VudGVyJylcblxuLy9JbXBvcnQgcHJvZmlsZSBwaWNcbmltcG9ydCgnLi4vaW1hZ2VzL3Byb2ZpbGUtcGljLnBuZycpLnRoZW4oKHtkZWZhdWx0OnBpY30pID0+e1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9maWxlLXBpY3R1cmUnKS5zcmMgPSBwaWNcbn0pLmNhdGNoKChlcnJvcik9PmNvbnNvbGUuZXJyb3IoYEVycm9yIG9jdXVyZWQgd2hpbGUgaW1wb3J0aW5nIHByb2ZpbGUgcGljOiAke2Vycm9yfWApKVxuXG4vL1Byb2plY3RzIGhlYWRlclxuY29uc3QgcHJvamVjdHNIZWFkZXIgPSBkb21NYW5hZ2VyLmNyZWF0ZUNvbnRhaW5lcigpXG4gICAgcHJvamVjdHNIZWFkZXIuY2xhc3NOYW1lID0gJ2ZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBiZy1ibHVlLTYwMCBweC00IHB5LTInXG4gICAgcHJvamVjdHNIZWFkZXIuaWQgPSAncHJvamVjdHMtaGVhZGVyJ1xuXG4vL0hlYWRpbmdcbiAgICBjb25zdCBoZWFkaW5nID0gZG9tTWFuYWdlci5jcmVhdGVIZWFkaW5nKCdNeSBQcm9qZWN0cycpXG4gICAgaGVhZGluZy5jbGFzc0xpc3QuYWRkKCdmb250LW1lZGl1bScsICd3LWZ1bGwnKVxuICAgIHByb2plY3RzSGVhZGVyLmFwcGVuZENoaWxkKGhlYWRpbmcpXG4gICAgXG4gICAgLy8gTmV3IHByb2plY3QgQWRkIGJ1dHRvblxuICAgIGNvbnN0IGFkZEJ0biA9IGRvbU1hbmFnZXIuY3JlYXRlQWRkQnV0dG9uKClcbiAgICBhZGRCdG4uaWQgPSAnbmV3LXByb2plY3QtYnRuJ1xuICAgIHByb2plY3RzSGVhZGVyLmFwcGVuZENoaWxkKGFkZEJ0bilcbiAgICBcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHByb2plY3RzSGVhZGVyKSBcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHByb2plY3RMaXN0KS8vQ29udGFpbmVyIGZvciBsaXN0aW5nIHByb2plY3RzXG5cbi8vIERFRkFVTFQgUFJPSkVDVFxuLy9DcmVhdGUgZGVmYXVsdCBQcm9qZWN0IGFuZCBhZGQgdG8gUHJvbWplY3RNYW5hZ2VyLlByb2plY3RzXG5jb25zdCBkZWZhdWx0UHJvamVjdCA9IG5ldyBQcm9qZWN0KCdUb2RheScpXG4gICAgZGVmYXVsdFByb2plY3Quc2V0RGVzY3JpcHRpb24oJ1RvZGF5XFwncyBBY3Rpdml0aWVzJylcbiAgICBwcm9qZWN0TWFuYWdlci5hZGRUb1Byb2plY3RMaXN0KGRlZmF1bHRQcm9qZWN0KSAvL0FkZCB0byBwcm9qZWN0c1xuICAgXG4gICAgXG4gICAgLy9EaXNwbGF5IGRlZmF1bHQgcHJvamVjdCBkZXRhaWxzXG4gICAgZGlzcGxheVByb2plY3RDcmVkZW50aWFscygpXG4gICAgXG4gICAgLy8gVGFza3MgY29udGFpbmVyXG4gICAgY29uc3QgdGFza3NDb250YWluZXIgPSBkb21NYW5hZ2VyLmNyZWF0ZVRhc2tzQ29udGFpbmVyKClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGFza3NDb250YWluZXIpXG4gICAgXG4gICAgXG4vL1BBR0UgT05MT0FEXG4vLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIChlKSA9PntcbiAgICAvL0Rpc3BsYXkgUHJvamVjdCBMaXN0XG4gICAgcmVuZGVyUHJvamVjdHMocHJvamVjdHMpXG5cbiAgICAvL0Rpc3BhdGNoIGNsaWNrIGV2ZW50IG9uIGZvcm0gY2xvc2UgYnRuc1xuICAgIGFjdGl2YXRlRm9ybUNsb3NlQnRucygpXG4gICAgXG4gICAgLy9ESVNQTEFZIFBST0pFQ1QgQ1JFQVRJT04gRk9STVxuICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PntcbiAgICAgICAgZG9tTWFuYWdlci5kaXNwbGF5Rm9ybSgnI3Byb2plY3QtZm9ybScpXG4gICAgfSlcbiAgICBcbiAgICAvL1NVQk1JVCBORVcgUFJPSkVDVFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0jcHJvamVjdC1mb3JtJykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PntcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICBjb25zdCBkYXRhID0gZG9tTWFuYWdlci5nZXRGb3JtRGF0YSgnI3Byb2plY3QtZm9ybScpLy9HZXQgZGF0YVxuICAgICAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QoZGF0YVswXSkvL0NyZWF0ZSBuZXcgUHJvamVjdFxuICAgICAgICBwcm9qZWN0LnNldERlc2NyaXB0aW9uKGRhdGFbMV0pXG4gICAgICAgIHByb2plY3RNYW5hZ2VyLmFkZFRvUHJvamVjdExpc3QocHJvamVjdCkvL0FkZCB0byBwcm9qZWN0IGxpc3RcbiAgICAgICAgZGlzcGxheU5ld1Byb2plY3QocHJvamVjdClcbiAgICAgICAgcHJvamVjdHMgPSBwcm9qZWN0TWFuYWdlci5nZXRQcm9qZWN0cygpXG4gICAgICAgIC8vUmVyZW5kZXIgYWxsIHByb2plY3RzXG4gICAgICAgIFxuICAgICAgICB9KVxuXG4gICAgLy9OZXdUYXNrXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy10YXNrLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XG4gICAgICAgIC8vRGlzcGxheSBGb3JtXG4gICAgICAgIGRvbU1hbmFnZXIuZGlzcGxheUZvcm0oJyN0YXNrLWZvcm0nKVxuICAgIH0pXG4gICBcbiAgIFxuICAgIC8vQ1JFQVRFIFRBU0sgYW5kIHN1Ym1pdCBuZXcgdGFza1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWZvcm0nKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT57XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAvL0dldCBpbnB1dFxuICAgICAgICAvL2dldCBkYXRhXG4gICAgICAgIGNvbnN0IGlucHV0ID0gZG9tTWFuYWdlci5nZXRGb3JtRGF0YSgnI3Rhc2stZm9ybScpXG4gICAgICAgIC8vQ3JlYXRlIHRhc2sgYW5kIHJldHVuciB2YWx1ZVxuICAgICAgICBjb25zdCB0YXNrID0gY3JlYXRlTmV3VGFzayhpbnB1dClcbiAgICAgICAgLy9HZXQgY3VycmVudCBwcm9qZWN0IGFuZCBhZGQgdGFzayB0byBwcm9qZWN0IHRhc2tsaXN0XG4gICAgICAgIGNvbnN0ICBjdXJyZW50UHJvamVjdCA9IGdldEN1cnJlbnRQcm9qZWN0KClcbiAgICAgICAgLy9BZGQgdGFzayB0byBjdXJyZW50IHByb2plY3QgdGFza3NcbiAgICAgICAgcHJvamVjdE1hbmFnZXIuYWRkVGFzayhjdXJyZW50UHJvamVjdCwgdGFzaylcbiAgICAgICAgLy9EaXNwbGF5IG5ldyB0YXNrIHRhc2tcblxuICAgICAgICBpZihjdXJyZW50UHJvamVjdC5nZXRUYXNrcygpLmxlbmd0aCA9PT0gMCl7XG4gICAgICAgICAgICB0YXNrc0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJ1xuICAgICAgICAgICAgZGlzcGxheU5ld1Rhc2sodGFzaylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRpc3BsYXlOZXdUYXNrKHRhc2spXG4gICAgICAgIH1cbiAgICAgICAgLy9DbG9zZSBmb3JtIGFmdGVyIGFkZGluZyBuZXcgdGFza1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1mb3JtJykuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICAgICAgfSlcbiAgICAvL0Rpc3BsYXkgQ3VycmVudCBwcm9qZWN0XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCAoKSA9PntcbiAgICAgICAgZGlzcGxheUN1cnJlbnRQcm9qZWN0KClcbiAgICB9KVxuICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnaGFzaGNoYW5nZScpKVxuXG59KVxuXG4vKipfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuICpPcGVuIFByb2plY3QgdG8gdmlldyBwcm9qZWN0IGRldGFpbHMgXG4gKiBcbiAqIFdoZW4gUHJvamVjdCBpcyBjbGlja2VkLCB0aGUgRG9tIGlzIHBvcHVsYXRlZCB3aXRoIHByb2plY3QgZGVhdGFpbHNcbiAqICovICAgIFxuXG4gICAgXG5cbiAgICAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=