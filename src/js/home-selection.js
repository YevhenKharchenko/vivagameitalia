import Swiper from 'swiper';
import 'swiper/css/bundle';

let homeSelectionSwiper;

homeSelectionSwiper = new Swiper('.home-selection-swiper-container', {
  direction: 'horizontal',
  loop: false,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 1,
  initialSlide: 0,
  spaceBetween: 24,
  allowTouchMove: true,
  speed: 500,
  breakpoints: {
    1440: {
      centeredSlides: false,
      slidesPerView: 4,
      spaceBetween: 0,
      grabCursor: false,
      allowTouchMove: false,
    },
  },
  on: {
    init: () => {
      document
        .querySelector('.home-selection-swiper-container')
        .classList.add('show');
    },
  },
});
