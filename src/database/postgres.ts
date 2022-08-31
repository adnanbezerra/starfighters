import dotenv from "dotenv";
import pg from "pg";
dotenv.config();

const { Pool } = pg;
// export const connection = new Pool({
//   connectionString: process.env.DATABASE_URL,
// });

export const connection = new Pool({
  user: 'admin',
  host: 'localhost',
  database: 'starfighters',
  password: process.env.DATABASE_PASSWORD,
  port: 5432
})