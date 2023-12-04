/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/home.js":
/*!********************************!*\
  !*** ./src/components/home.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createHomeComponent)
/* harmony export */ });
/* harmony import */ var _images_pizza_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/pizza_logo.png */ "./src/images/pizza_logo.png");


function createHomeComponent() {
    const home = document.createElement("div");
    home.classList.add("home");

    home.appendChild(createImgWrapper());
    home.appendChild(createDescription());

    return home;
}

function createImgWrapper() {
    const div = document.createElement("div");
    const img = document.createElement("img");

    div.classList.add("home-image");
    img.src = _images_pizza_logo_png__WEBPACK_IMPORTED_MODULE_0__;
    img.alt = "Pizza";

    div.appendChild(img);

    return div;
}

function createDescription() {
    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    const btn = document.createElement("button");

    div.classList.add("home-description");

    h2.textContent = "El Pizzo";
    p.textContent =
        "Lorem ipsum dolor sit amet consectetur adipisicin gelit. Laboriosam quae magnam nam minima, mollitia, inventore eligendi maxime sit officia eius ipsam porro voluptatibus, error fugiat! Tempora at officia laborum sapiente.";
    btn.textContent = "Explore more...";

    div.appendChild(h2);
    div.appendChild(p);
    div.appendChild(btn);

    return div;
}


/***/ }),

/***/ "./src/components/init.js":
/*!********************************!*\
  !*** ./src/components/init.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadElements)
/* harmony export */ });
/* harmony import */ var _images_icon_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/icon.png */ "./src/images/icon.png");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/components/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/components/menu.js");




function createHeader() {
    const headerEl = document.createElement("header");

    headerEl.appendChild(createImgWrapper());
    headerEl.appendChild(createNav());

    return headerEl;
}

function createNav() {
    const navEl = document.createElement("nav");
    const olEl = document.createElement("ol");
    const navItems = ["Home", "Menu", "About us", "Contact"];

    navEl.id = "navbar";
    olEl.classList.add("nav-links");

    navItems.forEach((item) => {
        const liEl = document.createElement("li");

        liEl.classList.add("nav-item");
        liEl.textContent = item;

        olEl.appendChild(liEl);
    });

    navEl.appendChild(olEl);

    return navEl;
}

function createImgWrapper() {
    const divEl = document.createElement("div");
    const imgEl = document.createElement("img");

    divEl.classList.add("icon-container");
    imgEl.src = _images_icon_png__WEBPACK_IMPORTED_MODULE_0__;
    imgEl.alt = "logo";

    divEl.appendChild(imgEl);

    return divEl;
}

function createMain() {
    const mainEl = document.createElement("main");
    mainEl.id = "main";

    return mainEl;
}

function createFooter() {
    const footerEl = document.createElement("footer");
    const paragraph = document.createElement("p");
    const aEl = document.createElement("a");

    paragraph.textContent = "Created by ";
    aEl.textContent = "Bookkeeper33";
    aEl.href = "https://github.com/Bookkeeper33";

    paragraph.appendChild(aEl);
    footerEl.appendChild(paragraph);

    return footerEl;
}

function loadComponent() {
    const main = document.getElementById("main");

    main.textContent = "";
    main.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_2__["default"])());
    // main.appendChild(createHomeComponent());
}

function loadElements() {
    const content = document.getElementById("content");

    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());

    loadComponent();
}


/***/ }),

