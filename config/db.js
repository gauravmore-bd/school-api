const mysql = require("mysql2/promise");
const dotenv = require("dotenv");

dotenv.config();

let pool;

if (process.env.MYSQL_URL) {
  // Railway (Production) 
  pool = mysql.createPool(process.env.MYSQL_URL);
} else {
  // Local Development
  pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });
}

module.exports = pool;
