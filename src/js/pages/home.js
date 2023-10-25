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

document.addEventListener("DOMContentLoaded", () => {
  const pagCurSwiper1 = document.querySelector(
    ".category__top-pagination .pagination-current"
  );
  const pagLastSwiper1 = document.querySelector(
    ".category__top-pagination .pagination-last"
  );
  const bannerPag = document.querySelector(".banner__main-pagination");
  const bannerCur = bannerPag.querySelector(".pagination-current");
  const bannerLast = bannerPag.querySelector(".pagination-last");
  const navigationCat = document.querySelector(".category__top-navigation");
  const navigationProc = document.querySelector(".process__navigation");
  const bannerControls = document.querySelector(".banner__main-controls");
  const bannerPrev = bannerControls.querySelector(".navigation-prev");
  const bannerNext = bannerControls.querySelector(".navigation-next");
  const processItems = document.querySelectorAll(".process__list-item");
  const process = document.querySelector(".process");
  const processPrev = process.querySelector(".navigation-prev");
  const processNext = process.querySelector(".navigation-next");
  const processPagCur = process.querySelector(".pagination-current");
  const processPagLast = process.querySelector(".pagination-last");
  const screenWidth = window.screen.width;
  var init = false;
  var processList;

  const swiper1 = new Swiper(".category__list", {
    slidesPerView: "auto",
    spaceBetween: remToPx(8),
    modules: [Navigation, EffectCreative],
    //   effect: "creative",
    //   creativeEffect: {
    //     prev: {
    //       shadow: false,
    //       translate: [0, 0, 0],
    //     },
    //     next: {
    //       shadow: false,
    //       translate: [0, 0, 0],
    //     },
    //   },
    //   effect: 'creative',
    speed: 1500,
    navigation: {
      prevEl: navigationCat.querySelector(".navigation-prev"),
      nextEl: navigationCat.querySelector(".navigation-next"),
    },
    on: {
      init: function (swiper) {
        if (screenWidth < 769) {
          pagCurSwiper1.textContent = swiper.activeIndex + 1;
          pagLastSwiper1.textContent = swiper.slides.length;
        } else {
          pagCurSwiper1.textContent = swiper.activeIndex + 2;
          pagLastSwiper1.textContent = swiper.slides.length;
        }

        //   swiper.style.transitionTimingFunction =
        //     "cubic-bezier(0.32, 0.58, 0.64, 1.21)";
      },
      slideChange: function (swiper) {
        if (screenWidth < 769) {
          pagCurSwiper1.textContent = swiper.activeIndex + 1;
        } else {
          pagCurSwiper1.textContent = swiper.activeIndex + 2;
        }
      },
    },
    breakpoints: {
      769: {
        spaceBetween: remToPx(25.2),
        // spaceBetween: remToPx(27.1),
      },
    },
  });

  const swipersProcess = document.querySelectorAll(".process__slider");
  const processSliderMain = document.querySelector(".process__slider-main");
  swipersProcess.forEach((item) => {
    let swiper = new Swiper(item, {
      slidesPerView: 1,
      modules: [Navigation, Pagination, EffectCreative, Thumbs],
      speed: 1000,
      slidesPerView: "auto",
      // effect: "slide",
      effect: screenWidth < 769 ? "slide" : "creative",
      spaceBetween: 20,
      centeredSlides: false,
      navigation: {
        prevEl: navigationProc.querySelector(".navigation-prev"),
        nextEl: navigationProc.querySelector(".navigation-next"),
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
    });
  });
  function swiperCard() {
    if (screenWidth <= 768) {
      if (!init) {
        init = true;
        processList = new Swiper(".process__list", {
          slidesPerView: 1,
          centeredSlides: true,
          spaceBetween: remToPx(10),
          speed: 1000,
          navigation: {
            prevEl: navigationProc.querySelector(".navigation-prev"),
            nextEl: navigationProc.querySelector(".navigation-next"),
          },
        });
      }
    } else if (init) {
      processList.destroy();
      init = false;
    }
  }
  swiperCard();

  const swiperProcess = new Swiper(processSliderMain, {
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
    thumbs: {
      swiper: processList,
    },
    on: {
      init: function (swiper) {
        if (screenWidth > 769) {
          processItems.forEach((item, id) => {
            if (id === swiper.activeIndex) {
              item.classList.add("active");
              const description = item.querySelector(
                ".process__list-description"
              );
              const height = description.scrollHeight;
              console.log(height);
              description.style.height = `${height}px`;
            } else {
              item.classList.remove("active");
            }
          });
        } else {
          processList.slides[swiper.activeIndex].classList.add("active");
          processPagCur.textContent = swiper.activeIndex + 1;
          processPagLast.textContent = swiper.slides.length;
        }
      },
      slideChange: function (swiper) {
        processItems.forEach((item, id) => {
          if (screenWidth > 769) {
            const description = item.querySelector(
              ".process__list-description"
            );
            if (id === swiper.activeIndex) {
              item.classList.add("active");
              const height = description.scrollHeight;
              description.style.height = `${height}px`;
            } else {
              item.classList.remove("active");
              description.style.height = 0;
            }
          } else {
            processList.slideTo(swiper.activeIndex);
            console.log(processList);
            processList.slides.forEach((item) => {
              item.classList.remove("active");
            });
            processList.slides[swiper.activeIndex].classList.add("active");
            processPagCur.textContent = swiper.activeIndex + 1;
          }
        });
      },
    },
    navigation: {
      prevEl: navigationProc.querySelector(".navigation-prev"),
      nextEl: navigationProc.querySelector(".navigation-next"),
    },
  });

  let swiperBanner1 = new Swiper(".banner__main-slider", {
    slidesPerView: 1,
    modules: [Navigation, Pagination, EffectCreative, Thumbs],
    speed: 1000,
    slidesPerView: "auto",
    // effect: "slide",
    effect: screenWidth < 769 ? "slide" : "creative",
    spaceBetween: 20,
    centeredSlides: false,
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
        bannerCur.textContent = swiper.activeIndex + 1;
        bannerLast.textContent = swiper.slides.length;
      },
      slideChange: function (swiper) {
        bannerCur.textContent = swiper.activeIndex + 1;
      },
    },
  });
  const swiperBanner2 = new Swiper(".banner__info-slider", {
    modules: [Navigation, EffectCreative],
    slidesPerView: 1,
    effect: "creative",
    speed: 1000,
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
  const swiperBanner3 = new Swiper(".banner__info-text", {
    modules: [EffectFade],
    speed: 1500,
    slidesPerView: 1,
    spaceBetween: 30,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
  });
  const swiperBanner4 = new Swiper(".banner__name", {
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
  bannerPrev.addEventListener("click", () => {
    swiperBanner1.slidePrev();
    swiperBanner2.slidePrev();
    swiperBanner3.slidePrev();
    swiperBanner4.slidePrev();
  });
  bannerNext.addEventListener("click", () => {
    swiperBanner1.slideNext();
    swiperBanner2.slideNext();
    swiperBanner3.slideNext();
    swiperBanner4.slideNext();
  });
  const advantagesRight = new Swiper(".advantages__right-slider", {
    direction: "vertical",
    slidesPerView: 1,
    speed: 1000,
    spaceBetween: remToPx(34),
    breakpoints: {
      769: {
        spaceBetween: 0,
      },
    },
  });
  const advantagesLeft = new Swiper(".advantages__left-slider", {
    // direction: "vertical",
    slidesPerView: 1,
    speed: 1000,
    on: {
      slideNextTransitionStart: function (swiper) {
        advantagesRight.slideNext();
      },
      slidePrevTransitionStart: function (swiper) {
        advantagesRight.slidePrev();
      },
    },
  });

  window.addEventListener("load", swiperCard);
});
