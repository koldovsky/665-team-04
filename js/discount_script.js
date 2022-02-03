(function() {
    const slides = [
                    `<div class="discount__position t-shirts" >
                    <div class="discount__position-text"><p>
                        20% OFF ALL T-SHIRTS
                    </p>
                    <a href="#"><p class="discount__link-text">Shop Collection →</p></a>    
                    </div>
                    </div>`,
                    `<div class="discount__position jeckets">
                    <div class="discount__position-text"><p>
                        30% OFF ALL JACKETS
                    </p>
                    <a href="#"><p class="discount__link-text">Shop Collection →</p></a>    
                    </div>
                    </div>`,
                    `<div class="discount__position trainers">
                    <div class="discount__position-text"><p>
                        25% OFF ALL TRAINERS
                    </p>
                    <a href="#"><p class="discount__link-text">Shop Collection →</p></a>    
                    </div>
                    </div>`

    ];
    let currentSlideIdx = 0;
    function showCurrentSlide() {
        const slideContainer = document.querySelector(".discount__link_carusel_container");
        slideContainer.innerHTML = slides[currentSlideIdx];
    }
function showNextSlide(){
    currentSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
    showCurrentSlide();
}

    showCurrentSlide();

    setInterval(showNextSlide, 3000);

})();