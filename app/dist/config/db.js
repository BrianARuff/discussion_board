"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
var pg_1 = require("pg");
var pool = new pg_1.Pool({
    database: process.env.LOCAL_DB_NAME,
    user: process.env.LOCAL_DB_USER,
    password: process.env.LOCAL_DB_PASS,
    host: process.env.LOCAL_DB_HOST,
    port: 5432,
});
pool.connect();
exports.default = pool;
//# sourceMappingURL=db.js.map