import Swiper from 'swiper';
import { Manipulation } from 'swiper/modules';
import 'swiper/css/bundle';

let reviewsCatalogueSwiper;

reviewsCatalogueSwiper = new Swiper('.reviews-catalogue-swiper-container', {
  modules: [Manipulation],
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
      slidesPerView: 10,
      spaceBetween: 0,
      grabCursor: false,
      allowTouchMove: false,
    },
  },
  on: {
    init: () => {
      document
        .querySelector('.reviews-catalogue-swiper-container')
        .classList.add('show');
    },
  },
});

const form = document.querySelector('.reviews-catalogue-form');
const searchInput = form.querySelector('[data-filter="search"]');
const genreSelect = form.querySelector('[data-filter="genre"]');
const sortSelect = form.querySelector('[data-filter="sort"]');
const slides = [...document.querySelectorAll('.reviews-catalogue-list-item')];

function filterSlides() {
  const search = searchInput.value.toLowerCase();
  const genre = genreSelect.value;

  const filtered = slides.filter(slide => {
    const title = (slide.dataset.title || '').toLowerCase();
    const tags = (slide.dataset.tags || '').toLowerCase();
    const slideGenre = slide.dataset.genre;

    let visible = true;

    if (search && !title.includes(search) && !tags.includes(search)) {
      visible = false;
    }

    if (genre !== 'all' && slideGenre !== genre) {
      visible = false;
    }

    return visible;
  });

  reviewsCatalogueSwiper.removeAllSlides();

  const newSlides = filtered.map(slide => slide.outerHTML);

  reviewsCatalogueSwiper.appendSlide(newSlides);

  reviewsCatalogueSwiper.update();

  sortSlides();
}

function sortSlides() {
  const sort = sortSelect.value;

  let swiperSlides = reviewsCatalogueSwiper.slides;

  let sorted = Array.from(swiperSlides);

  if (sort === 'alphabetical') {
    sorted.sort((a, b) => a.dataset.title.localeCompare(b.dataset.title));
  }

  if (sort === 'popularity') {
    sorted.sort((a, b) => b.dataset.score - a.dataset.score);
  }

  reviewsCatalogueSwiper.removeAllSlides();
  reviewsCatalogueSwiper.appendSlide(sorted.map(s => s.outerHTML));
}

searchInput.addEventListener('input', filterSlides);
genreSelect.addEventListener('change', filterSlides);
sortSelect.addEventListener('change', filterSlides);

const chips = document.querySelectorAll('[data-quick-filter]');

chips.forEach(chip => {
  chip.addEventListener('click', () => {
    chips.forEach(c => c.classList.remove('active'));
    chip.classList.add('active');

    const type = chip.dataset.quickFilter;

    slides.forEach(slide => {
      let visible = true;

      if (type === 'editorial') {
        visible = slide.dataset.editorial === 'true';
      }

      if (type === 'browser') {
        visible = slide.dataset.browser === 'true';
      }

      if (type === 'all') {
        visible = true;
      }

      slide.style.display = visible ? '' : 'none';
    });

    reviewsCatalogueSwiper.update();
  });
});
