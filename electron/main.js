const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const initDB = require("./backend/database/init");
const {getProducts, createProduct, updateStock} = require("./backend/controllers/productController");
const {getAllCategories} = require("./backend/controllers/categoryController");

function createWindow() {
    const win = new BrowserWindow({
        width: 1280,
        height: 720,
        autoHideMenuBar: true,
        show: false,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: false,
            contextIsolation: true,
        },
    });

    win.maximize();
    win.show()



    if (process.env.VITE_DEV_SERVER_URL) {
        win.loadURL(process.env.VITE_DEV_SERVER_URL);
    } else {
        win.loadFile(path.join(__dirname, '../dist/index.html'));
    }

}

app.whenReady().then(()=>{
    initDB().then(r => {
        ipcMain.handle('get-products', getProducts)
        ipcMain.handle('create-product', createProduct);
        ipcMain.handle('update-stock', updateStock);
        ipcMain.handle('getAllCategories', getAllCategories);

        createWindow()
    })

});