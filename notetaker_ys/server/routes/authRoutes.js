import express from 'express';
import { check } from 'express-validator';
import { signup, login } from '../controllers/authController.js';

const router = express.Router();

router.post(
  '/signup',
  [
    check('username', 'Username is required').not().isEmpty(),
    check('password', 'Password is required').not().isEmpty(),
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Email is required').isEmail(),
  ],
  signup
);

router.post('/login', login);

export default router;
