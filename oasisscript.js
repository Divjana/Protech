let oasisSlideIndex = 0;
showOasisSlides(oasisSlideIndex);

function plusOasisSlides(n) {
  showOasisSlides((oasisSlideIndex += n));
}

function currentOasisSlide(n) {
  showOasisSlides((oasisSlideIndex = n));
}

function showOasisSlides(n) {
  const slides = document.getElementsByClassName("product-slide-oasis");
  const details = document.querySelector(".details-text-oasis");

  details.style.display = "none";

  if (n >= slides.length) {
    oasisSlideIndex = 0;
  }
  if (n < 0) {
    oasisSlideIndex = slides.length - 1;
  }

  if (oasisSlideIndex === 0) {
    details.style.display = "block";
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[oasisSlideIndex].style.display = "block";
}
