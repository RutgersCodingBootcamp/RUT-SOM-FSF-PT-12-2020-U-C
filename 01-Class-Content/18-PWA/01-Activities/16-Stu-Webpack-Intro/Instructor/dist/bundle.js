/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const calculations = __webpack_require__(/*! ./calculations.js */ \"./src/calculations.js\");\r\nconsole.log(calculations);\r\nconst priceEl = document.getElementById(\"price\");\r\nconst balanceEl = document.getElementById(\"balance\");\r\nconst expenseEl = document.getElementById(\"expense\");\r\nconst expensesListEl = document.getElementById(\"expenses-list\");\r\nconst submitBtn = document.getElementById(\"submit\");\r\nconst resetBtn = document.getElementById(\"reset\");\r\n\r\nfunction addToList(name, price) {\r\n  expensesListEl.innerHTML += `<li class=\"list-group-item\">Name: ${name}\r\n    <span class=\"ml-4\">Price: ${price}</span></li>`;\r\n  calculations.subtractFromBudget(price);\r\n}\r\n\r\nfunction submit(e) {\r\n  e.preventDefault();\r\n  addToList(expenseEl.value, priceEl.value);\r\n}\r\n\r\nfunction reset(e) {\r\n  e.preventDefault();\r\n  calculations.resetBudget();\r\n  // console.log(\"got here\");\r\n}\r\n\r\nsubmitBtn.onclick = submit;\r\nresetBtn.onclick = reset;\r\n\r\nconsole.log(\"Will it compile\");\r\n\n\n//# sourceURL=webpack://webpack-demo/./src/app.js?");

/***/ }),

/***/ "./src/calculations.js":
/*!*****************************!*\
  !*** ./src/calculations.js ***!
  \*****************************/
/***/ ((module) => {

eval("console.log(\"duh\");\r\nconst subtractFromBudget = function(price){\r\n    console.log(\"subtract\");\r\n    var budget = parseFloat(document.querySelector(\"#balance\").innerHTML);\r\n    var priceNum = parseFloat(price);\r\n    budget = budget - priceNum;\r\n    document.querySelector(\"#balance\").innerHTML = budget;\r\n}\r\nconst resetBudget = function(){\r\n    console.log(\"reset\");\r\n    var budget = parseFloat(document.querySelector(\"#budget\").innerHTML);\r\n    document.querySelector(\"#balance\").innerHTML = budget;\r\n    document.querySelector(\"#expenses-list\").innerHTML = \"\";\r\n}\r\nmodule.exports = {\r\n    subtractFromBudget,\r\n    resetBudget\r\n}\n\n//# sourceURL=webpack://webpack-demo/./src/calculations.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;