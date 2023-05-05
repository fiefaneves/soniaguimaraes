const slideInterval = 5000;

const sliderList = document.querySelector('.main__slider--list');
const sliderItems = document.querySelectorAll('.main__slider--item');
const sliderPrevBtn = document.querySelector('.main__slider--prev');
const sliderNextBtn = document.querySelector('.main__slider--next');
let currentSlide = 0;
let sliderInterval;

function startSlider() {
  sliderInterval = setInterval(() => {
    goToSlide(currentSlide + 1);
  }, slideInterval);
}

function pauseSlider() {
  clearInterval(sliderInterval);
}

function goToSlide(slideIndex) {
  if (slideIndex === sliderItems.length) {
    slideIndex = 0;
  } else if (slideIndex < 0) {
    slideIndex = sliderItems.length - 1;
  }

  sliderList.style.transform = `translateX(-${slideIndex * 100}%)`;
  currentSlide = slideIndex;
}

sliderList.addEventListener('mouseenter', pauseSlider);
sliderList.addEventListener('mouseleave', startSlider);

sliderPrevBtn.addEventListener('click', () => {
  pauseSlider();
  goToSlide(currentSlide - 1);
});

sliderNextBtn.addEventListener('click', () => {
  pauseSlider();
  goToSlide(currentSlide + 1);
});
