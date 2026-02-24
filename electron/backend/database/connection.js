const Database = require('better-sqlite3');
const path = require('path');
const { app } = require('electron');

const dbPath = path.join(app.getPath('userData'), 'restaurante.db');
const db = new Database(dbPath, { verbose: console.log });

module.exports = db;