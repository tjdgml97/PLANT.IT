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

// 클래스명: easy/hard, air/pet/big/deco, short/long

// *** 식물 데이터
// 이케아에서 "적당히 주기" -> short / 정확한 정보 찾아보기!
// 이미지 파일 한글명 영어로 바꿀 예정
const plantsStr = [
  "스파팁휠룸, SPATHIPHYLLUM, easy, short, air",
  "클루시아, CLUSIA, easy, short, deco",
  "아레카 야자, CHRYSALIDOCARPUS LUTESCENS, hard, short, air, pet, big",
  "파시라 아크바티카, PACHIRA AQUATICA, easy, long, pet, big",
  "샤마에도레아 엘레간스, CHAMAEDOREA ELEGANS, easy, short, pet",
  "라데르마셰라, RADERMACHERA, hard, short, pet",
  "피토니아, FITTONIA, hard, short, pet",
  "드라카에나 데레멘시스, DRACAENA DEREMENSIS, easy, short, big",
  "헤테로파낙스 시넨시스, HETEROPANAX CHINENSIS, hard, short, big",
  "사미오쿨카스, ZAMIOCULCAS, easy, long, deco",
  "칵타세아에, CACTACEAE, easy, long, deco",

  "페페로미아, PEPEROMIA, easy, short, deco",
  "칼란쇼에, KALANCHOE, hard, long, deco",
  "휘아신투스, HYACINTHUS, hard, short, deco",
  "블라드베르크, BLADVERK, hard, short, deco",
  "프힐로덴드론 콩오, PHILODENDRON CONGO, hard, short, deco",
  "산세비에리아 쉴린드리카, SANSEVIERIA CYLINDRICA, easy, long, air",
  "헤데라 헬릭스, HEDERA HELIX, hard, short, air",
];

// 0. 데이터 객체화
// // 0-1) plantsStr의 문자열로 이루어진 원소들을 배열로 만들기
const arr = []; // 배열을 원소로 가진 배열

for (let i = 0; i < plantsStr.length; i++) {
  arr.push(plantsStr[i].split(", "));
}

// // 0-2) 객체 생성을 위한 생성자 함수
function Plant(kor, eng, easy, short, types) {
  this.korName = kor;
  this.engName = eng;
  this.isEasy = easy;
  this.isShort = short;
  this.types = types; // 배열
}

// // 0-3) 각 식물별 객체 생성
const plants = []; // 객체를 원소로 가진 배열

for (let i = 0; i < arr.length; i++) {
  // korName, engName, isEasy, isShort, types 순서
  plants.push(
    new Plant(
      arr[i][0],
      arr[i][1],
      arr[i][2],
      arr[i][3],
      arr[i].slice(4, arr.length)
      // 배열의 뒷부분 일부를 잘라 배열로 만들기
    )
  );
}
console.log(plants);
// 1. div.plant 에 데이터 일괄 처리
const divArr = document.querySelectorAll(".plant"); // html의 div 요소

for (let i = 0; i < plants.length; i++) {
  // div 의 한글 이름
  const kor = divArr[i].querySelector(".kor");
  kor.innerHTML = `${plants[i].korName}`;

  // div 의 영어 이름
  const eng = divArr[i].querySelector(".eng");
  eng.innerHTML = `${plants[i].engName}`;

  // div 의 이미지
  // 이미지 파일명을 영어로 수정 시, ${plants[i].engName} 으로 바꾸기
  const img = divArr[i].querySelector("img");

  img.setAttribute("src", `./image/${plants[i].korName}.jpg`);

  // 클래스명 추가 - easy/hard, short/long, air, pet, big, deco
  plants[i].isEasy === "easy"
    ? divArr[i].classList.add("easy")
    : divArr[i].classList.add("hard");

  plants[i].isShort === "short"
    ? divArr[i].classList.add("short")
    : divArr[i].classList.add("long");

  for (let el of plants[i].types) {
    divArr[i].classList.add(el);
  }
}

console.log(divArr); ////////////////////////////////////////////////////////////// 여기까지 Ok

// 2. 버튼 click 에 따라 클래스명(clicked) 부여
// 버튼 hover, click 되면 디자인 바뀌게

// 검색된 식물 갯수
const plantsLength = document.querySelector(".arrLength");
plantsLength.textContent = divArr.length;

// reset 버튼
const resetBtn = document.querySelector(".reset");

resetBtn.addEventListener("click", function () {
  const clickedBtnAll = document.querySelectorAll(".clicked");

  clickedBtnAll.forEach(function (el) {
    el.classList.remove("clicked");
    // el.setAttribute("display", "block"); ///////////////////////////////////// test 중 //////
  });

  // localStorage 지우기 기능 추가할 것!
});

// 중복 가능한 설정값 - .air, .pet, .big, .deco
const airBtn = document.querySelector(".air");
const petBtn = document.querySelector(".pet");
const bigBtn = document.querySelector(".big");
const decoBtn = document.querySelector(".deco");

