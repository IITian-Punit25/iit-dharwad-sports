const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');
const authMiddleware = require('../middleware/authMiddleware');

// @route   POST /api/admin/login
// @desc    Authenticate admin & get token
// @access  Public
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const normalizedEmail = email.toLowerCase();
    console.log('Login attempt for:', normalizedEmail);

    try {
        // Check if admin exists
        let admin = await Admin.findOne({ email: normalizedEmail });
        if (!admin) {
            console.log('Admin not found for email:', normalizedEmail);
            return res.status(400).json({ message: 'Invalid Credentials (User not found)' });
        }

        // Check password
        const isMatch = await admin.comparePassword(password);
        if (!isMatch) {
            console.log('Password mismatch for user:', normalizedEmail);
            return res.status(400).json({ message: 'Invalid Credentials (Password mismatch)' });
        }

        console.log('Login successful for:', normalizedEmail);
        // Return JWT
        const payload = {
            admin: {
                id: admin.id,
                email: admin.email
            }
        };

        jwt.sign(
            payload,
            process.env.JWT_SECRET || 'your_jwt_secret',
            { expiresIn: '24h' },
            (err, token) => {
                if (err) throw err;
                res.json({ token });
            }
        );
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// @route   POST /api/admin/register
// @desc    Register a new admin (Protected, or use a secret key in body for initial setup)
// @access  Protected / Secret
router.post('/register', async (req, res) => {
    const { email, password, secretKey } = req.body;

    // Simple protection for initial setup
    if (secretKey !== process.env.ADMIN_SECRET_KEY && !req.header('Authorization')) {
        return res.status(401).json({ message: 'Unauthorized to create admin' });
    }

    try {
        let admin = await Admin.findOne({ email });
        if (admin) {
            return res.status(400).json({ message: 'Admin already exists' });
        }

        admin = new Admin({
            email,
            password
        });

        await admin.save();

        res.status(201).json({ message: 'Admin created successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// @route   GET /api/admin/me
// @desc    Get current admin info
// @access  Private
router.get('/me', authMiddleware, async (req, res) => {
    try {
        const admin = await Admin.findById(req.admin.id).select('-password');
        res.json(admin);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
