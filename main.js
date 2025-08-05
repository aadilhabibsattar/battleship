/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --primaryColor: hsl(211, 53%, 17%);
    --secondaryColor: hsl(211, 53%, 27%);
    --lightColor: hsl(211, 53%, 37%);
    --yellowColor: hsl(45, 93%, 73%);
    --whiteColor: hsl(0, 0%, 88%);
    --shipColor: hsl(24, 2%, 41%);
    --hitColor: #e63946;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    display: flex;
    gap: 0.5rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow: hidden;
    font-family: "Bebas Neue", system-ui;
    background-color: var(--primaryColor);
    color: var(--whiteColor);
}

.title-container {
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0.5rem;
}

h2 {
    font-size: 3rem;
}

p {
    font-size: 1.5rem;
    margin-top: 0.5rem;
}

.game-container {
    display: flex;
    justify-content: space-evenly;
    width: 100vw;
    height: 90vh;
}

.player-1-div,
.player-2-div {
    display: flex;
    gap: 1rem;
}

.player-1-ship-list,
.player-2-ship-list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.player-1-gameboard-div,
.player-2-gameboard-div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}

.player-1-gameboard,
.player-2-gameboard {
    display: grid;
    grid-template-rows: repeat(10, 3vw);
    grid-template-columns: repeat(10, 3vw);
    padding: 4px;
    gap: 3px;
    border: 2px solid var(--secondaryColor);
}

.cell {
    border: 1px solid var(--primaryColor);
    background-color: var(--secondaryColor);
    border-radius: 0.2rem;
    width: 3vw;
    height: 3vw;
}

.player-2-gameboard > .cell:hover {
    background-color: var(--lightColor);
    border: none;
    cursor: pointer;
}

.hit {
    background-color: var(--hitColor) !important;
    border: none;
}

.miss {
    opacity: 0.3;
}

.game-buttons {
    display: flex;
    gap: 1rem;
}

.new-game-button,
.start-button,
.randomize-button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 0rem;
    width: 8rem;
    font-size: 1.5rem;
    border-radius: 1rem;
    cursor: pointer;
    user-select: none;
}

.start-button {
    background-color: hsl(113, 55%, 42%);
}

.randomize-button {
    background-color: #3967e6;
}

.game-over-screen {
    z-index: 10;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;

    background-color: rgba(0, 0, 0, 0.5);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.hidden {
    display: none;
}

.invisible {
    opacity: 0;
    pointer-events: none;
}

.new-game-button {
    background-color: var(--hitColor);
    color: white;
}

.player-1-ship-list,
.player-2-ship-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0.5rem;
    align-items: center;
}

.ship-div {
    display: flex;
    gap: 0.2rem;
}

