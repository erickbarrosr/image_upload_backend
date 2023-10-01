const mongoose = require("mongoose");

require("dotenv").config();

mongoose.set("strictQuery", true);

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

async function main() {
  try {
    await mongoose.connect(
      `mongodb+srv://${dbUser}:${dbPassword}@cluster0.07surby.mongodb.net/?retryWrites=true&w=majority`
    );

    console.log("DB connected successfully!");
  } catch (error) {
    console.log(error);
  }
}

module.exports = main;
