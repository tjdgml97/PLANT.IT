// 스크롤 이동 기능
// 클래스, 아이디 값을 인자로 받아 offsetTop 밸류 초기화
// 초기화된 offsetTop 값을 위치로 이동

const questionBox = document.querySelector("#question-box");
const question1 = document.querySelector(".question1");
const question2 = document.querySelector(".question2");
const question3 = document.querySelector(".question3");
const question = questionBox.querySelector("question");
const btn = document.querySelector(".btn");
const testBtn = document.querySelector(".btn-box");
const resultBtn = document.querySelector("#btn-box");

//자가진단 버튼 클릭시 스크롤 이동
function movetoScroll() {
  const location = questionBox.offsetTop;
  window.scrollTo({ top: location, behavior: "smooth" });
  question1.classList.remove("hide");
  question1.style.transform = "translateX(0)";
}

btn.addEventListener("click", movetoScroll);

window.onload = function () {
  setTimeout(function () {
    scrollTo(0, 0);
  }, 100);
};

//답변 선택시 질문지 생성
const easyQuestion = document.querySelector(
  ".question1 > .answer-box > .first-answer"
);
const hardQuestion = document.querySelector(
  ".question1 > .answer-box > .second-answer"
);
const shortQuestion = document.querySelector(
  ".question3 > .answer-box > .first-answer"
);
const longQuestion = document.querySelector(
  ".question3 > .answer-box > .second-answer"
);

function btnEasy() {
  localStorage.setItem("easyBtn", "easy");
  question2.classList.remove("hide");
}

function btnHard() {
  localStorage.setItem("hardBtn", "hard");
  question2.classList.remove("hide");
}

function btnShort() {
  const location1 = testBtn.offsetTop;
  window.scrollTo({ top: location1, behavior: "smooth" });
  localStorage.setItem("shortBtn", "short");
  testBtn.classList.remove("hide");
}

function btnLong() {
  const location1 = testBtn.offsetTop;
  window.scrollTo({ top: location1, behavior: "smooth" });
  localStorage.setItem("hardBtn", "hard");
  testBtn.classList.remove("hide");
}

function movetoQuestion3() {
  question3.classList.remove("hide");
}

easyQuestion.addEventListener("click", btnEasy);
hardQuestion.addEventListener("click", btnHard);

shortQuestion.addEventListener("click", btnShort);
longQuestion.addEventListener("click", btnLong);
