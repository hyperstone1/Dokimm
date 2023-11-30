import "swiper/css";
import "swiper/css/bundle";
import "./index.scss";
import "./js/pages/home";
import "./js/pages/catalog";
import "./js/pages/podcategory";
import "./js/pages/about";
import "./js/pages/products";
import "./js/components/form";
import "./js/components/header";
import "./js/components/filter";
import "./js/components/collection";
import "./js/components/haracteristics";
import "./js/components/modal";
import "./js/utils/gsap";
import { WOW } from "wowjs";
import "animate.css";
import "wowjs/css/libs/animate.css";
import ymaps from "ymaps";
import remToPx from "./js/utils/rem";

const noAnim = document.querySelectorAll(".no-anim");
noAnim.forEach((item) => {
  item.classList.remove("no-anim");
});

new WOW({
  resetAnimation: false,
  callback: function (box) {
    console.log(box);
    if (box.classList.contains("request__content-text--anim")) {
      setTimeout(() => {
        box.classList.add("anim-fill-text");
      }, 2200);
    }
    // the callback is fired every time an animation is started
    // the argument that is passed in is the DOM node being animated
  },
}).init();
var animatedElement = document.querySelector(
  ".request__content-wrapper.wow.anim-category"
);
animatedElement &&
  animatedElement.addEventListener("wow:in", function () {
    console.log("appear");
    animatedElement.classList.add(".wow anim-fill-text");
    // Код, который выполнится, когда элемент появится на экране
  });
