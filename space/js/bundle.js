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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _space_space__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./space/space */ \"./src/space/space.js\");\n/* harmony import */ var _space_star__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./space/star */ \"./src/space/star.js\");\n/* harmony import */ var _space_planet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./space/planet */ \"./src/space/planet.js\");\n/* harmony import */ var _space_asteroid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./space/asteroid */ \"./src/space/asteroid.js\");\n\n\n\n\n\n__webpack_require__(/*! ./styles.scss */ \"./src/styles.scss\");\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var canvas = document.createElement('canvas');\n  var rootNode = document.getElementById('has-background');\n  var firstNode = rootNode.children[0];\n  rootNode.insertBefore(canvas, firstNode);\n  canvas.style.position = 'absolute';\n  var width = window.innerWidth;\n  var height = window.innerHeight;\n  var dpr = window.devicePixelRatio || 1;\n  var space = new _space_space__WEBPACK_IMPORTED_MODULE_0__[\"Space\"]({\n    canvas: canvas,\n    width: width,\n    height: height,\n    dpr: dpr,\n    showFps: true\n  });\n  var sun = new _space_star__WEBPACK_IMPORTED_MODULE_1__[\"Star\"]({\n    radius: 160,\n    color: '#bda65f',\n    name: 'Sun',\n    x: width / 6,\n    y: height / 4\n  });\n  sun.addPlanet(new _space_planet__WEBPACK_IMPORTED_MODULE_2__[\"Planet\"]({\n    name: 'Mercury',\n    radius: 2,\n    orbitalSpeed: 40,\n    color: '#867b79',\n    distance: 200\n  }));\n  sun.addPlanet(new _space_planet__WEBPACK_IMPORTED_MODULE_2__[\"Planet\"]({\n    name: 'Venus',\n    radius: 9,\n    orbitalSpeed: 30,\n    color: '#c2a19a',\n    distance: 250\n  }));\n  sun.addPlanet(new _space_planet__WEBPACK_IMPORTED_MODULE_2__[\"Planet\"]({\n    name: 'Earth',\n    radius: 10,\n    orbitalSpeed: 20,\n    color: '#91c4cd',\n    distance: 300\n  }));\n  sun.addPlanet(new _space_planet__WEBPACK_IMPORTED_MODULE_2__[\"Planet\"]({\n    name: 'Mars',\n    radius: 5,\n    orbitalSpeed: 18,\n    color: '#977459',\n    distance: 350\n  }));\n  sun.addPlanet(new _space_planet__WEBPACK_IMPORTED_MODULE_2__[\"Planet\"]({\n    name: 'Jupiter',\n    radius: 45,\n    orbitalSpeed: 2,\n    color: '#736190',\n    distance: 450\n  }));\n  sun.addPlanet(new _space_planet__WEBPACK_IMPORTED_MODULE_2__[\"Planet\"]({\n    name: 'Saturn',\n    radius: 40,\n    orbitalSpeed: 1.4,\n    color: '#908661',\n    distance: 650\n  }));\n  sun.addPlanet(new _space_planet__WEBPACK_IMPORTED_MODULE_2__[\"Planet\"]({\n    name: 'Uranus',\n    radius: 25,\n    orbitalSpeed: 1,\n    color: '#16bba9',\n    distance: 850\n  }));\n  sun.addPlanet(new _space_planet__WEBPACK_IMPORTED_MODULE_2__[\"Planet\"]({\n    name: 'Neptune',\n    radius: 26,\n    orbitalSpeed: .6,\n    color: '#168cbb',\n    distance: 1050\n  }));\n  space.addStar(sun);\n  var helloEarth = new _space_asteroid__WEBPACK_IMPORTED_MODULE_3__[\"Asteroid\"]({\n    radius: 4,\n    color: '#909090',\n    x: width,\n    y: height\n  });\n  space.addAsteroids(helloEarth);\n  space.play();\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/space/asteroid.js":
/*!*******************************!*\
  !*** ./src/space/asteroid.js ***!
  \*******************************/
