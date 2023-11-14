const { app, BrowserWindow } = require('electron');
const path = require('path');
let filePath;
var mainWindow;

app.on('will-finish-launching', () => {
    app.on('open-file', (event, path) => {
        filePath = path;
    });
});
app.on('ready', function() {
    
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
          preload: path.join(__dirname, "preload.js"),
        },
        zoomFactor: 1.0,
      });
      mainWindow.maximize();
    
      // and load the index.html of the app.
      mainWindow.loadFile(path.join(__dirname, "/index.html"));
      mainWindow.webContents.send("sendFilePath", filePath);
});


app.on('window-all-closed', function() {
    app.quit();
});