require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const registrationRoutes = require('./routes/registrationRoutes');
const authRoutes = require('./routes/authRoutes');
const eventRoutes = require('./routes/eventRoutes');
const scoreRoutes = require('./routes/scoreRoutes');
const pointsRoutes = require('./routes/pointsRoutes');
const adminRegistrationRoutes = require('./routes/adminRegistrationRoutes');

const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173", // Frontend URL
        methods: ["GET", "POST", "PUT", "DELETE"]
    }
});

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Attach io to request object
app.use((req, res, next) => {
    req.io = io;
    next();
});

// Routes
const errorHandler = require('./middleware/errorHandler');
// ... existing code ...
app.use('/api', registrationRoutes);
app.use('/api/admin', authRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/scores', scoreRoutes);
app.use('/api/points', pointsRoutes);
app.use('/api/admin/registrations', adminRegistrationRoutes);

// Test endpoint to verify live updates (no auth)
app.get('/api/test-live', (req, res) => {
    console.log('Test live endpoint hit, emitting testLive');
    req.io.emit('testLive');
    res.json({ message: 'testLive emitted' });
});

// Centralized error handling middleware
app.use(errorHandler);

// Database Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/gc_registration')
    .then(() => console.log('MongoDB Connected'))
    .catch(err => {
        console.error('MongoDB Connection Error:', err.message);
    });

// Socket.io Connection
io.on('connection', (socket) => {
    console.log('New client connected:', socket.id);
    socket.on('disconnect', () => {
        console.log('Client disconnected:', socket.id);
    });
});

// Start Server
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
