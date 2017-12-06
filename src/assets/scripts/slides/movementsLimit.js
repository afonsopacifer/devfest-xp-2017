const movementsLimit = (states, btnBack, btnNext) => {

  const isFirstSlide = states.move === 0;

  if(isFirstSlide) {
    states.permission.back = false;
    btnBack.disabled = true;
  } else {
    states.permission.back  = true;
    btnBack.disabled = false;
  }

  const isLastSlide = states.move === ((states.totalSlides - 1) * -100);

  if(isLastSlide) {
    states.permission.next = false;
    btnNext.disabled = true;
  } else {
    states.permission.next  = true;
    btnNext.disabled = false;
  }

}

export default movementsLimit;
