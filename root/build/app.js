/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!****************************!*\
  !*** ./client/styles.scss ***!
  \****************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../node_modules/css-loader??ref--0-1!../node_modules/sass-loader/lib/loader.js!./styles.scss */ 2);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ 4)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--0-1!../node_modules/sass-loader/lib/loader.js!./styles.scss", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--0-1!../node_modules/sass-loader/lib/loader.js!./styles.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 1 */
/*!***********************************!*\
  !*** ./client/app.js + 2 modules ***!
  \***********************************/
/*! exports provided:  */
/*! all exports used */
/*! ModuleConcatenation (inner): module is an entrypoint */
/*! ModuleConcatenation: Cannot concat with ./client/styles.scss */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./client/translate-api.js
let API_ENDPOINT;

if (false) {
    API_ENDPOINT = 'https://surfly-labs-translate.herokuapp.com/';
} else {
    API_ENDPOINT = '/';
}

function translate({word, src, dest}) {
    console.log(word, src, dest);
    let body = {
        word: word
    };
    if (dest) {
        body.dest = dest;
    }
    if (src) {
        body.src = src;
    }
    return fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
}

// CONCATENATED MODULE: ./client/ui.js
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_scss__ = __webpack_require__(/*! ./styles.scss */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__styles_scss__);



let translateButton = null;
let translationCard = null;
let note = null;
let textToTranslate = '';

const LANG_CODES = [
    'az', 'be', 'bg', 'ca', 'cs', 'da', 'de', 'el', 'en', 'es', 'et',
    'fi', 'fr', 'hr', 'hu', 'hy', 'it', 'lt', 'lv', 'mk', 'nl', 'no',
    'pl', 'pt', 'ro', 'ru', 'sk', 'sl', 'sq', 'sr', 'sv', 'tr', 'uk'
]

function initTranslateButton() {
    translateButton = document.createElement('div');
    translateButton.classList.add(__WEBPACK_IMPORTED_MODULE_0__styles_scss___default.a['translate-button']);
    translateButton.addEventListener('mousedown', () => {
        hideTranslateButton();
        showTranslation(textToTranslate);
    });
    document.body.appendChild(translateButton);
}

function showTranslateButton(text, selection) {
    if (!translateButton) {
        initTranslateButton();
    }
    textToTranslate = text;

    // let rect = selection.getRangeAt(0).getBoundingClientRect();
    // let posX = Math.floor((rect.left + rect.right) / 2);
    // let posY = rect.bottom;

    // translateButton.style.left = posX - 20 + 'px';
    // translateButton.style.top = posY - 40 + 'px';

    translateButton.classList.add(__WEBPACK_IMPORTED_MODULE_0__styles_scss___default.a['shown']);
    note.classList.remove(__WEBPACK_IMPORTED_MODULE_0__styles_scss___default.a['shown']);
}

function hideTranslateButton() {
    if (translateButton && translateButton.parentNode) {
        translateButton.classList.remove(__WEBPACK_IMPORTED_MODULE_0__styles_scss___default.a['shown']);
        note.classList.add(__WEBPACK_IMPORTED_MODULE_0__styles_scss___default.a['shown']);
    }
}

