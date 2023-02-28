const swiperTree = new Swiper(".swiper",{
  direction:"horizontal",
  slidesPerView:3,
  spaceBetween:3,
  centeredSlides:true,
  loop:true,
  autoplay:{
    delay: 1000,
    disableOnInteraction:false,
  },
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
