
const music = document.getElementById("music");

// Attempt to play music when the page loads
window.addEventListener("load", async () => {
  try {
    await music.play();
  } catch (error) {
    console.log("Autoplay was blocked by the browser.");
  }
});
