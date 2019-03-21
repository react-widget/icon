/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./examples/Demo.js":
/*!**************************!*\
  !*** ./examples/Demo.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf3 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _DemoList = _interopRequireDefault(__webpack_require__(/*! ./DemoList */ "./examples/DemoList.js"));

var Demo =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Demo, _Component);

  function Demo() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, Demo);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Demo)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      current: _DemoList.default[0]
    });
    return _this;
  }

  (0, _createClass2.default)(Demo, [{
    key: "onDemoChange",
    value: function onDemoChange(item, e) {
      this.setState({
        current: item
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var current = this.state.current;
      return _react.default.createElement("div", {
        className: "container"
      }, _react.default.createElement("div", {
        className: "slider"
      }, _DemoList.default.map(function (item, i) {
        return _react.default.createElement("div", {
          className: current === item ? 'active' : '',
          onClick: _this2.onDemoChange.bind(_this2, item)
        }, item.label);
      })), _react.default.createElement("div", {
        className: "content"
      }, current ? _react.default.createElement(current.component, null) : null));
    }
  }]);
  return Demo;
}(_react.Component);

exports.default = Demo;

/***/ }),

/***/ "./examples/DemoList.js":
/*!******************************!*\
  !*** ./examples/DemoList.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _demo = _interopRequireDefault(__webpack_require__(/*! ./demos/demo1 */ "./examples/demos/demo1.js"));

// import Demo2 from './demos/Demo2';
// import Demo3 from './demos/Demo3';
// import Demo4 from './demos/Demo4';
var _default = [{
  label: '基本功能',
  component: _demo.default
}];
exports.default = _default;

/***/ }),

/***/ "./examples/demos/demo1.js":
/*!*********************************!*\
  !*** ./examples/demos/demo1.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _icons = _interopRequireDefault(__webpack_require__(/*! ./icons.json */ "./examples/demos/icons.json"));

var _index = _interopRequireDefault(__webpack_require__(/*! ../../src/index */ "./src/index.js"));

var DEMO =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(DEMO, _Component);

  function DEMO() {
    (0, _classCallCheck2.default)(this, DEMO);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(DEMO).apply(this, arguments));
  }

  (0, _createClass2.default)(DEMO, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", null, _icons.default.map(function (icon) {
        return _react.default.createElement("div", {
          className: "icon-item"
        }, _react.default.createElement(_index.default, {
          type: icon
        }), _react.default.createElement("div", null, icon));
      }));
    }
  }]);
  return DEMO;
}(_react.Component);

exports.default = DEMO;

/***/ }),

/***/ "./examples/demos/icons.json":
/*!***********************************!*\
  !*** ./examples/demos/icons.json ***!
  \***********************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480, 481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 564, 565, 566, 567, 568, 569, 570, 571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592, 593, 594, 595, 596, 597, 598, 599, 600, 601, 602, 603, 604, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630, 631, 632, 633, 634, 635, 636, 637, 638, 639, 640, 641, 642, 643, 644, 645, 646, 647, 648, 649, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660, 661, 662, 663, 664, 665, 666, 667, 668, 669, 670, 671, 672, 673, 674, 675, 676, 677, 678, 679, 680, 681, 682, 683, 684, 685, 686, 687, 688, 689, 690, 691, 692, 693, 694, 695, 696, 697, 698, 699, 700, 701, 702, 703, 704, 705, 706, 707, 708, 709, 710, 711, 712, 713, 714, 715, 716, 717, 718, 719, 720, 721, 722, 723, 724, 725, 726, 727, 728, 729, 730, 731, 732, 733, 734, 735, 736, 737, 738, 739, 740, 741, 742, 743, 744, 745, 746, 747, 748, 749, 750, 751, 752, 753, 754, 755, 756, 757, 758, 759, 760, 761, 762, 763, 764, 765, 766, 767, 768, 769, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780, 781, 782, 783, 784, 785, 786, 787, 788, 789, 790, 791, 792, 793, 794, 795, 796, 797, 798, 799, 800, 801, 802, 803, 804, 805, 806, 807, 808, 809, 810, 811, 812, 813, 814, 815, 816, 817, 818, 819, 820, 821, 822, 823, 824, 825, 826, 827, 828, 829, 830, 831, 832, 833, 834, 835, 836, 837, 838, 839, 840, 841, 842, 843, 844, 845, 846, 847, 848, 849, 850, 851, 852, 853, 854, 855, 856, 857, 858, 859, default */
