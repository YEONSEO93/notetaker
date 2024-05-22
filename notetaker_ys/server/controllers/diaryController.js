// server/controllers/diaryController.js

import { db } from '../index.js';

/**
 * Create a new diary entry.
 *
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 * @returns {Promise<void>}
 */
export const createEntry = async (req, res, next) => {
  const { text } = req.body;
  const userId = req.user.id;

  try {
    await db.query('INSERT INTO diary (text, createdAt, userId) VALUES (?, NOW(), ?)', 
      [text, userId]
    );
    res.status(201).json({ message: 'Entry saved' });
  } catch (err) {
    next(err); // Pass the error to the global error handler
  }
};

/**
 * Get all diary entries for the authenticated user.
 *
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 * @returns {Promise<void>}
 */
export const getEntries = async (req, res, next) => {
  const userId = req.user.id;
  const { search } = req.query;

  try {
    let query = 'SELECT * FROM diary WHERE userId = ?';
    const params = [userId];

    if (search) {
      query += ' AND text LIKE ?';
      params.push(`%${search}%`);
    }

    const [rows] = await db.query(query, params);
    res.json(rows);
  } catch (err) {
    next(err); // Pass the error to the global error handler
  }
};

/**
 * Update an existing diary entry.
 *
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 * @returns {Promise<void>}
 */
export const updateEntry = async (req, res, next) => {
  const { id } = req.params;
  const { text } = req.body;
  const userId = req.user.id;

  try {
    await db.query('UPDATE diary SET text = ? WHERE id = ? AND userId = ?', [text, id, userId]);
    res.json({ message: 'Entry updated' });
  } catch (err) {
    next(err); // Pass the error to the global error handler
  }
};

/**
 * Delete a diary entry.
 *
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 * @returns {Promise<void>}
 */
export const deleteEntry = async (req, res, next) => {
  const { id } = req.params;
  const userId = req.user.id;

  try {
    await db.query('DELETE FROM diary WHERE id = ? AND userId = ?', [id, userId]);
    res.json({ message: 'Entry deleted' });
  } catch (err) {
    next(err); // Pass the error to the global error handler
  }
};
