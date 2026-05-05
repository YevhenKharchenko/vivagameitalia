import Swiper from 'swiper';
import 'swiper/css/bundle';

let aboutDescriptionSwiper;

aboutDescriptionSwiper = new Swiper('.about-description-swiper-container', {
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
      slidesPerView: 3,
      spaceBetween: 0,
      grabCursor: false,
      allowTouchMove: false,
    },
  },
  on: {
    init: () => {
      document
        .querySelector('.about-description-swiper-container')
        .classList.add('show');
    },
  },
});
