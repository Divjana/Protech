/* Image cycle */

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


/* Button click */
const mySubmitButton1 = document.querySelector('#myButton1');
const emailInput1 = document.querySelector('#email1');

mySubmitButton1.addEventListener('click', function(event) {
  event.preventDefault();

  mySubmitButton1.textContent = 'Tack! Vi hör av oss!';
  mySubmitButton1.style.backgroundColor = 'rgb(19, 201, 83)';
  mySubmitButton1.style.color = 'black'; 
  emailInput1.value = '';
});

const mySubmitButton2 = document.querySelector('#myButton2');
const emailInput2 = document.querySelector('#email2');

mySubmitButton2.addEventListener('click', function(event) {
  event.preventDefault();

  mySubmitButton2.textContent = 'Tack! Vi hör av oss!';
  mySubmitButton2.style.backgroundColor = 'rgb(19, 201, 83)';
  mySubmitButton2.style.color = 'black'; 
  emailInput2.value = '';
});

