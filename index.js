const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

const app = express();

app.listen(process.env.PORT || 5000, () => {
  console.log(`Backend server is runnnig port number ${process.env.PORT}`);
});

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("DB connection successfully");
  } catch (err) {
    console.log(err);
  }
};

dbConnect();
