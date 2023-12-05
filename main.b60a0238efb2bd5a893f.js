/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 543:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `// extracted by mini-css-extract-plugin
export {};`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 495:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `// extracted by mini-css-extract-plugin
export {};`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 645:
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

/***/ 81:
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ 379:
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

/***/ 569:
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

/***/ 216:
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

/***/ 565:
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

/***/ 795:
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

/***/ 589:
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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

;// CONCATENATED MODULE: ./src/components/helper.js
function createImg(className, title, imgSrc, isContact = false) {
    const div = document.createElement("div");
    const img = document.createElement("img");

    div.classList.add(className);
    img.src = imgSrc;
    img.alt = title.toLowerCase();

    div.appendChild(img);

    if (isContact) {
        const heading = document.createElement("h2");

        heading.textContent = `${title.charAt(0).toUpperCase()}${title
            .slice(1)
            .replaceAll("-", " ")}`;
        div.appendChild(heading);
    }

    return div;
}

;// CONCATENATED MODULE: ./src/images/icon.png
/* harmony default export */ const icon = (__webpack_require__.p + "images/6ee078d15a3fa1871116509eb1f87fbd.png");
;// CONCATENATED MODULE: ./src/images/github-mark.svg
/* harmony default export */ const github_mark = (__webpack_require__.p + "images/6fa18895f6e6c7772cab7049f7e05f59.svg");
;// CONCATENATED MODULE: ./src/images/pizza_logo.png
/* harmony default export */ const pizza_logo = (__webpack_require__.p + "images/0e0fc13fe9817c325900010bf2df33c1.png");
;// CONCATENATED MODULE: ./src/components/home.js




function createHomeComponent() {
    const home = document.createElement("div");
    home.classList.add("home");

    home.appendChild(createImg("home-image", "Pizza", pizza_logo));
    home.appendChild(fillHomeComponent());

    return home;
}

function fillHomeComponent() {
    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    const btn = document.createElement("button");

    div.classList.add("home-description");

    h2.textContent = "El Pizzo";
    p.textContent =
        "Lorem ipsum dolor sit amet consectetur adipisicin gelit. Laboriosam quae magnam nam minima, mollitia, inventore eligendi maxime sit officia eius ipsam porro voluptatibus, error fugiat! Tempora at officia laborum sapiente.";
    btn.textContent = "Explore more...";
    btn.id = "explore";

    div.appendChild(h2);
    div.appendChild(p);
    div.appendChild(btn);

    return div;
}

function loadHomeComponent(mainElement) {
    mainElement.textContent = "";
    mainElement.appendChild(createHomeComponent());
}

;// CONCATENATED MODULE: ./src/images/menu/burger.png
/* harmony default export */ const burger = (__webpack_require__.p + "images/7b1e320b6c4039e6a0948257e0e0762e.png");
;// CONCATENATED MODULE: ./src/images/menu/lasagne.png
/* harmony default export */ const lasagne = (__webpack_require__.p + "images/bdff32d075a09df53cec86004be66e2b.png");
;// CONCATENATED MODULE: ./src/images/menu/carbonara.jpg
/* harmony default export */ const carbonara = (__webpack_require__.p + "images/79939dab453db35a4a5b97ecbe8e8dcf.jpg");
;// CONCATENATED MODULE: ./src/images/menu/gnocchi.png
/* harmony default export */ const gnocchi = (__webpack_require__.p + "images/929df52cc5dd0e34eb601448d171986e.png");
;// CONCATENATED MODULE: ./src/images/menu/risotto.png
/* harmony default export */ const risotto = (__webpack_require__.p + "images/18c330f7a81cbc51cc738a488501505e.png");
;// CONCATENATED MODULE: ./src/images/menu/pizza.png
/* harmony default export */ const pizza = (__webpack_require__.p + "images/32896dc0b527f1eaf9018d782b09d6d1.png");
;// CONCATENATED MODULE: ./src/components/menu.js









