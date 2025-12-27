require('dotenv').config();
const mongoose = require('mongoose');
const Admin = require('./models/Admin');

const verifyLogin = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/gc_registration');
        console.log('MongoDB Connected');

        const email = 'admin@iitdh.ac.in';
        const password = 'admin123';

        const admin = await Admin.findOne({ email });
        if (!admin) {
            console.log('❌ Admin user NOT found');
            process.exit();
        }
        console.log('✅ Admin user found');
        console.log('Stored Hash:', admin.password);

        const isMatch = await admin.comparePassword(password);
        if (isMatch) {
            console.log('✅ Password match SUCCESS');
        } else {
            console.log('❌ Password match FAILED');
        }
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

verifyLogin();
