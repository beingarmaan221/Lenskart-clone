
document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;
    const carouselInner = document.querySelector('.carousel-inner');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    function moveSlide(direction) {
        currentIndex += direction;
        if (currentIndex >= totalSlides) {
            currentIndex = 0;
        } else if (currentIndex < 0) {
            currentIndex = totalSlides - 1;
        }
        updateSlide();
    }

    function updateSlide() {
        carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    // Auto Slide Function
    function autoSlide() {
        moveSlide(1);
    }

    // Start Auto Slide
    let autoSlideInterval = setInterval(autoSlide, 3000);

    // Manual Navigation Buttons
    prevButton.addEventListener('click', () => {
        moveSlide(-1);
        resetAutoSlide();
    });

    nextButton.addEventListener('click', () => {
        moveSlide(1);
        resetAutoSlide();
    });

    // Reset Auto-Slide on Manual Interaction
    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(autoSlide, 3000);
    }
});
