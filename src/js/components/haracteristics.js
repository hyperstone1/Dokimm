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
import { screenWidth } from "../utils/contants";

const navCard = document.querySelector(".banner__card-navigation");
const navCardNext = navCard && navCard.querySelector(".navigation-next");
const navCardPrev = navCard && navCard.querySelector(".navigation-prev");

const navHaract = document.querySelector(".haracteristics__left-navigation");
const harPrev = navHaract && navHaract.querySelector(".navigation-prev");
const harNext = navHaract && navHaract.querySelector(".navigation-next");

const bannerCur = document.querySelector(
  ".banner__card-pagination .pagination-current"
);
const bannerLast = document.querySelector(
  ".banner__card-pagination .pagination-last"
);

const curHarac = document.querySelector(
  ".haracteristics__left-pagination .pagination-current"
);
const lastHarac = document.querySelector(
  ".haracteristics__left-pagination .pagination-last"
);

const bannerCard1 = new Swiper(".banner__card-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  speed: 1500,
  slidesPerView: 1,
  on: {
    init: function (swiper) {
      bannerCur.textContent = swiper.activeIndex + 1;
      bannerLast.textContent = swiper.slides.length;
    },
    slideChange: function (swiper) {
      bannerCur.textContent = swiper.activeIndex + 1;
    },
  },
});

const bannerCard2 = new Swiper(".banner__card-imgs", {
  slidesPerView: 1,
  spaceBetween: 20,
  modules: [EffectCreative],
  speed: 1500,
  slidesPerView: 1,
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      translate: ["-20%", 0, -1],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },
  on: {
    init: function (swiper) {
      swiper.slides.forEach((item, id) => {
        if (id !== swiper.activeIndex) {
          item.classList.add("no-transition");
        }
      });
    },
    slideChange: function (swiper) {
      swiper.slides.forEach((item) => {
        item.classList.remove("no-transition");
      });
    },
  },
});
navCardNext &&
  navCardNext.addEventListener("click", () => {
    bannerCard1.slideNext();
    bannerCard2.slideNext();
  });

navCardPrev &&
  navCardPrev.addEventListener("click", () => {
    bannerCard1.slidePrev();
    bannerCard2.slidePrev();
  });

const haractSlider = new Swiper(".haracteristics__left-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  modules: [EffectCreative, Navigation],
  speed: 1500,
  slidesPerView: 1,
  effect: "creative",
  navigation: {
    prevEl: harPrev,
    nextEl: harNext,
  },
  creativeEffect: {
    prev: {
      shadow: true,
      translate: ["-20%", 0, -1],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },
  on: {
    init: function (swiper) {
      curHarac.textContent = swiper.activeIndex + 1;
      lastHarac.textContent = swiper.slides.length;
    },
    slideChange: function (swiper) {
      curHarac.textContent = swiper.activeIndex + 1;
    },
  },
});
