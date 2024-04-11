/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */

const { ipcRenderer } = require('electron');  
  
// 发送消息到主进程  
ipcRenderer.send('message-from-renderer', 'Hello from renderer');  
  
// 监听主进程的回复  
ipcRenderer.on('message-from-main', (event, arg) => {  
  console.log('Received reply from main process: ', arg);  
});