function createMenuComponent() {
    const menu = document.createElement("div");
    const title = document.createElement("h2");
    const wrapper = document.createElement("div");
    const meals = [
        {
            name: "Pizza",
            ing: [" onion", " mozzarella", " chicken"],
            price: "150 UAH",
            img: pizza,
        },
        {
            name: "Carbonara",
            ing: [
                " pancetta",
                " pecorino cheese",
                " parmesan",
                " spaghetti",
                " garlic",
            ],
            price: "120 UAH",
            img: carbonara,
        },
        {
            name: "Risotto",
            ing: [
                " smoked bacon",
                " onion",
                " rice",
                " chicken stock",
                " parmesan",
            ],
            price: "230 UAH",
            img: risotto,
        },
        {
            name: "Gnocchi",
            ing: [
                " onion",
                " garlic cloves",
                " chorizo",
                " canned tomatoes",
                " fresh gnocchi",
                " mozzarella",
            ],
            price: "275 UAH",
            img: gnocchi,
        },
        {
            name: "Burger",
            ing: [
                " onion",
                " pickles",
                " burger sauce",
                " beef",
                " tomatoes",
                " fresh salad",
                " cheddar",
            ],
            price: "230 UAH",
            img: burger,
        },
        {
            name: "Lasagne",
            ing: [
                "lean beef mince",
                " prosciutto",
                " tomato sauce",
                " beef stock",
                " mozzarella",
            ],
            price: "180 UAH",
            img: lasagne,
        },
    ];

    menu.classList.add("menu");
    wrapper.classList.add("menu-container");

    title.textContent = "Our Menu";

    meals.forEach((meal) => {
        wrapper.appendChild(createMenuItem(meal));
    });

    menu.appendChild(title);
    menu.appendChild(wrapper);

    return menu;
}

function createMenuItem(meal) {
    const item = document.createElement("div");

    item.classList.add("menu-item");

    item.appendChild(fillMenuItem(meal.name, meal.ing, meal.price));
    item.appendChild(createImg("item-img", meal.name, meal.img));

    return item;
}

function fillMenuItem(name, ings, cost) {
    const description = document.createElement("div");
    const title = document.createElement("h4");
    const ingredients = document.createElement("p");
    const price = document.createElement("p");

    description.classList.add("item-description");

    title.textContent = name;
    ingredients.textContent = `Ingredients: ${[...ings]}.`;
    price.textContent = cost;

    description.appendChild(title);
    description.appendChild(ingredients);
    description.appendChild(price);

    return description;
}

function loadMenuComponent(mainElement) {
    mainElement.textContent = "";
    mainElement.appendChild(createMenuComponent());
}

;// CONCATENATED MODULE: ./src/images/chief.png
/* harmony default export */ const chief = (__webpack_require__.p + "images/070a5a3185fa34ef1196a383ae0377fb.png");
;// CONCATENATED MODULE: ./src/components/about.js




function createAboutComponent() {
    const about = document.createElement("div");

    about.classList.add("about-us");

    about.appendChild(createImg("image-about", "Chief", chief));
    about.appendChild(fillAboutComponent());

    return about;
}

