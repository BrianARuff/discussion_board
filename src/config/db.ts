import 'dotenv/config';
import { Pool } from 'pg';
import fs from 'fs';

const pool = new Pool({
   database: process.env.PROD_DB_NAME,
   user: process.env.PROD_DB_USER,
   password: process.env.PROD_DB_PASS,
   host: process.env.PROD_DB_HOST,
   port: process.env.PROD_DB_PORT as any,
   max: 25,
   ssl: {
      rejectUnauthorized: false,
      ca: fs.readFileSync(__dirname + '/../../ca.pem/'),
   },
});

pool.connect();

export default pool;
