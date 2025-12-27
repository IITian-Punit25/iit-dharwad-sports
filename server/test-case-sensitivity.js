require('dotenv').config();
const mongoose = require('mongoose');
const Admin = require('./models/Admin');

const testCaseSensitivity = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/gc_registration');
        console.log('MongoDB Connected');

        const emailLower = 'admin@iitdh.ac.in';
        const emailUpper = 'Admin@iitdh.ac.in';

        const adminLower = await Admin.findOne({ email: emailLower });
        console.log(`Query '${emailLower}': ${adminLower ? 'Found' : 'Not Found'}`);

        const adminUpper = await Admin.findOne({ email: emailUpper });
        console.log(`Query '${emailUpper}': ${adminUpper ? 'Found' : 'Not Found'}`);

        if (adminLower && !adminUpper) {
            console.log('⚠️  Issue Confirmed: Email query is case-sensitive!');
        } else {
            console.log('✅ No issue: Email query handles case correctly (or both failed/succeeded).');
        }

        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

testCaseSensitivity();
