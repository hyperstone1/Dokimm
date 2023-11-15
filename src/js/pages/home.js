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

document.addEventListener("DOMContentLoaded", () => {
  const pagCurSwiper1 = document.querySelector(
    ".category__top-pagination .pagination-current"
  );
  const pagLastSwiper1 = document.querySelector(
    ".category__top-pagination .pagination-last"
  );
  const bannerPag = document.querySelector(".banner__main-pagination");
  const bannerCur = bannerPag && bannerPag.querySelector(".pagination-current");
  const bannerLast = bannerPag && bannerPag.querySelector(".pagination-last");
  const navigationCat = document.querySelector(".category__top-navigation");
  const navigationProc = document.querySelector(".process__navigation");
  const bannerControls = document.querySelector(".banner__main-controls");
  const bannerPrev =
    bannerControls && bannerControls.querySelector(".navigation-prev");
  const bannerNext =
    bannerControls && bannerControls.querySelector(".navigation-next");
  const processItems = document.querySelectorAll(".process__list-item");
  const process = document.querySelector(".process");
  const processPrev = process && process.querySelector(".navigation-prev");
  const processNext = process && process.querySelector(".navigation-next");
  const processPagCur = process && process.querySelector(".pagination-current");
  const processPagLast = process && process.querySelector(".pagination-last");

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
      prevEl: navigationCat
        ? navigationCat.querySelector(".navigation-prev")
        : null,
      nextEl: navigationCat
        ? navigationCat.querySelector(".navigation-next")
        : null,
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
      speed: 1500,
      slidesPerView: "auto",
      // effect: "slide",
      effect: screenWidth < 769 ? "slide" : "creative",
      // spaceBetween: 20,
      centeredSlides: false,
      navigation: {
        prevEl: navigationProc
          ? navigationProc.querySelector(".navigation-prev")
          : null,
        nextEl: navigationProc
          ? navigationProc.querySelector(".navigation-next")
          : null,
      },
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
            prevEl: navigationProc
              ? navigationProc.querySelector(".navigation-prev")
              : null,
            nextEl: navigationProc
              ? navigationProc.querySelector(".navigation-next")
              : null,
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
      prevEl: navigationProc
        ? navigationProc.querySelector(".navigation-prev")
        : null,
      nextEl: navigationProc
        ? navigationProc.querySelector(".navigation-next")
        : null,
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
  if (bannerPrev && bannerNext) {
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
  }

  const advantages = document.querySelector(".advantages");
  if (advantages) {
    const advantagesRight = new Swiper(".advantages__right-slider", {
      direction: "vertical",
      slidesPerView: 1,
      speed: 3000,
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
      speed: 1500,
      // on: {
      //   slideNextTransitionStart: function (swiper) {
      //     advantagesRight.slideNext();
      //   },
      //   slidePrevTransitionStart: function (swiper) {
      //     advantagesRight.slidePrev();
      //   },
      // },
    });

    var isAnimating = false;

    advantagesRight.on("slideChangeTransitionStart", function () {
      isAnimating = true;
    });

    advantagesRight.on("slideChangeTransitionEnd", function () {
      isAnimating = false;
    });

    advantages.addEventListener("wheel", function (event) {
      if (isAnimating) {
        event.preventDefault();
        return;
      }
      var deltaY = event.deltaY;
      var isScrollingDown = deltaY > 0;
      var isAtBeginning =
        advantagesRight.isBeginning && advantagesLeft.isBeginning;
      var isAtEnd = advantagesRight.isEnd && advantagesLeft.isEnd;

      if (
        (isScrollingDown && !isAtEnd) ||
        (!isScrollingDown && !isAtBeginning)
      ) {
        // Разрешаем скролл только если не достигнут начало или конец слайдера
        event.preventDefault();

        if (isScrollingDown) {
          // Прокрутка вниз - перейти к следующему слайду
          advantagesRight.slideNext();
          advantagesLeft.slideNext();
        } else {
          // Прокрутка вверх - перейти к предыдущему слайду
          advantagesRight.slidePrev();
          advantagesLeft.slidePrev();
        }
      }
    });
  }

  window.addEventListener("load", swiperCard);
});
