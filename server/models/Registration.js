const mongoose = require('mongoose');
const validator = require('validator');

const registrationSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, 'Full Name is required'],
        trim: true
    },
    rollNumber: {
        type: String,
        required: [true, 'Roll Number is required'],
        unique: true,
        trim: true,
        uppercase: true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true,
        validate: {
            validator: function (v) {
                return v.endsWith('@iitdh.ac.in');
            },
            message: props => `${props.value} is not a valid IIT Dharwad email!`
        }
    },
    gender: {
        type: String,
        required: [true, 'Gender is required'],
        enum: ['Boy', 'Girl']
    },
    hostel: {
        type: String,
        required: [true, 'Hostel is required'],
        enum: ['Hostel 1', 'Hostel 2']
    },
    sports: {
        type: [String],
        validate: {
            validator: function (v) {
                if (this.gender === 'Boy') {
                    return v.length <= 3;
                } else if (this.gender === 'Girl') {
                    return v.length <= 4;
                }
                return true;
            },
            message: 'Sports selection limit exceeded!'
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Registration', registrationSchema);
