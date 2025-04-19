import express from 'express';
import { getUser, createUser, loginUser, getMe } from '../controllers/authController.js';
import verifyToken from '../middleware/auth.js';

const router = express.Router();

// Get all users
router.get('/', verifyToken, getUser);

// Create a new user
router.post('/', createUser);  // Changed from '/create' to match your index.js

// Login
router.post('/login', loginUser);

// Get current user
router.get('/me', verifyToken, getMe);

export default router;