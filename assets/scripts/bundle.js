/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var bulletsStatus = function bulletsStatus(allBullets, currentPosition) {

  allBullets.forEach(function (bullet, index) {
    index === currentPosition ? bullet.classList.add('bullet--active') : bullet.classList.remove('bullet--active');
  });
};

exports.default = bulletsStatus;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var movementsLimit = function movementsLimit(states, btnBack, btnNext) {

  var isFirstSlide = states.move === 0;

  if (isFirstSlide) {
    states.permission.back = false;
    btnBack.disabled = true;
  } else {
    states.permission.back = true;
    btnBack.disabled = false;
  }

  var isLastSlide = states.move === (states.totalSlides - 1) * -100;

  if (isLastSlide) {
    states.permission.next = false;
    btnNext.disabled = true;
  } else {
    states.permission.next = true;
    btnNext.disabled = false;
  }
};

exports.default = movementsLimit;

/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var createBullets = function createBullets(allSlides) {
  allSlides.forEach(function (el, i) {
    var li = document.createElement('li');
    li.classList.add("bullet");

    if (i === 0) li.classList.add('bullet--active');

    li.innerHTML = '\n      <button class="bullet__button">\n        <svg  class="bullet__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n          <title>Avan\xE7ar para a ' + (i + 1) + '\xB0 not\xEDcia</title>\n          <circle cx="12" cy="12" r="12"/>\n        </svg>\n      </button>\n    ';

    carouselBullets.appendChild(li);
  });
};

exports.default = createBullets;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _movementsLimit = __webpack_require__(1);

var _movementsLimit2 = _interopRequireDefault(_movementsLimit);

var _bulletsStatus = __webpack_require__(0);