function fillAboutComponent() {
    const description = document.createElement("div");
    const title = document.createElement("h2");
    const paragraph = document.createElement("p");

    description.classList.add("description-about");

    title.textContent = "Simple information About Us";
    paragraph.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing
    elit. Repellat eveniet magni dolor odio est
    laudantium earum enim, reiciendis quidem recusandae
    eligendi? Maiores ex consectetur iste dolorum sint
    ipsam illo temporibus! Lorem ipsum dolor sit amet
    consectetur adipisicing elit. Possimus, odio officia
    ullam laborum nemo obcaecati blanditiis molestias
    fugiat laudantium nihil quisquam quasi incidunt
    necessitatibus praesentium asperiores dolorum
    sapiente. Hic, quisquam?`;

    description.appendChild(title);
    description.appendChild(paragraph);

    return description;
}


function loadAboutComponent(mainElement) {
    mainElement.textContent = "";
    mainElement.appendChild(createAboutComponent());
}

;// CONCATENATED MODULE: ./src/images/map-marker.png
/* harmony default export */ const map_marker = (__webpack_require__.p + "images/f63966389d51d5202cd2e94752c32fec.png");
;// CONCATENATED MODULE: ./src/images/phone.png
/* harmony default export */ const phone = (__webpack_require__.p + "images/ada9dd2809104f74fc5dca03b6701188.png");
;// CONCATENATED MODULE: ./src/images/store-clock.png
/* harmony default export */ const store_clock = (__webpack_require__.p + "images/88a2caddcc051fb78e9e4baa311f21af.png");
;// CONCATENATED MODULE: ./src/components/contact.js






function createContactComponent() {
    const contacts = document.createElement("div");

    contacts.classList.add("contacts");

    contacts.appendChild(
        createSection("address", "Urlivska 1488, Kyiv, Ukraine", map_marker)
    );
    contacts.appendChild(createSection("phone", "(444)-888-1111", phone));
    contacts.appendChild(
        createSection("working-hours", "Mon-Sat: 9am - 9pm", store_clock)
    );

    return contacts;
}

function createSection(sectionName, text, img) {
    const section = document.createElement("div");
    const paragraph = document.createElement("p");

    section.classList.add(sectionName);

    paragraph.textContent = text;

    section.appendChild(createImg("title", sectionName, img, true));
    section.appendChild(paragraph);

    return section;
}


function loadContactComponent(mainElement) {
    mainElement.textContent = "";
    mainElement.appendChild(createContactComponent());
}

;// CONCATENATED MODULE: ./src/components/init.js










function createHeader() {
    const header = document.createElement("header");

    header.appendChild(createImg("icon-container", "Logo", icon));
    header.appendChild(createNav());

    return header;
}

function createNav() {
    const nav = document.createElement("nav");
    const ol = document.createElement("ol");
    const navItems = ["Home", "Menu", "About us", "Contact"];

    nav.id = "navbar";
    ol.classList.add("nav-links");

    navItems.forEach((item) => {
        const li = document.createElement("li");

        li.id = item.toLowerCase();
        li.classList.add("nav-item");
        li.textContent = item;

        item === "Home" ? li.classList.add("active") : "";

        ol.appendChild(li);
    });

    nav.appendChild(ol);

    return nav;
}

function createMain() {
    const mainEl = document.createElement("main");
    mainEl.id = "main";

    return mainEl;
}

function createFooter() {
    const footer = document.createElement("footer");
    const paragraph = document.createElement("p");
    const a = document.createElement("a");
    const span = document.createElement("span");
    const img = document.createElement("img");

    paragraph.textContent = "Created by ";
    a.textContent = "Bookkeeper33";
    a.href = "https://github.com/Bookkeeper33";

    img.src = github_mark;
    img.alt = "github";

    span.classList.add("github");

    span.appendChild(img);
    paragraph.appendChild(a);
    paragraph.appendChild(span);
    footer.appendChild(paragraph);

    return footer;
}

function loadComponent(main) {
    const nav = document.getElementById("navbar");

    nav.addEventListener("click", (event) => {
        if (event.target.tagName === "LI") {
            const id = event.target.id.toLowerCase();

            if (id.includes("home")) {
                loadHomeComponent(main);
            }
            if (id.includes("menu")) {
                loadMenuComponent(main);
            }
            if (id.includes("about us")) {
                loadAboutComponent(main);
            }
            if (id.includes("contact")) {
                loadContactComponent(main);
            }

            setActive(event.target);
        }
    });
}

function setActive(target) {
    const navLinks = document.querySelectorAll(".nav-item");

    navLinks.forEach((link) => {
        link.classList.remove("active");
        target.classList.add("active");
    });
}

function init() {
    const content = document.getElementById("content");

    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());

    const main = document.getElementById("main");
    loadHomeComponent(main);
    loadComponent(main);
}

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(795);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(569);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(565);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(216);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(589);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./src/reset.css
var cjs_js_src_reset = __webpack_require__(543);
;// CONCATENATED MODULE: ./src/reset.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(cjs_js_src_reset/* default */.Z, options);




       /* harmony default export */ const src_reset = (cjs_js_src_reset/* default */.Z && cjs_js_src_reset/* default */.Z.locals ? cjs_js_src_reset/* default */.Z.locals : undefined);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./src/style.css
var style = __webpack_require__(495);
;// CONCATENATED MODULE: ./src/style.css

      
      
      
      
      
      
      
      
      

var style_options = {};

style_options.styleTagTransform = (styleTagTransform_default());
style_options.setAttributes = (setAttributesWithoutAttributes_default());

      style_options.insert = insertBySelector_default().bind(null, "head");
    
style_options.domAPI = (styleDomAPI_default());
style_options.insertStyleElement = (insertStyleElement_default());

var style_update = injectStylesIntoStyleTag_default()(style/* default */.Z, style_options);




       /* harmony default export */ const src_style = (style/* default */.Z && style/* default */.Z.locals ? style/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/index.js




init();

})();

/******/ })()
;