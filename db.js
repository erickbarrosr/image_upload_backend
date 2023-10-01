const mongoose = require("mongoose");

require("dotenv").config();

mongoose.set("strictQuery", true);

async function connectToDatabase() {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.07surby.mongodb.net/?retryWrites=true&w=majority`
    );

    console.log("DB connected successfully!");
  } catch (error) {
    console.log(error);
  }
}

module.exports = connectToDatabase;
