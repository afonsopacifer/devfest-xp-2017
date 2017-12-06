// -----------------------------
// Modules
// -----------------------------

// Slides
// ----------------
import movementsLimit from './slides/movementsLimit';
import bulletsStatus from './slides/bulletsStatus';
import createBullets from './slides/createBullets';
import moveToSpecificPosition from './slides/moveToSpecificPosition';
import movePositions from './slides/movePositions';

// Helpers
// ----------------
import addKeyboardEventListener from './addKeyboardEventListener';

// -----------------------------
// Slides DOM Elements
// -----------------------------

const allSlides = document.querySelectorAll('.carousel__slide');
const btnNext = document.getElementById('btnNext');
const btnBack = document.getElementById('btnBack');
const carouselBullets = document.getElementById('carouselBullets');

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

// -----------------------------
// Video DOM Elements
// -----------------------------

const controlTracker = new tracking.ColorTracker(['yellow']);

let move;

controlTracker.on('track', e => {

  if (e.data.length === 0) {
    move = true;
  } else {
    if(move) {
      if (e.data[0].x < 100) movePositions(1)
      if (e.data[0].x > 100) movePositions(-1)
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

const trackerTask = tracking.track('#camera', controlTracker, { camera: true });

// -----------------------------
// Control video Tracker
// -----------------------------

const camera = document.getElementById('camera');

const startVideo = () => {
  camera.classList.add('camera--on');
  trackerTask.run();
}

const stopVideo = () => {
  trackerTask.stop();
  camera.classList.remove('camera--on');
}

stopVideo();

// -----------------------------
// Audio Tracker
// -----------------------------

const SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-BR';

const result = document.querySelector('#micRes');
const mic = document.querySelector('#mic');

mic.addEventListener('click', () => {
  recognition.start();
  result.style = 'display: block;';
  mic.classList.add('mic--on');
});

recognition.onresult = e => {
  var res = e.results[0][0].transcript;

  if (res == "Abrir câmera") {
    startVideo()
  }

  if (res == "Fechar câmera") {
    stopVideo()
  }

  if (res == "avançar") {
    movePositions(1)
  }

  if (res == "voltar") {
    movePositions(-1)
  }

  if (res == "sexta-feira") {
      synth.speak(msg);
  }

  result.textContent = res;
  mic.classList.remove('mic--on');
}

// -----------------------------
// Audio Synthesis
// -----------------------------

const synth = window.speechSynthesis;

var msg = new SpeechSynthesisUtterance();
var voices = window.speechSynthesis.getVoices();
msg.voice = voices[10]; // Note: some voices don't support altering params
msg.voiceURI = 'native';
msg.volume = 1; // 0 to 1
msg.rate = 1; // 0.1 to 10
msg.pitch = 1; //0 to 2
msg.text = 'Vou no banheiro, já volto..';
msg.lang = 'pt-BR';
