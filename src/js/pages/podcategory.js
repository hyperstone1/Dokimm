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
import "slick-carousel/slick/slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// const swiper1 = new Swiper(".banner__slider", {
//   slidesPerView: "auto",
//   spaceBetween: remToPx(8),
//   loop: true,
//   // centeredSlides: true,
// });
const slider = document.querySelector(".banner__slider");
// $(".").slick({});
if (slider) {
  new window.Slick(slider, {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
  });
}
const swiper = new Swiper(".banner__slider", {
  // modules: [EffectCreative],
  grabCursor: true,
  centeredSlides: false,
  slidesPerView: 3,
  initialSlide: 4,
  // loop: true,
  loopAdditionalSlides: 4,
  spaceBetween: remToPx(8),
  // effect: "creative",
  // creativeEffect: {
  //   prev: {
  //     shadow: true,
  //     translate: ["-120%", 0, 0],
  //   },
  //   next: {
  //     shadow: true,
  //     translate: ["120%", 0, 0],
  //   },
  // },
  // speed: 1000,
  on: {
    slideChange: function (swiper) {
      // setTimeout(() => {
      //   swiper.update();
      // }, 1);
    },
    slideChangeTransitionStart: function (swiper) {
      swiper.slides.forEach((item) => {
        item.style.width = "300px";
      });
    },
    slideChangeTransitionEnd: function (swiper) {
      swiper.slides.forEach((item) => {
        item.style.width = "300px";
      });
      swiper.slides[swiper.activeIndex].style.width = "300px";
      swiper.slides[swiper.previousIndex].style.width = "200px";
      swiper.slides[swiper.activeIndex + 1].style.width = "200px";
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
