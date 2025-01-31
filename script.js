let slideIndex = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    
    slideIndex += step;
    if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    } else if (slideIndex >= totalSlides) {
        slideIndex = 0;
    }
    
    const slider = document.querySelector('.gallery-slider');
    slider.style.transform = `translateX(-${slideIndex * 100}%)`;
}