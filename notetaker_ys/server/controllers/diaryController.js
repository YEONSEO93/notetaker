// server/controllers/diaryController.js

import pool from '../index.js';

export const createEntry = async (req, res) => {
  const { text } = req.body;
  const userId = req.user.id;

  try {
    await pool.query('INSERT INTO diary (text, createAt, userid) VALUES (?, NOW(), ?)', 
      [text, userId]
    );
    res.status(201).json({ message: 'Entry saved' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to save entry' });
  }
};

export const getEntries = async (req, res) => {
  const userId = req.user.id;

  try {
    const [rows] = await pool.query('SELECT * FROM diary WHERE userid = ?', [userId]);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch entries' });
  }
};
