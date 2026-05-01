import Swiper from 'swiper';
import 'swiper/css/bundle';

let homeCategoriesSwiper;

homeCategoriesSwiper = new Swiper('.home-methodology-swiper-container', {
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
      slidesPerView: 6,
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
