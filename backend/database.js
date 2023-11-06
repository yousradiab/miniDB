import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

const dbconn = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

const pool = mysql.createPool(dbconn).promise();

export default pool;