.ship-segment {
    width: 1rem;
    height: 1rem;
    background-color: var(--shipColor);
    border-radius: 0.1rem;
}
`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAEA;IACI,kCAAkC;IAClC,oCAAoC;IACpC,gCAAgC;IAChC,gCAAgC;IAChC,6BAA6B;IAC7B,6BAA6B;IAC7B,mBAAmB;AACvB;;AAEA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,WAAW;IACX,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;IACb,gBAAgB;IAChB,oCAAoC;IACpC,qCAAqC;IACrC,wBAAwB;AAC5B;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,YAAY;IACZ,YAAY;AAChB;;AAEA;;IAEI,aAAa;IACb,SAAS;AACb;;AAEA;;IAEI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;AAC3B;;AAEA;;IAEI,aAAa;IACb,sBAAsB;IACtB,2BAA2B;IAC3B,mBAAmB;AACvB;;AAEA;;IAEI,aAAa;IACb,mCAAmC;IACnC,sCAAsC;IACtC,YAAY;IACZ,QAAQ;IACR,uCAAuC;AAC3C;;AAEA;IACI,qCAAqC;IACrC,uCAAuC;IACvC,qBAAqB;IACrB,UAAU;IACV,WAAW;AACf;;AAEA;IACI,mCAAmC;IACnC,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,4CAA4C;IAC5C,YAAY;AAChB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;;;IAGI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;IAClB,WAAW;IACX,iBAAiB;IACjB,mBAAmB;IACnB,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,YAAY;IACZ,aAAa;;IAEb,oCAAoC;;IAEpC,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,UAAU;IACV,oBAAoB;AACxB;;AAEA;IACI,iCAAiC;IACjC,YAAY;AAChB;;AAEA;;IAEI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,WAAW;AACf;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,kCAAkC;IAClC,qBAAqB;AACzB","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap\");\r\n\r\n:root {\r\n    --primaryColor: hsl(211, 53%, 17%);\r\n    --secondaryColor: hsl(211, 53%, 27%);\r\n    --lightColor: hsl(211, 53%, 37%);\r\n    --yellowColor: hsl(45, 93%, 73%);\r\n    --whiteColor: hsl(0, 0%, 88%);\r\n    --shipColor: hsl(24, 2%, 41%);\r\n    --hitColor: #e63946;\r\n}\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    display: flex;\r\n    gap: 0.5rem;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 100vh;\r\n    overflow: hidden;\r\n    font-family: \"Bebas Neue\", system-ui;\r\n    background-color: var(--primaryColor);\r\n    color: var(--whiteColor);\r\n}\r\n\r\n.title-container {\r\n    height: 10vh;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-top: 0.5rem;\r\n}\r\n\r\nh2 {\r\n    font-size: 3rem;\r\n}\r\n\r\np {\r\n    font-size: 1.5rem;\r\n    margin-top: 0.5rem;\r\n}\r\n\r\n.game-container {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    width: 100vw;\r\n    height: 90vh;\r\n}\r\n\r\n.player-1-div,\r\n.player-2-div {\r\n    display: flex;\r\n    gap: 1rem;\r\n}\r\n\r\n.player-1-ship-list,\r\n.player-2-ship-list {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n}\r\n\r\n.player-1-gameboard-div,\r\n.player-2-gameboard-div {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n}\r\n\r\n.player-1-gameboard,\r\n.player-2-gameboard {\r\n    display: grid;\r\n    grid-template-rows: repeat(10, 3vw);\r\n    grid-template-columns: repeat(10, 3vw);\r\n    padding: 4px;\r\n    gap: 3px;\r\n    border: 2px solid var(--secondaryColor);\r\n}\r\n\r\n.cell {\r\n    border: 1px solid var(--primaryColor);\r\n    background-color: var(--secondaryColor);\r\n    border-radius: 0.2rem;\r\n    width: 3vw;\r\n    height: 3vw;\r\n}\r\n\r\n.player-2-gameboard > .cell:hover {\r\n    background-color: var(--lightColor);\r\n    border: none;\r\n    cursor: pointer;\r\n}\r\n\r\n.hit {\r\n    background-color: var(--hitColor) !important;\r\n    border: none;\r\n}\r\n\r\n.miss {\r\n    opacity: 0.3;\r\n}\r\n\r\n.game-buttons {\r\n    display: flex;\r\n    gap: 1rem;\r\n}\r\n\r\n.new-game-button,\r\n.start-button,\r\n.randomize-button {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 1rem 0rem;\r\n    width: 8rem;\r\n    font-size: 1.5rem;\r\n    border-radius: 1rem;\r\n    cursor: pointer;\r\n    user-select: none;\r\n}\r\n\r\n.start-button {\r\n    background-color: hsl(113, 55%, 42%);\r\n}\r\n\r\n.randomize-button {\r\n    background-color: #3967e6;\r\n}\r\n\r\n.game-over-screen {\r\n    z-index: 10;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100vw;\r\n    height: 100vh;\r\n\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.hidden {\r\n    display: none;\r\n}\r\n\r\n.invisible {\r\n    opacity: 0;\r\n    pointer-events: none;\r\n}\r\n\r\n.new-game-button {\r\n    background-color: var(--hitColor);\r\n    color: white;\r\n}\r\n\r\n.player-1-ship-list,\r\n.player-2-ship-list {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n    padding: 0.5rem;\r\n    align-items: center;\r\n}\r\n\r\n.ship-div {\r\n    display: flex;\r\n    gap: 0.2rem;\r\n}\r\n\r\n.ship-segment {\r\n    width: 1rem;\r\n    height: 1rem;\r\n    background-color: var(--shipColor);\r\n    border-radius: 0.1rem;\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/classes/dom.js":
/*!****************************!*\
  !*** ./src/classes/dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DOM: () => (/* binding */ DOM)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var DOM = /*#__PURE__*/function () {
  function DOM(human, computer, startGame, removePlayer2Listeners) {
    _classCallCheck(this, DOM);
    this.human = human;
    this.computer = computer;
    this.startGame = startGame;
    this.removePlayer2Listeners = removePlayer2Listeners;
    this.newGameButton = document.querySelector(".new-game-button");
    this.startButton = document.querySelector(".start-button");
    this.gameOverScreen = document.querySelector(".game-over-screen");
    this.randomizeButton = document.querySelector(".randomize-button");
  }
  return _createClass(DOM, [{
    key: "addPageEventListeners",
    value: function addPageEventListeners() {
      var _this = this;
      this.randomizeButton.addEventListener("click", function () {
        _this.human.gameboard.clearShips(".player-1-gameboard");
        _this.human.placeShips();
        _this.human.gameboard.renderShips(".player-1-gameboard");
      });
      this.startButton.addEventListener("click", function () {
        _this.randomizeButton.classList.add("invisible");
        _this.startButton.classList.add("invisible");
        _this.startGame();
      });
      this.removePlayer2Listeners();
      this.newGameButton.addEventListener("click", function () {
        location.reload();
        _this.randomizeButton.classList.remove("invisible");
        _this.startButton.classList.remove("invisible");
        _this.gameOverScreen.classList.add("hidden");
        _this.human.gameboard.clearShips(".player-1-gameboard");
        _this.computer.gameboard.clearShips(".player-2-gameboard");
        _this.human.placeShips();
        _this.human.gameboard.renderShips(".player-1-gameboard");
        _this.computer.gameboard.renderGrid(".player-2-gameboard");
        _this.computer.gameboard.renderShips(".player-2-gameboard");
        _this.removePlayer2Listeners();
        _this.renderShipStatus(document.querySelector(".player-1-ship-list"), _this.human);
        _this.renderShipStatus(document.querySelector(".player-2-ship-list"), _this.computer);
      });
    }
  }, {
    key: "displayGameOver",
    value: function displayGameOver() {
      this.gameOverScreen.classList.remove("hidden");
    }
  }, {
    key: "renderShipStatus",
    value: function renderShipStatus(container, player) {
      container.innerHTML = "";
      if (player.gameboard.ships.length > 0) {
        player.gameboard.ships.forEach(function (_ref) {
          var ship = _ref.ship;
          var shipDiv = document.createElement("div");
          shipDiv.classList.add("ship-div");
          for (var i = 0; i < ship.length; i++) {
            var segment = document.createElement("div");
            segment.classList.add("ship-segment");
            segment.style.backgroundColor = "";
            if (ship.isSunk()) {
              segment.style.backgroundColor = "#cf4f59ff";
            }
            shipDiv.appendChild(segment);
          }
          container.appendChild(shipDiv);
        });
      } else {
        player.shipLengths.forEach(function (length) {
          var shipDiv = document.createElement("div");
          shipDiv.classList.add("ship-div");
          for (var i = 0; i < length; i++) {
            var segment = document.createElement("div");
            segment.classList.add("ship-segment");
            shipDiv.appendChild(segment);
          }
          container.appendChild(shipDiv);
        });
      }
    }
  }]);
}();

/***/ }),

/***/ "./src/classes/gameboard.js":
/*!**********************************!*\
  !*** ./src/classes/gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gameboard: () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ "./src/classes/ship.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var Gameboard = /*#__PURE__*/function () {
  function Gameboard() {
    _classCallCheck(this, Gameboard);
    this.size = [10, 10];
    this.ships = [];
    this.missedShotCoordinates = [];
    this.shipCounter = 0;
  }
  return _createClass(Gameboard, [{
    key: "isWithinBounds",
    value: function isWithinBounds(x, y) {
      return x >= 0 && y >= 0 && x < this.size[0] && y < this.size[1];
    }
  }, {
    key: "isOccupied",
    value: function isOccupied(x, y) {
      return this.ships.some(function (_ref) {
        var coordinates = _ref.coordinates;
        return coordinates.some(function (_ref2) {
          var _ref3 = _slicedToArray(_ref2, 2),
            cx = _ref3[0],
            cy = _ref3[1];
          return cx === x && cy === y;
        });
      });
    }
  }, {
    key: "placeShip",
    value: function placeShip(startCoord, length) {
      var orientation = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "horizontal";
      var _startCoord = _slicedToArray(startCoord, 2),
        startX = _startCoord[0],
        startY = _startCoord[1];
      var coordinates = [];
      for (var i = 0; i < length; i++) {
        var x = orientation === "horizontal" ? startX + i : startX;
        var y = orientation === "vertical" ? startY + i : startY;
        if (!this.isWithinBounds(x, y) || this.isOccupied(x, y)) {
          throw new Error("Invalid ship placement");
        }
        coordinates.push([x, y]);
      }
      var ship = new _ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship(length);
      var hitCoordinates = [];
      var shipId = "ship-".concat(this.shipCounter++);
      this.ships.push({
        ship: ship,
        coordinates: coordinates,
        hitCoordinates: hitCoordinates,
        shipId: shipId
      });
    }
  }, {
    key: "receiveAttack",
    value: function receiveAttack(_ref4) {
      var _ref5 = _slicedToArray(_ref4, 2),
        x = _ref5[0],
        y = _ref5[1];
      var hit = false;
      var _iterator = _createForOfIteratorHelper(this.ships),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var shipData = _step.value;
          var ship = shipData.ship,
            coordinates = shipData.coordinates,
            hitCoordinates = shipData.hitCoordinates;
          var _iterator2 = _createForOfIteratorHelper(coordinates),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var _step2$value = _slicedToArray(_step2.value, 2),
                cx = _step2$value[0],
                cy = _step2$value[1];
              if (cx === x && cy === y) {
                ship.hit();
                hitCoordinates.push([x, y]);
                hit = true;
                break;
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
          if (hit) break;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (!hit) {
        this.missedShotCoordinates.push([x, y]);
      }
      return hit;
    }
  }, {
    key: "areAllShipsSunk",
    value: function areAllShipsSunk() {
      return this.ships.every(function (_ref6) {
        var ship = _ref6.ship;
        return ship.isSunk();
      });
    }
  }, {
    key: "wasShipSunkAt",
    value: function wasShipSunkAt(_ref7) {
      var _ref8 = _slicedToArray(_ref7, 2),
        x = _ref8[0],
        y = _ref8[1];
      var _iterator3 = _createForOfIteratorHelper(this.ships),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _step3$value = _step3.value,
            ship = _step3$value.ship,
            coordinates = _step3$value.coordinates;
          if (coordinates.some(function (_ref9) {
            var _ref0 = _slicedToArray(_ref9, 2),
              cx = _ref0[0],
              cy = _ref0[1];
            return cx === x && cy === y;
          })) {
            return ship.isSunk();
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      return false;
    }
  }, {
    key: "renderGrid",
    value: function renderGrid(containerSelector) {
      var container = document.querySelector(containerSelector);
      container.innerHTML = "";
      for (var y = 0; y < this.size[1]; y++) {
        for (var x = 0; x < this.size[0]; x++) {
          var cell = document.createElement("div");
          cell.classList.add("cell");
          cell.dataset.x = x;
          cell.dataset.y = y;
          container.appendChild(cell);
        }
      }
    }
  }, {
    key: "renderShips",
    value: function renderShips(containerSelector) {
      var container = document.querySelector(containerSelector);
      container.querySelectorAll(".cell").forEach(function (cell) {
        cell.classList.remove("ship");
        cell.removeAttribute("data-ship-id");
      });
      var colors = ["#bebebeff", "#634b4bff", "#9b904aff", "#606268ff", "#4a4a8aff", "#5ca57aff", "#3b94a3ff"];
      this.ships.forEach(function (_ref1, index) {
        var coordinates = _ref1.coordinates,
          shipId = _ref1.shipId;
        var color = colors[index % colors.length];
        coordinates.forEach(function (_ref10) {
          var _ref11 = _slicedToArray(_ref10, 2),
            x = _ref11[0],
            y = _ref11[1];
          var cell = container.querySelector(".cell[data-x=\"".concat(x, "\"][data-y=\"").concat(y, "\"]"));
          if (cell) {
            cell.classList.add("ship");
            cell.style.backgroundColor = color;
            cell.dataset.shipId = shipId;
          }
        });
      });
    }
  }, {
    key: "clearShips",
    value: function clearShips(containerSelector) {
      var container = document.querySelector(containerSelector);
      container.querySelectorAll(".cell").forEach(function (cell) {
        cell.classList.remove("ship", "hit", "miss");
        cell.style.backgroundColor = "";
        cell.removeAttribute("data-ship-id");
      });
      this.ships = [];
    }
  }]);
}();

/***/ }),

/***/ "./src/classes/player.js":
/*!*******************************!*\
  !*** ./src/classes/player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Computer: () => (/* binding */ Computer),
/* harmony export */   Player: () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard.js */ "./src/classes/gameboard.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);
    this.gameboard = new _gameboard_js__WEBPACK_IMPORTED_MODULE_0__.Gameboard();
    this.shipLengths = [5, 4, 4, 3, 3, 2, 2];
  }
  return _createClass(Player, [{
    key: "placeShips",
    value: function placeShips() {
      var _iterator = _createForOfIteratorHelper(this.shipLengths),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var length = _step.value;
          var placed = false;
          while (!placed) {
            try {
              var position = [[Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)], Math.random() < 0.5 ? "horizontal" : "vertical"];
              this.gameboard.placeShip(position[0], length, position[1]);
              placed = true;
            } catch (_unused) {}
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "renderShipStatus",
    value: function renderShipStatus(container) {
      container.innerHTML = "";
      var _iterator2 = _createForOfIteratorHelper(this.shipLengths),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var length = _step2.value;
          var shipDiv = document.createElement("div");
          for (var i = 0; i < length; i++) {
            var shipSegment = document.createElement("div");
            shipDiv.append(shipSegment);
          }
          container.append(shipDiv);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }]);
}();
var Computer = /*#__PURE__*/function (_Player) {
  function Computer() {
    var _this;
    _classCallCheck(this, Computer);
    _this = _callSuper(this, Computer);
    _this.previousAttacks = new Set();
    _this.previousHits = [];
    _this.possibleTargets = [];
    _this.orientation = null;
    return _this;
  }
  _inherits(Computer, _Player);
  return _createClass(Computer, [{
    key: "generateShipPosition",
    value: function generateShipPosition() {
      var x = Math.floor(10 * Math.random());
      var y = Math.floor(10 * Math.random());
      var orientation = Math.random() < 0.5 ? "horizontal" : "vertical";
      return [[x, y], orientation];
    }
  }, {
    key: "placeShips",
    value: function placeShips() {
      var _iterator3 = _createForOfIteratorHelper(this.shipLengths),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var length = _step3.value;
          var placed = false;
          while (!placed) {
            try {
              var position = this.generateShipPosition();
              this.gameboard.placeShip(position[0], length, position[1]);
              placed = true;
            } catch (_unused2) {}
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
  }, {
    key: "attack",
    value: function attack() {
      if (this.possibleTargets.length > 0) {
        return this.possibleTargets.pop();
      }
      var key, x, y;
      do {
        x = Math.floor(Math.random() * 10);
        y = Math.floor(Math.random() * 10);
        key = "".concat(x, ",").concat(y);
      } while (this.previousAttacks.has(key));
      this.previousAttacks.add(key);
      return [x, y];
    }
  }, {
    key: "processAttackResult",
    value: function processAttackResult(_ref, wasHit, wasSunk) {
      var _ref2 = _slicedToArray(_ref, 2),
        x = _ref2[0],
        y = _ref2[1];
      if (wasHit) {
        this.previousHits.push([x, y]);
        if (this.previousHits.length >= 2) {
          var _this$previousHits = _slicedToArray(this.previousHits, 2),
            first = _this$previousHits[0],
            second = _this$previousHits[1];
          if (first[0] === second[0]) {
            this.orientation = "vertical";
          } else if (first[1] === second[1]) {
            this.orientation = "horizontal";
          }
        }
        if (!wasSunk) {
          this.addAdjacentTargets(x, y);
        } else {
          this.previousHits = [];
          this.possibleTargets = [];
          this.orientation = null;
        }
      }
    }
  }, {
    key: "addAdjacentTargets",
    value: function addAdjacentTargets(x, y) {
      var directions;
      if (this.orientation === "horizontal") {
        directions = [[1, 0], [-1, 0]];
      } else if (this.orientation === "vertical") {
        directions = [[0, 1], [0, -1]];
      } else {
        directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
      }
      var _iterator4 = _createForOfIteratorHelper(directions),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var _step4$value = _slicedToArray(_step4.value, 2),
            dx = _step4$value[0],
            dy = _step4$value[1];
          var newX = x + dx;
          var newY = y + dy;
          if (newX >= 0 && newX < 10 && newY >= 0 && newY < 10) {
            var key = "".concat(newX, ",").concat(newY);
            if (!this.previousAttacks.has(key)) {
              this.possibleTargets.push([newX, newY]);
              this.previousAttacks.add(key);
            }
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    }
  }]);
}(Player);

/***/ }),

/***/ "./src/classes/ship.js":
/*!*****************************!*\
  !*** ./src/classes/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ship: () => (/* binding */ Ship)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Ship = /*#__PURE__*/function () {
  function Ship(length) {
    _classCallCheck(this, Ship);
    this.length = length;
    this.hits = 0;
  }
  return _createClass(Ship, [{
    key: "hit",
    value: function hit() {
      this.hits += 1;
    }
  }, {
    key: "isSunk",
    value: function isSunk() {
      return this.hits >= this.length;
    }
  }]);
}();

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _classes_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/player */ "./src/classes/player.js");
/* harmony import */ var _classes_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/dom */ "./src/classes/dom.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }



var human = new _classes_player__WEBPACK_IMPORTED_MODULE_1__.Player();
var computer = new _classes_player__WEBPACK_IMPORTED_MODULE_1__.Computer();
var player1ShipList = document.querySelector(".player-1-ship-list");
var player2ShipList = document.querySelector(".player-2-ship-list");
function initialSetup() {
  human.gameboard.renderGrid(".player-1-gameboard");
  computer.gameboard.renderGrid(".player-2-gameboard");
  human.placeShips();
  human.gameboard.renderShips(".player-1-gameboard");
  dom.renderShipStatus(player1ShipList, human);
  dom.renderShipStatus(player2ShipList, computer);
}
function cellClickHandler(event) {
  playTurn(event.currentTarget);
}
function addPlayer2Listeners() {
  document.querySelectorAll(".player-2-gameboard > .cell").forEach(function (cell) {
    cell.removeEventListener("click", cellClickHandler);
    cell.addEventListener("click", cellClickHandler);
  });
}
function removePlayer2Listeners() {
  document.querySelectorAll(".player-2-gameboard > .cell").forEach(function (cell) {
    return cell.removeEventListener("click", cellClickHandler);
  });
}
function playTurn(cell) {
  var winnerMsg = document.querySelector(".winner-message");
  humanAttack(cell);
  if (computer.gameboard.areAllShipsSunk()) {
    dom.displayGameOver();
    winnerMsg.textContent = "You won!";
    removePlayer2Listeners();
    return;
  }
  computerAttack();
  if (human.gameboard.areAllShipsSunk()) {
    dom.displayGameOver();
    winnerMsg.textContent = "Computer Won!";
    computer.gameboard.renderShips(".player-2-gameboard");
    removePlayer2Listeners();
    return;
  }
}
function startGame() {
  removePlayer2Listeners();
  computer.gameboard = new _classes_player__WEBPACK_IMPORTED_MODULE_1__.Computer().gameboard;
  computer.previousAttacks.clear();
  computer.previousHits = [];
  computer.possibleTargets = [];
  computer.orientation = null;
  computer.placeShips();
  addPlayer2Listeners();
}
function computerAttack() {
  var _computer$attack = computer.attack(),
    _computer$attack2 = _slicedToArray(_computer$attack, 2),
    compX = _computer$attack2[0],
    compY = _computer$attack2[1];
  var attackedCell = document.querySelector(".player-1-gameboard .cell[data-x=\"".concat(compX, "\"][data-y=\"").concat(compY, "\"]"));
  var wasHit = human.gameboard.receiveAttack([compX, compY]);
  var wasSunk = wasHit && human.gameboard.wasShipSunkAt([compX, compY]);
  if (wasHit) {
    attackedCell.classList.add("hit");
  } else {
    attackedCell.classList.add("miss");
  }
  computer.processAttackResult([compX, compY], wasHit, wasSunk);
  dom.renderShipStatus(player1ShipList, human);
}
function humanAttack(cell) {
  var x = parseInt(cell.dataset.x);
  var y = parseInt(cell.dataset.y);
  var wasHit = computer.gameboard.receiveAttack([x, y]);
  if (wasHit === null) return;
  if (wasHit) {
    cell.classList.add("hit");
  } else {
    cell.classList.add("miss");
  }
  dom.renderShipStatus(player2ShipList, computer);
}
var dom = new _classes_dom__WEBPACK_IMPORTED_MODULE_2__.DOM(human, computer, startGame, removePlayer2Listeners);
initialSetup();
dom.addPageEventListeners();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHdIQUF3SDtBQUN4SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyx1RkFBdUYsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxPQUFPLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsV0FBVyxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSw0R0FBNEcsZUFBZSwyQ0FBMkMsNkNBQTZDLHlDQUF5Qyx5Q0FBeUMsc0NBQXNDLHNDQUFzQyw0QkFBNEIsS0FBSyxXQUFXLGtCQUFrQixtQkFBbUIsK0JBQStCLEtBQUssY0FBYyxzQkFBc0Isb0JBQW9CLCtCQUErQixnQ0FBZ0MsNEJBQTRCLHNCQUFzQix5QkFBeUIsK0NBQStDLDhDQUE4QyxpQ0FBaUMsS0FBSywwQkFBMEIscUJBQXFCLHNCQUFzQixnQ0FBZ0MsNEJBQTRCLDJCQUEyQixLQUFLLFlBQVksd0JBQXdCLEtBQUssV0FBVywwQkFBMEIsMkJBQTJCLEtBQUsseUJBQXlCLHNCQUFzQixzQ0FBc0MscUJBQXFCLHFCQUFxQixLQUFLLHlDQUF5QyxzQkFBc0Isa0JBQWtCLEtBQUsscURBQXFELHNCQUFzQiwrQkFBK0IsZ0NBQWdDLEtBQUssNkRBQTZELHNCQUFzQiwrQkFBK0Isb0NBQW9DLDRCQUE0QixLQUFLLHFEQUFxRCxzQkFBc0IsNENBQTRDLCtDQUErQyxxQkFBcUIsaUJBQWlCLGdEQUFnRCxLQUFLLGVBQWUsOENBQThDLGdEQUFnRCw4QkFBOEIsbUJBQW1CLG9CQUFvQixLQUFLLDJDQUEyQyw0Q0FBNEMscUJBQXFCLHdCQUF3QixLQUFLLGNBQWMscURBQXFELHFCQUFxQixLQUFLLGVBQWUscUJBQXFCLEtBQUssdUJBQXVCLHNCQUFzQixrQkFBa0IsS0FBSyxrRUFBa0Usc0JBQXNCLGdDQUFnQyw0QkFBNEIsMkJBQTJCLG9CQUFvQiwwQkFBMEIsNEJBQTRCLHdCQUF3QiwwQkFBMEIsS0FBSyx1QkFBdUIsNkNBQTZDLEtBQUssMkJBQTJCLGtDQUFrQyxLQUFLLDJCQUEyQixvQkFBb0IsMkJBQTJCLGVBQWUsZ0JBQWdCLHFCQUFxQixzQkFBc0IsaURBQWlELDBCQUEwQiwrQkFBK0IsZ0NBQWdDLDRCQUE0QixLQUFLLGlCQUFpQixzQkFBc0IsS0FBSyxvQkFBb0IsbUJBQW1CLDZCQUE2QixLQUFLLDBCQUEwQiwwQ0FBMEMscUJBQXFCLEtBQUsscURBQXFELHNCQUFzQiwrQkFBK0Isa0JBQWtCLHdCQUF3Qiw0QkFBNEIsS0FBSyxtQkFBbUIsc0JBQXNCLG9CQUFvQixLQUFLLHVCQUF1QixvQkFBb0IscUJBQXFCLDJDQUEyQyw4QkFBOEIsS0FBSyx1QkFBdUI7QUFDanNLO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDaE0xQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7OztBQ2ZhOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0M7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRDs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JPLElBQU1BLEdBQUc7RUFDWixTQUFBQSxJQUFZQyxLQUFLLEVBQUVDLFFBQVEsRUFBRUMsU0FBUyxFQUFFQyxzQkFBc0IsRUFBRTtJQUFBQyxlQUFBLE9BQUFMLEdBQUE7SUFDNUQsSUFBSSxDQUFDQyxLQUFLLEdBQUdBLEtBQUs7SUFDbEIsSUFBSSxDQUFDQyxRQUFRLEdBQUdBLFFBQVE7SUFDeEIsSUFBSSxDQUFDQyxTQUFTLEdBQUdBLFNBQVM7SUFDMUIsSUFBSSxDQUFDQyxzQkFBc0IsR0FBR0Esc0JBQXNCO0lBRXBELElBQUksQ0FBQ0UsYUFBYSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQztJQUMvRCxJQUFJLENBQUNDLFdBQVcsR0FBR0YsUUFBUSxDQUFDQyxhQUFhLENBQUMsZUFBZSxDQUFDO0lBQzFELElBQUksQ0FBQ0UsY0FBYyxHQUFHSCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQztJQUNqRSxJQUFJLENBQUNHLGVBQWUsR0FBR0osUUFBUSxDQUFDQyxhQUFhLENBQUMsbUJBQW1CLENBQUM7RUFDdEU7RUFBQyxPQUFBSSxZQUFBLENBQUFaLEdBQUE7SUFBQWEsR0FBQTtJQUFBQyxLQUFBLEVBQ0QsU0FBQUMscUJBQXFCQSxDQUFBLEVBQUc7TUFBQSxJQUFBQyxLQUFBO01BQ3BCLElBQUksQ0FBQ0wsZUFBZSxDQUFDTSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtRQUNqREQsS0FBSSxDQUFDZixLQUFLLENBQUNpQixTQUFTLENBQUNDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQztRQUN0REgsS0FBSSxDQUFDZixLQUFLLENBQUNtQixVQUFVLENBQUMsQ0FBQztRQUN2QkosS0FBSSxDQUFDZixLQUFLLENBQUNpQixTQUFTLENBQUNHLFdBQVcsQ0FBQyxxQkFBcUIsQ0FBQztNQUMzRCxDQUFDLENBQUM7TUFFRixJQUFJLENBQUNaLFdBQVcsQ0FBQ1EsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07UUFDN0NELEtBQUksQ0FBQ0wsZUFBZSxDQUFDVyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxXQUFXLENBQUM7UUFDL0NQLEtBQUksQ0FBQ1AsV0FBVyxDQUFDYSxTQUFTLENBQUNDLEdBQUcsQ0FBQyxXQUFXLENBQUM7UUFFM0NQLEtBQUksQ0FBQ2IsU0FBUyxDQUFDLENBQUM7TUFDcEIsQ0FBQyxDQUFDO01BQ0YsSUFBSSxDQUFDQyxzQkFBc0IsQ0FBQyxDQUFDO01BRTdCLElBQUksQ0FBQ0UsYUFBYSxDQUFDVyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtRQUMvQ08sUUFBUSxDQUFDQyxNQUFNLENBQUMsQ0FBQztRQUNqQlQsS0FBSSxDQUFDTCxlQUFlLENBQUNXLFNBQVMsQ0FBQ0ksTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUNsRFYsS0FBSSxDQUFDUCxXQUFXLENBQUNhLFNBQVMsQ0FBQ0ksTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUM5Q1YsS0FBSSxDQUFDTixjQUFjLENBQUNZLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBQztRQUUzQ1AsS0FBSSxDQUFDZixLQUFLLENBQUNpQixTQUFTLENBQUNDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQztRQUN0REgsS0FBSSxDQUFDZCxRQUFRLENBQUNnQixTQUFTLENBQUNDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQztRQUV6REgsS0FBSSxDQUFDZixLQUFLLENBQUNtQixVQUFVLENBQUMsQ0FBQztRQUV2QkosS0FBSSxDQUFDZixLQUFLLENBQUNpQixTQUFTLENBQUNHLFdBQVcsQ0FBQyxxQkFBcUIsQ0FBQztRQUV2REwsS0FBSSxDQUFDZCxRQUFRLENBQUNnQixTQUFTLENBQUNTLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQztRQUN6RFgsS0FBSSxDQUFDZCxRQUFRLENBQUNnQixTQUFTLENBQUNHLFdBQVcsQ0FBQyxxQkFBcUIsQ0FBQztRQUUxREwsS0FBSSxDQUFDWixzQkFBc0IsQ0FBQyxDQUFDO1FBQzdCWSxLQUFJLENBQUNZLGdCQUFnQixDQUNqQnJCLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLHFCQUFxQixDQUFDLEVBQzdDUSxLQUFJLENBQUNmLEtBQ1QsQ0FBQztRQUNEZSxLQUFJLENBQUNZLGdCQUFnQixDQUNqQnJCLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLHFCQUFxQixDQUFDLEVBQzdDUSxLQUFJLENBQUNkLFFBQ1QsQ0FBQztNQUNMLENBQUMsQ0FBQztJQUNOO0VBQUM7SUFBQVcsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQWUsZUFBZUEsQ0FBQSxFQUFHO01BQ2QsSUFBSSxDQUFDbkIsY0FBYyxDQUFDWSxTQUFTLENBQUNJLE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFDbEQ7RUFBQztJQUFBYixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBYyxnQkFBZ0JBLENBQUNFLFNBQVMsRUFBRUMsTUFBTSxFQUFFO01BQ2hDRCxTQUFTLENBQUNFLFNBQVMsR0FBRyxFQUFFO01BQ3hCLElBQUlELE1BQU0sQ0FBQ2IsU0FBUyxDQUFDZSxLQUFLLENBQUNDLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDbkNILE1BQU0sQ0FBQ2IsU0FBUyxDQUFDZSxLQUFLLENBQUNFLE9BQU8sQ0FBQyxVQUFBQyxJQUFBLEVBQWM7VUFBQSxJQUFYQyxJQUFJLEdBQUFELElBQUEsQ0FBSkMsSUFBSTtVQUNsQyxJQUFNQyxPQUFPLEdBQUcvQixRQUFRLENBQUNnQyxhQUFhLENBQUMsS0FBSyxDQUFDO1VBQzdDRCxPQUFPLENBQUNoQixTQUFTLENBQUNDLEdBQUcsQ0FBQyxVQUFVLENBQUM7VUFFakMsS0FBSyxJQUFJaUIsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHSCxJQUFJLENBQUNILE1BQU0sRUFBRU0sQ0FBQyxFQUFFLEVBQUU7WUFDbEMsSUFBTUMsT0FBTyxHQUFHbEMsUUFBUSxDQUFDZ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztZQUM3Q0UsT0FBTyxDQUFDbkIsU0FBUyxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDO1lBRXJDa0IsT0FBTyxDQUFDQyxLQUFLLENBQUNDLGVBQWUsR0FBRyxFQUFFO1lBRWxDLElBQUlOLElBQUksQ0FBQ08sTUFBTSxDQUFDLENBQUMsRUFBRTtjQUNmSCxPQUFPLENBQUNDLEtBQUssQ0FBQ0MsZUFBZSxHQUFHLFdBQVc7WUFDL0M7WUFFQUwsT0FBTyxDQUFDTyxXQUFXLENBQUNKLE9BQU8sQ0FBQztVQUNoQztVQUVBWCxTQUFTLENBQUNlLFdBQVcsQ0FBQ1AsT0FBTyxDQUFDO1FBQ2xDLENBQUMsQ0FBQztNQUNOLENBQUMsTUFBTTtRQUNIUCxNQUFNLENBQUNlLFdBQVcsQ0FBQ1gsT0FBTyxDQUFDLFVBQUNELE1BQU0sRUFBSztVQUNuQyxJQUFNSSxPQUFPLEdBQUcvQixRQUFRLENBQUNnQyxhQUFhLENBQUMsS0FBSyxDQUFDO1VBQzdDRCxPQUFPLENBQUNoQixTQUFTLENBQUNDLEdBQUcsQ0FBQyxVQUFVLENBQUM7VUFFakMsS0FBSyxJQUFJaUIsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHTixNQUFNLEVBQUVNLENBQUMsRUFBRSxFQUFFO1lBQzdCLElBQU1DLE9BQU8sR0FBR2xDLFFBQVEsQ0FBQ2dDLGFBQWEsQ0FBQyxLQUFLLENBQUM7WUFDN0NFLE9BQU8sQ0FBQ25CLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQztZQUNyQ2UsT0FBTyxDQUFDTyxXQUFXLENBQUNKLE9BQU8sQ0FBQztVQUNoQztVQUVBWCxTQUFTLENBQUNlLFdBQVcsQ0FBQ1AsT0FBTyxDQUFDO1FBQ2xDLENBQUMsQ0FBQztNQUNOO0lBQ0o7RUFBQztBQUFBLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvRjRCO0FBRTFCLElBQU1VLFNBQVM7RUFDbEIsU0FBQUEsVUFBQSxFQUFjO0lBQUEzQyxlQUFBLE9BQUEyQyxTQUFBO0lBQ1YsSUFBSSxDQUFDQyxJQUFJLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDO0lBQ3BCLElBQUksQ0FBQ2hCLEtBQUssR0FBRyxFQUFFO0lBQ2YsSUFBSSxDQUFDaUIscUJBQXFCLEdBQUcsRUFBRTtJQUMvQixJQUFJLENBQUNDLFdBQVcsR0FBRyxDQUFDO0VBQ3hCO0VBQUMsT0FBQXZDLFlBQUEsQ0FBQW9DLFNBQUE7SUFBQW5DLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFzQyxjQUFjQSxDQUFDQyxDQUFDLEVBQUVDLENBQUMsRUFBRTtNQUNqQixPQUFPRCxDQUFDLElBQUksQ0FBQyxJQUFJQyxDQUFDLElBQUksQ0FBQyxJQUFJRCxDQUFDLEdBQUcsSUFBSSxDQUFDSixJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUlLLENBQUMsR0FBRyxJQUFJLENBQUNMLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDbkU7RUFBQztJQUFBcEMsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQXlDLFVBQVVBLENBQUNGLENBQUMsRUFBRUMsQ0FBQyxFQUFFO01BQ2IsT0FBTyxJQUFJLENBQUNyQixLQUFLLENBQUN1QixJQUFJLENBQUMsVUFBQXBCLElBQUE7UUFBQSxJQUFHcUIsV0FBVyxHQUFBckIsSUFBQSxDQUFYcUIsV0FBVztRQUFBLE9BQ2pDQSxXQUFXLENBQUNELElBQUksQ0FBQyxVQUFBRSxLQUFBO1VBQUEsSUFBQUMsS0FBQSxHQUFBQyxjQUFBLENBQUFGLEtBQUE7WUFBRUcsRUFBRSxHQUFBRixLQUFBO1lBQUVHLEVBQUUsR0FBQUgsS0FBQTtVQUFBLE9BQU1FLEVBQUUsS0FBS1IsQ0FBQyxJQUFJUyxFQUFFLEtBQUtSLENBQUM7UUFBQSxFQUFDO01BQUEsQ0FDeEQsQ0FBQztJQUNMO0VBQUM7SUFBQXpDLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFpRCxTQUFTQSxDQUFDQyxVQUFVLEVBQUU5QixNQUFNLEVBQThCO01BQUEsSUFBNUIrQixXQUFXLEdBQUFDLFNBQUEsQ0FBQWhDLE1BQUEsUUFBQWdDLFNBQUEsUUFBQUMsU0FBQSxHQUFBRCxTQUFBLE1BQUcsWUFBWTtNQUNwRCxJQUFBRSxXQUFBLEdBQUFSLGNBQUEsQ0FBeUJJLFVBQVU7UUFBNUJLLE1BQU0sR0FBQUQsV0FBQTtRQUFFRSxNQUFNLEdBQUFGLFdBQUE7TUFDckIsSUFBTVgsV0FBVyxHQUFHLEVBQUU7TUFFdEIsS0FBSyxJQUFJakIsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHTixNQUFNLEVBQUVNLENBQUMsRUFBRSxFQUFFO1FBQzdCLElBQU1hLENBQUMsR0FBR1ksV0FBVyxLQUFLLFlBQVksR0FBR0ksTUFBTSxHQUFHN0IsQ0FBQyxHQUFHNkIsTUFBTTtRQUM1RCxJQUFNZixDQUFDLEdBQUdXLFdBQVcsS0FBSyxVQUFVLEdBQUdLLE1BQU0sR0FBRzlCLENBQUMsR0FBRzhCLE1BQU07UUFFMUQsSUFBSSxDQUFDLElBQUksQ0FBQ2xCLGNBQWMsQ0FBQ0MsQ0FBQyxFQUFFQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUNDLFVBQVUsQ0FBQ0YsQ0FBQyxFQUFFQyxDQUFDLENBQUMsRUFBRTtVQUNyRCxNQUFNLElBQUlpQixLQUFLLENBQUMsd0JBQXdCLENBQUM7UUFDN0M7UUFFQWQsV0FBVyxDQUFDZSxJQUFJLENBQUMsQ0FBQ25CLENBQUMsRUFBRUMsQ0FBQyxDQUFDLENBQUM7TUFDNUI7TUFFQSxJQUFNakIsSUFBSSxHQUFHLElBQUlVLDBDQUFJLENBQUNiLE1BQU0sQ0FBQztNQUM3QixJQUFNdUMsY0FBYyxHQUFHLEVBQUU7TUFDekIsSUFBTUMsTUFBTSxXQUFBQyxNQUFBLENBQVcsSUFBSSxDQUFDeEIsV0FBVyxFQUFFLENBQUU7TUFDM0MsSUFBSSxDQUFDbEIsS0FBSyxDQUFDdUMsSUFBSSxDQUFDO1FBQUVuQyxJQUFJLEVBQUpBLElBQUk7UUFBRW9CLFdBQVcsRUFBWEEsV0FBVztRQUFFZ0IsY0FBYyxFQUFkQSxjQUFjO1FBQUVDLE1BQU0sRUFBTkE7TUFBTyxDQUFDLENBQUM7SUFDbEU7RUFBQztJQUFBN0QsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQThELGFBQWFBLENBQUFDLEtBQUEsRUFBUztNQUFBLElBQUFDLEtBQUEsR0FBQWxCLGNBQUEsQ0FBQWlCLEtBQUE7UUFBUHhCLENBQUMsR0FBQXlCLEtBQUE7UUFBRXhCLENBQUMsR0FBQXdCLEtBQUE7TUFDZixJQUFJQyxHQUFHLEdBQUcsS0FBSztNQUFDLElBQUFDLFNBQUEsR0FBQUMsMEJBQUEsQ0FDTyxJQUFJLENBQUNoRCxLQUFLO1FBQUFpRCxLQUFBO01BQUE7UUFBakMsS0FBQUYsU0FBQSxDQUFBRyxDQUFBLE1BQUFELEtBQUEsR0FBQUYsU0FBQSxDQUFBSSxDQUFBLElBQUFDLElBQUEsR0FBbUM7VUFBQSxJQUF4QkMsUUFBUSxHQUFBSixLQUFBLENBQUFwRSxLQUFBO1VBQ2YsSUFBUXVCLElBQUksR0FBa0NpRCxRQUFRLENBQTlDakQsSUFBSTtZQUFFb0IsV0FBVyxHQUFxQjZCLFFBQVEsQ0FBeEM3QixXQUFXO1lBQUVnQixjQUFjLEdBQUthLFFBQVEsQ0FBM0JiLGNBQWM7VUFBYyxJQUFBYyxVQUFBLEdBQUFOLDBCQUFBLENBQ2hDeEIsV0FBVztZQUFBK0IsTUFBQTtVQUFBO1lBQWxDLEtBQUFELFVBQUEsQ0FBQUosQ0FBQSxNQUFBSyxNQUFBLEdBQUFELFVBQUEsQ0FBQUgsQ0FBQSxJQUFBQyxJQUFBLEdBQW9DO2NBQUEsSUFBQUksWUFBQSxHQUFBN0IsY0FBQSxDQUFBNEIsTUFBQSxDQUFBMUUsS0FBQTtnQkFBeEIrQyxFQUFFLEdBQUE0QixZQUFBO2dCQUFFM0IsRUFBRSxHQUFBMkIsWUFBQTtjQUNkLElBQUk1QixFQUFFLEtBQUtSLENBQUMsSUFBSVMsRUFBRSxLQUFLUixDQUFDLEVBQUU7Z0JBQ3RCakIsSUFBSSxDQUFDMEMsR0FBRyxDQUFDLENBQUM7Z0JBQ1ZOLGNBQWMsQ0FBQ0QsSUFBSSxDQUFDLENBQUNuQixDQUFDLEVBQUVDLENBQUMsQ0FBQyxDQUFDO2dCQUMzQnlCLEdBQUcsR0FBRyxJQUFJO2dCQUNWO2NBQ0o7WUFDSjtVQUFDLFNBQUFXLEdBQUE7WUFBQUgsVUFBQSxDQUFBSSxDQUFBLENBQUFELEdBQUE7VUFBQTtZQUFBSCxVQUFBLENBQUFLLENBQUE7VUFBQTtVQUNELElBQUliLEdBQUcsRUFBRTtRQUNiO01BQUMsU0FBQVcsR0FBQTtRQUFBVixTQUFBLENBQUFXLENBQUEsQ0FBQUQsR0FBQTtNQUFBO1FBQUFWLFNBQUEsQ0FBQVksQ0FBQTtNQUFBO01BRUQsSUFBSSxDQUFDYixHQUFHLEVBQUU7UUFDTixJQUFJLENBQUM3QixxQkFBcUIsQ0FBQ3NCLElBQUksQ0FBQyxDQUFDbkIsQ0FBQyxFQUFFQyxDQUFDLENBQUMsQ0FBQztNQUMzQztNQUVBLE9BQU95QixHQUFHO0lBQ2Q7RUFBQztJQUFBbEUsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQStFLGVBQWVBLENBQUEsRUFBRztNQUNkLE9BQU8sSUFBSSxDQUFDNUQsS0FBSyxDQUFDNkQsS0FBSyxDQUFDLFVBQUFDLEtBQUE7UUFBQSxJQUFHMUQsSUFBSSxHQUFBMEQsS0FBQSxDQUFKMUQsSUFBSTtRQUFBLE9BQU9BLElBQUksQ0FBQ08sTUFBTSxDQUFDLENBQUM7TUFBQSxFQUFDO0lBQ3hEO0VBQUM7SUFBQS9CLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFrRixhQUFhQSxDQUFBQyxLQUFBLEVBQVM7TUFBQSxJQUFBQyxLQUFBLEdBQUF0QyxjQUFBLENBQUFxQyxLQUFBO1FBQVA1QyxDQUFDLEdBQUE2QyxLQUFBO1FBQUU1QyxDQUFDLEdBQUE0QyxLQUFBO01BQUEsSUFBQUMsVUFBQSxHQUFBbEIsMEJBQUEsQ0FDcUIsSUFBSSxDQUFDaEQsS0FBSztRQUFBbUUsTUFBQTtNQUFBO1FBQTlDLEtBQUFELFVBQUEsQ0FBQWhCLENBQUEsTUFBQWlCLE1BQUEsR0FBQUQsVUFBQSxDQUFBZixDQUFBLElBQUFDLElBQUEsR0FBZ0Q7VUFBQSxJQUFBZ0IsWUFBQSxHQUFBRCxNQUFBLENBQUF0RixLQUFBO1lBQW5DdUIsSUFBSSxHQUFBZ0UsWUFBQSxDQUFKaEUsSUFBSTtZQUFFb0IsV0FBVyxHQUFBNEMsWUFBQSxDQUFYNUMsV0FBVztVQUMxQixJQUFJQSxXQUFXLENBQUNELElBQUksQ0FBQyxVQUFBOEMsS0FBQTtZQUFBLElBQUFDLEtBQUEsR0FBQTNDLGNBQUEsQ0FBQTBDLEtBQUE7Y0FBRXpDLEVBQUUsR0FBQTBDLEtBQUE7Y0FBRXpDLEVBQUUsR0FBQXlDLEtBQUE7WUFBQSxPQUFNMUMsRUFBRSxLQUFLUixDQUFDLElBQUlTLEVBQUUsS0FBS1IsQ0FBQztVQUFBLEVBQUMsRUFBRTtZQUN0RCxPQUFPakIsSUFBSSxDQUFDTyxNQUFNLENBQUMsQ0FBQztVQUN4QjtRQUNKO01BQUMsU0FBQThDLEdBQUE7UUFBQVMsVUFBQSxDQUFBUixDQUFBLENBQUFELEdBQUE7TUFBQTtRQUFBUyxVQUFBLENBQUFQLENBQUE7TUFBQTtNQUNELE9BQU8sS0FBSztJQUNoQjtFQUFDO0lBQUEvRSxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBYSxVQUFVQSxDQUFDNkUsaUJBQWlCLEVBQUU7TUFDMUIsSUFBTTFFLFNBQVMsR0FBR3ZCLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDZ0csaUJBQWlCLENBQUM7TUFDM0QxRSxTQUFTLENBQUNFLFNBQVMsR0FBRyxFQUFFO01BQ3hCLEtBQUssSUFBSXNCLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBRyxJQUFJLENBQUNMLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRUssQ0FBQyxFQUFFLEVBQUU7UUFDbkMsS0FBSyxJQUFJRCxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUcsSUFBSSxDQUFDSixJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUVJLENBQUMsRUFBRSxFQUFFO1VBQ25DLElBQU1vRCxJQUFJLEdBQUdsRyxRQUFRLENBQUNnQyxhQUFhLENBQUMsS0FBSyxDQUFDO1VBQzFDa0UsSUFBSSxDQUFDbkYsU0FBUyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO1VBQzFCa0YsSUFBSSxDQUFDQyxPQUFPLENBQUNyRCxDQUFDLEdBQUdBLENBQUM7VUFDbEJvRCxJQUFJLENBQUNDLE9BQU8sQ0FBQ3BELENBQUMsR0FBR0EsQ0FBQztVQUNsQnhCLFNBQVMsQ0FBQ2UsV0FBVyxDQUFDNEQsSUFBSSxDQUFDO1FBQy9CO01BQ0o7SUFDSjtFQUFDO0lBQUE1RixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBTyxXQUFXQSxDQUFDbUYsaUJBQWlCLEVBQUU7TUFDM0IsSUFBTTFFLFNBQVMsR0FBR3ZCLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDZ0csaUJBQWlCLENBQUM7TUFDM0QxRSxTQUFTLENBQUM2RSxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQ3hFLE9BQU8sQ0FBQyxVQUFDc0UsSUFBSSxFQUFLO1FBQ2xEQSxJQUFJLENBQUNuRixTQUFTLENBQUNJLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDN0IrRSxJQUFJLENBQUNHLGVBQWUsQ0FBQyxjQUFjLENBQUM7TUFDeEMsQ0FBQyxDQUFDO01BRUYsSUFBTUMsTUFBTSxHQUFHLENBQ1gsV0FBVyxFQUNYLFdBQVcsRUFDWCxXQUFXLEVBQ1gsV0FBVyxFQUNYLFdBQVcsRUFDWCxXQUFXLEVBQ1gsV0FBVyxDQUNkO01BRUQsSUFBSSxDQUFDNUUsS0FBSyxDQUFDRSxPQUFPLENBQUMsVUFBQTJFLEtBQUEsRUFBMEJDLEtBQUssRUFBSztRQUFBLElBQWpDdEQsV0FBVyxHQUFBcUQsS0FBQSxDQUFYckQsV0FBVztVQUFFaUIsTUFBTSxHQUFBb0MsS0FBQSxDQUFOcEMsTUFBTTtRQUNyQyxJQUFNc0MsS0FBSyxHQUFHSCxNQUFNLENBQUNFLEtBQUssR0FBR0YsTUFBTSxDQUFDM0UsTUFBTSxDQUFDO1FBRTNDdUIsV0FBVyxDQUFDdEIsT0FBTyxDQUFDLFVBQUE4RSxNQUFBLEVBQVk7VUFBQSxJQUFBQyxNQUFBLEdBQUF0RCxjQUFBLENBQUFxRCxNQUFBO1lBQVY1RCxDQUFDLEdBQUE2RCxNQUFBO1lBQUU1RCxDQUFDLEdBQUE0RCxNQUFBO1VBQ3RCLElBQU1ULElBQUksR0FBRzNFLFNBQVMsQ0FBQ3RCLGFBQWEsbUJBQUFtRSxNQUFBLENBQ2Z0QixDQUFDLG1CQUFBc0IsTUFBQSxDQUFjckIsQ0FBQyxRQUNyQyxDQUFDO1VBQ0QsSUFBSW1ELElBQUksRUFBRTtZQUNOQSxJQUFJLENBQUNuRixTQUFTLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUM7WUFDMUJrRixJQUFJLENBQUMvRCxLQUFLLENBQUNDLGVBQWUsR0FBR3FFLEtBQUs7WUFDbENQLElBQUksQ0FBQ0MsT0FBTyxDQUFDaEMsTUFBTSxHQUFHQSxNQUFNO1VBQ2hDO1FBQ0osQ0FBQyxDQUFDO01BQ04sQ0FBQyxDQUFDO0lBQ047RUFBQztJQUFBN0QsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQUssVUFBVUEsQ0FBQ3FGLGlCQUFpQixFQUFFO01BQzFCLElBQU0xRSxTQUFTLEdBQUd2QixRQUFRLENBQUNDLGFBQWEsQ0FBQ2dHLGlCQUFpQixDQUFDO01BQzNEMUUsU0FBUyxDQUFDNkUsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUN4RSxPQUFPLENBQUMsVUFBQ3NFLElBQUksRUFBSztRQUNsREEsSUFBSSxDQUFDbkYsU0FBUyxDQUFDSSxNQUFNLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUM7UUFDNUMrRSxJQUFJLENBQUMvRCxLQUFLLENBQUNDLGVBQWUsR0FBRyxFQUFFO1FBQy9COEQsSUFBSSxDQUFDRyxlQUFlLENBQUMsY0FBYyxDQUFDO01BQ3hDLENBQUMsQ0FBQztNQUVGLElBQUksQ0FBQzNFLEtBQUssR0FBRyxFQUFFO0lBQ25CO0VBQUM7QUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwSXNDO0FBRXBDLElBQU1rRixNQUFNO0VBQ2YsU0FBQUEsT0FBQSxFQUFjO0lBQUE5RyxlQUFBLE9BQUE4RyxNQUFBO0lBQ1YsSUFBSSxDQUFDakcsU0FBUyxHQUFHLElBQUk4QixvREFBUyxDQUFDLENBQUM7SUFDaEMsSUFBSSxDQUFDRixXQUFXLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDNUM7RUFBQyxPQUFBbEMsWUFBQSxDQUFBdUcsTUFBQTtJQUFBdEcsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQU0sVUFBVUEsQ0FBQSxFQUFHO01BQUEsSUFBQTRELFNBQUEsR0FBQUMsMEJBQUEsQ0FDWSxJQUFJLENBQUNuQyxXQUFXO1FBQUFvQyxLQUFBO01BQUE7UUFBckMsS0FBQUYsU0FBQSxDQUFBRyxDQUFBLE1BQUFELEtBQUEsR0FBQUYsU0FBQSxDQUFBSSxDQUFBLElBQUFDLElBQUEsR0FBdUM7VUFBQSxJQUE1Qm5ELE1BQU0sR0FBQWdELEtBQUEsQ0FBQXBFLEtBQUE7VUFDYixJQUFJc0csTUFBTSxHQUFHLEtBQUs7VUFDbEIsT0FBTyxDQUFDQSxNQUFNLEVBQUU7WUFDWixJQUFJO2NBQ0EsSUFBTUMsUUFBUSxHQUFHLENBQ2IsQ0FDSUMsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsRUFDOUJGLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQ2pDLEVBQ0RGLElBQUksQ0FBQ0UsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsWUFBWSxHQUFHLFVBQVUsQ0FDbEQ7Y0FDRCxJQUFJLENBQUN0RyxTQUFTLENBQUM2QyxTQUFTLENBQUNzRCxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUVuRixNQUFNLEVBQUVtRixRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7Y0FDMURELE1BQU0sR0FBRyxJQUFJO1lBQ2pCLENBQUMsQ0FBQyxPQUFBSyxPQUFBLEVBQU0sQ0FBQztVQUNiO1FBQ0o7TUFBQyxTQUFBL0IsR0FBQTtRQUFBVixTQUFBLENBQUFXLENBQUEsQ0FBQUQsR0FBQTtNQUFBO1FBQUFWLFNBQUEsQ0FBQVksQ0FBQTtNQUFBO0lBQ0w7RUFBQztJQUFBL0UsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQWMsZ0JBQWdCQSxDQUFDRSxTQUFTLEVBQUU7TUFDeEJBLFNBQVMsQ0FBQ0UsU0FBUyxHQUFHLEVBQUU7TUFBQyxJQUFBdUQsVUFBQSxHQUFBTiwwQkFBQSxDQUVKLElBQUksQ0FBQ25DLFdBQVc7UUFBQTBDLE1BQUE7TUFBQTtRQUFyQyxLQUFBRCxVQUFBLENBQUFKLENBQUEsTUFBQUssTUFBQSxHQUFBRCxVQUFBLENBQUFILENBQUEsSUFBQUMsSUFBQSxHQUF1QztVQUFBLElBQTVCbkQsTUFBTSxHQUFBc0QsTUFBQSxDQUFBMUUsS0FBQTtVQUNiLElBQU13QixPQUFPLEdBQUcvQixRQUFRLENBQUNnQyxhQUFhLENBQUMsS0FBSyxDQUFDO1VBRTdDLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHTixNQUFNLEVBQUVNLENBQUMsRUFBRSxFQUFFO1lBQzdCLElBQU1rRixXQUFXLEdBQUduSCxRQUFRLENBQUNnQyxhQUFhLENBQUMsS0FBSyxDQUFDO1lBQ2pERCxPQUFPLENBQUNxRixNQUFNLENBQUNELFdBQVcsQ0FBQztVQUMvQjtVQUNBNUYsU0FBUyxDQUFDNkYsTUFBTSxDQUFDckYsT0FBTyxDQUFDO1FBQzdCO01BQUMsU0FBQW9ELEdBQUE7UUFBQUgsVUFBQSxDQUFBSSxDQUFBLENBQUFELEdBQUE7TUFBQTtRQUFBSCxVQUFBLENBQUFLLENBQUE7TUFBQTtJQUNMO0VBQUM7QUFBQTtBQUdFLElBQU1nQyxRQUFRLDBCQUFBQyxPQUFBO0VBQ2pCLFNBQUFELFNBQUEsRUFBYztJQUFBLElBQUE1RyxLQUFBO0lBQUFYLGVBQUEsT0FBQXVILFFBQUE7SUFDVjVHLEtBQUEsR0FBQThHLFVBQUEsT0FBQUYsUUFBQTtJQUNBNUcsS0FBQSxDQUFLK0csZUFBZSxHQUFHLElBQUlDLEdBQUcsQ0FBQyxDQUFDO0lBQ2hDaEgsS0FBQSxDQUFLaUgsWUFBWSxHQUFHLEVBQUU7SUFDdEJqSCxLQUFBLENBQUtrSCxlQUFlLEdBQUcsRUFBRTtJQUN6QmxILEtBQUEsQ0FBS2lELFdBQVcsR0FBRyxJQUFJO0lBQUMsT0FBQWpELEtBQUE7RUFDNUI7RUFBQ21ILFNBQUEsQ0FBQVAsUUFBQSxFQUFBQyxPQUFBO0VBQUEsT0FBQWpILFlBQUEsQ0FBQWdILFFBQUE7SUFBQS9HLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFzSCxvQkFBb0JBLENBQUEsRUFBRztNQUNuQixJQUFJL0UsQ0FBQyxHQUFHaUUsSUFBSSxDQUFDQyxLQUFLLENBQUMsRUFBRSxHQUFHRCxJQUFJLENBQUNFLE1BQU0sQ0FBQyxDQUFDLENBQUM7TUFDdEMsSUFBSWxFLENBQUMsR0FBR2dFLElBQUksQ0FBQ0MsS0FBSyxDQUFDLEVBQUUsR0FBR0QsSUFBSSxDQUFDRSxNQUFNLENBQUMsQ0FBQyxDQUFDO01BQ3RDLElBQUl2RCxXQUFXLEdBQUdxRCxJQUFJLENBQUNFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLFlBQVksR0FBRyxVQUFVO01BRWpFLE9BQU8sQ0FBQyxDQUFDbkUsQ0FBQyxFQUFFQyxDQUFDLENBQUMsRUFBRVcsV0FBVyxDQUFDO0lBQ2hDO0VBQUM7SUFBQXBELEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFNLFVBQVVBLENBQUEsRUFBRztNQUFBLElBQUErRSxVQUFBLEdBQUFsQiwwQkFBQSxDQUNZLElBQUksQ0FBQ25DLFdBQVc7UUFBQXNELE1BQUE7TUFBQTtRQUFyQyxLQUFBRCxVQUFBLENBQUFoQixDQUFBLE1BQUFpQixNQUFBLEdBQUFELFVBQUEsQ0FBQWYsQ0FBQSxJQUFBQyxJQUFBLEdBQXVDO1VBQUEsSUFBNUJuRCxNQUFNLEdBQUFrRSxNQUFBLENBQUF0RixLQUFBO1VBQ2IsSUFBSXNHLE1BQU0sR0FBRyxLQUFLO1VBQ2xCLE9BQU8sQ0FBQ0EsTUFBTSxFQUFFO1lBQ1osSUFBSTtjQUNBLElBQU1DLFFBQVEsR0FBRyxJQUFJLENBQUNlLG9CQUFvQixDQUFDLENBQUM7Y0FDNUMsSUFBSSxDQUFDbEgsU0FBUyxDQUFDNkMsU0FBUyxDQUFDc0QsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFbkYsTUFBTSxFQUFFbUYsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO2NBQzFERCxNQUFNLEdBQUcsSUFBSTtZQUNqQixDQUFDLENBQUMsT0FBQWlCLFFBQUEsRUFBTSxDQUFDO1VBQ2I7UUFDSjtNQUFDLFNBQUEzQyxHQUFBO1FBQUFTLFVBQUEsQ0FBQVIsQ0FBQSxDQUFBRCxHQUFBO01BQUE7UUFBQVMsVUFBQSxDQUFBUCxDQUFBO01BQUE7SUFDTDtFQUFDO0lBQUEvRSxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBd0gsTUFBTUEsQ0FBQSxFQUFHO01BQ0wsSUFBSSxJQUFJLENBQUNKLGVBQWUsQ0FBQ2hHLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDakMsT0FBTyxJQUFJLENBQUNnRyxlQUFlLENBQUNLLEdBQUcsQ0FBQyxDQUFDO01BQ3JDO01BRUEsSUFBSTFILEdBQUcsRUFBRXdDLENBQUMsRUFBRUMsQ0FBQztNQUViLEdBQUc7UUFDQ0QsQ0FBQyxHQUFHaUUsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDbENsRSxDQUFDLEdBQUdnRSxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNsQzNHLEdBQUcsTUFBQThELE1BQUEsQ0FBTXRCLENBQUMsT0FBQXNCLE1BQUEsQ0FBSXJCLENBQUMsQ0FBRTtNQUNyQixDQUFDLFFBQVEsSUFBSSxDQUFDeUUsZUFBZSxDQUFDUyxHQUFHLENBQUMzSCxHQUFHLENBQUM7TUFFdEMsSUFBSSxDQUFDa0gsZUFBZSxDQUFDeEcsR0FBRyxDQUFDVixHQUFHLENBQUM7TUFDN0IsT0FBTyxDQUFDd0MsQ0FBQyxFQUFFQyxDQUFDLENBQUM7SUFDakI7RUFBQztJQUFBekMsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQTJILG1CQUFtQkEsQ0FBQXJHLElBQUEsRUFBU3NHLE1BQU0sRUFBRUMsT0FBTyxFQUFFO01BQUEsSUFBQWpGLEtBQUEsR0FBQUUsY0FBQSxDQUFBeEIsSUFBQTtRQUF4QmlCLENBQUMsR0FBQUssS0FBQTtRQUFFSixDQUFDLEdBQUFJLEtBQUE7TUFDckIsSUFBSWdGLE1BQU0sRUFBRTtRQUNSLElBQUksQ0FBQ1QsWUFBWSxDQUFDekQsSUFBSSxDQUFDLENBQUNuQixDQUFDLEVBQUVDLENBQUMsQ0FBQyxDQUFDO1FBRTlCLElBQUksSUFBSSxDQUFDMkUsWUFBWSxDQUFDL0YsTUFBTSxJQUFJLENBQUMsRUFBRTtVQUMvQixJQUFBMEcsa0JBQUEsR0FBQWhGLGNBQUEsQ0FBd0IsSUFBSSxDQUFDcUUsWUFBWTtZQUFsQ1ksS0FBSyxHQUFBRCxrQkFBQTtZQUFFRSxNQUFNLEdBQUFGLGtCQUFBO1VBQ3BCLElBQUlDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBS0MsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3hCLElBQUksQ0FBQzdFLFdBQVcsR0FBRyxVQUFVO1VBQ2pDLENBQUMsTUFBTSxJQUFJNEUsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDL0IsSUFBSSxDQUFDN0UsV0FBVyxHQUFHLFlBQVk7VUFDbkM7UUFDSjtRQUVBLElBQUksQ0FBQzBFLE9BQU8sRUFBRTtVQUNWLElBQUksQ0FBQ0ksa0JBQWtCLENBQUMxRixDQUFDLEVBQUVDLENBQUMsQ0FBQztRQUNqQyxDQUFDLE1BQU07VUFDSCxJQUFJLENBQUMyRSxZQUFZLEdBQUcsRUFBRTtVQUN0QixJQUFJLENBQUNDLGVBQWUsR0FBRyxFQUFFO1VBQ3pCLElBQUksQ0FBQ2pFLFdBQVcsR0FBRyxJQUFJO1FBQzNCO01BQ0o7SUFDSjtFQUFDO0lBQUFwRCxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBaUksa0JBQWtCQSxDQUFDMUYsQ0FBQyxFQUFFQyxDQUFDLEVBQUU7TUFDckIsSUFBSTBGLFVBQVU7TUFDZCxJQUFJLElBQUksQ0FBQy9FLFdBQVcsS0FBSyxZQUFZLEVBQUU7UUFDbkMrRSxVQUFVLEdBQUcsQ0FDVCxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNWO01BQ0wsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDL0UsV0FBVyxLQUFLLFVBQVUsRUFBRTtRQUN4QytFLFVBQVUsR0FBRyxDQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQ1Y7TUFDTCxDQUFDLE1BQU07UUFDSEEsVUFBVSxHQUFHLENBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ04sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDUCxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUNWO01BQ0w7TUFBQyxJQUFBQyxVQUFBLEdBQUFoRSwwQkFBQSxDQUVzQitELFVBQVU7UUFBQUUsTUFBQTtNQUFBO1FBQWpDLEtBQUFELFVBQUEsQ0FBQTlELENBQUEsTUFBQStELE1BQUEsR0FBQUQsVUFBQSxDQUFBN0QsQ0FBQSxJQUFBQyxJQUFBLEdBQW1DO1VBQUEsSUFBQThELFlBQUEsR0FBQXZGLGNBQUEsQ0FBQXNGLE1BQUEsQ0FBQXBJLEtBQUE7WUFBdkJzSSxFQUFFLEdBQUFELFlBQUE7WUFBRUUsRUFBRSxHQUFBRixZQUFBO1VBQ2QsSUFBTUcsSUFBSSxHQUFHakcsQ0FBQyxHQUFHK0YsRUFBRTtVQUNuQixJQUFNRyxJQUFJLEdBQUdqRyxDQUFDLEdBQUcrRixFQUFFO1VBRW5CLElBQUlDLElBQUksSUFBSSxDQUFDLElBQUlBLElBQUksR0FBRyxFQUFFLElBQUlDLElBQUksSUFBSSxDQUFDLElBQUlBLElBQUksR0FBRyxFQUFFLEVBQUU7WUFDbEQsSUFBTTFJLEdBQUcsTUFBQThELE1BQUEsQ0FBTTJFLElBQUksT0FBQTNFLE1BQUEsQ0FBSTRFLElBQUksQ0FBRTtZQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDeEIsZUFBZSxDQUFDUyxHQUFHLENBQUMzSCxHQUFHLENBQUMsRUFBRTtjQUNoQyxJQUFJLENBQUNxSCxlQUFlLENBQUMxRCxJQUFJLENBQUMsQ0FBQzhFLElBQUksRUFBRUMsSUFBSSxDQUFDLENBQUM7Y0FDdkMsSUFBSSxDQUFDeEIsZUFBZSxDQUFDeEcsR0FBRyxDQUFDVixHQUFHLENBQUM7WUFDakM7VUFDSjtRQUNKO01BQUMsU0FBQTZFLEdBQUE7UUFBQXVELFVBQUEsQ0FBQXRELENBQUEsQ0FBQUQsR0FBQTtNQUFBO1FBQUF1RCxVQUFBLENBQUFyRCxDQUFBO01BQUE7SUFDTDtFQUFDO0FBQUEsRUF2R3lCdUIsTUFBTSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFDN0IsSUFBTXBFLElBQUk7RUFDYixTQUFBQSxLQUFZYixNQUFNLEVBQUU7SUFBQTdCLGVBQUEsT0FBQTBDLElBQUE7SUFDaEIsSUFBSSxDQUFDYixNQUFNLEdBQUdBLE1BQU07SUFDcEIsSUFBSSxDQUFDc0gsSUFBSSxHQUFHLENBQUM7RUFDakI7RUFBQyxPQUFBNUksWUFBQSxDQUFBbUMsSUFBQTtJQUFBbEMsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQWlFLEdBQUdBLENBQUEsRUFBRztNQUNGLElBQUksQ0FBQ3lFLElBQUksSUFBSSxDQUFDO0lBQ2xCO0VBQUM7SUFBQTNJLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUE4QixNQUFNQSxDQUFBLEVBQUc7TUFDTCxPQUFPLElBQUksQ0FBQzRHLElBQUksSUFBSSxJQUFJLENBQUN0SCxNQUFNO0lBQ25DO0VBQUM7QUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEwsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBc0c7QUFDdEc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTtBQUNyQyxpQkFBaUIsdUdBQWE7QUFDOUIsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUlnRDtBQUN4RSxPQUFPLGlFQUFlLHNGQUFPLElBQUksc0ZBQU8sVUFBVSxzRkFBTyxtQkFBbUIsRUFBQzs7Ozs7OztVQ3hCN0U7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdELEU7Ozs7O1dDTkEsbUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTRCO0FBQ3dCO0FBQ2hCO0FBRXBDLElBQU1qQyxLQUFLLEdBQUcsSUFBSWtILG1EQUFNLENBQUMsQ0FBQztBQUMxQixJQUFNakgsUUFBUSxHQUFHLElBQUkwSCxxREFBUSxDQUFDLENBQUM7QUFFL0IsSUFBTTZCLGVBQWUsR0FBR2xKLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLHFCQUFxQixDQUFDO0FBQ3JFLElBQU1rSixlQUFlLEdBQUduSixRQUFRLENBQUNDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQztBQUVyRSxTQUFTbUosWUFBWUEsQ0FBQSxFQUFHO0VBQ3BCMUosS0FBSyxDQUFDaUIsU0FBUyxDQUFDUyxVQUFVLENBQUMscUJBQXFCLENBQUM7RUFDakR6QixRQUFRLENBQUNnQixTQUFTLENBQUNTLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQztFQUVwRDFCLEtBQUssQ0FBQ21CLFVBQVUsQ0FBQyxDQUFDO0VBQ2xCbkIsS0FBSyxDQUFDaUIsU0FBUyxDQUFDRyxXQUFXLENBQUMscUJBQXFCLENBQUM7RUFFbER1SSxHQUFHLENBQUNoSSxnQkFBZ0IsQ0FBQzZILGVBQWUsRUFBRXhKLEtBQUssQ0FBQztFQUM1QzJKLEdBQUcsQ0FBQ2hJLGdCQUFnQixDQUFDOEgsZUFBZSxFQUFFeEosUUFBUSxDQUFDO0FBQ25EO0FBRUEsU0FBUzJKLGdCQUFnQkEsQ0FBQ0MsS0FBSyxFQUFFO0VBQzdCQyxRQUFRLENBQUNELEtBQUssQ0FBQ0UsYUFBYSxDQUFDO0FBQ2pDO0FBQ0EsU0FBU0MsbUJBQW1CQSxDQUFBLEVBQUc7RUFDM0IxSixRQUFRLENBQUNvRyxnQkFBZ0IsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDeEUsT0FBTyxDQUFDLFVBQUNzRSxJQUFJLEVBQUs7SUFDdkVBLElBQUksQ0FBQ3lELG1CQUFtQixDQUFDLE9BQU8sRUFBRUwsZ0JBQWdCLENBQUM7SUFDbkRwRCxJQUFJLENBQUN4RixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU0SSxnQkFBZ0IsQ0FBQztFQUNwRCxDQUFDLENBQUM7QUFDTjtBQUVBLFNBQVN6SixzQkFBc0JBLENBQUEsRUFBRztFQUM5QkcsUUFBUSxDQUNIb0csZ0JBQWdCLENBQUMsNkJBQTZCLENBQUMsQ0FDL0N4RSxPQUFPLENBQUMsVUFBQ3NFLElBQUk7SUFBQSxPQUFLQSxJQUFJLENBQUN5RCxtQkFBbUIsQ0FBQyxPQUFPLEVBQUVMLGdCQUFnQixDQUFDO0VBQUEsRUFBQztBQUMvRTtBQUVBLFNBQVNFLFFBQVFBLENBQUN0RCxJQUFJLEVBQUU7RUFDcEIsSUFBTTBELFNBQVMsR0FBRzVKLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGlCQUFpQixDQUFDO0VBRTNENEosV0FBVyxDQUFDM0QsSUFBSSxDQUFDO0VBQ2pCLElBQUl2RyxRQUFRLENBQUNnQixTQUFTLENBQUMyRSxlQUFlLENBQUMsQ0FBQyxFQUFFO0lBQ3RDK0QsR0FBRyxDQUFDL0gsZUFBZSxDQUFDLENBQUM7SUFDckJzSSxTQUFTLENBQUNFLFdBQVcsR0FBRyxVQUFVO0lBQ2xDakssc0JBQXNCLENBQUMsQ0FBQztJQUN4QjtFQUNKO0VBRUFrSyxjQUFjLENBQUMsQ0FBQztFQUNoQixJQUFJckssS0FBSyxDQUFDaUIsU0FBUyxDQUFDMkUsZUFBZSxDQUFDLENBQUMsRUFBRTtJQUNuQytELEdBQUcsQ0FBQy9ILGVBQWUsQ0FBQyxDQUFDO0lBQ3JCc0ksU0FBUyxDQUFDRSxXQUFXLEdBQUcsZUFBZTtJQUN2Q25LLFFBQVEsQ0FBQ2dCLFNBQVMsQ0FBQ0csV0FBVyxDQUFDLHFCQUFxQixDQUFDO0lBQ3JEakIsc0JBQXNCLENBQUMsQ0FBQztJQUN4QjtFQUNKO0FBQ0o7QUFFQSxTQUFTRCxTQUFTQSxDQUFBLEVBQUc7RUFDakJDLHNCQUFzQixDQUFDLENBQUM7RUFFeEJGLFFBQVEsQ0FBQ2dCLFNBQVMsR0FBRyxJQUFJMEcscURBQVEsQ0FBQyxDQUFDLENBQUMxRyxTQUFTO0VBQzdDaEIsUUFBUSxDQUFDNkgsZUFBZSxDQUFDd0MsS0FBSyxDQUFDLENBQUM7RUFDaENySyxRQUFRLENBQUMrSCxZQUFZLEdBQUcsRUFBRTtFQUMxQi9ILFFBQVEsQ0FBQ2dJLGVBQWUsR0FBRyxFQUFFO0VBQzdCaEksUUFBUSxDQUFDK0QsV0FBVyxHQUFHLElBQUk7RUFFM0IvRCxRQUFRLENBQUNrQixVQUFVLENBQUMsQ0FBQztFQUNyQjZJLG1CQUFtQixDQUFDLENBQUM7QUFDekI7QUFFQSxTQUFTSyxjQUFjQSxDQUFBLEVBQUc7RUFDdEIsSUFBQUUsZ0JBQUEsR0FBdUJ0SyxRQUFRLENBQUNvSSxNQUFNLENBQUMsQ0FBQztJQUFBbUMsaUJBQUEsR0FBQTdHLGNBQUEsQ0FBQTRHLGdCQUFBO0lBQWpDRSxLQUFLLEdBQUFELGlCQUFBO0lBQUVFLEtBQUssR0FBQUYsaUJBQUE7RUFDbkIsSUFBTUcsWUFBWSxHQUFHckssUUFBUSxDQUFDQyxhQUFhLHVDQUFBbUUsTUFBQSxDQUNGK0YsS0FBSyxtQkFBQS9GLE1BQUEsQ0FBY2dHLEtBQUssUUFDakUsQ0FBQztFQUNELElBQU1qQyxNQUFNLEdBQUd6SSxLQUFLLENBQUNpQixTQUFTLENBQUMwRCxhQUFhLENBQUMsQ0FBQzhGLEtBQUssRUFBRUMsS0FBSyxDQUFDLENBQUM7RUFDNUQsSUFBTWhDLE9BQU8sR0FBR0QsTUFBTSxJQUFJekksS0FBSyxDQUFDaUIsU0FBUyxDQUFDOEUsYUFBYSxDQUFDLENBQUMwRSxLQUFLLEVBQUVDLEtBQUssQ0FBQyxDQUFDO0VBRXZFLElBQUlqQyxNQUFNLEVBQUU7SUFDUmtDLFlBQVksQ0FBQ3RKLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLEtBQUssQ0FBQztFQUNyQyxDQUFDLE1BQU07SUFDSHFKLFlBQVksQ0FBQ3RKLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztFQUN0QztFQUVBckIsUUFBUSxDQUFDdUksbUJBQW1CLENBQUMsQ0FBQ2lDLEtBQUssRUFBRUMsS0FBSyxDQUFDLEVBQUVqQyxNQUFNLEVBQUVDLE9BQU8sQ0FBQztFQUM3RGlCLEdBQUcsQ0FBQ2hJLGdCQUFnQixDQUFDNkgsZUFBZSxFQUFFeEosS0FBSyxDQUFDO0FBQ2hEO0FBRUEsU0FBU21LLFdBQVdBLENBQUMzRCxJQUFJLEVBQUU7RUFDdkIsSUFBTXBELENBQUMsR0FBR3dILFFBQVEsQ0FBQ3BFLElBQUksQ0FBQ0MsT0FBTyxDQUFDckQsQ0FBQyxDQUFDO0VBQ2xDLElBQU1DLENBQUMsR0FBR3VILFFBQVEsQ0FBQ3BFLElBQUksQ0FBQ0MsT0FBTyxDQUFDcEQsQ0FBQyxDQUFDO0VBQ2xDLElBQU1vRixNQUFNLEdBQUd4SSxRQUFRLENBQUNnQixTQUFTLENBQUMwRCxhQUFhLENBQUMsQ0FBQ3ZCLENBQUMsRUFBRUMsQ0FBQyxDQUFDLENBQUM7RUFFdkQsSUFBSW9GLE1BQU0sS0FBSyxJQUFJLEVBQUU7RUFFckIsSUFBSUEsTUFBTSxFQUFFO0lBQ1JqQyxJQUFJLENBQUNuRixTQUFTLENBQUNDLEdBQUcsQ0FBQyxLQUFLLENBQUM7RUFDN0IsQ0FBQyxNQUFNO0lBQ0hrRixJQUFJLENBQUNuRixTQUFTLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUM7RUFDOUI7RUFFQXFJLEdBQUcsQ0FBQ2hJLGdCQUFnQixDQUFDOEgsZUFBZSxFQUFFeEosUUFBUSxDQUFDO0FBQ25EO0FBRUEsSUFBTTBKLEdBQUcsR0FBRyxJQUFJNUosNkNBQUcsQ0FBQ0MsS0FBSyxFQUFFQyxRQUFRLEVBQUVDLFNBQVMsRUFBRUMsc0JBQXNCLENBQUM7QUFDdkV1SixZQUFZLENBQUMsQ0FBQztBQUNkQyxHQUFHLENBQUM3SSxxQkFBcUIsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jbGFzc2VzL2RvbS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NsYXNzZXMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY2xhc3Nlcy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jbGFzc2VzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJlYmFzK05ldWUmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XHJcbiAgICAtLXByaW1hcnlDb2xvcjogaHNsKDIxMSwgNTMlLCAxNyUpO1xyXG4gICAgLS1zZWNvbmRhcnlDb2xvcjogaHNsKDIxMSwgNTMlLCAyNyUpO1xyXG4gICAgLS1saWdodENvbG9yOiBoc2woMjExLCA1MyUsIDM3JSk7XHJcbiAgICAtLXllbGxvd0NvbG9yOiBoc2woNDUsIDkzJSwgNzMlKTtcclxuICAgIC0td2hpdGVDb2xvcjogaHNsKDAsIDAlLCA4OCUpO1xyXG4gICAgLS1zaGlwQ29sb3I6IGhzbCgyNCwgMiUsIDQxJSk7XHJcbiAgICAtLWhpdENvbG9yOiAjZTYzOTQ2O1xyXG59XHJcblxyXG4qIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDAuNXJlbTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkJlYmFzIE5ldWVcIiwgc3lzdGVtLXVpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeUNvbG9yKTtcclxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZUNvbG9yKTtcclxufVxyXG5cclxuLnRpdGxlLWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDEwdmg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgICBmb250LXNpemU6IDNyZW07XHJcbn1cclxuXHJcbnAge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XHJcbn1cclxuXHJcbi5nYW1lLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDkwdmg7XHJcbn1cclxuXHJcbi5wbGF5ZXItMS1kaXYsXHJcbi5wbGF5ZXItMi1kaXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMXJlbTtcclxufVxyXG5cclxuLnBsYXllci0xLXNoaXAtbGlzdCxcclxuLnBsYXllci0yLXNoaXAtbGlzdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG59XHJcblxyXG4ucGxheWVyLTEtZ2FtZWJvYXJkLWRpdixcclxuLnBsYXllci0yLWdhbWVib2FyZC1kaXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ucGxheWVyLTEtZ2FtZWJvYXJkLFxyXG4ucGxheWVyLTItZ2FtZWJvYXJkIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgM3Z3KTtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAzdncpO1xyXG4gICAgcGFkZGluZzogNHB4O1xyXG4gICAgZ2FwOiAzcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnlDb2xvcik7XHJcbn1cclxuXHJcbi5jZWxsIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByaW1hcnlDb2xvcik7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnlDb2xvcik7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjJyZW07XHJcbiAgICB3aWR0aDogM3Z3O1xyXG4gICAgaGVpZ2h0OiAzdnc7XHJcbn1cclxuXHJcbi5wbGF5ZXItMi1nYW1lYm9hcmQgPiAuY2VsbDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodENvbG9yKTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmhpdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaXRDb2xvcikgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLm1pc3Mge1xyXG4gICAgb3BhY2l0eTogMC4zO1xyXG59XHJcblxyXG4uZ2FtZS1idXR0b25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDFyZW07XHJcbn1cclxuXHJcbi5uZXctZ2FtZS1idXR0b24sXHJcbi5zdGFydC1idXR0b24sXHJcbi5yYW5kb21pemUtYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxcmVtIDByZW07XHJcbiAgICB3aWR0aDogOHJlbTtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG4uc3RhcnQtYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgxMTMsIDU1JSwgNDIlKTtcclxufVxyXG5cclxuLnJhbmRvbWl6ZS1idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM5NjdlNjtcclxufVxyXG5cclxuLmdhbWUtb3Zlci1zY3JlZW4ge1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5oaWRkZW4ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmludmlzaWJsZSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbi5uZXctZ2FtZS1idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGl0Q29sb3IpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ucGxheWVyLTEtc2hpcC1saXN0LFxyXG4ucGxheWVyLTItc2hpcC1saXN0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnNoaXAtZGl2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDAuMnJlbTtcclxufVxyXG5cclxuLnNoaXAtc2VnbWVudCB7XHJcbiAgICB3aWR0aDogMXJlbTtcclxuICAgIGhlaWdodDogMXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoaXBDb2xvcik7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjFyZW07XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtJQUNJLGtDQUFrQztJQUNsQyxvQ0FBb0M7SUFDcEMsZ0NBQWdDO0lBQ2hDLGdDQUFnQztJQUNoQyw2QkFBNkI7SUFDN0IsNkJBQTZCO0lBQzdCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLG9DQUFvQztJQUNwQyxxQ0FBcUM7SUFDckMsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBOztJQUVJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0FBQzNCOztBQUVBOztJQUVJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsbUNBQW1DO0lBQ25DLHNDQUFzQztJQUN0QyxZQUFZO0lBQ1osUUFBUTtJQUNSLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLHFDQUFxQztJQUNyQyx1Q0FBdUM7SUFDdkMscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSw0Q0FBNEM7SUFDNUMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBOzs7SUFHSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxZQUFZO0lBQ1osYUFBYTs7SUFFYixvQ0FBb0M7O0lBRXBDLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLFlBQVk7QUFDaEI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtDQUFrQztJQUNsQyxxQkFBcUI7QUFDekJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmViYXMrTmV1ZSZkaXNwbGF5PXN3YXBcXFwiKTtcXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAgIC0tcHJpbWFyeUNvbG9yOiBoc2woMjExLCA1MyUsIDE3JSk7XFxyXFxuICAgIC0tc2Vjb25kYXJ5Q29sb3I6IGhzbCgyMTEsIDUzJSwgMjclKTtcXHJcXG4gICAgLS1saWdodENvbG9yOiBoc2woMjExLCA1MyUsIDM3JSk7XFxyXFxuICAgIC0teWVsbG93Q29sb3I6IGhzbCg0NSwgOTMlLCA3MyUpO1xcclxcbiAgICAtLXdoaXRlQ29sb3I6IGhzbCgwLCAwJSwgODglKTtcXHJcXG4gICAgLS1zaGlwQ29sb3I6IGhzbCgyNCwgMiUsIDQxJSk7XFxyXFxuICAgIC0taGl0Q29sb3I6ICNlNjM5NDY7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDAuNXJlbTtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiQmViYXMgTmV1ZVxcXCIsIHN5c3RlbS11aTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeUNvbG9yKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlQ29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUtY29udGFpbmVyIHtcXHJcXG4gICAgaGVpZ2h0OiAxMHZoO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5oMiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxucCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5nYW1lLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIGhlaWdodDogOTB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLnBsYXllci0xLWRpdixcXHJcXG4ucGxheWVyLTItZGl2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucGxheWVyLTEtc2hpcC1saXN0LFxcclxcbi5wbGF5ZXItMi1zaGlwLWxpc3Qge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuLnBsYXllci0xLWdhbWVib2FyZC1kaXYsXFxyXFxuLnBsYXllci0yLWdhbWVib2FyZC1kaXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wbGF5ZXItMS1nYW1lYm9hcmQsXFxyXFxuLnBsYXllci0yLWdhbWVib2FyZCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAzdncpO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgM3Z3KTtcXHJcXG4gICAgcGFkZGluZzogNHB4O1xcclxcbiAgICBnYXA6IDNweDtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tc2Vjb25kYXJ5Q29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbCB7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByaW1hcnlDb2xvcik7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeUNvbG9yKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xcclxcbiAgICB3aWR0aDogM3Z3O1xcclxcbiAgICBoZWlnaHQ6IDN2dztcXHJcXG59XFxyXFxuXFxyXFxuLnBsYXllci0yLWdhbWVib2FyZCA+IC5jZWxsOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRDb2xvcik7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaGl0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGl0Q29sb3IpICFpbXBvcnRhbnQ7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1pc3Mge1xcclxcbiAgICBvcGFjaXR5OiAwLjM7XFxyXFxufVxcclxcblxcclxcbi5nYW1lLWJ1dHRvbnMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5uZXctZ2FtZS1idXR0b24sXFxyXFxuLnN0YXJ0LWJ1dHRvbixcXHJcXG4ucmFuZG9taXplLWJ1dHRvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtIDByZW07XFxyXFxuICAgIHdpZHRoOiA4cmVtO1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXJ0LWJ1dHRvbiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgxMTMsIDU1JSwgNDIlKTtcXHJcXG59XFxyXFxuXFxyXFxuLnJhbmRvbWl6ZS1idXR0b24ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzk2N2U2O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZS1vdmVyLXNjcmVlbiB7XFxyXFxuICAgIHotaW5kZXg6IDEwO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcblxcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZGVuIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmludmlzaWJsZSB7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3LWdhbWUtYnV0dG9uIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGl0Q29sb3IpO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5wbGF5ZXItMS1zaGlwLWxpc3QsXFxyXFxuLnBsYXllci0yLXNoaXAtbGlzdCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC1kaXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDAuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtc2VnbWVudCB7XFxyXFxuICAgIHdpZHRoOiAxcmVtO1xcclxcbiAgICBoZWlnaHQ6IDFyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoaXBDb2xvcik7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMXJlbTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBjbGFzcyBET00ge1xyXG4gICAgY29uc3RydWN0b3IoaHVtYW4sIGNvbXB1dGVyLCBzdGFydEdhbWUsIHJlbW92ZVBsYXllcjJMaXN0ZW5lcnMpIHtcclxuICAgICAgICB0aGlzLmh1bWFuID0gaHVtYW47XHJcbiAgICAgICAgdGhpcy5jb21wdXRlciA9IGNvbXB1dGVyO1xyXG4gICAgICAgIHRoaXMuc3RhcnRHYW1lID0gc3RhcnRHYW1lO1xyXG4gICAgICAgIHRoaXMucmVtb3ZlUGxheWVyMkxpc3RlbmVycyA9IHJlbW92ZVBsYXllcjJMaXN0ZW5lcnM7XHJcblxyXG4gICAgICAgIHRoaXMubmV3R2FtZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3LWdhbWUtYnV0dG9uXCIpO1xyXG4gICAgICAgIHRoaXMuc3RhcnRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0YXJ0LWJ1dHRvblwiKTtcclxuICAgICAgICB0aGlzLmdhbWVPdmVyU2NyZWVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lLW92ZXItc2NyZWVuXCIpO1xyXG4gICAgICAgIHRoaXMucmFuZG9taXplQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yYW5kb21pemUtYnV0dG9uXCIpO1xyXG4gICAgfVxyXG4gICAgYWRkUGFnZUV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgICAgIHRoaXMucmFuZG9taXplQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaHVtYW4uZ2FtZWJvYXJkLmNsZWFyU2hpcHMoXCIucGxheWVyLTEtZ2FtZWJvYXJkXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmh1bWFuLnBsYWNlU2hpcHMoKTtcclxuICAgICAgICAgICAgdGhpcy5odW1hbi5nYW1lYm9hcmQucmVuZGVyU2hpcHMoXCIucGxheWVyLTEtZ2FtZWJvYXJkXCIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucmFuZG9taXplQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJpbnZpc2libGVcIik7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRCdXR0b24uY2xhc3NMaXN0LmFkZChcImludmlzaWJsZVwiKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRHYW1lKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVQbGF5ZXIyTGlzdGVuZXJzKCk7XHJcblxyXG4gICAgICAgIHRoaXMubmV3R2FtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgdGhpcy5yYW5kb21pemVCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImludmlzaWJsZVwiKTtcclxuICAgICAgICAgICAgdGhpcy5zdGFydEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiaW52aXNpYmxlXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVPdmVyU2NyZWVuLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmh1bWFuLmdhbWVib2FyZC5jbGVhclNoaXBzKFwiLnBsYXllci0xLWdhbWVib2FyZFwiKTtcclxuICAgICAgICAgICAgdGhpcy5jb21wdXRlci5nYW1lYm9hcmQuY2xlYXJTaGlwcyhcIi5wbGF5ZXItMi1nYW1lYm9hcmRcIik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmh1bWFuLnBsYWNlU2hpcHMoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuaHVtYW4uZ2FtZWJvYXJkLnJlbmRlclNoaXBzKFwiLnBsYXllci0xLWdhbWVib2FyZFwiKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY29tcHV0ZXIuZ2FtZWJvYXJkLnJlbmRlckdyaWQoXCIucGxheWVyLTItZ2FtZWJvYXJkXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbXB1dGVyLmdhbWVib2FyZC5yZW5kZXJTaGlwcyhcIi5wbGF5ZXItMi1nYW1lYm9hcmRcIik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZVBsYXllcjJMaXN0ZW5lcnMoKTtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJTaGlwU3RhdHVzKFxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXItMS1zaGlwLWxpc3RcIiksXHJcbiAgICAgICAgICAgICAgICB0aGlzLmh1bWFuXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyU2hpcFN0YXR1cyhcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLTItc2hpcC1saXN0XCIpLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb21wdXRlclxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc3BsYXlHYW1lT3ZlcigpIHtcclxuICAgICAgICB0aGlzLmdhbWVPdmVyU2NyZWVuLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyU2hpcFN0YXR1cyhjb250YWluZXIsIHBsYXllcikge1xyXG4gICAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIGlmIChwbGF5ZXIuZ2FtZWJvYXJkLnNoaXBzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgcGxheWVyLmdhbWVib2FyZC5zaGlwcy5mb3JFYWNoKCh7IHNoaXAgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2hpcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICBzaGlwRGl2LmNsYXNzTGlzdC5hZGQoXCJzaGlwLWRpdlwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBzZWdtZW50LmNsYXNzTGlzdC5hZGQoXCJzaGlwLXNlZ21lbnRcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNlZ21lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNoaXAuaXNTdW5rKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VnbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNjZjRmNTlmZlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2hpcERpdi5hcHBlbmRDaGlsZChzZWdtZW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc2hpcERpdik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHBsYXllci5zaGlwTGVuZ3Rocy5mb3JFYWNoKChsZW5ndGgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNoaXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgc2hpcERpdi5jbGFzc0xpc3QuYWRkKFwic2hpcC1kaXZcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlZ21lbnQuY2xhc3NMaXN0LmFkZChcInNoaXAtc2VnbWVudFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBzaGlwRGl2LmFwcGVuZENoaWxkKHNlZ21lbnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzaGlwRGl2KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi9zaGlwLmpzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZWJvYXJkIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuc2l6ZSA9IFsxMCwgMTBdO1xyXG4gICAgICAgIHRoaXMuc2hpcHMgPSBbXTtcclxuICAgICAgICB0aGlzLm1pc3NlZFNob3RDb29yZGluYXRlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuc2hpcENvdW50ZXIgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGlzV2l0aGluQm91bmRzKHgsIHkpIHtcclxuICAgICAgICByZXR1cm4geCA+PSAwICYmIHkgPj0gMCAmJiB4IDwgdGhpcy5zaXplWzBdICYmIHkgPCB0aGlzLnNpemVbMV07XHJcbiAgICB9XHJcblxyXG4gICAgaXNPY2N1cGllZCh4LCB5KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2hpcHMuc29tZSgoeyBjb29yZGluYXRlcyB9KSA9PlxyXG4gICAgICAgICAgICBjb29yZGluYXRlcy5zb21lKChbY3gsIGN5XSkgPT4gY3ggPT09IHggJiYgY3kgPT09IHkpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwbGFjZVNoaXAoc3RhcnRDb29yZCwgbGVuZ3RoLCBvcmllbnRhdGlvbiA9IFwiaG9yaXpvbnRhbFwiKSB7XHJcbiAgICAgICAgY29uc3QgW3N0YXJ0WCwgc3RhcnRZXSA9IHN0YXJ0Q29vcmQ7XHJcbiAgICAgICAgY29uc3QgY29vcmRpbmF0ZXMgPSBbXTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCB4ID0gb3JpZW50YXRpb24gPT09IFwiaG9yaXpvbnRhbFwiID8gc3RhcnRYICsgaSA6IHN0YXJ0WDtcclxuICAgICAgICAgICAgY29uc3QgeSA9IG9yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCIgPyBzdGFydFkgKyBpIDogc3RhcnRZO1xyXG5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzV2l0aGluQm91bmRzKHgsIHkpIHx8IHRoaXMuaXNPY2N1cGllZCh4LCB5KSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBzaGlwIHBsYWNlbWVudFwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29vcmRpbmF0ZXMucHVzaChbeCwgeV0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc2hpcCA9IG5ldyBTaGlwKGxlbmd0aCk7XHJcbiAgICAgICAgY29uc3QgaGl0Q29vcmRpbmF0ZXMgPSBbXTtcclxuICAgICAgICBjb25zdCBzaGlwSWQgPSBgc2hpcC0ke3RoaXMuc2hpcENvdW50ZXIrK31gO1xyXG4gICAgICAgIHRoaXMuc2hpcHMucHVzaCh7IHNoaXAsIGNvb3JkaW5hdGVzLCBoaXRDb29yZGluYXRlcywgc2hpcElkIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlY2VpdmVBdHRhY2soW3gsIHldKSB7XHJcbiAgICAgICAgbGV0IGhpdCA9IGZhbHNlO1xyXG4gICAgICAgIGZvciAoY29uc3Qgc2hpcERhdGEgb2YgdGhpcy5zaGlwcykge1xyXG4gICAgICAgICAgICBjb25zdCB7IHNoaXAsIGNvb3JkaW5hdGVzLCBoaXRDb29yZGluYXRlcyB9ID0gc2hpcERhdGE7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgW2N4LCBjeV0gb2YgY29vcmRpbmF0ZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjeCA9PT0geCAmJiBjeSA9PT0geSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNoaXAuaGl0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaGl0Q29vcmRpbmF0ZXMucHVzaChbeCwgeV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGhpdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGhpdCkgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWhpdCkge1xyXG4gICAgICAgICAgICB0aGlzLm1pc3NlZFNob3RDb29yZGluYXRlcy5wdXNoKFt4LCB5XSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gaGl0O1xyXG4gICAgfVxyXG5cclxuICAgIGFyZUFsbFNoaXBzU3VuaygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zaGlwcy5ldmVyeSgoeyBzaGlwIH0pID0+IHNoaXAuaXNTdW5rKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHdhc1NoaXBTdW5rQXQoW3gsIHldKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCB7IHNoaXAsIGNvb3JkaW5hdGVzIH0gb2YgdGhpcy5zaGlwcykge1xyXG4gICAgICAgICAgICBpZiAoY29vcmRpbmF0ZXMuc29tZSgoW2N4LCBjeV0pID0+IGN4ID09PSB4ICYmIGN5ID09PSB5KSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNoaXAuaXNTdW5rKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckdyaWQoY29udGFpbmVyU2VsZWN0b3IpIHtcclxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lclNlbGVjdG9yKTtcclxuICAgICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMuc2l6ZVsxXTsgeSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5zaXplWzBdOyB4KyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiY2VsbFwiKTtcclxuICAgICAgICAgICAgICAgIGNlbGwuZGF0YXNldC54ID0geDtcclxuICAgICAgICAgICAgICAgIGNlbGwuZGF0YXNldC55ID0geTtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjZWxsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJTaGlwcyhjb250YWluZXJTZWxlY3Rvcikge1xyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGFpbmVyU2VsZWN0b3IpO1xyXG4gICAgICAgIGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiLmNlbGxcIikuZm9yRWFjaCgoY2VsbCkgPT4ge1xyXG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJzaGlwXCIpO1xyXG4gICAgICAgICAgICBjZWxsLnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtc2hpcC1pZFwiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgY29sb3JzID0gW1xyXG4gICAgICAgICAgICBcIiNiZWJlYmVmZlwiLFxyXG4gICAgICAgICAgICBcIiM2MzRiNGJmZlwiLFxyXG4gICAgICAgICAgICBcIiM5YjkwNGFmZlwiLFxyXG4gICAgICAgICAgICBcIiM2MDYyNjhmZlwiLFxyXG4gICAgICAgICAgICBcIiM0YTRhOGFmZlwiLFxyXG4gICAgICAgICAgICBcIiM1Y2E1N2FmZlwiLFxyXG4gICAgICAgICAgICBcIiMzYjk0YTNmZlwiLFxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIHRoaXMuc2hpcHMuZm9yRWFjaCgoeyBjb29yZGluYXRlcywgc2hpcElkIH0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gY29sb3JzW2luZGV4ICUgY29sb3JzLmxlbmd0aF07XHJcblxyXG4gICAgICAgICAgICBjb29yZGluYXRlcy5mb3JFYWNoKChbeCwgeV0pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcihcclxuICAgICAgICAgICAgICAgICAgICBgLmNlbGxbZGF0YS14PVwiJHt4fVwiXVtkYXRhLXk9XCIke3l9XCJdYFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGlmIChjZWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuZGF0YXNldC5zaGlwSWQgPSBzaGlwSWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyU2hpcHMoY29udGFpbmVyU2VsZWN0b3IpIHtcclxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lclNlbGVjdG9yKTtcclxuICAgICAgICBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcIi5jZWxsXCIpLmZvckVhY2goKGNlbGwpID0+IHtcclxuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwic2hpcFwiLCBcImhpdFwiLCBcIm1pc3NcIik7XHJcbiAgICAgICAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJcIjtcclxuICAgICAgICAgICAgY2VsbC5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLXNoaXAtaWRcIik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2hpcHMgPSBbXTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tIFwiLi9nYW1lYm9hcmQuanNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XHJcbiAgICAgICAgdGhpcy5zaGlwTGVuZ3RocyA9IFs1LCA0LCA0LCAzLCAzLCAyLCAyXTtcclxuICAgIH1cclxuXHJcbiAgICBwbGFjZVNoaXBzKCkge1xyXG4gICAgICAgIGZvciAoY29uc3QgbGVuZ3RoIG9mIHRoaXMuc2hpcExlbmd0aHMpIHtcclxuICAgICAgICAgICAgbGV0IHBsYWNlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB3aGlsZSAoIXBsYWNlZCkge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBNYXRoLnJhbmRvbSgpIDwgMC41ID8gXCJob3Jpem9udGFsXCIgOiBcInZlcnRpY2FsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVib2FyZC5wbGFjZVNoaXAocG9zaXRpb25bMF0sIGxlbmd0aCwgcG9zaXRpb25bMV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIHt9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyU2hpcFN0YXR1cyhjb250YWluZXIpIHtcclxuICAgICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBsZW5ndGggb2YgdGhpcy5zaGlwTGVuZ3Rocykge1xyXG4gICAgICAgICAgICBjb25zdCBzaGlwRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNoaXBTZWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgIHNoaXBEaXYuYXBwZW5kKHNoaXBTZWdtZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kKHNoaXBEaXYpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbXB1dGVyIGV4dGVuZHMgUGxheWVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5wcmV2aW91c0F0dGFja3MgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgdGhpcy5wcmV2aW91c0hpdHMgPSBbXTtcclxuICAgICAgICB0aGlzLnBvc3NpYmxlVGFyZ2V0cyA9IFtdO1xyXG4gICAgICAgIHRoaXMub3JpZW50YXRpb24gPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGdlbmVyYXRlU2hpcFBvc2l0aW9uKCkge1xyXG4gICAgICAgIGxldCB4ID0gTWF0aC5mbG9vcigxMCAqIE1hdGgucmFuZG9tKCkpO1xyXG4gICAgICAgIGxldCB5ID0gTWF0aC5mbG9vcigxMCAqIE1hdGgucmFuZG9tKCkpO1xyXG4gICAgICAgIGxldCBvcmllbnRhdGlvbiA9IE1hdGgucmFuZG9tKCkgPCAwLjUgPyBcImhvcml6b250YWxcIiA6IFwidmVydGljYWxcIjtcclxuXHJcbiAgICAgICAgcmV0dXJuIFtbeCwgeV0sIG9yaWVudGF0aW9uXTtcclxuICAgIH1cclxuXHJcbiAgICBwbGFjZVNoaXBzKCkge1xyXG4gICAgICAgIGZvciAoY29uc3QgbGVuZ3RoIG9mIHRoaXMuc2hpcExlbmd0aHMpIHtcclxuICAgICAgICAgICAgbGV0IHBsYWNlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB3aGlsZSAoIXBsYWNlZCkge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMuZ2VuZXJhdGVTaGlwUG9zaXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVib2FyZC5wbGFjZVNoaXAocG9zaXRpb25bMF0sIGxlbmd0aCwgcG9zaXRpb25bMV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIHt9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXR0YWNrKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnBvc3NpYmxlVGFyZ2V0cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBvc3NpYmxlVGFyZ2V0cy5wb3AoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBrZXksIHgsIHk7XHJcblxyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuICAgICAgICAgICAgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuICAgICAgICAgICAga2V5ID0gYCR7eH0sJHt5fWA7XHJcbiAgICAgICAgfSB3aGlsZSAodGhpcy5wcmV2aW91c0F0dGFja3MuaGFzKGtleSkpO1xyXG5cclxuICAgICAgICB0aGlzLnByZXZpb3VzQXR0YWNrcy5hZGQoa2V5KTtcclxuICAgICAgICByZXR1cm4gW3gsIHldO1xyXG4gICAgfVxyXG5cclxuICAgIHByb2Nlc3NBdHRhY2tSZXN1bHQoW3gsIHldLCB3YXNIaXQsIHdhc1N1bmspIHtcclxuICAgICAgICBpZiAod2FzSGl0KSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJldmlvdXNIaXRzLnB1c2goW3gsIHldKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXZpb3VzSGl0cy5sZW5ndGggPj0gMikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgW2ZpcnN0LCBzZWNvbmRdID0gdGhpcy5wcmV2aW91c0hpdHM7XHJcbiAgICAgICAgICAgICAgICBpZiAoZmlyc3RbMF0gPT09IHNlY29uZFswXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3JpZW50YXRpb24gPSBcInZlcnRpY2FsXCI7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZpcnN0WzFdID09PSBzZWNvbmRbMV0pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9yaWVudGF0aW9uID0gXCJob3Jpem9udGFsXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghd2FzU3Vuaykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRBZGphY2VudFRhcmdldHMoeCwgeSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByZXZpb3VzSGl0cyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NzaWJsZVRhcmdldHMgPSBbXTtcclxuICAgICAgICAgICAgICAgIHRoaXMub3JpZW50YXRpb24gPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFkZEFkamFjZW50VGFyZ2V0cyh4LCB5KSB7XHJcbiAgICAgICAgbGV0IGRpcmVjdGlvbnM7XHJcbiAgICAgICAgaWYgKHRoaXMub3JpZW50YXRpb24gPT09IFwiaG9yaXpvbnRhbFwiKSB7XHJcbiAgICAgICAgICAgIGRpcmVjdGlvbnMgPSBbXHJcbiAgICAgICAgICAgICAgICBbMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbLTEsIDBdLFxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5vcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XHJcbiAgICAgICAgICAgIGRpcmVjdGlvbnMgPSBbXHJcbiAgICAgICAgICAgICAgICBbMCwgMV0sXHJcbiAgICAgICAgICAgICAgICBbMCwgLTFdLFxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRpcmVjdGlvbnMgPSBbXHJcbiAgICAgICAgICAgICAgICBbMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbLTEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDFdLFxyXG4gICAgICAgICAgICAgICAgWzAsIC0xXSxcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgW2R4LCBkeV0gb2YgZGlyZWN0aW9ucykge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdYID0geCArIGR4O1xyXG4gICAgICAgICAgICBjb25zdCBuZXdZID0geSArIGR5O1xyXG5cclxuICAgICAgICAgICAgaWYgKG5ld1ggPj0gMCAmJiBuZXdYIDwgMTAgJiYgbmV3WSA+PSAwICYmIG5ld1kgPCAxMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gYCR7bmV3WH0sJHtuZXdZfWA7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMucHJldmlvdXNBdHRhY2tzLmhhcyhrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NzaWJsZVRhcmdldHMucHVzaChbbmV3WCwgbmV3WV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJldmlvdXNBdHRhY2tzLmFkZChrZXkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBTaGlwIHtcclxuICAgIGNvbnN0cnVjdG9yKGxlbmd0aCkge1xyXG4gICAgICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xyXG4gICAgICAgIHRoaXMuaGl0cyA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgaGl0KCkge1xyXG4gICAgICAgIHRoaXMuaGl0cyArPSAxO1xyXG4gICAgfVxyXG5cclxuICAgIGlzU3VuaygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5oaXRzID49IHRoaXMubGVuZ3RoO1xyXG4gICAgfVxyXG59XHJcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlcy9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IHsgUGxheWVyLCBDb21wdXRlciB9IGZyb20gXCIuL2NsYXNzZXMvcGxheWVyXCI7XHJcbmltcG9ydCB7IERPTSB9IGZyb20gXCIuL2NsYXNzZXMvZG9tXCI7XHJcblxyXG5jb25zdCBodW1hbiA9IG5ldyBQbGF5ZXIoKTtcclxuY29uc3QgY29tcHV0ZXIgPSBuZXcgQ29tcHV0ZXIoKTtcclxuXHJcbmNvbnN0IHBsYXllcjFTaGlwTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLTEtc2hpcC1saXN0XCIpO1xyXG5jb25zdCBwbGF5ZXIyU2hpcExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci0yLXNoaXAtbGlzdFwiKTtcclxuXHJcbmZ1bmN0aW9uIGluaXRpYWxTZXR1cCgpIHtcclxuICAgIGh1bWFuLmdhbWVib2FyZC5yZW5kZXJHcmlkKFwiLnBsYXllci0xLWdhbWVib2FyZFwiKTtcclxuICAgIGNvbXB1dGVyLmdhbWVib2FyZC5yZW5kZXJHcmlkKFwiLnBsYXllci0yLWdhbWVib2FyZFwiKTtcclxuXHJcbiAgICBodW1hbi5wbGFjZVNoaXBzKCk7XHJcbiAgICBodW1hbi5nYW1lYm9hcmQucmVuZGVyU2hpcHMoXCIucGxheWVyLTEtZ2FtZWJvYXJkXCIpO1xyXG5cclxuICAgIGRvbS5yZW5kZXJTaGlwU3RhdHVzKHBsYXllcjFTaGlwTGlzdCwgaHVtYW4pO1xyXG4gICAgZG9tLnJlbmRlclNoaXBTdGF0dXMocGxheWVyMlNoaXBMaXN0LCBjb21wdXRlcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNlbGxDbGlja0hhbmRsZXIoZXZlbnQpIHtcclxuICAgIHBsYXlUdXJuKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG59XHJcbmZ1bmN0aW9uIGFkZFBsYXllcjJMaXN0ZW5lcnMoKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBsYXllci0yLWdhbWVib2FyZCA+IC5jZWxsXCIpLmZvckVhY2goKGNlbGwpID0+IHtcclxuICAgICAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjZWxsQ2xpY2tIYW5kbGVyKTtcclxuICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjZWxsQ2xpY2tIYW5kbGVyKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVQbGF5ZXIyTGlzdGVuZXJzKCkge1xyXG4gICAgZG9jdW1lbnRcclxuICAgICAgICAucXVlcnlTZWxlY3RvckFsbChcIi5wbGF5ZXItMi1nYW1lYm9hcmQgPiAuY2VsbFwiKVxyXG4gICAgICAgIC5mb3JFYWNoKChjZWxsKSA9PiBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjZWxsQ2xpY2tIYW5kbGVyKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBsYXlUdXJuKGNlbGwpIHtcclxuICAgIGNvbnN0IHdpbm5lck1zZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2lubmVyLW1lc3NhZ2VcIik7XHJcblxyXG4gICAgaHVtYW5BdHRhY2soY2VsbCk7XHJcbiAgICBpZiAoY29tcHV0ZXIuZ2FtZWJvYXJkLmFyZUFsbFNoaXBzU3VuaygpKSB7XHJcbiAgICAgICAgZG9tLmRpc3BsYXlHYW1lT3ZlcigpO1xyXG4gICAgICAgIHdpbm5lck1zZy50ZXh0Q29udGVudCA9IFwiWW91IHdvbiFcIjtcclxuICAgICAgICByZW1vdmVQbGF5ZXIyTGlzdGVuZXJzKCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXB1dGVyQXR0YWNrKCk7XHJcbiAgICBpZiAoaHVtYW4uZ2FtZWJvYXJkLmFyZUFsbFNoaXBzU3VuaygpKSB7XHJcbiAgICAgICAgZG9tLmRpc3BsYXlHYW1lT3ZlcigpO1xyXG4gICAgICAgIHdpbm5lck1zZy50ZXh0Q29udGVudCA9IFwiQ29tcHV0ZXIgV29uIVwiO1xyXG4gICAgICAgIGNvbXB1dGVyLmdhbWVib2FyZC5yZW5kZXJTaGlwcyhcIi5wbGF5ZXItMi1nYW1lYm9hcmRcIik7XHJcbiAgICAgICAgcmVtb3ZlUGxheWVyMkxpc3RlbmVycygpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc3RhcnRHYW1lKCkge1xyXG4gICAgcmVtb3ZlUGxheWVyMkxpc3RlbmVycygpO1xyXG5cclxuICAgIGNvbXB1dGVyLmdhbWVib2FyZCA9IG5ldyBDb21wdXRlcigpLmdhbWVib2FyZDtcclxuICAgIGNvbXB1dGVyLnByZXZpb3VzQXR0YWNrcy5jbGVhcigpO1xyXG4gICAgY29tcHV0ZXIucHJldmlvdXNIaXRzID0gW107XHJcbiAgICBjb21wdXRlci5wb3NzaWJsZVRhcmdldHMgPSBbXTtcclxuICAgIGNvbXB1dGVyLm9yaWVudGF0aW9uID0gbnVsbDtcclxuXHJcbiAgICBjb21wdXRlci5wbGFjZVNoaXBzKCk7XHJcbiAgICBhZGRQbGF5ZXIyTGlzdGVuZXJzKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbXB1dGVyQXR0YWNrKCkge1xyXG4gICAgY29uc3QgW2NvbXBYLCBjb21wWV0gPSBjb21wdXRlci5hdHRhY2soKTtcclxuICAgIGNvbnN0IGF0dGFja2VkQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgYC5wbGF5ZXItMS1nYW1lYm9hcmQgLmNlbGxbZGF0YS14PVwiJHtjb21wWH1cIl1bZGF0YS15PVwiJHtjb21wWX1cIl1gXHJcbiAgICApO1xyXG4gICAgY29uc3Qgd2FzSGl0ID0gaHVtYW4uZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soW2NvbXBYLCBjb21wWV0pO1xyXG4gICAgY29uc3Qgd2FzU3VuayA9IHdhc0hpdCAmJiBodW1hbi5nYW1lYm9hcmQud2FzU2hpcFN1bmtBdChbY29tcFgsIGNvbXBZXSk7XHJcblxyXG4gICAgaWYgKHdhc0hpdCkge1xyXG4gICAgICAgIGF0dGFja2VkQ2VsbC5jbGFzc0xpc3QuYWRkKFwiaGl0XCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBhdHRhY2tlZENlbGwuY2xhc3NMaXN0LmFkZChcIm1pc3NcIik7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcHV0ZXIucHJvY2Vzc0F0dGFja1Jlc3VsdChbY29tcFgsIGNvbXBZXSwgd2FzSGl0LCB3YXNTdW5rKTtcclxuICAgIGRvbS5yZW5kZXJTaGlwU3RhdHVzKHBsYXllcjFTaGlwTGlzdCwgaHVtYW4pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBodW1hbkF0dGFjayhjZWxsKSB7XHJcbiAgICBjb25zdCB4ID0gcGFyc2VJbnQoY2VsbC5kYXRhc2V0LngpO1xyXG4gICAgY29uc3QgeSA9IHBhcnNlSW50KGNlbGwuZGF0YXNldC55KTtcclxuICAgIGNvbnN0IHdhc0hpdCA9IGNvbXB1dGVyLmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKFt4LCB5XSk7XHJcblxyXG4gICAgaWYgKHdhc0hpdCA9PT0gbnVsbCkgcmV0dXJuO1xyXG5cclxuICAgIGlmICh3YXNIaXQpIHtcclxuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJoaXRcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm1pc3NcIik7XHJcbiAgICB9XHJcblxyXG4gICAgZG9tLnJlbmRlclNoaXBTdGF0dXMocGxheWVyMlNoaXBMaXN0LCBjb21wdXRlcik7XHJcbn1cclxuXHJcbmNvbnN0IGRvbSA9IG5ldyBET00oaHVtYW4sIGNvbXB1dGVyLCBzdGFydEdhbWUsIHJlbW92ZVBsYXllcjJMaXN0ZW5lcnMpO1xyXG5pbml0aWFsU2V0dXAoKTtcclxuZG9tLmFkZFBhZ2VFdmVudExpc3RlbmVycygpO1xyXG4iXSwibmFtZXMiOlsiRE9NIiwiaHVtYW4iLCJjb21wdXRlciIsInN0YXJ0R2FtZSIsInJlbW92ZVBsYXllcjJMaXN0ZW5lcnMiLCJfY2xhc3NDYWxsQ2hlY2siLCJuZXdHYW1lQnV0dG9uIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic3RhcnRCdXR0b24iLCJnYW1lT3ZlclNjcmVlbiIsInJhbmRvbWl6ZUJ1dHRvbiIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiYWRkUGFnZUV2ZW50TGlzdGVuZXJzIiwiX3RoaXMiLCJhZGRFdmVudExpc3RlbmVyIiwiZ2FtZWJvYXJkIiwiY2xlYXJTaGlwcyIsInBsYWNlU2hpcHMiLCJyZW5kZXJTaGlwcyIsImNsYXNzTGlzdCIsImFkZCIsImxvY2F0aW9uIiwicmVsb2FkIiwicmVtb3ZlIiwicmVuZGVyR3JpZCIsInJlbmRlclNoaXBTdGF0dXMiLCJkaXNwbGF5R2FtZU92ZXIiLCJjb250YWluZXIiLCJwbGF5ZXIiLCJpbm5lckhUTUwiLCJzaGlwcyIsImxlbmd0aCIsImZvckVhY2giLCJfcmVmIiwic2hpcCIsInNoaXBEaXYiLCJjcmVhdGVFbGVtZW50IiwiaSIsInNlZ21lbnQiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImlzU3VuayIsImFwcGVuZENoaWxkIiwic2hpcExlbmd0aHMiLCJTaGlwIiwiR2FtZWJvYXJkIiwic2l6ZSIsIm1pc3NlZFNob3RDb29yZGluYXRlcyIsInNoaXBDb3VudGVyIiwiaXNXaXRoaW5Cb3VuZHMiLCJ4IiwieSIsImlzT2NjdXBpZWQiLCJzb21lIiwiY29vcmRpbmF0ZXMiLCJfcmVmMiIsIl9yZWYzIiwiX3NsaWNlZFRvQXJyYXkiLCJjeCIsImN5IiwicGxhY2VTaGlwIiwic3RhcnRDb29yZCIsIm9yaWVudGF0aW9uIiwiYXJndW1lbnRzIiwidW5kZWZpbmVkIiwiX3N0YXJ0Q29vcmQiLCJzdGFydFgiLCJzdGFydFkiLCJFcnJvciIsInB1c2giLCJoaXRDb29yZGluYXRlcyIsInNoaXBJZCIsImNvbmNhdCIsInJlY2VpdmVBdHRhY2siLCJfcmVmNCIsIl9yZWY1IiwiaGl0IiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJfc3RlcCIsInMiLCJuIiwiZG9uZSIsInNoaXBEYXRhIiwiX2l0ZXJhdG9yMiIsIl9zdGVwMiIsIl9zdGVwMiR2YWx1ZSIsImVyciIsImUiLCJmIiwiYXJlQWxsU2hpcHNTdW5rIiwiZXZlcnkiLCJfcmVmNiIsIndhc1NoaXBTdW5rQXQiLCJfcmVmNyIsIl9yZWY4IiwiX2l0ZXJhdG9yMyIsIl9zdGVwMyIsIl9zdGVwMyR2YWx1ZSIsIl9yZWY5IiwiX3JlZjAiLCJjb250YWluZXJTZWxlY3RvciIsImNlbGwiLCJkYXRhc2V0IiwicXVlcnlTZWxlY3RvckFsbCIsInJlbW92ZUF0dHJpYnV0ZSIsImNvbG9ycyIsIl9yZWYxIiwiaW5kZXgiLCJjb2xvciIsIl9yZWYxMCIsIl9yZWYxMSIsIlBsYXllciIsInBsYWNlZCIsInBvc2l0aW9uIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiX3VudXNlZCIsInNoaXBTZWdtZW50IiwiYXBwZW5kIiwiQ29tcHV0ZXIiLCJfUGxheWVyIiwiX2NhbGxTdXBlciIsInByZXZpb3VzQXR0YWNrcyIsIlNldCIsInByZXZpb3VzSGl0cyIsInBvc3NpYmxlVGFyZ2V0cyIsIl9pbmhlcml0cyIsImdlbmVyYXRlU2hpcFBvc2l0aW9uIiwiX3VudXNlZDIiLCJhdHRhY2siLCJwb3AiLCJoYXMiLCJwcm9jZXNzQXR0YWNrUmVzdWx0Iiwid2FzSGl0Iiwid2FzU3VuayIsIl90aGlzJHByZXZpb3VzSGl0cyIsImZpcnN0Iiwic2Vjb25kIiwiYWRkQWRqYWNlbnRUYXJnZXRzIiwiZGlyZWN0aW9ucyIsIl9pdGVyYXRvcjQiLCJfc3RlcDQiLCJfc3RlcDQkdmFsdWUiLCJkeCIsImR5IiwibmV3WCIsIm5ld1kiLCJoaXRzIiwicGxheWVyMVNoaXBMaXN0IiwicGxheWVyMlNoaXBMaXN0IiwiaW5pdGlhbFNldHVwIiwiZG9tIiwiY2VsbENsaWNrSGFuZGxlciIsImV2ZW50IiwicGxheVR1cm4iLCJjdXJyZW50VGFyZ2V0IiwiYWRkUGxheWVyMkxpc3RlbmVycyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ3aW5uZXJNc2ciLCJodW1hbkF0dGFjayIsInRleHRDb250ZW50IiwiY29tcHV0ZXJBdHRhY2siLCJjbGVhciIsIl9jb21wdXRlciRhdHRhY2siLCJfY29tcHV0ZXIkYXR0YWNrMiIsImNvbXBYIiwiY29tcFkiLCJhdHRhY2tlZENlbGwiLCJwYXJzZUludCJdLCJzb3VyY2VSb290IjoiIn0=