function showTranslation(text, dest) {
    hideTranslation();
    translationCard = document.createElement('div');
    translationCard.classList.add(__WEBPACK_IMPORTED_MODULE_0__styles_scss___default.a['translate-card']);
    translationCard.addEventListener('click', e => {
        if (e.target === translationCard) {
            hideTranslation();
        }
    });

    let translationCardContent = document.createElement('div');
    translationCardContent.classList.add(__WEBPACK_IMPORTED_MODULE_0__styles_scss___default.a['translate-card-content']);
    
    let closeButton = document.createElement('div');
    closeButton.classList.add(__WEBPACK_IMPORTED_MODULE_0__styles_scss___default.a['translate-close']);
    closeButton.addEventListener('click', e => {
        hideTranslation();
    });
    translationCardContent.appendChild(closeButton);

    let header = document.createElement('h1');
    header.classList.add(__WEBPACK_IMPORTED_MODULE_0__styles_scss___default.a['translate-header']);
    header.textContent = text.length > 10 ? text.slice(0, 10) + '...' : text;
    translationCardContent.appendChild(header);

    let spinner = document.createElement('div');
    spinner.classList.add(__WEBPACK_IMPORTED_MODULE_0__styles_scss___default.a['spinner']);
    translationCardContent.appendChild(spinner);

    let footer = document.createElement('div');
    footer.classList.add(__WEBPACK_IMPORTED_MODULE_0__styles_scss___default.a['translate-footer']);
    footer.innerHTML = 'Powered by <a href="http://translate.yandex.com/" target="_blank">Yandex.Translate</a>';
    translationCardContent.appendChild(footer);

    translationCard.appendChild(translationCardContent);
    document.body.appendChild(translationCard);

    translate({word: text, dest: dest}).then(resp => {
        return resp.json().then(result => {
            console.log('got translation', result);

            let controls = document.createElement('div');
            controls.classList.add(__WEBPACK_IMPORTED_MODULE_0__styles_scss___default.a['translate-controls']);
            let srcSelect = document.createElement('select');
            LANG_CODES.forEach(code => {
                let choice = document.createElement('option');
                if (result.src === code) {
                    choice.selected = true;
                }
                choice.value = choice.textContent = code;
                srcSelect.appendChild(choice);
            });
            let arrow = document.createElement('span');
            arrow.textContent = ' -> ';
            let dstSelect = document.createElement('select');
            LANG_CODES.forEach(code => {
                let choice = document.createElement('option');
                if (result.dst === code) {
                    choice.selected = true;
                }
                choice.value = choice.textContent = code;
                dstSelect.appendChild(choice);
            });

            function changeDirection() {
                translationCardContent.replaceChild(spinner, translationBody);
                translate({word: text, src: srcSelect.value, dest: dstSelect.value}).then(resp => {
                    return resp.json().then(result => {
                        translationCardContent.replaceChild(translationBody, spinner);
                        content.textContent = result.translation;
                    });
                });
            }
            srcSelect.addEventListener('change', changeDirection);
            dstSelect.addEventListener('change', changeDirection);

            controls.appendChild(srcSelect);
            controls.appendChild(arrow);
            controls.appendChild(dstSelect);

            let content = document.createElement('div');
            content.classList.add(__WEBPACK_IMPORTED_MODULE_0__styles_scss___default.a['translate-content']);
            content.textContent = result.translation;

            let translationBody = document.createElement('div');
            translationBody.classList.add(__WEBPACK_IMPORTED_MODULE_0__styles_scss___default.a['translate-body']);
            translationBody.appendChild(controls);
            translationBody.appendChild(content);

            translationCardContent.replaceChild(translationBody, spinner);
        });
    });
}

function hideTranslation() {
    if (translationCard && translationCard.parentNode) {
        translationCard.parentNode.removeChild(translationCard);
        translationCard = null;
    }
}

function showNote() {
    note = document.createElement('div');
    note.classList.add(__WEBPACK_IMPORTED_MODULE_0__styles_scss___default.a['note']);
    note.classList.add(__WEBPACK_IMPORTED_MODULE_0__styles_scss___default.a['shown']);
    note.textContent = 'Welcome to the Surfly Labs Translation demo! Select text you would like to translate';
    document.body.appendChild(note);
}

// CONCATENATED MODULE: ./client/app.js
/* harmony import */ var app___WEBPACK_IMPORTED_MODULE_0__styles_scss__ = __webpack_require__(/*! ./styles.scss */ 0);
/* harmony import */ var app___WEBPACK_IMPORTED_MODULE_0__styles_scss___default = __webpack_require__.n(app___WEBPACK_IMPORTED_MODULE_0__styles_scss__);



function detectSelection() {
    let selection = document.getSelection();
    let selectedText = selection.toString().trim();
    if (selectedText.length > 0 && !translationCard) {
        showTranslateButton(selectedText, selection);
    } else {
        hideTranslateButton();
    }
}

function init() {
    document.addEventListener('selectionchange', detectSelection);
    showNote();
    console.log('translation mixin initialized!');
}

if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', e => {
        init();
    });
} else {
    init();
}


/***/ }),
/* 2 */
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?{"modules":true,"localIdentName":"[name]__[local]___[hash:base64:5]"}!./node_modules/sass-loader/lib/loader.js!./client/styles.scss ***!
  \*********************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ 3)(undefined);
// imports


