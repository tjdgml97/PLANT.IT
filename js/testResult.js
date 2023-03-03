const swiperTree = new Swiper(".swiper",{
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
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
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
