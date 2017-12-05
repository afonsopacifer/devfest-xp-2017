// -----------------------------
// DOM Elements
// -----------------------------

const allSlides = document.querySelectorAll('.carousel__slide');
const btnNext = document.getElementById('btnNext');
const btnBack = document.getElementById('btnBack');
const carouselBullets = document.getElementById('carouselBullets');

// -----------------------------
// States
// -----------------------------

let moveState = 0;
let totalSlides = allSlides.length;

// -----------------------------
// Controls
// -----------------------------

btnNext.addEventListener('click', () => movePositions(1));
btnBack.addEventListener('click', () => movePositions(-1));

window.addEventListener('keydown', (e) => {
  const pressRight = e.which == 39 || e.keyCode == 39;
  if (pressRight) movePositions(1);
});

window.addEventListener('keydown', (e) => {
  const pressDown = e.which == 40 || e.keyCode == 40;
  if (pressDown) movePositions(1);
});

window.addEventListener('keydown', (e) => {
  const pressLeft = e.which == 37 || e.keyCode == 37;
  if (pressLeft) movePositions(-1);
});

window.addEventListener('keydown', (e) => {
  const pressUp = e.which == 38 || e.keyCode == 38;
  if (pressUp) movePositions(-1);
});

// -----------------------------
// Bullets
// -----------------------------

allSlides.forEach((el, i) => {
  const li = document.createElement('li');
  li.className = "bullet";

  li.addEventListener('click', () => {
    moveToSpecificPosition(i);
  })

  li.innerHTML =`
    <button class="bullet__button">
      <svg  class="bullet__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>Avançar para a ${i + 1}° notícia</title>
        <circle cx="12" cy="12" r="12"/>
      </svg>
    </button>
  `;

  carouselBullets.appendChild(li)
})

// -----------------------------
// Bullets status
// -----------------------------

const allBullets = document.querySelectorAll('.bullet');
allBullets[0].classList.add('bullet--active')

function bulletsStatus(currentPosition) {
  allBullets.forEach((bullet, i) => {
    i === currentPosition
    ? bullet.classList.add('bullet--active')
    : bullet.classList.remove('bullet--active')
  })
}

// -----------------------------
// Move To Positions
// -----------------------------

function movePositions(value) {
  const movePercent =  (value * 100) * -1;

  allSlides.forEach( (slide) => {
    slide.style.transform = `translateX(${movePercent + moveState}%)`;
  });

  moveState += movePercent;

  disableButtons();

  const currentPosition = (moveState / 100) * -1 ;

  bulletsStatus(currentPosition);
}

// -----------------------------
// Move To Specific Positions
// -----------------------------

function moveToSpecificPosition(value) {

  const movePercent =  (value * 100) * -1;

  allSlides.forEach(slide => {
    slide.style.transform = `translateX(${movePercent}%)`;
  });

  moveState = movePercent;

  disableButtons();

  bulletsStatus(value);
}

// -----------------------------
// Disable Buttons
// -----------------------------

function disableButtons() {
  const isFirstSlide = moveState === 0;

  isFirstSlide
  ? btnBack.disabled = true
  : btnBack.disabled = false

  const isLastSlide = moveState === ((totalSlides - 1) * -100);

  isLastSlide
  ? btnNext.disabled = true
  : btnNext.disabled = false
}

// -----------------------------
// Video Track
// -----------------------------

const controlTracker = new tracking.ColorTracker(['magenta', 'yellow']);

let move;

controlTracker.on('track', e => {

  if (e.data.length === 0) {
    move = true;
  } else {
    if(move) {
      if (e.data[0].x > 100) movePositions(1)
      if (e.data[0].x < 100) movePositions(-1)
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

trackerTask.stop();
// trackerTask.run();
