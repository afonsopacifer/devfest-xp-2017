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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// -----------------------------
// DOM Elements
// -----------------------------

var allSlides = document.querySelectorAll('.carousel__slide');
var btnNext = document.getElementById('btnNext');
var btnBack = document.getElementById('btnBack');
var carouselBullets = document.getElementById('carouselBullets');

// -----------------------------
// States
// -----------------------------

var moveState = 0;
var totalSlides = allSlides.length;

// -----------------------------
// Controls
// -----------------------------

btnNext.addEventListener('click', function () {
  return movePositions(1);
});
btnBack.addEventListener('click', function () {
  return movePositions(-1);
});

window.addEventListener('keydown', function (e) {
  var pressRight = e.which == 39 || e.keyCode == 39;
  if (pressRight) movePositions(1);
});

window.addEventListener('keydown', function (e) {
  var pressDown = e.which == 40 || e.keyCode == 40;
  if (pressDown) movePositions(1);
});

window.addEventListener('keydown', function (e) {
  var pressLeft = e.which == 37 || e.keyCode == 37;
  if (pressLeft) movePositions(-1);
});

window.addEventListener('keydown', function (e) {
  var pressUp = e.which == 38 || e.keyCode == 38;
  if (pressUp) movePositions(-1);
});

// -----------------------------
// Bullets
// -----------------------------

allSlides.forEach(function (el, i) {
  var li = document.createElement('li');
  li.className = "bullet";

  li.addEventListener('click', function () {
    moveToSpecificPosition(i);
  });

  li.innerHTML = '\n    <button class="bullet__button">\n      <svg  class="bullet__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n        <title>Avan\xE7ar para a ' + (i + 1) + '\xB0 not\xEDcia</title>\n        <circle cx="12" cy="12" r="12"/>\n      </svg>\n    </button>\n  ';

  carouselBullets.appendChild(li);
});

// -----------------------------
// Bullets status
// -----------------------------

var allBullets = document.querySelectorAll('.bullet');
allBullets[0].classList.add('bullet--active');

function bulletsStatus(currentPosition) {
  allBullets.forEach(function (bullet, i) {
    i === currentPosition ? bullet.classList.add('bullet--active') : bullet.classList.remove('bullet--active');
  });
}

// -----------------------------
// Move To Positions
// -----------------------------

function movePositions(value) {
  var movePercent = value * 100 * -1;

  allSlides.forEach(function (slide) {
    slide.style.transform = 'translateX(' + (movePercent + moveState) + '%)';
  });

  moveState += movePercent;

  disableButtons();

  var currentPosition = moveState / 100 * -1;

  bulletsStatus(currentPosition);
}

// -----------------------------
// Move To Specific Positions
// -----------------------------

function moveToSpecificPosition(value) {

  var movePercent = value * 100 * -1;

  allSlides.forEach(function (slide) {
    slide.style.transform = 'translateX(' + movePercent + '%)';
  });

  moveState = movePercent;

  disableButtons();

  bulletsStatus(value);
}

// -----------------------------
// Disable Buttons
// -----------------------------

function disableButtons() {
  var isFirstSlide = moveState === 0;

  isFirstSlide ? btnBack.disabled = true : btnBack.disabled = false;

  var isLastSlide = moveState === (totalSlides - 1) * -100;

  isLastSlide ? btnNext.disabled = true : btnNext.disabled = false;
}

// -----------------------------
// Video Tracker
// -----------------------------

var controlTracker = new tracking.ColorTracker(['yellow']);

var move = void 0;

controlTracker.on('track', function (e) {

  if (e.data.length === 0) {
    move = true;
  } else {
    if (move) {
      if (e.data[0].x < 100) movePositions(1);
      if (e.data[0].x > 100) movePositions(-1);
    }
    move = false;
  }

  // if (e.data.length === 0) {
  //   move = true;
  // } else {
  //   if(move) {
  //     if (e.data[0].color === 'magenta') movePositions(1)
  //     if (e.data[0].color === 'yellow') movePositions(-1)
  //   }
  //   move = false;
  // }
});

var trackerTask = tracking.track('#camera', controlTracker, { camera: true });

// -----------------------------
// Control video Tracker
// -----------------------------

var camera = document.getElementById('camera');

var startVideo = function startVideo() {
  camera.classList.add('camera--on');
  trackerTask.run();
};

var stopVideo = function stopVideo() {
  trackerTask.stop();
  camera.classList.remove('camera--on');
};

stopVideo();

// -----------------------------
// Audio Tracker
// -----------------------------

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;

var recognition = new SpeechRecognition();

recognition.lang = 'pt-BR';
recognition.maxAlternatives = 1;

var diagnostic = document.querySelector('#micRes');
var mic = document.querySelector('#mic');

mic.onclick = function () {
  recognition.start();
  diagnostic.style = 'display: block;';
  mic.classList.add('mic--on');
};

recognition.onresult = function (event) {
  var color = event.results[0][0].transcript;

  if (color == "Abrir câmera") {
    startVideo();
  }

  if (color == "fechar") {
    stopVideo();
  }

  if (color == "avançar") {
    movePositions(1);
  }

  if (color == "voltar") {
    movePositions(-1);
  }

  diagnostic.textContent = color;
  mic.classList.remove('mic--on');
};

/***/ })
/******/ ]);