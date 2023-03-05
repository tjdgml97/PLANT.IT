const questionBox = document.querySelector("#question-box");
const question1 = document.querySelector(".question1");
const question2 = document.querySelector(".question2");
const question3 = document.querySelector(".question3");
const question = questionBox.querySelector("question");
const btn = document.querySelector(".btn");

//자가진단 버튼 클릭시 스크롤 이동
// 스크롤 이동 기능
// 클래스, 아이디 값을 인자로 받아 offsetTop 밸류 초기화
// 초기화된 offsetTop 값을 위치로 이동
function movetoScroll() {
  questionBox.classList.remove("hide");
  const location = questionBox.offsetTop;
  window.scrollTo({ top: location, behavior: "smooth" });
  question1.classList.remove("hide");
  question1.style.transform = "translateX(0)";
}

btn.addEventListener("click", movetoScroll);

//SWIPER PROMOTION
const swiper = document.querySelector(".promotion");

window.addEventListener("resize", function () {
  if (window.innerWidth <= 767) {
    if (swiper.classList.contains("hide")) {
      swiper.classList.remove("hide");
    } else {
      swiper.classList.add("hide");
    }
  }
});

this.window.addEventListener("resize", function () {
  if (this.window.innerWidth > 767) {
    swiper.classList.add("hide");
  } else {
    swiper.classList.remove("hide");
  }
});
window.addEventListener("resize", function () {
  if (window.innerWidth <= 1150) {
    if (swiper.classList.contains("hide")) {
      swiper.classList.remove("hide");
    } else {
      swiper.classList.add("hide");
    }
  }
});

this.window.addEventListener("resize", function () {
  if (this.window.innerWidth > 1150) {
    swiper.classList.add("hide");
  } else {
    swiper.classList.remove("hide");
  }
});

const swiperPromotion = new Swiper(".test .promotion .swiper", {
  direction: "horizontal", // 기본값이 수평. 안 써줘도 됨.
  slidesPerView: 1, // 슬라이드에서 몇장 보여줄 것인지
  spaceBetween: 10, // 아이템 간 거리
  centeredSlides: true, // 핵심 슬라이드를 어디에 보여줄 것인지
  loop: true,
  autoplay: {
    // 객체를 줘서 세부사항 설정 가능
    delay: 2000,
    disableOnInteraction: false, // 사용자가 건드려도 계속 autoplay 되게
  },
  // observer: true,
  // observerParents: true,
});

// CONTROLAUTOPLAY
function controlAutoPlay() {
  if (swiperPromotion.autoplay.running === false) {
    swiperPromotion.autoplay.start(); // 실행중이 아니면 시작
  } else {
    swiperPromotion.autoplay.stop();
  }
}

//초기화시 페이지 상단으로 이동
window.onload = function () {
  localStorage.clear();
  setTimeout(function () {
    scrollTo(0, 0);
  }, 100);
  console.log(window.innerWidth);
  if (window.innerWidth <= 767) {
    if (swiper.classList.contains("hide")) {
      swiper.classList.remove("hide");
    } else {
      swiper.classList.add("hide");
    }
  }
  if (this.window.innerWidth > 767) {
    swiper.classList.add("hide");
  } else {
    swiper.classList.remove("hide");
  }
  if (window.innerWidth <= 1150) {
    if (swiper.classList.contains("hide")) {
      swiper.classList.remove("hide");
    } else {
      swiper.classList.add("hide");
    }
  }
  if (this.window.innerWidth > 1150) {
    swiper.classList.add("hide");
  } else {
    swiper.classList.remove("hide");
  }
};

//답변 선택시 질문지 생성
//답변  hard,easy,short,long 선택시 local value값 저장 후 다음 질문지 보이게하기
// hard/easy, short/long 구분지어서 결과페이지로 이동시키기
const easyQuestion = document.querySelector(
  ".question1 > .answer-box > .first-answer"
);
const hardQuestion = document.querySelector(
  ".question1 > .answer-box > .second-answer"
);
const shortQuestion = document.querySelector(
  ".question3 > .answer-box > .second-answer"
);
const longQuestion = document.querySelector(
  ".question3 > .answer-box > .first-answer"
);
const saveBtnArr = ["easyBtn", "hardBtn", "shortBtn", "longBtn"];
const saveBtnName = localStorage.getItem(saveBtnArr);
function btnEasy() {
  if (saveBtnName !== "easyBtn") {
    localStorage.setItem("storExist", "storExist");
    localStorage.setItem("easyBtn", "easy");
    localStorage.removeItem("hardBtn", "hard");
    console.log("!!!!");
    console.log(localStorage.getItem("easyBtn"));
  }
  question2.classList.remove("hide");
  hardQuestion.classList.remove("click");
  if (easyQuestion.classList.contains("click")) {
    easyQuestion.classList.remove("click");
  } else {
    easyQuestion.classList.add("click");
  }
}

