import 'dotenv/config';
import { Pool } from 'pg';

const pool = new Pool({
   host: process.env.DB_HOST,
   user: process.env.DB_USER,
   password: process.env.DB_PASSWORD,
   database: process.env.DB_NAME,
   port: 5432,
});

pool.connect();

export default pool;