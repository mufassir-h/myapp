const express = require('express');
const app = express();
const port = 3000;

const version = process.env.VERSION || 'v3.5';

app.get('/', (req, res) => {
  res.send(`Welcome to version ${version} application`);
});

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.listen(port, () => {
  console.log(`App berjalan di http://localhost:${port}`);
});
