import Swiper from 'swiper';
import 'swiper/css/bundle';

let methodologyProcessSwiper;

methodologyProcessSwiper = new Swiper('.methodology-process-swiper-container', {
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
        .querySelector('.methodology-process-swiper-container')
        .classList.add('show');
    },
  },
});
