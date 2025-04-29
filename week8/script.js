const myVideo = document.querySelector("#my-video");
console.log(myVideo);

//play pause logic
//fetch the right button to play and pause video
const playPauseButton = document.querySelector("#play-pause-button");
console.log(playPauseButton);

playPauseButton.addEventListener("click", togglePlayback);

const playPauseImg = document.querySelector("#play-pause-img");
console.log(playPauseImg);

function togglePlayback() {
  if (myVideo.paused || myVideo.ended) {
    myVideo.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v2.png";
  } else {
    myVideo.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v2.png";
  }
}

//----------------------------------------------------
// mylideo, muted => myVideo,muted == true
// myVideo, muted => myVideo muted == false
// = assigning values name-"rohit" id =4
// // == comparison of values and type a = 4 a === 4 true a ===6 false

//mute unmte logic
//fetch the right button to mute and unmute video
const muteUnmuteButton = document.querySelector("#mute-unmute-button");
console.log(muteUnmuteButton);

//listen to click on this button
muteUnmuteButton.addEventListener("click", toggleAudio);

//fetch the image so that we can change the icon
const muteUnmuteImg = document.querySelector("#mute-unmute-img");
console.log(muteUnmuteImg);

//run this function when click happens
function toggleAudio() {
  if ((myVideo, muted)) {
    myVideo.muted = false;
    muteUnmuteImg.src =
      "https://img.icons8.com/ios-glyphs/30/high-volume--v2.png";
  } else {
    myVideo.muted = true;
    muteUnmuteImg.src = "https://img.icons8.com/ios-glyphs/30/no-audio--v1.png";
  }
}

//--------------------------------------------------------

//fetch the image so that we can change the icon
const fastForwardButton = document.querySelector("#fast-forward-img");
console.log(fastForwardButton);

//listen to click on this button
fastForwardButton.addEventListener("click", fastForward);

//run this funtion when click happens
function fastForward() {
  if (myVideo.playbackRate === 1.0) {
    myVideo.playbackRate = 2.0;
  } else {
    myVideo.playbackRate = 1.0;
  }
}
//--------------------------------------------------

//stepping logic
//fetch the right button to step video
const step1Button = document.querySelector("#step1-button");
console.log(step1Button);

//listen to click on this button
step1Button.addEventListener("click", gotoStep1);

//run this funtion when click happens
function gotoStep1() {
  myVideo.currentTime = 17.0;
}

const step2Button = document.querySelector("#step2-button");
console.log(step2Button);

//listen to click on this button
step2Button.addEventListener("click", gotoStep2);

//run this funtion when click happens
function gotoStep2() {
  myVideo.currentTime = 43.56;
}

//----------------------------------------------------------

const fullscreenButton = document.querySelector("#fullscreen-button");
console.log(stepButton);

myVideo.addEventListener("dbclick", togglePlay);

//listen to click on this button
fullscreenButton.addEventListener("click", goFullscreen);

//run this funtion when click happens
function gotoFullscreen() {
  if (!document.fullscreenElement) {
    myVideo.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}

//likeslogic
// fetch the right button to step video

const likesContainer = document.querySelector("#heart-button");
console.log(heartButton);

let likes = 0;

const likesContainer = document.querySelector("#likes");
console.log(likesContainer);
//listen to click on this button
heartButton.addEventListener("click", updatelikes);

//run this function when click happens
function updatelikes() {
  likes++;
  likesContainer.textContent = likes;
}

//--------------------------------------------
const progressBar = document.querySelector("#progress-bar");
console.log(progressBar);

myVideo.addEventListener("timeupdate", updateProgress);
function updateProgress() {
  let progress = (myVideo.currentTime / myVideo.duration) * 100;
  // console.log(progress);
  progressBar.style.width = progress + "%";
}
