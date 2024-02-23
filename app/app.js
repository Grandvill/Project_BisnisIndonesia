const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile('./page.jsx', { root: __dirname });
});

app.get('./Pricing', (req, res) => {
  res.sendFile('./Pricing', { root: __dirname });
});

app.get('/product/:id/Category/:idcat', (req, res) => {
  res.send(`Product ID :  ${req.params.id} <br> Category ID : ${req.params.idcat}`);
});

// app.use digunakan untuk request apapun
app.use('/', (req, res) => {
  res.status(404);
  res.send('<h1>404</h1>');
});

app.listen(port, () => {
  console.log('Example app listening at http://localhost:${port}');
});
