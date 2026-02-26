const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {

    getProducts: () => ipcRenderer.invoke('get-products'),
    createProduct: (data) => ipcRenderer.invoke('create-product', data),
    updateStock: (data) => ipcRenderer.invoke('update-stock', data),

    getAllCategories: () => ipcRenderer.invoke('getAllCategories'),
});