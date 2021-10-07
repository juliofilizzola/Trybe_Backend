const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'filizzola',
  password: 'coisanerd1',
  host: 'localhost',
  database: 'model_example'
});

module.exports = connection;