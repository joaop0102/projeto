const musicBox = document.getElementById("musicBox");
const bgMusic = document.getElementById("bgMusic");

if (musicBox && bgMusic) {
  let tocando = false;

  musicBox.addEventListener("click", () => {
    if (!tocando) {
      bgMusic.play();
      musicBox.innerHTML = "⏸️ Pausar música";
      tocando = true;
    } else {
      bgMusic.pause();
      musicBox.innerHTML = "▶️ Tocar música";
      tocando = false;
    }
  });
}
