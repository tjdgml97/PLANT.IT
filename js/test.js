// 스크롤 이동 기능
// 클래스, 아이디 값을 인자로 받아 offsetTop 밸류 초기화
// 초기화된 offsetTop 값을 위치로 이동

const questionBox = document.querySelector("#question-box");
const question1 = document.querySelector(".question1");
const question2 = document.querySelector(".question2");
const question3 = document.querySelector(".question3");
const question = questionBox.querySelector("question");
const btn = document.querySelector(".btn");
const resultBtn = document.querySelector("#btn-box");

function movetoScroll() {
  const location = questionBox.offsetTop;
  window.scrollTo({ top: location, behavior: "smooth" });
  question1.classList.remove("hide");
  question1.style.transform = "translateX(0)";
}

btn.addEventListener("click", movetoScroll);

const answer1 = document.querySelector("first-answer");
const answer2 = document.querySelector("second-answer");
const answer3 = document.querySelector("third-answer");
const answer4 = document.querySelector("forth-answer");

function movetoQuestion2() {
  question;
  question2.classList.remove("hide");
}

function movetoQuestion3() {
  question3.classList.remove("hide");
}

function movetoResult() {
  const location1 = resultBtn.offsetTop;
  window.scrollTo({ top: location1, behavior: "smooth" });
  resultBtn.classList.remove("hide");
}

window.onload = function () {
  setTimeout(function () {
    scrollTo(0, 0);
  }, 100);
};
