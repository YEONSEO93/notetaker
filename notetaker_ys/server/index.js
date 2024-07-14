// // server/index.js

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { createPool } from 'mysql2';
import authRoutes from './routes/authRoutes.js';
import diaryRoutes from './routes/diaryRoutes.js';
import errorHandler from './middlewares/errorMiddleware.js';
import logger from './logger.js';
import swaggerSetup from './swagger.js'; // Import swagger setup

dotenv.config();

const pool = createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
});

const app = express();

app.use(cors());  // Enable CORS
app.use(bodyParser.json());
app.use(morgan('combined', { stream: { write: message => logger.info(message.trim()) } }));

app.use('/api/auth', authRoutes);
app.use('/api/diary', diaryRoutes);

swaggerSetup(app); // Setup swagger documentation

app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  logger.info(`Server is running on port ${PORT}`);
});

export default app;
export const db = pool.promise();
