import 'dotenv/config';
import { Pool } from 'pg';

let pool: Pool;

if (process.env.ENV === 'production') {
   pool = new Pool({
      user: process.env.PROD_DB_USER,
      password: process.env.PROD_DB_PASS,
      host: process.env.PROD_DB_HOST,
      port: process.env.PROD_DB_PORT,
      database: process.env.PROD_DB_NAME,
      max: 25,
      ssl: true,
   } as any);
} else {
   pool = new Pool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: 5432,
   });
}

pool.connect();

export default pool;
