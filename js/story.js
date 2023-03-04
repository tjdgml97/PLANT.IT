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

// scroll
const sloganSectBtn = document.querySelector("#sloganSectBtn");
const logoSectBtn = document.querySelector("#logoSectBtn");
const meritSectBtn = document.querySelector("#meritSectBtn");
const reasonSectBtn = document.querySelector("#reasonSectBtn");
const mineSectBtn = document.querySelector("#mineSectBtn");
const interviewSectBtn = document.querySelector("#interviewSectBtn");

const sloganSect = document.querySelector(".section--slogan");
const logoSect = document.querySelector(".section--logo");
const meritSect = document.querySelector(".section--merit");
const reasonSect = document.querySelector(".section--reason");
const mineSect = document.querySelector(".section--mine");
const interviewSect = document.querySelector(".section--interview");
const campaignSect = document.querySelector(".section--campaign");

sloganSectBtn.addEventListener("click", function () {
  window.scrollTo({ top: logoSect.offsetTop, behavior: "smooth" });
});
logoSectBtn.addEventListener("click", function () {
  window.scrollTo({ top: meritSect.offsetTop, behavior: "smooth" });
});
meritSectBtn.addEventListener("click", function () {
  window.scrollTo({ top: reasonSect.offsetTop, behavior: "smooth" });
});
reasonSectBtn.addEventListener("click", function () {
  window.scrollTo({ top: mineSect.offsetTop, behavior: "smooth" });
});
mineSectBtn.addEventListener("click", function () {
  window.scrollTo({ top: interviewSect.offsetTop, behavior: "smooth" });
});
interviewSectBtn.addEventListener("click", function () {
  window.scrollTo({ top: campaignSect.offsetTop, behavior: "smooth" });
});

// merit 색션 이미지 움직임
const merit1 = document.querySelector(".merit--1");
const merit2 = document.querySelector(".merit--2");
const merit3 = document.querySelector(".merit--3");
const merit4 = document.querySelector(".merit--4");
const img1 = merit1.querySelector(".img-box");
const reason = document.querySelector(".reason-box");

function moveto1() {
  if (merit1.classList.contains("move1")) {
    merit1.classList.remove("move1");
    merit2.classList.remove("hide");
    merit3.classList.remove("hide");
    merit4.classList.remove("hide");
    reason.classList.add("hide");
  } else {
    merit1.classList.add("move1");
    merit2.classList.add("hide");
    merit3.classList.add("hide");
    merit4.classList.add("hide");
    reason.classList.remove("hide");
  }
}

//도넛모양 차트 만들기
const donut = document.querySelector(".donut");
const donut1 = document.querySelector(".donut1");
// const donutbox = document.querySelector(".donut-box");

function moveto2() {
  if (merit2.classList.contains("move1")) {
    merit2.classList.remove("move1");
    merit1.classList.remove("hide");
    merit3.classList.remove("hide");
    merit4.classList.remove("hide");
    donut.classList.add("hide");
    donut1.classList.add("hide");
    // donutbox.classList.add("hide");
  } else {
    merit2.classList.add("move1");
    merit1.classList.add("hide");
    merit3.classList.add("hide");
    merit4.classList.add("hide");
    const totalMinwon = donut.dataset.percent;
    const totalMinwon1 = donut1.dataset.percent;
    donut.style.background = `conic-gradient(#3F8BC9 0% ${totalMinwon}%, #F2F2F2 ${totalMinwon}% 100%)`;
    donut1.style.background = `conic-gradient(#3F8BC9 0% ${totalMinwon1}%, #F2F2F2 ${totalMinwon1}% 100%)`;
    let t4 = 0;
    let t5 = 0;
    const donutAnimation = setInterval(() => {
      donut.dataset.percent = t4;
      donut.style.background = `conic-gradient(#4F98FF 0 ${t4}%, #DEDEDE ${t4}% 100% )`;
      t4++ >= totalMinwon && clearInterval(donutAnimation);
    }, 10);
    const donutAnimation1 = setInterval(() => {
      donut1.dataset.percent = t5;
      donut1.style.background = `conic-gradient(#4F98FF 0 ${t5}%, #DEDEDE ${t5}% 100% )`;
      t5++ >= totalMinwon1 && clearInterval(donutAnimation1);
    }, 10);
    donut.classList.remove("hide");
    donut1.classList.remove("hide");
    // donutbox.classList.remove("hide");
  }
}

// 막대바 만들기
const progress = document.querySelector(".progress-box");
const bar = progress.querySelector(".progress");

function moveto3() {
  if (merit3.classList.contains("move1")) {
    merit3.classList.remove("move1");
    merit2.classList.remove("hide");
    merit1.classList.remove("hide");
    merit4.classList.remove("hide");
    progress.classList.add("hide");
  } else {
    merit3.classList.add("move1");
    merit2.classList.add("hide");
    merit1.classList.add("hide");
    merit4.classList.add("hide");
    const totalMinwon = 44;
    let t = 0;
    bar.style.width = 0;
    const barAnimation = setInterval(() => {
      bar.style.width = t + "%";
      t++ >= totalMinwon && clearInterval(barAnimation);
    }, 10);
    progress.classList.remove("hide");
  }
}
function moveto4() {
  if (merit4.classList.contains("move1")) {
    merit4.classList.remove("move1");
    merit2.classList.remove("hide");
    merit3.classList.remove("hide");
    merit1.classList.remove("hide");
    reason.classList.add("hide");
  } else {
    merit4.classList.add("move1");
    merit2.classList.add("hide");
    merit3.classList.add("hide");
    merit1.classList.add("hide");
    reason.classList.remove("hide");
  }
}

merit1.addEventListener("click", moveto1);
merit2.addEventListener("click", moveto2);
merit3.addEventListener("click", moveto3);
merit4.addEventListener("click", moveto4);
