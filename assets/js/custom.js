var swiper = new Swiper(".mySwiper", {
  // autoplay: {
  //   delay: 5000,
  // },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
    dynamicBullets: true,
  },
});

// backToTop
const backToTopButton = document.querySelector(".backToTop");

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Image Blur
const blurredImageDiv = document.querySelectorAll(".blurred-img");

blurredImageDiv.forEach((div) => {
  const img = div.querySelector("img");
  function loaded() {
    div.classList.add("loaded");
  }

  if (img.complete) {
    loaded();
  } else {
    img.addEventListener("load", loaded);
  }
});
