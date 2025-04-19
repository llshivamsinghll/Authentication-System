import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/user.js';
import prisma from './prisma/prismaClient.js';

// Initialize environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test database connection
async function testConnection() {
  try {
    await prisma.$connect();
    console.log('Database connection established successfully');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    process.exit(1);
  }
}

// Use routes
app.use('/api/users', userRoutes);

// Basic route
app.get('/', (req, res) => {
  res.send('Authentication API is running');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  await testConnection();
  console.log(`Server running on port ${PORT}`);
});