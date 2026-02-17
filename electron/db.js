const Database = require('better-sqlite3');
const path = require('path');
const { app } = require('electron');

const dbPath = path.join(app.getPath('userData'), 'restaurante.db');
const db = new Database(dbPath, { verbose: console.log });

const migration = `
    CREATE TABLE IF NOT EXISTS products (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        code TEXT NOT NULL,
        name TEXT UNIQUE,
        price REAL,
        stock INTEGER,
        lote INTEGER NOT NULL
    );
`;
db.exec(migration);

const count = db.prepare('SELECT count(*) as count FROM products').get().count;
if (count === 0) {
    const insert = db.prepare('INSERT INTO products (code, name, price, stock, lote) VALUES (@code ,@name, @price, @stock, @lote)');

    const insertMany = db.transaction((products) => {
        for (const product of products) insert.run(product);
    });

    insertMany([
        { code: 'ELEC-001', name: 'Monitor Gamer 24" LED', price: 185000.50, stock: 15, lote: 202401 },
        { code: 'ELEC-002', name: 'Teclado Mecánico RGB', price: 45000.00, stock: 8, lote: 202401 },
        { code: 'OFFI-001', name: 'Silla Ergonómica Pro', price: 120000.00, stock: 5, lote: 202305 },
        { code: 'OFFI-002', name: 'Escritorio Elevable Madera', price: 310000.99, stock: 3, lote: 202305 },
        { code: 'CABL-001', name: 'Cable HDMI 2.1 - 2mts', price: 8500.00, stock: 50, lote: 202402 },
        { code: 'CABL-002', name: 'Adaptador USB-C a Jack', price: 4200.50, stock: 100, lote: 202402 },
        { code: 'STOR-001', name: 'Disco SSD 1TB NVMe', price: 95000.00, stock: 12, lote: 202401 },
        { code: 'STOR-002', name: 'Pendrive 64GB Metal', price: 7500.00, stock: 200, lote: 202403 },
        { code: 'PERI-001', name: 'Mouse Inalámbrico Silent', price: 12500.00, stock: 25, lote: 202401 },
        { code: 'PERI-002', name: 'Webcam Full HD 1080p', price: 35000.00, stock: 0, lote: 202401 }
    ]);
    console.log('Datos iniciales insertados con éxito.');
}


function getProducts() {
    return db.prepare('SELECT * FROM products').all();
}

function updateStock(name, newStock) {
    const info = db.prepare('UPDATE products SET stock = ? WHERE name = ?').run(newStock, name);
    return info.changes;
}

function createProduct(product) {
    const sql = db.prepare('INSERT INTO products (code, name, price, stock, lote) VALUES (@code ,@name, @price, @stock, @lote)');

    const info = sql.run({
        code: product.code,
        name: product.name,
        price: product.price,
        stock: product.stock,
        lote: product.lote,
    });

    return info.changes;
}

module.exports = { getProducts, updateStock, createProduct };