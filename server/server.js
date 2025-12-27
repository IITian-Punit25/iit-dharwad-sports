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

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', registrationRoutes); // Public registration
app.use('/api/admin', authRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/scores', scoreRoutes);
app.use('/api/points', pointsRoutes);
app.use('/api/admin/registrations', adminRegistrationRoutes);

// Database Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/gc_registration')
    .then(() => console.log('MongoDB Connected'))
    .catch(err => {
        console.error('MongoDB Connection Error:', err.message);
    });

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
