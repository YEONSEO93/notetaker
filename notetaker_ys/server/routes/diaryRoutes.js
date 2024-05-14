import express from 'express';
import { createEntry, getEntries } from '../controllers/diaryController';
import { authenticate } from '../middlewares/authMiddleware';

const router = express.Router();

router.post('/', authenticate, createEntry);
router.get('/', authenticate, getEntries);

export default router;
