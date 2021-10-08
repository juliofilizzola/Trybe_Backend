const mysql = require('mysql2/promise');
require('dotenv/config');

const connection = mysql.createPool({
  user: process.env.ROOT,
  password: process.env.PASSWORD,
  host: 'localhost',
  database: 'model_example'
});

module.exports = connection;