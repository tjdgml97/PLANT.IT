// scroll
const titleSectBtn = document.querySelector("#titleSectBtn");
const recomendSectBtn = document.querySelector("#recomendSectBtn");
const titleSect = document.querySelector(".main-section-1");
const recomendSect = document.querySelector(".main-section-2");
const testSect = document.querySelector(".main-section-3");
titleSectBtn.addEventListener("click", function () {
  window.scrollTo({ top: recomendSect.offsetTop, behavior: "smooth" });
});
recomendSectBtn.addEventListener("click", function () {
  window.scrollTo({ top: testSect.offsetTop, behavior: "smooth" });
});
// let lastScrollY = 0;
// document.addEventListener(
//   "wheel",
//   function (e) {
//     e.preventDefault();
//     console.log("titleSect", e.deltaY, e.wheelDeltaY);
//     if (e.deltaY < 0) {
//       window.scrollTo({ top: recomendSect.offsetTop, behavior: "smooth" });
//     } else {
//       // window.scrollTo({ top: testSect.offsetTop, behavior: "smooth" });
//     }
//   },
//   { passive: false }
// );

// document.addEventListener("wheel", function (e) {
//   event.preventDefault();
//   if (e.deltaY > 0) {
//     window.scrollTo({ top: testSect.offsetTop, behavior: "smooth" });
//   }
//   // window.scrollTo({ top: testSect.offsetTop, behavior: "smooth" });
// });

// mouseover 시 요소 사라짐
const liEl = document.querySelectorAll(".hidden-text > li");
const hiddenEl = document.querySelector(".hidden-text");
// liEl.addEventListener("mouseover", function () {

liEl.forEach(function (el) {
  el.addEventListener("mouseover", function () {
    liEl.forEach(function (e) {
      el.classList.add("hide");
    });
  });
});

window.onload = function () {
  hiddenEl.classList.add("start");
  localStorage.clear();
};

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

//localStorage로 값 보내기
const largePlant = document.querySelector(".box1");
const airPlant = document.querySelector(".box2");
const petPlant = document.querySelector(".box3");
const interiorPlant = document.querySelector(".box4");

function largePlantLocal() {
  localStorage.setItem("bigBtn", "big");
  localStorage.setItem("storExist", "storExist");
}
function airPlantLocal() {
  localStorage.setItem("airBtn", "air");
  localStorage.setItem("storExist", "storExist");
}
function petPlantLocal() {
  localStorage.setItem("petBtn", "pet");
  localStorage.setItem("storExist", "storExist");
}
function interiorPlantLocal() {
  localStorage.setItem("decoBtn", "deco");
  localStorage.setItem("storExist", "storExist");
}

largePlant.addEventListener("click", largePlantLocal);
airPlant.addEventListener("click", airPlantLocal);
petPlant.addEventListener("click", petPlantLocal);
interiorPlant.addEventListener("click", interiorPlantLocal);
