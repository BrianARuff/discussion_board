import 'dotenv/config';
import { Pool } from 'pg';

const pool = new Pool({
   database: process.env.PROD_DB_NAME,
   user: process.env.PROD_DB_USER,
   password: process.env.PROD_DB_PASS,
   host: process.env.PROD_DB_HOST,
   port: process.env.PROD_DB_PORT as any,
   max: 25,
   ssl: {
      rejectUnauthorized: false,
   },
});

// const pool = new Pool({
//    database: process.env.LOCAL_DB_NAME,
//    user: process.env.LOCAL_DB_USER,
//    password: process.env.LOCAL_DB_PASSWORD,
//    host: process.env.LOCAL_DB_HOST,
//    port: 5432,
// });

pool.connect();

export default pool;
