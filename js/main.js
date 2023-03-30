AOS.init();

const VIEW = document.getElementById("view");

VIEW.addEventListener("click", function () {
  const HIDDEN = document.getElementById("hidden");
  HIDDEN.style.display = "flex";
  HIDDEN.style.transition = "1s";
});

const QUESTION_BTNS = document.querySelectorAll("#faqs__btn");

QUESTION_BTNS.forEach(function (btn) {
  btn.addEventListener("click", function () {
    const FAQS_SECTION = this.closest(".faqs__section_question");
    const FAQS_TEXT = FAQS_SECTION.querySelector(".text");
    FAQS_SECTION.style.height = "170px";
    FAQS_SECTION.style.transition = "1s";
    QUESTION_BTNS.style.transformRotate = "180deg";
  });
});

const FOOTER__BTN = document.getElementById("footer__btn");

FOOTER__BTN.addEventListener("click", function () {
  const FOOTER__INPUT = document.getElementById("footer__input").value;
  alert(FOOTER__INPUT);
});
