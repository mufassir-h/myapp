const express = require('express');
const app = express();
const port = 3000;

const version = process.env.VERSION || 'v3.6';

app.get('/', (req, res) => {
  res.send(`SELAMAT DATANG DI SERVER TEST VERSI ${version}`);
});

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.listen(port, () => {
  console.log(`App berjalan di http://localhost:${port}`);
});