/***/ (function(module) {

module.exports = ["ios-add","md-add","ios-add-circle","ios-add-circle-outline","md-add-circle","ios-alarm","ios-alarm-outline","md-alarm","ios-albums","ios-albums-outline","md-albums","ios-alert","ios-alert-outline","md-alert","ios-american-football","ios-american-football-outline","md-american-football","ios-analytics","ios-analytics-outline","md-analytics","logo-android","logo-angular","ios-aperture","ios-aperture-outline","md-aperture","logo-apple","ios-apps","ios-apps-outline","md-apps","ios-appstore","ios-appstore-outline","md-appstore","ios-archive","ios-archive-outline","md-archive","ios-arrow-back","md-arrow-back","ios-arrow-down","md-arrow-down","ios-arrow-dropdown","md-arrow-dropdown","ios-arrow-dropdown-circle","md-arrow-dropdown-circle","ios-arrow-dropleft","md-arrow-dropleft","ios-arrow-dropleft-circle","md-arrow-dropleft-circle","ios-arrow-dropright","md-arrow-dropright","ios-arrow-dropright-circle","md-arrow-dropright-circle","ios-arrow-dropup","md-arrow-dropup","ios-arrow-dropup-circle","md-arrow-dropup-circle","ios-arrow-forward","md-arrow-forward","ios-arrow-round-back","md-arrow-round-back","ios-arrow-round-down","md-arrow-round-down","ios-arrow-round-forward","md-arrow-round-forward","ios-arrow-round-up","md-arrow-round-up","ios-arrow-up","md-arrow-up","ios-at","ios-at-outline","md-at","ios-attach","md-attach","ios-backspace","ios-backspace-outline","md-backspace","ios-barcode","ios-barcode-outline","md-barcode","ios-baseball","ios-baseball-outline","md-baseball","ios-basket","ios-basket-outline","md-basket","ios-basketball","ios-basketball-outline","md-basketball","ios-battery-charging","md-battery-charging","ios-battery-dead","md-battery-dead","ios-battery-full","md-battery-full","ios-beaker","ios-beaker-outline","md-beaker","ios-beer","ios-beer-outline","md-beer","ios-bicycle","md-bicycle","logo-bitcoin","ios-bluetooth","md-bluetooth","ios-boat","ios-boat-outline","md-boat","ios-body","ios-body-outline","md-body","ios-bonfire","ios-bonfire-outline","md-bonfire","ios-book","ios-book-outline","md-book","ios-bookmark","ios-bookmark-outline","md-bookmark","ios-bookmarks","ios-bookmarks-outline","md-bookmarks","ios-bowtie","ios-bowtie-outline","md-bowtie","ios-briefcase","ios-briefcase-outline","md-briefcase","ios-browsers","ios-browsers-outline","md-browsers","ios-brush","ios-brush-outline","md-brush","logo-buffer","ios-bug","ios-bug-outline","md-bug","ios-build","ios-build-outline","md-build","ios-bulb","ios-bulb-outline","md-bulb","ios-bus","ios-bus-outline","md-bus","ios-cafe","ios-cafe-outline","md-cafe","ios-calculator","ios-calculator-outline","md-calculator","ios-calendar","ios-calendar-outline","md-calendar","ios-call","ios-call-outline","md-call","ios-camera","ios-camera-outline","md-camera","ios-car","ios-car-outline","md-car","ios-card","ios-card-outline","md-card","ios-cart","ios-cart-outline","md-cart","ios-cash","ios-cash-outline","md-cash","ios-chatboxes","ios-chatboxes-outline","md-chatboxes","ios-chatbubbles","ios-chatbubbles-outline","md-chatbubbles","ios-checkbox","ios-checkbox-outline","md-checkbox","md-checkbox-outline","ios-checkmark","md-checkmark","ios-checkmark-circle","ios-checkmark-circle-outline","md-checkmark-circle","md-checkmark-circle-outline","logo-chrome","ios-clipboard","ios-clipboard-outline","md-clipboard","ios-clock","ios-clock-outline","md-clock","ios-close","md-close","ios-close-circle","ios-close-circle-outline","md-close-circle","ios-closed-captioning","ios-closed-captioning-outline","md-closed-captioning","ios-cloud","ios-cloud-outline","md-cloud","ios-cloud-circle","ios-cloud-circle-outline","md-cloud-circle","ios-cloud-done","ios-cloud-done-outline","md-cloud-done","ios-cloud-download","ios-cloud-download-outline","md-cloud-download","md-cloud-outline","ios-cloud-upload","ios-cloud-upload-outline","md-cloud-upload","ios-cloudy","ios-cloudy-outline","md-cloudy","ios-cloudy-night","ios-cloudy-night-outline","md-cloudy-night","ios-code","md-code","ios-code-download","md-code-download","ios-code-working","md-code-working","logo-codepen","ios-cog","ios-cog-outline","md-cog","ios-color-fill","ios-color-fill-outline","md-color-fill","ios-color-filter","ios-color-filter-outline","md-color-filter","ios-color-palette","ios-color-palette-outline","md-color-palette","ios-color-wand","ios-color-wand-outline","md-color-wand","ios-compass","ios-compass-outline","md-compass","ios-construct","ios-construct-outline","md-construct","ios-contact","ios-contact-outline","md-contact","ios-contacts","ios-contacts-outline","md-contacts","ios-contract","md-contract","ios-contrast","md-contrast","ios-copy","ios-copy-outline","md-copy","ios-create","ios-create-outline","md-create","ios-crop","ios-crop-outline","md-crop","logo-css3","ios-cube","ios-cube-outline","md-cube","ios-cut","ios-cut-outline","md-cut","logo-designernews","ios-desktop","ios-desktop-outline","md-desktop","ios-disc","ios-disc-outline","md-disc","ios-document","ios-document-outline","md-document","ios-done-all","md-done-all","ios-download","ios-download-outline","md-download","logo-dribbble","logo-dropbox","ios-easel","ios-easel-outline","md-easel","ios-egg","ios-egg-outline","md-egg","logo-euro","ios-exit","ios-exit-outline","md-exit","ios-expand","md-expand","ios-eye","ios-eye-outline","md-eye","ios-eye-off","ios-eye-off-outline","md-eye-off","logo-facebook","ios-fastforward","ios-fastforward-outline","md-fastforward","ios-female","md-female","ios-filing","ios-filing-outline","md-filing","ios-film","ios-film-outline","md-film","ios-finger-print","md-finger-print","ios-flag","ios-flag-outline","md-flag","ios-flame","ios-flame-outline","md-flame","ios-flash","ios-flash-outline","md-flash","ios-flask","ios-flask-outline","md-flask","ios-flower","ios-flower-outline","md-flower","ios-folder","ios-folder-outline","md-folder","ios-folder-open","ios-folder-open-outline","md-folder-open","ios-football","ios-football-outline","md-football","logo-foursquare","logo-freebsd-devil","ios-funnel","ios-funnel-outline","md-funnel","ios-game-controller-a","ios-game-controller-a-outline","md-game-controller-a","ios-game-controller-b","ios-game-controller-b-outline","md-game-controller-b","ios-git-branch","md-git-branch","ios-git-commit","md-git-commit","ios-git-compare","md-git-compare","ios-git-merge","md-git-merge","ios-git-network","md-git-network","ios-git-pull-request","md-git-pull-request","logo-github","ios-glasses","ios-glasses-outline","md-glasses","ios-globe","ios-globe-outline","md-globe","logo-google","logo-googleplus","ios-grid","ios-grid-outline","md-grid","logo-hackernews","ios-hammer","ios-hammer-outline","md-hammer","ios-hand","ios-hand-outline","md-hand","ios-happy","ios-happy-outline","md-happy","ios-headset","ios-headset-outline","md-headset","ios-heart","ios-heart-outline","md-heart","md-heart-outline","ios-help","md-help","ios-help-buoy","ios-help-buoy-outline","md-help-buoy","ios-help-circle","ios-help-circle-outline","md-help-circle","ios-home","ios-home-outline","md-home","logo-html5","ios-ice-cream","ios-ice-cream-outline","md-ice-cream","ios-image","ios-image-outline","md-image","ios-images","ios-images-outline","md-images","ios-infinite","ios-infinite-outline","md-infinite","ios-information","md-information","ios-information-circle","ios-information-circle-outline","md-information-circle","logo-instagram","ios-ionic","ios-ionic-outline","md-ionic","ios-ionitron","ios-ionitron-outline","md-ionitron","logo-javascript","ios-jet","ios-jet-outline","md-jet","ios-key","ios-key-outline","md-key","ios-keypad","ios-keypad-outline","md-keypad","ios-laptop","md-laptop","ios-leaf","ios-leaf-outline","md-leaf","ios-link","ios-link-outline","md-link","logo-linkedin","ios-list","md-list","ios-list-box","ios-list-box-outline","md-list-box","ios-locate","ios-locate-outline","md-locate","ios-lock","ios-lock-outline","md-lock","ios-log-in","md-log-in","ios-log-out","md-log-out","ios-magnet","ios-magnet-outline","md-magnet","ios-mail","ios-mail-outline","md-mail","ios-mail-open","ios-mail-open-outline","md-mail-open","ios-male","md-male","ios-man","ios-man-outline","md-man","ios-map","ios-map-outline","md-map","logo-markdown","ios-medal","ios-medal-outline","md-medal","ios-medical","ios-medical-outline","md-medical","ios-medkit","ios-medkit-outline","md-medkit","ios-megaphone","ios-megaphone-outline","md-megaphone","ios-menu","ios-menu-outline","md-menu","ios-mic","ios-mic-outline","md-mic","ios-mic-off","ios-mic-off-outline","md-mic-off","ios-microphone","ios-microphone-outline","md-microphone","ios-moon","ios-moon-outline","md-moon","ios-more","ios-more-outline","md-more","ios-move","md-move","ios-musical-note","ios-musical-note-outline","md-musical-note","ios-musical-notes","ios-musical-notes-outline","md-musical-notes","ios-navigate","ios-navigate-outline","md-navigate","ios-no-smoking","ios-no-smoking-outline","md-no-smoking","logo-nodejs","ios-notifications","ios-notifications-outline","md-notifications","ios-notifications-off","ios-notifications-off-outline","md-notifications-off","md-notifications-outline","ios-nuclear","ios-nuclear-outline","md-nuclear","ios-nutrition","ios-nutrition-outline","md-nutrition","logo-octocat","ios-open","ios-open-outline","md-open","ios-options","ios-options-outline","md-options","ios-outlet","ios-outlet-outline","md-outlet","ios-paper","ios-paper-outline","md-paper","ios-paper-plane","ios-paper-plane-outline","md-paper-plane","ios-partly-sunny","ios-partly-sunny-outline","md-partly-sunny","ios-pause","ios-pause-outline","md-pause","ios-paw","ios-paw-outline","md-paw","ios-people","ios-people-outline","md-people","ios-person","ios-person-outline","md-person","ios-person-add","ios-person-add-outline","md-person-add","ios-phone-landscape","md-phone-landscape","ios-phone-portrait","md-phone-portrait","ios-photos","ios-photos-outline","md-photos","ios-pie","ios-pie-outline","md-pie","ios-pin","ios-pin-outline","md-pin","ios-pint","ios-pint-outline","md-pint","logo-pinterest","ios-pizza","ios-pizza-outline","md-pizza","ios-plane","ios-plane-outline","md-plane","ios-planet","ios-planet-outline","md-planet","ios-play","ios-play-outline","md-play","logo-playstation","ios-podium","ios-podium-outline","md-podium","ios-power","ios-power-outline","md-power","ios-pricetag","ios-pricetag-outline","md-pricetag","ios-pricetags","ios-pricetags-outline","md-pricetags","ios-print","ios-print-outline","md-print","ios-pulse","ios-pulse-outline","md-pulse","logo-python","ios-qr-scanner","md-qr-scanner","ios-quote","ios-quote-outline","md-quote","ios-radio","ios-radio-outline","md-radio","ios-radio-button-off","md-radio-button-off","ios-radio-button-on","md-radio-button-on","ios-rainy","ios-rainy-outline","md-rainy","ios-recording","ios-recording-outline","md-recording","logo-reddit","ios-redo","ios-redo-outline","md-redo","ios-refresh","md-refresh","ios-refresh-circle","ios-refresh-circle-outline","md-refresh-circle","ios-remove","md-remove","ios-remove-circle","ios-remove-circle-outline","md-remove-circle","ios-reorder","md-reorder","ios-repeat","md-repeat","ios-resize","md-resize","ios-restaurant","ios-restaurant-outline","md-restaurant","ios-return-left","md-return-left","ios-return-right","md-return-right","ios-reverse-camera","ios-reverse-camera-outline","md-reverse-camera","ios-rewind","ios-rewind-outline","md-rewind","ios-ribbon","ios-ribbon-outline","md-ribbon","ios-rose","ios-rose-outline","md-rose","logo-rss","ios-sad","ios-sad-outline","md-sad","logo-sass","ios-school","ios-school-outline","md-school","ios-search","ios-search-outline","md-search","ios-send","ios-send-outline","md-send","ios-settings","ios-settings-outline","md-settings","ios-share","ios-share-outline","md-share","ios-share-alt","ios-share-alt-outline","md-share-alt","ios-shirt","ios-shirt-outline","md-shirt","ios-shuffle","md-shuffle","ios-skip-backward","ios-skip-backward-outline","md-skip-backward","ios-skip-forward","ios-skip-forward-outline","md-skip-forward","logo-skype","logo-snapchat","ios-snow","ios-snow-outline","md-snow","ios-speedometer","ios-speedometer-outline","md-speedometer","ios-square","ios-square-outline","md-square","md-square-outline","ios-star","ios-star-outline","md-star","ios-star-half","md-star-half","md-star-outline","ios-stats","ios-stats-outline","md-stats","logo-steam","ios-stopwatch","ios-stopwatch-outline","md-stopwatch","ios-subway","ios-subway-outline","md-subway","ios-sunny","ios-sunny-outline","md-sunny","ios-swap","md-swap","ios-switch","ios-switch-outline","md-switch","ios-sync","md-sync","ios-tablet-landscape","md-tablet-landscape","ios-tablet-portrait","md-tablet-portrait","ios-tennisball","ios-tennisball-outline","md-tennisball","ios-text","ios-text-outline","md-text","ios-thermometer","ios-thermometer-outline","md-thermometer","ios-thumbs-down","ios-thumbs-down-outline","md-thumbs-down","ios-thumbs-up","ios-thumbs-up-outline","md-thumbs-up","ios-thunderstorm","ios-thunderstorm-outline","md-thunderstorm","ios-time","ios-time-outline","md-time","ios-timer","ios-timer-outline","md-timer","ios-train","ios-train-outline","md-train","ios-transgender","md-transgender","ios-trash","ios-trash-outline","md-trash","ios-trending-down","md-trending-down","ios-trending-up","md-trending-up","ios-trophy","ios-trophy-outline","md-trophy","logo-tumblr","logo-tux","logo-twitch","logo-twitter","ios-umbrella","ios-umbrella-outline","md-umbrella","ios-undo","ios-undo-outline","md-undo","ios-unlock","ios-unlock-outline","md-unlock","logo-usd","ios-videocam","ios-videocam-outline","md-videocam","logo-vimeo","ios-volume-down","md-volume-down","ios-volume-mute","md-volume-mute","ios-volume-off","md-volume-off","ios-volume-up","md-volume-up","ios-walk","md-walk","ios-warning","ios-warning-outline","md-warning","ios-watch","md-watch","ios-water","ios-water-outline","md-water","logo-whatsapp","ios-wifi","ios-wifi-outline","md-wifi","logo-windows","ios-wine","ios-wine-outline","md-wine","ios-woman","ios-woman-outline","md-woman","logo-wordpress","logo-xbox","logo-yahoo","logo-yen","logo-youtube","ios-loading"];

/***/ }),

