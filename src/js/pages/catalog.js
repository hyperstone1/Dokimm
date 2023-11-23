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

const filterBtn = document.querySelector(".catalog__filter-btn");
const filterMenu = document.querySelector(".catalog__filter-menu");
const catalogPag = document.querySelectorAll(".catalog__pagination-number");
const catalogNext = document.querySelector(".catalog__controls-next");
const catalogPrev = document.querySelector(".catalog__controls-prev");
let i = 0;

catalogNext.addEventListener("click", (e) => {
  if (i < catalogPag.length - 2) {
    catalogPag.forEach((pag, id) => {
      if (pag.classList.contains("active")) {
        i = id;
      }
      pag.classList.remove("active");
    });
    console.log(i, catalogPag.length - 1);

    catalogPag[i + 1].classList.add("active");
  }
});

catalogPrev.addEventListener("click", (e) => {
  if (i > 1) {
    catalogPag.forEach((pag, id) => {
      if (pag.classList.contains("active")) {
        i = id;
      }
      pag.classList.remove("active");
    });
    catalogPag[i - 1].classList.add("active");
  }
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
catalogPag.forEach((item) => {
  item.addEventListener("click", () => {
    catalogPag.forEach((elem) => {
      elem.classList.remove("active");
    });
    item.classList.add("active");
  });
});
