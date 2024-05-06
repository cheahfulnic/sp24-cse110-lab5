// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const synth = window.speechSynthesis;
  let dropdown = document.getElementById("voice-select");

  function loadVoices() {
    let voices = synth.getVoices();
    for (let i = 0; i < voices.length; i++) {
      let voice = voices[i];
      let option = document.createElement("option");
      option.value = i;
      option.textContent = voice.name;
      dropdown.appendChild(option);
    }
  }

  loadVoices();
  if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = loadVoices;
  }

  let text = document.getElementById("text-to-speak");
  let speak = document.querySelector("button");
  let face = document.querySelector('img[src="assets/images/smiling.png"]');

  speak.addEventListener('click', function() {
    let utterance = new SpeechSynthesisUtterance(text.value);
    utterance.voice = voices[dropdown.selectedIndex];
    synth.speak(utterance);
    while (synth.speaking()) {
      face.src = "./assets/images/smiling-open.png";
    }
    face.src = "./assets/images/smiling.png"
  });
}