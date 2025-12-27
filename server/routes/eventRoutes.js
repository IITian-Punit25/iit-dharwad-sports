const express = require('express');
const router = express.Router();
const Event = require('../models/Event');
const authMiddleware = require('../middleware/authMiddleware');

// @route   GET /api/events
// @desc    Get all events
// @access  Public
router.get('/', async (req, res) => {
    try {
        const events = await Event.find()
            .select('sport category stage team1 team2 date time venue status pool createdAt')
            .sort({ date: 1, time: 1 });
        res.json(events);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Server Error' });
    }
});

// @route   POST /api/events
// @desc    Create a new event
// @access  Private (Admin)
router.post('/', authMiddleware, async (req, res) => {
    try {
        const newEvent = new Event(req.body);
        const event = await newEvent.save();
        req.io.emit('eventsUpdated');
        res.json(event);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   PUT /api/events/:id
// @desc    Update an event
// @access  Private (Admin)
router.put('/:id', authMiddleware, async (req, res) => {
    try {
        let event = await Event.findById(req.params.id);
        if (!event) return res.status(404).json({ message: 'Event not found' });

        event = await Event.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        req.io.emit('eventsUpdated');
        res.json(event);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   DELETE /api/events/:id
// @desc    Delete an event
// @access  Private (Admin)
router.delete('/:id', authMiddleware, async (req, res) => {
    try {
        let event = await Event.findById(req.params.id);
        if (!event) return res.status(404).json({ message: 'Event not found' });

        await Event.findByIdAndDelete(req.params.id);
        req.io.emit('eventsUpdated');
        res.json({ message: 'Event removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