/***/ "./src/components/menu.js":
/*!********************************!*\
  !*** ./src/components/menu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createMenuComponent)
/* harmony export */ });
function createMenuComponent() {
    const menu = document.createElement("div");
    const title = document.createElement("h2");
    const wrapper = document.createElement("div");
    const meals = [
        {
            name: "Pizza",
            ing: ["onion", "mozzarella", "chicken"],
            price: "150 UAH",
        },
        {
            name: "Carbonara",
            ing: [
                "pancetta",
                "pecorino cheese",
                "parmesan",
                "spaghetti",
                "garlic",
            ],
            price: "120 UAH",
        },
        {
            name: "Risotto",
            ing: ["smoked bacon", "onion", "rice", "chicken stock", "parmesan"],
            price: "230 UAH",
        },
        {
            name: "Gnocchi",
            ing: [
                "onion",
                "garlic cloves",
                "chorizo",
                "canned tomatoes",
                "fresh gnocchi",
                "mozzarella",
            ],
            price: "275 UAH",
        },
        {
            name: "Burger",
            ing: [
                "onion",
                "pickles",
                "burger sauce",
                "beef",
                "tomatoes",
                "fresh salad",
                "cheddar",
            ],
            price: "275 UAH",
        },
        {
            name: "Lasagne",
            ing: [
                "lean beef mince",
                "prosciutto",
                "tomato sauce",
                "beef stock",
                "mozzarella",
            ],
            price: "180 UAH",
        },
    ];

    menu.classList.add("menu");
    wrapper.classList.add("menu-container");

    title.textContent = "Our Menu";

    meals.forEach((meal) => {
        wrapper.appendChild(createMeal(meal.name, meal.ing, meal.price));
    });

    menu.appendChild(title);
    menu.appendChild(wrapper);

    return menu;
}

function createMeal(name, ings, cost) {
    const item = document.createElement("div");
    const description = document.createElement("div");
    const imgWrapper = document.createElement("div");
    const img = document.createElement("img");
    const title = document.createElement("h4");
    const ingredients = document.createElement("p");
    const price = document.createElement("p");

    item.classList.add("menu-item");
    description.classList.add("item-description");
    imgWrapper.classList.add("item-img");

    title.textContent = name;
    ingredients.textContent = `Ingredients: ${[...ings]}.`;
    price.textContent = cost;

    img.src = `src/images/menu/burger.png`;
    img.alt = `${name.toLowerCase()}`;

    description.appendChild(title);
    description.appendChild(ingredients);
    description.appendChild(price);

    imgWrapper.appendChild(img);

    item.appendChild(description);
    item.appendChild(imgWrapper);

    return item;
}


/***/ }),

/***/ "./src/images/icon.png":
/*!*****************************!*\
  !*** ./src/images/icon.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "13e26593e5861d9cffc3.png";

/***/ }),

/***/ "./src/images/pizza_logo.png":
/*!***********************************!*\
  !*** ./src/images/pizza_logo.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "87988f937c6b455eedb3.png";

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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/init */ "./src/components/init.js");


