import db from '../db';
import bcrypt from 'bcryptjs';

export const createUser = async (username, password, name, email) => {
  const hashedPassword = await bcrypt.hash(password, 12);
  const [result] = await db.execute(
    'INSERT INTO users (username, password, name, email) VALUES (?, ?, ?, ?)',
    [username, hashedPassword, name, email]
  );
  return result.insertId;
};

export const findUserByUsername = async (username) => {
  const [rows] = await db.execute('SELECT * FROM users WHERE username = ?', [username]);
  return rows[0];
};
