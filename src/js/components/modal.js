const btnModal = document.querySelectorAll(".btn-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const modalClose = document.querySelector(".modal__main-close");

btnModal.forEach((btn) => {
  btn.addEventListener("click", () => {
    modal.classList.add("visible");
    overlay.classList.add("visible");
  });
});
modalClose.addEventListener("click", (e) => {
  modal.classList.remove("visible");
  overlay.classList.remove("visible");
  setTimeout(() => {
    modal.querySelector(".modal__image").classList.remove("visible");
    modal.querySelector(".modal__success").classList.remove("visible");
    modal.querySelector(".modal__main").classList.add("visible");
  }, 300);
});
