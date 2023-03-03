const swiperTree = new Swiper(".tree_all .swiper",{
  direction:"horizontal",
  slidesPerView:3,
  spaceBetween:20,
  centeredSlides:true,
  loop:true,
  speed: 5000,
  freeMode :true,
  // freeModeMomentum : false,
  // autoplay:{
  //   delay:1,
  //   disableOnInteraction:false,
  // },
  navigation: {
    prevEl: ".tree_all .swiper-button-prev",
    nextEl: ".tree_all .swiper-button-next",
  }
}
)


function controlAutoPlay(){
  if(swiperTree.autoplay.running === false) {
    swiperTree.autoplay.start();
  } else {
    swiperTree.autoplay.stop();
  }
  console.log(swiperTree.autoplay);
}

window.onload = function () {
  document.querySelector(".name").classList.add("spaced");

  const steps = document.querySelectorAll(".advice");
  var count = 0;
  setInterval(() => {
    steps[count].style.display = "block";
    steps[count].style.opacity = "1.0";
  }, 3000);
};