const swiperTree = new Swiper(".tree_all .swiper", {
  direction: "horizontal",
  slidesPerView: 3,
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

function controlAutoPlay() {
  if (swiperTree.autoplay.running === false) {
    swiperTree.autoplay.start();
  } else {
    swiperTree.autoplay.stop();
  }
  console.log(swiperTree.autoplay);
}

// 템플릿에 데이터 전달
const resultArr = [
  {
    title: "불타는 열정! 똥별이",
    tag: ["#자유로운", "#관리가_쉬운", "#물_주기가_긴"],
    content:
      "별똥별 유형은 가드닝을 처음 시작하고, 자유로운 삶을 추구하는 유형입니다.</br>이 경우 물주는 경우를 종종 깜빡할 수 있고 습기, 온도를 맞추는데 어려움이 따를 수 있습니다.</br> 이러한 별똥별 유형을 위해 관리가 까다롭지 않고 쉬운 식물을 추천해드리고 있으며,</br>물주는 주기가 길어서 비교적 키우기 쉬운 식물로 구성되어있습니다.</br>아래의 추천식물을 확인해보세요",
    svg: "star",
    color: "#ffde01",
    type: ["long", "easy"],
    recomend: [
      "파시라 아크바티카",
      "사미오쿨카스",
      "칵타세아에",
      "산세비에리아 쉴린드리카",
    ],
  },
  {
    title: "식물 능력치 발사! 로켓",
    tag: ["#꼼꼼함", "#관리가_쉬운", "#물_주기가_짧은"],
    content:
      "로켓 유형은 가드닝을 처음 시작하지만 부지런한 타입으로  </br> 식물을 키울 수 있는 선택의 폭이 넓은 장점을 지니고 있습니다. </br> 물만 잘 준다면 어려운 식물도 충분히 잘 기를수 있는 가능성이 있으며</br> 이러한 유형에 맞춘 다양한 식물을 추천드리고 있습니다.</br>아래의 추천식물을 확인해보세요",
    svg: "rocket",
    color: "#ff3149",
    type: ["short", "easy"],
    recomend: [
      "스파팁휠룸",
      "클루시아",
      "샤마에도레아 엘레간스",
      "드라카에나 데레멘시스",
    ],
  },
  {
    title: "인공위성",
    tag: ["#자유로운", "#능력자", "#물_주기가_긴"],
    content:
      "인공위선 유형은 가드닝에 자신 있지만 바쁜 일상과 집에서 생활하는 시간이 많지 않은 유형입니다.  </br> 이러한 인공위성 유형을 위해 물주는 기간이 넉넉한 식물을 추천해드립니다.  </br> 아래의 추천식물을 확인해보세요",
    svg: "satellite",
    color: "#8fd623",
    type: ["long", "hard"],
    recomend: ["칼란쇼에", "칼란쇼에", "칼란쇼에", "칼란쇼에"],
  },
  {
    title: "난 이미 초록세상, 지구",
    tag: ["#완벽주의", "#능력자", "#물_주기가_짧은"],
    content: "earth",
    svg: "earth",
    color: "#9abde8",
    type: ["short", "hard"],
    recomend: [
      "아레카 야자",
      "라데르마셰라",
      "피토니아",
      "헤테로파낙스 시넨시스",
    ],
  },
];

const easy = localStorage.getItem("easyBtn");
const hard = localStorage.getItem("hardBtn");
const short = localStorage.getItem("shortBtn");
const long = localStorage.getItem("longBtn");

let param = "";

if (easy && long) {
  param = resultArr[0];
}
if (easy && short) {
  param = resultArr[1];
}
if (hard && long) {
  param = resultArr[2];
}
if (hard && short) {
  param = resultArr[3];
}

const title = document.querySelector(".typewriter");
title.innerText = param.title;
title.style.color = param.color;

const tag = document.querySelectorAll(".tag > li");
tag.forEach(function () {
  for (let i = 0; i < 3; i++) {
    tag[i].innerText = param.tag[i];
    tag[i].style.color = param.color;
    tag[i].style.borderColor = param.color;
    tag[i].style.border = "2px solid";
  }
});

const content = document.querySelector(".content");
content.innerHTML = `<p>${param.content}</p>`;

const img = document.querySelectorAll(".swiper-slide img");
img.forEach(function (e) {
  for (let i = 0; i < 4; i++) {
    img[i].setAttribute("src", `./image/${param.recomend[i]}.jpg`);
  }
});

const character = document.querySelector(".character img");
character.setAttribute("src", `./image/${param.svg}.svg`);
document.querySelector(".recomend .textBox a").style.color = param.color;

const backBtn = document.querySelectorAll(".path-box a");
backBtn.forEach(function () {
  for (let i = 0; i < 2; i++) {
    backBtn[i].style.color = param.color;
  }
});
document.querySelector("section:first-child").style.backgroundColor =
  param.color;

const slide = document.querySelector(".swiper-slide img");
