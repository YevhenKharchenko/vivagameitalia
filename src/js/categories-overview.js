import Swiper from 'swiper';
import 'swiper/css/bundle';

let categoriesOverviewSwiper;

categoriesOverviewSwiper = new Swiper('.categories-overview-swiper-container', {
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
      slidesPerView: 9,
      spaceBetween: 0,
      grabCursor: false,
      allowTouchMove: false,
    },
  },
  on: {
    init: () => {
      document
        .querySelector('.categories-overview-swiper-container')
        .classList.add('show');
    },
  },
});
