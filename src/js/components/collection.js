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

const collestions = document.querySelectorAll("section.collection");

collestions.forEach((item) => {
  const collectionLeft = item.querySelector(".collection__left");
  const collectionMain = item.querySelector(".collection__main");
  const collectionRight = item.querySelector(".collection__right");
  const colPrev = item.querySelector(".navigation-prev");
  const colNext = item.querySelector(".navigation-next");

  const leftSlider = new Swiper(collectionLeft, {
    slidesPerView: 1,
    modules: [Navigation, Pagination, EffectCreative, Thumbs],
    speed: 1500,
    slidesPerView: "auto",
    // effect: "slide",
    effect: screenWidth < 769 ? "slide" : "creative",
    // spaceBetween: 20,
    centeredSlides: false,
    creativeEffect: {
      prev: {
        shadow: true,
        translate: ["-40%", 0, -1],
      },
      next: {
        translate: ["100%", 0, 0],
      },
    },
  });
  const mainSlider = new Swiper(collectionMain, {
    modules: [Navigation, EffectCreative],
    slidesPerView: 1,
    effect: "creative",
    speed: 1000,
    creativeEffect: {
      prev: {
        scale: 0,
        opacity: 0,
      },
      next: {
        scale: 0,
        opacity: 0,
      },
    },
    on: {
      init: function (swiper) {},
      slideChange: function (swiper) {},
    },
  });
  const rightSlider = new Swiper(collectionRight, {
    slidesPerView: 1,
    modules: [Navigation, Pagination, EffectCreative, Thumbs, EffectFade],
    speed: 1500,
    slidesPerView: "auto",
    // effect: "slide",
    effect: screenWidth < 769 ? "slide" : "fade",
    // spaceBetween: 20,
    centeredSlides: false,
  });
  console.log(colPrev);
  colPrev.addEventListener("click", () => {
    leftSlider.slidePrev();
    mainSlider.slidePrev();
    rightSlider.slidePrev();
  });
  colNext.addEventListener("click", () => {
    leftSlider.slideNext();
    mainSlider.slideNext();
    rightSlider.slideNext();
  });
});
