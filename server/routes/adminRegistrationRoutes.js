const express = require('express');
const router = express.Router();
const Registration = require('../models/Registration');
const authMiddleware = require('../middleware/authMiddleware');

// @route   GET /api/admin/registrations
// @desc    Get all registrations
// @access  Private (Admin)
router.get('/', authMiddleware, async (req, res) => {
    try {
        const registrations = await Registration.find().sort({ createdAt: -1 });
        res.json(registrations);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   PUT /api/admin/registrations/:id
// @desc    Update a registration
// @access  Private (Admin)
router.put('/:id', authMiddleware, async (req, res) => {
    try {
        const registration = await Registration.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.json(registration);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   DELETE /api/admin/registrations/:id
// @desc    Delete a registration
// @access  Private (Admin)
router.delete('/:id', authMiddleware, async (req, res) => {
    try {
        await Registration.findByIdAndDelete(req.params.id);
        res.json({ message: 'Registration removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
