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
const mineSectBtn = document.querySelector("#mineSectBtn");
const interviewSectBtn = document.querySelector("#interviewSectBtn");

const sloganSect = document.querySelector(".section--slogan");
const logoSect = document.querySelector(".section--logo");
const meritSect = document.querySelector(".section--merit");
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
const progress = document.querySelector(".progress-box");
const bar1 = progress.querySelector(".progress1");
const bar2 = progress.querySelector(".progress2");
const bar3 = progress.querySelector(".progress3");

function moveto1() {
  if (merit1.classList.contains("move1")) {
    merit1.classList.remove("move1");
    merit2.classList.remove("hide");
    merit3.classList.remove("hide");
    merit4.classList.remove("hide");
    progress.classList.add("hide");
  } else {
    merit1.classList.add("move1");
    merit2.classList.add("hide");
    merit3.classList.add("hide");
    merit4.classList.add("hide");
    const totalMinwon2017 = 70.2;
    let t1 = 0;
    bar1.style.width = 0;
    const barAnimation1 = setInterval(() => {
      bar1.style.width = t1 + "%";
      t1++ >= totalMinwon2017 && clearInterval(barAnimation1);
    }, 10);
    const totalMinwon2018 = 58.3;
    let t2 = 0;
    bar2.style.width = 0;
    const barAnimation2 = setInterval(() => {
      bar2.style.width = t2 + "%";
      t2++ >= totalMinwon2018 && clearInterval(barAnimation2);
    }, 10);
    const totalMinwon2019 = 38.4;
    let t3 = 0;
    bar3.style.width = 0;
    const barAnimation3 = setInterval(() => {
      bar3.style.width = t3 + "%";
      t3++ >= totalMinwon2019 && clearInterval(barAnimation3);
    }, 10);
    progress.classList.remove("hide");
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
    donut.style.background = `conic-gradient(#0bac3b 0% ${totalMinwon}%, #F2F2F2 ${totalMinwon}% 100%)`;
    donut1.style.background = `conic-gradient(#0bac3b 0% ${totalMinwon1}%, #F2F2F2 ${totalMinwon1}% 100%)`;
    let t4 = 0;
    let t5 = 0;
    const donutAnimation = setInterval(() => {
      donut.dataset.percent = t4;
      donut.style.background = `conic-gradient(#0bac3b 0 ${t4}%, #DEDEDE ${t4}% 100% )`;
      t4++ >= totalMinwon && clearInterval(donutAnimation);
    }, 10);
    const donutAnimation1 = setInterval(() => {
      donut1.dataset.percent = t5;
      donut1.style.background = `conic-gradient(#0bac3b 0 ${t5}%, #DEDEDE ${t5}% 100% )`;
      t5++ >= totalMinwon1 && clearInterval(donutAnimation1);
    }, 10);
    donut.classList.remove("hide");
    donut1.classList.remove("hide");
    // donutbox.classList.remove("hide");
  }
}

const lowCo2 = document.querySelector(".lowco2middle");

function moveto3() {
  if (merit3.classList.contains("move1")) {
    merit3.classList.remove("move1");
    merit2.classList.remove("hide");
    merit1.classList.remove("hide");
    merit4.classList.remove("hide");
    lowCo2.classList.add("hide");
  } else {
    merit3.classList.add("move1");
    merit2.classList.add("hide");
    merit1.classList.add("hide");
    merit4.classList.add("hide");
    lowCo2.classList.remove("hide");
  }
}

const progressInt = document.querySelector(".progress-box-int");
const barInt1 = progressInt.querySelector(".progress-int1");
const barInt2 = progressInt.querySelector(".progress-int2");
const barInt3 = progressInt.querySelector(".progress-int3");
const barInt4 = progressInt.querySelector(".progress-int4");

function moveto4() {
  if (merit4.classList.contains("move1")) {
    merit4.classList.remove("move1");
    merit2.classList.remove("hide");
    merit3.classList.remove("hide");
    merit1.classList.remove("hide");
    progressInt.classList.add("hide");
  } else {
    merit4.classList.add("move1");
    merit2.classList.add("hide");
    merit3.classList.add("hide");
    merit1.classList.add("hide");
    const totalMinwon20 = 70;
    const totalMinwon30 = 60;
    const totalMinwon40 = 75;
    const totalMinwon50 = 77;
    let t20 = 0;
    barInt1.style.width = 0;
    const barAnimationInt1 = setInterval(() => {
      barInt1.style.width = t20 + "%";
      t20++ >= totalMinwon20 && clearInterval(barAnimationInt1);
    }, 10);
    let t30 = 0;
    barInt2.style.width = 0;
    const barAnimationInt2 = setInterval(() => {
      barInt2.style.width = t30 + "%";
      t30++ >= totalMinwon30 && clearInterval(barAnimationInt2);
    }, 10);
    let t40 = 0;
    barInt3.style.width = 0;
    const barAnimationInt3 = setInterval(() => {
      barInt3.style.width = t40 + "%";
      t40++ >= totalMinwon40 && clearInterval(barAnimationInt3);
    }, 10);
    let t50 = 0;
    barInt4.style.width = 0;
    const barAnimationInt4 = setInterval(() => {
      barInt4.style.width = t50 + "%";
      t50++ >= totalMinwon50 && clearInterval(barAnimationInt4);
    }, 10);
    progressInt.classList.remove("hide");
  }
}

merit1.addEventListener("click", moveto1);
merit2.addEventListener("click", moveto2);
merit3.addEventListener("click", moveto3);
merit4.addEventListener("click", moveto4);
