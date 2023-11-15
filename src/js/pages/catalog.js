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

const swiper = new Swiper(".category_ring__list", {
  slidesPerView: "auto",
  spaceBetween: remToPx(6),
});
