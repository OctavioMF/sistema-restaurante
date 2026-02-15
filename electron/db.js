const Database = require('better-sqlite3');
const path = require('path');
const { app } = require('electron');

// 1. Conexión (si no existe el archivo, lo crea automáticamente)
const dbPath = path.join(app.getPath('userData'), 'restaurante.db');
const db = new Database(dbPath, { verbose: console.log }); // verbose para ver las queries en consola

// 2. Crear tablas (usamos .exec para scripts SQL directos)
const migration = `
    CREATE TABLE IF NOT EXISTS products (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT UNIQUE,
        price REAL,
        stock INTEGER
    );
`;
db.exec(migration);

// 3. Insertar datos iniciales si está vacío
const count = db.prepare('SELECT count(*) as count FROM products').get().count;
if (count === 0) {
    const insert = db.prepare('INSERT INTO products (name, price, stock) VALUES (@name, @price, @stock)');

    // better-sqlite3 permite transacciones súper fáciles
    const insertMany = db.transaction((products) => {
        for (const product of products) insert.run(product);
    });

    insertMany([
        { name: 'CocaCola', price: 500, stock: 100 },
        { name: 'Leche', price: 200, stock: 50 },
        { name: 'Queso cremoso', price: 278, stock: 20 },
    ]);
    console.log('Datos iniciales insertados con éxito.');
}

// --- FUNCIONES EXPORTADAS (Síncronas) ---

function obtenerProductos() {
    // .all() retorna un array de objetos directamente
    return db.prepare('SELECT * FROM products').all();
}

function actualizarStock(name, nuevoStock) {
    // .run() ejecuta la acción y retorna info sobre cambios (changes)
    const info = db.prepare('UPDATE products SET stock = ? WHERE name = ?').run(nuevoStock, name);
    return info.changes;
}

module.exports = { obtenerProductos, actualizarStock };