// server/controllers/diaryController.js
import { db } from '../index.js';

export const createEntry = async (req, res) => {
  const { text } = req.body;
  const userId = req.user.id;

  try {
    await db.query('INSERT INTO diary (text, createdAt, userId) VALUES (?, NOW(), ?)', 
      [text, userId]
    );
    res.status(201).json({ message: 'Entry saved' });
  } catch (err) {
    console.error('Failed to save entry', err);
    res.status(500).json({ message: 'Failed to save entry' });
  }
};

export const getEntries = async (req, res) => {
  const userId = req.user.id;

  try {
    const [rows] = await db.query('SELECT * FROM diary WHERE userId = ?', [userId]);
    res.json(rows);
  } catch (err) {
    console.error('Failed to fetch entries', err);
    res.status(500).json({ message: 'Failed to fetch entries' });
  }
};

export const updateEntry = async (req, res) => {
  const { id } = req.params;
  const { text } = req.body;
  const userId = req.user.id;

  try {
    await db.query('UPDATE diary SET text = ? WHERE id = ? AND userId = ?', [text, id, userId]);
    res.json({ message: 'Entry updated' });
  } catch (err) {
    console.error('Failed to update entry', err);
    res.status(500).json({ message: 'Failed to update entry' });
  }
};

export const deleteEntry = async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;

  try {
    await db.query('DELETE FROM diary WHERE id = ? AND userId = ?', [id, userId]);
    res.json({ message: 'Entry deleted' });
  } catch (err) {
    console.error('Failed to delete entry', err);
    res.status(500).json({ message: 'Failed to delete entry' });
  }
};
