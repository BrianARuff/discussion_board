"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
var pg_1 = require("pg");
var fs_1 = __importDefault(require("fs"));
var pool = new pg_1.Pool({
    database: process.env.PROD_DB_NAME,
    user: process.env.PROD_DB_USER,
    password: process.env.PROD_DB_PASS,
    host: process.env.PROD_DB_HOST,
    port: process.env.PROD_DB_PORT,
    max: 25,
    ssl: {
        rejectUnauthorized: false,
        ca: fs_1.default.readFileSync(__dirname + '/../../ca.pem/'),
    },
});
pool.connect();
exports.default = pool;
//# sourceMappingURL=db.js.map