const mysql = require('mysql2/promise');
require('dotenv').config()


const connection = mysql.createPool({
  user: process.env.SQL_PORT,
  password: process.env.SQL_PASSWORD,
  host: 'localhost',
  database: 'model_example'
});

module.exports = connection;