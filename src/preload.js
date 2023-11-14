const { contextBridge, ipcRenderer} = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  onNewFilePath: (cb) => {
    ipcRenderer.on('sendFilePath', (event, path) => cb(path));
  },
});
