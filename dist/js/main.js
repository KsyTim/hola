/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_headerMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/headerMenu */ \"./src/js/modules/headerMenu.js\");\n/* harmony import */ var _modules_modalOpener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modalOpener */ \"./src/js/modules/modalOpener.js\");\n/* harmony import */ var _modules_countTimer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/countTimer */ \"./src/js/modules/countTimer.js\");\n/* harmony import */ var _modules_comeBacker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/comeBacker */ \"./src/js/modules/comeBacker.js\");\n\n\n\n\n(0,_modules_headerMenu__WEBPACK_IMPORTED_MODULE_0__.headerMenu)();\n(0,_modules_modalOpener__WEBPACK_IMPORTED_MODULE_1__.modalOpener)();\n(0,_modules_countTimer__WEBPACK_IMPORTED_MODULE_2__.countTimer)('12 November 2022');\n(0,_modules_comeBacker__WEBPACK_IMPORTED_MODULE_3__.comeBacker)();\n\n//# sourceURL=webpack://hola/./src/js/index.js?");

/***/ }),

/***/ "./src/js/modules/comeBacker.js":
/*!**************************************!*\
  !*** ./src/js/modules/comeBacker.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"comeBacker\": () => (/* binding */ comeBacker)\n/* harmony export */ });\nvar comeBacker = function comeBacker() {\n  var openModal = function openModal() {\n    if (document.querySelector('.modal-layout').classList.length > 1) {\n      document.querySelector('.modal-layout').classList.remove('modal-layout__novisible');\n      document.querySelector('body').classList.add('modal__opened');\n    } else if (document.querySelector('.modal-layout').classList.length <= 1) {\n      document.querySelector('.modal-layout').classList.add('modal-layout__novisible');\n      document.querySelector('body').classList.remove('modal__opened');\n    }\n  };\n  document.querySelectorAll('a').forEach(function (elem) {\n    if (elem.getAttribute('href') !== '#') {\n      elem.addEventListener('click', function (event) {\n        event.preventDefault();\n        openModal();\n      });\n    }\n  });\n  document.addEventListener('mouseleave', function (event) {\n    openModal();\n  });\n};\n\n//# sourceURL=webpack://hola/./src/js/modules/comeBacker.js?");

/***/ }),

/***/ "./src/js/modules/countTimer.js":
/*!**************************************!*\
  !*** ./src/js/modules/countTimer.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"countTimer\": () => (/* binding */ countTimer)\n/* harmony export */ });\nvar countTimer = function countTimer(dDay) {\n  // ?????????????????? ???????????????????? ?? ?????????????? ???? ????????????????, ???????? ?????????? ?????????????? ?????????????????? ???????????? ???????????? ??????????????\n  var timerHours = document.querySelector('#timer-hours'),\n    timerMinutes = document.querySelector('#timer-minutes'),\n    timerSeconds = document.querySelector('#timer-seconds'),\n    timerAction = document.querySelector('.timer-action');\n\n  // ??????????????, ???????????????????????????? ???????????????????? ??????-???? ?????????????? ???? ???????????????????? ??????????\n  var getTimeRemaining = function getTimeRemaining() {\n    // ???????? ???????????????????? ??????????\n    var dateStop = new Date(dDay).getTime(),\n      // ?????????????????????? ????????\n      dateNow = new Date().getTime(),\n      // ?????????? ???????????????????? ?????????????? ???? ???????????????????? ?????????? (?? ????)\n      timeRemaining = (dateStop - dateNow) / 1000,\n      // ???????????????????? ???????????? ???? ???????????????????? ??????????\n      seconds = Math.floor(timeRemaining % 60),\n      // ???????????????????? ?????????? ???? ???????????????????? ??????????\n      minutes = Math.floor(timeRemaining / 60 % 60),\n      // ???????????????????? ?????????? ???? ???????????????????? ??????????\n      hours = Math.floor(timeRemaining / 3600),\n      // ??????????????, ?????????????????????????? ???????? ?????????? ????????????/????????????????/??????????????????, ???????? ???? ???????????????????? ???????????????????? ?? ????????????????\n      preNumber = function preNumber(num) {\n        if (num < 10) {\n          return \"0\".concat(num);\n        } else {\n          return num;\n        }\n      };\n    return {\n      timeRemaining: timeRemaining,\n      hours: preNumber(hours),\n      minutes: preNumber(minutes),\n      seconds: preNumber(seconds)\n    };\n  };\n\n  // ??????????????-????????????, ?????????????????????? ???????????? ???? ????????????????\n  var updateClock = function updateClock() {\n    var timer = getTimeRemaining();\n    timerHours.textContent = timer.hours;\n    timerMinutes.textContent = timer.minutes;\n    timerSeconds.textContent = timer.seconds;\n    // ???????????????????? ?? ????????????????\n    var clockTimeout;\n    // ??????????????: ???????? ???? ???????????????????? ?????????? ?????????? 0 (?? ????), ???? ????????????????????????????\n    //  ??????????????-????????????, ?????????????????????? ???????????? ???? ???????????????? updateClock, ?? ??????????????????\n    // ???????????? - ???????????????? ???????????????????? ?? ?????????????????? ???????????????????? ?? ???????????????????? ??????????\n    if (timer.timeRemaining > 0) {\n      clockTimeout = setTimeout(function () {\n        setTimeout(updateClock, 1000);\n      });\n    } else if (timer.timeRemaining <= 0) {\n      clearTimeout(clockTimeout);\n      timerHours.textContent = '00';\n      timerMinutes.textContent = '00';\n      timerSeconds.textContent = '00';\n      timerAction.textContent = '?????????? ??????????????????';\n    }\n  };\n  updateClock();\n};\n\n//# sourceURL=webpack://hola/./src/js/modules/countTimer.js?");

/***/ }),

