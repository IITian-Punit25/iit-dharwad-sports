const express = require('express');
const router = express.Router();
const PointsTable = require('../models/PointsTable');
const authMiddleware = require('../middleware/authMiddleware');

// @route   GET /api/points
// @desc    Get points table
// @access  Public
router.get('/', async (req, res) => {
    try {
        const points = await PointsTable.find()
            .select('hostel category gold silver bronze totalPoints eventsParticipated')
            .sort({ totalPoints: -1, gold: -1, silver: -1, bronze: -1 });
        res.json(points);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Server Error' });
    }
});

// @route   POST /api/points
// @desc    Update points for a hostel
// @access  Private (Admin)
router.post('/', authMiddleware, async (req, res) => {
    const { hostel, category, gold, silver, bronze, totalPoints, eventsParticipated } = req.body;

    try {
        let pointsEntry = await PointsTable.findOne({ hostel, category });

        if (pointsEntry) {
            // Update
            pointsEntry = await PointsTable.findOneAndUpdate(
                { hostel, category },
                { $set: { gold, silver, bronze, totalPoints, eventsParticipated, lastUpdated: Date.now() } },
                { new: true }
            );
        } else {
            // Create
            pointsEntry = new PointsTable({
                hostel,
                category,
                gold,
                silver,
                bronze,
                totalPoints,
                eventsParticipated
            });
            await pointsEntry.save();
        }

        res.json(pointsEntry);
        req.io.emit('pointsUpdated');
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   DELETE /api/points/:id
// @desc    Delete a points entry
// @access  Private (Admin)
router.delete('/:id', authMiddleware, async (req, res) => {
    try {
        await PointsTable.findByIdAndDelete(req.params.id);
        req.io.emit('pointsUpdated');
        res.json({ message: 'Entry removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
