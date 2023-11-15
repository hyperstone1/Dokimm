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

// const swiper1 = new Swiper(".banner__slider", {
//   slidesPerView: "auto",
//   spaceBetween: remToPx(8),
//   loop: true,
//   // centeredSlides: true,
// });

const swiper = new Swiper(".banner__slider", {
  // modules: [EffectCoverflow],
  grabCursor: true,
  centeredSlides: false,
  slidesPerView: "auto",
  initialSlide: 4,
  loop: true,
  loopAdditionalSlides: 4,
  spaceBetween: remToPx(8),
  // speed: 1000,
  on: {
    slideChange: function (swiper) {
      setTimeout(() => {
        swiper.update();
      }, 1);
    },
  },
  breakpoints: {
    769: {
      slidesPerView: "auto",
      centeredSlides: true,
      initialSlide: 4,
      loop: false,
      // loopAdditionalSlides: 4,
      spaceBetween: remToPx(8),
    },
  },
  // effect: "coverflow",
  // EffectCoverflow: {
  //   rotate: 0,
  //   depth: 800,
  //   slideShadows: true,
  // },
  // autoplay: { delay: 5000 },
});
// window.onresize = queryResizer;
// queryResizer();
// function queryResizer() {
//   if (window.innerWidth < 724) swiper.params.slidesPerView = 2;
//   if (window.innerWidth > 501) swiper.params.slidesPerView = 2;
//   if (window.innerWidth > 724) swiper.params.slidesPerView = 2.3;
//   if (window.innerWidth < 501) swiper.params.slidesPerView = 1;
//   swiper.update();
// }