// module
exports.push([module.i, ".styles__note___2iv3k {\n  position: fixed;\n  bottom: -300px;\n  left: 0;\n  transition: all .3s;\n  width: 100%;\n  font-size: 16px;\n  pointer-events: none;\n  background: rgba(229, 71, 71, 0.8);\n  color: white;\n  text-align: center;\n  padding: 10px; }\n  .styles__note___2iv3k.styles__shown___2JVlz {\n    bottom: 0; }\n\n.styles__translate-button___1DVzm {\n  position: fixed;\n  bottom: -100px;\n  opacity: 0;\n  transition: all .3s;\n  width: 100%;\n  height: 100px;\n  background: url(\"https://surfly-labs-translate.herokuapp.com/translate-icon-bottom.png\") no-repeat center;\n  cursor: pointer; }\n  .styles__translate-button___1DVzm.styles__shown___2JVlz {\n    bottom: 0;\n    opacity: 1; }\n\n.styles__translate-card___2vQyg {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background: rgba(10, 10, 10, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 9999999; }\n  .styles__translate-card___2vQyg .styles__translate-card-content___1fVsg {\n    background: white;\n    border-radius: 6px;\n    padding: 10px;\n    width: 50%;\n    min-width: 300px;\n    max-height: 80%;\n    position: relative;\n    display: flex;\n    flex-direction: column; }\n    .styles__translate-card___2vQyg .styles__translate-card-content___1fVsg .styles__translate-header___1SpaK {\n      margin: 0;\n      padding: 10px 0;\n      border-bottom: solid black 1px; }\n    .styles__translate-card___2vQyg .styles__translate-card-content___1fVsg .styles__translate-body___35jLh {\n      overflow: auto;\n      max-height: 80%;\n      max-width: 100%; }\n      .styles__translate-card___2vQyg .styles__translate-card-content___1fVsg .styles__translate-body___35jLh .styles__translate-controls___2-ndI {\n        padding: 10px 0; }\n      .styles__translate-card___2vQyg .styles__translate-card-content___1fVsg .styles__translate-body___35jLh .styles__translate-content___1LTYz {\n        max-width: 100%; }\n    .styles__translate-card___2vQyg .styles__translate-card-content___1fVsg .styles__translate-footer___3DXOZ {\n      border-top: solid 1px black;\n      padding-top: 10px;\n      margin-top: 10px; }\n      .styles__translate-card___2vQyg .styles__translate-card-content___1fVsg .styles__translate-footer___3DXOZ a {\n        text-decoration: none;\n        color: #e54747; }\n    .styles__translate-card___2vQyg .styles__translate-card-content___1fVsg .styles__translate-close___2XEdi {\n      cursor: pointer;\n      position: absolute;\n      top: 10px;\n      right: 10px;\n      width: 23px;\n      height: 23px;\n      opacity: 0.3; }\n    .styles__translate-card___2vQyg .styles__translate-card-content___1fVsg .styles__translate-close___2XEdi:hover {\n      opacity: 1; }\n    .styles__translate-card___2vQyg .styles__translate-card-content___1fVsg .styles__translate-close___2XEdi:before, .styles__translate-card___2vQyg .styles__translate-card-content___1fVsg .styles__translate-close___2XEdi:after {\n      position: absolute;\n      left: 11px;\n      content: ' ';\n      height: 24px;\n      width: 2px;\n      background-color: #333; }\n    .styles__translate-card___2vQyg .styles__translate-card-content___1fVsg .styles__translate-close___2XEdi:before {\n      transform: rotate(45deg); }\n    .styles__translate-card___2vQyg .styles__translate-card-content___1fVsg .styles__translate-close___2XEdi:after {\n      transform: rotate(-45deg); }\n\n@-webkit-keyframes styles__loading___189dP {\n  to {\n    -webkit-transform: rotate(360deg); } }\n\n@-moz-keyframes styles__loading___189dP {\n  to {\n    -moz-transform: rotate(360deg); } }\n\n@-ms-keyframes styles__loading___189dP {\n  .translate-card .translate-card-content to {\n    -ms-transform: rotate(360deg); } }\n\n@keyframes styles__loading___189dP {\n  to {\n    transform: rotate(360deg); } }\n    .styles__translate-card___2vQyg .styles__translate-card-content___1fVsg .styles__spinner____9h4Y {\n      width: 40px;\n      height: 40px;\n      margin: 20px auto;\n      border-radius: 50%;\n      background: transparent;\n      border-top: 4px solid #fff;\n      border-right: 4px solid #fff;\n      border-bottom: 4px solid #777;\n      border-left: 4px solid #777;\n      -webkit-animation: styles__loading___189dP 1.2s infinite linear;\n      -moz-animation: styles__loading___189dP 1.2s infinite linear;\n      -ms-animation: styles__loading___189dP 1.2s infinite linear;\n      animation: styles__loading___189dP 1.2s infinite linear; }\n", ""]);

// exports
exports.locals = {
	"note": "styles__note___2iv3k",
	"shown": "styles__shown___2JVlz",
	"translate-button": "styles__translate-button___1DVzm",
	"translate-card": "styles__translate-card___2vQyg",
	"translate-card-content": "styles__translate-card-content___1fVsg",
	"translate-header": "styles__translate-header___1SpaK",
	"translate-body": "styles__translate-body___35jLh",
	"translate-controls": "styles__translate-controls___2-ndI",
	"translate-content": "styles__translate-content___1LTYz",
	"translate-footer": "styles__translate-footer___3DXOZ",
	"translate-close": "styles__translate-close___2XEdi",
	"spinner": "styles__spinner____9h4Y",
	"loading": "styles__loading___189dP"
};

/***/ }),
/* 3 */
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 4 */
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ 5);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 5 */
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map