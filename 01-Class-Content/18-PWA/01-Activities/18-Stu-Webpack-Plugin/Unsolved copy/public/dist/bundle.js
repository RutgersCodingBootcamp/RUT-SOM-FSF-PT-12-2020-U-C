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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/assets/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/assets/js/app.js":
/*!*********************************!*\
  !*** ./public/assets/js/app.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("loadImages();\r\n\r\nfunction createEl(htmlString = \"\", className) {\r\n  const el = document.createElement(htmlString);\r\n  if (className) {\r\n    el.setAttribute(\"class\", className);\r\n  }\r\n  return el;\r\n}\r\n\r\nfunction loadImages() {\r\n  fetch(\"http://localhost:3000/api/images\")\r\n    .then(res => res.json())\r\n    .then(data => createCards(data));\r\n}\r\n\r\nfunction createCards(data) {\r\n  const container = document.querySelector(\".container\");\r\n  container.innerHTML = \"\";\r\n  let lastRow;\r\n  const row = createEl(\"div\", \"row\");\r\n\r\n  return data.forEach(function(image, index) {\r\n    const col = createEl(\"div\", \"col-md-4 mt-4\");\r\n    col.appendChild(createCard(image));\r\n    if (index % 3 === 0) {\r\n      row.appendChild(col);\r\n      container.appendChild(row);\r\n      lastRow = row;\r\n    }\r\n\r\n    return lastRow.appendChild(col);\r\n  });\r\n}\r\n\r\nfunction createCard(image) {\r\n  const card = createEl(\"div\", \"card\");\r\n  const imageContainer = createEl(\"div\", \"card__image-container\");\r\n  const img = createEl(\"img\", \"card-img-top card__image--cover\");\r\n  img.setAttribute(\"src\", image.image);\r\n  img.setAttribute(\"alt\", image.description);\r\n\r\n  const cardBody = createEl(\"div\", \"card-body\");\r\n\r\n  const ratingFormContainer = createEl(\"div\", \"rating d-flex justify-content-start\");\r\n  ratingFormContainer.setAttribute(\"data-id\", image._id);\r\n  ratingFormContainer.setAttribute(\"data-rating\", image.rating);\r\n\r\n  const ratingForm = createRatingForm(image);\r\n\r\n  const cardText = createEl(\"p\", \"card-text font-weight-bold mt-2\");\r\n\r\n  cardText.innerText = `${image.description} (${image.rating})`;\r\n\r\n  imageContainer.append(img);\r\n  ratingFormContainer.append(ratingForm);\r\n  cardBody.appendChild(ratingFormContainer);\r\n  cardBody.appendChild(cardText);\r\n  card.appendChild(imageContainer);\r\n  card.appendChild(cardBody);\r\n\r\n  return card;\r\n}\r\n\r\nfunction createRatingForm(image) {\r\n  const labelText = {\r\n    1: \"One Star\",\r\n    2: \"Two Stars\",\r\n    3: \"Three Stars\",\r\n    4: \"Four Stars\",\r\n    5: \"Five Stars\"\r\n  };\r\n\r\n  const form = createEl(\"form\");\r\n  form.setAttribute(\"action\", \"post\");\r\n\r\n  for (let i = 1; i <= 5; i++) {\r\n    const input = createEl(\"input\", \"visuallyhidden\");\r\n    input.setAttribute(\"type\", \"radio\");\r\n    input.setAttribute(\"name\", \"rating\");\r\n    input.setAttribute(\"id\", `${image._id}-star-${i}`);\r\n    input.setAttribute(\"value\", i);\r\n\r\n    const label = createEl(\"label\");\r\n    label.setAttribute(\"for\", `${image._id}-star-${i}`);\r\n    const labelSpan = createEl(\"span\", \"visuallyhidden\");\r\n    labelSpan.innerText = labelText[i];\r\n    const star = createEl(\"i\", `fa-star ${image.rating >= i ? \"fas\" : \"far\"}`);\r\n\r\n    label.appendChild(labelSpan);\r\n    label.appendChild(star);\r\n    label.onclick = updateRating;\r\n    form.appendChild(input);\r\n    form.appendChild(label);\r\n  }\r\n\r\n  return form;\r\n}\r\n\r\nfunction updateRating(event) {\r\n  const [id, , rating] = event.currentTarget.getAttribute(\"for\").split(\"-\");\r\n  fetch(`http://localhost:3000/api/images/${id}`, {\r\n    method: \"PUT\",\r\n    body: JSON.stringify({ rating }),\r\n    headers: {\r\n      \"Content-Type\": \"application/json\"\r\n    }\r\n  }).then(function() {\r\n    loadImages();\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack:///./public/assets/js/app.js?");

/***/ })

/******/ });