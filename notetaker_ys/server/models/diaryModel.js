//server/models/diaryModel.js
import db from '../db';

export const createDiaryEntry = async (text, createAt, userid) => {
  const [result] = await db.execute(
    'INSERT INTO diary (text, createAt, userid) VALUES (?, ?, ?)',
    [text, createAt, userid]
  );
  return result.insertId;
};

export const getDiaryEntriesByUser = async (userid) => {
  const [rows] = await db.execute('SELECT * FROM diary WHERE userid = ?', [userid]);
  return rows;
};