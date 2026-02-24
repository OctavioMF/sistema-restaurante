const db = require('../database/connection');

const getProducts = () => {
    try {
        const stmt = db.prepare('SELECT * FROM products WHERE countable = 1');
        return stmt.all();
    } catch (error) {
        console.error(error);
        throw error;
    }
};

const createProduct = (event, product) => {
    const stmt = db.prepare(`
    INSERT INTO products (name, price, barcode, category_id, countable, stock)
    VALUES (@nombre, @precio, @codigo_barras, @categoria_id, @contable, @stock)
  `);
    return stmt.run(product);
};

const updateStock = (product, newStock) => {
    const info = db.prepare('UPDATE products SET stock = ? WHERE name = ?').run(newStock, name);
    return info.changes;
}

module.exports = { getProducts, createProduct, updateStock };