import "swiper/css";
import "swiper/css/bundle";
import "./index.scss";
import "./js/pages/home";
import "./js/pages/catalog";
import "./js/pages/podcategory";
import "./js/pages/about";
import "./js/components/form";
import "./js/components/header";
import "./js/components/filter";
import "./js/components/collection";
import "./js/components/haracteristics";
import "./js/utils/gsap";
import { WOW } from "wowjs";
import "animate.css";
import "wowjs/css/libs/animate.css";
import ymaps from "ymaps";
import remToPx from "./js/utils/rem";

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
ymaps
  .load()
  .then((maps) => {
    const map = new maps.Map("map", {
      center: [55.7893423, 37.6569675],
      zoom: 17,
      controls: [],
    });
    var myPlacemark = new maps.Placemark(
      [55.7893423, 37.6569675],
      {},
      {
        iconLayout: "default#image", // Используем стандартный макет изображения
        iconImageHref: "./assets/images/placemark.svg", // Путь к вашей иконке
        // iconImageSize: [remToPx(12.6), remToPx(5.7)], // Размеры вашей иконки
      }
    );
    map.geoObjects.add(myPlacemark);
  })
  .catch((error) => console.log("Failed to load Yandex Maps", error));
