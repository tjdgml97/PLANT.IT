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
const reason = document.querySelector(".reason-box");

merit1.addEventListener("click", moveto1);
merit2.addEventListener("click", moveto2);
merit3.addEventListener("click", moveto3);
merit4.addEventListener("click", moveto4);
