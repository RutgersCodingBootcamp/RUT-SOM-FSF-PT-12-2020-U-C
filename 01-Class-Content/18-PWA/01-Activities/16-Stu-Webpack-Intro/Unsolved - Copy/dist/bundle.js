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
/***/ (() => {

eval("const priceEl = document.getElementById(\"price\");\nconst balanceEl = document.getElementById(\"balance\");\nconst expenseEl = document.getElementById(\"expense\");\nconst expensesListEl = document.getElementById(\"expenses-list\");\nconst submitBtn = document.getElementById(\"submit\");\nconst resetBtn = document.getElementById(\"reset\");\n\nfunction addToList(name, price) {\n  expensesListEl.innerHTML += `<li class=\"list-group-item\">Name: ${name}\n    <span class=\"ml-4\">Price: ${price}</span></li>`;\n}\n\nfunction submit(e) {\n  e.preventDefault();\n  addToList(expenseEl.value, priceEl.value);\n}\n\nfunction reset(e) {\n  e.preventDefault();\n}\n\nsubmitBtn.onclick = submit;\nresetBtn.onclick = reset;\n\n\n//# sourceURL=webpack://webpack-demo/./src/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/app.js"]();
/******/ 	
/******/ })()
;