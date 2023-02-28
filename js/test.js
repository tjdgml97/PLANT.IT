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

//자가진단 버튼 클릭시 스크롤 이동
function movetoScroll() {
  const location = questionBox.offsetTop;
  window.scrollTo({ top: location, behavior: "smooth" });
  question1.classList.remove("hide");
  question1.style.transform = "translateX(0)";
}

btn.addEventListener("click", movetoScroll);

//답변 선택시 질문지 생성
const answer1 = document.querySelector("first-answer");
const answer2 = document.querySelector("second-answer");
const answer3 = document.querySelector("third-answer");
const answer4 = document.querySelector("forth-answer");

function movetoQuestion2() {
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

// 경우의 수마다 페이지 이동
const nextpage = document.querySelector(".btn-box>btn");
const hard = document.querySelector(".level-hard");
const easy = document.querySelector(".level-easy");
const short = document.querySelector(".water-short");
const long = document.querySelector(".water-long");

hard.addEventListener("click", function () {
  hard.classList.add("hard-short");
  hard.classList.add("hard-long");
});

easy.addEventListener("click", function () {
  easy.classList.add("easy-short");
  easy.classList.add("easy-long");
});

short.addEventListener("click", function () {
  short.classList.add("hard-short");
  short.classList.add("easy-short");
});

long.addEventListener("click", function () {
  long.classList.add("hard-long");
  long.classList.add("easy-long");
});

if (
  hard.classList.contains("hard-short") === true &&
  short.classList.contains("hard-short") === true
) {
  nextpage.setAttribute("href", "http://naver.com");
  console.log(nextpage);
}
