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
      slidesPerView: 9,
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
const chips = document.querySelectorAll('[data-quick-filter]');

const originalSlides = [
  ...document.querySelectorAll('.reviews-catalogue-list-item'),
];

let activeQuickFilter = 'all';

function applyFilters() {
  const search = searchInput.value.toLowerCase().trim();
  const genre = genreSelect.value;
  const sort = sortSelect.value;

  let filtered = originalSlides.filter(slide => {
    const title = (slide.dataset.title || '').toLowerCase();
    const genres = (slide.dataset.genre || '').toLowerCase(); // e.g. "fantasy mmorpg browser"

    if (search && !title.includes(search) && !genres.includes(search)) {
      return false;
    }
    if (genre !== 'all' && !genres.includes(genre.toLowerCase())) {
      return false;
    }
    if (
      activeQuickFilter === 'editorial' &&
      slide.dataset.editorial !== 'true'
    ) {
      return false;
    }
    if (activeQuickFilter === 'browser' && slide.dataset.browser !== 'true') {
      return false;
    }
    if (activeQuickFilter === 'easy' && slide.dataset.easy !== 'true') {
      return false;
    }
    if (
      activeQuickFilter === 'structured' &&
      slide.dataset.structured !== 'true'
    ) {
      return false;
    }

    return true;
  });

  filtered = [...filtered];

  if (sort === 'alphabetical') {
    filtered.sort((a, b) =>
      (a.dataset.title || '').localeCompare(b.dataset.title || '')
    );
  } else if (sort === 'popularity' || sort === 'editorial') {
    filtered.sort(
      (a, b) => parseFloat(b.dataset.score) - parseFloat(a.dataset.score)
    );
  } else if (sort === 'browser') {
    filtered.sort((a, b) => {
      const aBrowser = a.dataset.browser === 'true' ? 1 : 0;
      const bBrowser = b.dataset.browser === 'true' ? 1 : 0;
      if (bBrowser !== aBrowser) return bBrowser - aBrowser;
      return parseFloat(b.dataset.score) - parseFloat(a.dataset.score);
    });
  }

  reviewsCatalogueSwiper.removeAllSlides();
  reviewsCatalogueSwiper.appendSlide(filtered.map(s => s.outerHTML));
  reviewsCatalogueSwiper.update();

  const countEl = document.querySelector('.reviews-catalogue-form-text');
  if (countEl) {
    const total = originalSlides.length;
    const visible = filtered.length;
    countEl.textContent = `${visible} piattaforme visibili su ${total}. Usa ricerca, categoria e ordinamento per confrontare con più chiarezza.`;
  }
}

searchInput.addEventListener('input', applyFilters);
genreSelect.addEventListener('change', applyFilters);
sortSelect.addEventListener('change', applyFilters);

chips.forEach(chip => {
  chip.addEventListener('click', () => {
    chips.forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    activeQuickFilter = chip.dataset.quickFilter;
    applyFilters();
  });
});
