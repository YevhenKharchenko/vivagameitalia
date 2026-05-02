import sprite from '../img/sprite.svg';

const homeFaqBtns = document.querySelectorAll('.home-faq-top-text-btn');
homeFaqBtns.forEach(btn => btn.addEventListener('click', onBtnClick));

function onBtnClick(e) {
  const homeFaqTop = e.currentTarget;
  const homeFaqContainer = homeFaqTop.closest('.home-faq-list-item');
  const bottomText = homeFaqContainer.querySelector('.home-faq-bottom-text');
  const iconUse = homeFaqTop.querySelector('use');

  document.querySelectorAll('.home-faq-list-item').forEach(item => {
    if (item !== homeFaqContainer) {
      item.classList.remove('home-faq-open');
      item
        .querySelector('.home-faq-bottom-text')
        .classList.remove('is-visible');
      item.querySelector('use').setAttribute('href', `${sprite}#icon-plus`);
    }
  });

  bottomText.classList.toggle('is-visible');

  if (bottomText.classList.contains('is-visible')) {
    homeFaqContainer.classList.add('home-faq-open');
    iconUse.setAttribute('href', `${sprite}#icon-minus`);
  } else {
    homeFaqContainer.classList.remove('home-faq-open');
    iconUse.setAttribute('href', `${sprite}#icon-plus`);
  }
}
