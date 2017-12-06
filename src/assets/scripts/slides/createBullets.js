const createBullets = (allSlides) => {
  allSlides.forEach((el, i) => {
    const li = document.createElement('li');
    li.classList.add("bullet");

    if(i === 0) li.classList.add('bullet--active');



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
}

export default createBullets;
