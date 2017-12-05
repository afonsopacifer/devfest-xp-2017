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
// Media query
// -----------------------------

if (matchMedia) {
  const mq = window.matchMedia("(min-width: 800px)");
  mq.addListener(WidthChange);
  WidthChange(mq);
}

// media query change
function WidthChange(mq) {
  if (mq.matches) {

  } else {

  }

}

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