(0,_components_init__WEBPACK_IMPORTED_MODULE_0__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7OztBQ2xCNkM7QUFDN0M7QUFDQSw0REFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnRfb2Rpbi8uL3NyYy9jb21wb25lbnRzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9vZGluLy4vc3JjL2NvbXBvbmVudHMvaW5pdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X29kaW4vLi9zcmMvY29tcG9uZW50cy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfb2Rpbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X29kaW4vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfb2Rpbi93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnRfb2Rpbi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnRfb2Rpbi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRfb2Rpbi93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X29kaW4vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBpenphIGZyb20gXCIuLi9pbWFnZXMvcGl6emFfbG9nby5wbmdcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUhvbWVDb21wb25lbnQoKSB7XHJcbiAgICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGhvbWUuY2xhc3NMaXN0LmFkZChcImhvbWVcIik7XHJcblxyXG4gICAgaG9tZS5hcHBlbmRDaGlsZChjcmVhdGVJbWdXcmFwcGVyKCkpO1xyXG4gICAgaG9tZS5hcHBlbmRDaGlsZChjcmVhdGVEZXNjcmlwdGlvbigpKTtcclxuXHJcbiAgICByZXR1cm4gaG9tZTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlSW1nV3JhcHBlcigpIHtcclxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG5cclxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwiaG9tZS1pbWFnZVwiKTtcclxuICAgIGltZy5zcmMgPSBQaXp6YTtcclxuICAgIGltZy5hbHQgPSBcIlBpenphXCI7XHJcblxyXG4gICAgZGl2LmFwcGVuZENoaWxkKGltZyk7XHJcblxyXG4gICAgcmV0dXJuIGRpdjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlRGVzY3JpcHRpb24oKSB7XHJcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG5cclxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwiaG9tZS1kZXNjcmlwdGlvblwiKTtcclxuXHJcbiAgICBoMi50ZXh0Q29udGVudCA9IFwiRWwgUGl6em9cIjtcclxuICAgIHAudGV4dENvbnRlbnQgPVxyXG4gICAgICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbiBnZWxpdC4gTGFib3Jpb3NhbSBxdWFlIG1hZ25hbSBuYW0gbWluaW1hLCBtb2xsaXRpYSwgaW52ZW50b3JlIGVsaWdlbmRpIG1heGltZSBzaXQgb2ZmaWNpYSBlaXVzIGlwc2FtIHBvcnJvIHZvbHVwdGF0aWJ1cywgZXJyb3IgZnVnaWF0ISBUZW1wb3JhIGF0IG9mZmljaWEgbGFib3J1bSBzYXBpZW50ZS5cIjtcclxuICAgIGJ0bi50ZXh0Q29udGVudCA9IFwiRXhwbG9yZSBtb3JlLi4uXCI7XHJcblxyXG4gICAgZGl2LmFwcGVuZENoaWxkKGgyKTtcclxuICAgIGRpdi5hcHBlbmRDaGlsZChwKTtcclxuICAgIGRpdi5hcHBlbmRDaGlsZChidG4pO1xyXG5cclxuICAgIHJldHVybiBkaXY7XHJcbn1cclxuIiwiaW1wb3J0IEljb24gZnJvbSBcIi4uL2ltYWdlcy9pY29uLnBuZ1wiO1xyXG5pbXBvcnQgY3JlYXRlSG9tZUNvbXBvbmVudCBmcm9tIFwiLi9ob21lXCI7XHJcbmltcG9ydCBjcmVhdGVNZW51Q29tcG9uZW50IGZyb20gXCIuL21lbnVcIjtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcclxuICAgIGNvbnN0IGhlYWRlckVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcclxuXHJcbiAgICBoZWFkZXJFbC5hcHBlbmRDaGlsZChjcmVhdGVJbWdXcmFwcGVyKCkpO1xyXG4gICAgaGVhZGVyRWwuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2KCkpO1xyXG5cclxuICAgIHJldHVybiBoZWFkZXJFbDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTmF2KCkge1xyXG4gICAgY29uc3QgbmF2RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xyXG4gICAgY29uc3Qgb2xFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvbFwiKTtcclxuICAgIGNvbnN0IG5hdkl0ZW1zID0gW1wiSG9tZVwiLCBcIk1lbnVcIiwgXCJBYm91dCB1c1wiLCBcIkNvbnRhY3RcIl07XHJcblxyXG4gICAgbmF2RWwuaWQgPSBcIm5hdmJhclwiO1xyXG4gICAgb2xFbC5jbGFzc0xpc3QuYWRkKFwibmF2LWxpbmtzXCIpO1xyXG5cclxuICAgIG5hdkl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBjb25zdCBsaUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG5cclxuICAgICAgICBsaUVsLmNsYXNzTGlzdC5hZGQoXCJuYXYtaXRlbVwiKTtcclxuICAgICAgICBsaUVsLnRleHRDb250ZW50ID0gaXRlbTtcclxuXHJcbiAgICAgICAgb2xFbC5hcHBlbmRDaGlsZChsaUVsKTtcclxuICAgIH0pO1xyXG5cclxuICAgIG5hdkVsLmFwcGVuZENoaWxkKG9sRWwpO1xyXG5cclxuICAgIHJldHVybiBuYXZFbDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlSW1nV3JhcHBlcigpIHtcclxuICAgIGNvbnN0IGRpdkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IGltZ0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuXHJcbiAgICBkaXZFbC5jbGFzc0xpc3QuYWRkKFwiaWNvbi1jb250YWluZXJcIik7XHJcbiAgICBpbWdFbC5zcmMgPSBJY29uO1xyXG4gICAgaW1nRWwuYWx0ID0gXCJsb2dvXCI7XHJcblxyXG4gICAgZGl2RWwuYXBwZW5kQ2hpbGQoaW1nRWwpO1xyXG5cclxuICAgIHJldHVybiBkaXZFbDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTWFpbigpIHtcclxuICAgIGNvbnN0IG1haW5FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xyXG4gICAgbWFpbkVsLmlkID0gXCJtYWluXCI7XHJcblxyXG4gICAgcmV0dXJuIG1haW5FbDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xyXG4gICAgY29uc3QgZm9vdGVyRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xyXG4gICAgY29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBjb25zdCBhRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuXHJcbiAgICBwYXJhZ3JhcGgudGV4dENvbnRlbnQgPSBcIkNyZWF0ZWQgYnkgXCI7XHJcbiAgICBhRWwudGV4dENvbnRlbnQgPSBcIkJvb2trZWVwZXIzM1wiO1xyXG4gICAgYUVsLmhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9Cb29ra2VlcGVyMzNcIjtcclxuXHJcbiAgICBwYXJhZ3JhcGguYXBwZW5kQ2hpbGQoYUVsKTtcclxuICAgIGZvb3RlckVsLmFwcGVuZENoaWxkKHBhcmFncmFwaCk7XHJcblxyXG4gICAgcmV0dXJuIGZvb3RlckVsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkQ29tcG9uZW50KCkge1xyXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcclxuXHJcbiAgICBtYWluLnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUNvbXBvbmVudCgpKTtcclxuICAgIC8vIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlSG9tZUNvbXBvbmVudCgpKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZEVsZW1lbnRzKCkge1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcclxuXHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTWFpbigpKTtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vdGVyKCkpO1xyXG5cclxuICAgIGxvYWRDb21wb25lbnQoKTtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVNZW51Q29tcG9uZW50KCkge1xyXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgbWVhbHMgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIlBpenphXCIsXHJcbiAgICAgICAgICAgIGluZzogW1wib25pb25cIiwgXCJtb3p6YXJlbGxhXCIsIFwiY2hpY2tlblwiXSxcclxuICAgICAgICAgICAgcHJpY2U6IFwiMTUwIFVBSFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIkNhcmJvbmFyYVwiLFxyXG4gICAgICAgICAgICBpbmc6IFtcclxuICAgICAgICAgICAgICAgIFwicGFuY2V0dGFcIixcclxuICAgICAgICAgICAgICAgIFwicGVjb3Jpbm8gY2hlZXNlXCIsXHJcbiAgICAgICAgICAgICAgICBcInBhcm1lc2FuXCIsXHJcbiAgICAgICAgICAgICAgICBcInNwYWdoZXR0aVwiLFxyXG4gICAgICAgICAgICAgICAgXCJnYXJsaWNcIixcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgcHJpY2U6IFwiMTIwIFVBSFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIlJpc290dG9cIixcclxuICAgICAgICAgICAgaW5nOiBbXCJzbW9rZWQgYmFjb25cIiwgXCJvbmlvblwiLCBcInJpY2VcIiwgXCJjaGlja2VuIHN0b2NrXCIsIFwicGFybWVzYW5cIl0sXHJcbiAgICAgICAgICAgIHByaWNlOiBcIjIzMCBVQUhcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJHbm9jY2hpXCIsXHJcbiAgICAgICAgICAgIGluZzogW1xyXG4gICAgICAgICAgICAgICAgXCJvbmlvblwiLFxyXG4gICAgICAgICAgICAgICAgXCJnYXJsaWMgY2xvdmVzXCIsXHJcbiAgICAgICAgICAgICAgICBcImNob3Jpem9cIixcclxuICAgICAgICAgICAgICAgIFwiY2FubmVkIHRvbWF0b2VzXCIsXHJcbiAgICAgICAgICAgICAgICBcImZyZXNoIGdub2NjaGlcIixcclxuICAgICAgICAgICAgICAgIFwibW96emFyZWxsYVwiLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBwcmljZTogXCIyNzUgVUFIXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiQnVyZ2VyXCIsXHJcbiAgICAgICAgICAgIGluZzogW1xyXG4gICAgICAgICAgICAgICAgXCJvbmlvblwiLFxyXG4gICAgICAgICAgICAgICAgXCJwaWNrbGVzXCIsXHJcbiAgICAgICAgICAgICAgICBcImJ1cmdlciBzYXVjZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJiZWVmXCIsXHJcbiAgICAgICAgICAgICAgICBcInRvbWF0b2VzXCIsXHJcbiAgICAgICAgICAgICAgICBcImZyZXNoIHNhbGFkXCIsXHJcbiAgICAgICAgICAgICAgICBcImNoZWRkYXJcIixcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgcHJpY2U6IFwiMjc1IFVBSFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIkxhc2FnbmVcIixcclxuICAgICAgICAgICAgaW5nOiBbXHJcbiAgICAgICAgICAgICAgICBcImxlYW4gYmVlZiBtaW5jZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJwcm9zY2l1dHRvXCIsXHJcbiAgICAgICAgICAgICAgICBcInRvbWF0byBzYXVjZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJiZWVmIHN0b2NrXCIsXHJcbiAgICAgICAgICAgICAgICBcIm1venphcmVsbGFcIixcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgcHJpY2U6IFwiMTgwIFVBSFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICBdO1xyXG5cclxuICAgIG1lbnUuY2xhc3NMaXN0LmFkZChcIm1lbnVcIik7XHJcbiAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJtZW51LWNvbnRhaW5lclwiKTtcclxuXHJcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiT3VyIE1lbnVcIjtcclxuXHJcbiAgICBtZWFscy5mb3JFYWNoKChtZWFsKSA9PiB7XHJcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChjcmVhdGVNZWFsKG1lYWwubmFtZSwgbWVhbC5pbmcsIG1lYWwucHJpY2UpKTtcclxuICAgIH0pO1xyXG5cclxuICAgIG1lbnUuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG4gICAgbWVudS5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcclxuXHJcbiAgICByZXR1cm4gbWVudTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTWVhbChuYW1lLCBpbmdzLCBjb3N0KSB7XHJcbiAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IGltZ1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xyXG4gICAgY29uc3QgaW5ncmVkaWVudHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGNvbnN0IHByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcblxyXG4gICAgaXRlbS5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtXCIpO1xyXG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcIml0ZW0tZGVzY3JpcHRpb25cIik7XHJcbiAgICBpbWdXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJpdGVtLWltZ1wiKTtcclxuXHJcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IG5hbWU7XHJcbiAgICBpbmdyZWRpZW50cy50ZXh0Q29udGVudCA9IGBJbmdyZWRpZW50czogJHtbLi4uaW5nc119LmA7XHJcbiAgICBwcmljZS50ZXh0Q29udGVudCA9IGNvc3Q7XHJcblxyXG4gICAgaW1nLnNyYyA9IGBzcmMvaW1hZ2VzL21lbnUvYnVyZ2VyLnBuZ2A7XHJcbiAgICBpbWcuYWx0ID0gYCR7bmFtZS50b0xvd2VyQ2FzZSgpfWA7XHJcblxyXG4gICAgZGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG4gICAgZGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQoaW5ncmVkaWVudHMpO1xyXG4gICAgZGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQocHJpY2UpO1xyXG5cclxuICAgIGltZ1dyYXBwZXIuYXBwZW5kQ2hpbGQoaW1nKTtcclxuXHJcbiAgICBpdGVtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcclxuICAgIGl0ZW0uYXBwZW5kQ2hpbGQoaW1nV3JhcHBlcik7XHJcblxyXG4gICAgcmV0dXJuIGl0ZW07XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBsb2FkRWxlbWVudHMgZnJvbSBcIi4vY29tcG9uZW50cy9pbml0XCI7XHJcblxyXG5sb2FkRWxlbWVudHMoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9