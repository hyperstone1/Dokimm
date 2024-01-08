import remToPx from "../utils/rem";

const videos = document.querySelectorAll("[data-modal]");
const lightbox = document.querySelector(".lightbox");
const lightClose = document.querySelector(".lightbox__main-close");
const overlay = document.querySelector(".overlay");
const lightPrev = document.querySelector(
  ".lightbox__main-navigation .navigation-prev"
);
const lightNext = document.querySelector(
  ".lightbox__main-navigation .navigation-next"
);
const lightWrapper = document.querySelector(".lightbox__slides");
console.log("videos: ", videos);
let currentPosition = 0;

let lightSlides = null;
let slideWidth = null;
const lightPagCur = document.querySelector(
  ".lightbox__main-pagination .pagination-current"
);
const lightPagLast = document.querySelector(
  ".lightbox__main-pagination .pagination-last"
);

let activeSlide = 0;
lightPagLast.textContent = videos.length;

lightPrev.addEventListener("click", () => {
  if (activeSlide !== 0) {
    --activeSlide;
    currentPosition +=
      slideWidth + Number(remToPx(3).substring(0, remToPx(3).length - 2));
    console.log(slideWidth);
    console.log(currentPosition);
    console.log(remToPx(3));
    lightWrapper.style.transform = `translateX(${currentPosition}px)`;
    lightSlides.forEach((item) => {
      item.classList.remove("active");
    });
    lightSlides[activeSlide].classList.add("active");
    lightPagCur.textContent = activeSlide + 1;
  }
});

lightNext.addEventListener("click", () => {
  if (activeSlide < videos.length - 1) {
    ++activeSlide;
    currentPosition -=
      slideWidth + Number(remToPx(3).substring(0, remToPx(3).length - 2));
    console.log(slideWidth);
    console.log(currentPosition);
    console.log(remToPx(3));
    lightWrapper.style.transform = `translateX(${currentPosition}px)`;
    lightSlides.forEach((item) => {
      item.classList.remove("active");
    });
    lightSlides[activeSlide].classList.add("active");
    lightPagCur.textContent = activeSlide + 1;
  }
});

lightClose.addEventListener("click", () => {
  lightbox.classList.remove("visible");
  setTimeout(() => {
    overlay.classList.remove("visible");
  }, 400);
});

videos.forEach((item, id) => {
  item.addEventListener("click", () => {
    lightbox.classList.add("visible");
    overlay.classList.add("visible");
    lightWrapper.innerHTML = "";
    videos.forEach((video) => {
      const videoSrc = video.querySelector("video").src;
      const videoText = video.dataset.text;
      const slide = document.createElement("div");
      slide.className = "lightbox__slides-item";
      slide.innerHTML = `
            <div class="lightbox__slides-video">
                <video src="${videoSrc}">
                    <source src="${videoSrc}" type="video/mp4" />
                </video>
            </div>
            <div class="lightbox__slides-name">
                ${videoText}
            </div>
        `;
      lightWrapper.appendChild(slide);
      console.log(slide);
    });
    const slides = lightbox.querySelectorAll(".lightbox__slides-item");
    slideWidth = slides[0].offsetWidth;
    lightSlides = slides;
    activeSlide = id;
    let activePos = -(
      activeSlide * slideWidth +
      activeSlide * Number(remToPx(3).substring(0, remToPx(3).length - 2))
    );
    console.log("activePos: ", activePos);
    lightSlides[activeSlide].classList.add("active");
    lightWrapper.style.transform = `translateX(${activePos}px)`;
    currentPosition = activePos;
  });
});
