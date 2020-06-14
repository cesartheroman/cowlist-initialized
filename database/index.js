const mysql = require('mysql');
const Promise = require('bluebird');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'CR1993',
  database: 'cowList',
});

const db = Promise.promisifyAll(connection);

db.connect((err) => {
  if (err) console.error(err);
  else console.log('Connected to MySQL!');
});

module.exports = db;
