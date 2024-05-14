
// server/routes/diaryRoutes.js

import express from 'express';
import { createEntry, getEntries, updateEntry, deleteEntry } from '../controllers/diaryController.js';
import { authenticate } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/', authenticate, createEntry);
router.get('/', authenticate, getEntries);
router.put('/:id', authenticate, updateEntry);
router.delete('/:id', authenticate, deleteEntry);

export default router;
