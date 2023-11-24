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

const bannerCard1 = new Swiper(".banner__card-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  speed: 1500,
  slidesPerView: 1,
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
navCardNext.addEventListener("click", () => {
  bannerCard1.slideNext();
  bannerCard2.slideNext();
});

navCardPrev.addEventListener("click", () => {
  bannerCard1.slidePrev();
  bannerCard2.slidePrev();
});

const haractSlider = new Swiper(".haracteristics__left-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  modules: [EffectCreative],
  speed: 1500,
  slidesPerView: 1,
  effect: "creative",
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
