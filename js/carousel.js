(function () {
    const images  =[
        `<div class="slider__brand">
        <img src="img/logo-new-balance.svg" alt="Logo New Balance">
        </div>`,
        `<div class="slider__brand">
        <img src="img/logo-reebok.svg" alt="Logo Reebok">
        </div>`,
        `<div class="slider__brand">
        <img src="img/logo-adidas.svg" alt="Logo Adidas">
        </div>`,
        `<div class="slider__brand">
        <img src="img/logo-nike.svg" alt="Logo Nike">
        </div>`,
        `<div class="slider__brand">
        <img src="img/logo-asics.svg" alt="Logo Asics">
        </div>`
        ];

    let currentImageIdx = 0;

    function showCurrentImage() {
        const imageContainer = document.querySelector('.images__carousel-slide-container');
        imageContainer.innerHTML = images[currentImageIdx];
    }

    function showNextImage() {
        currentImageIdx = currentImageIdx + 1 >= images.length ? 0 : currentImageIdx + 1;
        showCurrentImage();
    }

    function showPreviousImage() {
        currentImageIdx = currentImageIdx - 1 < 0 ? images.length - 1 : currentImageIdx - 1;
        showCurrentImage();
    }

    showCurrentImage();

    document.querySelector('.images__carousel-forward')
        .addEventListener('click', showNextImage);

    document.querySelector ('.images__carousel-back')
        .addEventListener('click', showPreviousImage);

})();