airBtn.addEventListener("click", function () {
  if (airBtn.classList.contains("clicked")) {
    // 이미 클릭된 상태이면, 클릭 해제(clicked 삭제)
    airBtn.classList.remove("clicked");
  } else {
    // 클릭되지 않은 상태이면, 클릭(clicked 추가)
    airBtn.classList.add("clicked");
  }
});
petBtn.addEventListener("click", function () {
  if (petBtn.classList.contains("clicked")) {
    petBtn.classList.remove("clicked");
  } else {
    petBtn.classList.add("clicked");
  }
});
bigBtn.addEventListener("click", function () {
  if (bigBtn.classList.contains("clicked")) {
    bigBtn.classList.remove("clicked");
  } else {
    bigBtn.classList.add("clicked");
  }
});
decoBtn.addEventListener("click", function () {
  if (decoBtn.classList.contains("clicked")) {
    decoBtn.classList.remove("clicked");
  } else {
    decoBtn.classList.add("clicked");
  }
});

// 중복 불가한 설정값 - .easy/.hard, .short/.long
const easyBtn = document.querySelector(".easy");
const hardBtn = document.querySelector(".hard");
const shortBtn = document.querySelector(".short");
const longBtn = document.querySelector(".long");

//받아온 localStorage value
const saveBtnName1 = localStorage.getItem("easyBtn");
const saveBtnName2 = localStorage.getItem("hardBtn");
const saveBtnName3 = localStorage.getItem("shortBtn");
const saveBtnName4 = localStorage.getItem("longBtn");
const saveBtnArr = [saveBtnName1, saveBtnName2, saveBtnName3, saveBtnName4];

if (saveBtnArr[0] === "easy") {
  if (saveBtnArr[2] === "short") {
    if (easyBtn.classList.contains("clicked")) {
      easyBtn.classList.remove("clicked");
      shortBtn.classList.remove("clicked");
    } else {
      easyBtn.classList.add("clicked");
      shortBtn.classList.add("clicked");
    }
  }
}
if (saveBtnArr[0] === "easy") {
  if (saveBtnArr[3] === "long") {
    if (easyBtn.classList.contains("clicked")) {
      easyBtn.classList.remove("clicked");
      longBtn.classList.remove("clicked");
    } else {
      easyBtn.classList.add("clicked");
      longBtn.classList.add("clicked");
    }
  }
}
if (saveBtnArr[1] === "hard") {
  if (saveBtnArr[2] === "short") {
    if (hardBtn.classList.contains("clicked")) {
      hardBtn.classList.remove("clicked");
      shortBtn.classList.remove("clicked");
    } else {
      hardBtn.classList.add("clicked");
      shortBtn.classList.add("clicked");
    }
  }
}
if (saveBtnArr[1] === "hard") {
  if (saveBtnArr[3] === "long") {
    if (hardBtn.classList.contains("clicked")) {
      hardBtn.classList.remove("clicked");
      longBtn.classList.remove("clicked");
    } else {
      hardBtn.classList.add("clicked");
      longBtn.classList.add("clicked");
    }
  }
}

easyBtn.addEventListener("click", function () {
  // 반대되는 설정값은 무조건 삭제
  hardBtn.classList.remove("clicked");

  if (easyBtn.classList.contains("clicked")) {
    easyBtn.classList.remove("clicked");
  } else {
    easyBtn.classList.add("clicked");
  }
});
hardBtn.addEventListener("click", function () {
  easyBtn.classList.remove("clicked");

  if (hardBtn.classList.contains("clicked")) {
    hardBtn.classList.remove("clicked");
  } else {
    hardBtn.classList.add("clicked");
  }
});

shortBtn.addEventListener("click", function () {
  longBtn.classList.remove("clicked");

  if (shortBtn.classList.contains("clicked")) {
    shortBtn.classList.remove("clicked");
  } else {
    shortBtn.classList.add("clicked");
  }
});
longBtn.addEventListener("click", function () {
  shortBtn.classList.remove("clicked");

  if (longBtn.classList.contains("clicked")) {
    longBtn.classList.remove("clicked");
  } else {
    longBtn.classList.add("clicked");
  }
});

// 3. 결과 출력
const resultArr = [];

// // clicked 가 없는 것을 안 보이게
// divArr.forEach(function (divEl) {
//   if (!divEl.classList.contains("clicked")) {
//     divEl.setAttribute("display", "none");
//   } else {
//     divEl.setAttribute("display", "block");
//   }
// });

// const t = document.querySelector(".plant");
// t.setAttribute("display", "none");

// 3. 임시 - 선택된 태그에 따라 결과 배열 생성
// console.log(divArr);

// for문
// const resultArr = [];
// for (let el of divArr) {
//   if (el.classList.contains("easy") && el.classList.contains("air")) {
//     resultArr.push(el);
//   }
// }

// filter 함수
// const resultArr = [...divArr].filter((item) => {
//   return item.classList.contains("easy");
// });

// console.log(resultArr);
// console.log(resultArr.children);
// console.log(resultArr.length); // 결과 갯수

// SWIPER PROMOTION
const swiperPromotion = new Swiper(".categoryImgs .swiper", {
  direction: "horizontal",
  slidesPerView: 1,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 1500,
    // disableOnInteraction: false,
  },
  pagination: {
    el: ".promotion .swiper-pagination",
    type: "bullets",
  },
});
