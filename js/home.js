// function movetoScroll() {
//   const location = titleSect.offsetTop;
//   window.scrollTo({ top: location, behavior: "smooth" });
// }

// window.onload = function () {
//   setTimeout(function () {
//     scrollTo(0, 0);
//   }, 100);
// };

// window.addEventListener("scroll", movetoScroll);
// let ones = 0;
// window.addEventListener("scroll", function () {
//   const posY = this.window.pageYOffset;
//   const defaultSect = 0;
//   const titleSect = document.querySelector(".main-section-1");
//   const recomendPlantsSect = document.querySelector(".main-section-2");
//   const testSect = document.querySelector(".main-section-3");
//   if (
//     posY >= titleSect.offsetTop &&
//     posY <= recomendPlantsSect.offsetTop &&
//     !ones
//   ) {
//     console.log("1");
//     window.scrollTo({ top: recomendPlantsSect.offsetTop, behavior: "smooth" });
//     ones = 1;
//     return;
//   }

//   if (
//     posY >= recomendPlantsSect.offsetTop &&
//     posY <= testSect.offsetTop &&
//     ones === 1
//   ) {
//     console.log("2");
//     window.scrollTo({ top: testSect.offsetTop, behavior: "smooth" });
//     ones = 2;
//     return;
//   }
//   // if (posY <= titleSect.offsetTop) {
//   //   console.log("object", posY <= titleSect.offsetTop);
//   //   ones = 0;
//   // }
//   // if (posY >= testSect.offsetTop && posY <= totalHeight && ones === 2) {
//   //   window.scrollTo({ top: titleSect.offsetTop, behavior: "smooth" });
//   //   ones = 3;
//   //   return;
//   // }
// });
// window.onload = function () {
//   setTimeout(function () {
//     scrollTo(0, 0);
//   }, 100);
//   ones = 0;
// };
const titleSectBtn = document.querySelector("#titleSectBtn");
const titleSect = document.querySelector(".main-section-1");
const recomendSect = document.querySelector(".main-section-2");
const testSect = document.querySelector(".main-section-3");
titleSectBtn.addEventListener("click", function () {
  window.scrollTo({ top: recomendSect.offsetTop, behavior: "smooth" });
});
