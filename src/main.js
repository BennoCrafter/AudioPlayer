
// main.js
window.electronAPI.onNewFilePath((path) => {
    console.log("l", path);
    document.querySelector(".src-link-container").querySelector("#filePath").textContent = path;
  });
  