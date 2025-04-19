# Authentication System

A secure user authentication system built with Node.js, Express, Prisma, and PostgreSQL. This application provides user registration, login, and profile retrieval endpoints with JWT authentication.

## Features

- User registration with password hashing
- JWT-based authentication
- Secure login endpoint
- Protected user profile endpoint
- PostgreSQL database integration with Prisma ORM

## Tech Stack

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **Prisma** - ORM for database access
- **PostgreSQL** - Database
- **bcrypt** - Password hashing
- **jsonwebtoken** - JWT implementation
- **dotenv** - Environment variable management
- **cors** - Cross-Origin Resource Sharing

## Project Structure

```
Authentication-System/
│
├── prisma/
│   ├── schema.prisma       # Database schema definition
│   └── prismaClient.js     # Prisma client initialization
│
├── controllers/
│   └── authController.js   # Authentication logic
│
├── middleware/
│   └── auth.js             # JWT verification middleware
│
├── routes/
│   └── userRoutes.js       # API routes
│
├── generated/              # Auto-generated Prisma client
│
├── .env                    # Environment variables
├── .gitignore              # Git ignore configuration
├── index.js                # Application entry point
├── package.json            # Project dependencies
└── README.md               # Project documentation
```

## Prerequisites

- Node.js (v16+)
- PostgreSQL database
- npm or yarn

## Installation

1. Clone the repository
   ```
   git clone https://github.com/llshivamsinghll/Authentication-System.git
   cd Authentication-System
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Set up environment variables
   Create a `.env` file in the root directory with the following variables:
   ```
   DATABASE_URL="postgresql://username:password@localhost:5432/auth1"
   JWT_SECRET="your_secure_jwt_secret_here"
   PORT=5000
   ```

4. Set up the database and generate Prisma client
   ```
   npx prisma generate
   npx prisma migrate dev --name init
   ```

## API Endpoints

### Authentication

**Register a new user**
```
POST /api/users
```
Request body:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepassword"
}
```

**Login**
```
POST /api/users/login
```
Request body:
```json
{
  "email": "john@example.com",
  "password": "securepassword"
}
```
Response:
```json
{
  "token": "jwt_token_here",
  "user": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

### Protected Routes

**Get current user profile**
```
GET /api/users/me
```
Headers:
```
Authorization: Bearer jwt_token_here
```

**Get all users** (protected)
```
GET /api/users
```
Headers:
```
Authorization: Bearer jwt_token_here
```

## Running the Application

Start the server:
```
node index.js
```

The API will be available at `http://localhost:5000`

## Security

- Passwords are hashed using bcrypt
- Authentication is handled with JWT tokens
- Sensitive user data (passwords) are never returned in responses

## License

This project is licensed under the ISC License.

## Author

- [@llshivamsinghll](https://github.com/llshivamsinghll)