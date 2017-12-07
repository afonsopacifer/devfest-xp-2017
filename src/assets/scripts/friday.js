// ----------------------------------------------------------
// Modules
// ----------------------------------------------------------

// ----------------
// Helpers
// ----------------

import addKeyboardEventListener from './helpers/addKeyboardEventListener';

// ----------------
// Slides
// ----------------

import movementsLimit from './slides/movementsLimit';
import bulletsStatus from './slides/bulletsStatus';
import createBullets from './slides/createBullets';
import moveToSpecificPosition from './slides/moveToSpecificPosition';
import movePositions from './slides/movePositions';
import createSlides from './slides/createSlides';
import slides from './slides';

// ----------------
// Video Tracking
// ----------------

import videoTracker from './tracking/videoTracker';

// ----------------
// Speech Synthesis
// ----------------

import newSynthesis from './speech/newSynthesis';

// ----------------------------------------------------------
// Slides DOM Elements
// ----------------------------------------------------------

const carousel = document.getElementById('carousel');
const btnNext = document.getElementById('btnNext');
const btnBack = document.getElementById('btnBack');
const carouselBullets = document.getElementById('carouselBullets');


// -----------------------------
// Create Slides
// -----------------------------

createSlides(slides, carousel);

const allSlides = document.querySelectorAll('.carousel__slide');


// -----------------------------
// States
// -----------------------------

const state = {
  move: 0,
  totalSlides: allSlides.length,
  permission: {
    back: false,
    next: true
  }
}



// -----------------------------
// Create Bullets
// -----------------------------

createBullets(allSlides);

const allBullets = document.querySelectorAll('.bullet');

allBullets.forEach((bullet, index) => {
  bullet.addEventListener('click', () => {
    moveToSpecificPosition(
      index,
      state,
      allSlides,
      allBullets,
      btnBack,
      btnNext
    );
  });
});

// -----------------------------
// Controls
// -----------------------------

const nextSlide = () => {
  movePositions(1, state, allSlides, allBullets, btnBack, btnNext)
}

const backSlide = () => {
  movePositions(-1, state, allSlides, allBullets, btnBack, btnNext)
}

// -----------------------------
// Buttons
// -----------------------------

btnNext.addEventListener('click', () => nextSlide());
btnBack.addEventListener('click', () => backSlide());

// -----------------------------
// Keyboard
// -----------------------------

addKeyboardEventListener(39, nextSlide);
addKeyboardEventListener(40, nextSlide);
addKeyboardEventListener(37, backSlide);
addKeyboardEventListener(38, backSlide);



// ----------------------------------------------------------
// Video DOM Elements
// ----------------------------------------------------------

const camera = document.getElementById('camera');

// -----------------------------
// Control video Tracker
// -----------------------------

const videoTracking = videoTracker('#camera', nextSlide, backSlide);

const startVideoTracker = () => {
  videoTracking.run();
  camera.classList.add('camera--on');
}

const stopVideoTracker = () => {
  videoTracking.stop();
  camera.classList.remove('camera--on');
}



// ----------------------------------------------------------
// Audio DOM Elements
// ----------------------------------------------------------

const result = document.getElementById('micRes');
const mic = document.getElementById('mic');

// -----------------------------
// Speech Recognition
// -----------------------------

const SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
const recognition = new SpeechRecognition({ lang:'pt-BR' });

// -----------------------------
// Enable Recognition
// -----------------------------

mic.addEventListener('click', () => {
  recognition.start();
  result.style = 'display: block;';
  mic.classList.add('mic--on');
  beep.play();
});

// -----------------------------
// Recognition Commands
// -----------------------------

recognition.onresult = e => {
  const input = e.results[0][0].transcript;

  if (input == "Abrir câmera") startVideoTracker();
  if (input == "Fechar câmera") stopVideoTracker();
  if (input == "avançar") nextSlide();
  if (input == "voltar") backSlide();
  if (input == "sexta-feira") synthesis.speak(hello);

  result.textContent = input;
  mic.classList.remove('mic--on');
}

// -----------------------------
// Speech Synthesis
// -----------------------------

const synthesis = window.speechSynthesis;

// -----------------------------
// Synthesis Speak
// -----------------------------

const hello = newSynthesis('Olá Afonso, em que posso ajudar?');

// -----------------------------
// Audio
// -----------------------------

const beep = new Audio('https://actions.google.com/sounds/v1/alarms/beep_short.ogg');
