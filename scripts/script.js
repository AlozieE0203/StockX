let sliderImages = Array.from(document.querySelectorAll(".slide")),
    arrowLeft = document.querySelector("#arrow-left"),
    arrowRight = document.querySelector("#arrow-right"),
    current = 0;

// Init slider
function startSlide() {
    updateSlides();
}

// Show prev
function slideLeft() {
    sliderImages[current].classList.add('move-out-right');
    current = (current - 1 + sliderImages.length) % sliderImages.length;
    updateSlides();
}

// Show next
function slideRight() {
    sliderImages[current].classList.add('move-out-left');
    current = (current + 1) % sliderImages.length;
    updateSlides();
}

function updateSlides() {
    sliderImages.forEach((slide, index) => {
        slide.classList.remove('prev', 'active', 'next', 'move-out-left', 'move-out-right');
        if (index === current) {
            slide.classList.add('active');
        } else if (index === (current - 1 + sliderImages.length) % sliderImages.length) {
            slide.classList.add('prev');
        } else if (index === (current + 1) % sliderImages.length) {
            slide.classList.add('next');
        }
    });
}

// Left arrow click
arrowLeft.addEventListener("click", slideLeft);

// Right arrow click
arrowRight.addEventListener("click", slideRight);

startSlide();