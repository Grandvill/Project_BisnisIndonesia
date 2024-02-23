const express = require('express');
const app = express();
const { Pool } = require('pg');
const cors = require('cors');
const port = 3001;

app.use(
  cors({
    origin: '*',
  })
);

app.get('/data', async (req, res) => {
  try {
    const pool = new Pool({
      host: 'localhost',
      port: '5432',
      user: 'postgres',
      password: '',
      database: 'bisnis_project',
    });

    const result = await pool.query('SELECT * FROM Customer');
    res.json(result.rows);
  } catch (error) {
    console.error('ERROR FETCHING DATA : ', error);
    res.status(500).json({ error: 'internal server error' });
  }
});

app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});
