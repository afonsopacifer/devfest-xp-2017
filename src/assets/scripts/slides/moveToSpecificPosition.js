import movementsLimit from './movementsLimit';
import bulletsStatus from './bulletsStatus';

const moveToSpecificPosition = (value, states, allSlides, allBullets, btnBack, btnNext) => {

  const movePercent =  (value * 100) * -1;

  allSlides.forEach(slide => {
    slide.style.transform = `translateX(${movePercent}%)`;
  });

  states.move = movePercent;

  movementsLimit(states, btnBack, btnNext);
  bulletsStatus(allBullets, value);

}

export default moveToSpecificPosition;
