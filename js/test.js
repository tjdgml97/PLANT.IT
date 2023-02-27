// 스크롤 이동 기능
// 클래스, 아이디 값을 인자로 받아 offsetTop 밸류 초기화
// 초기화된 offsetTop 값을 위치로 이동

const questionBox = document.querySelector("#question-box");
const question1 = document.querySelector(".question1");
const question2 = document.querySelector(".question2");
const question3 = document.querySelector(".question3");
const question = questionBox.querySelector("p.question");
const answer = question.querySelector("p.answer");
const btn = document.querySelector(".btn");
const resultBtn = document.querySelector(".result-btn");

function movetoScroll() {
  questionBox.setAttribute();
  const location = questionBox.offsetTop;
  window.scrollTo({ top: location, behavior: "smooth" });
  question1.classList.remove("hide");
  question1.style.transform = "translateX(0)";
}

function movetoQuestion2(check) {
  if (check.checked === true) {
    question2.classList.remove("hide");
    question2.style.transform = "translateX(0)";
  }
}

function movetoQuestion3(check) {
  if (check.checked === true) {
    const location2 = document.body.scrollHeight;
    window.scrollTo({ top: location2, behavior: "smooth" });
    question3.classList.remove("hide");
    question3.style.transform = "translateX(0)";
  }
}

function movetoResult(check) {
  if (check.checked === true) {
    question3.classList.remove("hide");
    question3.style.transform = "translateX(0)";
    resultBtn.classList.remove("hide");
  }
}

btn.addEventListener("click", movetoScroll);

window.onload = function () {
  setTimeout(function () {
    scrollTo(0, 0);
  }, 100);
};
