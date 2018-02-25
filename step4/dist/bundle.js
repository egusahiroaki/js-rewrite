let Sample =
/** ****/ (function(modules) { // webpackBootstrap
/** ****/ 	// The module cache
/** ****/ 	let installedModules = {};
/** ****/
/** ****/ 	// The require function
/** ****/ 	function __webpack_require__(moduleId) {
/** ****/
/** ****/ 		// Check if module is in cache
/** ****/ 		if (installedModules[moduleId]) {
/** ****/ 			return installedModules[moduleId].exports;
/** ****/}
/** ****/ 		// Create a new module (and put it into the cache)
/** ****/ 		let module = installedModules[moduleId] = {
/** ****/ 			i: moduleId,
/** ****/ 			l: false,
/** ****/ 			exports: {},
/** ****/ 		};
/** ****/
/** ****/ 		// Execute the module function
/** ****/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/** ****/
/** ****/ 		// Flag the module as loaded
/** ****/ 		module.l = true;
/** ****/
/** ****/ 		// Return the exports of the module
/** ****/ 		return module.exports;
/** ****/}
/** ****/
/** ****/
/** ****/ 	// expose the modules object (__webpack_modules__)
/** ****/ 	__webpack_require__.m = modules;
/** ****/
/** ****/ 	// expose the module cache
/** ****/ 	__webpack_require__.c = installedModules;
/** ****/
/** ****/ 	// define getter function for harmony exports
/** ****/ 	__webpack_require__.d = function(exports, name, getter) {
/** ****/ 		if (!__webpack_require__.o(exports, name)) {
/** ****/ 			Object.defineProperty(exports, name, {
/** ****/ 				configurable: false,
/** ****/ 				enumerable: true,
/** ****/ 				get: getter,
/** ****/ 			});
/** ****/}
/** ****/};
/** ****/
/** ****/ 	// getDefaultExport function for compatibility with non-harmony modules
/** ****/ 	__webpack_require__.n = function(module) {
/** ****/ 		let getter = module && module.__esModule ?
/** ****/ 			function getDefault() {
 return module['default'];
} :
/** ****/ 			function getModuleExports() {
 return module;
};
/** ****/ 		__webpack_require__.d(getter, 'a', getter);
/** ****/ 		return getter;
/** ****/};
/** ****/
/** ****/ 	// Object.prototype.hasOwnProperty.call
/** ****/ 	__webpack_require__.o = function(object, property) {
 return Object.prototype.hasOwnProperty.call(object, property);
};
/** ****/
/** ****/ 	// __webpack_public_path__
/** ****/ 	__webpack_require__.p = '/dist';
/** ****/
/** ****/ 	// Load entry module and return exports
/** ****/ 	return __webpack_require__(__webpack_require__.s = 0);
/** ****/ })
/** **********************************************************************/
/** ****/ ([
/* 0 */
/** */ (function(module, __webpack_exports__, __webpack_require__) {
'use strict';
Object.defineProperty(__webpack_exports__, '__esModule', {value: true});
/* harmony import */ let __WEBPACK_IMPORTED_MODULE_0__person__ = __webpack_require__(1);
/* harmony import */ let __WEBPACK_IMPORTED_MODULE_1__dog__ = __webpack_require__(2);
/* harmony import */ let __WEBPACK_IMPORTED_MODULE_2__ball__ = __webpack_require__(3);


exports.call = function(personName, dogName, ballColor) {
  let alice = new __WEBPACK_IMPORTED_MODULE_0__person__['a'](personName);

  console.log(alice.sayName());

  let newPet = new __WEBPACK_IMPORTED_MODULE_1__dog__['a']();
  alice.keep(newPet);
  alice.namePet(dogName);
  console.log(newPet.say());
  console.log(newPet.sayOutside());
  let ball = new __WEBPACK_IMPORTED_MODULE_2__ball__['a'](ballColor);
  newPet.find(ball);
  ball.rollOver();
  newPet.find(ball);
};

// Alice
// Alice さんのペットの名前は、 Max です
// わんわん!!
// 家の外からわんわん!!
// 犬はうろうろしているよ!
// 赤色のボールを見つけたよ!
/** */}),
/* 1 */
/** */ (function(module, __webpack_exports__, __webpack_require__) {
'use strict';
/* harmony default export */ __webpack_exports__['a'] = (Person = function Person(name) {
  this.name = name;
});

Person.prototype.sayName = function() {
  return this.name;
};

Person.prototype.keep = function(dog) {
  this.dog = dog;
};

// ペットに名付ける
Person.prototype.namePet = function(name) {
  this.dog.getName(name);
  console.log(this.name + ' さんのペットの名前は、 ' + this.dog.name + ' です');
};
/** */}),
/* 2 */
/** */ (function(module, __webpack_exports__, __webpack_require__) {
'use strict';
/* harmony default export */ __webpack_exports__['a'] = (Dog = function Dog() {});

Dog.prototype.getName = function(name) {
  this.name = name;
};

Dog.prototype.say = function() {
  return 'わんわん!!';
};

Dog.prototype.sayOutside = function() {
  return '家の外からわんわん!!';
};

Dog.prototype.find = function(ball) {
  if (ball.canBeFound) {
    console.log(ball.color + '色のボールを見つけたよ!');
  } else {
    console.log('犬はうろうろしているよ!');
  }
};
/** */}),
/* 3 */
/** */ (function(module, __webpack_exports__, __webpack_require__) {
'use strict';
/* harmony default export */ __webpack_exports__['a'] = (Ball = function Ball(color) {
  this.color = color;
  this.canBeFound = false;
});

Ball.prototype.stop = function(name) {
  this.canBeFound = false;
};

Ball.prototype.rollOver = function() {
  this.canBeFound = true;
};
/** */}),
/** ****/ ]);
