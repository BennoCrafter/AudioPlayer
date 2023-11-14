
// main.js
window.electronAPI.onNewFilePath((path) => {
    document.querySelector(".src-link-container").querySelector("#filePath").textContent = path;
    
    let audio;
    let isPlaying = false;
    let progressInterval;

    document.getElementById('playButton').addEventListener('click', togglePlay);
    
    // setup audio
    audio = new Audio(path);
    progressInterval = setInterval(updateProgressBar, 50);

    function togglePlay() {
      isPlaying = !isPlaying;
  
      if (isPlaying) {
          // If it's playing, pause it
          audio.play();
      } else {
          // If it's paused, play it
          audio.pause();
      }
  
      // Update button text and state
      document.getElementById('playButton').textContent = isPlaying ? ' ⏸ Pause Sound' : '▶️ Play Sound';
  }

    function updateProgressBar() {
      const progressBar = document.getElementById('progress');
  
      if (!audio.paused) {
          const duration = audio.duration;
          const currentTime = audio.currentTime;
          const progress = (currentTime / duration) * 100;
          progressBar.style.width = `${progress}%`;
      }
  }
  });
  