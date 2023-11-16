var currentImageIndex = 0;
var imagePaths = ["./images/fold.png", "./images/unfold.png"];

var hasHovered = false;

function startImageCycle() {
  if (!hasHovered) {
    hasHovered = true;
    changePicture();
  }
}

function changePicture() {
  var image = document.getElementById("myImage");

  currentImageIndex = (currentImageIndex + 1) % imagePaths.length;

  image.src = imagePaths[currentImageIndex];

  if (currentImageIndex < imagePaths.length - 1) {
    setTimeout(changePicture, 2000);
  } else {
    hasHovered = false;
  }
}
