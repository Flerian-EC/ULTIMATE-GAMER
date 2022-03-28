/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/components/header.js":
/*!*************************************!*\
  !*** ./src/js/components/header.js ***!
  \*************************************/
/***/ (function() {

eval("function _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _wrapNativeSuper(Class) { var _cache = typeof Map === \"function\" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== \"function\") { throw new TypeError(\"Super expression must either be null or a function\"); } if (typeof _cache !== \"undefined\") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }\n\nfunction _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _isNativeFunction(fn) { return Function.toString.call(fn).indexOf(\"[native code]\") !== -1; }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar MyHeader = /*#__PURE__*/function (_HTMLElement) {\n  _inherits(MyHeader, _HTMLElement);\n\n  var _super = _createSuper(MyHeader);\n\n  function MyHeader() {\n    var _this;\n\n    _classCallCheck(this, MyHeader);\n\n    _this = _super.call(this);\n\n    _this.attachShadow({\n      mode: \"open\"\n    });\n\n    _this.image = _this.getAttribute(\"url-image\");\n    _this.color = _this.getAttribute(\"button-color\");\n    _this.headerMov = _this.getAttribute(\"header-movement\");\n    _this.transparent = _this.getAttribute(\"transparent-header\");\n    return _this;\n  } //Esta funcion contiene el css del componente\n\n\n  _createClass(MyHeader, [{\n    key: \"styles\",\n    value: function styles() {\n      var col;\n      var tra;\n      var positio;\n\n      if (this.color === null) {\n        col = \"teal\";\n      } else {\n        col = this.color;\n      }\n\n      if (this.transparent !== \"true\") {\n        tra = \"white\";\n        positio = \"static\";\n      } else {\n        tra = \"transparent\";\n        positio = \"absolute\";\n      }\n\n      var css = \"\\n    <style>\\n      * {\\n        box-sizing: border-box;\\n        margin: 0;\\n        padding: 0;\\n      }\\n      :host {\\n        display: block;\\n        width: 100%;\\n        height: 70px;\\n        position: \".concat(positio, \";\\n        top: 0;\\n        left: 0;\\n        will-change: transform;\\n        background-color: \").concat(tra, \";\\n        transition-property: transform;\\n        transition-duration: 0.5s;\\n        z-index: 1000;\\n      }\\n      .my-header {\\n        width: 100%;\\n        height: 100%;\\n      }\\n      .my-header-container {\\n        width: 90%;\\n        height: 100%;\\n        margin: 0 auto;\\n        display: flex;\\n        align-items: center;\\n        justify-content: space-between;\\n      }\\n      .my-header-container a {\\n        width: fit-content;\\n        height: fit-content;\\n      }\\n      .my-header-container img {\\n        height: 60px;\\n        filter: drop-shadow(-1px 1px 2px rgb(0 0 0 / 60%));\\n      }\\n      .my-header-container__button {\\n        width: 40px;\\n        height: 34px;\\n        display: flex;\\n        flex-direction: column;\\n        justify-content: space-between;\\n      }\\n      .my-header-container__button span {\\n        display: block;\\n        width: 100%;\\n        height: 4px;\\n        background-color: \").concat(col, \";\\n        box-shadow: -1px 1px 3px 0px rgb(0 0 0 / 60%);\\n        will-change: transform;\\n        transition-property: transform, opacity;\\n        transition-duration: 0.5s;\\n      }\\n      .button-animation span:nth-child(1) {\\n        transform: translateY(calc(17px - 50%)) rotate(45deg);\\n      }\\n      .button-animation span:nth-child(2) {\\n        transform: rotate(45deg);\\n        opacity: 0%;\\n        transition-duration: 0.5s;\\n      }\\n      .button-animation span:nth-child(3) {\\n        transform: translateY(calc(-17px + 50%)) rotate(-45deg);\\n      }\\n      </style>\\n    \");\n      return css;\n    } //Esta funcion contiene el HTML del componente\n\n  }, {\n    key: \"template\",\n    value: function template() {\n      var template = document.createElement(\"template\");\n      var html = \"\\n    \".concat(this.styles(), \"\\n    <header class=\\\"my-header\\\">\\n      <div class=\\\"my-header-container\\\">\\n      <a href=\\\"/\\\">\\n      <img src=\\\"\").concat(this.image, \"\\\" alt=\\\"Logo de Ultimate Gamer\\\">\\n      </a>\\n        <div class=\\\"my-header-container__button\\\">\\n          <span></span>\\n          <span></span>\\n          <span></span>\\n        </div>\\n      </div>\\n    </header>\\n    \");\n      template.innerHTML = html;\n      return template;\n    } //Esta funcion activa la animacion del boton\n\n  }, {\n    key: \"buttonAnimation\",\n    value: function buttonAnimation() {\n      var butt = this.shadowRoot.querySelector(\".my-header-container__button\");\n      butt.addEventListener(\"click\", function () {\n        butt.classList.toggle(\"button-animation\");\n      });\n    } //Esta funcion ejecuta la transparencia del header\n\n  }, {\n    key: \"transparetHeader\",\n    value: function transparetHeader(val) {\n      if (this.transparent === \"true\" && val === true) {\n        this.style.backgroundColor = \"rgba(255,255,255,20%)\";\n        this.style.backdropFilter = \"blur(6px)\";\n      } else if (this.transparent === \"true\" && val === false) {\n        this.style.backgroundColor = \"transparent\";\n        this.style.backdropFilter = \"unset\";\n      }\n    } //Esta funcion es la que activa el seguimiento del header en pantalla\n\n  }, {\n    key: \"headerMovement\",\n    value: function headerMovement() {\n      var _this2 = this;\n\n      if (this.headerMov !== \"false\") {\n        var move;\n        window.addEventListener(\"scroll\", function () {\n          move = window.scrollY;\n          _this2.style.transform = \"translateY(\".concat(move, \"px)\");\n\n          if (move != 0) {\n            _this2.style.boxShadow = \"rgb(0 0 0 / 50%) 0px -1px 20px 0px\";\n\n            _this2.transparetHeader(true);\n          } else {\n            _this2.style.boxShadow = \"unset\";\n\n            _this2.transparetHeader(false);\n          }\n        });\n      }\n    } //Esta funcion se activa automaticamente al crear el componente '<my-header></my-header>' en HTML.\n\n  }, {\n    key: \"connectedCallback\",\n    value: function connectedCallback() {\n      var content = this.template().content.cloneNode(true);\n      this.shadowRoot.appendChild(content);\n      this.buttonAnimation();\n      this.headerMovement();\n    }\n  }]);\n\n  return MyHeader;\n}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));\n/*\r\n  Este es el componente web en HTML:\r\n  <my-header></my-header>\r\n  Estos son los tipos de atributos que tiene el componente web:\r\n\r\n  -url-image=\"string\" Define la ruta de img que buscara el componete;\r\n  -button-color=\"colorCss\" Define el color del boton del componente;\r\n  -header-movement=\"true / false\" Define si el componente te seguira o no en pantalla;\r\n  -transparent-header=\"true / false\" define si el header es transparente o no;\r\n*/\n\n\nwindow.customElements.define(\"my-header\", MyHeader);\n\n//# sourceURL=webpack://ultimate-gamer/./src/js/components/header.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ (function() {

eval("\n\n//# sourceURL=webpack://ultimate-gamer/./src/main.js?");

/***/ }),

/***/ "./src/style/style.js":
/*!****************************!*\
  !*** ./src/style/style.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style/style.scss\");\n\n\n//# sourceURL=webpack://ultimate-gamer/./src/style/style.js?");

/***/ }),

/***/ "./src/style/style.scss":
/*!******************************!*\
  !*** ./src/style/style.scss ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://ultimate-gamer/./src/style/style.scss?");

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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./src/js/components/header.js");
/******/ 	__webpack_require__("./src/main.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/style/style.js");
/******/ 	
/******/ })()
;