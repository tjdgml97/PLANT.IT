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

// mouseover 시 요소 사라짐
const liEl = document.querySelectorAll(".hidden-text > li");
// liEl.addEventListener("mouseover", function () {

liEl.forEach(function (el) {
  el.addEventListener("mouseover", function () {
    liEl.forEach(function (e) {
      el.classList.add("hide");
    });
  });
});

// hober
