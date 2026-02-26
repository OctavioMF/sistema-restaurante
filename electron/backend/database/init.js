const db = require('./connection')


const initDB = async () => {
    const sql = `
    CREATE TABLE IF NOT EXISTS "users"(
        "id" INTEGER NOT NULL UNIQUE,
        "name" VARCHAR NOT NULL,
        "rol" VARCHAR NOT NULL,
        "pin" VARCHAR NOT NULL UNIQUE,
        PRIMARY KEY("id")
        );

    CREATE TABLE IF NOT EXISTS "tables"(
        "id" INTEGER NOT NULL UNIQUE,
        "table_number" NUMERIC NOT NULL UNIQUE,
        "capacity" NUMERIC,
        "state" VARCHAR NOT NULL,
        PRIMARY KEY("id")
        );

    CREATE TABLE IF NOT EXISTS "products"(
        "id" INTEGER NOT NULL UNIQUE,
        "category_id" INTEGER NOT NULL,
        "name" VARCHAR NOT NULL,
        "price" REAL NOT NULL,
        "countable" BOOLEAN NOT NULL,
        "barcode" VARCHAR,
        "stock" NUMERIC,
        PRIMARY KEY ("id"),
        FOREIGN KEY ("category_id") REFERENCES "categories"("id")
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        );

    CREATE TABLE IF NOT EXISTS "orders"(
        "id" INTEGER NOT NULL UNIQUE,
        "user_id" INTEGER NOT NULL,
        "table_id" INTEGER NOT NULL,
        "datetime_open" DATETIME NOT NULL,
        "datetime_close" DATETIME,
        "state" VARCHAR NOT NULL,
        "total" REAL NOT NULL,
        PRIMARY KEY("id"),
        FOREIGN KEY("user_id") REFERENCES "users"("id")
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
        FOREIGN KEY("table_id") REFERENCES "tables"("id")
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        );

    CREATE TABLE IF NOT EXISTS "order_details"(
        "id" INTEGER NOT NULL UNIQUE,
        "order_id" INTEGER NOT NULL,
        "product_id" INTEGER NOT NULL,
        "cant" NUMERIC NOT NULL,
        "comments" TEXT,
        "purchase_price" REAL NOT NULL,
        PRIMARY KEY("id"),
        FOREIGN KEY("order_id") REFERENCES "orders" ("id")
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
        FOREIGN KEY("product_id") REFERENCES "products"("id")
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        );

    CREATE TABLE IF NOT EXISTS "categories"(
        "id" INTEGER NOT NULL UNIQUE,
        "name" VARCHAR NOT NULL,
        PRIMARY KEY ( "id")
        );
    
`;

    db.exec(sql);
}

module.exports = initDB;