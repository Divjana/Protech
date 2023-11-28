/* video */

function toggleVideo(videoId) {
  var clickedVideo = document.getElementById(videoId);


  var allVideos = document.querySelectorAll('video');
  allVideos.forEach(function(video) {
    if (video !== clickedVideo) {
      video.pause();
    }
  });

  
  if (clickedVideo.paused) {
    clickedVideo.play();
  } else {
    clickedVideo.pause();
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

