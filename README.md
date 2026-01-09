# MERN User Management System

A simple MERN Stack application with basic CRUD operations for users (Name, Email, Age), developed as part of an assignment.

## Features
- **Add User**: Create new users with Name, Email, and Age.
- **View Users**: specific list of all users.
- **Edit User**: Update existing user details.
- **Delete User**: Remove users from the system.
- **Validation**: Basic form validation (email format, positive age).
- **Error Handling**: Graceful error handling for API requests.

## Tech Stack
- **Frontend**: React (Vite), TypeScript, Axios
- **Backend**: Node.js, Express, TypeScript, MongoDB (Mongoose)

## Prerequisites
- Node.js (v14+ recommended)
- MongoDB (Local or Atlas URI)

## Setup Instructions

### 1. Clone the Repository
\`\`\`bash
git clone <repository-url>
cd mern-crud
\`\`\`

### 2. Backend Setup
Navigate to the server directory, install dependencies, and start the server.

\`\`\`bash
cd server
npm install
\`\`\`

**Environment Variables:**
Create a \`.env\` file in the \`server\` directory with the following content:
\`\`\`env
PORT=5000
MONGO_URI=your_mongodb_connection_string
\`\`\`

**Start Server:**
\`\`\`bash
npm run dev
\`\`\`
The server should run on \`http://localhost:5000\`.

### 3. Frontend Setup
Navigate to the client directory, install dependencies, and start the app.

\`\`\`bash
cd ../client
npm install
\`\`\`

**Start Client:**
\`\`\`bash
npm run dev
\`\`\`
The application will be available at \`http://localhost:5173\` (or the port shown in your terminal).

## API Endpoints
Base URL: \`http://localhost:5000/api/users\` (Adjust based on your server configuration)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | \`/api/users\` | Fetch all users |
| POST | \`/api/users\` | Create a new user |
| PUT | \`/api/users/:id\` | Update a user |
| DELETE | \`/api/users/:id\` | Delete a user |

## Project Structure
\`\`\`
mern-crud/
├── client/     # React Frontend (Vite + TypeScript)
└── server/     # Express Backend (TypeScript)
\`\`\`