/*! exports provided: Asteroid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Asteroid\", function() { return Asteroid; });\n/* harmony import */ var _spaceObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spaceObject */ \"./src/space/spaceObject.js\");\n/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities */ \"./src/utilities.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\nvar Asteroid = /*#__PURE__*/function (_SpaceObject) {\n  _inherits(Asteroid, _SpaceObject);\n\n  var _super = _createSuper(Asteroid);\n\n  function Asteroid(_ref) {\n    var radius = _ref.radius,\n        color = _ref.color,\n        name = _ref.name,\n        x = _ref.x,\n        y = _ref.y;\n\n    _classCallCheck(this, Asteroid);\n\n    return _super.call(this, {\n      radius: radius,\n      color: color,\n      name: name,\n      x: x,\n      y: y\n    });\n  }\n\n  _createClass(Asteroid, [{\n    key: \"draw\",\n    value: function draw(context, progress) {\n      context.save();\n      context.beginPath();\n      context.lineWidth = 1;\n      context.strokeStyle = Object(_utilities__WEBPACK_IMPORTED_MODULE_1__[\"lightenDarkenColor\"])(this.color, -20);\n      context.fillStyle = this.color;\n      context.arc(this.x, this.y, this.radius, 0, Object(_utilities__WEBPACK_IMPORTED_MODULE_1__[\"degToRad\"])(360));\n      context.fill();\n      context.stroke();\n      context.closePath();\n      context.restore();\n    }\n  }]);\n\n  return Asteroid;\n}(_spaceObject__WEBPACK_IMPORTED_MODULE_0__[\"SpaceObject\"]);\n\n//# sourceURL=webpack:///./src/space/asteroid.js?");

/***/ }),

/***/ "./src/space/planet.js":
/*!*****************************!*\
  !*** ./src/space/planet.js ***!
  \*****************************/
/*! exports provided: Planet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Planet\", function() { return Planet; });\n/* harmony import */ var _spaceObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spaceObject */ \"./src/space/spaceObject.js\");\n/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities */ \"./src/utilities.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\nvar Planet = /*#__PURE__*/function (_SpaceObject) {\n  _inherits(Planet, _SpaceObject);\n\n  var _super = _createSuper(Planet);\n\n  function Planet(_ref) {\n    var _this;\n\n    var radius = _ref.radius,\n        color = _ref.color,\n        name = _ref.name,\n        distance = _ref.distance,\n        orbitalSpeed = _ref.orbitalSpeed,\n        initialAngle = _ref.initialAngle;\n\n    _classCallCheck(this, Planet);\n\n    initialAngle = initialAngle ? initialAngle : Math.round(Math.random() * 360);\n    var relativeCoords = Object(_utilities__WEBPACK_IMPORTED_MODULE_1__[\"polarToRelative\"])(distance, initialAngle);\n    _this = _super.call(this, {\n      radius: radius,\n      color: color,\n      name: name,\n      x: relativeCoords.x,\n      y: relativeCoords.y\n    });\n    _this.position = {\n      orbitalSpeed: orbitalSpeed,\n      // deg per sec\n      initialAngle: initialAngle,\n      angle: initialAngle\n    };\n    return _this;\n  }\n\n  _createClass(Planet, [{\n    key: \"draw\",\n    value: function draw(context, progress) {\n      var polarCoords = Object(_utilities__WEBPACK_IMPORTED_MODULE_1__[\"relativeToPolar\"])(this.x, this.y);\n      polarCoords.angle = this.position.angle;\n      var relativeCoords = Object(_utilities__WEBPACK_IMPORTED_MODULE_1__[\"polarToRelative\"])(polarCoords.radius, polarCoords.angle);\n      this.position.angle = this.position.initialAngle + this.position.orbitalSpeed * (progress / 1000);\n      context.save();\n      context.beginPath();\n      context.lineWidth = 1;\n      context.strokeStyle = Object(_utilities__WEBPACK_IMPORTED_MODULE_1__[\"lightenDarkenColor\"])(this.color, 20);\n      context.fillStyle = this.color;\n      context.arc(relativeCoords.x, relativeCoords.y, this.radius, 0, Object(_utilities__WEBPACK_IMPORTED_MODULE_1__[\"degToRad\"])(360));\n      context.fill();\n      context.stroke();\n      context.closePath();\n      context.restore();\n    }\n  }]);\n\n  return Planet;\n}(_spaceObject__WEBPACK_IMPORTED_MODULE_0__[\"SpaceObject\"]);\n\n//# sourceURL=webpack:///./src/space/planet.js?");

/***/ }),

/***/ "./src/space/space.js":
/*!****************************!*\
  !*** ./src/space/space.js ***!
  \****************************/
