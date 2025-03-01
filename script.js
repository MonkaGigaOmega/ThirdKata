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

let slides = document.querySelectorAll('.repair-slider__slide'); 
let buttonShow = document.querySelector('.repair-list__button'); 
let buttonShowWrapper = document.querySelector('.repair-list__button-wrapper'); 

buttonShow.onclick = function () {
  for (let i = 6; i < slides.length; i++) {
    slides[i].classList.toggle('swiper-slide-hidden');
    slides[i].classList.toggle('swiper-slide-show');
  }

  buttonShowWrapper.classList.toggle('repair-list__button-wrapper--down');

  if (buttonShow.textContent === 'Скрыть') {
    buttonShow.textContent = 'Показать все';
  } else {
    buttonShow.textContent = 'Скрыть';
  }
};

buttonShow.addEventListener('click', function() {
  var repairList = document.querySelector('.repair-list');
  buttonShowWrapper.classList.toggle('repair-list__button-wrapper--flipped');
  if (repairList.style.height === '400px') {
      repairList.style.height = '322px'; 
  } else {
      repairList.style.height = '400px';
  }
});