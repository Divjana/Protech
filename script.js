/* video */

function toggleVideo(videoId) {
  const hoveredVideo = document.getElementById(videoId);

  hoveredVideo.addEventListener('mouseover', function() {
    this.play(); // Start playing the video on hover
  });

  hoveredVideo.addEventListener('mouseleave', function() {
    this.pause(); // Pause the video when mouse leaves
    this.currentTime = 0; // Reset the video to the beginning
  });
}

window.addEventListener('DOMContentLoaded', (event) => {
  setTimeout(function() {
    document.body.focus(); // Focus on the body element after a short delay
  }, 100); // Adjust the delay time as needed
});


/* Button click */
const mySubmitButton1 = document.querySelector("#myButton1");
const emailInput1 = document.querySelector("#email1");

mySubmitButton1.addEventListener("click", function (event) {
  event.preventDefault();

  mySubmitButton1.textContent = "Tack! Vi hör av oss!";
  mySubmitButton1.style.backgroundColor = "rgb(19, 201, 83)";
  mySubmitButton1.style.color = "black";
  emailInput1.value = "";
});

const mySubmitButton2 = document.querySelector("#myButton2");
const emailInput2 = document.querySelector("#email2");

mySubmitButton2.addEventListener("click", function (event) {
  event.preventDefault();

  mySubmitButton2.textContent = "Tack! Vi hör av oss!";
  mySubmitButton2.style.backgroundColor = "rgb(19, 201, 83)";
  mySubmitButton2.style.color = "black";
  emailInput2.value = "";
});

/* zoomed images */

function setupZoomEffect(zoomPicture, zoomedImage) {
  zoomPicture.style.width = '361px';
  zoomPicture.style.height = '269px';
  zoomPicture.style.borderRadius = '9px';
  zoomPicture.style.border = '5px solid var(--light-brown)';
  zoomPicture.style.overflow = 'hidden';
  zoomedImage.style.width = '100%';
  zoomedImage.style.height = '100%';
  zoomedImage.style.display = 'block';
  zoomedImage.style.transition = 'transform 0.3s ease';

  zoomPicture.addEventListener('mousemove', (e) => {
    const rect = zoomedImage.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width * 100;
    const y = (e.clientY - rect.top) / rect.height * 100;
    zoomedImage.style.transformOrigin = `${x}% ${y}%`;
    zoomedImage.style.transform = 'scale(2)';
  });

  zoomPicture.addEventListener('mouseleave', () => {
    zoomedImage.style.transform = 'scale(1)';
  });
}

const zoomPictures = document.querySelectorAll('.zoom-picture');
zoomPictures.forEach((zoomPicture) => {
  const zoomedImage = zoomPicture.querySelector('.product-image');
  setupZoomEffect(zoomPicture, zoomedImage);
});
