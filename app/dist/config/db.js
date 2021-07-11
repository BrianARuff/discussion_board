"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
var pg_1 = require("pg");
var pool = new pg_1.Pool({
    database: process.env.PROD_DB_NAME,
    user: process.env.PROD_DB_USER,
    password: process.env.PROD_DB_PASS,
    host: process.env.PROD_DB_HOST,
    port: process.env.PROD_DB_PORT,
    max: 25,
    ssl: {
        rejectUnauthorized: false,
    },
});
pool.connect();
exports.default = pool;
//# sourceMappingURL=db.js.map