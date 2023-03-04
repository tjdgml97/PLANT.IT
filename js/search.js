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
console.log(arr);
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

console.log("식물별 객체 데이터", plants);

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

console.log("식물별 div", divArr);

// 2. 버튼 click 에 따라 클래스명(clicked) 부여
// 버튼 hover, click 되면 버튼 디자인 바뀌게
// 각 버튼마다 해당되는 식물의 속성값 저장

// 체크된 속성값 배열
// easy, hard, short, long, air, pet, big, deco 순
let selected = ["", "", "", "", "", "", "", ""];
let selectedStr = ""; // 체크된 것만 문자열로 (클래스명 판단 기준)

// 검색된 식물들
let result = document.querySelectorAll(".plant");

// 검색된 식물 갯수
const plantsLength = document.querySelector(".arrLength");
plantsLength.textContent = divArr.length;

// // 2-1) reset 버튼
const resetBtn = document.querySelector(".reset");

resetBtn.addEventListener("click", function () {
  // 모든 버튼의 clicked 클래스명 삭제
  const clickedBtnAll = document.querySelectorAll(".clicked");

  clickedBtnAll.forEach(function (el) {
    el.classList.remove("clicked");
  });

  // 모든 식물 다 보이게
  divArr.forEach(function (el) {
    el.style.display = `block`;
  });

  // 선택된 속성값 reset
  selected = selected.map((item) => {
    return (item = "");
  });

  // 모든 div.plant 다시 받아오기
  result = document.querySelectorAll(".plant");

  // 식물 갯수 reset
  plantsLength.textContent = result.length;

  // localStorage 지우기
  window.localStorage.clear();
});

// // 2-2) 중복 가능한 설정값 - .air, .pet, .big, .deco
// 선택된 속성값을 selected 에 반영
const airBtn = document.querySelector(".air");
const petBtn = document.querySelector(".pet");
const bigBtn = document.querySelector(".big");
const decoBtn = document.querySelector(".deco");

airBtn.addEventListener("click", function () {
  if (airBtn.classList.contains("clicked")) {
    // 이미 클릭된 상태이면, 클릭 해제(clicked 삭제)
    airBtn.classList.remove("clicked");
    selected[4] = "";
  } else {
    // 클릭되지 않은 상태이면, 클릭(clicked 추가)
    airBtn.classList.add("clicked");
    selected[4] = "air";
  }
});

petBtn.addEventListener("click", function () {
  if (petBtn.classList.contains("clicked")) {
    petBtn.classList.remove("clicked");
    selected[5] = "";
  } else {
    petBtn.classList.add("clicked");
    selected[5] = "pet";
  }
});

bigBtn.addEventListener("click", function () {
  if (bigBtn.classList.contains("clicked")) {
    bigBtn.classList.remove("clicked");
    selected[6] = "";
  } else {
    bigBtn.classList.add("clicked");
    selected[6] = "big";
  }
});

decoBtn.addEventListener("click", function () {
  if (decoBtn.classList.contains("clicked")) {
    decoBtn.classList.remove("clicked");
    selected[7] = "";
  } else {
    decoBtn.classList.add("clicked");
    selected[7] = "deco";
  }
});

// // 2-3) 중복 불가한 설정값 - .easy/.hard, .short/.long
const easyBtn = document.querySelector(".easy");
const hardBtn = document.querySelector(".hard");
const shortBtn = document.querySelector(".short");
const longBtn = document.querySelector(".long");

//받아온 localStorage value
const saveBtnName1 = localStorage.getItem("easyBtn");
const saveBtnName2 = localStorage.getItem("hardBtn");
const saveBtnName3 = localStorage.getItem("shortBtn");
const saveBtnName4 = localStorage.getItem("longBtn");
const saveBtnName5 = localStorage.getItem("bigBtn");
const saveBtnName6 = localStorage.getItem("airBtn");
const saveBtnName7 = localStorage.getItem("petBtn");
const saveBtnName8 = localStorage.getItem("decoBtn");
const saveBtnArr = [saveBtnName1, saveBtnName2, saveBtnName3, saveBtnName4];
const saveBtncate = [saveBtnName5, saveBtnName6, saveBtnName7, saveBtnName8];

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
if (saveBtncate[0] === "big") {
  if (bigBtn.classList.contains("clicked")) {
    bigBtn.classList.remove("clicked");
  } else {
    bigBtn.classList.add("clicked");
  }
}
if (saveBtncate[1] === "air") {
  if (airBtn.classList.contains("clicked")) {
    airBtn.classList.remove("clicked");
  } else {
    airBtn.classList.add("clicked");
  }
}
if (saveBtncate[2] === "pet") {
  if (petBtn.classList.contains("clicked")) {
    petBtn.classList.remove("clicked");
  } else {
    petBtn.classList.add("clicked");
  }
}
if (saveBtncate[3] === "deco") {
  if (decoBtn.classList.contains("clicked")) {
    decoBtn.classList.remove("clicked");
  } else {
    decoBtn.classList.add("clicked");
  }
}

// 선택된 속성값을 selected 에 반영
easyBtn.addEventListener("click", function () {
  // 반대되는 설정값은 무조건 삭제
  hardBtn.classList.remove("clicked");
  selected[1] = ""; // 반대되는 속성값은 selected 에서 없앰

  if (easyBtn.classList.contains("clicked")) {
    easyBtn.classList.remove("clicked");
    selected[0] = "";
  } else {
    easyBtn.classList.add("clicked");
    selected[0] = "easy";
  }
});
hardBtn.addEventListener("click", function () {
  easyBtn.classList.remove("clicked");
  selected[0] = "";

  if (hardBtn.classList.contains("clicked")) {
    hardBtn.classList.remove("clicked");
    selected[1] = "";
  } else {
    hardBtn.classList.add("clicked");
    selected[1] = "hard";
  }
});

shortBtn.addEventListener("click", function () {
  longBtn.classList.remove("clicked");
  selected[3] = "";

  if (shortBtn.classList.contains("clicked")) {
    shortBtn.classList.remove("clicked");
    selected[2] = "";
  } else {
    shortBtn.classList.add("clicked");
    selected[2] = "short";
  }
});
longBtn.addEventListener("click", function () {
  shortBtn.classList.remove("clicked");
  selected[2] = "";

  if (longBtn.classList.contains("clicked")) {
    longBtn.classList.remove("clicked");
    selected[3] = "";
  } else {
    longBtn.classList.add("clicked");
    selected[3] = "long";
  }
});

// 3. 검색 결과
// 화면 전체에서 클릭이 발생할 때마다 처리
window.addEventListener("click", function (e) {
  // 클릭된 요소가 button 일 때만
  if (e.target.tagName === "BUTTON") {
    // 전체 식물 안 보이게
    divArr.forEach(function (el) {
      el.style.display = `none`;
    });

    // 선택된 속성값들 문자열로 만들기
    selectedStr = ".plant";

    for (let trait of selected) {
      if (trait !== "") {
        selectedStr += "." + trait;
      }
    }

    // 검색결과 식물 보이게
    result = this.document.querySelectorAll(selectedStr);

    result.forEach(function (el) {
      el.style.display = `block`;
    });

    // 결과 갯수 업데이트
    plantsLength.textContent = result.length;

    console.log("-- 최종 속성값 문자열로 -------", selectedStr);
    console.log("결과 식물들", result);
  }
});

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
