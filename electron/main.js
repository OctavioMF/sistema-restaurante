// electron/main.js
const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const { obtenerProductos, actualizarStock } = require('./db');

function createWindow() {
    const win = new BrowserWindow({
        width: 1280,
        height: 720,
        autoHideMenuBar: true,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
    });

    // Si estamos en desarrollo, carga la URL de Vite
    if (process.env.VITE_DEV_SERVER_URL) {
        win.loadURL(process.env.VITE_DEV_SERVER_URL);
    } else {
        // Si es producción, carga el archivo index.html compilado
        win.loadFile(path.join(__dirname, '../dist/index.html'));
    }
}

app.whenReady().then(()=>{
    createWindow()

    ipcMain.handle('get-products', (event) => {
        try {
            return obtenerProductos();
        } catch (err) {
            console.error("Error DB:", err);
            return [];
        }
    });

    ipcMain.handle('update-stock', (event, name, newStock) => {
        try {
            const cambios = actualizarStock(name, newStock);
            return { success: true, changes: cambios };
        } catch (err) {
            console.error("Error DB:", err);
            return { success: false, error: err.message };
        }
    });
});