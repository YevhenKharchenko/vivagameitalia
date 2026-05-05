import sprite from '../img/sprite.svg';

const faqHeroBtns = document.querySelectorAll('.faq-hero-top-text-btn');
faqHeroBtns.forEach(btn => btn.addEventListener('click', onBtnClick));

function onBtnClick(e) {
  const faqHeroTop = e.currentTarget;
  const faqHeroContainer = faqHeroTop.closest('.faq-hero-list-item');
  const bottomText = faqHeroContainer.querySelector('.faq-hero-bottom-text');
  const iconUse = faqHeroTop.querySelector('use');

  document.querySelectorAll('.faq-hero-list-item').forEach(item => {
    if (item !== faqHeroContainer) {
      item.classList.remove('faq-hero-open');
      item
        .querySelector('.faq-hero-bottom-text')
        .classList.remove('is-visible');
      item.querySelector('use').setAttribute('href', `${sprite}#icon-plus`);
    }
  });

  bottomText.classList.toggle('is-visible');

  if (bottomText.classList.contains('is-visible')) {
    faqHeroContainer.classList.add('faq-hero-open');
    iconUse.setAttribute('href', `${sprite}#icon-minus`);
  } else {
    faqHeroContainer.classList.remove('faq-hero-open');
    iconUse.setAttribute('href', `${sprite}#icon-plus`);
  }
}
