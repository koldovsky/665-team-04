
(function () {
    const slides = [
      `<div class="adidas__black__trainers">
                      <img src="img/adidas-black-trainers.jpg" alt="adidas black trainers"
                          class="new__arrivials__preview-img">
                      <a class="new__arrivials__link__shop" href="#">
                          <p class="new__arrivials__link">Adidas Black Trainers</p>
                      </a>
                      <p class="new__arrivials__price">$ 60.00</p>
                      <button class="new__arrivials__carousel__button__add">Add to Cart</button>
                  </div>`,
      `<div class="asics__jordan">
                      <img src="img/asics-jordan-2000.jpg" alt="asics jordan 2000" class="new__arrivials__preview-img">
                      <a class="new__arrivials__link__shop" href="#">
                          <p class="new__arrivials__link">asics jordan 2000</p>
                      </a>
                      <p class="new__arrivials__price">$ 200.00</p>
                      <button class="new__arrivials__carousel__button__add">Add to Cart</button>
                  </div>`,
      `<div class="nike__winter__jacket">
                      <img src="img/nike-winter-jacket-in-blue.jpg" alt="Nike Winter Jacket in Blue"
                          class="new__arrivials__preview-img">
                      <a class="new__arrivials__link__shop" href="#">
                          <p class="new__arrivials__link">Nike Winter Jacket in Blue</p>
                      </a>
                      <p class="new__arrivials__price">$ 85.00</p>
                      <button class="new__arrivials__carousel__button__add">Add to Cart</button>
                  </div>`,
      `<div class="puma__textile__runnig">
                      <img src="img/puma-textile-runnig-shoes.jpg" alt="Puma Textile Runnig Shoes"
                          class="new__arrivials__preview-img">
                      <a class="new__arrivials__link__shop" href="#">
                          <p class="new__arrivials__link">Puma Textile Runnig Shoes</p>
                      </a>
                      <p class="new__arrivials__price">$ 62.00</p>
                      <button class="new__arrivials__carousel__button__add">Add to Cart</button>
                  </div>`,
      `<div class="reebok__red__dusters">
                      <img src="img/reebok-red-duster.jpg" alt="Reebok Red Duster" class="new__arrivials__preview-img">
                      <a class="new__arrivials__link__shop" href="#">
                          <p class="new__arrivials__link">Reebok Red Duster</p>
                      </a>
                      <p class="new__arrivials__price">$ 60.00</p>
                      <button class="new__arrivials__carousel__button__add">Add to Cart</button>
                  </div>`
    ];
  
    let currentSlideIdx = 0;
  
    function showCurrentSlide() {
      const slideContainer = document.querySelector(".new__arrivials__carousel__img");
      slideContainer.innerHTML = slides[currentSlideIdx];
    }

    function showNextSlide(){
        currentSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
       showCurrentSlide(); 
    }

    function showPrevSlide(){
        currentSlideIdx = currentSlideIdx - 1 < 0 ? slides.length - 1 : currentSlideIdx - 1;
       showCurrentSlide(); 
    }
    
    showCurrentSlide();

    document.querySelector('.new__arrivials__carousels__button__forward')
    .addEventListener('click', showNextSlide);

    document.querySelector('.new__arrivials__carousels__button__back')
    .addEventListener('click', showPrevSlide);

  })();
  