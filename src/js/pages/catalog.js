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

const filterBtn = document.querySelector(".catalog__filter-btn");
const filterMenu = document.querySelector(".catalog__filter-menu");
const filterCount = document.querySelector(".catalog__filter-count");
const filterResets = document.querySelectorAll(".catalog__filter-reset");
const filtersItems = document.querySelectorAll('input[type="checkbox"]');

filterMenu &&
  filterMenu.addEventListener("submit", (e) => {
    e.preventDefault();
  });
let i = 0;

// let count = 0;

filterResets.forEach((item) => {
  item.addEventListener("click", () => {
    filtersItems.forEach((item) => {
      item.checked = false;
    });
    filterCount.classList.add("invisible");
    item.classList.add("invisible");
    filterMenu.classList.remove("visible");
  });
});

filtersItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    let count = 0;
    filtersItems.forEach((elem) => {
      console.log(elem.checked);
      if (elem.checked) {
        count++;
      }
    });
    if (count === 0) {
      filterCount.classList.add("invisible");
      filterResets[0].classList.add("invisible");
      filterResets[1].classList.add("invisible");
    } else {
      if (screenWidth < 769) {
        filterResets[1].classList.remove("invisible");
      } else {
        filterResets[0].classList.remove("invisible");
      }

      filterCount.classList.remove("invisible");
      filterCount.textContent = `(${count})`;
    }
    console.log(count);
  });
});

const prevButton = document.querySelector(".catalog__controls-prev");
const nextButton = document.querySelector(".catalog__controls-next");
const paginationButtons = document.querySelectorAll(
  ".catalog__pagination-number"
);

let activeIndex = 0;

prevButton &&
  prevButton.addEventListener("click", () => {
    if (activeIndex > 0) {
      paginationButtons[activeIndex].classList.remove("active");
      activeIndex--;
      paginationButtons[activeIndex].classList.add("active");
    }
  });

nextButton &&
  nextButton.addEventListener("click", () => {
    if (activeIndex < paginationButtons.length - 1) {
      paginationButtons[activeIndex].classList.remove("active");
      activeIndex++;
      paginationButtons[activeIndex].classList.add("active");
    }
  });

paginationButtons &&
  paginationButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      if (index !== activeIndex) {
        paginationButtons[activeIndex].classList.remove("active");
        activeIndex = index;
        paginationButtons[activeIndex].classList.add("active");
      }
    });
  });

filterBtn &&
  filterBtn.addEventListener("click", () => {
    filterMenu.classList.toggle("visible");
    filterMenu.classList.remove("no-anim");
    if (window.innerWidth < 769) {
      document.body.classList.add("hidden");
    }
  });
const closeFilter = document.querySelector(".catalog__filter-close");
closeFilter &&
  closeFilter.addEventListener("click", (e) => {
    e.preventDefault();
    filterMenu.classList.remove("visible");
    document.body.classList.remove("hidden");
  });
const navPrev = document.querySelector(".navigation-prev");
const navNext = document.querySelector(".navigation-next");
const swiper = new Swiper(".category_ring__list", {
  slidesPerView: "auto",
  spaceBetween: remToPx(4),
  modules: [Navigation],
  navigation: {
    prevEl: navPrev,
    nextEl: navNext,
  },
  breakpoints: {
    769: {
      slidesPerView: 4,
      spaceBetween: remToPx(6),
    },
  },
});
