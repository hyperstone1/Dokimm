import noUiSlider from "nouislider";
// import * as noUiSlider from "nouislider";
import "nouislider/dist/nouislider.css";

const rangeSlider = document.querySelector(".catalog__filter-inp");
if (rangeSlider) {
  noUiSlider.create(rangeSlider, {
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
}
