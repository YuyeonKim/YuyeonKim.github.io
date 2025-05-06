const waterAudio = document.querySelector("#water-audio");
console.log(waterAudio);

// --------------------------------------------------------------
// My logic for playing sound
// first I need to fetch the right button for play

const playButton = document.querySelector("#play-button");
console.log(playButton);

// then I will listen to the click events on that button
playButton.addEventListener("click", playAudio);

// whenever click happens, i will play the audio
function playAudio() {
  waterAudio.play();
}
// --------------------------------------------------------------

// --------------------------------------------------------------
// My logic for pausing sound
// first I need to fetch the right button for pause

const pauseButton = document.querySelector("#pause-button");
console.log(pauseButton);

// then I will listen to the click events on that button
pauseButton.addEventListener("click", pauseAudio);

// whenever click happens, i will play the audio
function pauseAudio() {
  waterAudio.pause();
}
// --------------------------------------------------------------

// fast forward logic
//  1. fetch the right button to mute or unmute the video
const fastForwardButton = document.querySelector("#fast-forward-button");
console.log(fastForwardButton);

// 2. listen to the click event on that button
fastForwardButton.addEventListener("click", fastForward);

function fastForward() {
  if (waterAudio.playbackRate === 1.0) {
    waterAudio.playbackRate = 2.0;
  } else {
    waterAudio.playbackRate = 1.0;
  }
}

//move to parts of the music
const step1Button = document.querySelector("#step1-button");
const step2Button = document.querySelector("#step2-button");
const step3Button = document.querySelector("#step3-button");

// Step 1 button (jump to 18 seconds)
step1Button.addEventListener("click", () => {
  waterAudio.currentTime = 18.0;
  waterAudio.play();
});

// Step 2 button (jump to 36 seconds)
step2Button.addEventListener("click", () => {
  waterAudio.currentTime = 36.0;
  waterAudio.play();
});
// Step 3 button (jump to 50 seconds)
step3Button.addEventListener("click", () => {
  waterAudio.currentTime = 50.0;
  waterAudio.play();
});

//repeat logic
// const audio = document.querySelector("#my-audio");
// const repeatButton = document.querySelector("#repeat-button");

//   let isLooping = false;

//   repeatButton.addEventListener("click", () => {
//     isLooping = !isLooping;
//     audio.loop = isLooping;

//     if (isLooping) {
//         repeatImg.src = "https://img.icons8.com/?size=100&id=412&format=png&color=000000";
//       } else {
//         repeatImg.src = "https://img.icons8.com/ios-filled/24/000000/repeat.png"; // default
//       }
//     });

// const relaxAudio = document.querySelector("#relax-audio");
// console.log(relaxAudio);

// // --------------------------------------------------------------
// // My logic for playing sound
// // first I need to fetch the right button for play

// const playButton1 = document.querySelector("#play-button1");
// console.log(playButton1);

// // then I will listen to the click events on that button
// playButton1.addEventListener("click", playAudio);

// // whenever click happens, i will play the audio
// function playAudio() {
//   relaxAudio.play();
// }
// // --------------------------------------------------------------

// // --------------------------------------------------------------
// // My logic for pausing sound
// // first I need to fetch the right button for pause

// const pauseButton1 = document.querySelector("#pause-button1");
// console.log(pauseButton1);

// // then I will listen to the click events on that button
// pauseButton1.addEventListener("click", pauseAudio);

// // whenever click happens, i will play the audio
// function pauseAudio() {
//   relaxAudio.pause();
// }
// // --------------------------------------------------------------

// ----------------------------------------------------------------------
// const playlist = [
//     {
//       id: 1,
//       name: "water-audio",
//       src: "https://thelongesthumstore.sgp1.cdn.digitaloceanspaces.com/IM-2250/p-hase_Water-Feature.mp3",
//     },
//     {
//       id: 2,
//       name: "relax-audio",
//       src: "https://thelongesthumstore.sgp1.cdn.digitaloceanspaces.com/IM-2250/erokia_ambient-wave-56-msfxp7-78.mp3",
//     },
//   ];

//   // playlist logic
//   const waterAudioButton = document.querySelector("#water-audio-button");
//   console.log(waterAudioButton);
//   waterAudioButton.addEventListener("click", function chooseMusic1() {
//     //   chooseAudio(0);
//     chooseSrc("https://thelongesthumstore.sgp1.cdn.digitaloceanspaces.com/IM-2250/p-hase_Water-Feature.mp3");
//   });

//   const relaxAudioButton = document.querySelector("#relax-audio-button");
//   console.log(relaxAudioButton);
//   relaxAudioButton.addEventListener("click", function chooseMusic2() {
//     //   chooseAudio(1);
//     chooseSrc("https://thelongesthumstore.sgp1.cdn.digitaloceanspaces.com/IM-2250/erokia_ambient-wave-56-msfxp7-78.mp3");
//   });

//   function chooseAudio(no) {
//     myAudio.src = playlist[no].src;
//     console.log(myAudio.src);
//     myAudio.load();
//     myAudio.play();
//   }

//   function chooseSrc(src) {
//     myAudio.src = src;
//     console.log(myAudio.src);
//     myAudio.load();
//     myAudio.play();
//   }
