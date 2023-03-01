const questionBox = document.querySelector("#question-box");
const question1 = document.querySelector(".question1");
const question2 = document.querySelector(".question2");
const question3 = document.querySelector(".question3");
const question = questionBox.querySelector("question");
const btn = document.querySelector(".btn");
const testBtn = document.querySelector(".btn-box");

//자가진단 버튼 클릭시 스크롤 이동
// 스크롤 이동 기능
// 클래스, 아이디 값을 인자로 받아 offsetTop 밸류 초기화
// 초기화된 offsetTop 값을 위치로 이동
function movetoScroll() {
  const location = questionBox.offsetTop;
  window.scrollTo({ top: location, behavior: "smooth" });
  question1.classList.remove("hide");
  question1.style.transform = "translateX(0)";
}

btn.addEventListener("click", movetoScroll);

//초기화시 페이지 상단으로 이동
window.onload = function () {
  setTimeout(function () {
    scrollTo(0, 0);
  }, 100);
};

//답변 선택시 질문지 생성
//답변  hard,easy,short,long 선택시 local value값 저장 후 다음 질문지 보이게하기
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
  if (easyQuestion.classList.contains("click")) {
    easyQuestion.classList.remove("click");
  } else {
    easyQuestion.classList.add("click");
  }
}

function btnHard() {
  localStorage.setItem("hardBtn", "hard");
  question2.classList.remove("hide");
  if (hardQuestion.classList.contains("click")) {
    hardQuestion.classList.remove("click");
  } else {
    hardQuestion.classList.add("click");
  }
}

//onclick 으로 3번째 질문 생성
function movetoQuestion3() {
  const answerBox = question2.querySelector(".answer-box");
  const first = answerBox.querySelector(".first-answer");
  const second = answerBox.querySelector(".second-answer");
  const third = answerBox.querySelector(".third-answer");
  const forth = answerBox.querySelector(".forth-answer");

  if (first.classList.contains("click")) {
    first.classList.remove("click");
  } else {
    first.classList.add("click");
  }

  if (second.classList.contains("click")) {
    second.classList.remove("click");
  } else {
    second.classList.add("click");
  }

  if (third.classList.contains("click")) {
    third.classList.remove("click");
  } else {
    third.classList.add("click");
  }

  if (forth.classList.contains("click")) {
    forth.classList.remove("click");
  } else {
    forth.classList.add("click");
  }

  question3.classList.remove("hide");
}

//마지막 답변을 클릭하면 테스트 결과를 보러가는 버튼 생성
function btnShort() {
  const location1 = testBtn.offsetTop;
  window.scrollTo({ top: location1, behavior: "smooth" });
  localStorage.setItem("shortBtn", "short");
  testBtn.classList.remove("hide");
  if (shortQuestion.classList.contains("click")) {
    shortQuestion.classList.remove("click");
  } else {
    shortQuestion.classList.add("click");
  }
}

function btnLong() {
  const location1 = testBtn.offsetTop;
  window.scrollTo({ top: location1, behavior: "smooth" });
  localStorage.setItem("longBtn", "long");
  testBtn.classList.remove("hide");
  if (longQuestion.classList.contains("click")) {
    longQuestion.classList.remove("click");
  } else {
    longQuestion.classList.add("click");
  }
}

easyQuestion.addEventListener("click", btnEasy);
hardQuestion.addEventListener("click", btnHard);

shortQuestion.addEventListener("click", btnShort);
longQuestion.addEventListener("click", btnLong);