/*! exports provided: Space */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Space\", function() { return Space; });\n/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities */ \"./src/utilities.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar Space = /*#__PURE__*/function () {\n  function Space(_ref) {\n    var _this = this;\n\n    var canvas = _ref.canvas,\n        width = _ref.width,\n        height = _ref.height,\n        dpr = _ref.dpr,\n        showFps = _ref.showFps;\n\n    _classCallCheck(this, Space);\n\n    canvas.width = width * dpr;\n    canvas.height = height * dpr;\n    canvas.style.width = \"\".concat(width, \"px\");\n    canvas.style.height = \"\".concat(height, \"px\");\n    this.canvas = canvas;\n    this.canvasWidth = width;\n    this.canvasHeight = height;\n    this.showFps = !!showFps;\n    this.fps = {\n      value: 0,\n      lastCalledTime: 0,\n      lastShowedTime: 0,\n      updatingTime: .4\n    };\n    this.startedAt = performance.now();\n    this.context = canvas.getContext('2d');\n    this.context.scale(dpr, dpr);\n\n    this.context.resetTranslate = function (x, y) {\n      _this.context.resetTransform();\n\n      _this.context.scale(dpr, dpr);\n\n      _this.context.translate(x, y);\n    };\n\n    this.context.roundedRect = function (x, y, width, height, radius) {\n      if (width < 2 * radius) radius = width / 2;\n      if (height < 2 * radius) radius = height / 2;\n      this.beginPath();\n      this.moveTo(x + radius, y);\n      this.arcTo(x + width, y, x + width, y + height, radius);\n      this.arcTo(x + width, y + height, x, y + height, radius);\n      this.arcTo(x, y + height, x, y, radius);\n      this.arcTo(x, y, x + width, y, radius);\n      this.closePath();\n    };\n\n    this.clear();\n    this.asteroids = [];\n    this.stars = [];\n    this.status = 'stop';\n  }\n\n  _createClass(Space, [{\n    key: \"clear\",\n    value: function clear() {\n      this.context.resetTranslate(0, 0);\n      this.context.fillStyle = \"#535353\";\n      this.context.fillRect(0, 0, this.canvasWidth, this.canvasHeight);\n    }\n  }, {\n    key: \"addStar\",\n    value: function addStar(star) {\n      this.stars.push(star);\n    }\n  }, {\n    key: \"addAsteroids\",\n    value: function addAsteroids(asteroid) {\n      this.asteroids.push(asteroid);\n    }\n  }, {\n    key: \"drawFPS\",\n    value: function drawFPS() {\n      if (!this.fps.lastCalledTime) {\n        this.fps.lastCalledTime = performance.now();\n        this.fps.lastShowedTime = performance.now();\n        this.fps.value = 0;\n        return;\n      }\n\n      var delta = (performance.now() - this.fps.lastCalledTime) / 1000;\n      this.fps.lastCalledTime = performance.now();\n\n      if ((performance.now() - this.fps.lastShowedTime) / 1000 > this.fps.updatingTime) {\n        this.fps.lastShowedTime = performance.now();\n        this.fps.value = 1 / delta;\n      }\n\n      this.context.resetTranslate(0, 0);\n      this.context.fillStyle = '#2F2F2F';\n      this.context.roundedRect(10, 10, 120, 30, 2);\n      this.context.fill();\n      this.context.fillStyle = '#fff';\n      this.context.font = '15px monospace';\n      this.context.fillText(\"FPS: \".concat(Math.round(this.fps.value)), 20, 30);\n    }\n  }, {\n    key: \"play\",\n    value: function play() {\n      var _this2 = this;\n\n      this.status = 'play';\n\n      var animate = function animate() {\n        var progress = Math.round(performance.now() - _this2.startedAt);\n\n        _this2.clear();\n\n        _this2.stars.forEach(function (star) {\n          star.draw(_this2.context, progress);\n        });\n\n        if (_this2.showFps) {\n          _this2.drawFPS();\n        }\n\n        if (_this2.status === 'play') {\n          requestAnimationFrame(animate);\n        }\n      };\n\n      requestAnimationFrame(animate);\n    }\n  }]);\n\n  return Space;\n}();\n\n//# sourceURL=webpack:///./src/space/space.js?");

/***/ }),

/***/ "./src/space/spaceObject.js":
/*!**********************************!*\
  !*** ./src/space/spaceObject.js ***!
  \**********************************/
/*! exports provided: SpaceObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SpaceObject\", function() { return SpaceObject; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar SpaceObject = function SpaceObject(_ref) {\n  var radius = _ref.radius,\n      color = _ref.color,\n      name = _ref.name,\n      x = _ref.x,\n      y = _ref.y;\n\n  _classCallCheck(this, SpaceObject);\n\n  this.radius = radius;\n  this.color = color;\n  this.name = name;\n  this.x = x;\n  this.y = y;\n};\n\n//# sourceURL=webpack:///./src/space/spaceObject.js?");

/***/ }),

/***/ "./src/space/star.js":
/*!***************************!*\
  !*** ./src/space/star.js ***!
  \***************************/
