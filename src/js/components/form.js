import IMask from "imask";
document.addEventListener("DOMContentLoaded", () => {
  const phone = document.getElementById("phone");
  const inputs = document.querySelectorAll(".form_input");
  const form = document.querySelector(".request__form");
  IMask(phone, {
    mask: "+{7}(000)000-00-00",
  });
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e);
    inputs.forEach((item) => {
      if (item.value.length < 1) {
        item.classList.add("error");
      }
    });
  });
  inputs.forEach((input) => {
    input.addEventListener("input", (e) => {
      e.target.classList.remove("error");
    });
  });
});
