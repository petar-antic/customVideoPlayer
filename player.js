const player = document.querySelector('.player');
const video = document.querySelector('.video');

const progressBar = document.querySelector('.progressBar');
const progress = document.querySelector('.progress');

const speaker = document.querySelector('.speaker');
const volumeBar = document.querySelector('.volumeBar');
const volume = document.querySelector('.volume');

const play = document.querySelector('.play');

const playbackSpeed = document.querySelector('.speeds');
const fullScreen = document.querySelector('.fullScreen');

function updateProgress(e) {
  const percent = (video.currentTime / video.duration) * 100;
  progress.style.width = `${percent}%`;
}

function setProgress(e) {
  const progressTime = (e.offsetX / progressBar.offsetWidth) * video.duration;
  video.currentTime = progressTime;
}

function setVolume(e) {
  video.volume = e.target.value;
  console.log(e.target);
}

function openFullScreen() {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    player.requestFullscreen();
  }
}
function muteVideo() {
  if (video.muted === false) {
    speaker.classList.toggle('mute');
    video.muted = true;
  } else {
    speaker.classList.toggle('mute');
    video.muted = false;
  }
}

function pauseVideo() {
  if (video.paused) {
    play.classList.toggle('pause');
    video.play();
  } else {
    play.classList.toggle('pause');
    video.pause();
  }
}

function changePlaybackSpeed() {
  switch (playbackSpeed.value) {
    case 'superSlow':
      console.log('superSlow');
      break;
    case 'slow':
      video.playbackRate = 0.75;
      break;
    case 'normal':
      video.playbackRate = 1;
      break;
    case 'fast':
      video.playbackRate = 1.5;
      break;
    case 'superFast':
      video.playbackRate = 2;
      break;
  }
}

video.addEventListener('timeupdate', updateProgress);
progressBar.addEventListener('click', setProgress);
volume.addEventListener('mousemove', setVolume);
volume.addEventListener('touchmove', setVolume);
play.addEventListener('click', pauseVideo);
speaker.addEventListener('click', muteVideo);
fullScreen.addEventListener('click', openFullScreen);
playbackSpeed.addEventListener('change', changePlaybackSpeed);
