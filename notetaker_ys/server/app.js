import express from 'express';
import bodyParser from 'body-parser';
import authRoutes from './routes/authRoutes';
import diaryRoutes from './routes/diaryRoutes';

const app = express();

app.use(bodyParser.json());
app.use('/api/auth', authRoutes);
app.use('/api/diary', diaryRoutes);

export default app;
