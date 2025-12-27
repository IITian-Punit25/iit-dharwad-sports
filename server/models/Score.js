const mongoose = require('mongoose');

const scoreSchema = new mongoose.Schema({
    eventId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event',
        required: true,
        unique: true
    },
    score: {
        type: String,
        required: true // e.g., "3 - 1", "21-19, 18-21, 21-15"
    },
    winner: {
        type: String,
        required: true
    },
    resultDetails: {
        type: String // Optional detailed description
    },
    pointsAwarded: {
        winner: { type: Number, default: 0 },
        runnerUp: { type: Number, default: 0 }
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

// Indexes for efficient queries
scoreSchema.index({ eventId: 1 });
scoreSchema.index({ winner: 1 });

module.exports = mongoose.model('Score', scoreSchema);
