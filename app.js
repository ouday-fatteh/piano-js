let whiteKeys = document.querySelectorAll(".keynote-white");

let whiteKeysAudio = [];

let keyBindings = ["Q", "S", "D", "F", "G", "H", "J", "K", "L", "M"];

//load the audio
function loadKeysAudio() {
  for (let i = 0; i < 10; i++) {
    whiteKeysAudio[i] = `white-${i}.mp3`;
  }
}
loadKeysAudio();

// handle mouse/keyboard click or press events
let dir = "assets/keynotes/";

for (let i = 0; i < whiteKeys.length; i++) {
  //mouse events

  whiteKeys[i].addEventListener("mousedown", (e) => {
    e.target.classList.add("clicked");
    let keySound = new Audio(dir + whiteKeysAudio[i]);
    keySound.play();
  });
  whiteKeys[i].addEventListener("mouseup", (e) => {
    e.target.classList.remove("clicked");
  });

  //Keyboard events

  document.addEventListener("keydown", (e) => {
    if (e.key === keyBindings[i] || e.key === keyBindings[i].toLowerCase()) {
      if (e.repeat) return;
      whiteKeys[i].classList.add("clicked");
      let keySound = new Audio(dir + whiteKeysAudio[i]);
      keySound.play();
    }
  });
  document.addEventListener("keyup", (e) => {
    whiteKeys[i].classList.remove("clicked");
  });
}
