
const music = document.getElementById("music");
const button = document.getElementById("playButton");

button.addEventListener("click", async () => {
  try {
    await music.play();
    button.textContent = "Enjoy the surprise ❤️";
  } catch (error) {
    button.textContent = "Tap to try again 🎵";
  }
});

// Attempt autoplay when the page loads
window.addEventListener("load", async () => {
  try {
    await music.play();
    button.textContent = "Enjoy the surprise ❤️";
  } catch {
    // Browser blocked autoplay; the button remains available.
  }
});
