const mongoose = require("mongoose");
require('dotenv').config();


const mongoURI = process.env.MONGO_URI || process.env.uri; 

const connect = async () => {
    try {
        await mongoose.connect(mongoURI); 
        console.log("✅ MongoDB connected successfully");
    } catch (error) {
        console.log("❌ MongoDB connection failed:", error.message);
        // Important: If the DB fails, we usually want the app to stop
        process.exit(1); 
    }
};

module.exports = connect;