function btnHard() {
  if (saveBtnName !== "hardBtn") {
    localStorage.setItem("storExist", "storExist");
    localStorage.setItem("hardBtn", "hard");
    localStorage.removeItem("easyBtn", "easy");
    console.log("!!!!");
  }
  question2.classList.remove("hide");
  easyQuestion.classList.remove("click");
  if (hardQuestion.classList.contains("click")) {
    hardQuestion.classList.remove("click");
  } else {
    hardQuestion.classList.add("click");
  }
}

//onclick 으로 3번째 질문 생성
const answerBox = question2.querySelector(".answer-box");
const first = answerBox.querySelector(".first-answer");
const second = answerBox.querySelector(".second-answer");
const third = answerBox.querySelector(".third-answer");
const forth = answerBox.querySelector(".forth-answer");

function movetoQuestion1() {
  if (first.classList.contains("click")) {
    first.classList.remove("click");
  } else {
    first.classList.add("click");
  }
  question3.classList.remove("hide");
  testBtn.classList.remove("hide");
  const location1 = footer.offsetTop;
  window.scrollTo({ top: location1, behavior: "smooth" });
}
function movetoQuestion2() {
  if (second.classList.contains("click")) {
    second.classList.remove("click");
  } else {
    second.classList.add("click");
  }
  question3.classList.remove("hide");
  testBtn.classList.remove("hide");
  const location1 = footer.offsetTop;
  window.scrollTo({ top: location1, behavior: "smooth" });
}
function movetoQuestion3() {
  if (third.classList.contains("click")) {
    third.classList.remove("click");
  } else {
    third.classList.add("click");
  }
  question3.classList.remove("hide");
  testBtn.classList.remove("hide");
  const location1 = footer.offsetTop;
  window.scrollTo({ top: location1, behavior: "smooth" });
}
function movetoQuestion4() {
  if (forth.classList.contains("click")) {
    forth.classList.remove("click");
  } else {
    forth.classList.add("click");
  }
  question3.classList.remove("hide");
  testBtn.classList.remove("hide");
  const location1 = footer.offsetTop;
  window.scrollTo({ top: location1, behavior: "smooth" });
}

//마지막 답변을 클릭하면 테스트 결과를 보러가는 버튼 생성
const testBtn = document.querySelector("#btn-box");
const testBtna = document.querySelector(".btn-box>a");
const footer = document.querySelector("footer");

function btnShort() {
  if (saveBtnName !== "shortBtn") {
    localStorage.setItem("storExist", "storExist");
    localStorage.setItem("shortBtn", "short");
    localStorage.removeItem("longBtn", "long");
  }
  testBtna.classList.remove("hide");
  longQuestion.classList.remove("click");

  if (localStorage.getItem("shortBtn")) {
    if (localStorage.getItem("easyBtn")) {
      testBtna.href = `./result.html`;
    } else if (localStorage.getItem("hardBtn")) {
      testBtna.href = `./result.html`;
    }
  }
  if (shortQuestion.classList.contains("click")) {
    shortQuestion.classList.remove("click");
  } else {
    shortQuestion.classList.add("click");
  }
  const location1 = footer.offsetTop;
  window.scrollTo({ top: location1, behavior: "smooth" });
}

function btnLong() {
  if (saveBtnName !== "longBtn") {
    localStorage.setItem("storExist", "storExist");
    localStorage.setItem("longBtn", "long");
    localStorage.removeItem("shortBtn", "short");
    console.log("!!!!");
  }
  testBtna.classList.remove("hide");
  shortQuestion.classList.remove("click");
  if (localStorage.getItem("longBtn")) {
    if (localStorage.getItem("easyBtn")) {
      testBtna.href = `./result.html`;
    } else if (localStorage.getItem("hardBtn")) {
      testBtna.href = `./result.html`;
    }
  }
  if (longQuestion.classList.contains("click")) {
    longQuestion.classList.remove("click");
  } else {
    longQuestion.classList.add("click");
  }
  const location1 = footer.offsetTop;
  window.scrollTo({ top: location1, behavior: "smooth" });
}

easyQuestion.addEventListener("click", btnEasy);
hardQuestion.addEventListener("click", btnHard);

shortQuestion.addEventListener("click", btnShort);
longQuestion.addEventListener("click", btnLong);

// header
const menuIcon = document.querySelector(".menu-icon");
const menuEl = document.querySelector(".menu-bar-menu");

menuIcon.addEventListener("click", function () {
  if (menuEl.classList.contains("menu-hidden")) {
    menuEl.classList.remove("menu-hidden");
  } else {
    menuEl.classList.add("menu-hidden");
  }
});
