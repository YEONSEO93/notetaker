
// server/routes/diaryRoutes.js
import express from 'express';
import { createEntry, getEntries, updateEntry, deleteEntry } from '../controllers/diaryController.js';
import { authenticate } from '../middlewares/authMiddleware.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Diary
 *   description: Diary management endpoints
 */

/**
 * @swagger
 * /diary:
 *   post:
 *     summary: Create a new diary entry
 *     tags: [Diary]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - text
 *             properties:
 *               text:
 *                 type: string
 *                 description: The text of the diary entry
 *     responses:
 *       201:
 *         description: Entry saved
 *       500:
 *         description: Failed to save entry
 */
router.post('/', authenticate, createEntry);

/**
 * @swagger
 * /diary:
 *   get:
 *     summary: Get all diary entries for the authenticated user
 *     tags: [Diary]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successfully retrieved entries
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   text:
 *                     type: string
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *       500:
 *         description: Failed to fetch entries
 */
router.get('/', authenticate, getEntries);

/**
 * @swagger
 * /diary/{id}:
 *   put:
 *     summary: Update an existing diary entry
 *     tags: [Diary]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The id of the diary entry to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - text
 *             properties:
 *               text:
 *                 type: string
 *                 description: The updated text of the diary entry
 *     responses:
 *       200:
 *         description: Entry updated
 *       500:
 *         description: Failed to update entry
 */
router.put('/:id', authenticate, updateEntry);

/**
 * @swagger
 * /diary/{id}:
 *   delete:
 *     summary: Delete a diary entry
 *     tags: [Diary]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The id of the diary entry to delete
 *     responses:
 *       200:
 *         description: Entry deleted
 *       500:
 *         description: Failed to delete entry
 */
router.delete('/:id', authenticate, deleteEntry);

export default router;

