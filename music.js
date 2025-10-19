// music.js — Background music controls for home page only

document.addEventListener("DOMContentLoaded", () => {
  // Create and configure the audio
  const music = new Audio("audio/Lemonade (Instrumental).mp3");
  music.loop = true;
  music.volume = 0.3; // initial volume level (30%)

  // Create control container
  const controls = document.createElement("div");
  controls.id = "music-controls";
  controls.style.position = "fixed";
  controls.style.bottom = "20px";
  controls.style.right = "20px";
  controls.style.background = "#111";
  controls.style.padding = "10px 15px";
  controls.style.borderRadius = "10px";
  controls.style.boxShadow = "0 0 10px rgba(0,0,0,0.5)";
  controls.style.zIndex = "1000";
  controls.style.display = "flex";
  controls.style.gap = "10px";
  controls.style.alignItems = "center";

  // Create Play/Pause button
  const playBtn = document.createElement("button");
  playBtn.textContent = "Play";
  playBtn.style.background = "#fe0000ff";
  playBtn.style.color = "#000";
  playBtn.style.border = "none";
  playBtn.style.padding = "6px 10px";
  playBtn.style.borderRadius = "6px";
  playBtn.style.cursor = "pointer";
  playBtn.style.fontWeight = "bold";

  // Create Volume Down button
  const volDownBtn = document.createElement("button");
  volDownBtn.textContent = "−";
  volDownBtn.title = "Volume Down";
  volDownBtn.style.background = "#ff0000ff";
  volDownBtn.style.color = "#000";
  volDownBtn.style.border = "none";
  volDownBtn.style.padding = "6px 10px";
  volDownBtn.style.borderRadius = "6px";
  volDownBtn.style.cursor = "pointer";
  volDownBtn.style.fontWeight = "bold";

  // Create Volume Up button
  const volUpBtn = document.createElement("button");
  volUpBtn.textContent = "+";
  volUpBtn.title = "Volume Up";
  volUpBtn.style.background = "#f40606ff";
  volUpBtn.style.color = "#000";
  volUpBtn.style.border = "none";
  volUpBtn.style.padding = "6px 10px";
  volUpBtn.style.borderRadius = "6px";
  volUpBtn.style.cursor = "pointer";
  volUpBtn.style.fontWeight = "bold";

  // Create Volume Display Label
  const volumeLabel = document.createElement("span");
  volumeLabel.textContent = `Vol: ${Math.round(music.volume * 100)}%`;
  volumeLabel.style.color = "#fff";
  volumeLabel.style.fontSize = "0.9rem";

  // Add all controls to the container
  controls.appendChild(playBtn);
  controls.appendChild(volDownBtn);
  controls.appendChild(volUpBtn);
  controls.appendChild(volumeLabel);
  document.body.appendChild(controls);

  // === EVENT LISTENERS ===
  playBtn.addEventListener("click", () => {
    if (music.paused) {
      music.play();
      playBtn.textContent = "Pause";
    } else {
      music.pause();
      playBtn.textContent = "Play";
    }
  });

  volUpBtn.addEventListener("click", () => {
    if (music.volume < 1) {
      music.volume = Math.min(1, music.volume + 0.1);
      volumeLabel.textContent = `Vol: ${Math.round(music.volume * 100)}%`;
    }
  });

  volDownBtn.addEventListener("click", () => {
    if (music.volume > 0) {
      music.volume = Math.max(0, music.volume - 0.1);
      volumeLabel.textContent = `Vol: ${Math.round(music.volume * 100)}%`;
    }
  });
});

