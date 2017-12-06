import movementsLimit from './movementsLimit';
import bulletsStatus from './bulletsStatus';

const movePositions = (value, state, allSlides, allBullets, btnBack, btnNext) => {

  const isBackMovement = value < 0;
  const isNextMovement = value > 0;

  const movePercent =  (value * 100) * -1;

  if(isBackMovement && state.permission.back) {

  allSlides.forEach( (slide) => {
    slide.style.transform = `translateX(${movePercent + state.move}%)`;
  });

  // Update State
  state.move += movePercent;

  movementsLimit(state, btnBack, btnNext);

  const currentPosition = (state.move / 100) * -1 ;

  bulletsStatus(allBullets, currentPosition);
  }

  if(isNextMovement && state.permission.next) {

  allSlides.forEach( (slide) => {
    slide.style.transform = `translateX(${movePercent + state.move}%)`;
  });

  state.move += movePercent;

  movementsLimit(state, btnBack, btnNext);

  const currentPosition = (state.move / 100) * -1 ;

  bulletsStatus(allBullets, currentPosition);
  }


}
export default movePositions;
