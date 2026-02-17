"use strict";
const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const { getProducts, updateStock } = require("./db");
function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 720,
    autoHideMenuBar: true,
    show: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });
  win.maximize();
  win.show();
  if (process.env.VITE_DEV_SERVER_URL) {
    win.loadURL(process.env.VITE_DEV_SERVER_URL);
  } else {
    win.loadFile(path.join(__dirname, "../dist/index.html"));
  }
}
app.whenReady().then(() => {
  createWindow();
  ipcMain.handle("get-products", (event) => {
    try {
      return obtenerProductos();
    } catch (err) {
      console.error("Error DB:", err);
      return [];
    }
  });
  ipcMain.handle("update-stock", (event, name, newStock2) => {
    try {
      const cambios = actualizarStock(name, newStock2);
      return { success: true, changes: cambios };
    } catch (err) {
      console.error("Error DB:", err);
      return { success: false, error: err.message };
    }
  });
  ipcMain.handle("create-product", (event, code, name, price, stock, lote) => {
    try {
      const cambios = actualizarStock(name, newStock);
      return { success: true, changes: cambios };
    } catch (err) {
      console.error("Error DB:", err);
      return { success: false, error: err.message };
    }
  });
});
