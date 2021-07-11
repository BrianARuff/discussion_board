"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
var pg_1 = require("pg");
var pool;
if (process.env.ENV === 'production') {
    pool = new pg_1.Pool({
        user: process.env.PROD_DB_USER,
        password: process.env.PROD_DB_PASS,
        host: process.env.PROD_DB_HOST,
        port: process.env.PROD_DB_PORT,
        database: process.env.PROD_DB_NAME,
        max: 25,
        ssl: true,
    });
}
else {
    pool = new pg_1.Pool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: 5432,
    });
}
pool.connect();
exports.default = pool;
//# sourceMappingURL=db.js.map