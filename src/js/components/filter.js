import noUiSlider from "nouislider";
// import * as noUiSlider from "nouislider";
import "nouislider/dist/nouislider.css";
import { screenWidth } from "../utils/contants";

const rangeSlider = document.querySelector(".catalog__filter-inp");
const filter = document.querySelector(".catalog__filter");
const filterMenu = document.querySelector(".catalog__filter-menu");

if (rangeSlider) {
  const sliderInstance = noUiSlider.create(rangeSlider, {
    start: [17000, 160000],
    step: 1000,
    connect: true,
    tooltips: true,
    range: {
      min: [0],
      max: [200000],
    },
    format: {
      to: function (value) {
        return parseFloat(value).toLocaleString("ru-RU") + "";
      },
      from: function (value) {
        return value.replace("", "");
      },
    },
  });
  const tooltips = document.querySelectorAll(".noUi-tooltip");
  rangeSlider.noUiSlider.on("update", function (values, handle) {
    console.log("handle: ", tooltips[handle] === tooltips[1]);
    var percentage =
      ((parseFloat(values[handle]) - sliderInstance.options.range.min) /
        (sliderInstance.options.range.max - sliderInstance.options.range.min)) *
      100000;
    console.log("percentage: ", percentage);
    // Если ползунок находится в промежутке от 80% до 100%
    if (screenWidth < 769) {
      if (tooltips[handle] === tooltips[1]) {
        if (percentage >= 90) {
          // Вычисляем новое значение left в зависимости от процента и ширины родительского блока
          var leftValue = -60 + (percentage - 90); // 1.5 - это коэффициент, на который вы хотите уменьшить left
          tooltips[1].style.left = leftValue + "%";
        } else {
          // Сбрасываем стиль left, если ползунок находится вне промежутка от 80% до 100%
          tooltips[1].style.left = "50%";
        }
      }

      if (tooltips[handle] === tooltips[0]) {
        if (percentage <= 15 && percentage >= 0.1) {
          // Вычисляем новое значение left в зависимости от процента и ширины родительского блока
          var leftValue = -60 + (percentage + 60); // 1.5 - это коэффициент, на который вы хотите уменьшить left
          console.log(leftValue);
          tooltips[0].style.right = leftValue + "%";
        } else {
          // Сбрасываем стиль left, если ползунок находится вне промежутка от 80% до 100%
          tooltips[0].style.right = "auto";
          tooltips[0].style.left = "50%";
        }
      }
    } else {
      // if (tooltips[handle] === tooltips[1]) {
      //   if (percentage >= 90) {
      //     // Вычисляем новое значение left в зависимости от процента и ширины родительского блока
      //     var leftValue = -60 + (percentage - 90); // 1.5 - это коэффициент, на который вы хотите уменьшить left
      //     tooltips[1].style.left = leftValue + "%";
      //   } else {
      //     // Сбрасываем стиль left, если ползунок находится вне промежутка от 80% до 100%
      //     tooltips[1].style.left = "50%";
      //   }
      // }
      // if (tooltips[handle] === tooltips[0]) {
      //   if (percentage <= 15 && percentage >= 0.1) {
      //     // Вычисляем новое значение left в зависимости от процента и ширины родительского блока
      //     var leftValue = -60 + (percentage + 60); // 1.5 - это коэффициент, на который вы хотите уменьшить left
      //     console.log(leftValue);
      //     tooltips[0].style.right = leftValue + "%";
      //   } else {
      //     // Сбрасываем стиль left, если ползунок находится вне промежутка от 80% до 100%
      //     tooltips[0].style.right = "auto";
      //     tooltips[0].style.left = "50%";
      //   }
      // }
    }
  });
}

document.addEventListener("mouseup", (e) => {
  if (window.innerWidth >= 769) {
    const isClickInsideContainer = filter.contains(e.target);
    const isClickInsideOutsideElement = filter.contains(e.target);

    // Если клик был вне контейнера и вне элемента, который не должен закрывать контейнер, то закрываем контейнер
    if (!isClickInsideContainer && !isClickInsideOutsideElement) {
      filterMenu.classList.remove("visible");
    }
  }
});
