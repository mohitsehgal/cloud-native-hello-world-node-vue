// get the client
const mysql = require('mysql2/promise');
const config = require('./config')

// Create the connection pool. The pool-specific settings are the defaults
const pool = mysql.createPool({
  host: config.DB_HOST,
  user: config.DB_USER,
  database: config.DB_NAME,
  password: config.DB_PASSWORD,
  waitForConnections: true,
  connectionLimit: config.DB_CONNECTION_LIMIT,
  queueLimit: 0
});

exports.pool = pool;