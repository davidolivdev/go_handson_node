const express = require('express');
const mysql = require('mysql2/promise'); // Use mysql2 com promises
const app = express();
const port = 3000;

// Configuração robusta do MySQL
const pool = mysql.createPool({
  host: process.env.MYSQL_HOST || 'db',
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || 'root',
  database: process.env.MYSQL_DB || 'fullcycle',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Cria tabela se não existir
pool.query(`
  CREATE TABLE IF NOT EXISTS people (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
  )`
).catch(err => console.error('Erro ao criar tabela:', err));

// Rota principal com tratamento de erros
app.get('/', async (req, res) => {
  try {
    await pool.query("INSERT INTO people(name) VALUES('Full Cycle Rocks!')");
    const [results] = await pool.query("SELECT name FROM people");
    
    const names = results.map(row => row.name).join('<br>');
    res.send(`<h1>Full Cycle Rocks!</h1><br>${names}`);
  } catch (err) {
    console.error('Erro na rota /:', err);
    res.status(500).send('Erro no servidor');
  }
});

app.listen(port, '0.0.0.0', () => {
  console.log(`App rodando em http://0.0.0.0:${port}`);
});