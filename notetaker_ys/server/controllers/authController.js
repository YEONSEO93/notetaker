// import { validationResult } from 'express-validator';
// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';
// import { db } from '../index.js';

// export const signup = async (req, res) => {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).json({ errors: errors.array() });
//   }

//   const { username, password, name, email } = req.body;

//   try {
//     // Check if user already exists
//     const [existingUser] = await db.execute('SELECT * FROM users WHERE username = ?', [username]);
//     if (existingUser.length > 0) {
//       return res.status(400).json({ msg: 'User already exists' });
//     }

//     // Hash the password
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     // Insert new user into the database
//     await db.execute('INSERT INTO users (username, password, name, email) VALUES (?, ?, ?, ?)', [
//       username,
//       hashedPassword,
//       name,
//       email,
//     ]);

//     // Generate JWT token
//     const payload = {
//       user: {
//         username,
//       },
//     };

//     jwt.sign(
//       payload,
//       process.env.JWT_SECRET,
//       { expiresIn: '1h' },
//       (err, token) => {
//         if (err) throw err;
//         res.json({ token });
//       }
//     );
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server error');
//   }
// };

// export const login = async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     const [user] = await db.execute('SELECT * FROM users WHERE username = ?', [username]);

//     if (user.length === 0) {
//       return res.status(400).json({ msg: 'Invalid credentials' });
//     }

//     const isMatch = await bcrypt.compare(password, user[0].password);

//     if (!isMatch) {
//       return res.status(400).json({ msg: 'Invalid credentials' });
//     }

//     const payload = {
//       user: {
//         username: user[0].username,
//       },
//     };

//     jwt.sign(
//       payload,
//       process.env.JWT_SECRET,
//       { expiresIn: '1h' },
//       (err, token) => {
//         if (err) throw err;
//         res.json({ token });
//       }
//     );
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server error');
//   }
// };



import { validationResult } from 'express-validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { db } from '../index.js';

export const signup = async (req, res) => {
  console.log("Sign up request received:", req.body);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log("Validation errors:", errors.array());
    return res.status(400).json({ errors: errors.array() });
  }

  const { username, password, name, email } = req.body;

  try {
    // Check if user already exists
    const [existingUser] = await db.execute('SELECT * FROM users WHERE username = ?', [username]);
    if (existingUser.length > 0) {
      console.log("User already exists");
      return res.status(400).json({ msg: 'User already exists' });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Insert new user into the database
    await db.execute('INSERT INTO users (username, password, name, email) VALUES (?, ?, ?, ?)', [
      username,
      hashedPassword,
      name,
      email,
    ]);

    // Generate JWT token
    const payload = {
      user: {
        username,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,  // Ensure JWT_SECRET is used here
      { expiresIn: '1h' },
      (err, token) => {
        if (err) {
          console.log("JWT sign error:", err);
          throw err;
        }
        res.json({ token });
      }
    );
  } catch (err) {
    console.error("Server error:", err.message);
    res.status(500).send('Server error');
  }
};

export const login = async (req, res) => {
  console.log("Login request received:", req.body);
  const { username, password } = req.body;

  try {
    const [user] = await db.execute('SELECT * FROM users WHERE username = ?', [username]);

    if (user.length === 0) {
      console.log("Invalid credentials");
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user[0].password);

    if (!isMatch) {
      console.log("Invalid credentials");
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    const payload = {
      user: {
        username: user[0].username,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,  // Ensure JWT_SECRET is used here
      { expiresIn: '1h' },
      (err, token) => {
        if (err) {
          console.log("JWT sign error:", err);
          throw err;
        }
        res.json({ token });
      }
    );
  } catch (err) {
    console.error("Server error:", err.message);
    res.status(500).send('Server error');
  }
};
