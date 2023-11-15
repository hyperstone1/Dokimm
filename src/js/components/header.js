const header = document.querySelector(".header");
const headerMenu = document.querySelectorAll(".header__bottom");
const headerLinks = document.querySelectorAll(".link-category");
const burgerBtn = document.querySelector(".burger-btn");
const headerMob = document.querySelector(".header__mob");
const headerClose = document.querySelector(".header__mob-close");
const headerMobItems = document.querySelectorAll(".header__mob-item");
const headerSearch = document.querySelectorAll(".search-btn");
const searchResult = document.querySelector(".header__bottom-search");
const links = document.querySelectorAll(".link");
const headerBack = document.querySelector(".header__popular-back");

headerBack.addEventListener("click", () => {
  searchResult.classList.remove("visible");
  document.body.classList.remove("hidden");
});

// headerSearch.addEventListener("mouseover", () => {
//   searchResult.classList.add("visible");
// });
headerSearch.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("search-btn") ||
      e.target.closest(".search-btn")
    ) {
      searchResult.classList.remove("no-anim");
      header.classList.add("active");
      searchResult.classList.add("visible");
      headerMenu.forEach((menu) => {
        menu.classList.remove("visible");
      });
      links.forEach((link) => {
        link.classList.add("invisible");
      });
      btn.classList.add("active");
      if (window.innerWidth < 769) {
        document.body.classList.add("hidden");
      }
    }
  });
});

headerMobItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    const list = item.querySelector(".header__mob-list");
    list.classList.toggle("visible");
    item.classList.toggle("active");
  });
});

burgerBtn.addEventListener("click", (e) => {
  headerMob.classList.add("active");
  document.body.classList.add("hidden");
  headerMob.classList.remove("no-anim");
});
headerClose.addEventListener("click", () => {
  headerMob.classList.remove("active");
  document.body.classList.remove("hidden");
});

header.addEventListener("mouseover", (e) => {
  if (window.innerWidth >= 769) {
    if (e.target.classList.contains("link-category")) {
      let idMenu = null;
      headerLinks.forEach((link, id) => {
        link.classList.remove("active");
        link === e.target ? (idMenu = id) : null;
      });
      headerMenu.forEach((menu) => {
        menu.classList.remove("visible");
      });
      idMenu != null ? headerMenu[idMenu].classList.add("visible") : null;
      e.target.classList.add("active");
      header.classList.add("active");
      searchResult.classList.remove("visible");
      headerSearch.forEach((btn) => {
        btn.classList.remove("active");
      });
      links.forEach((link) => {
        link.classList.remove("invisible");
      });
    }
  }
});

header.addEventListener("mouseout", (e) => {
  if (window.innerWidth >= 769) {
    if (!header.contains(e.relatedTarget)) {
      // headerMenu.classList.remove("visible");
      headerMenu.forEach((item) => {
        item.classList.remove("visible");
      });
      headerLinks.forEach((link) => {
        link.classList.remove("active");
      });
      header.classList.remove("active");
      searchResult.classList.remove("visible");
      links.forEach((link) => {
        link.classList.remove("invisible");
      });
      headerSearch.forEach((btn) => {
        btn.classList.remove("active");
      });
    }
  }
});
