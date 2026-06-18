const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/firstTestingDB");
    console.log("Connected to DB");
  } catch (error) {
    console.log("Error in Connecting to DB", error);
  }
}

module.exports = connectDB;
