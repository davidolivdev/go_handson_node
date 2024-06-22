const express = require('express');
const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const port = 3000;

const config = {
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
};

const connection = mysql.createConnection(config);

connection.connect((err) => {
  console.log(config.host);
  if (err) throw err;
  console.log('Connected to MySQL');
});

app.get('/', (req, res) => {
  const sql = `INSERT INTO people(name) values('Full Cycle Rocks!')`;
  connection.query(sql, (err) => {
    if (err) throw err;
    connection.query('SELECT name FROM people', (err, results) => {
      if (err) throw err;
      const names = results.map((row) => row.name).join('<br>');
      res.send(`<h1>Full Cycle Rocks!</h1><br>${names}`);
    });
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
