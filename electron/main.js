// Oxygen Sanctuary — aplicação de ambiente de trabalho (Electron)
// Abre o jogo (web/index.html) numa janela própria, sem barra de menus.
const { app, BrowserWindow, Menu, shell } = require('electron');
const path = require('path');

function createWindow () {
  const win = new BrowserWindow({
    width: 1440,
    height: 900,
    minWidth: 960,
    minHeight: 600,
    backgroundColor: '#120c08',
    title: 'Oxygen Sanctuary',
    autoHideMenuBar: true,
    webPreferences: { contextIsolation: true, sandbox: true }
  });
  Menu.setApplicationMenu(null);
  win.loadFile(path.join(__dirname, '..', 'web', 'index.html'));

  // Links externos abrem no navegador do sistema
  win.webContents.setWindowOpenHandler(({ url }) => { shell.openExternal(url); return { action: 'deny' }; });

  // F11 alterna o ecrã inteiro
  win.webContents.on('before-input-event', (event, input) => {
    if (input.type === 'keyDown' && input.key === 'F11') {
      win.setFullScreen(!win.isFullScreen());
      event.preventDefault();
    }
  });
}

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); });
});
app.on('window-all-closed', () => app.quit());