/***/ "./examples/index.js":
/*!***************************!*\
  !*** ./examples/index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

__webpack_require__(/*! ./style/index.scss */ "./examples/style/index.scss");

__webpack_require__(/*! ./style/animate.scss */ "./examples/style/animate.scss");

__webpack_require__(/*! ../src/style/index.scss */ "./src/style/index.scss");

var _Demo = _interopRequireDefault(__webpack_require__(/*! ./Demo */ "./examples/Demo.js"));

_reactDom.default.render(_react.default.createElement(_Demo.default, null), demo);

/***/ }),

/***/ "./examples/style/animate.scss":
/*!*************************************!*\
  !*** ./examples/style/animate.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./examples/style/index.scss":
/*!***********************************!*\
  !*** ./examples/style/index.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/objectWithoutProperties.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var Icon =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Icon, _Component);

  function Icon() {
    (0, _classCallCheck2.default)(this, Icon);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Icon).apply(this, arguments));
  }

  (0, _createClass2.default)(Icon, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          type = _this$props.type,
          spin = _this$props.spin,
          className = _this$props.className,
          other = (0, _objectWithoutProperties2.default)(_this$props, ["prefixCls", "type", "spin", "className"]);
      return _react.default.createElement("i", (0, _extends2.default)({}, other, {
        className: (0, _classnames.default)(prefixCls, "".concat(prefixCls, "-").concat(type), className, (0, _defineProperty2.default)({}, "".concat(prefixCls, "-spin"), spin))
      }));
    }
  }]);
  return Icon;
}(_react.Component);

exports.default = Icon;
(0, _defineProperty2.default)(Icon, "propTypes", {
  prefixCls: _propTypes.default.string,
  className: _propTypes.default.string,
  type: _propTypes.default.string.isRequired,
  spin: _propTypes.default.bool
});
(0, _defineProperty2.default)(Icon, "defaultProps", {
  prefixCls: 'rw-icon',
  spin: false
});

/***/ }),

/***/ "./src/style/index.scss":
/*!******************************!*\
  !*** ./src/style/index.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!********************************************************************************************************************!*\
  !*** multi ./node_modules/packez/lib/fetchPolyfills.js ./node_modules/packez/lib/polyfills.js ./examples/index.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! D:\wamp\www\github-projects\react-widget\icon\node_modules\packez\lib\fetchPolyfills.js */"./node_modules/packez/lib/fetchPolyfills.js");
__webpack_require__(/*! D:\wamp\www\github-projects\react-widget\icon\node_modules\packez\lib\polyfills.js */"./node_modules/packez/lib/polyfills.js");
module.exports = __webpack_require__(/*! ./examples/index.js */"./examples/index.js");


/***/ })

/******/ });
//# sourceMappingURL=index.571667a1.js.map