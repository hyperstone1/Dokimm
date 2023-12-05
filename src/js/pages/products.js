import Swiper from "swiper";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
  EffectCoverflow,
  Thumbs,
  EffectCreative,
  Mousewheel,
} from "swiper/modules";
import remToPx from "../utils/rem";

const bannerPrev = document.querySelector(
  ".banner__prod-navigation .navigation-prev"
);
const bannerNext = document.querySelector(
  ".banner__prod-navigation .navigation-next"
);
const bannerCur = document.querySelector(
  ".banner__prod-pagination .pagination-current"
);
const bannerLast = document.querySelector(
  ".banner__prod-pagination .pagination-last"
);

const bannerProdSlider = new Swiper(".banner__prod-slider", {
  modules: [Navigation],
  slidesPerView: 1,
  spaceBetween: remToPx(0),
  speed: 800,
  direction: "vertical",
  on: {
    init: function (swiper) {
      bannerLast.textContent = swiper.slides.length;
    },
    slideChange: function (swiper) {
      bannerCur.textContent = swiper.activeIndex + 1;
    },
  },
  navigation: {
    prevEl: bannerPrev,
    nextEl: bannerNext,
  },
});

const artNames = document.querySelectorAll(".art__name");

const artNavPrev = document.querySelector(
  ".art__top-navigation .navigation-prev"
);
const artNavNext = document.querySelector(
  ".art__top-navigation .navigation-next"
);

const manufacSPagCur = document.querySelector(
  ".manufacturing__pagination .pagination-current"
);
const manufacSPagLast = document.querySelector(
  ".manufacturing__pagination .pagination-last"
);

const manufacSlider = new Swiper(".manufacturing__slider", {
  slidesPerView: "auto",
  modules: [Navigation, EffectCreative],
  spaceBetween: 0,
  initialSlide: 1,
  centeredSlides: true,
  allowSlidePrev: false,
  allowSlideNext: false,
  speed: 600,
  effect: "creative",
  navigation: {
    prevEl: ".manufacturing__top-navigation .navigation-prev",
    nextEl: ".manufacturing__top-navigation .navigation-next",
  },
  on: {
    init: function (swiper) {
      swiper.update();
      swiper.updateSlides();
      manufacSPagLast.textContent = swiper.slides.length;
    },
    slideChange: function (swiper) {
      if (swiper.realIndex === 1) {
        swiper.allowSlidePrev = false; // Запретить перелистывание слайдов влево
      } else {
        swiper.allowSlidePrev = true; // Разрешить перелистывание слайдов влево
      }

      // Проверка индекса предпоследнего слайда
      if (swiper.realIndex === swiper.slides.length - 2) {
        swiper.allowSlideNext = false; // Запретить перелистывание слайдов вправо
      } else {
        swiper.allowSlideNext = true; // Разрешить перелистывание слайдов вправо
      }
      manufacSPagCur.textContent = swiper.activeIndex + 2;
    },
  },
  creativeEffect: {
    prev: {
      shadow: false,
      translate: ["-255%", -120, -700],
    },

    next: {
      shadow: false,
      translate: ["157%", -20, 0],
    },
  },
});

const artCur = document.querySelector(".art__pagination .pagination-current");
const artLast = document.querySelector(".art__pagination .pagination-last");

const artSlider = new Swiper(".art__slider", {
  modules: [EffectCreative, Navigation],
  slidesPerView: 5,
  spaceBetween: remToPx(13.6),
  speed: 1200,
  allowTouchMove: false,
  //   loop: true,
  //   effect: "creative",
  centeredSlides: true,
  initialSlide: 4,
  //   navigation: {
  //     prevEl: ".art__top-navigation .navigation-prev",
  //     nextEl: ".art__top-navigation .navigation-next",
  //   },
  on: {
    init: function (swiper) {
      artNames.forEach((item) => {
        item.classList.remove("visible");
      });
      artNames[swiper.activeIndex].classList.add("visible");
      artLast.textContent = swiper.slides.length;
    },
    slideChange: function (swiper) {
      artCur.textContent = swiper.activeIndex + 1;
    },
  },
  //   creativeEffect: {
  //     prev: {
  //       shadow: true,
  //       translate: ["-200%", 0, 0],
  //     },
  //     next: {
  //       translate: ["200%", 0, 0],
  //     },
  //   },
});
if (artCur && artNames.length > 0) {
  artNavPrev &&
    artNavPrev.addEventListener("click", () => {
      artSlider.slidePrev();
      artNames.forEach((item) => {
        item.classList.remove("anim-prev", "anim-next");
      });
      artNames[artSlider.activeIndex].classList.add("visible", "anim-prev");
      artNames[artSlider.previousIndex].classList.add("anim-prev-opac");
      artNavPrev.style.pointerEvents = "none";
      setTimeout(() => {
        artNavPrev.style.pointerEvents = "auto";
        artNames[artSlider.previousIndex].classList.remove("visible");
        artNames[artSlider.previousIndex].classList.remove("anim-prev-opac");
      }, 590);
    });

  artNavNext &&
    artNavNext.addEventListener("click", () => {
      artSlider.slideNext();
      artNames.forEach((item) => {
        item.classList.remove("anim-prev", "anim-next");
      });
      artNames[artSlider.activeIndex].classList.add("visible", "anim-next");
      artNames[artSlider.previousIndex].classList.add("anim-next-opac");
      artNavNext.style.pointerEvents = "none";

      setTimeout(() => {
        artNavNext.style.pointerEvents = "auto";

        artNames[artSlider.previousIndex].classList.remove("visible");
        artNames[artSlider.previousIndex].classList.remove("anim-next-opac");
      }, 690);
    });
}

const manCur = document.querySelector(
  ".man__bottom-pagination .pagination-current"
);
const manLast = document.querySelector(
  ".man__bottom-pagination .pagination-last"
);

const manSlider = new Swiper(".man__slider", {
  slidesPerView: "auto",
  spaceBetween: remToPx(5.4),
  allowTouchMove: false,
  initialSlide: 0,
  allowSlidePrev: false,
  allowSlideNext: false,

  centeredSlides: false,
  speed: 800,
  modules: [Navigation],

  navigation: {
    prevEl: ".man__bottom-navigation .navigation-prev",
    nextEl: ".man__bottom-navigation .navigation-next",
  },
  on: {
    init(swiper) {
      manLast.textContent = swiper.slides.length;
      manCur.textContent = swiper.activeIndex + 4;
      swiper.update();
      swiper.updateSlides();

      if (swiper.realIndex === 0) {
        swiper.allowSlidePrev = false; // Запретить перелистывание слайдов влево
      } else {
        swiper.allowSlidePrev = true; // Разрешить перелистывание слайдов влево
      }
      if (swiper.realIndex === swiper.slides.length - 2) {
        swiper.allowSlideNext = false; // Запретить перелистывание слайдов вправо
      } else {
        swiper.allowSlideNext = true; // Разрешить перелистывание слайдов вправо
      }
    },
    slideChange: function (swiper) {
      // Проверка индекса предпоследнего слайда
      if (swiper.realIndex === 0) {
        swiper.allowSlidePrev = false; // Запретить перелистывание слайдов влево
      } else {
        swiper.allowSlidePrev = true; // Разрешить перелистывание слайдов влево
      }
      if (swiper.realIndex === swiper.slides.length - 4) {
        swiper.allowSlideNext = false; // Запретить перелистывание слайдов вправо
      } else {
        swiper.allowSlideNext = true; // Разрешить перелистывание слайдов вправо
      }
      manCur.textContent = swiper.activeIndex + 4;
    },
  },
});