/***/ "./src/js/modules/headerMenu.js":
/*!**************************************!*\
  !*** ./src/js/modules/headerMenu.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"headerMenu\": () => (/* binding */ headerMenu)\n/* harmony export */ });\nvar headerMenu = function headerMenu() {\n  document.addEventListener('click', function (event) {\n    var target = event.target;\n    if (target.matches('.header-menu-button') || target.matches('.header-menu-icon') || target.closest('a') && target.closest('a').matches('.header-menu-button')) {\n      if (document.querySelector('.header-menu__visible').classList.length > 1) {\n        document.querySelector('.header-menu__visible').classList.remove('header-menu__visible-no');\n        document.querySelector('.layout').classList.add('layout__visible');\n      }\n    } else if (target.matches('.menu-header-close') || target.closest('a') && target.closest('a').matches('.menu-header-close')) {\n      if (document.querySelector('.header-menu__visible').classList.length <= 1) {\n        document.querySelector('.header-menu__visible').classList.add('header-menu__visible-no');\n        document.querySelector('.layout').classList.remove('layout__visible');\n      }\n    }\n  });\n};\n\n//# sourceURL=webpack://hola/./src/js/modules/headerMenu.js?");

/***/ }),

/***/ "./src/js/modules/modalOpener.js":
/*!***************************************!*\
  !*** ./src/js/modules/modalOpener.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"modalOpener\": () => (/* binding */ modalOpener)\n/* harmony export */ });\nvar modalOpener = function modalOpener() {\n  document.addEventListener('click', function (event) {\n    var target = event.target;\n    if (target.matches('a.article-content-text__marked')) {\n      event.preventDefault();\n      if (document.querySelector('.modal-layout').classList.length > 1) {\n        document.querySelector('.modal-layout').classList.remove('modal-layout__novisible');\n        document.querySelector('body').classList.add('modal__opened');\n      }\n    } else if (target.matches('.modal-layout')) {\n      if (document.querySelector('.modal-layout').classList.length <= 1) {\n        document.querySelector('.modal-layout').classList.add('modal-layout__novisible');\n        document.querySelector('body').classList.remove('modal__opened');\n      }\n    }\n  });\n};\n\n//# sourceURL=webpack://hola/./src/js/modules/modalOpener.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;