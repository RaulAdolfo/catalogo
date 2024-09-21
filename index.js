let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-item');

function showSlides(index) {
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = index;
    }
    
    document.querySelector('.carousel').style.transform = `translateX(-${slideIndex * 100}%)`;
}

function plusSlides(n) {
    showSlides(slideIndex + n);
}

window.onload = function() {
    showSlides(slideIndex);
};