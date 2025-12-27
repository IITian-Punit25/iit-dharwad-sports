const express = require('express');
const router = express.Router();
const Registration = require('../models/Registration');

// POST /api/register
router.post('/register', async (req, res) => {
    try {
        const { fullName, rollNumber, email, gender, hostel, sports } = req.body;

        // Basic Validation
        if (!fullName || !rollNumber || !email || !gender || !hostel) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Hostel Validation
        if (!['Hostel 1', 'Hostel 2'].includes(hostel)) {
            return res.status(400).json({ message: 'Only Hostel 1 and Hostel 2 residents are eligible' });
        }

        // Create new registration
        const registration = new Registration({
            fullName,
            rollNumber,
            email,
            gender,
            hostel,
            sports
        });

        await registration.save();
        res.status(201).json({ message: 'Registration successful!', registration });

    } catch (error) {
        if (error.code === 11000) {
            // Duplicate key error
            const field = Object.keys(error.keyPattern)[0];
            return res.status(400).json({ message: `Duplicate entry: ${field} already registered.` });
        }
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);
            return res.status(400).json({ message: messages.join(', ') });
        }
        console.error('Registration Error:', error);
        res.status(500).json({ message: 'Server error during registration' });
    }
});

// GET /api/registrations (Admin only - simplified for now)
router.get('/registrations', async (req, res) => {
    try {
        const registrations = await Registration.find().sort({ createdAt: -1 });
        res.json(registrations);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching registrations' });
    }
});

module.exports = router;
