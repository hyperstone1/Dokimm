import IMask from "imask";
import { emailRegex } from "../utils/contants";
document.addEventListener("DOMContentLoaded", () => {
  const phone = document.querySelectorAll(".form_phone");
  const inputs = document.querySelectorAll(".form_input");
  const forms = document.querySelectorAll(".form");
  if (forms.length > 0) {
    phone.forEach((tel) => {
      IMask(tel, {
        mask: "+{7}(000)000-00-00",
      });
    });
    forms.forEach((form) => {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        console.log(e);
        inputs.forEach((item) => {
          if (item.value.length < 1) {
            item.classList.add("error");
          } else {
            if (item.classList.contains("form_email")) {
              const emailValue = item.value.trim();
              // Регулярное выражение для валидации email.

              if (!emailRegex.test(emailValue)) {
                console.log(
                  'Поле "Email" содержит недопустимый адрес электронной почты.'
                );
                // Здесь вы можете добавить код для обработки недопустимого адреса электронной почты.
                item.classList.add("error");
              }
            }
            if (item.classList.contains("form_phone")) {
              const phoneValue = item.value.trim();
              phoneValue.length < 16 ? item.classList.add("error") : null;
            }
          }
        });
      });
    });

    inputs.forEach((input) => {
      input.addEventListener("input", (e) => {
        e.target.classList.remove("error");
      });
    });
  }
});
