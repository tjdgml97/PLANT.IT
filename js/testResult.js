const swiperTree = new Swiper(".tree_all .swiper", {
  direction: "horizontal",
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 1500,
    // disableOnInteraction: false,
  },
  pagination: {
    el: ".promotion .swiper-pagination",
    type: "bullets",
  },
});

function controlAutoPlay() {
  if (swiperTree.autoplay.running === false) {
    swiperTree.autoplay.start();
  } else {
    swiperTree.autoplay.stop();
  }
  console.log(swiperTree.autoplay);
}
