
// // server/controllers/diaryController.js

// import { db } from '../index.js';

// export const createEntry = async (req, res) => {
//   const { text } = req.body;
//   const userId = req.user.id;

//   try {
//     await db.query('INSERT INTO diary (text, createdAt, userId) VALUES (?, NOW(), ?)', 
//       [text, userId]
//     );
//     res.status(201).json({ message: 'Entry saved' });
//   } catch (err) {
//     console.error('Failed to save entry', err);
//     res.status(500).json({ message: 'Failed to save entry' });
//   }
// };

// export const getEntries = async (req, res) => {
//   const userId = req.user.id;

//   try {
//     const [rows] = await db.query('SELECT * FROM diary WHERE userId = ?', [userId]);
//     res.json(rows);
//   } catch (err) {
//     console.error('Failed to fetch entries', err);
//     res.status(500).json({ message: 'Failed to fetch entries' });
//   }
// };



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
