let swiperInstance = null;

function initSwiper() {
  if (window.innerWidth < 768 && !swiperInstance) {
    const paginationContainer = document.querySelector('.repair-slider .swiper-pagination');
    if (!paginationContainer) {
      const pagination = document.createElement('div');
      pagination.classList.add('swiper-pagination');
      document.querySelector('.repair-slider').appendChild(pagination);
    }

    swiperInstance = new Swiper('.repair-slider', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      spaceBetween: 16,
      slidesPerView: 'auto',
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 2,
        },
      },
    });
  }
}

function destroySwiper() {
  if (window.innerWidth >= 768 && swiperInstance) {
    swiperInstance.destroy(true, true);
    swiperInstance = null;

    const pagination = document.querySelector('.repair-slider .swiper-pagination');
    if (pagination) {
      pagination.remove();
    }
  }
}

initSwiper();

window.addEventListener('resize', () => {
  destroySwiper();
  initSwiper();
});

const slides = document.querySelectorAll('.repair-slider__slide');
const buttonShow = document.querySelector('.repair-list__button');
const buttonShowWrapper = document.querySelector('.repair-list__button-wrapper');
const repairList = document.querySelector('.repair-list');

buttonShow.addEventListener('click', function () {
  for (let i = 6; i < slides.length; i++) {
    slides[i].classList.toggle('swiper-slide-hidden');
    slides[i].classList.toggle('swiper-slide-show');
  }
  buttonShow.classList.toggle('button--active');

  if (buttonShow.classList.contains('button--active')) {
    buttonShow.textContent = 'Скрыть';
  } else {
    buttonShow.textContent = 'Показать все';
  }
  buttonShowWrapper.classList.toggle('repair-list__button-wrapper--down');

 repairList.classList.toggle('repair-list--expanded');

  buttonShowWrapper.classList.toggle('repair-list__button-wrapper--flipped');
});