const video = document.querySelector('#videoPrincipal');
// const video = document.querySelector('video');

if(video instanceof HTMLVideoElement){
  console.log(video.volume);
}