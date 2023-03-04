// Main Header
// Search 

// 두번째 선택도 가능함 
const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input")

searchEl.addEventListener("click", function() {
  searchInputEl.focus();
 (searchEl.addEventListener("click", function() {
    searchInputEl.focus();
  }))
})

searchInputEl.addEventListener("focus", function() {
  searchInputEl.setAttribute("placeholder","통합 검색");
});

searchInputEl.addEventListener("blur", function(){
  searchInputEl.setAttribute("placeholder","");
})

// swiper
// swiper notice
// css 이선택자를 가지는 요소에게 스와이퍼 적용 ( 위치넣어주기)
// 객체 형태로 옵션값
const swiperNotice = new Swiper(".notice .notice-line .inner .inner__left .swiper",{
direction: "vertical",
loop : true,
autoplay :true,
})

// swiper promotion 
const swiperPromotion = new Swiper(".notice .promotion .swiper" ,{
  direction: "horizontal",
  slidesPerView: 3,
  spaceBetween : 10, 
  centeredSlides: true,
  loop: true,
  autoplay : {
    // 1000 = 1초 
    delay: 1000,
    disableOnInteraction: false,
  },
  pagination : {
    el: ".promotion .swiper-pagination",
    clickable : true,
  },
  navigation: {
    prevEl: ".promotion .swiper-button-prev",
    nextEl: ".promotion .swiper-button-next",
  },
}) 

function controlAutoPlay(){
  if(swiperPromotion.autoplay.running === false) {
    swiperPromotion.autoplay.start();
  } else {
    swiperPromotion.autoplay.stop();
  }
  console.log(swiperPromotion.autoplay);
}

//  toggle promotion
const promotionSection = document.querySelector(".promotion")
const promotionToggleBtn = document.querySelector(".notice .toggle-promotion");

promotionToggleBtn.addEventListener("click", function() {
  if(promotionSection.classList.contains("hide")){
    promotionSection.classList.remove("hide");
    promotionToggleBtn.classList.add("show");
  } else {
    promotionSection.classList.add("hide");
    promotionToggleBtn.classList.remove("show");
  }
})


//애니메이션 파트 
// 페이지 로드 
window.onload = (function() {
  const visualSection = document.querySelector(".visual");
  visualSection.classList.add("animate");
})


// 애니메이션 스크롤 파트 
// 엘살바도르 

window.addEventListener("scroll",function(){
  console.log(window.scrollY);
  if(window.scrollY>490) {
    const elsalvadorSection = document.querySelector(".elsalvador");
    elsalvadorSection.classList.add("animate");
  }

  if(window.scrollY>1990) {
    const favoriteSection = document.querySelector(".favorite");
    favoriteSection.classList.add("animate");
  }

  
  if(window.scrollY>2400) {
    const magazineSection = document.querySelector(".magazine");
    magazineSection.classList.add("animate");
  }

  if(window.scrollY>3300) {
    const storeSection = document.querySelector(".store");
    storeSection.classList.add("animate");
  }

})