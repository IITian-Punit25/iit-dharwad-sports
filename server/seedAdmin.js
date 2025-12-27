require('dotenv').config();
const mongoose = require('mongoose');
const Admin = require('./models/Admin');

const seedAdmin = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/gc_registration');
        console.log('MongoDB Connected');

        const email = 'admin@iitdh.ac.in';
        const password = 'admin123'; // Change this in production!

        let admin = await Admin.findOne({ email });
        if (admin) {
            console.log('Admin user already exists');
            process.exit();
        }

        admin = new Admin({
            email,
            password
        });

        await admin.save();
        console.log(`Admin created successfully.\nEmail: ${email}\nPassword: ${password}`);
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seedAdmin();
