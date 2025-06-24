const express = require('express');
const app = express();
const port = 3000;

const version = process.env.VERSION || 'v1-blue';

app.get('/', (req, res) => {
  res.send(`Halo! Ini versi: ${version}`);
});

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.listen(port, () => {
  console.log(`App berjalan di http://localhost:${port}`);
});
