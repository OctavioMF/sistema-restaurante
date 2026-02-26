const db = require('../database/connection');

const getProducts = () => {
    try {
        const sql = `SELECT p.id AS id,
                                c.name AS category_name,
                                p.name AS name,
                                p.price AS price,
                                p.barcode AS barcode,
                                p.stock AS stock
                            FROM
                                products p
                            JOIN
                                categories c ON p.category_id = c.id
                            WHERE
                                p.countable = 1`

        const products = db.prepare(sql);

        return products.all();
    } catch (e) {
        console.error(e);
        throw e;
    }
};

const createProduct = (event, product) => {
    const sql = `INSERT INTO products (category_id, name, price, countable, barcode, stock) 
                        VALUES (?, ?, ?, ?, ?, ?)`

    const stmt = db.prepare(sql);

    const data = stmt.run(
        product.category_id,
        product.name,
        product.price,
        1,
        product.barcode,
        product.stock
    )
};

const updateStock = (product, newStock) => {
    const info = db.prepare('UPDATE products SET stock = ? WHERE name = ?').run(newStock, product);
    return info.changes;
}

module.exports = { getProducts, createProduct, updateStock };