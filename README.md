# IIT Dharwad Sports Portal

This is the official sports portal for IIT Dharwad, managing the General Championship (GC), sports events, and inter-hostel competitions.

## Project Structure

The project is divided into two parts:
- **Frontend**: React + Vite (Root directory)
- **Backend**: Node.js + Express + MongoDB (`/server` directory)

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (Local or Atlas URI)

## Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/IITian-Punit25/iit-dharwad-sports.git
cd iit-dharwad-sports
```

### 2. Backend Setup
Navigate to the server directory and install dependencies:
```bash
cd server
npm install
```

Create a `.env` file in the `server` directory with the following variables:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

Start the backend server:
```bash
node server.js
```
The server will run on `http://localhost:5000`.

### 3. Frontend Setup
Open a new terminal, navigate to the root directory, and install dependencies:
```bash
# If you are in the server directory, go back to root
cd .. 

npm install
```

Start the frontend development server:
```bash
npm run dev
```
The application will be available at `http://localhost:5173`.

## Features

- **Public Portal**: View sports events, GC leaderboard, match schedules, and results.
- **Admin Panel**: Manage points, update match scores, and handle registrations.
- **Real-time Updates**: Live leaderboard and match status updates.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Tech Stack

- **Frontend**: React, Tailwind CSS, Framer Motion, Lucide React
- **Backend**: Node.js, Express.js, Mongoose
- **Database**: MongoDB

## License

This project is proprietary to IIT Dharwad Sports Council.
