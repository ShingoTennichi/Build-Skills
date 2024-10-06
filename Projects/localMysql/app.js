import express from 'express';
import mysql from 'mysql2';
import helmet from 'helmet';

const app = express();
const port = 3000;

app.use(express.json());
app.use(helmet());
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
})

const pool = mysql.createPool({
  host: '127.0.0.1', // string 'localhost' did not work
  user: 'root',
  password: '',
  database: 'disposelater'
}).promise();




app.listen(port, async () => {
  console.log(`Server listening on port ${port}`);
  const res = await pool.query("SHOW TABLES");
  console.log('Current Tables', res[0]);
});

app.get('/', async (req, res) => {
  const users = await pool.query("SELECT * FROM users");
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(users[0]));
});

app.get('/insert', async (req, res) => {
  const { name, email, password } = req.body;
  const query = '';
  throw new Error('Test');
  // insert into users (name, email, password) values ('Geraldine', 'gbullon9@hp.com', '$2a$04$Q/AJTeYp7aM6c.06i7W0Y.TvtM8TxPV.0YG6NQRDIkSqffHbIZLx.');
  // const res = await pool.query("INSERT INTO users (name) VALUES ('Test')");
  // console.log('User List', res[0]);
  res.send("ok");
})

app.get('/user', async (req, res) => {
  const { id } = req.query;
  console.log('id', req);
  const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [id]);

  res.setHeader('Content-Type', 'application/json');
  res.end(rows[0]);
  // const users = await pool.query("SELECT * FROM users");
  // res.setHeader('Content-Type', 'application/json');
  // res.end(JSON.stringify(users[0]));
})

app.get('/user/:id', async (req, res) => {
  const { id } = req.params;
  console.log('id', req);
  const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [id]);

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(rows[0]));
  // const users = await pool.query("SELECT * FROM users");
  // res.setHeader('Content-Type', 'application/json');
  // res.end(JSON.stringify(users[0]));
})