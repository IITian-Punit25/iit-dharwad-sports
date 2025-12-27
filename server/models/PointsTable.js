const mongoose = require('mongoose');

const pointsTableSchema = new mongoose.Schema({
    hostel: {
        type: String,
        required: true,
        unique: true
    },
    category: {
        type: String,
        enum: ['Boys', 'Girls'],
        required: true
    },
    gold: {
        type: Number,
        default: 0
    },
    silver: {
        type: Number,
        default: 0
    },
    bronze: {
        type: Number,
        default: 0
    },
    totalPoints: {
        type: Number,
        default: 0
    },
    eventsParticipated: {
        type: Number,
        default: 0
    },
    lastUpdated: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('PointsTable', pointsTableSchema);
