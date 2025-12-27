const express = require('express');
const router = express.Router();
const Score = require('../models/Score');
const Event = require('../models/Event');
const authMiddleware = require('../middleware/authMiddleware');

// @route   GET /api/scores
// @desc    Get all scores
// @access  Public
router.get('/', async (req, res) => {
    try {
        const scores = await Score.find().populate('eventId');
        res.json(scores);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   POST /api/scores
// @desc    Add/Update score for an event
// @access  Private (Admin)
router.post('/', authMiddleware, async (req, res) => {
    const { eventId, score, winner, resultDetails, pointsAwarded } = req.body;

    try {
        let scoreEntry = await Score.findOne({ eventId });

        if (scoreEntry) {
            // Update existing score
            scoreEntry = await Score.findOneAndUpdate(
                { eventId },
                { $set: { score, winner, resultDetails, pointsAwarded, updatedAt: Date.now() } },
                { new: true }
            );
        } else {
            // Create new score
            scoreEntry = new Score({
                eventId,
                score,
                winner,
                resultDetails,
                pointsAwarded
            });
            await scoreEntry.save();
        }

        // Also update the Event status to 'Completed'
        await Event.findByIdAndUpdate(eventId, { status: 'Completed' });

        res.json(scoreEntry);
        req.io.emit('scoresUpdated');
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   DELETE /api/scores/:id
// @desc    Delete a score entry
// @access  Private (Admin)
router.delete('/:id', authMiddleware, async (req, res) => {
    try {
        await Score.findByIdAndDelete(req.params.id);
        req.io.emit('scoresUpdated');
        res.json({ message: 'Score removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
