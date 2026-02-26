const db = require('../database/connection');

const getAllCategories = () => {
    try {
        const sql = `SELECT * FROM categories`;

        const categories = db.prepare(sql);
        return categories.all();
    }catch (e){
        console.error(e);
        throw e;
    }
}

module.exports = {getAllCategories};