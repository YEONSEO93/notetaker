// const mysql = require('mysql2');

// const connection = mysql.createConnection({
//     host: '127.0.0.1',
//     user: 'root',
//     password: 'ys90909021@', // Provide the correct password here
//     database: 'notetaker',
// });

// // Test the connection
// connection.connect((err) => {
//     if (err) {
//         console.error('Error connecting to MySQL:', err);
//         return;
//     }
//     console.log('Connected to MySQL');
// });

// module.exports = connection;



// import express from 'express';
// import dotenv from 'dotenv';
// import bodyParser from 'body-parser';
// import cors from 'cors';
// import mysql from 'mysql2';
// import authRoutes from './routes/authRoutes.js';
// import diaryRoutes from './routes/diaryRoutes.js';

// dotenv.config();

// const pool = mysql.createPool({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     database: process.env.DB_NAME,
//     password: process.env.DB_PASSWORD,
// });

// const app = express();

// app.use(cors());
// app.use(bodyParser.json());

// app.use('/api/auth', authRoutes);
// app.use('/api/diary', diaryRoutes);

// const PORT = process.env.PORT || 3000; 

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// export default app;

// export const db = pool.promise();


import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import mysql from 'mysql2';
import authRoutes from './routes/authRoutes.js';
import diaryRoutes from './routes/diaryRoutes.js';

dotenv.config();  // Load environment variables

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
});

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/diary', diaryRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;

export const db = pool.promise();