var _bulletsStatus2 = _interopRequireDefault(_bulletsStatus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var movePositions = function movePositions(value, state, allSlides, allBullets, btnBack, btnNext) {

  var isBackMovement = value < 0;
  var isNextMovement = value > 0;

  var movePercent = value * 100 * -1;

  if (isBackMovement && state.permission.back) {

    allSlides.forEach(function (slide) {
      slide.style.transform = 'translateX(' + (movePercent + state.move) + '%)';
    });

    // Update State
    state.move += movePercent;

    (0, _movementsLimit2.default)(state, btnBack, btnNext);

    var currentPosition = state.move / 100 * -1;

    (0, _bulletsStatus2.default)(allBullets, currentPosition);
  }

  if (isNextMovement && state.permission.next) {

    allSlides.forEach(function (slide) {
      slide.style.transform = 'translateX(' + (movePercent + state.move) + '%)';
    });

    state.move += movePercent;

    (0, _movementsLimit2.default)(state, btnBack, btnNext);

    var _currentPosition = state.move / 100 * -1;

    (0, _bulletsStatus2.default)(allBullets, _currentPosition);
  }
};
exports.default = movePositions;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _movementsLimit = __webpack_require__(1);

var _movementsLimit2 = _interopRequireDefault(_movementsLimit);

var _bulletsStatus = __webpack_require__(0);

var _bulletsStatus2 = _interopRequireDefault(_bulletsStatus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var moveToSpecificPosition = function moveToSpecificPosition(value, states, allSlides, allBullets, btnBack, btnNext) {

  var movePercent = value * 100 * -1;

  allSlides.forEach(function (slide) {
    slide.style.transform = 'translateX(' + movePercent + '%)';
  });

  states.move = movePercent;

  (0, _movementsLimit2.default)(states, btnBack, btnNext);
  (0, _bulletsStatus2.default)(allBullets, value);
};

exports.default = moveToSpecificPosition;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _addKeyboardEventListener = __webpack_require__(7);

var _addKeyboardEventListener2 = _interopRequireDefault(_addKeyboardEventListener);

var _movementsLimit = __webpack_require__(1);

var _movementsLimit2 = _interopRequireDefault(_movementsLimit);

var _bulletsStatus = __webpack_require__(0);

var _bulletsStatus2 = _interopRequireDefault(_bulletsStatus);

var _createBullets = __webpack_require__(3);

var _createBullets2 = _interopRequireDefault(_createBullets);

var _moveToSpecificPosition = __webpack_require__(5);

var _moveToSpecificPosition2 = _interopRequireDefault(_moveToSpecificPosition);

var _movePositions = __webpack_require__(4);

var _movePositions2 = _interopRequireDefault(_movePositions);

var _videoTracker = __webpack_require__(11);

var _videoTracker2 = _interopRequireDefault(_videoTracker);

var _newSynthesis = __webpack_require__(10);

var _newSynthesis2 = _interopRequireDefault(_newSynthesis);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----------------------------------------------------------
// Slides DOM Elements
// ----------------------------------------------------------

// ----------------
// Video Tracking
// ----------------

// ----------------------------------------------------------
// Modules
// ----------------------------------------------------------

// ----------------
// Helpers
// ----------------

var allSlides = document.querySelectorAll('.carousel__slide');

// ----------------
// Speech Synthesis
// ----------------

// ----------------
// Slides
// ----------------

var btnNext = document.getElementById('btnNext');
var btnBack = document.getElementById('btnBack');
var carouselBullets = document.getElementById('carouselBullets');

// -----------------------------
// States
// -----------------------------

var state = {
  move: 0,
  totalSlides: allSlides.length,
  permission: {
    back: false,
    next: true
  }

  // -----------------------------
  // Create Bullets
  // -----------------------------

};(0, _createBullets2.default)(allSlides);

var allBullets = document.querySelectorAll('.bullet');

allBullets.forEach(function (bullet, index) {
  bullet.addEventListener('click', function () {
    (0, _moveToSpecificPosition2.default)(index, state, allSlides, allBullets, btnBack, btnNext);
  });
});

// -----------------------------
// Controls
// -----------------------------

var nextSlide = function nextSlide() {
  (0, _movePositions2.default)(1, state, allSlides, allBullets, btnBack, btnNext);
};

var backSlide = function backSlide() {
  (0, _movePositions2.default)(-1, state, allSlides, allBullets, btnBack, btnNext);
};

// -----------------------------
// Buttons
// -----------------------------

btnNext.addEventListener('click', function () {
  return nextSlide();
});
btnBack.addEventListener('click', function () {
  return backSlide();
});

// -----------------------------
// Keyboard
// -----------------------------

(0, _addKeyboardEventListener2.default)(39, nextSlide);
(0, _addKeyboardEventListener2.default)(40, nextSlide);
(0, _addKeyboardEventListener2.default)(37, backSlide);
(0, _addKeyboardEventListener2.default)(38, backSlide);

// ----------------------------------------------------------
// Video DOM Elements
// ----------------------------------------------------------

var camera = document.getElementById('camera');

// -----------------------------
// Control video Tracker
// -----------------------------

var videoTracking = (0, _videoTracker2.default)('#camera', nextSlide, backSlide);

var startVideoTracker = function startVideoTracker() {
  videoTracking.run();
  camera.classList.add('camera--on');
};

var stopVideoTracker = function stopVideoTracker() {
  videoTracking.stop();
  camera.classList.remove('camera--on');
};

// ----------------------------------------------------------
// Audio DOM Elements
// ----------------------------------------------------------

var result = document.getElementById('micRes');
var mic = document.getElementById('mic');

// -----------------------------
// Speech Recognition
// -----------------------------

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var recognition = new SpeechRecognition({ lang: 'pt-BR' });

// -----------------------------
// Enable Recognition
// -----------------------------

mic.addEventListener('click', function () {
  recognition.start();
  result.style = 'display: block;';
  mic.classList.add('mic--on');
});

// -----------------------------
// Recognition Commands
// -----------------------------

recognition.onresult = function (e) {
  var input = e.results[0][0].transcript;

  if (input == "Abrir câmera") startVideoTracker();
  if (input == "Fechar câmera") stopVideoTracker();
  if (input == "avançar") nextSlide();
  if (input == "voltar") backSlide();
  if (input == "sexta-feira") synthesis.speak(hello);

  result.textContent = input;
  mic.classList.remove('mic--on');
};

// -----------------------------
// Speech Synthesis
// -----------------------------

var synthesis = window.speechSynthesis;

// -----------------------------
// Synthesis Speak
// -----------------------------

var hello = (0, _newSynthesis2.default)('Olá Afonso, em que posso ajudar?');

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var addKeyboardEventListener = function addKeyboardEventListener(btnCode, cb) {

  window.addEventListener('keydown', function (e) {
    var pressButton = e.which == btnCode || e.keyCode == btnCode;
    if (pressButton) cb();
  });
};

exports.default = addKeyboardEventListener;

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var newSynthesis = function newSynthesis(text) {

  var msg = new SpeechSynthesisUtterance();

  msg.voiceURI = 'native';
  msg.volume = 1; // 0 to 1
  msg.rate = 1; // 0.1 to 10
  msg.pitch = 1; //0 to 2
  msg.text = text;
  msg.lang = 'pt-BR';

  return msg;
};

exports.default = newSynthesis;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var videoTracker = function videoTracker(videoElementId, cb1, cb2) {
  var controlTracker = new tracking.ColorTracker(['magenta', 'yellow']);

  var move = void 0;

  controlTracker.on('track', function (e) {

    if (e.data.length === 0) {
      move = true;
    } else {
      if (move) {
        if (e.data[0].color === 'magenta') cb1();
        if (e.data[0].color === 'yellow') cb2();
      }
      move = false;
    }
  });

  return tracking.track(videoElementId, controlTracker, { camera: true });
};

exports.default = videoTracker;

/***/ })
/******/ ]);