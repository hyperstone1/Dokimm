import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

document.addEventListener("DOMContentLoaded", () => {
  const aboutImgs = gsap.utils.toArray(".about__info-img");
  gsap.registerPlugin(ScrollTrigger);

  const aboutInfo = gsap.utils.toArray([
    ".about__info-right-img.second",
    ".about__info-description",
    ".about__info-img.second",
  ]);

  const imgsPhilosophy = gsap.utils.toArray([
    ".philosophy__right-img",
    ".philosophy__left-img",
  ]);

  const infoTextImgs = gsap.utils.toArray([
    ".info__imgs-item.second",
    ".info__main-slider",
  ]);

  aboutInfo.forEach((item) => {
    if (item.classList.contains("about__info-img")) {
      console.log(item);
      gsap.from(item, {
        // startAt: { y: "20rem" },
        y: "9rem",
        scrollTrigger: {
          trigger: ".about__info",
          start: "top center",
          end: "bottom center",
          scrub: 3,
          // markers: true,
        },
      });
    } else {
      // console.log(item);
      gsap.from(item, {
        y: "2rem",
        // startAt: { y: "0rem" },
        scrollTrigger: {
          trigger: ".about__info",
          start: "top center",
          end: "center center",
          scrub: 2,
          // markers: true,
        },
      });
    }
  });
  window.addEventListener("DOMContentLoaded", () => {
    ScrollTrigger.refresh();
  });
  window.addEventListener("load", () => {
    ScrollTrigger.refresh();
  });
  ScrollTrigger.config({
    ignoreMobileResize: true,
    autoRefreshEvents: "DOMContentLoaded,load,resize",
  });

  aboutImgs.forEach((img) => {
    if (!img.classList.contains("second") && !img.classList.contains("first")) {
      gsap.from(img, {
        y: "5rem",
        scrollTrigger: {
          trigger: ".about__info",
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
          //   markers: true,
        },
      });
    }
  });

  imgsPhilosophy.forEach((img) => {
    if (img.classList.contains("anim")) {
      gsap.from(img, {
        y: "9rem",
        scrollTrigger: {
          trigger: ".philosophy",
          start: "top center",
          end: "bottom center",
          scrub: 3,
          // markers: true,
        },
      });
    } else {
      gsap.from(img, {
        y: "5rem",
        scrollTrigger: {
          trigger: ".philosophy",
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
          //   markers: true,
        },
      });
    }
  });

  infoTextImgs.forEach((img) => {
    gsap.from(img, {
      y: "7rem",
      scrollTrigger: {
        trigger: ".info",
        start: "top center",
        end: "bottom center",
        scrub: 2,
        //   markers: true,
      },
    });
  });

  const infoEls = gsap.utils.toArray([
    ".info__imgs-item.first",
    // ".info__imgs-item.second",
  ]);
  infoEls.forEach((item) => {
    gsap.from(item, {
      y: "5rem",
      scrollTrigger: {
        trigger: ".info",
        start: "top center",
        end: "bottom center",
        scrub: 1,
        //   markers: true,
      },
    });
  });
});
