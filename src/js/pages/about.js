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

const infoPagination = document.querySelector(".info__controls-pagination");

const infoCur =
  infoPagination && infoPagination.querySelector(".pagination-current");
const infoLast =
  infoPagination && infoPagination.querySelector(".pagination-last");

new Swiper(".info__main-slider", {
  modules: [Navigation],
  slidesPerView: 1,
  spaceBetween: remToPx(2),
  navigation: {
    nextEl: ".navigation-next",
    prevEl: ".navigation-prev",
  },
  speed: 1000,
  on: {
    init: function (swiper) {
      infoLast.textContent = swiper.slides.length;
    },
    slideChange: function (swiper) {
      infoCur.textContent = swiper.activeIndex + 1;
    },
  },
});
