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

addKeyboardEventListener(33, nextSlide);
addKeyboardEventListener(39, nextSlide);
addKeyboardEventListener(40, nextSlide);

addKeyboardEventListener(34, backSlide);
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

const enableRecognition = () => {
  recognition.start();
  result.style = 'display: block;';
  mic.classList.add('mic--on');
  beep.play();
}

const disableRecognition = () => {
  recognition.stop();
  result.style = 'display: none;';
  mic.classList.remove('mic--on');
  beep.play();
}

let recognitionState;

const toggleRecognition = () => {
  if(!recognitionState) {
    enableRecognition();
    recognitionState = true;
  } else {
    disableRecognition()
    recognitionState = false;
  }
}

mic.addEventListener('click', toggleRecognition);

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
  if (input == "dinossauro") window.open('https://chromedino.com/', '_blank');
  if (input == "trilha sonora") ironMan.play();
  if (input == "Nativo") synthesis.speak(nativo);
  if (input == "híbrido") synthesis.speak(hibrido);
  if (input == "fala com o pessoal") synthesis.speak(welcome);
  if (input == "piada") synthesis.speak(piada);


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
const nativo = newSynthesis('Não roda em nenhum computador, apenas em algumas versões de Android ou I O S');
const hibrido = newSynthesis('Você está de sacanagem comigo?');
const welcome = newSynthesis('Bem Vindos ao Dev Fest XP!');
const piada = newSynthesis(`O bêbado atravessa a rua com o farol fechado
e um carro passa e buzina "BIBI"...
O bêbado olha para o carro e diz:
"EU TAMBÉM BIBI E MUITO..."`);

// -----------------------------
// Audio
// -----------------------------

const beep = new Audio('https://actions.google.com/sounds/v1/alarms/beep_short.ogg');
const ironMan = new Audio('./assets/sounds/ACDC.mp3');


// -----------------------------
// Gamepad
// -----------------------------

const gamepad = new Gamepad();

gamepad.on('connect', e => {
  console.log(`controller ${e.index} connected!`);
  beep.play();
});

gamepad.on('press', 'button_3', () => startVideoTracker());
gamepad.on('press', 'button_2', () => stopVideoTracker());
gamepad.on('press', 'button_4', () => backSlide());
gamepad.on('press', 'button_1', () => nextSlide());
gamepad.on('press', 'shoulder_top_left', () => enableRecognition());
gamepad.on('press', 'shoulder_top_right', () => disableRecognition());
gamepad.on('press', 'start', () => window.open('https://chromedino.com/', '_blank'));
