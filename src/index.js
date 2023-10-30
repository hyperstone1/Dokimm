import "swiper/css";
import "swiper/css/bundle";
import "./index.scss";
import "./js/pages/home";
import "./js/components/form";
import "./js/components/header";
import { WOW } from "wowjs";
import "animate.css";
import "wowjs/css/libs/animate.css";
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
animatedElement.addEventListener("wow:in", function () {
  console.log("appear");
  animatedElement.classList.add(".wow anim-fill-text");
  // Код, который выполнится, когда элемент появится на экране
});
