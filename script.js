let currentIndex = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;

    currentIndex += step;
    if (currentIndex >= totalSlides) currentIndex = 0;
    if (currentIndex < 0) currentIndex = totalSlides - 1;

    document.querySelector('.carousel-container').style.transform = `translateX(-${currentIndex * 100}%)`;
}


setInterval(() => moveSlide(1), 3000);
