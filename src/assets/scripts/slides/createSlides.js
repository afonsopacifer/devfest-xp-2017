const createSlides = (slides, carousel) => {

  slides.forEach((slide) => {

    const article = document.createElement('article');
    article.classList.add('carousel__slide');

    switch (slide.type) {
      case 'list':
        article.classList.add('carousel__slide--list');
        break;
      case 'left':
        article.classList.add('carousel__slide--left');
        break;
      case 'right':
        article.classList.add('carousel__slide--right');
        break;
      case 'bottom':
        article.classList.add('carousel__slide--bottom');
        break;
    }

    if (slide.heading1) {
      const h1 = document.createElement('h1');
      h1.classList.add('heading-1');
      h1.innerHTML = slide.heading1;
      article.appendChild(h1);
    }

    if (slide.heading2) {
      const h2 = document.createElement('h2');
      h2.classList.add('heading-2');
      h2.innerHTML = slide.heading2;
      article.appendChild(h2);
    }

    if (slide.gif) {
      const gif = document.createElement('img');
      gif.classList.add('gif');
      gif.src = slide.gif;
      article.appendChild(gif);
    }

    if (slide.imgRight) {
      const img = document.createElement('img');
      img.classList.add('img-right');
      img.src = slide.imgRight;
      article.appendChild(img);
    }

    if (slide.imgLeft) {
      const img = document.createElement('img');
      img.classList.add('img-left');
      img.src = slide.imgLeft;
      article.appendChild(img);
    }

    if (slide.list) {
      const ul = document.createElement('ul');
      ul.classList.add('list');

      slide.list.forEach((item) => {
        const li = document.createElement('li');
        li.classList.add('list__item');
        li.innerHTML = item;

        ul.appendChild(li);
      });

      article.appendChild(ul);

    }

    carousel.appendChild(article);

  })
}

export default createSlides;
