var video = document.getElementById("video"),
  btnPlay = document.getElementById("btnPlay"),
  icono = document.getElementById("icono"),
  tiempo = document.getElementById("tiempo"),
  volumen = document.getElementById("volumen");

tiempo.setAttribute("max", video.duration);
var intervalo;

btnPlay.addEventListener("click", function () {
  if (icono.className == "fa fa-play") {
    video.play();
    intervalo = setInterval(barraTiempo, 1000);
  } else {
    clearInterval(intervalo);
    video.pause();
  }
  icono.classList.toggle("fa-play");
  icono.classList.toggle("fa-pause");
});

tiempo.addEventListener("change", function () {
  video.currentTime = this.value;
});

function barraTiempo() {
  tiempo.value = video.currentTime;
  if (video.ended) {
    icono.className = "fa fa-play";
  }
}

volumen.addEventListener("change", function () {
  video.volume = this.value;
});
