const express = require('express');
const app = express();
const odbc = require('odbc');

// Configurar a conexão com o banco de dados Access
const db = odbc.connect('DSN=MyDSN;DBQ=C:\\path\\to\\your\\database.mdb');

app.get('/api/data', (req, res) => {
  // Execute uma consulta SQL no banco de dados Access
  db.query('SELECT * FROM sua_tabela', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Erro ao buscar dados do banco de dados.');
    } else {
      res.json(data);
    }
  });
});

app.listen(3000, () => {
  console.log('API está escutando na porta 3000');
});
