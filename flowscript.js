function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

if (isMobile()) {

let flowSlideIndex = 0;
showFlowSlides(flowSlideIndex);

function plusFlowSlides(n) {
  showFlowSlides((flowSlideIndex += n));
}

function currentFlowSlide(n) {
  showflowSlides((flowSlideIndex = n));
}

function showFlowSlides(n) {
  const slides = document.getElementsByClassName("product-slide-flow");
  const details = document.querySelector(".details-text-flow");

  details.style.display = "none";

  if (n >= slides.length) {
    flowSlideIndex = 0;
  }
  if (n < 0) {
    flowSlideIndex = slides.length - 1;
  }

  if (flowSlideIndex === 0) {
    details.style.display = "block";
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[flowSlideIndex].style.display = "block";
}
}