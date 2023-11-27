let harmonySlideIndex = 0;
showHarmonySlides(harmonySlideIndex);

function plusHarmonySlides(n) {
  showHarmonySlides((harmonySlideIndex += n));
}

function currentHarmonySlide(n) {
  showHarmonySlides((harmonySlideIndex = n));
}

function showHarmonySlides(n) {
  const slides = document.getElementsByClassName("product-slide-harmony");
  const details = document.querySelector(".details-text-harmony");

  details.style.display = "none";

  if (n >= slides.length) {
    harmonySlideIndex = 0;
  }
  if (n < 0) {
    harmonySlideIndex = slides.length - 1;
  }

  if (harmonySlideIndex === 0) {
    details.style.display = "block";
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[harmonySlideIndex].style.display = "block";
}
