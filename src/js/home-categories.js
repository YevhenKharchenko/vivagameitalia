import Swiper from 'swiper';
import 'swiper/css/bundle';

let homeMethodologySwiper;

homeMethodologySwiper = new Swiper('.home-methodology-swiper-container', {
  direction: 'horizontal',
  loop: false,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 1,
  initialSlide: 0,
  spaceBetween: 12,
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
        .querySelector('.home-methodology-swiper-container')
        .classList.add('show');
    },
  },
});
