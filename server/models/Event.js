const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    sport: {
        type: String,
        required: true,
        enum: ['Cricket', 'Football', 'Basketball', 'Volleyball', 'Badminton', 'Table Tennis', 'Chess', 'Athletics', 'Squash', 'Weightlifting', 'Powerlifting', 'Yoga']
    },
    category: {
        type: String,
        required: true,
        enum: ['Boy', 'Girl', 'Mixed']
    },
    stage: {
        type: String,
        required: true // e.g., "League Match", "Quarter Final", "Semi Final", "Final", "Pool A Match"
    },
    team1: {
        type: String,
        required: true
    },
    team2: {
        type: String,
        required: true
    },
    date: {
        type: String, // YYYY-MM-DD
        required: true
    },
    time: {
        type: String, // HH:MM
        required: true
    },
    venue: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['Upcoming', 'Live', 'Completed', 'Postponed'],
        default: 'Upcoming'
    },
    pool: {
        type: String,
        enum: ['A', 'B', 'Knockout', 'League'],
        default: 'League'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Indexes for efficient queries
eventSchema.index({ sport: 1 });
eventSchema.index({ category: 1 });
eventSchema.index({ date: 1 });

module.exports = mongoose.model('Event', eventSchema);
