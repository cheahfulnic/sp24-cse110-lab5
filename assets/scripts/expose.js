// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  let dropdown = document.getElementById("horn-select");
  let imageHorn = document.querySelector('img[src="assets/images/no-image.png"]');
  let audio = document.getElementsByClassName("hidden");

  dropdown.addEventListener('change', function() {
    let selected = dropdown.options[dropdown.selectedIndex].value;
    imageHorn.src = `./assets/images/${selected}.svg`;
    audio.src = `./assets/audio/${selected}.mp3`;
  });

  let imageSound = document.querySelector('img[src="assets/icons/volume-level-2.svg"]');
  let volume = document.getElementById("volume");

  volume.addEventListener('input', function() {
    audio.volume = volume.value/100;
    if (volume.value == 0) {
      imageSound.src = `./assets/icons/volume-level-0.svg`;
    } else if (volume.value < 33) {
      imageSound.src = `./assets/icons/volume-level-1.svg`;
    } else if (volume.value < 67) {
      imageSound.src = `./assets/icons/volume-level-2.svg`;
    } else {
      imageSound.src = `./assets/icons/volume-level-3.svg`;
    }
  });

  let playSound = document.querySelector("button");
  const jsConfetti = new JSConfetti();

  playSound.addEventListener('click', function() {
    audio.play();
    if (selected == "party-horn") {
      jsConfetti.addConfetti();
    }
  })
}