/*! exports provided: Star */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Star\", function() { return Star; });\n/* harmony import */ var _spaceObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spaceObject */ \"./src/space/spaceObject.js\");\n/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities */ \"./src/utilities.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\nvar Star = /*#__PURE__*/function (_SpaceObject) {\n  _inherits(Star, _SpaceObject);\n\n  var _super = _createSuper(Star);\n\n  function Star(_ref) {\n    var _this;\n\n    var radius = _ref.radius,\n        color = _ref.color,\n        name = _ref.name,\n        x = _ref.x,\n        y = _ref.y;\n\n    _classCallCheck(this, Star);\n\n    _this = _super.call(this, {\n      radius: radius,\n      color: color,\n      name: name,\n      x: x,\n      y: y\n    });\n    _this.planets = [];\n    return _this;\n  }\n\n  _createClass(Star, [{\n    key: \"draw\",\n    value: function draw(context, progress) {\n      context.resetTranslate(this.x, this.y);\n      context.save();\n      context.beginPath();\n      context.shadowColor = Object(_utilities__WEBPACK_IMPORTED_MODULE_1__[\"lightenDarkenColor\"])(this.color, 10);\n      context.shadowBlur = 25;\n      context.lineWidth = 4;\n      context.strokeStyle = Object(_utilities__WEBPACK_IMPORTED_MODULE_1__[\"lightenDarkenColor\"])(this.color, 20);\n      context.fillStyle = this.color;\n      context.arc(0, 0, this.radius, 0, Object(_utilities__WEBPACK_IMPORTED_MODULE_1__[\"degToRad\"])(360));\n      context.stroke();\n      context.fill();\n      context.closePath();\n      context.restore();\n      this.planets.forEach(function (planet) {\n        planet.draw(context, progress);\n      });\n    }\n  }, {\n    key: \"addPlanet\",\n    value: function addPlanet(planet) {\n      this.planets.push(planet);\n    }\n  }]);\n\n  return Star;\n}(_spaceObject__WEBPACK_IMPORTED_MODULE_0__[\"SpaceObject\"]);\n\n//# sourceURL=webpack:///./src/space/star.js?");

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/styles.scss?");

/***/ }),

/***/ "./src/utilities.js":
/*!**************************!*\
  !*** ./src/utilities.js ***!
  \**************************/
/*! exports provided: degToRad, radToDeg, relativeToPolar, polarToRelative, animate, lightenDarkenColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"degToRad\", function() { return degToRad; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"radToDeg\", function() { return radToDeg; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"relativeToPolar\", function() { return relativeToPolar; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"polarToRelative\", function() { return polarToRelative; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"animate\", function() { return animate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lightenDarkenColor\", function() { return lightenDarkenColor; });\nfunction degToRad(degrees) {\n  return degrees * (Math.PI / 180);\n}\nfunction radToDeg(radians) {\n  return radians * (180 / Math.PI);\n}\nfunction relativeToPolar(x, y) {\n  var polarCoords = {\n    radius: Math.round(Math.sqrt(x * x + y * y) * 1000) / 1000,\n    angle: Math.round(radToDeg(Math.atan(y / x)) * 1000) / 1000\n  }; // fix positions\n\n  if (polarCoords.angle === 90 && x === 0) {\n    polarCoords.angle = 90;\n  } else if (polarCoords.angle === -90 && x === 0) {\n    polarCoords.angle = 270;\n  } else {\n    if (x <= 0 && y > 0) {\n      polarCoords.angle += 180;\n    }\n\n    if (x <= 0 && y <= 0) {\n      polarCoords.angle += 180;\n    }\n\n    if (x > 0 && y <= 0) {\n      polarCoords.angle += 360;\n    }\n  }\n\n  return polarCoords;\n}\nfunction polarToRelative(radius, angle) {\n  return {\n    x: Math.round(radius * Math.cos(degToRad(angle)) * 1000) / 1000,\n    y: Math.round(radius * Math.sin(degToRad(angle)) * 1000) / 1000\n  };\n}\nfunction animate(_ref) {\n  var timing = _ref.timing,\n      draw = _ref.draw,\n      duration = _ref.duration,\n      callback = _ref.callback;\n  var start = performance.now();\n  requestAnimationFrame(function animate(time) {\n    var timeFraction = (time - start) / duration;\n    if (timeFraction > 1) timeFraction = 1;\n    var progress = timing(timeFraction);\n    draw(progress);\n\n    if (timeFraction < 1) {\n      requestAnimationFrame(animate);\n    } else {\n      callback();\n    }\n  });\n}\nfunction lightenDarkenColor(col, amt) {\n  var usePound = false;\n\n  if (col[0] == \"#\") {\n    col = col.slice(1);\n    usePound = true;\n  }\n\n  var num = parseInt(col, 16);\n  var r = (num >> 16) + amt;\n  if (r > 255) r = 255;else if (r < 0) r = 0;\n  var b = (num >> 8 & 0x00FF) + amt;\n  if (b > 255) b = 255;else if (b < 0) b = 0;\n  var g = (num & 0x0000FF) + amt;\n  if (g > 255) g = 255;else if (g < 0) g = 0;\n  return (usePound ? \"#\" : \"\") + (g | b << 8 | r << 16).toString(16);\n}\n\n//# sourceURL=webpack:///./src/utilities.js?");

/***/ })

/******/ });