let flexSlideIndex = 0;
showFlexSlides(flexSlideIndex);

function plusFlexSlides(n) {
  showFlexSlides((flexSlideIndex += n));
}

function currentFlexSlide(n) {
  showFlexSlides((flexSlideIndex = n));
}

function showFlexSlides(n) {
  const slides = document.getElementsByClassName("product-slide-flexbox");
  const details = document.querySelector(".details-text-flexbox");

  details.style.display = "none";

  if (n >= slides.length) {
    flexSlideIndex = 0;
  }
  if (n < 0) {
    flexSlideIndex = slides.length - 1;
  }

  if (flexSlideIndex === 0) {
    details.style.display = "block";
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[flexboxSlideIndex].style.display = "block";
}
