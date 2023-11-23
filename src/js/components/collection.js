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
const controls = document.querySelector(".col_desc__controls");
const collPrev = controls && controls.querySelector(".navigation-prev");
const collNext = controls && controls.querySelector(".navigation-next");
const collPagCur = document.querySelector(
  ".col_desc__controls-pagination .pagination-current"
);
const collPagLast = document.querySelector(
  ".col_desc__controls-pagination .pagination-last"
);

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
    allowTouchMove: false,
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
    allowTouchMove: false,
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
    allowTouchMove: false,
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

const imgs = document.querySelectorAll(".col_desc__main-img");

const collectionText = new Swiper(".col_desc__slider", {
  modules: [Pagination],
  slidesPerView: 1,
  spaceBetween: 20,
  // pagination: {
  //   el: controls.querySelector(".pagination"),
  // },
  allowTouchMove: false,
  on: {
    init: function (swiper) {
      collPagCur.textContent = swiper.activeIndex + 1;
      collPagLast.textContent = swiper.slides.length;
      updateImageClasses(swiper.activeIndex);
    },
    slideChange: function (swiper) {
      collPagCur.textContent = swiper.activeIndex + 1;
      updateImageClasses(swiper.activeIndex);
    },
  },
});

collPrev &&
  collPrev.addEventListener("click", () => {
    collectionText.slidePrev();
  });

collNext &&
  collNext.addEventListener("click", () => {
    collectionText.slideNext();
  });

function updateImageClasses(activeIndex) {
  // Удаляем все классы first, second, third, four, five, six у всех изображений
  imgs.forEach((img) => {
    img.classList.remove("first", "second", "third", "four", "five", "six");
  });

  // Определяем классы для текущего, предыдущего, следующего и следующего после следующего изображений
  const currentIndex = activeIndex % imgs.length; // Учитываем циклическую навигацию
  const prevIndex = (currentIndex - 1 + imgs.length) % imgs.length;
  const nextIndex = (currentIndex + 1) % imgs.length;
  const nextNextIndex = (currentIndex + 2) % imgs.length;
  const nextNextNextIndex = (currentIndex + 3) % imgs.length;
  const nextNextNextNextIndex = (currentIndex + 4) % imgs.length;

  // Добавляем соответствующие классы текущему, предыдущему, следующему и следующему после следующего изображениям
  imgs[currentIndex].classList.add("second");
  imgs[prevIndex].classList.add("first");
  imgs[nextIndex].classList.add("third");
  imgs[nextNextIndex].classList.add("four");
  imgs[nextNextNextIndex].classList.add("five");
  imgs[nextNextNextNextIndex].classList.add("six");
}
